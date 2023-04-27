(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_twig"],{

/***/ "./node_modules/refractor/lang/twig.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/twig.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = twig
twig.displayName = 'twig'
twig.aliases = []
function twig(Prism) {
  Prism.languages.twig = {
    comment: /\{#[\s\S]*?#\}/,
    tag: {
      pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
      inside: {
        ld: {
          pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
          inside: {
            punctuation: /^(?:\{\{|\{%)-?/,
            keyword: /\w+/
          }
        },
        rd: {
          pattern: /-?(?:%\}|\}\})$/,
          inside: {
            punctuation: /.+/
          }
        },
        string: {
          pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          inside: {
            punctuation: /^['"]|['"]$/
          }
        },
        keyword: /\b(?:even|if|odd)\b/,
        boolean: /\b(?:true|false|null)\b/,
        number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
        operator: [
          {
            pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
            lookbehind: true
          },
          /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
        ],
        property: /\b[a-zA-Z_]\w*\b/,
        punctuation: /[()\[\]{}:.,]/
      }
    },
    // The rest can be parsed as HTML
    other: {
      // We want non-blank matches
      pattern: /\S(?:[\s\S]*\S)?/,
      inside: Prism.languages.markup
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdHdpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxZQUFZO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRSxLQUFLO0FBQ2pDO0FBQ0EsZ0NBQWdDLEVBQUUsR0FBRztBQUNyQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLEdBQUcsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNTczYjNkOWExOTk4ZTliZjc4YTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0d2lnXG50d2lnLmRpc3BsYXlOYW1lID0gJ3R3aWcnXG50d2lnLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdHdpZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudHdpZyA9IHtcbiAgICBjb21tZW50OiAvXFx7I1tcXHNcXFNdKj8jXFx9LyxcbiAgICB0YWc6IHtcbiAgICAgIHBhdHRlcm46IC9cXHtcXHtbXFxzXFxTXSo/XFx9XFx9fFxceyVbXFxzXFxTXSo/JVxcfS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgbGQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXig/Olxce1xcey0/fFxceyUtP1xccypcXHcrKS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL14oPzpcXHtcXHt8XFx7JSktPy8sXG4gICAgICAgICAgICBrZXl3b3JkOiAvXFx3Ky9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJkOiB7XG4gICAgICAgICAgcGF0dGVybjogLy0/KD86JVxcfXxcXH1cXH0pJC8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogLy4rL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nOiB7XG4gICAgICAgICAgcGF0dGVybjogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9eWydcIl18WydcIl0kL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZDogL1xcYig/OmV2ZW58aWZ8b2RkKVxcYi8sXG4gICAgICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlfG51bGwpXFxiLyxcbiAgICAgICAgbnVtYmVyOiAvXFxiMHhbXFxkQS1GYS1mXSt8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86W0VlXVstK10/XFxkKyk/LyxcbiAgICAgICAgb3BlcmF0b3I6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKFxccykoPzphbmR8Yi1hbmR8Yi14b3J8Yi1vcnxlbmRzIHdpdGh8aW58aXN8bWF0Y2hlc3xub3R8b3J8c2FtZSBhc3xzdGFydHMgd2l0aCkoPz1cXHMpLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIC9bPTw+XT0/fCE9fFxcKlxcKj98XFwvXFwvP3xcXD86P3xbLSt+JXxdL1xuICAgICAgICBdLFxuICAgICAgICBwcm9wZXJ0eTogL1xcYlthLXpBLVpfXVxcdypcXGIvLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1soKVxcW1xcXXt9Oi4sXS9cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFRoZSByZXN0IGNhbiBiZSBwYXJzZWQgYXMgSFRNTFxuICAgIG90aGVyOiB7XG4gICAgICAvLyBXZSB3YW50IG5vbi1ibGFuayBtYXRjaGVzXG4gICAgICBwYXR0ZXJuOiAvXFxTKD86W1xcc1xcU10qXFxTKT8vLFxuICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9