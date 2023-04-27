(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_properties"],{

/***/ "./node_modules/refractor/lang/properties.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/properties.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = properties
properties.displayName = 'properties'
properties.aliases = []
function properties(Prism) {
  Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    'attr-value': {
      pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
      lookbehind: true
    },
    'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
    punctuation: /[=:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvcGVydGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjFhM2FhN2EwYzM1ZmEzODFiM2Y1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydGllc1xucHJvcGVydGllcy5kaXNwbGF5TmFtZSA9ICdwcm9wZXJ0aWVzJ1xucHJvcGVydGllcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb3BlcnRpZXMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnByb3BlcnRpZXMgPSB7XG4gICAgY29tbWVudDogL15bIFxcdF0qWyMhXS4qJC9tLFxuICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcczo9XSkrPyg/OiAqWz06XSAqfCApKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcclxcbl0pKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ2F0dHItbmFtZSc6IC9eWyBcXHRdKig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcczo9XSkrPyg/PSAqWz06XSAqfCApL20sXG4gICAgcHVuY3R1YXRpb246IC9bPTpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9