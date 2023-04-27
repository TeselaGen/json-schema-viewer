(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = gedcom
gedcom.displayName = 'gedcom'
gedcom.aliases = []
function gedcom(Prism) {
  Prism.languages.gedcom = {
    'line-value': {
      // Preceded by level, optional pointer, and tag
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
      lookbehind: true,
      inside: {
        pointer: {
          pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
          alias: 'variable'
        }
      }
    },
    tag: {
      // Preceded by level and optional pointer
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
      lookbehind: true,
      alias: 'string'
    },
    level: {
      pattern: /(^\s*)\d+/m,
      lookbehind: true,
      alias: 'number'
    },
    pointer: {
      pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
      alias: 'variable'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ2VkY29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVksRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWSxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0RBQW9ELFlBQVksRUFBRTtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUNBQXVDLFlBQVksRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuY2JhNWMzNzgwMzBkMTZmN2RiOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnZWRjb21cbmdlZGNvbS5kaXNwbGF5TmFtZSA9ICdnZWRjb20nXG5nZWRjb20uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBnZWRjb20oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmdlZGNvbSA9IHtcbiAgICAnbGluZS12YWx1ZSc6IHtcbiAgICAgIC8vIFByZWNlZGVkIGJ5IGxldmVsLCBvcHRpb25hbCBwb2ludGVyLCBhbmQgdGFnXG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqXFxkKyArKD86QFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQCArKT9cXHcrICspLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgIHBhdHRlcm46IC9eQFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQCQvLFxuICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgLy8gUHJlY2VkZWQgYnkgbGV2ZWwgYW5kIG9wdGlvbmFsIHBvaW50ZXJcbiAgICAgIHBhdHRlcm46IC8oXlxccypcXGQrICsoPzpAXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAICspPylcXHcrL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBsZXZlbDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKilcXGQrL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdudW1iZXInXG4gICAgfSxcbiAgICBwb2ludGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvQFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQC8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==