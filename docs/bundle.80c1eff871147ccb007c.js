(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_puppet"],{

/***/ "./node_modules/refractor/lang/puppet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/puppet.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = puppet
puppet.displayName = 'puppet'
puppet.aliases = []
function puppet(Prism) {
  ;(function(Prism) {
    Prism.languages.puppet = {
      heredoc: [
        // Matches the content of a quoted heredoc string (subject to interpolation)
        {
          pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
          lookbehind: true,
          alias: 'string',
          inside: {
            // Matches the end tag
            punctuation: /(?=\S).*\S(?= *$)/ // See interpolation below
          }
        }, // Matches the content of an unquoted heredoc string (no interpolation)
        {
          pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
          lookbehind: true,
          greedy: true,
          alias: 'string',
          inside: {
            // Matches the end tag
            punctuation: /(?=\S).*\S(?= *$)/
          }
        }, // Matches the start tag of heredoc strings
        {
          pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
          alias: 'string',
          inside: {
            punctuation: {
              pattern: /(\().+?(?=\))/,
              lookbehind: true
            }
          }
        }
      ],
      'multiline-comment': {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true,
        greedy: true,
        alias: 'comment'
      },
      regex: {
        // Must be prefixed with the keyword "node" or a non-word char
        pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
        lookbehind: true,
        greedy: true,
        inside: {
          // Extended regexes must have the x flag. They can contain single-line comments.
          'extended-regex': {
            pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
            inside: {
              comment: /#.*/
            }
          }
        }
      },
      comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
      },
      string: {
        // Allow for one nested level of double quotes inside interpolation
        pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true,
        inside: {
          'double-quoted': {
            pattern: /^"[\s\S]*"$/,
            inside: {
              // See interpolation below
            }
          }
        }
      },
      variable: {
        pattern: /\$(?:::)?\w+(?:::\w+)*/,
        inside: {
          punctuation: /::/
        }
      },
      'attr-name': /(?:\w+|\*)(?=\s*=>)/,
      function: [
        {
          pattern: /(\.)(?!\d)\w+/,
          lookbehind: true
        },
        /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
      ],
      number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
      boolean: /\b(?:true|false)\b/,
      // Includes words reserved for future use
      keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
      datatype: {
        pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
        alias: 'symbol'
      },
      operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
      punctuation: /[\[\]{}().,;]|:+/
    }
    var interpolation = [
      {
        // Allow for one nested level of braces inside interpolation
        pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
        lookbehind: true,
        inside: {
          'short-variable': {
            // Negative look-ahead prevent wrong highlighting of functions
            pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
            lookbehind: true,
            alias: 'variable',
            inside: {
              punctuation: /::/
            }
          },
          delimiter: {
            pattern: /^\$/,
            alias: 'variable'
          },
          rest: Prism.languages.puppet
        }
      },
      {
        pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
        lookbehind: true,
        alias: 'variable',
        inside: {
          punctuation: /::/
        }
      }
    ]
    Prism.languages.puppet['heredoc'][0].inside.interpolation = interpolation
    Prism.languages.puppet['string'].inside[
      'double-quoted'
    ].inside.interpolation = interpolation
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHVwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsK0JBQStCLFFBQVEsdUNBQXVDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUyxJQUFJLEdBQUcsSUFBSSxzQ0FBc0M7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuODBjMWVmZjg3MTE0N2NjYjAwN2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwdXBwZXRcbnB1cHBldC5kaXNwbGF5TmFtZSA9ICdwdXBwZXQnXG5wdXBwZXQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwdXBwZXQoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy5wdXBwZXQgPSB7XG4gICAgICBoZXJlZG9jOiBbXG4gICAgICAgIC8vIE1hdGNoZXMgdGhlIGNvbnRlbnQgb2YgYSBxdW90ZWQgaGVyZWRvYyBzdHJpbmcgKHN1YmplY3QgdG8gaW50ZXJwb2xhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oQFxcKFwiKFteXCJcXHJcXG5cXC8pOl0rKVwiKD86XFwvW25ydHMkdUxdKik/XFwpLiooPzpcXHI/XFxufFxccikpKD86LiooPzpcXHI/XFxufFxccikpKj9bIFxcdF0qXFx8P1sgXFx0XSotP1sgXFx0XSpcXDIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgLy8gTWF0Y2hlcyB0aGUgZW5kIHRhZ1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC8oPz1cXFMpLipcXFMoPz0gKiQpLyAvLyBTZWUgaW50ZXJwb2xhdGlvbiBiZWxvd1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gTWF0Y2hlcyB0aGUgY29udGVudCBvZiBhbiB1bnF1b3RlZCBoZXJlZG9jIHN0cmluZyAobm8gaW50ZXJwb2xhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oQFxcKChbXlwiXFxyXFxuXFwvKTpdKykoPzpcXC9bbnJ0cyR1TF0qKT9cXCkuKig/Olxccj9cXG58XFxyKSkoPzouKig/Olxccj9cXG58XFxyKSkqP1sgXFx0XSpcXHw/WyBcXHRdKi0/WyBcXHRdKlxcMi8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgLy8gTWF0Y2hlcyB0aGUgZW5kIHRhZ1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC8oPz1cXFMpLipcXFMoPz0gKiQpL1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gTWF0Y2hlcyB0aGUgc3RhcnQgdGFnIG9mIGhlcmVkb2Mgc3RyaW5nc1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogL0BcXChcIj8oPzpbXlwiXFxyXFxuXFwvKTpdKylcIj8oPzpcXC9bbnJ0cyR1TF0qKT9cXCkvLFxuICAgICAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC8oXFwoKS4rPyg/PVxcKSkvLFxuICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgJ211bHRpbGluZS1jb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICB9LFxuICAgICAgcmVnZXg6IHtcbiAgICAgICAgLy8gTXVzdCBiZSBwcmVmaXhlZCB3aXRoIHRoZSBrZXl3b3JkIFwibm9kZVwiIG9yIGEgbm9uLXdvcmQgY2hhclxuICAgICAgICBwYXR0ZXJuOiAvKCg/OlxcYm5vZGVcXHMrfFt+PVxcKFxcW1xceyxdXFxzKnxbPStdPlxccyp8XlxccyopKVxcLyg/OlteXFwvXFxcXF18XFxcXFtcXHNcXFNdKStcXC8oPzpbaW14XStcXGJ8XFxCKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgLy8gRXh0ZW5kZWQgcmVnZXhlcyBtdXN0IGhhdmUgdGhlIHggZmxhZy4gVGhleSBjYW4gY29udGFpbiBzaW5nbGUtbGluZSBjb21tZW50cy5cbiAgICAgICAgICAnZXh0ZW5kZWQtcmVnZXgnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcLyg/OlteXFwvXFxcXF18XFxcXFtcXHNcXFNdKStcXC9baW1dKnhbaW1dKiQvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIGNvbW1lbnQ6IC8jLiovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIG9uZSBuZXN0ZWQgbGV2ZWwgb2YgZG91YmxlIHF1b3RlcyBpbnNpZGUgaW50ZXJwb2xhdGlvblxuICAgICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcJFxceyg/OlteJ1wifV18KFtcIiddKSg/Oig/IVxcMilbXlxcXFxdfFxcXFxbXFxzXFxTXSkqXFwyKStcXH18KD8hXFwxKVteXFxcXF18XFxcXFtcXHNcXFNdKSpcXDEvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdkb3VibGUtcXVvdGVkJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cIltcXHNcXFNdKlwiJC8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgLy8gU2VlIGludGVycG9sYXRpb24gYmVsb3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZToge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkKD86OjopP1xcdysoPzo6OlxcdyspKi8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvOjovXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnYXR0ci1uYW1lJzogLyg/Olxcdyt8XFwqKSg/PVxccyo9PikvLFxuICAgICAgZnVuY3Rpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFwuKSg/IVxcZClcXHcrLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC9cXGIoPzpjb250YWlufGRlYnVnfGVycnxmYWlsfGluY2x1ZGV8aW5mb3xub3RpY2V8cmVhbGl6ZXxyZXF1aXJlfHRhZ3x3YXJuaW5nKVxcYnxcXGIoPyFcXGQpXFx3Kyg/PVxcKCkvXG4gICAgICBdLFxuICAgICAgbnVtYmVyOiAvXFxiKD86MHhbYS1mXFxkXSt8XFxkKyg/OlxcLlxcZCspPyg/OmUtP1xcZCspPylcXGIvaSxcbiAgICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgICAvLyBJbmNsdWRlcyB3b3JkcyByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZVxuICAgICAga2V5d29yZDogL1xcYig/OmFwcGxpY2F0aW9ufGF0dHJ8Y2FzZXxjbGFzc3xjb25zdW1lc3xkZWZhdWx0fGRlZmluZXxlbHNlfGVsc2lmfGZ1bmN0aW9ufGlmfGltcG9ydHxpbmhlcml0c3xub2RlfHByaXZhdGV8cHJvZHVjZXN8dHlwZXx1bmRlZnx1bmxlc3MpXFxiLyxcbiAgICAgIGRhdGF0eXBlOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXGIoPzpBbnl8QXJyYXl8Qm9vbGVhbnxDYWxsYWJsZXxDYXRhbG9nZW50cnl8Q2xhc3N8Q29sbGVjdGlvbnxEYXRhfERlZmF1bHR8RW51bXxGbG9hdHxIYXNofEludGVnZXJ8Tm90VW5kZWZ8TnVtZXJpY3xPcHRpb25hbHxQYXR0ZXJufFJlZ2V4cHxSZXNvdXJjZXxSdW50aW1lfFNjYWxhcnxTdHJpbmd8U3RydWN0fFR1cGxlfFR5cGV8VW5kZWZ8VmFyaWFudClcXGIvLFxuICAgICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICAgIH0sXG4gICAgICBvcGVyYXRvcjogLz1bPX4+XT98IVs9fl0/fDwoPzo8XFx8P3xbPX58LV0pP3w+Wz49XT98LT4/fH4+fFxcfD4/Pj98WypcXC8lKz9dfFxcYig/OmFuZHxpbnxvcilcXGIvLFxuICAgICAgcHVuY3R1YXRpb246IC9bXFxbXFxde30oKS4sO118OisvXG4gICAgfVxuICAgIHZhciBpbnRlcnBvbGF0aW9uID0gW1xuICAgICAge1xuICAgICAgICAvLyBBbGxvdyBmb3Igb25lIG5lc3RlZCBsZXZlbCBvZiBicmFjZXMgaW5zaWRlIGludGVycG9sYXRpb25cbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwkXFx7KD86W14nXCJ7fV18XFx7W159XSpcXH18KFtcIiddKSg/Oig/IVxcMilbXlxcXFxdfFxcXFxbXFxzXFxTXSkqXFwyKStcXH0vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnc2hvcnQtdmFyaWFibGUnOiB7XG4gICAgICAgICAgICAvLyBOZWdhdGl2ZSBsb29rLWFoZWFkIHByZXZlbnQgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIGZ1bmN0aW9uc1xuICAgICAgICAgICAgcGF0dGVybjogLyheXFwkXFx7KSg/IVxcdytcXCgpKD86OjopP1xcdysoPzo6OlxcdyspKi8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC86Oi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cXCQvLFxuICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5wdXBwZXRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwkKD86OjopP1xcdysoPzo6OlxcdyspKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogLzo6L1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICAgIFByaXNtLmxhbmd1YWdlcy5wdXBwZXRbJ2hlcmVkb2MnXVswXS5pbnNpZGUuaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25cbiAgICBQcmlzbS5sYW5ndWFnZXMucHVwcGV0WydzdHJpbmcnXS5pbnNpZGVbXG4gICAgICAnZG91YmxlLXF1b3RlZCdcbiAgICBdLmluc2lkZS5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvblxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=