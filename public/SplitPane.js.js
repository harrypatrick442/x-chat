var SplitPane= (function(){
	var _SplitPane = function(params){
		var nPanelsWidth= params.nPanelsHeight;
		var nPanelsWidth = params.nPanelsHeight;
		EventEnabledBuilder(this);
		var self = this;
		var panelRows=[];
		var panelColumns=[];
		var slidersX=[];
		var slidersY=[];
		var element = E.DIV();
		element.classList.add('splitpane');
	
		this.getElement = function(){
			return element;
		};
		this.getPanels=function(){
			
		}
		function getWidth(){
			return element.clientWidth;
		}
		function getHeight(){
			return element.clientHeight;
		}
		function createPanels(){
			var previousPanelColumn;
			for(var i=0; i<nPanelsWidth; i++)
			{
				var panelColumn=new PanelColumn({panelColumnLeft:panelColumns[i-1]};
				previousPanelColumn&&previousPanelColumn.setPanelColumnRight(panelColumn);
				previousPanelColumn=panelColumn;
				panelColumns.push(panelColumn));
			}
			var previousPanelRow;
			for(var y=0; y<nPanelsHeight; y++){
				var currentRow=[];
				for(var x=0; x<nPanelsWidth; x++){
					var panel = new Panel({
						isLeft:x<1?true:false,
						isRight:x>=nPanelsWidth-1?true:false,
						isTop:y<1?true:false,
						isBottom:y>=nPanelsHeight-1?true:false,
						
					});
					panelColumns[x].addNextPanel(panel);
					currentRow.push(panel);
				}
				var panelRow = new PanelRow({rowAbove:previousRow, panels:currentRow});
				previousPanelRow&&previousPanelRow.setPanelRowBellow(panelRow);
				previousPanelRow = panelRow;
				panelRows.push(panelRow);
			}
		}
		function createSliders(){
			for(var x=0; x<nPanelsWidth-1; x++){
				new Slider(panelRows[x]
			}
		}
	};
	function PanelRow(params){
		var panels = params.panels;
		var rowAbove = params.rowAbove;
		var rowBellow;
		this.setPanelRowBellow = function(value){
			rowBellow = value;
		};
	}
	function PanelColumn(column){
		var panelColumnLeft = params.panelColumnLeft;
		var panels=[];
		var columnRight;
		this.setPanelColumnRight = function(value){
			columnRight = value;
		};
		this.addNextPanel= function(panel){
			panels.push(panel);
		};
		this.getWidth = function(){
			
		};
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
		var getPaneWidth = params.getPaneWidth;
		var getPaneHeight = params.getPaneHeight;
		var element = E.DIV();
		var leftPane;
		var rightPane;
		var bottomPane;
		var topPane;
		this.setLeftPane = function(value){
			leftPane = value;
		};
		this.setRightPane = function(value){
			rightPnae = value;
		};
		this.setTopPane = function(value){
			topPane = value;
		};
		this.setBottomPane = function(value){
			bottomPane = value;
		};
		function getXLeft(){
			return element.offsetLeft;
		}
		function getXRight(){
			return getXLeft()+getWidth();
		}
		function getWidth(){
			return element.clientWidth;
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
		function getConstraintsTopLeftOfSlider(){
			var height = getHeight();
			var width = getWidth();
			var yMin=topSlider?
				topSlider.getYBottom()
				:0;
			var yMax = bottomSlider?
				bottomSlider.getYTop()-height:
				getPaneHeight()-height;
			var xMin = leftSlider?
				leftSlider.getXRight()
				:0;
			var xMax = rightSlider?
				rightSlider.getXLeft() - width:
				getPaneWidth() - width;
			return {xMin:xMin, xMax:xMax, yMin:yMin, yMax:yMax};
		}
	}
	function SliderX(params){
		var getPanelWidth = params.getPanelWidth;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('x');
		var leftPanelColumn = params.leftPanelColumn;
		var rightPanelColumn;
		var dragManager = new DragManager({
			handle:this
		});
		this.setRightPanelColumn= function(value){
			rightPanelColumn = value;
		};
		this.getConstraints=function(){
			var constraints = getConstraintsLeftOfSlider();
			constraints.yMin=0;
			constraints.yMax=0;
			return constraints;
		};
		this.getX=function(){
			return element.offsetLeft;
		};
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			element.style.left=String(position.x)+'px';
		};
		this.endDrag = function(){
			
		};
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
			var xMin = xLeft-(leftPanelColumn.getWidth()-leftPanelColumn.getMinWidth());
			var xMax = xLeft+(rightPanelColumn.getWidth() - rightPanelColumn.getMinWidth());//right now only giving minimum but no maximum sizes
			return {xMin:xMin, xMax:xMax};
		}
	}
	function SliderY(params){
		var getPanelHeight = params.getPaneleHeight;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('y');
		var topPanelRow=params.topPanelRow;
		var bottomPanelRow;
		var dragManager = new DragManager({
			handle:this
		});
		this.setBottomPanelRow = function(value){
			bottomPanelRow = value;
		};
		this.getConstraints=function(){
			var constraints = getConstraintsLeftOfSlider();
			constraints.xMin=0;
			constraints.xMax=0;
			return constraints;
		};
		this.getX=function(){
			return element.offsetLeft;
		};
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			element.style.top=String(position.y)+'px';
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
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
			var yMin = yTop-(topPanelRow.getHeight()-topPanelRow.getMinHeight());
			var yMax = yTop+(bottomPanelRow.getHeight() - bottomPanelRow.getMinHeight());//right now only giving minimum but no maximum sizes
			return {yMin:yMin, yMax:yMax};
		}
	return _SplitPane;
})();