# qb-utf8-from-str-tiny

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![bitHound Dependencies][proddep-image]][proddep-link]
[![dev dependencies][devdep-image]][devdep-link]
[![code analysis][code-image]][code-link]

[npm-image]:       https://img.shields.io/npm/v/qb-utf8-from-str-tiny.svg
[downloads-image]: https://img.shields.io/npm/dm/qb-utf8-from-str-tiny.svg
[npm-url]:         https://npmjs.org/package/qb-utf8-from-str-tiny
[proddep-image]:   https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny/badges/dependencies.svg
[proddep-link]:    https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny/master/dependencies/npm
[devdep-image]:    https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny/badges/devDependencies.svg
[devdep-link]:     https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny/master/dependencies/npm
[code-image]:      https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny/badges/code.svg
[code-link]:       https://www.bithound.io/github/quicbit-js/qb-utf8-from-str-tiny

Tiny script for converting string to array of utf-8 based upon encodeURIComponent().  
Runs in nodejs and in browser.  Not efficient for large strings.

    module.exports = function (s) {
      for (var i = 0, enc = encodeURIComponent(s), a = []; i < enc.length;) {
        if (enc[i] === '%') {
          a.push(parseInt(enc.substr(i + 1, 2), 16))
          i += 3
        } else {
          a.push(enc.charCodeAt(i++))
        }
      }
      return a
    }

That's it.  That's the code.

**Complies with the 100% test coverage and minimum dependency requirements** of 
[qb-standard](http://github.com/quicbit-js/qb-standard) . 


# Install

    npm install qb-utf8-from-str-tiny