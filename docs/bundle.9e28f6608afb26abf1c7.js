(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_kotlin"],{

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = kotlin
kotlin.displayName = 'kotlin'
kotlin.aliases = []
function kotlin(Prism) {
  ;(function(Prism) {
    Prism.languages.kotlin = Prism.languages.extend('clike', {
      keyword: {
        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: true
      },
      function: [
        /\w+(?=\s*\()/,
        {
          pattern: /(\.)\w+(?=\s*\{)/,
          lookbehind: true
        }
      ],
      number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    })
    delete Prism.languages.kotlin['class-name']
    Prism.languages.insertBefore('kotlin', 'string', {
      'raw-string': {
        pattern: /("""|''')[\s\S]*?\1/,
        alias: 'string' // See interpolation below
      }
    })
    Prism.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin'
      }
    })
    Prism.languages.insertBefore('kotlin', 'function', {
      label: {
        pattern: /\w+@|@\w+/,
        alias: 'symbol'
      }
    })
    var interpolation = [
      {
        pattern: /\$\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^\$\{|\}$/,
            alias: 'variable'
          },
          rest: Prism.languages.kotlin
        }
      },
      {
        pattern: /\$\w+/,
        alias: 'variable'
      }
    ]
    Prism.languages.kotlin['string'].inside = Prism.languages.kotlin[
      'raw-string'
    ].inside = {
      interpolation: interpolation
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcva290bGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLEdBQUcsSUFBSTtBQUM3QjtBQUNBO0FBQ0EsMkJBQTJCLEdBQUc7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuOWUyOGY2NjA4YWZiMjZhYmYxYzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBrb3RsaW5cbmtvdGxpbi5kaXNwbGF5TmFtZSA9ICdrb3RsaW4nXG5rb3RsaW4uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBrb3RsaW4oUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy5rb3RsaW4gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgLy8gVGhlIGxvb2tiZWhpbmQgcHJldmVudHMgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIGUuZy4ga290bGluLnByb3BlcnRpZXMuZ2V0XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXi5dKVxcYig/OmFic3RyYWN0fGFjdHVhbHxhbm5vdGF0aW9ufGFzfGJyZWFrfGJ5fGNhdGNofGNsYXNzfGNvbXBhbmlvbnxjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxjcm9zc2lubGluZXxkYXRhfGRvfGR5bmFtaWN8ZWxzZXxlbnVtfGV4cGVjdHxleHRlcm5hbHxmaW5hbHxmaW5hbGx5fGZvcnxmdW58Z2V0fGlmfGltcG9ydHxpbnxpbmZpeHxpbml0fGlubGluZXxpbm5lcnxpbnRlcmZhY2V8aW50ZXJuYWx8aXN8bGF0ZWluaXR8bm9pbmxpbmV8bnVsbHxvYmplY3R8b3BlbnxvcGVyYXRvcnxvdXR8b3ZlcnJpZGV8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVpZmllZHxyZXR1cm58c2VhbGVkfHNldHxzdXBlcnxzdXNwZW5kfHRhaWxyZWN8dGhpc3x0aHJvd3x0b3x0cnl8dHlwZWFsaWFzfHZhbHx2YXJ8dmFyYXJnfHdoZW58d2hlcmV8d2hpbGUpXFxiLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBbXG4gICAgICAgIC9cXHcrKD89XFxzKlxcKCkvLFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXC4pXFx3Kyg/PVxccypcXHspLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBudW1iZXI6IC9cXGIoPzowW3hYXVtcXGRhLWZBLUZdKyg/Ol9bXFxkYS1mQS1GXSspKnwwW2JCXVswMV0rKD86X1swMV0rKSp8XFxkKyg/Ol9cXGQrKSooPzpcXC5cXGQrKD86X1xcZCspKik/KD86W2VFXVsrLV0/XFxkKyg/Ol9cXGQrKSopP1tmRkxdPylcXGIvLFxuICAgICAgb3BlcmF0b3I6IC9cXCtbKz1dP3wtWy09Pl0/fD09Pz0/fCEoPzohfD09Pyk/fFtcXC8qJTw+XT0/fFs/Ol06P3xcXC5cXC58JiZ8XFx8XFx8fFxcYig/OmFuZHxpbnZ8b3J8c2hsfHNocnx1c2hyfHhvcilcXGIvXG4gICAgfSlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmtvdGxpblsnY2xhc3MtbmFtZSddXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgna290bGluJywgJ3N0cmluZycsIHtcbiAgICAgICdyYXctc3RyaW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKFwiXCJcInwnJycpW1xcc1xcU10qP1xcMS8sXG4gICAgICAgIGFsaWFzOiAnc3RyaW5nJyAvLyBTZWUgaW50ZXJwb2xhdGlvbiBiZWxvd1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgna290bGluJywgJ2tleXdvcmQnLCB7XG4gICAgICBhbm5vdGF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXEJAKD86XFx3KzopPyg/OltBLVpdXFx3KnxcXFtbXlxcXV0rXFxdKS8sXG4gICAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2tvdGxpbicsICdmdW5jdGlvbicsIHtcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXHcrQHxAXFx3Ky8sXG4gICAgICAgIGFsaWFzOiAnc3ltYm9sJ1xuICAgICAgfVxuICAgIH0pXG4gICAgdmFyIGludGVycG9sYXRpb24gPSBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG4gICAgICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmtvdGxpblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkXFx3Ky8sXG4gICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICB9XG4gICAgXVxuICAgIFByaXNtLmxhbmd1YWdlcy5rb3RsaW5bJ3N0cmluZyddLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5rb3RsaW5bXG4gICAgICAncmF3LXN0cmluZydcbiAgICBdLmluc2lkZSA9IHtcbiAgICAgIGludGVycG9sYXRpb246IGludGVycG9sYXRpb25cbiAgICB9XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==