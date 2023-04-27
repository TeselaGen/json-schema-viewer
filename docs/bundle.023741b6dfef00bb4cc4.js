(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_ocaml"],{

/***/ "./node_modules/refractor/lang/ocaml.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/ocaml.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = ocaml
ocaml.displayName = 'ocaml'
ocaml.aliases = []
function ocaml(Prism) {
  Prism.languages.ocaml = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: [
      {
        pattern: /"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      },
      {
        pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
        greedy: true
      }
    ],
    number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
    type: {
      pattern: /\B['`]\w*/,
      alias: 'variable'
    },
    directive: {
      pattern: /\B#\w+/,
      alias: 'function'
    },
    keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
    boolean: /\b(?:false|true)\b/,
    // Custom operators are allowed
    operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
    punctuation: /[(){}\[\]|_.,:;]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvb2NhbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjAyMzc0MWI2ZGZlZjAwYmI0Y2M0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb2NhbWxcbm9jYW1sLmRpc3BsYXlOYW1lID0gJ29jYW1sJ1xub2NhbWwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBvY2FtbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMub2NhbWwgPSB7XG4gICAgY29tbWVudDogL1xcKFxcKltcXHNcXFNdKj9cXCpcXCkvLFxuICAgIHN0cmluZzogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFsnYF0pKD86XFxcXCg/OlxcZCt8eFtcXGRhLWZdK3wuKXwoPyFcXDEpW15cXFxcXFxyXFxuXSlcXDEvaSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBudW1iZXI6IC9cXGIoPzoweFtcXGRhLWZdW1xcZGEtZl9dK3woPzowW2JvXSk/XFxkW1xcZF9dKlxcLj9bXFxkX10qKD86ZVsrLV0/W1xcZF9dKyk/KS9pLFxuICAgIHR5cGU6IHtcbiAgICAgIHBhdHRlcm46IC9cXEJbJ2BdXFx3Ki8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH0sXG4gICAgZGlyZWN0aXZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxCI1xcdysvLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzphc3xhc3NlcnR8YmVnaW58Y2xhc3N8Y29uc3RyYWludHxkb3xkb25lfGRvd250b3xlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJuYWx8Zm9yfGZ1bnxmdW5jdGlvbnxmdW5jdG9yfGlmfGlufGluY2x1ZGV8aW5oZXJpdHxpbml0aWFsaXplcnxsYXp5fGxldHxtYXRjaHxtZXRob2R8bW9kdWxlfG11dGFibGV8bmV3fG9iamVjdHxvZnxvcGVufHByZWZpeHxwcml2YXRlfHJlY3x0aGVufHNpZ3xzdHJ1Y3R8dG98dHJ5fHR5cGV8dmFsfHZhbHVlfHZpcnR1YWx8d2hlcmV8d2hpbGV8d2l0aClcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi8sXG4gICAgLy8gQ3VzdG9tIG9wZXJhdG9ycyBhcmUgYWxsb3dlZFxuICAgIG9wZXJhdG9yOiAvOj18Wz08PkBefCYrXFwtKlxcLyQlIT9+XVshJCUmKitcXC0uXFwvOjw9Pj9AXnx+XSp8XFxiKD86YW5kfGFzcnxsYW5kfGxvcnxseG9yfGxzbHxsc3J8bW9kfG5vcnxvcilcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpe31cXFtcXF18Xy4sOjtdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9