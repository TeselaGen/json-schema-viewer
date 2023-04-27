(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = roboconf
roboconf.displayName = 'roboconf'
roboconf.aliases = []
function roboconf(Prism) {
  Prism.languages.roboconf = {
    comment: /#.*/,
    keyword: {
      pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
      lookbehind: true
    },
    component: {
      pattern: /[\w-]+(?=[ \t]*\{)/,
      alias: 'variable'
    },
    property: /[\w.-]+(?=[ \t]*:)/,
    value: {
      pattern: /(=[ \t]*)[^,;]+/,
      lookbehind: true,
      alias: 'attr-value'
    },
    optional: {
      pattern: /\(optional\)/,
      alias: 'builtin'
    },
    wildcard: {
      pattern: /(\.)\*/,
      lookbehind: true,
      alias: 'operator'
    },
    punctuation: /[{},.;:=]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcm9ib2NvbmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsR0FBRztBQUN4QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4xMzdkNGIxZjE0NDhkMTM0MDQzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvYm9jb25mXG5yb2JvY29uZi5kaXNwbGF5TmFtZSA9ICdyb2JvY29uZidcbnJvYm9jb25mLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcm9ib2NvbmYoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnJvYm9jb25mID0ge1xuICAgIGNvbW1lbnQ6IC8jLiovLFxuICAgIGtleXdvcmQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxcXHMpKD86KD86ZmFjZXR8aW5zdGFuY2Ugb2YpKD89WyBcXHRdK1tcXHctXStbIFxcdF0qXFx7KXwoPzpleHRlcm5hbHxpbXBvcnQpXFxiKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBjb21wb25lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC9bXFx3LV0rKD89WyBcXHRdKlxceykvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIHByb3BlcnR5OiAvW1xcdy4tXSsoPz1bIFxcdF0qOikvLFxuICAgIHZhbHVlOiB7XG4gICAgICBwYXR0ZXJuOiAvKD1bIFxcdF0qKVteLDtdKy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdhdHRyLXZhbHVlJ1xuICAgIH0sXG4gICAgb3B0aW9uYWw6IHtcbiAgICAgIHBhdHRlcm46IC9cXChvcHRpb25hbFxcKS8sXG4gICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgfSxcbiAgICB3aWxkY2FyZDoge1xuICAgICAgcGF0dGVybjogLyhcXC4pXFwqLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9be30sLjs6PV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=