/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1) {
        return s;
    }
    var ret = "";
    var cycle_count = 2 * numRows - 2;
    for(var index = 0; index < numRows; index++) {
        if(index == 0 || index ==  numRows - 1) {
            var i = index;
            while(i < s.length) {
                ret = ret + s.charAt(i);
                i += cycle_count;
            }
        }
        else {
            var i = index;
            var j = cycle_count - index;
            while(j < s.length) {
                ret = ret + s.charAt(i);
                ret = ret + s.charAt(j);
                i += cycle_count;
                j += cycle_count;
            }
            if(i < s.length) {
                ret = ret + s.charAt(i);
            }
        }
    }
    return ret;
};