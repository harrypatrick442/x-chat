function ReverseIterator(array)
{
	var length = array.length;
    var index=length-1;
    this.next=function()
    {
        var next=array[index];
        index--;
        return next;
    };
    this.previous=function()
    {
		index++;
        return array[index+1];
    };
    this.hasNext=function()
    {
      return index>=0;
    };
	this.hasPrevious = function(){
		return index+2<length;
	};
    this.remove=function()
    {
        array.splice(index+1, 1);
		length--;
    };
	this.insert = function(entry){
		array.splice(index+1, 0, entry);
		length++;
	};
	this.insertAfter = function(entry){
		array.splice(index+2, 0, entry);
		length++;
	};
	this.append = function(entry){
		array.push(entry);
		length++;
	};
}