(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_smalltalk"],{

/***/ "./node_modules/refractor/lang/smalltalk.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = smalltalk
smalltalk.displayName = 'smalltalk'
smalltalk.aliases = []
function smalltalk(Prism) {
  Prism.languages.smalltalk = {
    comment: /"(?:""|[^"])*"/,
    string: /'(?:''|[^'])*'/,
    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    'block-arguments': {
      pattern: /(\[\s*):[^\[|]*\|/,
      lookbehind: true,
      inside: {
        variable: /:[\da-z]+/i,
        punctuation: /\|/
      }
    },
    'temporary-variables': {
      pattern: /\|[^|]+\|/,
      inside: {
        variable: /[\da-z]+/i,
        punctuation: /\|/
      }
    },
    keyword: /\b(?:nil|true|false|self|super|new)\b/,
    character: {
      pattern: /\$./,
      alias: 'string'
    },
    number: [
      /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
      /\b\d+(?:\.\d+)?(?:e-?\d+)?/
    ],
    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    punctuation: /[.;:?\[\](){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc21hbGx0YWxrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjA5ZmVmZTFmMWEzMTEzODM3MzZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc21hbGx0YWxrXG5zbWFsbHRhbGsuZGlzcGxheU5hbWUgPSAnc21hbGx0YWxrJ1xuc21hbGx0YWxrLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc21hbGx0YWxrKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zbWFsbHRhbGsgPSB7XG4gICAgY29tbWVudDogL1wiKD86XCJcInxbXlwiXSkqXCIvLFxuICAgIHN0cmluZzogLycoPzonJ3xbXiddKSonLyxcbiAgICBzeW1ib2w6IC8jW1xcZGEtel0rfCMoPzotfChbK1xcL1xcXFwqfjw+PUAlfCY/IV0pXFwxPyl8Iyg/PVxcKCkvaSxcbiAgICAnYmxvY2stYXJndW1lbnRzJzoge1xuICAgICAgcGF0dGVybjogLyhcXFtcXHMqKTpbXlxcW3xdKlxcfC8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvOltcXGRhLXpdKy9pLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgIH1cbiAgICB9LFxuICAgICd0ZW1wb3JhcnktdmFyaWFibGVzJzoge1xuICAgICAgcGF0dGVybjogL1xcfFtefF0rXFx8LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB2YXJpYWJsZTogL1tcXGRhLXpdKy9pLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpuaWx8dHJ1ZXxmYWxzZXxzZWxmfHN1cGVyfG5ldylcXGIvLFxuICAgIGNoYXJhY3Rlcjoge1xuICAgICAgcGF0dGVybjogL1xcJC4vLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBudW1iZXI6IFtcbiAgICAgIC9cXGQrci0/W1xcZEEtWl0rKD86XFwuW1xcZEEtWl0rKT8oPzplLT9cXGQrKT8vLFxuICAgICAgL1xcYlxcZCsoPzpcXC5cXGQrKT8oPzplLT9cXGQrKT8vXG4gICAgXSxcbiAgICBvcGVyYXRvcjogL1s8PV09P3w6PXx+W349XXxcXC9cXC8/fFxcXFxcXFxcfD5bPj1dP3xbIV4rXFwtKiZ8LEBdLyxcbiAgICBwdW5jdHVhdGlvbjogL1suOzo/XFxbXFxdKCl7fV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=