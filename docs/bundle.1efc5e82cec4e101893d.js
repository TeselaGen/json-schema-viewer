(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_graphql"],{

/***/ "./node_modules/refractor/lang/graphql.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/graphql.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = graphql
graphql.displayName = 'graphql'
graphql.aliases = []
function graphql(Prism) {
  Prism.languages.graphql = {
    comment: /#.*/,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: 'function'
    },
    'attr-name': {
      pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
      lookbehind: true
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
    operator: /[!=|]|\.{3}/,
    punctuation: /[!(){}\[\]:=,]/,
    constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ3JhcGhxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLEVBQUU7QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMWVmYzVlODJjZWM0ZTEwMTg5M2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBncmFwaHFsXG5ncmFwaHFsLmRpc3BsYXlOYW1lID0gJ2dyYXBocWwnXG5ncmFwaHFsLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZ3JhcGhxbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZ3JhcGhxbCA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC8oPzpcXEItfFxcYilcXGQrKD86XFwuXFxkKyk/KD86ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICB2YXJpYWJsZTogL1xcJFthLXpfXVxcdyovaSxcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC9AW2Etel9dXFx3Ki9pLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvW2Etel9dXFx3Kig/PVxccyooPzpcXCgoPzpbXigpXCJdfFwiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIikqXFwpKT86KS9pLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZW51bXxpbXBsZW1lbnRzfGludGVyZmFjZXxvbnxzY2FsYXJ8dHlwZXx1bmlvbilcXHMrKVthLXpBLVpfXVxcdyovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgZnJhZ21lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiZnJhZ21lbnRcXHMrfFxcLnszfVxccyooPyFvblxcYikpW2EtekEtWl9dXFx3Ki8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzplbnVtfGZyYWdtZW50fGltcGxlbWVudHN8aW5wdXR8aW50ZXJmYWNlfG11dGF0aW9ufG9ufHF1ZXJ5fHNjYWxhcnxzY2hlbWF8dHlwZXx1bmlvbilcXGIvLFxuICAgIG9wZXJhdG9yOiAvWyE9fF18XFwuezN9LyxcbiAgICBwdW5jdHVhdGlvbjogL1shKCl7fVxcW1xcXTo9LF0vLFxuICAgIGNvbnN0YW50OiAvXFxiKD8hSURcXGIpW0EtWl1bQS1aX1xcZF0qXFxiL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9