/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var is_negative = x < 0;
    x = Math.abs(x);
    var y = 0;
    while(x > 0) {
        y = 10 * y + x % 10;
        x = Math.floor(x / 10);
    }
    if(y > 2147483647) {
        return 0;
    }
    return is_negative ? -y : y;
};