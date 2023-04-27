(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_json"],{

/***/ "./node_modules/refractor/lang/json.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = json
json.displayName = 'json'
json.aliases = []
function json(Prism) {
  Prism.languages.json = {
    property: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      greedy: true
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      greedy: true
    },
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvanNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmIzN2IxMDM3ZjQ2YzA1MTQ0ZWIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ganNvblxuanNvbi5kaXNwbGF5TmFtZSA9ICdqc29uJ1xuanNvbi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGpzb24oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmpzb24gPSB7XG4gICAgcHJvcGVydHk6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIoPz1cXHMqOikvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIoPyFcXHMqOikvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBjb21tZW50OiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgbnVtYmVyOiAvLT9cXGQrXFwuP1xcZCooZVsrLV0/XFxkKyk/L2ksXG4gICAgcHVuY3R1YXRpb246IC9be31bXFxdLF0vLFxuICAgIG9wZXJhdG9yOiAvOi8sXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICBudWxsOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9