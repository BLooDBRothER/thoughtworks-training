Array.prototype.myMap = function (callBack) {
    const result = [];

    for (let idx = 0; idx < this.length; idx++)
        result.push(callBack(this[idx], idx, this));

    return result;
}

Array.prototype.myFilter = function (callBack) {
    const result = [];

    for (let idx = 0; idx < this.length; idx++)
        callBack(this[idx], idx, this) && result.push(this[idx]);

    return result
}

Array.prototype.myReduce = function (callBack, inititalValue) {
    let result = inititalValue;

    for (let idx = 0; idx < this.length; idx++)
        result = callBack(this[idx], result, idx, this)

    return result;
}

Array.prototype.myForEach = function (callBack) {
    for (let idx = 0; idx < this.length; idx++)
        callBack(this[idx], idx, this);
}
