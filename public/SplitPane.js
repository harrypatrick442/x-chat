var SplitPane= (function(){
const MIN_MIN_HEIGHT=20;
const MIN_MIN_WIDTH=20;
	var _SplitPane = function(params){
		var nPanelsWidth= params.nPanelsWidth;
		var nPanelsHeight = params.nPanelsHeight;
		var rowProfiles=params.rowProfiles;
		var columnProfiles = params.columnProfiles;
		EventEnabledBuilder(this);
		var self = this;
		var panelRows=[];
		var panelColumns=[];
		var slidersX=[];
		var slidersY=[];
		var element = E.DIV();
		element.classList.add('split-pane');
		this.getElement = function(){
			return element;
		};
		this.getPanelColumns=function(){
			return panelColumns;
		};
		this.getPanelRows=function(){
			return panelRows;
		};
		this.getPanelXY=function(x, y){
			var column = panelColumns[x];
			return column.getPanel(y);
		};
		createPanels();
		createSliders();
		this.initialize=initializePositionDimensions;
		function initializePositionDimensions(){
			new Task(function(){
			initializePanelColumnsPositionDimensions(getWidth(), getSliderWidth());
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
			}).run();
		}
		function initializePanelColumnsPositionDimensions(widthForPanels, sliderWidth){
			var remainingWidth = widthForPanels;
			var topWidth=0;
			for(var x=0; x<nPanelsWidth; x++){//tnake up what space they can up to the default width from top to bottom. so the bottom misses out on optional space.
				var panelColumn = panelColumns[x];
				var columnsToRightNotIncludingThisOne = getPanelColumnsToRight(x);
				var nColumnsToRightNotIncludingThisOne = columnsToRightNotIncludingThisOne.length;
				var minWidthRequiredToRight=columnsToRightNotIncludingThisOne.sum(function(panelColumn){return panelColumn.getMinWidth();})+(nColumnsToRightNotIncludingThisOne*sliderWidth);
				var width = panelColumn.getWidth();
				if(!width)
					width = (remainingWidth-(nColumnsToRightNotIncludingThisOne*sliderWidth))/(nColumnsToRightNotIncludingThisOne+1);
				if(remainingWidth - width < minWidthRequiredToRight)
					width = remainingWidth - minWidthRequiredToRight;
				if(width < panelColumn.getMinWidth())throw new Error('Not enough space for specified widths');
				panelColumn.setWidth(width);
				var left = widthForPanels- remainingWidth;
				panelColumn.setLeft(left);
				if(x>0)
				{
					var sliderX = slidersX[x-1];
					sliderX.setLeft(left-sliderWidth);
				}
				remainingWidth = remainingWidth - (width+sliderWidth);
			}		
		}
		function initializePanelRowsPositionDimensions(heightForPanels, sliderHeight){
			var remainingHeight = heightForPanels;
			var topHeight=0;
			console.log(nPanelsHeight);
			for(var y=0; y<nPanelsHeight; y++){
				var panelRow = panelRows[y];
				var rowsToBottomNotIncludingThisOne = getPanelRowsToBottom(y);
				var nRowsToBottomNotIncludingThisOne=rowsToBottomNotIncludingThisOne.length;
				var minHeightRequiredToBottom=rowsToBottomNotIncludingThisOne.sum(function(panelRow){return panelRow.getMinHeight();})+(nRowsToBottomNotIncludingThisOne*sliderHeight);
				var height = panelRow.getHeight();
				if(!height)
					height = (remainingHeight-(nRowsToBottomNotIncludingThisOne*sliderHeight))/(nRowsToBottomNotIncludingThisOne+1);
				if(remainingHeight - height < minHeightRequiredToBottom)
					height = remainingHeight - minHeightRequiredToBottom;
				if(height < panelRow.getMinHeight())throw new Error('Not enough space for specified heights');
				panelRow.setHeight(height);
				var top = heightForPanels- remainingHeight;
				panelRow.setTop(top);
				if(y>0)
				{
					var sliderY = slidersY[y-1];
					sliderY.setTop(top-sliderHeight);
				}
				remainingHeight = remainingHeight - (height+sliderHeight);
			}	
		}
		function getSliderWidth(){
			if(slidersX.length<1)return 0;
			return slidersX[0].getWidth();
		}
		function getSliderHeight(){
			if(slidersY.length<1)return 0;
			return slidersY[0].getHeight();
		}
		function getPanelColumnsToRight(x){
			var list =[];
			for(var i=x+1; i<panelColumns.length; i++){
				list.push(panelColumns[i]);
			}
			return list;
		}
		function getPanelRowsToBottom(y){
			var list =[];
			for(var i=y+1; i<panelRows.length; i++){
				list.push(panelRows[i]);
			}
			return list;
		}
		function getWidth(){
			return element.clientWidth;
		}
		function getHeight(){
			return element.clientHeight;
		}
		function createPanels(){
			createPanelColumns();
			var previousPanelRow;
			for(var y=0; y<nPanelsHeight; y++){
				var currentPanelRow=[];
				var rowProfile = rowProfiles?rowProfiles[y]:undefined;
				for(var x=0; x<nPanelsWidth; x++){
					var panel = new Panel({
						isLeft:x<1?true:false,
						isRight:x>=nPanelsWidth-1?true:false,
						isTop:y<1?true:false,
						isBottom:y>=nPanelsHeight-1?true:false,
					});
					element.appendChild(panel.getElement());
					panelColumns[x].addNextPanel(panel);
					currentPanelRow.push(panel);
				}
				var panelRow = new PanelRow({
					rowAbove:previousPanelRow,
					panels:currentPanelRow,
					minHeight:rowProfile?rowProfile.minHeight:undefined,
					height:rowProfile?rowProfile.height:undefined
				});
				previousPanelRow&&previousPanelRow.setPanelRowBellow(panelRow);
				previousPanelRow = panelRow;
				panelRows.push(panelRow);
			}
		}
		function createPanelColumns(){
			var previousPanelColumn;
			for(var i=0; i<nPanelsWidth; i++)
			{
				var columnProfile = columnProfiles?columnProfiles[i]:undefined;
				var panelColumn=new PanelColumn({
					panelColumnLeft:panelColumns[i-1],
					minWidth:columnProfile?columnProfile.minWidth:undefined,
					width:columnProfile?columnProfile.width:undefined
				});
				previousPanelColumn&&previousPanelColumn.setPanelColumnRight(panelColumn);
				previousPanelColumn=panelColumn;
				panelColumns.push(panelColumn);
			}
		}
		function createSliders(){
			for(var x=0; x<nPanelsWidth-1; x++){
				var slider = new SliderX({leftPanelColumn:panelColumns[x], rightPanelColumn:panelColumns[x+1]});
				slidersX.push(slider);
				element.appendChild(slider.getElement());
			}
			for(var y=0; y<nPanelsHeight-1; y++){
				var slider = new SliderY({topPanelRow:panelRows[y], bottomPanelRow:panelRows[y+1]});
				slidersY.push(slider);
				element.appendChild(slider.getElement());
			}
		}
	};
	
	
	
	
	function PanelRow(params){
		var panels = params.panels;
		var rowAbove = params.rowAbove;
		
		var minHeight = params.minHeight;
		if(!minHeight)minHeight=MIN_MIN_HEIGHT;
		else if(!minHeight.isDimension)minHeight = new Dimension(minHeight);
		
		var maxHeight = params.maxHeight;
		if(maxHeight&&!maxHeight.isDimension)maxHeight = new Dimension(maxHeight);
		
		var height = params.height;
		if(height&&!height.isDimension)height = new Dimension(height);
		
		var rowBellow;
		this.getTop = function(){
			return panels[0].getTop();
		};
		this.setTop = function(value){
			each(panels, function(panel){
				panel.setTop(value);
			});
		};
		this.setPanelRowBellow = function(value){
			rowBellow = value;
		};
		this.getHeight = function(){
			return panels[0].getHeight();
		};
		this.setHeight = function(value){
			each(panels, function(panel){
				panel.setHeight(value);
			});
		};
		this.setHeight = function(value){
			height = value;
			each(panels, function(panel){
				panel.setHeight(value);
			});
		};
		this.getMinHeight = function(){
			return minHeight;
		};
	}
	
	
	
	
	function PanelColumn(params){
		var self = this;
		var panelColumnLeft = params.panelColumnLeft;
		
		var minWidth = params.minWidth;
		if(!minWidth)minWidth=MIN_MIN_WIDTH;
		else if (!minWidth.isDimension) minWidth = new Dimension(minWidth);
		
		var maxWidth = params.maxWidth;
		if(maxWidth&&!maxWidth.isDimension)maxWidth = new Dimension(maxWidth);
		
		var panels=[];
		var columnRight;
		this.setLeft = function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.getPanel = function(i){
			return panels[i];
		};
		this.setPanelColumnRight = function(value){
			columnRight = value;
		};
		this.addNextPanel= function(panel){
			panels.push(panel);
		};
		this.getLeft = function(){
			return panels[0].getLeft();
		};
		this.setLeft=function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.getWidth = function(){
			return panels[0].getWidth();
		};
		this.setWidth = function(value){
			each(panels, function(panel){
				panel.setWidth(value);
			});
		};
		this.getMinWidth = function(){
			return minWidth;
		};
		var width = params.width
		if(width){
			if(!width.isDimension)width = new Dimension(width);
			self.setWidth(width);
		}
	}
	function Panel(params){
		var self = this;
		var element = E.DIV();
		element.classList.add('panel');
		params.isLeft&&element.classList.add('left');
		params.isRight&&element.classList.add('right');
		params.isTop&&element.classList.add('top');
		params.isBottom&&element.classList.add('bottom');
		this.getElement = function(){
			return element;
		};
		this.setTop=function(value){
			element.style.top= String(value)+'px';
		};
		this.setLeft=function(value){
			element.style.left=String(value)+'px';
		};
		this.setWidth = function(value){
			element.style.width = String(value)+'px';
		};
		this.getWidth = function(){
			return element.clientWidth;
		};
		this.getLeft = function(){
			return element.offsetLeft;
		};
		this.getTop = function(){
			return element.offsetTop;
		};
		this.setHeight = function(value){
			element.style.height = String(value)+'px';
		};
		this.getHeight = function(){
			return element.clientHeight;
		};
	}
	function SliderX(params){
	var self = this;
		var getPanelWidth = params.getPanelWidth;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('x');
		var leftPanelColumn = params.leftPanelColumn;
		var rightPanelColumn = params.rightPanelColumn;
		var leftPanelColumnStartWidth;
		var rightPanelColumnStartWidth;
		var rightPanelColumnStartLeft;
		var startLeft;
		this.setLeft=function(value){
			element.style.left=String(value)+'px';
		};
		this.getWidth= function(){
			return element.clientWidth;
		};
		this.setRightPanelColumn= function(value){
			rightPanelColumn = value;
		};
		this.getConstraints=function(){
			captureInitialVariables();
			return getConstraintsLeftOfSlider();
		};
		this.getElement = function(){
			return element;
		};
		this.getX=getXLeft;	
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			var x = position.x;
			var dx = x-startLeft;
			leftPanelColumn.setWidth(leftPanelColumnStartWidth+dx);
			element.style.left=String(x)+'px';
			rightPanelColumn.setWidth(rightPanelColumnStartWidth-dx);
			rightPanelColumn.setLeft(rightPanelColumnStartLeft+dx);
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
		function captureInitialVariables(){
			leftPanelColumnStartWidth= leftPanelColumn.getWidth();
			rightPanelColumnStartWidth = rightPanelColumn.getWidth();
			rightPanelColumnStartLeft = rightPanelColumn.getLeft();
			startLeft = getXLeft();
		}
		var dragManager = new DragManager({
			handle:this
		});
		function getXLeft(){
			return element.offsetLeft;
		}
		function getXRight(){
			return getXLeft()+getWidth();
		}
		function getWidth(){
			return element.clientWidth;
		}
		function getConstraintsLeftOfSlider(){
			var width = getWidth();
			var xLeft = getXLeft();
			var minX = xLeft-(leftPanelColumn.getWidth()-leftPanelColumn.getMinWidth());
			var maxX = xLeft+(rightPanelColumn.getWidth() - rightPanelColumn.getMinWidth());//right now only giving minimum but no maximum sizes
			return {minX:minX, maxX:maxX};
		}
	}
	function SliderY(params){
		var getPanelHeight = params.getPaneleHeight;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('y');
		var topPanelRow=params.topPanelRow;
		var bottomPanelRow=params.bottomPanelRow;
		var topPanelColumnStartHeight;
		var bottomPanelRowStartHeight;
		var bottomPanelRowStartTop;
		var startTop;
		this.setTop= function(value){
			element.style.top=String(value)+'px';
		};
		this.getHeight = function(){
			return element.clientHeight;
		};
		this.setBottomPanelRow = function(value){
			bottomPanelRow = value;
		};
		this.getConstraints=function(){
			var constraints = getConstraintsTopOfSlider();
			captureInitialVariables();
			return constraints;
		};
		this.getElement = function(){
			return element;
		};
		this.getX=function(){
			return element.offsetLeft;
		};
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			var y = position.y;
			var dy = y-startTop;
			element.style.top=String(position.y)+'px';
			topPanelRow.setHeight(topPanelRowStartHeight+dy);
			bottomPanelRow.setHeight(bottomPanelRowStartHeight-dy);
			bottomPanelRow.setTop(bottomPanelRowStartTop+dy);
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
		var dragManager = new DragManager({
			handle:this
		});
		function captureInitialVariables(){
			topPanelRowStartHeight= topPanelRow.getHeight();
			bottomPanelRowStartHeight = bottomPanelRow.getHeight();
			bottomPanelRowStartTop = bottomPanelRow.getTop();
			startTop = getYTop();
		}
		function getYTop(){
			return element.offsetTop;
		}
		function getYBottom(){
			return getYTop()+getHeight();
		}
		function getHeight(){
			return element.clientHeight;
		}
		function getConstraintsTopOfSlider(){
			var height = getHeight();
			var yTop = getYTop();
			var minY = yTop-(topPanelRow.getHeight()-topPanelRow.getMinHeight());
			var maxY = yTop+(bottomPanelRow.getHeight() - bottomPanelRow.getMinHeight());//right now only giving minimum but no maximum sizes
			return {minY:minY, maxY:maxY};
		}
	}
	return _SplitPane;
})();