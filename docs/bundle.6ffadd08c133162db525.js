(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_makefile"],{

/***/ "./node_modules/refractor/lang/makefile.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/makefile.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = makefile
makefile.displayName = 'makefile'
makefile.aliases = []
function makefile(Prism) {
  Prism.languages.makefile = {
    comment: {
      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    // Built-in target names
    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    // Targets
    symbol: {
      pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
      inside: {
        variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
      }
    },
    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: [
      // Directives
      /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
      {
        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
        lookbehind: true
      }
    ],
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWFrZWZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWM7QUFDN0M7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42ZmZhZGQwOGMxMzMxNjJkYjUyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VmaWxlXG5tYWtlZmlsZS5kaXNwbGF5TmFtZSA9ICdtYWtlZmlsZSdcbm1ha2VmaWxlLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbWFrZWZpbGUoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm1ha2VmaWxlID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5dKSovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyBCdWlsdC1pbiB0YXJnZXQgbmFtZXNcbiAgICBidWlsdGluOiAvXFwuW0EtWl1bXjojPVxcc10rKD89XFxzKjooPyE9KSkvLFxuICAgIC8vIFRhcmdldHNcbiAgICBzeW1ib2w6IHtcbiAgICAgIHBhdHRlcm46IC9eW146PVxcclxcbl0rKD89XFxzKjooPyE9KSkvbSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB2YXJpYWJsZTogL1xcJCsoPzpbXigpe306Iz1cXHNdK3woPz1bKHtdKSkvXG4gICAgICB9XG4gICAgfSxcbiAgICB2YXJpYWJsZTogL1xcJCsoPzpbXigpe306Iz1cXHNdK3xcXChbQColPF4rP11bREZdXFwpfCg/PVsoe10pKS8sXG4gICAga2V5d29yZDogW1xuICAgICAgLy8gRGlyZWN0aXZlc1xuICAgICAgLy1pbmNsdWRlXFxifFxcYig/OmRlZmluZXxlbHNlfGVuZGVmfGVuZGlmfGV4cG9ydHxpZm4/ZGVmfGlmbj9lcXxpbmNsdWRlfG92ZXJyaWRlfHByaXZhdGV8c2luY2x1ZGV8dW5kZWZpbmV8dW5leHBvcnR8dnBhdGgpXFxiLywgLy8gRnVuY3Rpb25zXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXFwoKSg/OmFkZHN1ZmZpeHxhYnNwYXRofGFuZHxiYXNlbmFtZXxjYWxsfGRpcnxlcnJvcnxldmFsfGZpbGV8ZmlsdGVyKD86LW91dCk/fGZpbmRzdHJpbmd8Zmlyc3R3b3JkfGZsYXZvcnxmb3JlYWNofGd1aWxlfGlmfGluZm98am9pbnxsYXN0d29yZHxsb2FkfG5vdGRpcnxvcnxvcmlnaW58cGF0c3Vic3R8cmVhbHBhdGh8c2hlbGx8c29ydHxzdHJpcHxzdWJzdHxzdWZmaXh8dmFsdWV8d2FybmluZ3x3aWxkY2FyZHx3b3JkKD86c3xsaXN0KT8pKD89WyBcXHRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIG9wZXJhdG9yOiAvKD86Ojp8Wz86KyFdKT89fFt8QF0vLFxuICAgIHB1bmN0dWF0aW9uOiAvWzo7KCl7fV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=