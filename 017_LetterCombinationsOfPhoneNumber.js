/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    var ret = [];
    var curr = "";
    var index = 0;
    dfs(curr, 0, digits, map, ret);
    return ret;
};

var dfs = function (curr, index, digits, map, ret) {
    if(index == digits.length) {
        if(curr.length > 0) {
            ret.push(curr);
        }
        return;
    }
    var map_index =  digits.charAt(index) - '0';
    if(map_index > 1) {
        for(var i = 0; i < map[map_index].length; i++) {
            curr = curr +  map[map_index][i];
            dfs(curr, index + 1, digits, map, ret);
            curr = curr.substring(0, curr.length -1);
        }
    }
    else {
        dfs(curr, index + 1, digits, map, ret);
    }
}