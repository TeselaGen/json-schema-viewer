(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_nim"],{

/***/ "./node_modules/refractor/lang/nim.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nim.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = nim
nim.displayName = 'nim'
nim.aliases = []
function nim(Prism) {
  Prism.languages.nim = {
    comment: /#.*/,
    // Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)
    // Character literals are handled specifically to prevent issues with numeric type suffixes
    string: {
      pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
      greedy: true
    },
    // The negative look ahead prevents wrong highlighting of the .. operator
    number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
    keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
    function: {
      pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
      inside: {
        operator: /\*$/
      }
    },
    // We don't want to highlight operators inside backticks
    ignore: {
      pattern: /`[^`\r\n]+`/,
      inside: {
        punctuation: /`/
      }
    },
    operator: {
      // Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)
      // but allow the slice operator .. to take precedence over them
      // One can define his own operators in Nim so all combination of operators might be an operator.
      pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
      lookbehind: true
    },
    punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbmltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRJQUE0SSxFQUFFO0FBQzlJO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0ZBQXNGLElBQUk7QUFDMUY7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0IsbURBQW1EO0FBQzNGO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixXQUFXLFVBQVU7QUFDMUM7QUFDQSIsImZpbGUiOiJidW5kbGUuN2Q0MjY2OWI0OGU5MjdiNjY3OGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBuaW1cbm5pbS5kaXNwbGF5TmFtZSA9ICduaW0nXG5uaW0uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBuaW0oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm5pbSA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICAvLyBEb3VibGUtcXVvdGVkIHN0cmluZ3MgY2FuIGJlIHByZWZpeGVkIGJ5IGFuIGlkZW50aWZpZXIgKEdlbmVyYWxpemVkIHJhdyBzdHJpbmcgbGl0ZXJhbHMpXG4gICAgLy8gQ2hhcmFjdGVyIGxpdGVyYWxzIGFyZSBoYW5kbGVkIHNwZWNpZmljYWxseSB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIG51bWVyaWMgdHlwZSBzdWZmaXhlc1xuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyg/Oig/OlxcYig/IVxcZCkoPzpcXHd8XFxcXHhbOC05YS1mQS1GXVswLTlhLWZBLUZdKSspPyg/OlwiXCJcIltcXHNcXFNdKj9cIlwiXCIoPyFcIil8XCIoPzpcXFxcW1xcc1xcU118XCJcInxbXlwiXFxcXF0pKlwiKXwnKD86XFxcXCg/OlxcZCt8eFtcXGRhLWZBLUZdezJ9fC4pfFteJ10pJykvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyBUaGUgbmVnYXRpdmUgbG9vayBhaGVhZCBwcmV2ZW50cyB3cm9uZyBoaWdobGlnaHRpbmcgb2YgdGhlIC4uIG9wZXJhdG9yXG4gICAgbnVtYmVyOiAvXFxiKD86MFt4WG9PYkJdW1xcZGEtZkEtRl9dK3xcXGRbXFxkX10qKD86KD8hXFwuXFwuKVxcLltcXGRfXSopPyg/OltlRV1bKy1dP1xcZFtcXGRfXSopPykoPzonP1tpdWZdXFxkKik/LyxcbiAgICBrZXl3b3JkOiAvXFxiKD86YWRkcnxhc3xhc218YXRvbWljfGJpbmR8YmxvY2t8YnJlYWt8Y2FzZXxjYXN0fGNvbmNlcHR8Y29uc3R8Y29udGludWV8Y29udmVydGVyfGRlZmVyfGRpc2NhcmR8ZGlzdGluY3R8ZG98ZWxpZnxlbHNlfGVuZHxlbnVtfGV4Y2VwdHxleHBvcnR8ZmluYWxseXxmb3J8ZnJvbXxmdW5jfGdlbmVyaWN8aWZ8aW1wb3J0fGluY2x1ZGV8aW50ZXJmYWNlfGl0ZXJhdG9yfGxldHxtYWNyb3xtZXRob2R8bWl4aW58bmlsfG9iamVjdHxvdXR8cHJvY3xwdHJ8cmFpc2V8cmVmfHJldHVybnxzdGF0aWN8dGVtcGxhdGV8dHJ5fHR1cGxlfHR5cGV8dXNpbmd8dmFyfHdoZW58d2hpbGV8d2l0aHx3aXRob3V0fHlpZWxkKVxcYi8sXG4gICAgZnVuY3Rpb246IHtcbiAgICAgIHBhdHRlcm46IC8oPzooPyFcXGQpKD86XFx3fFxcXFx4WzgtOWEtZkEtRl1bMC05YS1mQS1GXSkrfGBbXmBcXHJcXG5dK2ApXFwqPyg/OlxcW1teXFxdXStcXF0pPyg/PVxccypcXCgpLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBvcGVyYXRvcjogL1xcKiQvXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIGhpZ2hsaWdodCBvcGVyYXRvcnMgaW5zaWRlIGJhY2t0aWNrc1xuICAgIGlnbm9yZToge1xuICAgICAgcGF0dGVybjogL2BbXmBcXHJcXG5dK2AvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvYC9cbiAgICAgIH1cbiAgICB9LFxuICAgIG9wZXJhdG9yOiB7XG4gICAgICAvLyBMb29rIGJlaGluZCBhbmQgbG9vayBhaGVhZCBwcmV2ZW50IHdyb25nIGhpZ2hsaWdodGluZyBvZiBwdW5jdHVhdGlvbnMgWy4gLl0gey4gLn0gKC4gLilcbiAgICAgIC8vIGJ1dCBhbGxvdyB0aGUgc2xpY2Ugb3BlcmF0b3IgLi4gdG8gdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlbVxuICAgICAgLy8gT25lIGNhbiBkZWZpbmUgaGlzIG93biBvcGVyYXRvcnMgaW4gTmltIHNvIGFsbCBjb21iaW5hdGlvbiBvZiBvcGVyYXRvcnMgbWlnaHQgYmUgYW4gb3BlcmF0b3IuXG4gICAgICBwYXR0ZXJuOiAvKF58Wyh7XFxbXSg/PVxcLlxcLil8KD8hWyh7XFxbXVxcLikuKSg/Oig/Ols9K1xcLSpcXC88PkAkfiYlfCE/XjpcXFxcXXxcXC5cXC58XFwuKD8hWyl9XFxdXSkpK3xcXGIoPzphbmR8ZGl2fG9mfG9yfGlufGlzfGlzbm90fG1vZHxub3R8bm90aW58c2hsfHNocnx4b3IpXFxiKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9bKHtcXFtdXFwufFxcLlspfVxcXV18W2AoKXt9XFxbXFxdLDpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9