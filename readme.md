# qb-utf8-from-str-tiny

Tiny script for converting utf-8 to string based upon encodeURIComponent().  
Runs in nodejs and in browser.  Not efficient for large strings.

    module.exports = function(s) {
        for(var i=0, enc = encodeURIComponent(s), a = []; i < enc.length;) {
            if(enc[i] === '%') {
                a.push(parseInt(enc.substr(i+1, 2), 16))
                i += 3
            } else {
                a.push(enc.charCodeAt(i++))
            }
        }
        return a
    }

That's it.  That's the code.
