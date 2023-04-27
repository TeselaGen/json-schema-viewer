(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_sas"],{

/***/ "./node_modules/refractor/lang/sas.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sas.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = sas
sas.displayName = 'sas'
sas.aliases = []
function sas(Prism) {
  Prism.languages.sas = {
    datalines: {
      pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
      alias: 'string',
      inside: {
        keyword: {
          pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
          lookbehind: true
        },
        punctuation: /;/
      }
    },
    comment: [
      {
        pattern: /(^\s*|;\s*)\*.*;/m,
        lookbehind: true
      },
      /\/\*[\s\S]+?\*\//
    ],
    datetime: {
      // '1jan2013'd, '9:25:19pm't, '18jan2003:9:27:05am'dt
      pattern: /'[^']+'(?:dt?|t)\b/i,
      alias: 'number'
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
      greedy: true
    },
    keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
    // Decimal (1.2e23), hexadecimal (0c1x)
    number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
    punctuation: /[$%@.(){}\[\];,\\]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2FzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBIiwiZmlsZSI6ImJ1bmRsZS5lNjZiN2U4ZTg2YzQyOTJhMjAxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNhc1xuc2FzLmRpc3BsYXlOYW1lID0gJ3NhcydcbnNhcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNhcyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuc2FzID0ge1xuICAgIGRhdGFsaW5lczoge1xuICAgICAgcGF0dGVybjogL15cXHMqKD86KD86ZGF0YSk/bGluZXN8Y2FyZHMpO1tcXHNcXFNdKz8oPzpcXHI/XFxufFxccik7L2ltLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXihcXHMqKSg/Oig/OmRhdGEpP2xpbmVzfGNhcmRzKS9pLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHVuY3R1YXRpb246IC87L1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tbWVudDogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqfDtcXHMqKVxcKi4qOy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgL1xcL1xcKltcXHNcXFNdKz9cXCpcXC8vXG4gICAgXSxcbiAgICBkYXRldGltZToge1xuICAgICAgLy8gJzFqYW4yMDEzJ2QsICc5OjI1OjE5cG0ndCwgJzE4amFuMjAwMzo5OjI3OjA1YW0nZHRcbiAgICAgIHBhdHRlcm46IC8nW14nXSsnKD86ZHQ/fHQpXFxiL2ksXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzpcXDFcXDF8KD8hXFwxKVtcXHNcXFNdKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86ZGF0YXxlbHNlfGZvcm1hdHxpZnxpbnB1dHxwcm9jXFxzXFx3K3xxdWl0fHJ1bnx0aGVufGxpYm5hbWV8c2V0fG91dHB1dHxvcHRpb25zKVxcYi9pLFxuICAgIC8vIERlY2ltYWwgKDEuMmUyMyksIGhleGFkZWNpbWFsICgwYzF4KVxuICAgIG51bWJlcjogL1xcYig/OltcXGRhLWZdK3h8XFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspPykvaSxcbiAgICBvcGVyYXRvcjogL1xcKlxcKj98XFx8XFx8P3whIT98wqbCpj98PFs+PV0/fD5bPD1dP3xbLStcXC89Jl18W37CrF5dPT98XFxiKD86ZXF8bmV8Z3R8bHR8Z2V8bGV8aW58bm90KVxcYi9pLFxuICAgIHB1bmN0dWF0aW9uOiAvWyQlQC4oKXt9XFxbXFxdOyxcXFxcXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==