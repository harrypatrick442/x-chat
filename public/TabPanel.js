function TabPanel(tabNames, autoHeight, styleNames)
{
    styleNames=!styleNames?{}:styleNames;
    var self = this;
    this.panels = [];
    this.tabs = [];
    var nPanels = tabNames.length;
    this.div = E.DIV();
    var divPanelHousing = E.DIV();
    var divTabs = E.DIV();
	divTabs.classList.add('tabs');
    this.div.style.height =  autoHeight?'auto':'100%';
	this.div.classList.add('tab-panel');
    var tabPercent = 100 / nPanels;
    divPanelHousing.style.height = autoHeight?'auto':'calc(100% - 20px)';
    divPanelHousing.style.width = '100%';
    if(!autoHeight)
		divPanelHousing.style.top = '20px';
    divPanelHousing.style.float='left';
    divPanelHousing.style.position = autoHeight?'relative':'absolute';
    this.div.appendChild(divTabs);
    this.div.appendChild(divPanelHousing);
    function Tab(name, panel, iTab)
    {
        var self = this;
        this.div = E.DIV();
        var divName = E.DIV();
        this.div.style.width = String(tabPercent) + '%';
        this.div.style.left = String(iTab * tabPercent) + '%';
        this.div.classList.add('tab');
        divName.classList.add('name');
        this.div.appendChild(divName);
        divName.innerHTML = name;
        this.div.addEventListener("mousedown", function () {
            setActivePanel(panel);
        });
        this.close = function () {
        };
        this.setActive = function () {
            this.div.style.height = '18px';
        };
        this.setInactive = function () {
            this.div.style.height = '17px';
        };
    }
    function Panel()
    {
        var self = this;
        this.div = E.DIV();
        this.div.style.height =autoHeight?'auto':'calc(100% - 3px)';
        this.div.style.position = autoHeight?'relative':'absolute';
		this.div.classList.add('panel');

        this.show = function () {
            self.div.style.display = 'inline';
        };
        this.hide = function () {
            self.div.style.display = 'none';
        };
        this.close = function () {
        };
    }
    function setActivePanel(panel)
    {
        for (var i = 0; i < self.panels.length; i++)
        {
            var p = self.panels[i];
            p.hide();
            if (panel != p)
                self.tabs[i].setInactive();
            else
            {
                self.tabs[i].setActive();
                if(self.onChangeTab)self.onChangeTab(i);
            }
        }
        panel.show();
    }
    for (var i = 0; i < nPanels; i++)
    {
        var panel = new Panel();
        var tab = new Tab(tabNames[i], panel, i);
        self.panels.push(panel);
        self.tabs.push(tab);
        divPanelHousing.appendChild(panel.div);
        divTabs.appendChild(tab.div);
    }
    setActivePanel(self.panels[0]);
    this.close = function () {
        for (var i = 0; i < self.panels.length; i++)
        {
            self.panels[i].close();
            self.tabs[i].close();
        }
    };
}