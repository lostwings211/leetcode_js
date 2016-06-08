/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ret = [];
    var map = {};
    if(strs.length == 0) {
        return ret;
    }
    for(var i = 0; i < strs.length; i++) {
        var curr = strs[i];
        var curr_key = sortString(curr);
        if(!map.hasOwnProperty(curr_key)) {
            map[curr_key] = [];

        }
        map[curr_key].push(curr);
    }

    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            ret.push(map[key]);
        }
    }
    return ret;
};

var sortString = function(str) {
    if(str.length == 0) {
        return "";
    }
    var str_array = [];
    for(var i = 0; i < str.length; i++) {
        str_array.push(str.charAt(i));
    }
    str_array.sort(function(a, b) {
        if(a < b) {
            return -1;
        }
        else if(a > b) {
            return 1;
        }
        else {
            return 0;
        }
    })
    return str_array.join("");
}