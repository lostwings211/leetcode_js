/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === 0) {
        return 0;
    }
    if (divisor == 0 || (dividend == -2147483648 && divisor == -1)) {
        return 2147483647;
    }
    var negative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    var ret = 0;
    var curr = divisor;
    while(dividend >= divisor) {
        var curr_result = 1;
        var curr_divisor = divisor;
        while(dividend >= curr_divisor + curr_divisor) {
            curr_result += curr_result
            curr_divisor += curr_divisor;
        }
        ret += curr_result;
        dividend = dividend - curr_divisor;
    }
    return negative ? -ret : ret;
};