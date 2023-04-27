(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_coffeescript"],{

/***/ "./node_modules/refractor/lang/coffeescript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/coffeescript.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = coffeescript
coffeescript.displayName = 'coffeescript'
coffeescript.aliases = ['coffee']
function coffeescript(Prism) {
  ;(function(Prism) {
    // Ignore comments starting with { to privilege string interpolation highlighting
    var comment = /#(?!\{).+/,
      interpolation = {
        pattern: /#\{[^}]+\}/,
        alias: 'variable'
      }
    Prism.languages.coffeescript = Prism.languages.extend('javascript', {
      comment: comment,
      string: [
        // Strings are multiline
        {
          pattern: /'(?:\\[\s\S]|[^\\'])*'/,
          greedy: true
        },
        {
          // Strings are multiline
          pattern: /"(?:\\[\s\S]|[^\\"])*"/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        }
      ],
      keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      'class-member': {
        pattern: /@(?!\d)\w+/,
        alias: 'variable'
      }
    })
    Prism.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': {
        pattern: /###[\s\S]+?###/,
        alias: 'comment'
      },
      // Block regexp can contain comments and interpolation
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: {
          comment: comment,
          interpolation: interpolation
        }
      }
    })
    Prism.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: {
            pattern: /^`|`$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      // Block strings
      'multiline-string': [
        {
          pattern: /'''[\s\S]*?'''/,
          greedy: true,
          alias: 'string'
        },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: true,
          alias: 'string',
          inside: {
            interpolation: interpolation
          }
        }
      ]
    })
    Prism.languages.insertBefore('coffeescript', 'keyword', {
      // Object property
      property: /(?!\d)\w+(?=\s*:(?!:))/
    })
    delete Prism.languages.coffeescript['template-string']
    Prism.languages.coffee = Prism.languages.coffeescript
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY29mZmVlc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUIsR0FBRyxJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSxXQUFXLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuNWIyNmFkNDI0ZDc4MWQ0OWRmMmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb2ZmZWVzY3JpcHRcbmNvZmZlZXNjcmlwdC5kaXNwbGF5TmFtZSA9ICdjb2ZmZWVzY3JpcHQnXG5jb2ZmZWVzY3JpcHQuYWxpYXNlcyA9IFsnY29mZmVlJ11cbmZ1bmN0aW9uIGNvZmZlZXNjcmlwdChQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgLy8gSWdub3JlIGNvbW1lbnRzIHN0YXJ0aW5nIHdpdGggeyB0byBwcml2aWxlZ2Ugc3RyaW5nIGludGVycG9sYXRpb24gaGlnaGxpZ2h0aW5nXG4gICAgdmFyIGNvbW1lbnQgPSAvIyg/IVxceykuKy8sXG4gICAgICBpbnRlcnBvbGF0aW9uID0ge1xuICAgICAgICBwYXR0ZXJuOiAvI1xce1tefV0rXFx9LyxcbiAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuY29mZmVlc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHtcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgICBzdHJpbmc6IFtcbiAgICAgICAgLy8gU3RyaW5ncyBhcmUgbXVsdGlsaW5lXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvJyg/OlxcXFxbXFxzXFxTXXxbXlxcXFwnXSkqJy8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBTdHJpbmdzIGFyZSBtdWx0aWxpbmVcbiAgICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGtleXdvcmQ6IC9cXGIoPzphbmR8YnJlYWt8Ynl8Y2F0Y2h8Y2xhc3N8Y29udGludWV8ZGVidWdnZXJ8ZGVsZXRlfGRvfGVhY2h8ZWxzZXxleHRlbmR8ZXh0ZW5kc3xmYWxzZXxmaW5hbGx5fGZvcnxpZnxpbnxpbnN0YW5jZW9mfGlzfGlzbnR8bGV0fGxvb3B8bmFtZXNwYWNlfG5ld3xub3xub3R8bnVsbHxvZnxvZmZ8b258b3J8b3dufHJldHVybnxzdXBlcnxzd2l0Y2h8dGhlbnx0aGlzfHRocm93fHRydWV8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dW5sZXNzfHVudGlsfHdoZW58d2hpbGV8d2luZG93fHdpdGh8eWVzfHlpZWxkKVxcYi8sXG4gICAgICAnY2xhc3MtbWVtYmVyJzoge1xuICAgICAgICBwYXR0ZXJuOiAvQCg/IVxcZClcXHcrLyxcbiAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdjb21tZW50Jywge1xuICAgICAgJ211bHRpbGluZS1jb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvIyMjW1xcc1xcU10rPyMjIy8sXG4gICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgIH0sXG4gICAgICAvLyBCbG9jayByZWdleHAgY2FuIGNvbnRhaW4gY29tbWVudHMgYW5kIGludGVycG9sYXRpb25cbiAgICAgICdibG9jay1yZWdleCc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcL3szfVtcXHNcXFNdKj9cXC97M30vLFxuICAgICAgICBhbGlhczogJ3JlZ2V4JyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdzdHJpbmcnLCB7XG4gICAgICAnaW5saW5lLWphdmFzY3JpcHQnOiB7XG4gICAgICAgIHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFteXFxcXGBdKSpgLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBCbG9jayBzdHJpbmdzXG4gICAgICAnbXVsdGlsaW5lLXN0cmluZyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8nJydbXFxzXFxTXSo/JycnLyxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXCJcIlwiW1xcc1xcU10qP1wiXCJcIi8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIGludGVycG9sYXRpb246IGludGVycG9sYXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdrZXl3b3JkJywge1xuICAgICAgLy8gT2JqZWN0IHByb3BlcnR5XG4gICAgICBwcm9wZXJ0eTogLyg/IVxcZClcXHcrKD89XFxzKjooPyE6KSkvXG4gICAgfSlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNvZmZlZXNjcmlwdFsndGVtcGxhdGUtc3RyaW5nJ11cbiAgICBQcmlzbS5sYW5ndWFnZXMuY29mZmVlID0gUHJpc20ubGFuZ3VhZ2VzLmNvZmZlZXNjcmlwdFxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=