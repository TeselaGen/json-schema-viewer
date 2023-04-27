(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_apl"],{

/***/ "./node_modules/refractor/lang/apl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/apl.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = apl
apl.displayName = 'apl'
apl.aliases = []
function apl(Prism) {
  Prism.languages.apl = {
    comment: /(?:⍝|#[! ]).*$/m,
    string: {
      pattern: /'(?:[^'\r\n]|'')*'/,
      greedy: true
    },
    number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    'system-function': {
      pattern: /⎕[A-Z]+/i,
      alias: 'function'
    },
    constant: /[⍬⌾#⎕⍞]/,
    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
    'monadic-operator': {
      pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
      alias: 'operator'
    },
    'dyadic-operator': {
      pattern: /[.⍣⍠⍤∘⌸@⌺]/,
      alias: 'operator'
    },
    assignment: {
      pattern: /←/,
      alias: 'keyword'
    },
    punctuation: /[\[;\]()◇⋄]/,
    dfn: {
      pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
      alias: 'builtin'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmE4MjFlMmVkOTNkMDBlYmUzMDNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXBsXG5hcGwuZGlzcGxheU5hbWUgPSAnYXBsJ1xuYXBsLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYXBsKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hcGwgPSB7XG4gICAgY29tbWVudDogLyg/OuKNnXwjWyEgXSkuKiQvbSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8nKD86W14nXFxyXFxuXXwnJykqJy8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogL8KvPyg/OlxcZCpcXC4/XFxkKyg/OmVbK8KvXT9cXGQrKT98wq984oieKSg/OmrCrz8oPzpcXGQqXFwuP1xcZCsoPzplWyvCr10/XFxkKyk/fMKvfOKInikpPy9pLFxuICAgIHN0YXRlbWVudDogLzpbQS1aXVthLXpdW0EtWmEtel0qXFxiLyxcbiAgICAnc3lzdGVtLWZ1bmN0aW9uJzoge1xuICAgICAgcGF0dGVybjogL+KOlVtBLVpdKy9pLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIGNvbnN0YW50OiAvW+KNrOKMviPijpXijZ5dLyxcbiAgICBmdW5jdGlvbjogL1stK8OXw7fijIjijIriiKN84o2z4o24PyrijZ/il4sh4oy5POKJpD0+4oml4omg4omh4omi4oiK4o234oiq4oipfuKIqOKIp+KNseKNsuKNtCzijarijL3iipbijYnihpHihpPiioLiioPiiobiiofijLfijYvijZLiiqTiiqXijZXijY7iiqPiiqLijYHijYLiiYjija/ihpfCpOKGkl0vLFxuICAgICdtb25hZGljLW9wZXJhdG9yJzoge1xuICAgICAgcGF0dGVybjogL1tcXFxcXFwv4oy/4o2AwqjijajijLYm4oilXS8sXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgJ2R5YWRpYy1vcGVyYXRvcic6IHtcbiAgICAgIHBhdHRlcm46IC9bLuKNo+KNoOKNpOKImOKMuEDijLpdLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICBhc3NpZ25tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAv4oaQLyxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcWztcXF0oKeKXh+KLhF0vLFxuICAgIGRmbjoge1xuICAgICAgcGF0dGVybjogL1t7feKNuuKNteKNtuKNueKIh+KNqzpdLyxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=