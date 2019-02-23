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
		var panelRows=new PanelRows();
		var panelColumns=new PanelColumns();
		var slidersX=new Sliders();
		var slidersY=new Sliders();
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
		this.getPanelRow = panelRows.get;
		this.getPanelColumn = panelColumns.get;
		this.getPanelXY=function(x, y){
			var column = panelColumns.get(x);
			return column.getPanel(y);
		};
		createPanels();
		createSliders();
		this.resize=resize;
		window.res = resize;
		function resize(){
			updateSliderVisibility();
			initializePanelColumnsPositionDimensions(getWidth(), getSliderWidth());
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
		}
		function initializePanelColumnsPositionDimensions(widthForPanels, sliderWidth){
			var remainingWidth = widthForPanels;
			var topWidth=0;
			var panelColumnsVisible = panelColumns.getVisible();
			for(var x=0; x<panelColumnsVisible.length; x++){
				var panelColumn = panelColumnsVisible[x];
				var columnsToRightNotIncludingThisOne = panelColumnsVisible.leave(x+1).toList();
				var nColumnsToRightNotIncludingThisOne = columnsToRightNotIncludingThisOne.length;
				var minWidthRequiredToRight=columnsToRightNotIncludingThisOne.sum(function(panelColumn){return panelColumn.getMinWidth();})+(nColumnsToRightNotIncludingThisOne*sliderWidth);
				var desiredWidth = panelColumn.getDesiredWidth();
				if(!desiredWidth)
					desiredWidth = (remainingWidth-(nColumnsToRightNotIncludingThisOne*sliderWidth))/(nColumnsToRightNotIncludingThisOne+1);
				if(remainingWidth - desiredWidth < minWidthRequiredToRight)
					desiredWidth = remainingWidth - minWidthRequiredToRight;
				//if(desiredWidth < panelColumn.getMinWidth())throw new Error('Not enough space for specified widths');
				panelColumn.setWidth(desiredWidth);
				var left = widthForPanels- remainingWidth;
				panelColumn.setLeft(left);
				remainingWidth = remainingWidth - (desiredWidth+sliderWidth);
			}		
		}
		function PanelColumns(){
			return new PanelCollections();
		}
		function PanelRows(){
			return new PanelCollections();
		}
		function PanelCollections(){
			var list =[];
			this.add = function(panelCollection){
				list.push(panelCollection);
			};
			this.get=function(x){
				return list[x];
			};
			this.getVisible = function(){
				var visibles=[];
				each(list, function(panelCollection){
					if(panelCollection.getVisible())
						visibles.push(panelCollection);
				});
				return visibles;
			};
			this.count=function(){return list.length;};
			this.getNextSiblingVisible = function(panelCollection){//when a panel gets hidden it takes its right hand side slider with it. Therefore
			//the panel to the right of a slider may not be the next one but cos that may be hidden and its the slider to the right of that, not this slider,
			//which will have been hidden.
			//The exception to that is when an end panel gets hidden but since the slider is taken with it its a non issue.
				for(var i=0; i<list.length;i++){
					var pc = list[i]; 
					if(pc!=panelCollection)continue;
					for(var j=i+1; j<list.length; j++){
						var pc2 = list[j];
						if(pc2.getVisible())
							return pc2;
					}
					return;
				}
			};
		}
		function updateSliderVisibility(){
			slidersX.updateVisibility();
			slidersY.updateVisibility();
		}
		function initializePanelRowsPositionDimensions(heightForPanels, sliderHeight){
			var remainingHeight = heightForPanels;
			var panelRowsVisible = panelRows.getVisible();
			var length = panelRowsVisible.length;
			var currentX=0;
			panelRowsVisible[0].setTop(0);
			for(var y=0; y<length; y++){
				var panelRow = panelRowsVisible[y];
				var rowsToBottomNotIncludingThisOne = panelRowsVisible.slice(y+1);
				var nRowsToBottomNotIncludingThisOne = rowsToBottomNotIncludingThisOne.length;
				var minHeightRequiredToBottom=rowsToBottomNotIncludingThisOne.sum(function(panelRow){return panelRow.getMinHeight();})+(nRowsToBottomNotIncludingThisOne*sliderHeight);
				
				var desiredHeight = panelRow.getDesiredHeight();
				var lastOne = y>=length-1;
				if(!desiredHeight||lastOne)
					desiredHeight = (remainingHeight-(nRowsToBottomNotIncludingThisOne*sliderHeight))/(nRowsToBottomNotIncludingThisOne+1);
				if(remainingHeight - desiredHeight < minHeightRequiredToBottom)
					desiredHeight = remainingHeight - minHeightRequiredToBottom;
				console.log('desiredHeight');
				console.log(desiredHeight);
				if(!lastOne)
					panelRow.getAssociatedSlider().setTop(currentX+desiredHeight);
				else
					panelRow.setBottom(heightForPanels);
				
				currentX = currentX+desiredHeight+sliderHeight;
				remainingHeight = heightForPanels - currentX;
			}	
		}
		function getSliderWidth(){
			if(slidersX.count()<1)return 0;
			return slidersX.get(0).getWidth();
		}
		function getSliderHeight(){
			if(slidersY.count()<1)return 0;
			return slidersY.get(0).getHeight();
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
					panelColumns.get(x).addNextPanel(panel);
					currentPanelRow.push(panel);
				}
				var panelRow = new PanelRow({
					rowAbove:previousPanelRow,
					panels:currentPanelRow,
					minHeight:rowProfile?rowProfile.minHeight:undefined,
					height:rowProfile?rowProfile.height:undefined,
					getPaneHeight:getHeight
				});
				previousPanelRow = panelRow;
				panelRows.add(panelRow);
			}
		}
		function createPanelColumns(){
			var previousPanelColumn;
			for(var i=0; i<nPanelsWidth; i++)
			{
				var columnProfile = columnProfiles?columnProfiles[i]:undefined;
				var panelColumn=new PanelColumn({
					panelColumnLeft:panelColumns.get(i-1),
					minWidth:columnProfile?columnProfile.minWidth:undefined,
					width:columnProfile?columnProfile.width:undefined
				});
				previousPanelColumn&&previousPanelColumn.setPanelColumnRight(panelColumn);
				previousPanelColumn=panelColumn;
				panelColumns.add(panelColumn);
			}
		}
		function createSliders(){
			for(var x=0; x<nPanelsWidth-1; x++){
				var slider = new SliderX({leftPanelColumn:panelColumns.get(x), getNextSiblingVisible:panelColumns.getNextSiblingVisible});
				slidersX.add(slider);
				element.appendChild(slider.getElement());
			}
			for(var y=0; y<nPanelsHeight-1; y++){
				var slider = new SliderY({topPanelRow:panelRows.get(y), getNextSiblingVisible:panelRows.getNextSiblingVisible});
				slidersY.add(slider);
				element.appendChild(slider.getElement());
			}
		}
	};
	function PanelRow(params){
		var self = this;
		var panels = params.panels;
		var getPaneHeight = params.getPaneHeight;
		var minHeight = params.minHeight;
		var visible=true;
		if(!minHeight)minHeight=Dimension.pixels(MIN_MIN_HEIGHT);
		else if(!minHeight.isDimension)minHeight = new Dimension(minHeight);
		
		var maxHeight = params.maxHeight;
		if(maxHeight&&!maxHeight.isDimension)maxHeight = new Dimension(maxHeight);
		
		var desiredHeight = params.height;
		if(desiredHeight&&!desiredHeight.isDimension)desiredHeight = new Dimension(desiredHeight);
		var associatedSlider;
		this.getFirstPanel = function(){
			return panels[0];
		};
		this.setAssociatedSlider = function(value){//rhs slider
			associatedSlider = value;
		};
		this.getAssociatedSlider = function(){
			return associatedSlider;
		};
		this.getTop = function(){
			return panels[0].getTop();
		};
		this.setVisible = function(value){
			visible = value;
			each(panels, function(panel){
				panel.setVisible(value);
			});
		};
		this.getVisible = function(){
			return visible;
		};
		this.setTop = function(value){
			each(panels, function(panel){
				panel.setTop(value);
			});
		};
		this.setBottom = function(bottom){
			var top = self.getTop();
			self.setHeight(bottom-top);
		};
		this.getDesiredHeight = function(){
			return getDimensionPixels(desiredHeight);
		};
		this.getHeight = function(){
			return panels[0].getHeight();
		};
		this.setHeight = function(value){
			each(panels, function(panel){
				panel.setHeight(value);
			});
		};
		this.getMinHeight = function(){
			return getDimensionPixels(minHeight);
		};
		function getDimensionPixels(dimension){
			if(!dimension)return;
			switch(dimension.getUnit()){
				case Dimension.PX:
					return dimension.getValue();
				case Dimension.PERCENT:
					return dimension.getValue()*getPaneHeight()/100;
			}
		}
	}
	function PanelColumn(params){
		var self = this;
		var panelColumnLeft = params.panelColumnLeft;
		
		var minWidth = params.minWidth;
		if(!minWidth)minWidth=Dimension.pixels(MIN_MIN_WIDTH);
		else if (!minWidth.isDimension) minWidth = new Dimension(minWidth);
		
		var maxWidth = params.maxWidth;
		if(maxWidth&&!maxWidth.isDimension)maxWidth = new Dimension(maxWidth);
		
		var desiredWidth = params.width;
		if(desiredWidth&&!desiredWidth.isDimension)desiredWidth = new Dimension(desiredWidth);
		
		var panels=[];
		var columnRight;
		var visible=true;
		var associatedSlider;
		this.setAssociatedSlider = function(value){//rhs slider
			associatedSlider = value;
		};
		this.setLeft = function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.setVisible = function(value){
			visible = value;
			each(panels, function(panel){
				panel.setVisible(value);
			});
		};
		this.getVisible = function(){
			return visible;
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
		this.getDesiredWidth = function(){
			if(!desiredWidth)return;
			switch(desiredWidth.getUnit()){
				case Dimension.PX:
					return desiredWidth.getValue();
				case Dimension.PERCENT:
					return desiredWidth.getValue()*getPaneWidth()/100;
			}
		};
		this.setWidth = function(value){
			each(panels, function(panel){
				panel.setWidth(value);
			});
		};
		this.getMinWidth = function(){
			return minWidth;
		};
		
		function getDimensionPixels(dimension){
			if(!dimension)return;
			switch(dimension.getUnit()){
				case Dimension.PX:
					return dimension.getValue();
				case Dimension.PERCENT:
					return dimension.getValue()*getPaneHeight()/100;
			}
		}
	}
	function Panel(params){
		var self = this;
		var element = E.DIV();
		element.classList.add('panel');
		params.isLeft&&element.classList.add('panel-left');
		params.isRight&&element.classList.add('panel-right');
		params.isTop&&element.classList.add('panel-top');
		params.isBottom&&element.classList.add('panel-bottom');
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
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
		var leftPanelColumn = params.leftPanelColumn;
		var getNextSiblingVisible = params.getNextSiblingVisible;
		var leftPanelColumnStartWidth;
		var rightPanelColumnStartWidth;
		var rightPanelColumnStartLeft;
		var startLeft;
		var currentRightPanelColumn;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('x');
		leftPanelColumn.setAssociatedSlider(this);
		this.updateVisibility= function(){
			if(!leftPanelColumn.getVisible())
			{
				self.setVisible(false);
				return;
			}
			var rightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			if(!rightPanelColumn||!rightPanelColumn.getVisible()){
				self.setVisible(false);
				return;
			}
			self.setVisible(true);
		};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.setLeft=function(value){
			element.style.left=String(value)+'px';
		};
		this.getWidth= function(){
			return element.clientWidth;
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
			currentRightPanelColumn.setWidth(rightPanelColumnStartWidth-dx);
			currentRightPanelColumn.setLeft(rightPanelColumnStartLeft+dx);
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
		function captureInitialVariables(){
			currentRightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			leftPanelColumnStartWidth= leftPanelColumn.getWidth();
			rightPanelColumnStartWidth = currnetRightPanelColumn.getWidth();
			rightPanelColumnStartLeft = currnetRightPanelColumn.getLeft();
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
			var maxX = xLeft+(currnetRightPanelColumn.getWidth() - currnetRightPanelColumn.getMinWidth());//right now only giving minimum but no maximum sizes
			return {minX:minX, maxX:maxX};
		}
	}
	function SliderY(params){
		var self = this;
		var getPanelHeight = params.getPaneleHeight;
		var getNextSiblingVisible= params.getNextSiblingVisible;
		var topPanelRow=params.topPanelRow;
		var topPanelColumnStartHeight;
		var bottomPanelRowStartHeight;
		var bottomPanelRowStartTop;
		var currentBottomPanelRow;
		var startTop;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('y');
		topPanelRow.setAssociatedSlider(this);
		this.updateVisibility= function(){
			if(!topPanelRow.getVisible())
			{
				self.setVisible(false);
				return;
			}
			var bottomPanelRow = getNextSiblingVisible(topPanelRow);
			if(!bottomPanelRow||!bottomPanelRow.getVisible()){
				self.setVisible(false);
				return;
			}
			self.setVisible(true);
		};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.setTop= function(value){
			element.style.top=String(value)+'px';
			topPanelRow.setBottom(value);
			var bottomPanelRow = getNextSiblingVisible(topPanelRow);
			bottomPanelRow&&bottomPanelRow.setTop(value+self.getHeight());
		};
		this.getHeight = function(){
			return element.clientHeight;
		};
		this.getConstraints=function(){
			captureInitialVariables();
			return getConstraintsTopOfSlider();
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
			currentBottomPanelRow.setHeight(bottomPanelRowStartHeight-dy);
			currentBottomPanelRow.setTop(bottomPanelRowStartTop+dy);
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
			currentBottomPanelRow=getNextSiblingVisible(topPanelRow);
			topPanelRowStartHeight= topPanelRow.getHeight();
			bottomPanelRowStartHeight = currentBottomPanelRow.getHeight();
			bottomPanelRowStartTop = currentBottomPanelRow.getTop();
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
			var maxY = yTop+(currentBottomPanelRow.getHeight() - currentBottomPanelRow.getMinHeight());//right now only giving minimum but no maximum sizes
			return {minY:minY, maxY:maxY};
		}
	}
	function Sliders(){
		var list=[];
		this.add = function(slider){
			list.push(slider);
		};
		this.count = function(){
			return list.length;
		};
		this.get = function(i){
			return list[i];
		};
		this.updateVisibility = function(){
			each(list, function(slider){slider.updateVisibility();});
		};
	}
	//ToDo  only visible sliders so they get positioned in correct places. Or position them along with panels. (associated slider);
	return _SplitPane;
})();