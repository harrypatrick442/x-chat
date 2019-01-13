exports.Enumerable = (function () {
    var _Enumerable = function (moveNext, current, reset) {
        this.moveNext = moveNext;
        this.current = current;
        this.reset = reset;
    };
    _Enumerable.fromArray = function (arr) {
        console.log('from array');
        console.log(arr);
        return new (function (arr) {
            var index = -1;
            var length = arr.length;
            return new _Enumerable(function () {
                index++;
                console.log('move next to index: ' + index);
                return index < length;
            },
            function () {
                console.log('current: ' + arr);
                console.log('current: ' + arr[index]);
                return arr[index];
            },
            function () {
                index = 0;
            });
        })(arr);
    };
    return _Enumerable;
})();