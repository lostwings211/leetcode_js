/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var ret = 0;
    for(var i = 0; i < s.length; i++) {
        var curr_char = s.charAt(i);
        if(curr_char == '(') {
            var ele = [i, 0];
            stack.push(ele);
        }
        else if(curr_char == ')') {
            if(stack.length == 0 || stack[stack.length - 1][1] == 1) {
                var ele = [i, 1];
                stack.push(ele);
            }
            else {
                stack = stack.slice(0, stack.length - 1);
                if(stack.length == 0) {
                    if(i > ret) {
                        ret = i + 1;
                    }
                }
                else {
                    if (i - stack[stack.length - 1][0] > ret) {
                        ret = i - stack[stack.length - 1][0];
                    }
                }
            }
        }
    }
    return ret;
};