(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_reason"],{

/***/ "./node_modules/refractor/lang/reason.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = reason
reason.displayName = 'reason'
reason.aliases = []
function reason(Prism) {
  Prism.languages.reason = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true
    },
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: true
    },
    // 'class-name' must be matched *after* 'constructor' defined below
    'class-name': /\b[A-Z]\w*/,
    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
  })
  Prism.languages.insertBefore('reason', 'class-name', {
    character: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      alias: 'string'
    },
    constructor: {
      // Negative look-ahead prevents from matching things like String.capitalize
      pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
      alias: 'variable'
    },
    label: {
      pattern: /\b[a-z]\w*(?=::)/,
      alias: 'symbol'
    }
  }) // We can't match functions property, so let's not even try.
  delete Prism.languages.reason.function
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcmVhc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0JBQStCLEVBQUUseUJBQXlCLEVBQUU7QUFDNUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJidW5kbGUuZmJmNjg1YWRjYjQwY2QwZGUzZDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZWFzb25cbnJlYXNvbi5kaXNwbGF5TmFtZSA9ICdyZWFzb24nXG5yZWFzb24uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiByZWFzb24oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnJlYXNvbiA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gJ2NsYXNzLW5hbWUnIG11c3QgYmUgbWF0Y2hlZCAqYWZ0ZXIqICdjb25zdHJ1Y3RvcicgZGVmaW5lZCBiZWxvd1xuICAgICdjbGFzcy1uYW1lJzogL1xcYltBLVpdXFx3Ki8sXG4gICAga2V5d29yZDogL1xcYig/OmFuZHxhc3xhc3NlcnR8YmVnaW58Y2xhc3N8Y29uc3RyYWludHxkb3xkb25lfGRvd250b3xlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJuYWx8Zm9yfGZ1bnxmdW5jdGlvbnxmdW5jdG9yfGlmfGlufGluY2x1ZGV8aW5oZXJpdHxpbml0aWFsaXplcnxsYXp5fGxldHxtZXRob2R8bW9kdWxlfG11dGFibGV8bmV3fG5vbnJlY3xvYmplY3R8b2Z8b3Blbnxvcnxwcml2YXRlfHJlY3xzaWd8c3RydWN0fHN3aXRjaHx0aGVufHRvfHRyeXx0eXBlfHZhbHx2aXJ0dWFsfHdoZW58d2hpbGV8d2l0aClcXGIvLFxuICAgIG9wZXJhdG9yOiAvXFwuezN9fDpbOj1dfFxcfD58LT58PSg/Oj09P3w+KT98PD0/fD49P3xbfF4/JyMhfmBdfFsrXFwtKlxcL11cXC4/fFxcYig/Om1vZHxsYW5kfGxvcnxseG9yfGxzbHxsc3J8YXNyKVxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncmVhc29uJywgJ2NsYXNzLW5hbWUnLCB7XG4gICAgY2hhcmFjdGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OlxcXFx4W1xcZGEtZl17Mn18XFxcXG9bMC0zXVswLTddWzAtN118XFxcXFxcZHszfXxcXFxcLnxbXidcXFxcXFxyXFxuXSknLyxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIC8vIE5lZ2F0aXZlIGxvb2stYWhlYWQgcHJldmVudHMgZnJvbSBtYXRjaGluZyB0aGluZ3MgbGlrZSBTdHJpbmcuY2FwaXRhbGl6ZVxuICAgICAgcGF0dGVybjogL1xcYltBLVpdXFx3KlxcYig/IVxccypcXC4pLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcGF0dGVybjogL1xcYlthLXpdXFx3Kig/PTo6KS8sXG4gICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICB9XG4gIH0pIC8vIFdlIGNhbid0IG1hdGNoIGZ1bmN0aW9ucyBwcm9wZXJ0eSwgc28gbGV0J3Mgbm90IGV2ZW4gdHJ5LlxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnJlYXNvbi5mdW5jdGlvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==