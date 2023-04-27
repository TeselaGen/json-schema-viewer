(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_monkey"],{

/***/ "./node_modules/refractor/lang/monkey.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/monkey.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = monkey
monkey.displayName = 'monkey'
monkey.aliases = []
function monkey(Prism) {
  Prism.languages.monkey = {
    string: /"[^"\r\n]*"/,
    comment: [
      {
        pattern: /^#Rem\s+[\s\S]*?^#End/im,
        greedy: true
      },
      {
        pattern: /'.+/,
        greedy: true
      }
    ],
    preprocessor: {
      pattern: /(^[ \t]*)#.+/m,
      lookbehind: true,
      alias: 'comment'
    },
    function: /\w+(?=\()/,
    'type-char': {
      pattern: /(\w)[?%#$]/,
      lookbehind: true,
      alias: 'variable'
    },
    number: {
      pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
      lookbehind: true
    },
    keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
    operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
    punctuation: /[.,:;()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbW9ua2V5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmM0MDM0ZmRmNWUzYjFiNjE1YWYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbW9ua2V5XG5tb25rZXkuZGlzcGxheU5hbWUgPSAnbW9ua2V5J1xubW9ua2V5LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbW9ua2V5KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5tb25rZXkgPSB7XG4gICAgc3RyaW5nOiAvXCJbXlwiXFxyXFxuXSpcIi8sXG4gICAgY29tbWVudDogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXiNSZW1cXHMrW1xcc1xcU10qP14jRW5kL2ltLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8nLisvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHByZXByb2Nlc3Nvcjoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKikjLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgfSxcbiAgICBmdW5jdGlvbjogL1xcdysoPz1cXCgpLyxcbiAgICAndHlwZS1jaGFyJzoge1xuICAgICAgcGF0dGVybjogLyhcXHcpWz8lIyRdLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBwYXR0ZXJuOiAvKCg/OlxcLlxcLik/KSg/Oig/OlxcYnxcXEItXFwuP3xcXEJcXC4pXFxkKyg/Oig/IVxcLlxcLilcXC5cXGQqKT98XFwkW1xcZGEtZl0rKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OlZvaWR8U3RyaWN0fFB1YmxpY3xQcml2YXRlfFByb3BlcnR5fEJvb2x8SW50fEZsb2F0fFN0cmluZ3xBcnJheXxPYmplY3R8Q29udGludWV8RXhpdHxJbXBvcnR8RXh0ZXJufE5ld3xTZWxmfFN1cGVyfFRyeXxDYXRjaHxFYWNoaW58VHJ1ZXxGYWxzZXxFeHRlbmRzfEFic3RyYWN0fEZpbmFsfFNlbGVjdHxDYXNlfERlZmF1bHR8Q29uc3R8TG9jYWx8R2xvYmFsfEZpZWxkfE1ldGhvZHxGdW5jdGlvbnxDbGFzc3xFbmR8SWZ8VGhlbnxFbHNlfEVsc2VJZnxFbmRJZnxXaGlsZXxXZW5kfFJlcGVhdHxVbnRpbHxGb3JldmVyfEZvcnxUb3xTdGVwfE5leHR8UmV0dXJufE1vZHVsZXxJbnRlcmZhY2V8SW1wbGVtZW50c3xJbmxpbmV8VGhyb3d8TnVsbClcXGIvaSxcbiAgICBvcGVyYXRvcjogL1xcLlxcLnw8Wz0+XT98Pj0/fDo/PXwoPzpbK1xcLSpcXC8mfnxdfFxcYig/Ok1vZHxTaGx8U2hyKVxcYik9P3xcXGIoPzpBbmR8Tm90fE9yKVxcYi9pLFxuICAgIHB1bmN0dWF0aW9uOiAvWy4sOjsoKVxcW1xcXV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=