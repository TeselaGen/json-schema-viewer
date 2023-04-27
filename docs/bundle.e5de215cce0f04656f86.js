(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_django"],{

/***/ "./node_modules/refractor/lang/django.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/django.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = django
django.displayName = 'django'
django.aliases = ['jinja2']
function django(Prism) {
  Prism.register(refractorMarkupTemplating)
  // Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.
  // Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.
  ;(function(Prism) {
    Prism.languages.django = {
      comment: /^{#[\s\S]*?#}$/,
      tag: {
        pattern: /(^{%[+-]?\s*)\w+/,
        lookbehind: true,
        alias: 'keyword'
      },
      delimiter: {
        pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
        alias: 'punctuation'
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      filter: {
        pattern: /(\|)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      test: {
        pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      function: /\b[a-z_]\w+(?=\s*\()/i,
      keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
      operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      number: /\b\d+(?:\.\d+)?\b/,
      boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
      variable: /\b\w+?\b/,
      punctuation: /[{}[\](),.:;]/
    }
    var pattern = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g
    var markupTemplating = Prism.languages['markup-templating']
    Prism.hooks.add('before-tokenize', function(env) {
      markupTemplating.buildPlaceholders(env, 'django', pattern)
    })
    Prism.hooks.add('after-tokenize', function(env) {
      markupTemplating.tokenizePlaceholders(env, 'django')
    }) // Add an Jinja2 alias
    Prism.languages.jinja2 = Prism.languages.django
    Prism.hooks.add('before-tokenize', function(env) {
      markupTemplating.buildPlaceholders(env, 'jinja2', pattern)
    })
    Prism.hooks.add('after-tokenize', function(env) {
      markupTemplating.tokenizePlaceholders(env, 'jinja2')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = markupTemplating
markupTemplating.displayName = 'markupTemplating'
markupTemplating.aliases = []
function markupTemplating(Prism) {
  ;(function(Prism) {
    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
      return '___' + language.toUpperCase() + index + '___'
    }
    Object.defineProperties((Prism.languages['markup-templating'] = {}), {
      buildPlaceholders: {
        /**
         * Tokenize all inline templating expressions matching `placeholderPattern`.
         *
         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
         * `true` will be replaced.
         *
         * @param {object} env The environment of the `before-tokenize` hook.
         * @param {string} language The language id.
         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
         * @param {(match: string) => boolean} [replaceFilter]
         */
        value: function(env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return
          }
          var tokenStack = (env.tokenStack = [])
          env.code = env.code.replace(placeholderPattern, function(match) {
            if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
              return match
            }
            var i = tokenStack.length
            var placeholder // Check for existing strings
            while (
              env.code.indexOf((placeholder = getPlaceholder(language, i))) !==
              -1
            )
              ++i // Create a sparse array
            tokenStack[i] = match
            return placeholder
          }) // Switch the grammar to markup
          env.grammar = Prism.languages.markup
        }
      },
      tokenizePlaceholders: {
        /**
         * Replace placeholders with proper tokens after tokenizing.
         *
         * @param {object} env The environment of the `after-tokenize` hook.
         * @param {string} language The language id.
         */
        value: function(env, language) {
          if (env.language !== language || !env.tokenStack) {
            return
          } // Switch the grammar back
          env.grammar = Prism.languages[language]
          var j = 0
          var keys = Object.keys(env.tokenStack)
          function walkTokens(tokens) {
            for (var i = 0; i < tokens.length; i++) {
              // all placeholders are replaced already
              if (j >= keys.length) {
                break
              }
              var token = tokens[i]
              if (
                typeof token === 'string' ||
                (token.content && typeof token.content === 'string')
              ) {
                var k = keys[j]
                var t = env.tokenStack[k]
                var s = typeof token === 'string' ? token : token.content
                var placeholder = getPlaceholder(language, k)
                var index = s.indexOf(placeholder)
                if (index > -1) {
                  ++j
                  var before = s.substring(0, index)
                  var middle = new Prism.Token(
                    language,
                    Prism.tokenize(t, env.grammar),
                    'language-' + language,
                    t
                  )
                  var after = s.substring(index + placeholder.length)
                  var replacement = []
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]))
                  }
                  replacement.push(middle)
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]))
                  }
                  if (typeof token === 'string') {
                    tokens.splice.apply(tokens, [i, 1].concat(replacement))
                  } else {
                    token.content = replacement
                  }
                }
              } else if (
                token.content
                /* && typeof token.content !== 'string' */
              ) {
                walkTokens(token.content)
              }
            }
            return tokens
          }
          walkTokens(env.tokens)
        }
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZGphbmdvLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXJrdXAtdGVtcGxhdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTtBQUNaLGdDQUFnQyxtQkFBTyxDQUFDLGtGQUF3QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0IsRUFBRSxlQUFlLEdBQUc7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0EscUJBQXFCLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzNEWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLmU1ZGUyMTVjY2UwZjA0NjU2Zjg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9yTWFya3VwVGVtcGxhdGluZyA9IHJlcXVpcmUoJy4vbWFya3VwLXRlbXBsYXRpbmcuanMnKVxubW9kdWxlLmV4cG9ydHMgPSBkamFuZ29cbmRqYW5nby5kaXNwbGF5TmFtZSA9ICdkamFuZ28nXG5kamFuZ28uYWxpYXNlcyA9IFsnamluamEyJ11cbmZ1bmN0aW9uIGRqYW5nbyhQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JNYXJrdXBUZW1wbGF0aW5nKVxuICAvLyBEamFuZ28vSmluamEyIHN5bnRheCBkZWZpbml0aW9uIGZvciBQcmlzbS5qcyA8aHR0cDovL3ByaXNtanMuY29tPiBzeW50YXggaGlnaGxpZ2h0ZXIuXG4gIC8vIE1vc3RseSBpdCB3b3JrcyBPSyBidXQgY2FuIHBhaW50IGNvZGUgaW5jb3JyZWN0bHkgb24gY29tcGxleCBodG1sL3RlbXBsYXRlIHRhZyBjb21iaW5hdGlvbnMuXG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuZGphbmdvID0ge1xuICAgICAgY29tbWVudDogL157I1tcXHNcXFNdKj8jfSQvLFxuICAgICAgdGFnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnslWystXT9cXHMqKVxcdysvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICB9LFxuICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgIHBhdHRlcm46IC9ee1t7JV1bKy1dP3xbKy1dP1t9JV19JC8sXG4gICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICB9LFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFx8KVxcdysvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgIHRlc3Q6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXGJpc1xccysoPzpub3RcXHMrKT8pKD8hbm90XFxiKVxcdysvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiAvXFxiW2Etel9dXFx3Kyg/PVxccypcXCgpL2ksXG4gICAgICBrZXl3b3JkOiAvXFxiKD86YW5kfGFzfGJ5fGVsc2V8Zm9yfGlmfGltcG9ydHxpbnxpc3xsb29wfG5vdHxvcnxyZWN1cnNpdmV8d2l0aHx3aXRob3V0KVxcYi8sXG4gICAgICBvcGVyYXRvcjogL1stKyovJT1dPT98IT18XFwqXFwqPz0/fFxcL1xcLz89P3w8Wzw9Pl0/fD5bPT5dP3xbJnxefl0vLFxuICAgICAgbnVtYmVyOiAvXFxiXFxkKyg/OlxcLlxcZCspP1xcYi8sXG4gICAgICBib29sZWFuOiAvW1R0XXJ1ZXxbRmZdYWxzZXxbTm5db25lLyxcbiAgICAgIHZhcmlhYmxlOiAvXFxiXFx3Kz9cXGIvLFxuICAgICAgcHVuY3R1YXRpb246IC9be31bXFxdKCksLjo7XS9cbiAgICB9XG4gICAgdmFyIHBhdHRlcm4gPSAve3tbXFxzXFxTXSo/fX18eyVbXFxzXFxTXSo/JX18eyNbXFxzXFxTXSo/I30vZ1xuICAgIHZhciBtYXJrdXBUZW1wbGF0aW5nID0gUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddXG4gICAgUHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIG1hcmt1cFRlbXBsYXRpbmcuYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnZGphbmdvJywgcGF0dGVybilcbiAgICB9KVxuICAgIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIG1hcmt1cFRlbXBsYXRpbmcudG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnZGphbmdvJylcbiAgICB9KSAvLyBBZGQgYW4gSmluamEyIGFsaWFzXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmppbmphMiA9IFByaXNtLmxhbmd1YWdlcy5kamFuZ29cbiAgICBQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgbWFya3VwVGVtcGxhdGluZy5idWlsZFBsYWNlaG9sZGVycyhlbnYsICdqaW5qYTInLCBwYXR0ZXJuKVxuICAgIH0pXG4gICAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgbWFya3VwVGVtcGxhdGluZy50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICdqaW5qYTInKVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya3VwVGVtcGxhdGluZ1xubWFya3VwVGVtcGxhdGluZy5kaXNwbGF5TmFtZSA9ICdtYXJrdXBUZW1wbGF0aW5nJ1xubWFya3VwVGVtcGxhdGluZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1hcmt1cFRlbXBsYXRpbmcoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG4gICAgICByZXR1cm4gJ19fXycgKyBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpICsgaW5kZXggKyAnX19fJ1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30pLCB7XG4gICAgICBidWlsZFBsYWNlaG9sZGVyczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG9rZW5pemUgYWxsIGlubGluZSB0ZW1wbGF0aW5nIGV4cHJlc3Npb25zIG1hdGNoaW5nIGBwbGFjZWhvbGRlclBhdHRlcm5gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcbiAgICAgICAgICogYHRydWVgIHdpbGwgYmUgcmVwbGFjZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cbiAgICAgICAgICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG4gICAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdG9rZW5TdGFjayA9IChlbnYudG9rZW5TdGFjayA9IFtdKVxuICAgICAgICAgIGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aFxuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyIC8vIENoZWNrIGZvciBleGlzdGluZyBzdHJpbmdzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgIGVudi5jb2RlLmluZGV4T2YoKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICsraSAvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcbiAgICAgICAgICAgIHRva2VuU3RhY2tbaV0gPSBtYXRjaFxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSkgLy8gU3dpdGNoIHRoZSBncmFtbWFyIHRvIG1hcmt1cFxuICAgICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGFmdGVyLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGVudiwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0gLy8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcbiAgICAgICAgICBlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV1cbiAgICAgICAgICB2YXIgaiA9IDBcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKVxuICAgICAgICAgIGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG4gICAgICAgICAgICAgIGlmIChqID49IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBrID0ga2V5c1tqXVxuICAgICAgICAgICAgICAgIHZhciB0ID0gZW52LnRva2VuU3RhY2tba11cbiAgICAgICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaylcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICsralxuICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgdmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFByaXNtLnRva2VuaXplKHQsIGVudi5ncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBbXVxuICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKVxuICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdG9rZW4uY29udGVudFxuICAgICAgICAgICAgICAgIC8qICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJyAqL1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNcbiAgICAgICAgICB9XG4gICAgICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9