(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = go
go.displayName = 'go'
go.aliases = []
function go(Prism) {
  Prism.languages.go = Prism.languages.extend('clike', {
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
    boolean: /\b(?:_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    string: {
      pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true
    }
  })
  delete Prism.languages.go['class-name']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4wOTM3M2U5ZTgxMjU4Nzg3ZjRiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdvXG5nby5kaXNwbGF5TmFtZSA9ICdnbydcbmdvLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZ28oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmdvID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAga2V5d29yZDogL1xcYig/OmJyZWFrfGNhc2V8Y2hhbnxjb25zdHxjb250aW51ZXxkZWZhdWx0fGRlZmVyfGVsc2V8ZmFsbHRocm91Z2h8Zm9yfGZ1bmN8Z28oPzp0byk/fGlmfGltcG9ydHxpbnRlcmZhY2V8bWFwfHBhY2thZ2V8cmFuZ2V8cmV0dXJufHNlbGVjdHxzdHJ1Y3R8c3dpdGNofHR5cGV8dmFyKVxcYi8sXG4gICAgYnVpbHRpbjogL1xcYig/OmJvb2x8Ynl0ZXxjb21wbGV4KD86NjR8MTI4KXxlcnJvcnxmbG9hdCg/OjMyfDY0KXxydW5lfHN0cmluZ3x1P2ludCg/Ojh8MTZ8MzJ8NjQpP3x1aW50cHRyfGFwcGVuZHxjYXB8Y2xvc2V8Y29tcGxleHxjb3B5fGRlbGV0ZXxpbWFnfGxlbnxtYWtlfG5ld3xwYW5pY3xwcmludCg/OmxuKT98cmVhbHxyZWNvdmVyKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/Ol98aW90YXxuaWx8dHJ1ZXxmYWxzZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvWypcXC8lXiE9XT0/fFxcK1s9K10/fC1bPS1dP3xcXHxbPXxdP3wmKD86PXwmfFxcXj0/KT98Pig/Oj49P3w9KT98PCg/Ojw9P3w9fC0pP3w6PXxcXC5cXC5cXC4vLFxuICAgIG51bWJlcjogLyg/OlxcYjB4W2EtZlxcZF0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbLStdP1xcZCspPylpPy9pLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInYF0pKFxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH1cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5nb1snY2xhc3MtbmFtZSddXG59XG4iXSwic291cmNlUm9vdCI6IiJ9