(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_wasm"],{

/***/ "./node_modules/refractor/lang/wasm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wasm.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = wasm
wasm.displayName = 'wasm'
wasm.aliases = []
function wasm(Prism) {
  Prism.languages.wasm = {
    comment: [
      /\(;[\s\S]*?;\)/,
      {
        pattern: /;;.*/,
        greedy: true
      }
    ],
    string: {
      pattern: /"(?:\\[\s\S]|[^"\\])*"/,
      greedy: true
    },
    keyword: [
      {
        pattern: /\b(?:align|offset)=/,
        inside: {
          operator: /=/
        }
      },
      {
        pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
        inside: {
          punctuation: /\./
        }
      },
      /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
    ],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvd2FzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5jZGEzM2ViMTg3NmM4YjBjYmJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdhc21cbndhc20uZGlzcGxheU5hbWUgPSAnd2FzbSdcbndhc20uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB3YXNtKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy53YXNtID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIC9cXCg7W1xcc1xcU10qPztcXCkvLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvOzsuKi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cIlxcXFxdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1xcYig/OmFsaWdufG9mZnNldCk9LyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgb3BlcmF0b3I6IC89L1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXFxiKD86KD86ZjMyfGY2NHxpMzJ8aTY0KSg/OlxcLig/OmFic3xhZGR8YW5kfGNlaWx8Y2x6fGNvbnN0fGNvbnZlcnRfW3N1XVxcL2koPzozMnw2NCl8Y29weXNpZ258Y3R6fGRlbW90ZVxcL2Y2NHxkaXYoPzpfW3N1XSk/fGVxej98ZXh0ZW5kX1tzdV1cXC9pMzJ8Zmxvb3J8Z2UoPzpfW3N1XSk/fGd0KD86X1tzdV0pP3xsZSg/Ol9bc3VdKT98bG9hZCg/Oig/Ojh8MTZ8MzIpX1tzdV0pP3xsdCg/Ol9bc3VdKT98bWF4fG1pbnxtdWx8bmVhcmVzdHxuZWc/fG9yfHBvcGNudHxwcm9tb3RlXFwvZjMyfHJlaW50ZXJwcmV0XFwvW2ZpXSg/OjMyfDY0KXxyZW1fW3N1XXxyb3RbbHJdfHNobHxzaHJfW3N1XXxzdG9yZSg/Ojh8MTZ8MzIpP3xzcXJ0fHN1Ynx0cnVuYyg/Ol9bc3VdXFwvZig/OjMyfDY0KSk/fHdyYXBcXC9pNjR8eG9yKSk/fG1lbW9yeVxcLig/Omdyb3d8c2l6ZSkpXFxiLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvXFxiKD86YW55ZnVuY3xibG9ja3xicig/Ol9pZnxfdGFibGUpP3xjYWxsKD86X2luZGlyZWN0KT98ZGF0YXxkcm9wfGVsZW18ZWxzZXxlbmR8ZXhwb3J0fGZ1bmN8Z2V0Xyg/Omdsb2JhbHxsb2NhbCl8Z2xvYmFsfGlmfGltcG9ydHxsb2NhbHxsb29wfG1lbW9yeXxtb2R1bGV8bXV0fG5vcHxvZmZzZXR8cGFyYW18cmVzdWx0fHJldHVybnxzZWxlY3R8c2V0Xyg/Omdsb2JhbHxsb2NhbCl8c3RhcnR8dGFibGV8dGVlX2xvY2FsfHRoZW58dHlwZXx1bnJlYWNoYWJsZSlcXGIvXG4gICAgXSxcbiAgICB2YXJpYWJsZTogL1xcJFtcXHchIyQlJicqK1xcLS4vOjw9Pj9AXFxcXF5fYHx+XSsvaSxcbiAgICBudW1iZXI6IC9bKy1dP1xcYig/OlxcZCg/Ol8/XFxkKSooPzpcXC5cXGQoPzpfP1xcZCkqKT8oPzpbZUVdWystXT9cXGQoPzpfP1xcZCkqKT98MHhbXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRl0pKig/OlxcLltcXGRhLWZBLUZdKD86Xz9bXFxkYS1mQS1EXSkqKT8oPzpbcFBdWystXT9cXGQoPzpfP1xcZCkqKT8pXFxifFxcYmluZlxcYnxcXGJuYW4oPzo6MHhbXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRF0pKik/XFxiLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=