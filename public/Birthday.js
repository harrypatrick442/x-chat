function Birthday()
{
    var element = E.DIV();
    var selectDay = E.SELECT();
    var selectMonth = E.SELECT();
    var selectYear = E.SELECT();
	element.classList.add('birthday');
    element.appendChild(selectDay);
    element.appendChild(selectMonth);
    element.appendChild(selectYear);
	selectDay.classList.add('not-right');
	selectMonth.classList.add('not-right');
    var now = new Date();
    var year = 1900 + now.getYear();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    selectDay.appendChild(createOption(undefined, 'Day'));
    selectMonth.appendChild(createOption(undefined, 'Month'));
    selectYear.appendChild(createOption(undefined, 'Year'));
    for (var i = 1; i < 32; i++)
    {
        var option = createOption(i, String(i));
        selectDay.appendChild(option);
    }
    for (var i = 1; i < 12; i++)
    {
        var option = createOption(i, months[i]);
        selectMonth.appendChild(option);
    }
    var maxYear = year - 17;
    for (var i = maxYear - 100; i < maxYear; i++)
    {
        var option = createOption(i, String(i));
        selectYear.appendChild(option);
    }
	this.getElement = function(){return element;};
    function createOption(value, txt)
    {
        var option = document.createElement('option');
        option.value = value;
        option.innerHTML = txt;
        return option;
    }
    this.getValue = function()
    {
        var day =selectDay.options[selectDay.selectedIndex].value;
        var month =selectMonth.options[selectMonth.selectedIndex].value;
        var year = selectYear.options[selectYear.selectedIndex].value;
        return{day:(day=='undefined'? undefined:parseInt(day)),month:(month=='undefined'?undefined:parseInt(month)), year:(year=='undefined'?undefined:parseInt(year))};
    };

}