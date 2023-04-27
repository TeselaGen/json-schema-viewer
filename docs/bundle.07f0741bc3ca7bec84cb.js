(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_c"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4wN2YwNzQxYmMzY2E3YmVjODRjYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNcbmMuZGlzcGxheU5hbWUgPSAnYydcbmMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5jID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmVudW18c3RydWN0KVxccyspXFx3Ky8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86X0FsaWduYXN8X0FsaWdub2Z8X0F0b21pY3xfQm9vbHxfQ29tcGxleHxfR2VuZXJpY3xfSW1hZ2luYXJ5fF9Ob3JldHVybnxfU3RhdGljX2Fzc2VydHxfVGhyZWFkX2xvY2FsfGFzbXx0eXBlb2Z8aW5saW5lfGF1dG98YnJlYWt8Y2FzZXxjaGFyfGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZG98ZG91YmxlfGVsc2V8ZW51bXxleHRlcm58ZmxvYXR8Zm9yfGdvdG98aWZ8aW50fGxvbmd8cmVnaXN0ZXJ8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0cnVjdHxzd2l0Y2h8dHlwZWRlZnx1bmlvbnx1bnNpZ25lZHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi8sXG4gICAgb3BlcmF0b3I6IC8+Pj0/fDw8PT98LT58KFstKyZ8Ol0pXFwxfFs/On5dfFstKyovJSZ8XiE9PD5dPT8vLFxuICAgIG51bWJlcjogLyg/OlxcYjB4KD86W1xcZGEtZl0rXFwuP1tcXGRhLWZdKnxcXC5bXFxkYS1mXSspKD86cFsrLV0/XFxkKyk/fCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPylbZnVsXSovaVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjJywgJ3N0cmluZycsIHtcbiAgICBtYWNybzoge1xuICAgICAgLy8gYWxsb3cgZm9yIG11bHRpbGluZSBtYWNybyBkZWZpbml0aW9uc1xuICAgICAgLy8gc3BhY2VzIGFmdGVyIHRoZSAjIGNoYXJhY3RlciBjb21waWxlIGZpbmUgd2l0aCBnY2NcbiAgICAgIHBhdHRlcm46IC8oXlxccyopI1xccypbYS16XSsoPzpbXlxcclxcblxcXFxdfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdwcm9wZXJ0eScsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBwYXRoIG9mIHRoZSBpbmNsdWRlIHN0YXRlbWVudCBhcyBhIHN0cmluZ1xuICAgICAgICBzdHJpbmc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCNcXHMqaW5jbHVkZVxccyopKD86PC4rPz58KFwifCcpKD86XFxcXD8uKSs/XFwyKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyBoaWdobGlnaHQgbWFjcm8gZGlyZWN0aXZlcyBhcyBrZXl3b3Jkc1xuICAgICAgICBkaXJlY3RpdmU6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCNcXHMqKVxcYig/OmRlZmluZXxkZWZpbmVkfGVsaWZ8ZWxzZXxlbmRpZnxlcnJvcnxpZmRlZnxpZm5kZWZ8aWZ8aW1wb3J0fGluY2x1ZGV8bGluZXxwcmFnbWF8dW5kZWZ8dXNpbmcpXFxiLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gaGlnaGxpZ2h0IHByZWRlZmluZWQgbWFjcm9zIGFzIGNvbnN0YW50c1xuICAgIGNvbnN0YW50OiAvXFxiKD86X19GSUxFX198X19MSU5FX198X19EQVRFX198X19USU1FX198X19USU1FU1RBTVBfX3xfX2Z1bmNfX3xFT0Z8TlVMTHxTRUVLX0NVUnxTRUVLX0VORHxTRUVLX1NFVHxzdGRpbnxzdGRvdXR8c3RkZXJyKVxcYi9cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5jWydib29sZWFuJ11cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=