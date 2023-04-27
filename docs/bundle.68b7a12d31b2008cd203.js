(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_r"],{

/***/ "./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = r
r.displayName = 'r'
r.aliases = []
function r(Prism) {
  Prism.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'percent-operator': {
      // Includes user-defined operators
      // and %%, %*%, %/%, %in%, %o%, %x%
      pattern: /%[^%\s]*%/,
      alias: 'operator'
    },
    boolean: /\b(?:TRUE|FALSE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [
      /\b(?:NaN|Inf)\b/,
      /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
    ],
    keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQSIsImZpbGUiOiJidW5kbGUuNjhiN2ExMmQzMWIyMDA4Y2QyMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByXG5yLmRpc3BsYXlOYW1lID0gJ3InXG5yLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuciA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oWydcIl0pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdwZXJjZW50LW9wZXJhdG9yJzoge1xuICAgICAgLy8gSW5jbHVkZXMgdXNlci1kZWZpbmVkIG9wZXJhdG9yc1xuICAgICAgLy8gYW5kICUlLCAlKiUsICUvJSwgJWluJSwgJW8lLCAleCVcbiAgICAgIHBhdHRlcm46IC8lW14lXFxzXSolLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICBib29sZWFuOiAvXFxiKD86VFJVRXxGQUxTRSlcXGIvLFxuICAgIGVsbGlwc2lzOiAvXFwuXFwuKD86XFwufFxcZCspLyxcbiAgICBudW1iZXI6IFtcbiAgICAgIC9cXGIoPzpOYU58SW5mKVxcYi8sXG4gICAgICAvKD86XFxiMHhbXFxkQS1GYS1mXSsoPzpcXC5cXGQqKT98XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86W0VlUHBdWystXT9cXGQrKT9baUxdPy9cbiAgICBdLFxuICAgIGtleXdvcmQ6IC9cXGIoPzppZnxlbHNlfHJlcGVhdHx3aGlsZXxmdW5jdGlvbnxmb3J8aW58bmV4dHxicmVha3xOVUxMfE5BfE5BX2ludGVnZXJffE5BX3JlYWxffE5BX2NvbXBsZXhffE5BX2NoYXJhY3Rlcl8pXFxiLyxcbiAgICBvcGVyYXRvcjogLy0+Pz4/fDwoPzo9fDw/LSk/fFs+PSFdPT98Ojo/fCYmP3xcXHxcXHw/fFsrKlxcL14kQH5dLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKXt9XFxbXFxdLDtdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9