(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_j"],{

/***/ "./node_modules/refractor/lang/j.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/j.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = j
j.displayName = 'j'
j.aliases = []
function j(Prism) {
  Prism.languages.j = {
    comment: /\bNB\..*/,
    string: {
      pattern: /'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
    verb: {
      // Negative look-ahead prevents bad highlighting
      // of ^: ;. =. =: !. !:
      pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
      alias: 'keyword'
    },
    number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
    adverb: {
      pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
      alias: 'builtin'
    },
    operator: /[=a][.:]|_\./,
    conjunction: {
      pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
      alias: 'variable'
    },
    punctuation: /[()]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHdCQUF3QixpQkFBaUIsNkRBQTZELFNBQVM7QUFDL0c7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZGY2MTVlNTc5NTMwZTZjZjE1YjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBqXG5qLmRpc3BsYXlOYW1lID0gJ2onXG5qLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaiA9IHtcbiAgICBjb21tZW50OiAvXFxiTkJcXC4uKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OicnfFteJ1xcclxcbl0pKicvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86KD86YWR2ZXJifGNvbmp1bmN0aW9ufENSfGRlZnxkZWZpbmV8ZHlhZHxMRnxtb25hZHxub3VufHZlcmIpXFxifCg/OmFzc2VydHxicmVha3xjYXNlfGNhdGNoW2R0XT98Y29udGludWV8ZG98ZWxzZXxlbHNlaWZ8ZW5kfGZjYXNlfGZvcnxmb3JfXFx3K3xnb3RvX1xcdyt8aWZ8bGFiZWxfXFx3K3xyZXR1cm58c2VsZWN0fHRocm93fHRyeXx3aGlsZXx3aGlsc3QpXFwuKS8sXG4gICAgdmVyYjoge1xuICAgICAgLy8gTmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBiYWQgaGlnaGxpZ2h0aW5nXG4gICAgICAvLyBvZiBeOiA7LiA9LiA9OiAhLiAhOlxuICAgICAgcGF0dGVybjogLyg/IVxcXjp8O1xcLnxbPSFdWy46XSkoPzpcXHsoPzpcXC58Ojo/KT98cCg/OlxcLlxcLj98Oil8Wz0hXFxdXXxbPD4rKlxcLSUkfCwjXVsuOl0/fFs/Xl1cXC4/fFs7XFxbXTo/fFt+fVwiaV1bLjpdfFtBQ2VFSWpMb3JdXFwufCg/OltfXFwvXFxcXHFzdXhdfF8/XFxkKTopLyxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIG51bWJlcjogL1xcYl8/KD86KD8hXFxkOilcXGQrKD86XFwuXFxkKyk/KD86KD86W2VqcHhdfGFkfGFyKV8/XFxkKyg/OlxcLlxcZCspPykqKD86Yl8/W1xcZGEtel0rKD86XFwuW1xcZGEtel0rKT8pP3xfKD8hXFwuKSkvLFxuICAgIGFkdmVyYjoge1xuICAgICAgcGF0dGVybjogL1t+fV18W1xcL1xcXFxdXFwuP3xbYmZNXVxcLnx0Wy46XS8sXG4gICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgfSxcbiAgICBvcGVyYXRvcjogL1s9YV1bLjpdfF9cXC4vLFxuICAgIGNvbmp1bmN0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvJig/OlxcLjo/fDopP3xbLjpAXVsuOl0/fFshRF1bLjpdfFs7ZEhUXVxcLnxgOj98W1xcXkxTXTp8XCIvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvWygpXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==