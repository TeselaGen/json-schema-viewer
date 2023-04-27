(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_xquery"],{

/***/ "./node_modules/refractor/lang/xquery.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/xquery.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = xquery
xquery.displayName = 'xquery'
xquery.aliases = []
function xquery(Prism) {
  ;(function(Prism) {
    Prism.languages.xquery = Prism.languages.extend('markup', {
      'xquery-comment': {
        pattern: /\(:[\s\S]*?:\)/,
        greedy: true,
        alias: 'comment'
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
        greedy: true
      },
      extension: {
        pattern: /\(#.+?#\)/,
        alias: 'symbol'
      },
      variable: /\$[\w-:]+/,
      axis: {
        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
        lookbehind: true,
        alias: 'operator'
      },
      'keyword-operator': {
        pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
        lookbehind: true,
        alias: 'operator'
      },
      keyword: {
        pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
        lookbehind: true
      },
      function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
      'xquery-element': {
        pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'tag'
      },
      'xquery-attribute': {
        pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'attr-name'
      },
      builtin: {
        pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
        lookbehind: true
      },
      number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
      operator: [
        /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
        {
          pattern: /(\s)-(?=\s)/,
          lookbehind: true
        }
      ],
      punctuation: /[[\](){},;:/]/
    })
    Prism.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i
    Prism.languages.xquery['tag'].inside[
      'attr-value'
    ].pattern = /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i
    Prism.languages.xquery['tag'].inside['attr-value'].inside[
      'punctuation'
    ] = /^="|"$/
    Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {
      // Allow for two levels of nesting
      pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,
      inside: {
        rest: Prism.languages.xquery
      },
      alias: 'language-xquery'
    } // The following will handle plain text inside tags
    var stringifyToken = function(token) {
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
            token.content === '{' && // Ignore `{{`
            (!tokens[i + 1] ||
              tokens[i + 1].type !== 'punctuation' ||
              tokens[i + 1].content !== '{') &&
            (!tokens[i - 1] ||
              tokens[i - 1].type !== 'plain-text' ||
              tokens[i - 1].content !== '{')
          ) {
            // Here we might have entered an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else if (token.type !== 'comment') {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside an XQuery expression.
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
            if (/^\s+$/.test(plainText)) {
              tokens[i] = plainText
            } else {
              tokens[i] = new Prism.Token(
                'plain-text',
                plainText,
                null,
                plainText
              )
            }
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'xquery') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcveHF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUIsS0FBSztBQUNMLDBHQUEwRyxJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUM3STtBQUNBO0FBQ0EsdUNBQXVDLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUk7QUFDcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjQ0ZTk0ZTZlNmNkMzk3ZmFhODA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0geHF1ZXJ5XG54cXVlcnkuZGlzcGxheU5hbWUgPSAneHF1ZXJ5J1xueHF1ZXJ5LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24geHF1ZXJ5KFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge1xuICAgICAgJ3hxdWVyeS1jb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwoOltcXHNcXFNdKj86XFwpLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICB9LFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFwxXFwxfCg/IVxcMSlbXFxzXFxTXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZXh0ZW5zaW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCgjLis/I1xcKS8sXG4gICAgICAgIGFsaWFzOiAnc3ltYm9sJ1xuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiAvXFwkW1xcdy06XSsvLFxuICAgICAgYXhpczoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W14tXSkoPzphbmNlc3Rvcig/Oi1vci1zZWxmKT98YXR0cmlidXRlfGNoaWxkfGRlc2NlbmRhbnQoPzotb3Itc2VsZik/fGZvbGxvd2luZyg/Oi1zaWJsaW5nKT98cGFyZW50fHByZWNlZGluZyg/Oi1zaWJsaW5nKT98c2VsZikoPz06OikvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgICAgfSxcbiAgICAgICdrZXl3b3JkLW9wZXJhdG9yJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W146LV0pXFxiKD86YW5kfGNhc3RhYmxlIGFzfGRpdnxlcXxleGNlcHR8Z2V8Z3R8aWRpdnxpbnN0YW5jZSBvZnxpbnRlcnNlY3R8aXN8bGV8bHR8bW9kfG5lfG9yfHVuaW9uKVxcYig/PSR8W146LV0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXjotXSlcXGIoPzphc3xhc2NlbmRpbmd8YXR8YmFzZS11cml8Ym91bmRhcnktc3BhY2V8Y2FzZXxjYXN0IGFzfGNvbGxhdGlvbnxjb25zdHJ1Y3Rpb258Y29weS1uYW1lc3BhY2VzfGRlY2xhcmV8ZGVmYXVsdHxkZXNjZW5kaW5nfGVsc2V8ZW1wdHkgKD86Z3JlYXRlc3R8bGVhc3QpfGVuY29kaW5nfGV2ZXJ5fGV4dGVybmFsfGZvcnxmdW5jdGlvbnxpZnxpbXBvcnR8aW58aW5oZXJpdHxsYXh8bGV0fG1hcHxtb2R1bGV8bmFtZXNwYWNlfG5vLWluaGVyaXR8bm8tcHJlc2VydmV8b3B0aW9ufG9yZGVyKD86IGJ5fGVkfGluZyk/fHByZXNlcnZlfHJldHVybnxzYXRpc2ZpZXN8c2NoZW1hfHNvbWV8c3RhYmxlfHN0cmljdHxzdHJpcHx0aGVufHRvfHRyZWF0IGFzfHR5cGVzd2l0Y2h8dW5vcmRlcmVkfHZhbGlkYXRlfHZhcmlhYmxlfHZlcnNpb258d2hlcmV8eHF1ZXJ5KVxcYig/PSR8W146LV0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiAvW1xcdy1dKyg/OjpbXFx3LV0rKSooPz1cXHMqXFwoKS8sXG4gICAgICAneHF1ZXJ5LWVsZW1lbnQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oZWxlbWVudFxccyspW1xcdy1dKyg/OjpbXFx3LV0rKSovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ3RhZydcbiAgICAgIH0sXG4gICAgICAneHF1ZXJ5LWF0dHJpYnV0ZSc6IHtcbiAgICAgICAgcGF0dGVybjogLyhhdHRyaWJ1dGVcXHMrKVtcXHctXSsoPzo6W1xcdy1dKykqLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnXG4gICAgICB9LFxuICAgICAgYnVpbHRpbjoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W146LV0pXFxiKD86YXR0cmlidXRlfGNvbW1lbnR8ZG9jdW1lbnR8ZWxlbWVudHxwcm9jZXNzaW5nLWluc3RydWN0aW9ufHRleHR8eHM6KD86YW55QXRvbWljVHlwZXxhbnlUeXBlfGFueVVSSXxiYXNlNjRCaW5hcnl8Ym9vbGVhbnxieXRlfGRhdGV8ZGF0ZVRpbWV8ZGF5VGltZUR1cmF0aW9ufGRlY2ltYWx8ZG91YmxlfGR1cmF0aW9ufEVOVElUSUVTfEVOVElUWXxmbG9hdHxnRGF5fGdNb250aHxnTW9udGhEYXl8Z1llYXJ8Z1llYXJNb250aHxoZXhCaW5hcnl8SUR8SURSRUZTP3xpbnR8aW50ZWdlcnxsYW5ndWFnZXxsb25nfE5hbWV8TkNOYW1lfG5lZ2F0aXZlSW50ZWdlcnxOTVRPS0VOUz98bm9uTmVnYXRpdmVJbnRlZ2VyfG5vblBvc2l0aXZlSW50ZWdlcnxub3JtYWxpemVkU3RyaW5nfE5PVEFUSU9OfHBvc2l0aXZlSW50ZWdlcnxRTmFtZXxzaG9ydHxzdHJpbmd8dGltZXx0b2tlbnx1bnNpZ25lZCg/OkJ5dGV8SW50fExvbmd8U2hvcnQpfHVudHlwZWQoPzpBdG9taWMpP3x5ZWFyTW9udGhEdXJhdGlvbikpXFxiKD89JHxbXjotXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiAvXFxiXFxkKyg/OlxcLlxcZCspPyg/OkVbKy1dP1xcZCspPy8sXG4gICAgICBvcGVyYXRvcjogW1xuICAgICAgICAvWysqPT98QF18XFwuXFwuP3w6PXwhPXw8Wz08XT98Pls9Pl0/LyxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFxzKS0oPz1cXHMpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBwdW5jdHVhdGlvbjogL1tbXFxdKCl7fSw7Oi9dL1xuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhxdWVyeS50YWcucGF0dGVybiA9IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMrW15cXHM+XFwvPV0rKD86PSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXx7KD8heykoPzp7KD86e1tefV0qfXxbXn1dKSp9fFtefV0pK318KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj49XSspKT8pKlxccypcXC8/Pi9pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhxdWVyeVsndGFnJ10uaW5zaWRlW1xuICAgICAgJ2F0dHItdmFsdWUnXG4gICAgXS5wYXR0ZXJuID0gLz0oPzooXCJ8JykoPzpcXFxcW1xcc1xcU118eyg/IXspKD86eyg/OntbXn1dKn18W159XSkqfXxbXn1dKSt9fCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHMnXCI+PV0rKS9pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhxdWVyeVsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlW1xuICAgICAgJ3B1bmN0dWF0aW9uJ1xuICAgIF0gPSAvXj1cInxcIiQvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhxdWVyeVsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydleHByZXNzaW9uJ10gPSB7XG4gICAgICAvLyBBbGxvdyBmb3IgdHdvIGxldmVscyBvZiBuZXN0aW5nXG4gICAgICBwYXR0ZXJuOiAveyg/IXspKD86eyg/OntbXn1dKn18W159XSkqfXxbXn1dKSt9LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5XG4gICAgICB9LFxuICAgICAgYWxpYXM6ICdsYW5ndWFnZS14cXVlcnknXG4gICAgfSAvLyBUaGUgZm9sbG93aW5nIHdpbGwgaGFuZGxlIHBsYWluIHRleHQgaW5zaWRlIHRhZ3NcbiAgICB2YXIgc3RyaW5naWZ5VG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0b2tlbi5jb250ZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW4uY29udGVudC5tYXAoc3RyaW5naWZ5VG9rZW4pLmpvaW4oJycpXG4gICAgfVxuICAgIHZhciB3YWxrVG9rZW5zID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gICAgICB2YXIgb3BlbmVkVGFncyA9IFtdXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgICAgdmFyIG5vdFRhZ05vckJyYWNlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b2tlbi50eXBlID09PSAndGFnJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudFswXSAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gV2UgZm91bmQgYSB0YWcsIG5vdyBmaW5kIGl0cyBraW5kXG4gICAgICAgICAgICBpZiAodG9rZW4uY29udGVudFswXS5jb250ZW50WzBdLmNvbnRlbnQgPT09ICc8LycpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvc2luZyB0YWdcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS50YWdOYW1lID09PVxuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VG9rZW4odG9rZW4uY29udGVudFswXS5jb250ZW50WzFdKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBQb3AgbWF0Y2hpbmcgb3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgICBvcGVuZWRUYWdzLnBvcCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50W3Rva2VuLmNvbnRlbnQubGVuZ3RoIC0gMV0uY29udGVudCA9PT0gJy8+Jykge1xuICAgICAgICAgICAgICAgIC8vIEF1dG9jbG9zZWQgdGFnLCBpZ25vcmVcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuaW5nIHRhZ1xuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuICAgICAgICAgICAgICAgICAgb3BlbmVkQnJhY2VzOiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPT09ICd7JyAmJiAvLyBJZ25vcmUgYHt7YFxuICAgICAgICAgICAgKCF0b2tlbnNbaSArIDFdIHx8XG4gICAgICAgICAgICAgIHRva2Vuc1tpICsgMV0udHlwZSAhPT0gJ3B1bmN0dWF0aW9uJyB8fFxuICAgICAgICAgICAgICB0b2tlbnNbaSArIDFdLmNvbnRlbnQgIT09ICd7JykgJiZcbiAgICAgICAgICAgICghdG9rZW5zW2kgLSAxXSB8fFxuICAgICAgICAgICAgICB0b2tlbnNbaSAtIDFdLnR5cGUgIT09ICdwbGFpbi10ZXh0JyB8fFxuICAgICAgICAgICAgICB0b2tlbnNbaSAtIDFdLmNvbnRlbnQgIT09ICd7JylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgbWlnaHQgaGF2ZSBlbnRlcmVkIGFuIFhRdWVyeSBleHByZXNzaW9uIGluc2lkZSBhIHRhZ1xuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcysrXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA+IDAgJiZcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPT09ICd9J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYW4gWFF1ZXJ5IGV4cHJlc3Npb24gaW5zaWRlIGEgdGFnXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzLS1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgIT09ICdjb21tZW50Jykge1xuICAgICAgICAgICAgbm90VGFnTm9yQnJhY2UgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub3RUYWdOb3JCcmFjZSB8fCB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzID09PSAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIGFyZSBpbnNpZGUgYSB0YWcsIGFuZCBub3QgaW5zaWRlIGFuIFhRdWVyeSBleHByZXNzaW9uLlxuICAgICAgICAgICAgLy8gVGhhdCdzIHBsYWluIHRleHQ6IGRyb3AgYW55IHRva2VucyBtYXRjaGVkLlxuICAgICAgICAgICAgdmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKSAvLyBBbmQgbWVyZ2UgdGV4dCB3aXRoIGFkamFjZW50IHRleHRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA8IHRva2Vucy5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICh0eXBlb2YgdG9rZW5zW2kgKyAxXSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBwbGFpblRleHQgKz0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgKyAxXSlcbiAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA+IDAgJiZcbiAgICAgICAgICAgICAgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgIHRva2Vuc1tpIC0gMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2Vuc1tpIC0gMV0pICsgcGxhaW5UZXh0XG4gICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSAtIDEsIDEpXG4gICAgICAgICAgICAgIGktLVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9eXFxzKyQvLnRlc3QocGxhaW5UZXh0KSkge1xuICAgICAgICAgICAgICB0b2tlbnNbaV0gPSBwbGFpblRleHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRva2Vuc1tpXSA9IG5ldyBQcmlzbS5Ub2tlbihcbiAgICAgICAgICAgICAgICAncGxhaW4tdGV4dCcsXG4gICAgICAgICAgICAgICAgcGxhaW5UZXh0LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgcGxhaW5UZXh0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09ICd4cXVlcnknKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==