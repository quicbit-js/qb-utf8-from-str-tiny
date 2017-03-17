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
