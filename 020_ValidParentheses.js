/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i = 0; i < s.length; i++) {
        var curr_char =  s.charAt(i);
        if(curr_char == '(' || curr_char == '[' || curr_char == '{') {
            stack.push(curr_char);
        }
        else {
            if(stack.length > 0) {
                var stack_top= stack[stack.length - 1];
                if((curr_char == ')' &&  stack_top == '(') || (curr_char == ']' &&  stack_top == '[') || (curr_char == '}'  && stack_top == '{')) {
                    stack = stack.slice(0, stack.length - 1);
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};