(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_jsx"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvanN4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1SEFBdUgsU0FBUyxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxHQUFHLEVBQUUsbUNBQW1DO0FBQ25OO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEdBQUcsRUFBRSxtQ0FBbUM7QUFDOUQ7QUFDQSw2QkFBNkIsRUFBRSxJQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksS0FBSztBQUMzRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuZTVlNTQwNmRiM2FjMjJlODhjMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBqc3hcbmpzeC5kaXNwbGF5TmFtZSA9ICdqc3gnXG5qc3guYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBqc3goUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciBqYXZhc2NyaXB0ID0gUHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdClcbiAgICBQcmlzbS5sYW5ndWFnZXMuanN4ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywgamF2YXNjcmlwdClcbiAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5wYXR0ZXJuID0gLzxcXC8/KD86W1xcdy46LV0rXFxzKig/OlxccysoPzpbXFx3LjotXSsoPzo9KD86KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHN7J1wiPj1dK3xcXHsoPzpcXHsoPzpcXHtbXn1dKlxcfXxbXnt9XSkqXFx9fFtee31dKStcXH0pKT98XFx7XFwuezN9W2Etel8kXVtcXHckXSooPzpcXC5bYS16XyRdW1xcdyRdKikqXFx9KSkqXFxzKlxcLz8pPz4vaVxuICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsndGFnJ10ucGF0dGVybiA9IC9ePFxcLz9bXlxccz5cXC9dKi9pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlW1xuICAgICAgJ2F0dHItdmFsdWUnXG4gICAgXS5wYXR0ZXJuID0gLz0oPyFcXHspKD86KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHMnXCI+XSspL2lcbiAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ3RhZyddLmluc2lkZVtcbiAgICAgICdjbGFzcy1uYW1lJ1xuICAgIF0gPSAvXltBLVpdXFx3Kig/OlxcLltBLVpdXFx3KikqJC9cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgJ2luc2lkZScsXG4gICAgICAnYXR0ci1uYW1lJyxcbiAgICAgIHtcbiAgICAgICAgc3ByZWFkOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xce1xcLnszfVthLXpfJF1bXFx3JF0qKD86XFwuW2Etel8kXVtcXHckXSopKlxcfS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLnszfXxbe30uXS8sXG4gICAgICAgICAgICAnYXR0ci12YWx1ZSc6IC9cXHcrL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnXG4gICAgKVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgICAnaW5zaWRlJyxcbiAgICAgICdhdHRyLXZhbHVlJyxcbiAgICAgIHtcbiAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgLy8gQWxsb3cgZm9yIHR3byBsZXZlbHMgb2YgbmVzdGluZ1xuICAgICAgICAgIHBhdHRlcm46IC89KFxceyg/Olxceyg/Olxce1tefV0qXFx9fFtefV0pKlxcfXxbXn1dKStcXH0pL2ksXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAnc2NyaXB0LXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXj0oPz17KS8sXG4gICAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmpzeFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxpYXM6ICdsYW5ndWFnZS1qYXZhc2NyaXB0J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWdcbiAgICApIC8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xuICAgIHZhciBzdHJpbmdpZnlUb2tlbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0b2tlbi5jb250ZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW4uY29udGVudC5tYXAoc3RyaW5naWZ5VG9rZW4pLmpvaW4oJycpXG4gICAgfVxuICAgIHZhciB3YWxrVG9rZW5zID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gICAgICB2YXIgb3BlbmVkVGFncyA9IFtdXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgICAgdmFyIG5vdFRhZ05vckJyYWNlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b2tlbi50eXBlID09PSAndGFnJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudFswXSAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gV2UgZm91bmQgYSB0YWcsIG5vdyBmaW5kIGl0cyBraW5kXG4gICAgICAgICAgICBpZiAodG9rZW4uY29udGVudFswXS5jb250ZW50WzBdLmNvbnRlbnQgPT09ICc8LycpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvc2luZyB0YWdcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS50YWdOYW1lID09PVxuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VG9rZW4odG9rZW4uY29udGVudFswXS5jb250ZW50WzFdKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBQb3AgbWF0Y2hpbmcgb3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgICBvcGVuZWRUYWdzLnBvcCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50W3Rva2VuLmNvbnRlbnQubGVuZ3RoIC0gMV0uY29udGVudCA9PT0gJy8+Jykge1xuICAgICAgICAgICAgICAgIC8vIEF1dG9jbG9zZWQgdGFnLCBpZ25vcmVcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuaW5nIHRhZ1xuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuICAgICAgICAgICAgICAgICAgb3BlbmVkQnJhY2VzOiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPT09ICd7J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGVudGVyZWQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMrK1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPiAwICYmXG4gICAgICAgICAgICB0b2tlbi50eXBlID09PSAncHVuY3R1YXRpb24nICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID09PSAnfSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgbWlnaHQgaGF2ZSBsZWZ0IGEgSlNYIGNvbnRleHQgaW5zaWRlIGEgdGFnXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzLS1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90VGFnTm9yQnJhY2UgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub3RUYWdOb3JCcmFjZSB8fCB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzID09PSAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIGFyZSBpbnNpZGUgYSB0YWcsIGFuZCBub3QgaW5zaWRlIGEgSlNYIGNvbnRleHQuXG4gICAgICAgICAgICAvLyBUaGF0J3MgcGxhaW4gdGV4dDogZHJvcCBhbnkgdG9rZW5zIG1hdGNoZWQuXG4gICAgICAgICAgICB2YXIgcGxhaW5UZXh0ID0gc3RyaW5naWZ5VG9rZW4odG9rZW4pIC8vIEFuZCBtZXJnZSB0ZXh0IHdpdGggYWRqYWNlbnQgdGV4dFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpIDwgdG9rZW5zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgKHR5cGVvZiB0b2tlbnNbaSArIDFdID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgIHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHBsYWluVGV4dCArPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSArIDFdKVxuICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpID4gMCAmJlxuICAgICAgICAgICAgICAodHlwZW9mIHRva2Vuc1tpIC0gMV0gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICAgICAgdG9rZW5zW2kgLSAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcGxhaW5UZXh0ID0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgLSAxXSkgKyBwbGFpblRleHRcbiAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpIC0gMSwgMSlcbiAgICAgICAgICAgICAgaS0tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnNbaV0gPSBuZXcgUHJpc20uVG9rZW4oXG4gICAgICAgICAgICAgICdwbGFpbi10ZXh0JyxcbiAgICAgICAgICAgICAgcGxhaW5UZXh0LFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBwbGFpblRleHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09ICdqc3gnICYmIGVudi5sYW5ndWFnZSAhPT0gJ3RzeCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpXG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9