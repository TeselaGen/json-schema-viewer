(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_tap"],{

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = tap
tap.displayName = 'tap'
tap.aliases = []
function tap(Prism) {
  Prism.languages.tap = {
    fail: /not ok[^#{\n\r]*/,
    pass: /ok[^#{\n\r]*/,
    pragma: /pragma [+-][a-z]+/,
    bailout: /bail out!.*/i,
    version: /TAP version \d+/i,
    plan: /\d+\.\.\d+(?: +#.*)?/,
    subtest: {
      pattern: /# Subtest(?:: .*)?/,
      greedy: true
    },
    punctuation: /[{}]/,
    directive: /#.*/,
    yamlish: {
      pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
      lookbehind: true,
      inside: Prism.languages.yaml,
      alias: 'language-yaml'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdGFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmFmYWQ1Zjc2N2NjZWE1MzZjMGQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGFwXG50YXAuZGlzcGxheU5hbWUgPSAndGFwJ1xudGFwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdGFwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy50YXAgPSB7XG4gICAgZmFpbDogL25vdCBva1teI3tcXG5cXHJdKi8sXG4gICAgcGFzczogL29rW14je1xcblxccl0qLyxcbiAgICBwcmFnbWE6IC9wcmFnbWEgWystXVthLXpdKy8sXG4gICAgYmFpbG91dDogL2JhaWwgb3V0IS4qL2ksXG4gICAgdmVyc2lvbjogL1RBUCB2ZXJzaW9uIFxcZCsvaSxcbiAgICBwbGFuOiAvXFxkK1xcLlxcLlxcZCsoPzogKyMuKik/LyxcbiAgICBzdWJ0ZXN0OiB7XG4gICAgICBwYXR0ZXJuOiAvIyBTdWJ0ZXN0KD86OiAuKik/LyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9be31dLyxcbiAgICBkaXJlY3RpdmU6IC8jLiovLFxuICAgIHlhbWxpc2g6IHtcbiAgICAgIHBhdHRlcm46IC8oXlteXFxTXFxyXFxuXSopLS0tKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9bXlxcU1xcclxcbl0qXFwuXFwuXFwuJC9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnlhbWwsXG4gICAgICBhbGlhczogJ2xhbmd1YWdlLXlhbWwnXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9