(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_brainfuck"],{

/***/ "./node_modules/refractor/lang/brainfuck.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/brainfuck.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = brainfuck
brainfuck.displayName = 'brainfuck'
brainfuck.aliases = []
function brainfuck(Prism) {
  Prism.languages.brainfuck = {
    pointer: {
      pattern: /<|>/,
      alias: 'keyword'
    },
    increment: {
      pattern: /\+/,
      alias: 'inserted'
    },
    decrement: {
      pattern: /-/,
      alias: 'deleted'
    },
    branching: {
      pattern: /\[|\]/,
      alias: 'important'
    },
    operator: /[.,]/,
    comment: /\S+/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYnJhaW5mdWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjU5NWY1MjFmMDAwMGUzYjRiYzJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYnJhaW5mdWNrXG5icmFpbmZ1Y2suZGlzcGxheU5hbWUgPSAnYnJhaW5mdWNrJ1xuYnJhaW5mdWNrLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYnJhaW5mdWNrKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5icmFpbmZ1Y2sgPSB7XG4gICAgcG9pbnRlcjoge1xuICAgICAgcGF0dGVybjogLzx8Pi8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBpbmNyZW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC9cXCsvLFxuICAgICAgYWxpYXM6ICdpbnNlcnRlZCdcbiAgICB9LFxuICAgIGRlY3JlbWVudDoge1xuICAgICAgcGF0dGVybjogLy0vLFxuICAgICAgYWxpYXM6ICdkZWxldGVkJ1xuICAgIH0sXG4gICAgYnJhbmNoaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxbfFxcXS8sXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgIG9wZXJhdG9yOiAvWy4sXS8sXG4gICAgY29tbWVudDogL1xcUysvXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=