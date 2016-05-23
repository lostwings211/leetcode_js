/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ret = [];
    var item = "";
    dfs(item, 0, 0, n, ret);
    return ret;
};

var dfs = function(item, left, right, n, ret) {
    if(right > left || left > n) {
        return;
    }
    if(right == left && left == n) {
        ret.push(item);
        return;
    }

    dfs(item + "(", left + 1, right, n, ret);
    dfs(item + ")", left, right + 1, n, ret);
}