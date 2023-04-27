(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/jsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/jsx.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function(Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i
    Prism.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i
    Prism.languages.jsx.tag.inside['tag'].inside[
      'class-name'
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            'attr-value': /\w+/
          }
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          // Allow for two levels of nesting
          pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
          inside: {
            'script-punctuation': {
              pattern: /^=(?={)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          },
          alias: 'language-javascript'
        }
      },
      Prism.languages.jsx.tag
    ) // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorJsx = __webpack_require__(/*! ./jsx.js */ "./node_modules/refractor/lang/jsx.js")
var refractorTypescript = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js")
module.exports = tsx
tsx.displayName = 'tsx'
tsx.aliases = []
function tsx(Prism) {
  Prism.register(refractorJsx)
  Prism.register(refractorTypescript)
  var typescript = Prism.util.clone(Prism.languages.typescript)
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript)
}


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = typescript
typescript.displayName = 'typescript'
typescript.aliases = ['ts']
function typescript(Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  })
  Prism.languages.ts = Prism.languages.typescript
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvanN4LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90c3guanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3R5cGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVIQUF1SCxTQUFTLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRSxtQ0FBbUM7QUFDbk47QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRyxFQUFFLG1DQUFtQztBQUM5RDtBQUNBLDZCQUE2QixFQUFFLElBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLO0FBQzNEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUMvSlk7QUFDWixtQkFBbUIsbUJBQU8sQ0FBQyxzREFBVTtBQUNyQywwQkFBMEIsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjQxODYzZDgxNDhmMmViNGM5MjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ganN4XG5qc3guZGlzcGxheU5hbWUgPSAnanN4J1xuanN4LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24ganN4KFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgamF2YXNjcmlwdCA9IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmpzeCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIGphdmFzY3JpcHQpXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcucGF0dGVybiA9IC88XFwvPyg/OltcXHcuOi1dK1xccyooPzpcXHMrKD86W1xcdy46LV0rKD86PSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzeydcIj49XSt8XFx7KD86XFx7KD86XFx7W159XSpcXH18W157fV0pKlxcfXxbXnt9XSkrXFx9KSk/fFxce1xcLnszfVthLXpfJF1bXFx3JF0qKD86XFwuW2Etel8kXVtcXHckXSopKlxcfSkpKlxccypcXC8/KT8+L2lcbiAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ3RhZyddLnBhdHRlcm4gPSAvXjxcXC8/W15cXHM+XFwvXSovaVxuICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVtcbiAgICAgICdhdHRyLXZhbHVlJ1xuICAgIF0ucGF0dGVybiA9IC89KD8hXFx7KSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPl0rKS9pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWyd0YWcnXS5pbnNpZGVbXG4gICAgICAnY2xhc3MtbmFtZSdcbiAgICBdID0gL15bQS1aXVxcdyooPzpcXC5bQS1aXVxcdyopKiQvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ2F0dHItbmFtZScsXG4gICAgICB7XG4gICAgICAgIHNwcmVhZDoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXHtcXC57M31bYS16XyRdW1xcdyRdKig/OlxcLlthLXpfJF1bXFx3JF0qKSpcXH0vLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9cXC57M318W3t9Ll0vLFxuICAgICAgICAgICAgJ2F0dHItdmFsdWUnOiAvXFx3Ky9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZ1xuICAgIClcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgJ2luc2lkZScsXG4gICAgICAnYXR0ci12YWx1ZScsXG4gICAgICB7XG4gICAgICAgIHNjcmlwdDoge1xuICAgICAgICAgIC8vIEFsbG93IGZvciB0d28gbGV2ZWxzIG9mIG5lc3RpbmdcbiAgICAgICAgICBwYXR0ZXJuOiAvPShcXHsoPzpcXHsoPzpcXHtbXn1dKlxcfXxbXn1dKSpcXH18W159XSkrXFx9KS9pLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ3NjcmlwdC1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL149KD89eykvLFxuICAgICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qc3hcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtamF2YXNjcmlwdCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnXG4gICAgKSAvLyBUaGUgZm9sbG93aW5nIHdpbGwgaGFuZGxlIHBsYWluIHRleHQgaW5zaWRlIHRhZ3NcbiAgICB2YXIgc3RyaW5naWZ5VG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xuICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0b2tlblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdG9rZW4uY29udGVudFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuLmNvbnRlbnQubWFwKHN0cmluZ2lmeVRva2VuKS5qb2luKCcnKVxuICAgIH1cbiAgICB2YXIgd2Fsa1Rva2VucyA9IGZ1bmN0aW9uKHRva2Vucykge1xuICAgICAgdmFyIG9wZW5lZFRhZ3MgPSBbXVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICAgIHZhciBub3RUYWdOb3JCcmFjZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gJ3RhZycgJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnRbMF0gJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnRbMF0udHlwZSA9PT0gJ3RhZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgdGFnLCBub3cgZmluZCBpdHMga2luZFxuICAgICAgICAgICAgaWYgKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFswXS5jb250ZW50ID09PSAnPC8nKSB7XG4gICAgICAgICAgICAgIC8vIENsb3NpbmcgdGFnXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0udGFnTmFtZSA9PT1cbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gUG9wIG1hdGNoaW5nIG9wZW5pbmcgdGFnXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFncy5wb3AoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodG9rZW4uY29udGVudFt0b2tlbi5jb250ZW50Lmxlbmd0aCAtIDFdLmNvbnRlbnQgPT09ICcvPicpIHtcbiAgICAgICAgICAgICAgICAvLyBBdXRvY2xvc2VkIHRhZywgaWdub3JlXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgICBvcGVuZWRUYWdzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGFnTmFtZTogc3RyaW5naWZ5VG9rZW4odG9rZW4uY29udGVudFswXS5jb250ZW50WzFdKSxcbiAgICAgICAgICAgICAgICAgIG9wZW5lZEJyYWNlczogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICB0b2tlbi50eXBlID09PSAncHVuY3R1YXRpb24nICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID09PSAneydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgbWlnaHQgaGF2ZSBlbnRlcmVkIGEgSlNYIGNvbnRleHQgaW5zaWRlIGEgdGFnXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKytcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzID4gMCAmJlxuICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9PT0gJ30nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIG1pZ2h0IGhhdmUgbGVmdCBhIEpTWCBjb250ZXh0IGluc2lkZSBhIHRhZ1xuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcy0tXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdFRhZ05vckJyYWNlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm90VGFnTm9yQnJhY2UgfHwgdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBhcmUgaW5zaWRlIGEgdGFnLCBhbmQgbm90IGluc2lkZSBhIEpTWCBjb250ZXh0LlxuICAgICAgICAgICAgLy8gVGhhdCdzIHBsYWluIHRleHQ6IGRyb3AgYW55IHRva2VucyBtYXRjaGVkLlxuICAgICAgICAgICAgdmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKSAvLyBBbmQgbWVyZ2UgdGV4dCB3aXRoIGFkamFjZW50IHRleHRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA8IHRva2Vucy5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICh0eXBlb2YgdG9rZW5zW2kgKyAxXSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBwbGFpblRleHQgKz0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgKyAxXSlcbiAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA+IDAgJiZcbiAgICAgICAgICAgICAgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgIHRva2Vuc1tpIC0gMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2Vuc1tpIC0gMV0pICsgcGxhaW5UZXh0XG4gICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSAtIDEsIDEpXG4gICAgICAgICAgICAgIGktLVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zW2ldID0gbmV3IFByaXNtLlRva2VuKFxuICAgICAgICAgICAgICAncGxhaW4tdGV4dCcsXG4gICAgICAgICAgICAgIHBsYWluVGV4dCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgcGxhaW5UZXh0XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhbGtUb2tlbnModG9rZW4uY29udGVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSAnanN4JyAmJiBlbnYubGFuZ3VhZ2UgIT09ICd0c3gnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9ySnN4ID0gcmVxdWlyZSgnLi9qc3guanMnKVxudmFyIHJlZnJhY3RvclR5cGVzY3JpcHQgPSByZXF1aXJlKCcuL3R5cGVzY3JpcHQuanMnKVxubW9kdWxlLmV4cG9ydHMgPSB0c3hcbnRzeC5kaXNwbGF5TmFtZSA9ICd0c3gnXG50c3guYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB0c3goUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9ySnN4KVxuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JUeXBlc2NyaXB0KVxuICB2YXIgdHlwZXNjcmlwdCA9IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQpXG4gIFByaXNtLmxhbmd1YWdlcy50c3ggPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqc3gnLCB0eXBlc2NyaXB0KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZXNjcmlwdFxudHlwZXNjcmlwdC5kaXNwbGF5TmFtZSA9ICd0eXBlc2NyaXB0J1xudHlwZXNjcmlwdC5hbGlhc2VzID0gWyd0cyddXG5mdW5jdGlvbiB0eXBlc2NyaXB0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHtcbiAgICAvLyBGcm9tIEphdmFTY3JpcHQgUHJpc20ga2V5d29yZCBsaXN0IGFuZCBUeXBlU2NyaXB0IGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL21hc3Rlci9kb2Mvc3BlYy5tZCMyMjEtcmVzZXJ2ZWQtd29yZHNcbiAgICBrZXl3b3JkOiAvXFxiKD86YWJzdHJhY3R8YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxpc3xrZXlvZnxsZXR8bW9kdWxlfG5hbWVzcGFjZXxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZXR1cm58cmVxdWlyZXxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlfHR5cGVvZnx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgYnVpbHRpbjogL1xcYig/OnN0cmluZ3xGdW5jdGlvbnxhbnl8bnVtYmVyfGJvb2xlYW58QXJyYXl8c3ltYm9sfGNvbnNvbGV8UHJvbWlzZXx1bmtub3dufG5ldmVyKVxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnRzID0gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=