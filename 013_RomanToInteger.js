/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {};
    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;

    var ret = 0;
    var i = 0;
    while(i < s.length) {
        var curr_val = map[s.charAt(i)];
        if(i + 1 < s.length && curr_val < map[s.charAt(i+1)]) {
            ret += map[s.charAt(i+1)] - curr_val;
            i+= 2;
        }
        else {
            ret += curr_val;
            i++;
        }
    }
    return ret;
};