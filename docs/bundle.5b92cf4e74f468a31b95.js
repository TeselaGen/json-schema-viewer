(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_hsts"],{

/***/ "./node_modules/refractor/lang/hsts.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hsts.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = hsts
hsts.displayName = 'hsts'
hsts.aliases = []
function hsts(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/
   */
  Prism.languages.hsts = {
    directive: {
      pattern: /\b(?:max-age=|includeSubDomains|preload)/,
      alias: 'keyword'
    },
    safe: {
      pattern: /\d{8,}/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /\d{1,7}/,
      alias: 'function'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaHN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjViOTJjZjRlNzRmNDY4YTMxYjk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaHN0c1xuaHN0cy5kaXNwbGF5TmFtZSA9ICdoc3RzJ1xuaHN0cy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGhzdHMoUHJpc20pIHtcbiAgLyoqXG4gICAqIE9yaWdpbmFsIGJ5IFNjb3R0IEhlbG1lLlxuICAgKlxuICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vc2NvdHRoZWxtZS5jby51ay9oc3RzLWNoZWF0LXNoZWV0L1xuICAgKi9cbiAgUHJpc20ubGFuZ3VhZ2VzLmhzdHMgPSB7XG4gICAgZGlyZWN0aXZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86bWF4LWFnZT18aW5jbHVkZVN1YkRvbWFpbnN8cHJlbG9hZCkvLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sXG4gICAgc2FmZToge1xuICAgICAgcGF0dGVybjogL1xcZHs4LH0vLFxuICAgICAgYWxpYXM6ICdzZWxlY3RvcidcbiAgICB9LFxuICAgIHVuc2FmZToge1xuICAgICAgcGF0dGVybjogL1xcZHsxLDd9LyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9