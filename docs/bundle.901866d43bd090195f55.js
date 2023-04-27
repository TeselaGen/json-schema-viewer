(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_pure"],{

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

/***/ "./node_modules/refractor/lang/pure.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/pure.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = pure
pure.displayName = 'pure'
pure.aliases = []
function pure(Prism) {
  Prism.register(refractorC)
  ;(function(Prism) {
    Prism.languages.pure = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true
        },
        /#!.+/
      ],
      'inline-lang': {
        pattern: /%<[\s\S]+?%>/,
        greedy: true,
        inside: {
          lang: {
            pattern: /(^%< *)-\*-.+?-\*-/,
            lookbehind: true,
            alias: 'comment'
          },
          delimiter: {
            pattern: /^%<.*|%>$/,
            alias: 'punctuation'
          }
        }
      },
      string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true
      },
      number: {
        // The look-behind prevents wrong highlighting of the .. operator
        pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
        lookbehind: true
      },
      keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
      function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
      special: {
        pattern: /\b__[a-z]+__\b/i,
        alias: 'builtin'
      },
      // Any combination of operator chars can be an operator
      operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
      // FIXME: How can we prevent | and , to be highlighted as operator when they are used alone?
      punctuation: /[(){}\[\];,|]/
    }
    var inlineLanguages = [
      'c',
      {
        lang: 'c++',
        alias: 'cpp'
      },
      'fortran'
    ]
    var inlineLanguageRe = /%< *-\*- *{lang}\d* *-\*-[\s\S]+?%>/.source
    inlineLanguages.forEach(function(lang) {
      var alias = lang
      if (typeof lang !== 'string') {
        alias = lang.alias
        lang = lang.lang
      }
      if (Prism.languages[alias]) {
        var o = {}
        o['inline-lang-' + alias] = {
          pattern: RegExp(
            inlineLanguageRe.replace(
              '{lang}',
              lang.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')
            ),
            'i'
          ),
          inside: Prism.util.clone(Prism.languages.pure['inline-lang'].inside)
        }
        o['inline-lang-' + alias].inside.rest = Prism.util.clone(
          Prism.languages[alias]
        )
        Prism.languages.insertBefore('pure', 'inline-lang', o)
      }
    }) // C is the default inline language
    if (Prism.languages.c) {
      Prism.languages.pure['inline-lang'].inside.rest = Prism.util.clone(
        Prism.languages.c
      )
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYy5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHVyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN4Q1k7QUFDWixpQkFBaUIsbUJBQU8sQ0FBQyxrREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjkwMTg2NmQ0M2JkMDkwMTk1ZjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY1xuYy5kaXNwbGF5TmFtZSA9ICdjJ1xuYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZW51bXxzdHJ1Y3QpXFxzKylcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py8sXG4gICAgbnVtYmVyOiAvKD86XFxiMHgoPzpbXFxkYS1mXStcXC4/W1xcZGEtZl0qfFxcLltcXGRhLWZdKykoPzpwWystXT9cXGQrKT98KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdKi9pXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuICAgIG1hY3JvOiB7XG4gICAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgICAgcGF0dGVybjogLyheXFxzKikjXFxzKlthLXpdKyg/OlteXFxyXFxuXFxcXF18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyppbmNsdWRlXFxzKikoPzo8Lis/PnwoXCJ8JykoPzpcXFxcPy4pKz9cXDIpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhpZ2hsaWdodCBtYWNybyBkaXJlY3RpdmVzIGFzIGtleXdvcmRzXG4gICAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyopXFxiKD86ZGVmaW5lfGRlZmluZWR8ZWxpZnxlbHNlfGVuZGlmfGVycm9yfGlmZGVmfGlmbmRlZnxpZnxpbXBvcnR8aW5jbHVkZXxsaW5lfHByYWdtYXx1bmRlZnx1c2luZylcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xfX0RBVEVfX3xfX1RJTUVfX3xfX1RJTUVTVEFNUF9ffF9fZnVuY19ffEVPRnxOVUxMfFNFRUtfQ1VSfFNFRUtfRU5EfFNFRUtfU0VUfHN0ZGlufHN0ZG91dHxzdGRlcnIpXFxiL1xuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9yQyA9IHJlcXVpcmUoJy4vYy5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVcbnB1cmUuZGlzcGxheU5hbWUgPSAncHVyZSdcbnB1cmUuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwdXJlKFByaXNtKSB7XG4gIFByaXNtLnJlZ2lzdGVyKHJlZnJhY3RvckMpXG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMucHVyZSA9IHtcbiAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvIyEuKy9cbiAgICAgIF0sXG4gICAgICAnaW5saW5lLWxhbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC8lPFtcXHNcXFNdKz8lPi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgbGFuZzoge1xuICAgICAgICAgICAgcGF0dGVybjogLyheJTwgKiktXFwqLS4rPy1cXCotLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eJTwuKnwlPiQvLFxuICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cIlxcXFxcXHJcXG5dKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG51bWJlcjoge1xuICAgICAgICAvLyBUaGUgbG9vay1iZWhpbmQgcHJldmVudHMgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIHRoZSAuLiBvcGVyYXRvclxuICAgICAgICBwYXR0ZXJuOiAvKCg/OlxcLlxcLik/KSg/OlxcYig/OmluZnxuYW4pXFxifFxcYjB4W1xcZGEtZl0rfCg/OlxcYig/OjBiKT9cXGQrKD86XFwuXFxkKT98XFxCXFwuXFxkKVxcZCooPzplWystXT9cXGQrKT9MPykvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IC9cXGIoPzphbnN8YnJlYWt8YnR8Y2FzZXxjYXRjaHxjZHxjbGVhcnxjb25zdHxkZWZ8ZGVsfGR1bXB8ZWxzZXxlbmR8ZXhpdHxleHRlcm58ZmFsc2V8Zm9yY2V8aGVscHxpZnxpbmZpeFtscl0/fGludGVyZmFjZXxsZXR8bHN8bWVtfG5hbWVzcGFjZXxub25maXh8TlVMTHxvZnxvdGhlcndpc2V8b3V0Zml4fG92ZXJyaWRlfHBvc3RmaXh8cHJlZml4fHByaXZhdGV8cHVibGljfHB3ZHxxdWl0fHJ1bnxzYXZlfHNob3d8c3RhdHN8dGhlbnx0aHJvd3x0cmFjZXx0cnVlfHR5cGV8dW5kZXJyaWRlfHVzaW5nfHdoZW58d2l0aClcXGIvLFxuICAgICAgZnVuY3Rpb246IC9cXGIoPzphYnN8YWRkXyg/Oig/OmZ1bmRlZnxpbnRlcmZhY2V8bWFjZGVmfHR5cGVkZWYpKD86X2F0KT98YWRkcnxjb25zdGRlZnx2YXJkZWYpfGFsbHxhbnl8YXBwbHA/fGFyaXR5fGJpZ2ludHA/fGJsb2IoPzpfY3JjfF9zaXplfHApP3xib29scD98Ynl0ZV8oPzptYXRyaXh8cG9pbnRlcil8Ynl0ZV9jP3N0cmluZyg/Ol9wb2ludGVyKT98Y2FsbG9jfGNhdHxjYXRtYXB8Y2VpbHxjaGFyW3BzXT98Y2hlY2tfcHRydGFnfGNocnxjbGVhcl9zZW50cnl8Y2xlYXJzeW18Y2xvc3VyZXA/fGNtYXRyaXhwP3xjb2xzP3xjb2xjYXQoPzptYXApP3xjb2xtYXB8Y29scmV2fGNvbHZlY3Rvcig/OnB8c2VxKT98Y29tcGxleCg/Ol9mbG9hdF8oPzptYXRyaXh8cG9pbnRlcil8X21hdHJpeCg/Ol92aWV3KT98X3BvaW50ZXJ8cCk/fGNvbmp8Y29va2VkcD98Y3N0fGNzdHJpbmcoPzpfKD86ZHVwfGxpc3R8dmVjdG9yKSk/fGN1cnJ5Mz98Y3ljbGVuP3xkZWxfKD86Y29uc3RkZWZ8ZnVuZGVmfGludGVyZmFjZXxtYWNkZWZ8dHlwZWRlZnx2YXJkZWYpfGRlbGV0ZXxkaWFnKD86bWF0KT98ZGltfGRtYXRyaXhwP3xkb3xkb3VibGUoPzpfbWF0cml4KD86X3ZpZXcpP3xfcG9pbnRlcnxwKT98ZG93aXRoMz98ZHJvcHxkcm9wd2hpbGV8ZXZhbCg/OmNtZCk/fGV4YWN0cHxmaWx0ZXJ8Zml4fGZpeGl0eXxmbGlwfGZsb2F0KD86X21hdHJpeHxfcG9pbnRlcil8Zmxvb3J8Zm9sZFtscl0xP3xmcmFjfGZyZWV8ZnVucD98ZnVuY3Rpb25wP3xnY2R8Z2V0KD86Xyg/OmJ5dGV8Y29uc3RkZWZ8ZG91YmxlfGZsb2F0fGZ1bmRlZnxpbnQoPzo2NCk/fGludGVyZmFjZSg/Ol90eXBlZGVmKT98bG9uZ3xtYWNkZWZ8cG9pbnRlcnxwdHJ0YWd8c2hvcnR8c2VudHJ5fHN0cmluZ3x0eXBlZGVmfHZhcmRlZikpP3xnbG9ic3ltfGhhc2h8aGVhZHxpZHxpbXxpbWF0cml4cD98aW5kZXh8aW5leGFjdHB8aW5mcHxpbml0fGluc2VydHxpbnQoPzpfbWF0cml4KD86X3ZpZXcpP3xfcG9pbnRlcnxwKT98aW50NjRfKD86bWF0cml4fHBvaW50ZXIpfGludGVnZXJwP3xpdGVyYXRlbj98aXRlcndoaWxlfGpvaW58a2V5cz98bGFtYmRhcD98bGFzdCg/OmVycig/OnBvcyk/KT98bGNkfGxpc3RbMnBdP3xsaXN0bWFwfG1ha2VfcHRydGFnfG1hbGxvY3xtYXB8bWF0Y2F0fG1hdHJpeHA/fG1heHxtZW1iZXJ8bWlufG5hbnB8bmFyZ3N8bm1hdHJpeHA/fG51bGx8bnVtYmVycD98b3JkfHBhY2soPzplZCk/fHBvaW50ZXIoPzpfY2FzdHxfdGFnfF90eXBlfHApP3xwb3d8cHJlZHxwdHJ0YWd8cHV0KD86Xyg/OmJ5dGV8ZG91YmxlfGZsb2F0fGludCg/OjY0KT98bG9uZ3xwb2ludGVyfHNob3J0fHN0cmluZykpP3xyYXRpb25hbHA/fHJlfHJlYWxwP3xyZWFsbG9jfHJlY29yZHA/fHJlZGltfHJlZHVjZSg/Ol93aXRoKT98cmVmcD98cmVwZWF0bj98cmV2ZXJzZXxybGlzdHA/fHJvdW5kfHJvd3M/fHJvd2NhdCg/Om1hcCk/fHJvd21hcHxyb3dyZXZ8cm93dmVjdG9yKD86cHxzZXEpP3xzYW1lfHNjYW5bbHJdMT98c2VudHJ5fHNnbnxzaG9ydF8oPzptYXRyaXh8cG9pbnRlcil8c2xpY2V8c21hdHJpeHA/fHNvcnR8c3BsaXR8c3RyfHN0cmNhdHxzdHJlYW18c3RyaWRlfHN0cmluZyg/Ol8oPzpkdXB8bGlzdHx2ZWN0b3IpfHApP3xzdWJkaWFnKD86bWF0KT98c3VibWF0fHN1YnNlcTI/fHN1YnN0cnxzdWNjfHN1cGRpYWcoPzptYXQpP3xzeW1ib2xwP3x0YWlsfHRha2V8dGFrZXdoaWxlfHRodW5rcD98dHJhbnNwb3NlfHRydW5jfHR1cGxlcD98dHlwZXB8dWJ5dGV8dWludCg/OjY0KT98dWxvbmd8dW5jdXJyeTM/fHVucmVmfHVuemlwMz98dXBkYXRlfHVzaG9ydHx2YWxzP3x2YXJwP3x2ZWN0b3IoPzpwfHNlcSk/fHZvaWR8emlwMz98emlwd2l0aDM/KVxcYi8sXG4gICAgICBzcGVjaWFsOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXGJfX1thLXpdK19fXFxiL2ksXG4gICAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICAgIH0sXG4gICAgICAvLyBBbnkgY29tYmluYXRpb24gb2Ygb3BlcmF0b3IgY2hhcnMgY2FuIGJlIGFuIG9wZXJhdG9yXG4gICAgICBvcGVyYXRvcjogLyg/PVxcYl98W15fXSlbIVwiIyQlJicqKyxcXC0uXFwvOjw9Pj9AXFxcXF5fYHx+XFx1MDBhMS1cXHUwMGJmXFx1MDBkNy1cXHUwMGY3XFx1MjBkMC1cXHUyYmZmXSt8XFxiKD86YW5kfGRpdnxtb2R8bm90fG9yKVxcYi8sXG4gICAgICAvLyBGSVhNRTogSG93IGNhbiB3ZSBwcmV2ZW50IHwgYW5kICwgdG8gYmUgaGlnaGxpZ2h0ZWQgYXMgb3BlcmF0b3Igd2hlbiB0aGV5IGFyZSB1c2VkIGFsb25lP1xuICAgICAgcHVuY3R1YXRpb246IC9bKCl7fVxcW1xcXTssfF0vXG4gICAgfVxuICAgIHZhciBpbmxpbmVMYW5ndWFnZXMgPSBbXG4gICAgICAnYycsXG4gICAgICB7XG4gICAgICAgIGxhbmc6ICdjKysnLFxuICAgICAgICBhbGlhczogJ2NwcCdcbiAgICAgIH0sXG4gICAgICAnZm9ydHJhbidcbiAgICBdXG4gICAgdmFyIGlubGluZUxhbmd1YWdlUmUgPSAvJTwgKi1cXCotICp7bGFuZ31cXGQqICotXFwqLVtcXHNcXFNdKz8lPi8uc291cmNlXG4gICAgaW5saW5lTGFuZ3VhZ2VzLmZvckVhY2goZnVuY3Rpb24obGFuZykge1xuICAgICAgdmFyIGFsaWFzID0gbGFuZ1xuICAgICAgaWYgKHR5cGVvZiBsYW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICBhbGlhcyA9IGxhbmcuYWxpYXNcbiAgICAgICAgbGFuZyA9IGxhbmcubGFuZ1xuICAgICAgfVxuICAgICAgaWYgKFByaXNtLmxhbmd1YWdlc1thbGlhc10pIHtcbiAgICAgICAgdmFyIG8gPSB7fVxuICAgICAgICBvWydpbmxpbmUtbGFuZy0nICsgYWxpYXNdID0ge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAgIGlubGluZUxhbmd1YWdlUmUucmVwbGFjZShcbiAgICAgICAgICAgICAgJ3tsYW5nfScsXG4gICAgICAgICAgICAgIGxhbmcucmVwbGFjZSgvKFsuKyo/XFwvXFxcXCgpe31cXFtcXF1dKS9nLCAnXFxcXCQxJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgICApLFxuICAgICAgICAgIGluc2lkZTogUHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMucHVyZVsnaW5saW5lLWxhbmcnXS5pbnNpZGUpXG4gICAgICAgIH1cbiAgICAgICAgb1snaW5saW5lLWxhbmctJyArIGFsaWFzXS5pbnNpZGUucmVzdCA9IFByaXNtLnV0aWwuY2xvbmUoXG4gICAgICAgICAgUHJpc20ubGFuZ3VhZ2VzW2FsaWFzXVxuICAgICAgICApXG4gICAgICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3B1cmUnLCAnaW5saW5lLWxhbmcnLCBvKVxuICAgICAgfVxuICAgIH0pIC8vIEMgaXMgdGhlIGRlZmF1bHQgaW5saW5lIGxhbmd1YWdlXG4gICAgaWYgKFByaXNtLmxhbmd1YWdlcy5jKSB7XG4gICAgICBQcmlzbS5sYW5ndWFnZXMucHVyZVsnaW5saW5lLWxhbmcnXS5pbnNpZGUucmVzdCA9IFByaXNtLnV0aWwuY2xvbmUoXG4gICAgICAgIFByaXNtLmxhbmd1YWdlcy5jXG4gICAgICApXG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=