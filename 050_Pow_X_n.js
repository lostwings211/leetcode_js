/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var isNegative = n < 0;
    if(n == 0) {
        return 1;
    }
    n = n > 0 ? n : -n;
    var ret = 1;
    var i = 1;
    while(i <= n) {
        var curr = 1;
        var curr_val = x;
        while(2 * curr <= (n - i + 1)) {
            curr_val = curr_val * curr_val;
            curr = curr * 2;
        }
        ret =  ret * curr_val;
        i += curr;
    }
    return isNegative ? 1 / ret : ret;
};