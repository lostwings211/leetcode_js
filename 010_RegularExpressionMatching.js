/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length == 0) {
        return s.length == 0;
    }
    if(p.length == 1) {
        return (s.length == 1 && (s == p || p == '.'));
    }

    if(p.charAt(1) != '*') {
        if(s.length < 1) {
            return false;
        }
        else if(s.charAt(0) != p.charAt(0) && p.charAt(0) != '.') {
            return false;
        }
        else {
            return isMatch(s.substring(1, s.length), p.substring(1, p.length));
        }
    }
    else if(p.charAt(1) == '*')  {
        if(isMatch(s, p.substring(2, p.length))) {
            return true;
        }
        if(p.charAt(0) == '.') {
            for(var i = 1; i <= s.length; i++) {
                if(isMatch(s.substring(i, s.length), p.substring(2, p.length))) {
                    return true;
                }
            }
        }
        else {
            var i = 0;
            while(i < s.length && s.charAt(i) == p.charAt(0) ) {
                if(isMatch(s.substring(i + 1, s.length), p.substring(2, p.length))) {
                    return true;
                }
                i++;
            }
        }
    }
    return false;
};