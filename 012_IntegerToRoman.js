/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var ret = "";
    var map = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var index = 0;
    while(num > 0) {
        var curr_dig = num % 10;
        if(curr_dig < 4) {
            for(var i = 0; i < curr_dig; i++) {
                ret = map[index] + ret;
            }
        }
        else if(curr_dig == 4) {
            ret = map[index] + map[index + 1] + ret;
        }
        else if(curr_dig < 9) {
            var temp = map[index + 1];
            for(var i = 0; i < curr_dig - 5; i++) {
                temp = temp + map[index];
            }
            ret = temp + ret;
        }
        else if(curr_dig == 9) {
            ret = map[index] + map[index + 2] + ret;
        }
        index += 2;
        num =  Math.floor(num / 10);
    }
    return ret;
};