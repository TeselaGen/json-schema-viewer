(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_objectivec"],{

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = c
c.displayName = 'c'
c.aliases = []
function c(Prism) {
  Prism.languages.c = Prism.languages.extend('clike', {
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
  })
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight the path of the include statement as a string
        string: {
          pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
          lookbehind: true
        },
        // highlight macro directives as keywords
        directive: {
          pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    },
    // highlight predefined macros as constants
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
  })
  delete Prism.languages.c['boolean']
}


/***/ }),

/***/ "./node_modules/refractor/lang/objectivec.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/objectivec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = objectivec
objectivec.displayName = 'objectivec'
objectivec.aliases = []
function objectivec(Prism) {
  Prism.register(refractorC)
  Prism.languages.objectivec = Prism.languages.extend('c', {
    keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  })
  delete Prism.languages.objectivec['class-name']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYy5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvb2JqZWN0aXZlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN4Q1k7QUFDWixpQkFBaUIsbUJBQU8sQ0FBQyxrREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJidW5kbGUuMzI0NDZjMzY0ZWQ2MGQ3MzYyZTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjXG5jLmRpc3BsYXlOYW1lID0gJ2MnXG5jLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLyhcXGIoPzplbnVtfHN0cnVjdClcXHMrKVxcdysvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/Ol9BbGlnbmFzfF9BbGlnbm9mfF9BdG9taWN8X0Jvb2x8X0NvbXBsZXh8X0dlbmVyaWN8X0ltYWdpbmFyeXxfTm9yZXR1cm58X1N0YXRpY19hc3NlcnR8X1RocmVhZF9sb2NhbHxhc218dHlwZW9mfGlubGluZXxhdXRvfGJyZWFrfGNhc2V8Y2hhcnxjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXh0ZXJufGZsb2F0fGZvcnxnb3RvfGlmfGludHxsb25nfHJlZ2lzdGVyfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdHJ1Y3R8c3dpdGNofHR5cGVkZWZ8dW5pb258dW5zaWduZWR8dm9pZHx2b2xhdGlsZXx3aGlsZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvPj49P3w8PD0/fC0+fChbLSsmfDpdKVxcMXxbPzp+XXxbLSsqLyUmfF4hPTw+XT0/LyxcbiAgICBudW1iZXI6IC8oPzpcXGIweCg/OltcXGRhLWZdK1xcLj9bXFxkYS1mXSp8XFwuW1xcZGEtZl0rKSg/OnBbKy1dP1xcZCspP3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8pW2Z1bF0qL2lcbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdzdHJpbmcnLCB7XG4gICAgbWFjcm86IHtcbiAgICAgIC8vIGFsbG93IGZvciBtdWx0aWxpbmUgbWFjcm8gZGVmaW5pdGlvbnNcbiAgICAgIC8vIHNwYWNlcyBhZnRlciB0aGUgIyBjaGFyYWN0ZXIgY29tcGlsZSBmaW5lIHdpdGggZ2NjXG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSNcXHMqW2Etel0rKD86W15cXHJcXG5cXFxcXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIC8vIGhpZ2hsaWdodCB0aGUgcGF0aCBvZiB0aGUgaW5jbHVkZSBzdGF0ZW1lbnQgYXMgYSBzdHJpbmdcbiAgICAgICAgc3RyaW5nOiB7XG4gICAgICAgICAgcGF0dGVybjogLygjXFxzKmluY2x1ZGVcXHMqKSg/OjwuKz8+fChcInwnKSg/OlxcXFw/LikrP1xcMikvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgLy8gaGlnaGxpZ2h0IG1hY3JvIGRpcmVjdGl2ZXMgYXMga2V5d29yZHNcbiAgICAgICAgZGlyZWN0aXZlOiB7XG4gICAgICAgICAgcGF0dGVybjogLygjXFxzKilcXGIoPzpkZWZpbmV8ZGVmaW5lZHxlbGlmfGVsc2V8ZW5kaWZ8ZXJyb3J8aWZkZWZ8aWZuZGVmfGlmfGltcG9ydHxpbmNsdWRlfGxpbmV8cHJhZ21hfHVuZGVmfHVzaW5nKVxcYi8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGhpZ2hsaWdodCBwcmVkZWZpbmVkIG1hY3JvcyBhcyBjb25zdGFudHNcbiAgICBjb25zdGFudDogL1xcYig/Ol9fRklMRV9ffF9fTElORV9ffF9fREFURV9ffF9fVElNRV9ffF9fVElNRVNUQU1QX198X19mdW5jX198RU9GfE5VTEx8U0VFS19DVVJ8U0VFS19FTkR8U0VFS19TRVR8c3RkaW58c3Rkb3V0fHN0ZGVycilcXGIvXG4gIH0pXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuY1snYm9vbGVhbiddXG59XG4iLCIndXNlIHN0cmljdCdcbnZhciByZWZyYWN0b3JDID0gcmVxdWlyZSgnLi9jLmpzJylcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0aXZlY1xub2JqZWN0aXZlYy5kaXNwbGF5TmFtZSA9ICdvYmplY3RpdmVjJ1xub2JqZWN0aXZlYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG9iamVjdGl2ZWMoUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yQylcbiAgUHJpc20ubGFuZ3VhZ2VzLm9iamVjdGl2ZWMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjJywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzphc218dHlwZW9mfGlubGluZXxhdXRvfGJyZWFrfGNhc2V8Y2hhcnxjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXh0ZXJufGZsb2F0fGZvcnxnb3RvfGlmfGludHxsb25nfHJlZ2lzdGVyfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdHJ1Y3R8c3dpdGNofHR5cGVkZWZ8dW5pb258dW5zaWduZWR8dm9pZHx2b2xhdGlsZXx3aGlsZXxpbnxzZWxmfHN1cGVyKVxcYnwoPzpAaW50ZXJmYWNlfEBlbmR8QGltcGxlbWVudGF0aW9ufEBwcm90b2NvbHxAY2xhc3N8QHB1YmxpY3xAcHJvdGVjdGVkfEBwcml2YXRlfEBwcm9wZXJ0eXxAdHJ5fEBjYXRjaHxAZmluYWxseXxAdGhyb3d8QHN5bnRoZXNpemV8QGR5bmFtaWN8QHNlbGVjdG9yKVxcYi8sXG4gICAgc3RyaW5nOiAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMXxAXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwiLyxcbiAgICBvcGVyYXRvcjogLy1bLT5dP3xcXCtcXCs/fCE9P3w8PD89P3w+Pj89P3w9PT98JiY/fFxcfFxcfD98W35eJT8qXFwvQF0vXG4gIH0pXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMub2JqZWN0aXZlY1snY2xhc3MtbmFtZSddXG59XG4iXSwic291cmNlUm9vdCI6IiJ9