(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

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

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorPhp = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js")
module.exports = phpExtras
phpExtras.displayName = 'phpExtras'
phpExtras.aliases = []
function phpExtras(Prism) {
  Prism.register(refractorPhp)
  Prism.languages.insertBefore('php', 'variable', {
    this: /\$this\b/,
    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
    scope: {
      pattern: /\b[\w\\]+::/,
      inside: {
        keyword: /static|self|parent/,
        punctuation: /::|\\/
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/php.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/php.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = php
php.displayName = 'php'
php.aliases = []
function php(Prism) {
  Prism.register(refractorMarkupTemplating)
  /**
   * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
   * Modified by Miles Johnson: http://milesj.me
   *
   * Supports the following:
   *      - Extends clike syntax
   *      - Support for PHP 5.3+ (namespaces, traits, generators, etc)
   *      - Smarter constant and function matching
   *
   * Adds the following new token classes:
   *      constant, delimiter, variable, function, package
   */
  ;(function(Prism) {
    Prism.languages.php = Prism.languages.extend('clike', {
      keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
      boolean: {
        pattern: /\b(?:false|true)\b/i,
        alias: 'constant'
      },
      constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('php', 'string', {
      'shell-comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        alias: 'comment'
      }
    })
    Prism.languages.insertBefore('php', 'comment', {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: 'important'
      }
    })
    Prism.languages.insertBefore('php', 'keyword', {
      variable: /\$+(?:\w+\b|(?={))/i,
      package: {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: true,
        inside: {
          punctuation: /\\/
        }
      }
    }) // Must be defined after the function pattern
    Prism.languages.insertBefore('php', 'operator', {
      property: {
        pattern: /(->)[\w]+/,
        lookbehind: true
      }
    })
    var string_interpolation = {
      pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
      lookbehind: true,
      inside: {
        rest: Prism.languages.php
      }
    }
    Prism.languages.insertBefore('php', 'string', {
      'nowdoc-string': {
        pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
        greedy: true,
        alias: 'string',
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      'heredoc-string': {
        pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
        greedy: true,
        alias: 'string',
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: string_interpolation // See below
        }
      },
      'single-quoted-string': {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: true,
        alias: 'string'
      },
      'double-quoted-string': {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: true,
        alias: 'string',
        inside: {
          interpolation: string_interpolation // See below
        }
      }
    }) // The different types of PHP strings "replace" the C-like standard string
    delete Prism.languages.php['string']
    Prism.hooks.add('before-tokenize', function(env) {
      if (!/<\?/.test(env.code)) {
        return
      }
      var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'php',
        phpPattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWFya3VwLXRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3BocC1leHRyYXMuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3BocC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hIWTtBQUNaLG1CQUFtQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ1osZ0NBQWdDLG1CQUFPLENBQUMsa0ZBQXdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvRUFBb0UsK0NBQStDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLmUzMjllMjJhYzhjZTUyNDBhN2E1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya3VwVGVtcGxhdGluZ1xubWFya3VwVGVtcGxhdGluZy5kaXNwbGF5TmFtZSA9ICdtYXJrdXBUZW1wbGF0aW5nJ1xubWFya3VwVGVtcGxhdGluZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1hcmt1cFRlbXBsYXRpbmcoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG4gICAgICByZXR1cm4gJ19fXycgKyBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpICsgaW5kZXggKyAnX19fJ1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30pLCB7XG4gICAgICBidWlsZFBsYWNlaG9sZGVyczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG9rZW5pemUgYWxsIGlubGluZSB0ZW1wbGF0aW5nIGV4cHJlc3Npb25zIG1hdGNoaW5nIGBwbGFjZWhvbGRlclBhdHRlcm5gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcbiAgICAgICAgICogYHRydWVgIHdpbGwgYmUgcmVwbGFjZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cbiAgICAgICAgICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG4gICAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdG9rZW5TdGFjayA9IChlbnYudG9rZW5TdGFjayA9IFtdKVxuICAgICAgICAgIGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aFxuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyIC8vIENoZWNrIGZvciBleGlzdGluZyBzdHJpbmdzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgIGVudi5jb2RlLmluZGV4T2YoKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICsraSAvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcbiAgICAgICAgICAgIHRva2VuU3RhY2tbaV0gPSBtYXRjaFxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSkgLy8gU3dpdGNoIHRoZSBncmFtbWFyIHRvIG1hcmt1cFxuICAgICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGFmdGVyLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGVudiwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0gLy8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcbiAgICAgICAgICBlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV1cbiAgICAgICAgICB2YXIgaiA9IDBcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKVxuICAgICAgICAgIGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG4gICAgICAgICAgICAgIGlmIChqID49IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBrID0ga2V5c1tqXVxuICAgICAgICAgICAgICAgIHZhciB0ID0gZW52LnRva2VuU3RhY2tba11cbiAgICAgICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaylcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICsralxuICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgdmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFByaXNtLnRva2VuaXplKHQsIGVudi5ncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBbXVxuICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKVxuICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdG9rZW4uY29udGVudFxuICAgICAgICAgICAgICAgIC8qICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJyAqL1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNcbiAgICAgICAgICB9XG4gICAgICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iLCIndXNlIHN0cmljdCdcbnZhciByZWZyYWN0b3JQaHAgPSByZXF1aXJlKCcuL3BocC5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IHBocEV4dHJhc1xucGhwRXh0cmFzLmRpc3BsYXlOYW1lID0gJ3BocEV4dHJhcydcbnBocEV4dHJhcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHBocEV4dHJhcyhQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JQaHApXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICd2YXJpYWJsZScsIHtcbiAgICB0aGlzOiAvXFwkdGhpc1xcYi8sXG4gICAgZ2xvYmFsOiAvXFwkKD86Xyg/OlNFUlZFUnxHRVR8UE9TVHxGSUxFU3xSRVFVRVNUfFNFU1NJT058RU5WfENPT0tJRSl8R0xPQkFMU3xIVFRQX1JBV19QT1NUX0RBVEF8YXJnY3xhcmd2fHBocF9lcnJvcm1zZ3xodHRwX3Jlc3BvbnNlX2hlYWRlcilcXGIvLFxuICAgIHNjb3BlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiW1xcd1xcXFxdKzo6LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBrZXl3b3JkOiAvc3RhdGljfHNlbGZ8cGFyZW50LyxcbiAgICAgICAgcHVuY3R1YXRpb246IC86OnxcXFxcL1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3Rvck1hcmt1cFRlbXBsYXRpbmcgPSByZXF1aXJlKCcuL21hcmt1cC10ZW1wbGF0aW5nLmpzJylcbm1vZHVsZS5leHBvcnRzID0gcGhwXG5waHAuZGlzcGxheU5hbWUgPSAncGhwJ1xucGhwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcGhwKFByaXNtKSB7XG4gIFByaXNtLnJlZ2lzdGVyKHJlZnJhY3Rvck1hcmt1cFRlbXBsYXRpbmcpXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBieSBBYXJvbiBIYXJ1bjogaHR0cDovL2FhaGFjcmVhdGl2ZS5jb20vMjAxMi8wNy8zMS9waHAtc3ludGF4LWhpZ2hsaWdodGluZy1wcmlzbS9cbiAgICogTW9kaWZpZWQgYnkgTWlsZXMgSm9obnNvbjogaHR0cDovL21pbGVzai5tZVxuICAgKlxuICAgKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nOlxuICAgKiAgICAgIC0gRXh0ZW5kcyBjbGlrZSBzeW50YXhcbiAgICogICAgICAtIFN1cHBvcnQgZm9yIFBIUCA1LjMrIChuYW1lc3BhY2VzLCB0cmFpdHMsIGdlbmVyYXRvcnMsIGV0YylcbiAgICogICAgICAtIFNtYXJ0ZXIgY29uc3RhbnQgYW5kIGZ1bmN0aW9uIG1hdGNoaW5nXG4gICAqXG4gICAqIEFkZHMgdGhlIGZvbGxvd2luZyBuZXcgdG9rZW4gY2xhc3NlczpcbiAgICogICAgICBjb25zdGFudCwgZGVsaW1pdGVyLCB2YXJpYWJsZSwgZnVuY3Rpb24sIHBhY2thZ2VcbiAgICovXG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMucGhwID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgICBrZXl3b3JkOiAvXFxiKD86X19oYWx0X2NvbXBpbGVyfGFic3RyYWN0fGFuZHxhcnJheXxhc3xicmVha3xjYWxsYWJsZXxjYXNlfGNhdGNofGNsYXNzfGNsb25lfGNvbnN0fGNvbnRpbnVlfGRlY2xhcmV8ZGVmYXVsdHxkaWV8ZG98ZWNob3xlbHNlfGVsc2VpZnxlbXB0eXxlbmRkZWNsYXJlfGVuZGZvcnxlbmRmb3JlYWNofGVuZGlmfGVuZHN3aXRjaHxlbmR3aGlsZXxldmFsfGV4aXR8ZXh0ZW5kc3xmaW5hbHxmaW5hbGx5fGZvcnxmb3JlYWNofGZ1bmN0aW9ufGdsb2JhbHxnb3RvfGlmfGltcGxlbWVudHN8aW5jbHVkZXxpbmNsdWRlX29uY2V8aW5zdGFuY2VvZnxpbnN0ZWFkb2Z8aW50ZXJmYWNlfGlzc2V0fGxpc3R8bmFtZXNwYWNlfG5ld3xvcnxwYXJlbnR8cHJpbnR8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJlcXVpcmV8cmVxdWlyZV9vbmNlfHJldHVybnxzdGF0aWN8c3dpdGNofHRocm93fHRyYWl0fHRyeXx1bnNldHx1c2V8dmFyfHdoaWxlfHhvcnx5aWVsZClcXGIvaSxcbiAgICAgIGJvb2xlYW46IHtcbiAgICAgICAgcGF0dGVybjogL1xcYig/OmZhbHNlfHRydWUpXFxiL2ksXG4gICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICB9LFxuICAgICAgY29uc3RhbnQ6IFsvXFxiW0EtWl9dW0EtWjAtOV9dKlxcYi8sIC9cXGIoPzpudWxsKVxcYi9pXSxcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAnc3RyaW5nJywge1xuICAgICAgJ3NoZWxsLWNvbW1lbnQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdjb21tZW50Jywge1xuICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXD8+JHxePFxcPyg/OnBocCg/PVxccyl8PSk/L2ksXG4gICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ2tleXdvcmQnLCB7XG4gICAgICB2YXJpYWJsZTogL1xcJCsoPzpcXHcrXFxifCg/PXspKS9pLFxuICAgICAgcGFja2FnZToge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcXFx8bmFtZXNwYWNlXFxzK3x1c2VcXHMrKVtcXHdcXFxcXSsvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcXFwvXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSAvLyBNdXN0IGJlIGRlZmluZWQgYWZ0ZXIgdGhlIGZ1bmN0aW9uIHBhdHRlcm5cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAnb3BlcmF0b3InLCB7XG4gICAgICBwcm9wZXJ0eToge1xuICAgICAgICBwYXR0ZXJuOiAvKC0+KVtcXHddKy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHZhciBzdHJpbmdfaW50ZXJwb2xhdGlvbiA9IHtcbiAgICAgIHBhdHRlcm46IC97XFwkKD86eyg/OntbXnt9XSt9fFtee31dKyl9fFtee31dKSt9fChefFteXFxcXHtdKVxcJCsoPzpcXHcrKD86XFxbLis/XXwtPlxcdyspKikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMucGhwXG4gICAgICB9XG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdzdHJpbmcnLCB7XG4gICAgICAnbm93ZG9jLXN0cmluZyc6IHtcbiAgICAgICAgcGF0dGVybjogLzw8PCcoW14nXSspJyg/Olxcclxcbj98XFxuKSg/Oi4qKD86XFxyXFxuP3xcXG4pKSo/XFwxOy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9ePDw8J1teJ10rJ3xbYS16X11cXHcqOyQvaSxcbiAgICAgICAgICAgIGFsaWFzOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL148PDwnP3xbJztdJC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnaGVyZWRvYy1zdHJpbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC88PDwoPzpcIihbXlwiXSspXCIoPzpcXHJcXG4/fFxcbikoPzouKig/Olxcclxcbj98XFxuKSkqP1xcMTt8KFthLXpfXVxcdyopKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9cXDI7KS9pLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXjw8PCg/OlwiW15cIl0rXCJ8W2Etel9dXFx3Kil8W2Etel9dXFx3KjskL2ksXG4gICAgICAgICAgICBhbGlhczogJ3N5bWJvbCcsXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9ePDw8XCI/fFtcIjtdJC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGludGVycG9sYXRpb246IHN0cmluZ19pbnRlcnBvbGF0aW9uIC8vIFNlZSBiZWxvd1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3NpbmdsZS1xdW90ZWQtc3RyaW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvJyg/OlxcXFxbXFxzXFxTXXxbXlxcXFwnXSkqJy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgICB9LFxuICAgICAgJ2RvdWJsZS1xdW90ZWQtc3RyaW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBzdHJpbmdfaW50ZXJwb2xhdGlvbiAvLyBTZWUgYmVsb3dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIC8vIFRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgUEhQIHN0cmluZ3MgXCJyZXBsYWNlXCIgdGhlIEMtbGlrZSBzdGFuZGFyZCBzdHJpbmdcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnBocFsnc3RyaW5nJ11cbiAgICBQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgaWYgKCEvPFxcPy8udGVzdChlbnYuY29kZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB2YXIgcGhwUGF0dGVybiA9IC88XFw/KD86W15cIicvI118XFwvKD8hWyovXSl8KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8KD86XFwvXFwvfCMpKD86W14/XFxuXFxyXXxcXD8oPyE+KSkqfFxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkpKj8oPzpcXD8+fCQpL2dpXG4gICAgICBQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoXG4gICAgICAgIGVudixcbiAgICAgICAgJ3BocCcsXG4gICAgICAgIHBocFBhdHRlcm5cbiAgICAgIClcbiAgICB9KVxuICAgIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICdwaHAnKVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==