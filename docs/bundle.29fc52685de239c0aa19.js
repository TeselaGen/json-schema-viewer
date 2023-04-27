(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_erlang"],{

/***/ "./node_modules/refractor/lang/erlang.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/erlang.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = erlang
erlang.displayName = 'erlang'
erlang.aliases = []
function erlang(Prism) {
  Prism.languages.erlang = {
    comment: /%.+/,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    'quoted-function': {
      pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
      alias: 'function'
    },
    'quoted-atom': {
      pattern: /'(?:\\.|[^\\'\r\n])+'/,
      alias: 'atom'
    },
    boolean: /\b(?:true|false)\b/,
    keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
    number: [
      /\$\\?./,
      /\d+#[a-z0-9]+/i,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
    ],
    function: /\b[a-z][\w@]*(?=\()/,
    variable: {
      // Look-behind is used to prevent wrong highlighting of atoms containing "@"
      pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
      lookbehind: true
    },
    operator: [
      /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
      {
        // We don't want to match <<
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: true
      }
    ],
    atom: /\b[a-z][\w@]*/,
    punctuation: /[()[\]{}:;,.#|]|<<|>>/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZXJsYW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4yOWZjNTI2ODVkZTIzOWMwYWExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVybGFuZ1xuZXJsYW5nLmRpc3BsYXlOYW1lID0gJ2VybGFuZydcbmVybGFuZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGVybGFuZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZXJsYW5nID0ge1xuICAgIGNvbW1lbnQ6IC8lLisvLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdxdW90ZWQtZnVuY3Rpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OlxcXFwufFteXFxcXCdcXHJcXG5dKSsnKD89XFwoKS8sXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAgJ3F1b3RlZC1hdG9tJzoge1xuICAgICAgcGF0dGVybjogLycoPzpcXFxcLnxbXlxcXFwnXFxyXFxuXSkrJy8sXG4gICAgICBhbGlhczogJ2F0b20nXG4gICAgfSxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzpmdW58d2hlbnxjYXNlfG9mfGVuZHxpZnxyZWNlaXZlfGFmdGVyfHRyeXxjYXRjaClcXGIvLFxuICAgIG51bWJlcjogW1xuICAgICAgL1xcJFxcXFw/Li8sXG4gICAgICAvXFxkKyNbYS16MC05XSsvaSxcbiAgICAgIC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaVxuICAgIF0sXG4gICAgZnVuY3Rpb246IC9cXGJbYS16XVtcXHdAXSooPz1cXCgpLyxcbiAgICB2YXJpYWJsZToge1xuICAgICAgLy8gTG9vay1iZWhpbmQgaXMgdXNlZCB0byBwcmV2ZW50IHdyb25nIGhpZ2hsaWdodGluZyBvZiBhdG9tcyBjb250YWluaW5nIFwiQFwiXG4gICAgICBwYXR0ZXJuOiAvKF58W15AXSkoPzpcXGJ8XFw/KVtBLVpfXVtcXHdAXSovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IFtcbiAgICAgIC9bPVxcLzw+Ol09fD1bOlxcL109fFxcK1xcKz98LS0/fFs9KlxcLyFdfFxcYig/OmJub3R8ZGl2fHJlbXxiYW5kfGJvcnxieG9yfGJzbHxic3J8bm90fGFuZHxvcnx4b3J8b3JlbHNlfGFuZGFsc28pXFxiLyxcbiAgICAgIHtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBtYXRjaCA8PFxuICAgICAgICBwYXR0ZXJuOiAvKF58W148XSk8KD8hPCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIG1hdGNoID4+XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXj5dKT4oPyE+KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGF0b206IC9cXGJbYS16XVtcXHdAXSovLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpW1xcXXt9OjssLiN8XXw8PHw+Pi9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==