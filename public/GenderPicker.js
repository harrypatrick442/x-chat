function Genders(){
    
}
function GenderPicker()
{
    var element = document.createElement('select');
	element.classList.add('gender');
    for(var i=0; i<Genders.values.length; i++)
    {
        var values = Genders.values[i];
        var option = document.createElement('option');
        option.innerHTML = values.txt;
        option.value=values.value;
        element.appendChild(option);
    }
    this.getValue=function(){
        return element.options[element.selectedIndex].value;
    };
	this.getElement = function(){return element;};
}
Genders.values =[{value: 0, txt: 'a man'},
        {value: 1, txt: 'a woman'},
        {value: 2, txt: 'a couple(man + woman)'},
        {value: 3, txt: 'a couple of men'},
        {value: 4, txt: 'a couple of women'},
        {value: 5, txt: 'a transexual man'},
        {value: 6, txt: 'a transexual women'}
    ];