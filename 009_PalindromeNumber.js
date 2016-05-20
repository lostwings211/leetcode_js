/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    x = Math.abs(x);
    var origin = x;
    var y = 0;
    while (x > 0) {
        y = y * 10  + x % 10;
        x = Math.floor(x / 10);
    }
    return origin == y ? true : false;
};