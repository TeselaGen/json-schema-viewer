(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_smarty"],{

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


/***/ }),

/***/ "./node_modules/refractor/lang/smarty.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/smarty.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = smarty
smarty.displayName = 'smarty'
smarty.aliases = []
function smarty(Prism) {
  Prism.register(refractorMarkupTemplating)
  /* TODO
Add support for variables inside double quoted strings
Add support for {php}
*/
  ;(function(Prism) {
    Prism.languages.smarty = {
      comment: /\{\*[\s\S]*?\*\}/,
      delimiter: {
        pattern: /^\{|\}$/i,
        alias: 'punctuation'
      },
      string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
      variable: [
        /\$(?!\d)\w+/,
        /#(?!\d)\w+#/,
        {
          pattern: /(\.|->)(?!\d)\w+/,
          lookbehind: true
        },
        {
          pattern: /(\[)(?!\d)\w+(?=\])/,
          lookbehind: true
        }
      ],
      function: [
        {
          pattern: /(\|\s*)@?(?!\d)\w+/,
          lookbehind: true
        },
        /^\/?(?!\d)\w+/,
        /(?!\d)\w+(?=\()/
      ],
      'attr-name': {
        // Value is made optional because it may have already been tokenized
        pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
        inside: {
          variable: {
            pattern: /(=\s*)(?!\d)\w+/,
            lookbehind: true
          },
          operator: /=/
        }
      },
      punctuation: [/[\[\]().,:`]|->/],
      operator: [
        /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
        /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
        /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
      ],
      keyword: /\b(?:false|off|on|no|true|yes)\b/
    } // Tokenize all inline Smarty expressions
    Prism.hooks.add('before-tokenize', function(env) {
      var smartyPattern = /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g
      var smartyLitteralStart = '{literal}'
      var smartyLitteralEnd = '{/literal}'
      var smartyLitteralMode = false
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'smarty',
        smartyPattern,
        function(match) {
          // Smarty tags inside {literal} block are ignored
          if (match === smartyLitteralEnd) {
            smartyLitteralMode = false
          }
          if (!smartyLitteralMode) {
            if (match === smartyLitteralStart) {
              smartyLitteralMode = true
            }
            return true
          }
          return false
        }
      )
    }) // Re-insert the tokens after tokenizing
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'smarty')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWFya3VwLXRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3NtYXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hIWTtBQUNaLGdDQUFnQyxtQkFBTyxDQUFDLGtGQUF3QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0EscUJBQXFCLEdBQUc7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixjQUFjLEdBQUcsVUFBVTtBQUN4RCxrQ0FBa0MsUUFBUTtBQUMxQyxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjJlMjY2ZjAxMmU5N2I2NDhmYzIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya3VwVGVtcGxhdGluZ1xubWFya3VwVGVtcGxhdGluZy5kaXNwbGF5TmFtZSA9ICdtYXJrdXBUZW1wbGF0aW5nJ1xubWFya3VwVGVtcGxhdGluZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1hcmt1cFRlbXBsYXRpbmcoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG4gICAgICByZXR1cm4gJ19fXycgKyBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpICsgaW5kZXggKyAnX19fJ1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30pLCB7XG4gICAgICBidWlsZFBsYWNlaG9sZGVyczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG9rZW5pemUgYWxsIGlubGluZSB0ZW1wbGF0aW5nIGV4cHJlc3Npb25zIG1hdGNoaW5nIGBwbGFjZWhvbGRlclBhdHRlcm5gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcbiAgICAgICAgICogYHRydWVgIHdpbGwgYmUgcmVwbGFjZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cbiAgICAgICAgICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG4gICAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdG9rZW5TdGFjayA9IChlbnYudG9rZW5TdGFjayA9IFtdKVxuICAgICAgICAgIGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aFxuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyIC8vIENoZWNrIGZvciBleGlzdGluZyBzdHJpbmdzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgIGVudi5jb2RlLmluZGV4T2YoKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICsraSAvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcbiAgICAgICAgICAgIHRva2VuU3RhY2tbaV0gPSBtYXRjaFxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSkgLy8gU3dpdGNoIHRoZSBncmFtbWFyIHRvIG1hcmt1cFxuICAgICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGFmdGVyLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGVudiwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0gLy8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcbiAgICAgICAgICBlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV1cbiAgICAgICAgICB2YXIgaiA9IDBcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKVxuICAgICAgICAgIGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG4gICAgICAgICAgICAgIGlmIChqID49IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBrID0ga2V5c1tqXVxuICAgICAgICAgICAgICAgIHZhciB0ID0gZW52LnRva2VuU3RhY2tba11cbiAgICAgICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaylcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICsralxuICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgdmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFByaXNtLnRva2VuaXplKHQsIGVudi5ncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBbXVxuICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKVxuICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdG9rZW4uY29udGVudFxuICAgICAgICAgICAgICAgIC8qICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJyAqL1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNcbiAgICAgICAgICB9XG4gICAgICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iLCIndXNlIHN0cmljdCdcbnZhciByZWZyYWN0b3JNYXJrdXBUZW1wbGF0aW5nID0gcmVxdWlyZSgnLi9tYXJrdXAtdGVtcGxhdGluZy5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IHNtYXJ0eVxuc21hcnR5LmRpc3BsYXlOYW1lID0gJ3NtYXJ0eSdcbnNtYXJ0eS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNtYXJ0eShQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JNYXJrdXBUZW1wbGF0aW5nKVxuICAvKiBUT0RPXG5BZGQgc3VwcG9ydCBmb3IgdmFyaWFibGVzIGluc2lkZSBkb3VibGUgcXVvdGVkIHN0cmluZ3NcbkFkZCBzdXBwb3J0IGZvciB7cGhwfVxuKi9cbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy5zbWFydHkgPSB7XG4gICAgICBjb21tZW50OiAvXFx7XFwqW1xcc1xcU10qP1xcKlxcfS8sXG4gICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgcGF0dGVybjogL15cXHt8XFx9JC9pLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIHN0cmluZzogLyhbXCInXSkoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgIG51bWJlcjogL1xcYjB4W1xcZEEtRmEtZl0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltFZV1bLStdP1xcZCspPy8sXG4gICAgICB2YXJpYWJsZTogW1xuICAgICAgICAvXFwkKD8hXFxkKVxcdysvLFxuICAgICAgICAvIyg/IVxcZClcXHcrIy8sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxcLnwtPikoPyFcXGQpXFx3Ky8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXFspKD8hXFxkKVxcdysoPz1cXF0pLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXHxcXHMqKUA/KD8hXFxkKVxcdysvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgL15cXC8/KD8hXFxkKVxcdysvLFxuICAgICAgICAvKD8hXFxkKVxcdysoPz1cXCgpL1xuICAgICAgXSxcbiAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgIC8vIFZhbHVlIGlzIG1hZGUgb3B0aW9uYWwgYmVjYXVzZSBpdCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gdG9rZW5pemVkXG4gICAgICAgIHBhdHRlcm46IC9cXHcrXFxzKj1cXHMqKD86KD8hXFxkKVxcdyspPy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKD1cXHMqKSg/IVxcZClcXHcrLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZXJhdG9yOiAvPS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiBbL1tcXFtcXF0oKS4sOmBdfC0+L10sXG4gICAgICBvcGVyYXRvcjogW1xuICAgICAgICAvWytcXC0qXFwvJV18PT0/PT98WyE8Pl09P3wmJnxcXHxcXHw/LyxcbiAgICAgICAgL1xcYmlzXFxzKyg/Om5vdFxccyspPyg/OmRpdnxldmVufG9kZCkoPzpcXHMrYnkpP1xcYi8sXG4gICAgICAgIC9cXGIoPzplcXxuZXE/fGd0fGx0fGd0P2V8bHQ/ZXxub3R8bW9kfG9yfGFuZClcXGIvXG4gICAgICBdLFxuICAgICAga2V5d29yZDogL1xcYig/OmZhbHNlfG9mZnxvbnxub3x0cnVlfHllcylcXGIvXG4gICAgfSAvLyBUb2tlbml6ZSBhbGwgaW5saW5lIFNtYXJ0eSBleHByZXNzaW9uc1xuICAgIFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICB2YXIgc21hcnR5UGF0dGVybiA9IC9cXHtcXCpbXFxzXFxTXSo/XFwqXFx9fFxce1tcXHNcXFNdKz9cXH0vZ1xuICAgICAgdmFyIHNtYXJ0eUxpdHRlcmFsU3RhcnQgPSAne2xpdGVyYWx9J1xuICAgICAgdmFyIHNtYXJ0eUxpdHRlcmFsRW5kID0gJ3svbGl0ZXJhbH0nXG4gICAgICB2YXIgc21hcnR5TGl0dGVyYWxNb2RlID0gZmFsc2VcbiAgICAgIFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhcbiAgICAgICAgZW52LFxuICAgICAgICAnc21hcnR5JyxcbiAgICAgICAgc21hcnR5UGF0dGVybixcbiAgICAgICAgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAvLyBTbWFydHkgdGFncyBpbnNpZGUge2xpdGVyYWx9IGJsb2NrIGFyZSBpZ25vcmVkXG4gICAgICAgICAgaWYgKG1hdGNoID09PSBzbWFydHlMaXR0ZXJhbEVuZCkge1xuICAgICAgICAgICAgc21hcnR5TGl0dGVyYWxNb2RlID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzbWFydHlMaXR0ZXJhbE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gc21hcnR5TGl0dGVyYWxTdGFydCkge1xuICAgICAgICAgICAgICBzbWFydHlMaXR0ZXJhbE1vZGUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pIC8vIFJlLWluc2VydCB0aGUgdG9rZW5zIGFmdGVyIHRva2VuaXppbmdcbiAgICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICBQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnc21hcnR5JylcbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=