(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_autoit"],{

/***/ "./node_modules/refractor/lang/autoit.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/autoit.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = autoit
autoit.displayName = 'autoit'
autoit.aliases = []
function autoit(Prism) {
  Prism.languages.autoit = {
    comment: [
      /;.*/,
      {
        // The multi-line comments delimiters can actually be commented out with ";"
        pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
        lookbehind: true
      }
    ],
    url: {
      pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
      greedy: true,
      inside: {
        variable: /([%$@])\w+\1/
      }
    },
    directive: {
      pattern: /(^\s*)#\w+/m,
      lookbehind: true,
      alias: 'keyword'
    },
    function: /\b\w+(?=\()/,
    // Variables and macros
    variable: /[$@]\w+/,
    keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    boolean: /\b(?:True|False)\b/i,
    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
    punctuation: /[\[\]().,:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXV0b2l0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmUzMmI1OWE1MWEyNTc2ODI5ZjJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b2l0XG5hdXRvaXQuZGlzcGxheU5hbWUgPSAnYXV0b2l0J1xuYXV0b2l0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYXV0b2l0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hdXRvaXQgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgLzsuKi8sXG4gICAgICB7XG4gICAgICAgIC8vIFRoZSBtdWx0aS1saW5lIGNvbW1lbnRzIGRlbGltaXRlcnMgY2FuIGFjdHVhbGx5IGJlIGNvbW1lbnRlZCBvdXQgd2l0aCBcIjtcIlxuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKSMoPzpjb21tZW50cy1zdGFydHxjcylbXFxzXFxTXSo/XlxccyojKD86Y29tbWVudHMtZW5kfGNlKS9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICB1cmw6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyojaW5jbHVkZVxccyspKD86PFteXFxyXFxuPl0rPnxcIlteXFxyXFxuXCJdK1wiKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcMVxcMXwoPyFcXDEpW15cXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvKFslJEBdKVxcdytcXDEvXG4gICAgICB9XG4gICAgfSxcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyopI1xcdysvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBmdW5jdGlvbjogL1xcYlxcdysoPz1cXCgpLyxcbiAgICAvLyBWYXJpYWJsZXMgYW5kIG1hY3Jvc1xuICAgIHZhcmlhYmxlOiAvWyRAXVxcdysvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzpDYXNlfENvbnN0fENvbnRpbnVlKD86Q2FzZXxMb29wKXxEZWZhdWx0fERpbXxEb3xFbHNlKD86SWYpP3xFbmQoPzpGdW5jfElmfFNlbGVjdHxTd2l0Y2h8V2l0aCl8RW51bXxFeGl0KD86TG9vcCk/fEZvcnxGdW5jfEdsb2JhbHxJZnxJbnxMb2NhbHxOZXh0fE51bGx8UmVEaW18U2VsZWN0fFN0YXRpY3xTdGVwfFN3aXRjaHxUaGVufFRvfFVudGlsfFZvbGF0aWxlfFdFbmR8V2hpbGV8V2l0aClcXGIvaSxcbiAgICBudW1iZXI6IC9cXGIoPzoweFtcXGRhLWZdK3xcXGQrKD86XFwuXFxkKyk/KD86ZVsrLV0/XFxkKyk/KVxcYi9pLFxuICAgIGJvb2xlYW46IC9cXGIoPzpUcnVlfEZhbHNlKVxcYi9pLFxuICAgIG9wZXJhdG9yOiAvPFs9Pl0/fFstKypcXC89Jj5dPT98Wz9eXXxcXGIoPzpBbmR8T3J8Tm90KVxcYi9pLFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXSgpLiw6XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==