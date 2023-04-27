(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_julia"],{

/***/ "./node_modules/refractor/lang/julia.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/julia.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = julia
julia.displayName = 'julia'
julia.aliases = []
function julia(Prism) {
  Prism.languages.julia = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,
    keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
    boolean: /\b(?:true|false)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,
    operator: /[-+*^%÷&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,
    punctuation: /[{}[\];(),.:]/,
    constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvanVsaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLElBQUk7QUFDekI7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42NTM1YWE3YmU2Mzk4YjM2ZGE0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGp1bGlhXG5qdWxpYS5kaXNwbGF5TmFtZSA9ICdqdWxpYSdcbmp1bGlhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24ganVsaWEoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmp1bGlhID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IC8oXCJcIlwifCcnJylbXFxzXFxTXSs/XFwxfChcInwnKSg/OlxcXFwufCg/IVxcMilbXlxcXFxcXHJcXG5dKSpcXDIvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphYnN0cmFjdHxiYXJlbW9kdWxlfGJlZ2lufGJpdHN0eXBlfGJyZWFrfGNhdGNofGNjYWxsfGNvbnN0fGNvbnRpbnVlfGRvfGVsc2V8ZWxzZWlmfGVuZHxleHBvcnR8ZmluYWxseXxmb3J8ZnVuY3Rpb258Z2xvYmFsfGlmfGltbXV0YWJsZXxpbXBvcnR8aW1wb3J0YWxsfGlufGxldHxsb2NhbHxtYWNyb3xtb2R1bGV8cHJpbnR8cHJpbnRsbnxxdW90ZXxyZXR1cm58c3RydWN0fHRyeXx0eXBlfHR5cGVhbGlhc3x1c2luZ3x3aGlsZSlcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgbnVtYmVyOiAvKD86XFxiKD89XFxkKXxcXEIoPz1cXC4pKSg/OjBbYm94XSk/KD86W1xcZGEtZl0rXFwuP1xcZCp8XFwuXFxkKykoPzpbZWZwXVsrLV0/XFxkKyk/aj8vaSxcbiAgICBvcGVyYXRvcjogL1stKypeJcO3JiRcXFxcXT0/fFxcL1tcXC89XT98IT0/PT98XFx8Wz0+XT98PCg/Ojw9P3xbPTpdKT98Pig/Oj18Pj4/PT8pP3w9PT89P3xbfuKJoOKJpOKJpV0vLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9W1xcXTsoKSwuOl0vLFxuICAgIGNvbnN0YW50OiAvXFxiKD86KD86TmFOfEluZikoPzoxNnwzMnw2NCk/KVxcYi9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==