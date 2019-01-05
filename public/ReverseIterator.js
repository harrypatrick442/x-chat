function ReverseIterator(array)
{
    var index=array.length-1;
    this.next=function()
    {
        var next=array[index];
        index--;
        return next;
    };
    this.hasNext=function()
    {
      return index>=0;
    };
    this.remove=function()
    {
        array.splice(index+1, 1);
    };
	this.insert = function(entry){
		array.splice(index+1, 0, entry);
	};
}