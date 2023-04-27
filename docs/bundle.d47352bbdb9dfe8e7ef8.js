(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_ada"],{

/***/ "./node_modules/refractor/lang/ada.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = ada
ada.displayName = 'ada'
ada.aliases = []
function ada(Prism) {
  Prism.languages.ada = {
    comment: /--.*/,
    string: /"(?:""|[^"\r\f\n])*"/i,
    number: [
      {
        pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
      },
      {
        pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
      }
    ],
    'attr-name': /\b'\w+/i,
    keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
    punctuation: /\.\.?|[,;():]/,
    char: /'.'/,
    variable: /\b[a-z](?:[_a-z\d])*\b/i
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYWRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmQ0NzM1MmJiZGI5ZGZlOGU3ZWY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWRhXG5hZGEuZGlzcGxheU5hbWUgPSAnYWRhJ1xuYWRhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYWRhKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hZGEgPSB7XG4gICAgY29tbWVudDogLy0tLiovLFxuICAgIHN0cmluZzogL1wiKD86XCJcInxbXlwiXFxyXFxmXFxuXSkqXCIvaSxcbiAgICBudW1iZXI6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1xcYlxcZCg/Ol8/XFxkKSojW1xcZEEtRl0oPzpfP1tcXGRBLUZdKSooPzpcXC5bXFxkQS1GXSg/Ol8/W1xcZEEtRl0pKik/Iyg/OkVbKy1dP1xcZCg/Ol8/XFxkKSopPy9pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkKD86Xz9cXGQpKig/OlxcLlxcZCg/Ol8/XFxkKSopPyg/OkVbKy1dP1xcZCg/Ol8/XFxkKSopP1xcYi9pXG4gICAgICB9XG4gICAgXSxcbiAgICAnYXR0ci1uYW1lJzogL1xcYidcXHcrL2ksXG4gICAga2V5d29yZDogL1xcYig/OmFib3J0fGFic3xhYnN0cmFjdHxhY2NlcHR8YWNjZXNzfGFsaWFzZWR8YWxsfGFuZHxhcnJheXxhdHxiZWdpbnxib2R5fGNhc2V8Y29uc3RhbnR8ZGVjbGFyZXxkZWxheXxkZWx0YXxkaWdpdHN8ZG98ZWxzZXxuZXd8cmV0dXJufGVsc2lmfGVuZHxlbnRyeXxleGNlcHRpb258ZXhpdHxmb3J8ZnVuY3Rpb258Z2VuZXJpY3xnb3RvfGlmfGlufGludGVyZmFjZXxpc3xsaW1pdGVkfGxvb3B8bW9kfG5vdHxudWxsfG9mfG90aGVyc3xvdXR8b3ZlcnJpZGluZ3xwYWNrYWdlfHByYWdtYXxwcml2YXRlfHByb2NlZHVyZXxwcm90ZWN0ZWR8cmFpc2V8cmFuZ2V8cmVjb3JkfHJlbXxyZW5hbWVzfHJlcXVldWV8cmV2ZXJzZXxzZWxlY3R8c2VwYXJhdGV8c29tZXxzdWJ0eXBlfHN5bmNocm9uaXplZHx0YWdnZWR8dGFza3x0ZXJtaW5hdGV8dGhlbnx0eXBlfHVudGlsfHVzZXx3aGVufHdoaWxlfHdpdGh8eG9yKVxcYi9pLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi9pLFxuICAgIG9wZXJhdG9yOiAvPFs9Pl0/fD49P3w9Pj98Oj18XFwvPT98XFwqXFwqP3xbJistXS8sXG4gICAgcHVuY3R1YXRpb246IC9cXC5cXC4/fFssOygpOl0vLFxuICAgIGNoYXI6IC8nLicvLFxuICAgIHZhcmlhYmxlOiAvXFxiW2Etel0oPzpbX2EtelxcZF0pKlxcYi9pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=