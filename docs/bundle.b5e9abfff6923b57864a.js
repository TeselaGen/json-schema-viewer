(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_tt2"],{

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

/***/ "./node_modules/refractor/lang/tt2.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tt2.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = tt2
tt2.displayName = 'tt2'
tt2.aliases = []
function tt2(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function(Prism) {
    Prism.languages.tt2 = Prism.languages.extend('clike', {
      comment: /#.*|\[%#[\s\S]*?%\]/,
      keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
      punctuation: /[[\]{},()]/
    })
    Prism.languages.insertBefore('tt2', 'number', {
      operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
      variable: {
        pattern: /[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i
      }
    })
    Prism.languages.insertBefore('tt2', 'keyword', {
      delimiter: {
        pattern: /^(?:\[%|%%)-?|-?%]$/,
        alias: 'punctuation'
      }
    })
    Prism.languages.insertBefore('tt2', 'string', {
      'single-quoted-string': {
        pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
        greedy: true,
        alias: 'string'
      },
      'double-quoted-string': {
        pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
        greedy: true,
        alias: 'string',
        inside: {
          variable: {
            pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
          }
        }
      }
    }) // The different types of TT2 strings "replace" the C-like standard string
    delete Prism.languages.tt2.string
    Prism.hooks.add('before-tokenize', function(env) {
      var tt2Pattern = /\[%[\s\S]+?%\]/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'tt2',
        tt2Pattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWFya3VwLXRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3R0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hIWTtBQUNaLGdDQUFnQyxtQkFBTyxDQUFDLGtGQUF3QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuYjVlOWFiZmZmNjkyM2I1Nzg2NGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtYXJrdXBUZW1wbGF0aW5nXG5tYXJrdXBUZW1wbGF0aW5nLmRpc3BsYXlOYW1lID0gJ21hcmt1cFRlbXBsYXRpbmcnXG5tYXJrdXBUZW1wbGF0aW5nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbWFya3VwVGVtcGxhdGluZyhQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBnaXZlbiBsYW5ndWFnZSBpZCBhbmQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nXG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKChQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10gPSB7fSksIHtcbiAgICAgIGJ1aWxkUGxhY2Vob2xkZXJzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGByZXBsYWNlRmlsdGVyYCBpcyBwcm92aWRlZCwgb25seSBtYXRjaGVzIG9mIGBwbGFjZWhvbGRlclBhdHRlcm5gIGZvciB3aGljaCBgcmVwbGFjZUZpbHRlcmAgcmV0dXJuc1xuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBiZWZvcmUtdG9rZW5pemVgIGhvb2suXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfSBwbGFjZWhvbGRlclBhdHRlcm4gVGhlIG1hdGNoZXMgb2YgdGhpcyBwYXR0ZXJuIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXJzLlxuICAgICAgICAgKiBAcGFyYW0geyhtYXRjaDogc3RyaW5nKSA9PiBib29sZWFufSBbcmVwbGFjZUZpbHRlcl1cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihlbnYsIGxhbmd1YWdlLCBwbGFjZWhvbGRlclBhdHRlcm4sIHJlcGxhY2VGaWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB0b2tlblN0YWNrID0gKGVudi50b2tlblN0YWNrID0gW10pXG4gICAgICAgICAgZW52LmNvZGUgPSBlbnYuY29kZS5yZXBsYWNlKHBsYWNlaG9sZGVyUGF0dGVybiwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhcmVwbGFjZUZpbHRlcihtYXRjaCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaSA9IHRva2VuU3RhY2subGVuZ3RoXG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIHN0cmluZ3NcbiAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgZW52LmNvZGUuaW5kZXhPZigocGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaSkpKSAhPT1cbiAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKytpIC8vIENyZWF0ZSBhIHNwYXJzZSBhcnJheVxuICAgICAgICAgICAgdG9rZW5TdGFja1tpXSA9IG1hdGNoXG4gICAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcbiAgICAgICAgICB9KSAvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgdG8gbWFya3VwXG4gICAgICAgICAgZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbml6ZVBsYWNlaG9sZGVyczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdG9rZW5zIGFmdGVyIHRva2VuaXppbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYWZ0ZXItdG9rZW5pemVgIGhvb2suXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZW52LCBsYW5ndWFnZSkge1xuICAgICAgICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09IGxhbmd1YWdlIHx8ICFlbnYudG9rZW5TdGFjaykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfSAvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgYmFja1xuICAgICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzW2xhbmd1YWdlXVxuICAgICAgICAgIHZhciBqID0gMFxuICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW52LnRva2VuU3RhY2spXG4gICAgICAgICAgZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIC8vIGFsbCBwbGFjZWhvbGRlcnMgYXJlIHJlcGxhY2VkIGFscmVhZHlcbiAgICAgICAgICAgICAgaWYgKGogPj0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzW2pdXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBlbnYudG9rZW5TdGFja1trXVxuICAgICAgICAgICAgICAgIHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4uY29udGVudFxuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBrKVxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcilcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgKytqXG4gICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlID0gcy5zdWJzdHJpbmcoMCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICB2YXIgbWlkZGxlID0gbmV3IFByaXNtLlRva2VuKFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgUHJpc20udG9rZW5pemUodCwgZW52LmdyYW1tYXIpLFxuICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSBzLnN1YnN0cmluZyhpbmRleCArIHBsYWNlaG9sZGVyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFtdXG4gICAgICAgICAgICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2JlZm9yZV0pKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaChtaWRkbGUpXG4gICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYWZ0ZXJdKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50XG4gICAgICAgICAgICAgICAgLyogJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnICovXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHdhbGtUb2tlbnModG9rZW4uY29udGVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1xuICAgICAgICAgIH1cbiAgICAgICAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3Rvck1hcmt1cFRlbXBsYXRpbmcgPSByZXF1aXJlKCcuL21hcmt1cC10ZW1wbGF0aW5nLmpzJylcbm1vZHVsZS5leHBvcnRzID0gdHQyXG50dDIuZGlzcGxheU5hbWUgPSAndHQyJ1xudHQyLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdHQyKFByaXNtKSB7XG4gIFByaXNtLnJlZ2lzdGVyKHJlZnJhY3Rvck1hcmt1cFRlbXBsYXRpbmcpXG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMudHQyID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgICBjb21tZW50OiAvIy4qfFxcWyUjW1xcc1xcU10qPyVcXF0vLFxuICAgICAga2V5d29yZDogL1xcYig/OkJMT0NLfENBTEx8Q0FTRXxDQVRDSHxDTEVBUnxERUJVR3xERUZBVUxUfEVMU0V8RUxTSUZ8RU5EfEZJTFRFUnxGSU5BTHxGT1JFQUNIfEdFVHxJRnxJTnxJTkNMVURFfElOU0VSVHxMQVNUfE1BQ1JPfE1FVEF8TkVYVHxQRVJMfFBST0NFU1N8UkFXUEVSTHxSRVRVUk58U0VUfFNUT1B8VEFHU3xUSFJPV3xUUll8U1dJVENIfFVOTEVTU3xVU0V8V0hJTEV8V1JBUFBFUilcXGIvLFxuICAgICAgcHVuY3R1YXRpb246IC9bW1xcXXt9LCgpXS9cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3R0MicsICdudW1iZXInLCB7XG4gICAgICBvcGVyYXRvcjogLz1bPj1dP3whPT98PD0/fD49P3wmJnxcXHxcXHw/fFxcYig/OmFuZHxvcnxub3QpXFxiLyxcbiAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgIHBhdHRlcm46IC9bYS16XVxcdyooPzpcXHMqXFwuXFxzKig/OlxcZCt8XFwkP1thLXpdXFx3KikpKi9pXG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd0dDInLCAna2V5d29yZCcsIHtcbiAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICBwYXR0ZXJuOiAvXig/OlxcWyV8JSUpLT98LT8lXSQvLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgndHQyJywgJ3N0cmluZycsIHtcbiAgICAgICdzaW5nbGUtcXVvdGVkLXN0cmluZyc6IHtcbiAgICAgICAgcGF0dGVybjogLydbXlxcXFwnXSooPzpcXFxcW1xcc1xcU11bXlxcXFwnXSopKicvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgICdkb3VibGUtcXVvdGVkLXN0cmluZyc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiW15cXFxcXCJdKig/OlxcXFxbXFxzXFxTXVteXFxcXFwiXSopKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkKD86W2Etel1cXHcqKD86XFwuKD86XFxkK3xcXCQ/W2Etel1cXHcqKSkqKS9pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgLy8gVGhlIGRpZmZlcmVudCB0eXBlcyBvZiBUVDIgc3RyaW5ncyBcInJlcGxhY2VcIiB0aGUgQy1saWtlIHN0YW5kYXJkIHN0cmluZ1xuICAgIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMudHQyLnN0cmluZ1xuICAgIFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICB2YXIgdHQyUGF0dGVybiA9IC9cXFslW1xcc1xcU10rPyVcXF0vZ1xuICAgICAgUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKFxuICAgICAgICBlbnYsXG4gICAgICAgICd0dDInLFxuICAgICAgICB0dDJQYXR0ZXJuXG4gICAgICApXG4gICAgfSlcbiAgICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICBQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAndHQyJylcbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=