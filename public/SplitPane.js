var SplitPane= (function(){
var MIN_MIN_HEIGHT=20;
var MIN_MIN_WIDTH=20;
	var _SplitPane = function(params){
		var nPanelsWidth= params.nPanelsWidth;
		var nPanelsHeight = params.nPanelsHeight;
		var rowProfiles=params.rowProfiles;
		var columnProfiles = params.columnProfiles;
		var initialized=false;
		EventEnabledBuilder(this);
		var self = this;
		var panelRows=new PanelRows();
		var panelColumns=new PanelColumns();
		var slidersX=new Sliders();
		var slidersY=new Sliders();
		var currentDimensions;
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
		this.initialize=initialize;
		function resize(){
			if(!initialized)
			return initialize();
			updateSliderVisibility();
			resizePanelColumnsPositionDimensions(getWidth(), getSliderWidth(), getProportionallyAdaptedPanelColumnWidth);
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
			captureCurrentDimensions();
		}
		function initialize(){
			initialized=true;
			updateSliderVisibility();
			resizePanelColumnsPositionDimensions(getWidth(), getSliderWidth(), function(panelColumn){ return panelColumn.getDesiredWidth();});
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
			captureCurrentDimensions();
		}
		function getProportionallyAdaptedPanelColumnWidth(panelColumn){
			var p = getWidth()/currentDimensions.width;
			return p*panelColumn.getWidth();
		}
		function captureCurrentDimensions(){
			currentDimensions = {width: getWidth(), height:getHeight()};
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
			var currentY=0;
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
				if(!lastOne)
					panelRow.getAssociatedSlider().setTop(currentY+desiredHeight);
				else
					panelRow.setBottom(heightForPanels);
				
				currentY = currentY+desiredHeight+sliderHeight;
				remainingHeight = heightForPanels - currentY;
			}	
		}
		function resizePanelColumnsPositionDimensions(widthForPanels, sliderWidth, getWidth){
			var remainingWidth = widthForPanels;
			var panelColumnsVisible = panelColumns.getVisible();
			var length = panelColumnsVisible.length;
			var currentX=0;
			panelColumnsVisible[0].setLeft(0);
			for(var x=0; x<length; x++){
				var panelColumn = panelColumnsVisible[x];
				var rowsToRightNotIncludingThisOne = panelColumnsVisible.slice(x+1);
				var nColumnsToRightNotIncludingThisOne = rowsToRightNotIncludingThisOne.length;
				var minWidthRequiredToRight=rowsToRightNotIncludingThisOne.sum(function(panelColumn){return panelColumn.getMinWidth();})+(nColumnsToRightNotIncludingThisOne*sliderWidth);
				
				var width = getWidth(panelColumn);
				var lastOne = x>=length-1;
				if(!width||lastOne)
					width = (remainingWidth-(nColumnsToRightNotIncludingThisOne*sliderWidth))/(nColumnsToRightNotIncludingThisOne+1);
				if(remainingWidth - width < minWidthRequiredToRight)
					width = remainingWidth - minWidthRequiredToRight;
				if(!lastOne)
					panelColumn.getAssociatedSlider().setLeft(currentX+width);
				else
					panelColumn.setRight(widthForPanels);
				
				currentX = currentX+width+sliderWidth;
				remainingWidth = widthForPanels - currentX;
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
			return element.getBoundingClientRect().width;
		}
		function getHeight(){
			return element.getBoundingClientRect().height;
		}
		function createPanels(){
			createPanelColumns();
			createPanelRows();
		}
		function createPanelRows(){
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
				panelRow.addEventListener('setvisible', onSetVisible);
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
				panelColumn.addEventListener('setvisible', onSetVisible);
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
		function onSetVisible(){
			initialize();
		}
	};
	function PanelRow(params){
		EventEnabledBuilder(this);
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
		this.setAssociatedSlider = function(value){//bottom slider
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
			dispatchSetVisible(value);
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
		function dispatchSetVisible(visible){
			self.dispatchEvent({type:'setvisible', visible:visible});
		}
	}
	function PanelColumn(params){
		EventEnabledBuilder(this);
		var self = this;
		var panelColumnLeft = params.panelColumnLeft;
		var getPaneWidth = params.getPaneWidth;
		var minWidth = params.minWidth;
		var visible=true;
		if(!minWidth)minWidth=Dimension.pixels(MIN_MIN_WIDTH);
		else if (!minWidth.isDimension) minWidth = new Dimension(minWidth);
		
		var maxWidth = params.maxWidth;
		if(maxWidth&&!maxWidth.isDimension)maxWidth = new Dimension(maxWidth);
		
		var desiredWidth = params.width;
		if(desiredWidth&&!desiredWidth.isDimension)desiredWidth = new Dimension(desiredWidth);
		
		var panels=[];
		var columnRight;
		var associatedSlider;
		this.getFirstPanel = function(){return panels[0];};
		this.setAssociatedSlider = function(value){//rhs slider
			associatedSlider = value;
		};
		this.getAssociatedSlider = function(){
			return associatedSlider;
		};
		this.setVisible = function(value){
			visible = value;
			each(panels, function(panel){
				panel.setVisible(value);
			});
			dispatchSetVisible(value);
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
		this.setLeft = function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.getLeft = function(){
			return panels[0].getLeft();
		};
		this.setLeft=function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.setRight = function(right){
			var left = self.getLeft();
			self.setWidth(right-left);
		};
		this.getWidth = function(){
			return panels[0].getWidth();
		};
		this.getDesiredWidth = function(){
			return getDimensionPixels(desiredWidth);
		};
		this.setWidth = function(value){
			each(panels, function(panel){
				panel.setWidth(value);
			});
		};
		this.getMinWidth = function(){
			return getDimensionPixels(minWidth);
		};
		
		function getDimensionPixels(dimension){
			if(!dimension)return;
			switch(dimension.getUnit()){
				case Dimension.PX:
					return dimension.getValue();
				case Dimension.PERCENT:
					return dimension.getValue()*getPaneWidth()/100;
			}
		}
		function dispatchSetVisible(visible){
			self.dispatchEvent({type:'setvisible', visible:visible});
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
			leftPanelColumn.setRight(value);
			var rightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			rightPanelColumn&&rightPanelColumn.setLeft(value+self.getWidth());
		};
		this.getWidth= function(){
			return element.getBoundingClientRect().width;
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
			element.style.left=String(x)+'px';
			leftPanelColumn.setWidth(leftPanelColumnStartWidth+dx);
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
			rightPanelColumnStartWidth = currentRightPanelColumn.getWidth();
			rightPanelColumnStartLeft = currentRightPanelColumn.getLeft();
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
			return element.getBoundingClientRect().width;
		}
		function getConstraintsLeftOfSlider(){
			var width = getWidth();
			var xLeft = getXLeft();
			var minX = xLeft-(leftPanelColumn.getWidth()-leftPanelColumn.getMinWidth());
			var maxX = xLeft+(currentRightPanelColumn.getWidth() - currentRightPanelColumn.getMinWidth());//right now only giving minimum but no maximum sizes
			return {minX:minX, maxX:maxX};
		}
	}
	function SliderY(params){
		var self = this;
		var getPanelHeight = params.getPaneleHeight;
		var getNextSiblingVisible= params.getNextSiblingVisible;
		var topPanelRow=params.topPanelRow;	
		var bottomPanelRowStartHeight;
		var bottomPanelRowStartTop;
		var currentBottomPanelRow;
		var topPanelRowStartHeight;
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
			return element.getBoundingClientRect().height;
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
			return element.getBoundingClientRect().width;
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