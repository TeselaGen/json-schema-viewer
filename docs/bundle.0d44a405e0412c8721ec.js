(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_eiffel"],{

/***/ "./node_modules/refractor/lang/eiffel.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/eiffel.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = eiffel
eiffel.displayName = 'eiffel'
eiffel.aliases = []
function eiffel(Prism) {
  Prism.languages.eiffel = {
    comment: /--.*/,
    string: [
      // Aligned-verbatim-strings
      {
        pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
        greedy: true
      }, // Non-aligned-verbatim-strings
      {
        pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
        greedy: true
      }, // Single-line string
      {
        pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/,
        greedy: true
      }
    ],
    // normal char | special char | char code
    char: /'(?:%.|[^%'\r\n])+'/,
    keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
    boolean: /\b(?:True|False)\b/i,
    // Convention: class-names are always all upper-case characters
    'class-name': {
      pattern: /\b[A-Z][\dA-Z_]*\b/,
      alias: 'builtin'
    },
    number: [
      // hexa | octal | bin
      /\b0[xcb][\da-f](?:_*[\da-f])*\b/i, // Decimal
      /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i
    ],
    punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
    operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZWlmZmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIsS0FBSyxVQUFVO0FBQ3RDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSTtBQUN4RDtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjBkNDRhNDA1ZTA0MTJjODcyMWVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZWlmZmVsXG5laWZmZWwuZGlzcGxheU5hbWUgPSAnZWlmZmVsJ1xuZWlmZmVsLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZWlmZmVsKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5laWZmZWwgPSB7XG4gICAgY29tbWVudDogLy0tLiovLFxuICAgIHN0cmluZzogW1xuICAgICAgLy8gQWxpZ25lZC12ZXJiYXRpbS1zdHJpbmdzXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cIihbXltdKilcXFtbXFxzXFxTXSo/XFxdXFwxXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sIC8vIE5vbi1hbGlnbmVkLXZlcmJhdGltLXN0cmluZ3NcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKFtee10qKVxce1tcXHNcXFNdKj9cXH1cXDFcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSwgLy8gU2luZ2xlLWxpbmUgc3RyaW5nXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OiVcXHMrJXwlLnxbXiVcIlxcclxcbl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBub3JtYWwgY2hhciB8IHNwZWNpYWwgY2hhciB8IGNoYXIgY29kZVxuICAgIGNoYXI6IC8nKD86JS58W14lJ1xcclxcbl0pKycvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphY3Jvc3N8YWdlbnR8YWxpYXN8YWxsfGFuZHxhdHRhY2hlZHxhc3xhc3NpZ258YXR0cmlidXRlfGNoZWNrfGNsYXNzfGNvbnZlcnR8Y3JlYXRlfEN1cnJlbnR8ZGVidWd8ZGVmZXJyZWR8ZGV0YWNoYWJsZXxkb3xlbHNlfGVsc2VpZnxlbmR8ZW5zdXJlfGV4cGFuZGVkfGV4cG9ydHxleHRlcm5hbHxmZWF0dXJlfGZyb218ZnJvemVufGlmfGltcGxpZXN8aW5oZXJpdHxpbnNwZWN0fGludmFyaWFudHxsaWtlfGxvY2FsfGxvb3B8bm90fG5vdGV8b2Jzb2xldGV8b2xkfG9uY2V8b3J8UHJlY3Vyc29yfHJlZGVmaW5lfHJlbmFtZXxyZXF1aXJlfHJlc2N1ZXxSZXN1bHR8cmV0cnl8c2VsZWN0fHNlcGFyYXRlfHNvbWV8dGhlbnx1bmRlZmluZXx1bnRpbHx2YXJpYW50fFZvaWR8d2hlbnx4b3IpXFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OlRydWV8RmFsc2UpXFxiL2ksXG4gICAgLy8gQ29udmVudGlvbjogY2xhc3MtbmFtZXMgYXJlIGFsd2F5cyBhbGwgdXBwZXItY2FzZSBjaGFyYWN0ZXJzXG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiW0EtWl1bXFxkQS1aX10qXFxiLyxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9LFxuICAgIG51bWJlcjogW1xuICAgICAgLy8gaGV4YSB8IG9jdGFsIHwgYmluXG4gICAgICAvXFxiMFt4Y2JdW1xcZGEtZl0oPzpfKltcXGRhLWZdKSpcXGIvaSwgLy8gRGVjaW1hbFxuICAgICAgLyg/OlxcZCg/Ol8qXFxkKSopP1xcLig/Oig/OlxcZCg/Ol8qXFxkKSopP2VbKy1dPyk/XFxkKD86XypcXGQpKnxcXGQoPzpfKlxcZCkqXFwuPy9pXG4gICAgXSxcbiAgICBwdW5jdHVhdGlvbjogLzo9fDw8fD4+fFxcKFxcfHxcXHxcXCl8LT58XFwuKD89XFx3KXxbe31bXFxdOygpLDo/XS8sXG4gICAgb3BlcmF0b3I6IC9cXFxcXFxcXHxcXHxcXC5cXC5cXHx8XFwuXFwufFxcL1t+XFwvPV0/fFs+PF09P3xbLSsqXj1+XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==