(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_livescript"],{

/***/ "./node_modules/refractor/lang/livescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/livescript.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = livescript
livescript.displayName = 'livescript'
livescript.aliases = []
function livescript(Prism) {
  Prism.languages.livescript = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true
      }
    ],
    'interpolated-string': {
      /* Look-behind and look-ahead prevents wrong behavior of the greedy pattern
       * forcing it to match """-quoted string when it would otherwise match "-quoted first. */
      pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
      lookbehind: true,
      greedy: true,
      inside: {
        variable: {
          pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
          lookbehind: true
        },
        interpolation: {
          pattern: /(^|[^\\])#\{[^}]+\}/m,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^#\{|\}$/,
              alias: 'variable'
            } // See rest below
          }
        },
        string: /[\s\S]+/
      }
    },
    string: [
      {
        pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      {
        pattern: /<\[[\s\S]*?\]>/,
        greedy: true
      },
      /\\[^\s,;\])}]+/
    ],
    regex: [
      {
        pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
        greedy: true,
        inside: {
          comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true
          }
        }
      },
      {
        pattern: /\/(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}/,
        greedy: true
      }
    ],
    keyword: {
      pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
      lookbehind: true
    },
    'keyword-operator': {
      pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
      lookbehind: true,
      alias: 'operator'
    },
    boolean: {
      pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
      lookbehind: true
    },
    argument: {
      // Don't match .&. nor &&
      pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
      lookbehind: true,
      alias: 'variable'
    },
    number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
    identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
    operator: [
      // Spaced .
      {
        pattern: /( )\.(?= )/,
        lookbehind: true
      }, // Full list, in order:
      // .= .~ .. ...
      // .&. .^. .<<. .>>. .>>>.
      // := :: ::=
      // &&
      // || |>
      // < << <<< <<<<
      // <- <-- <-! <--!
      // <~ <~~ <~! <~~!
      // <| <= <?
      // > >> >= >?
      // - -- -> -->
      // + ++
      // @ @@
      // % %%
      // * **
      // ! != !~=
      // !~> !~~>
      // !-> !-->
      // ~ ~> ~~> ~=
      // = ==
      // ^ ^^
      // / ?
      /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
    ],
    punctuation: /[(){}\[\]|.,:;`]/
  }
  Prism.languages.livescript['interpolated-string'].inside[
    'interpolation'
  ].inside.rest = Prism.languages.livescript
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbGl2ZXNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ0NBQWdDLEdBQUcsSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsR0FBRztBQUMvQjtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxlQUFlLElBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzREFBc0QsSUFBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuOWQ3M2RjNzU4YjRhMjU3YjgyYzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXZlc2NyaXB0XG5saXZlc2NyaXB0LmRpc3BsYXlOYW1lID0gJ2xpdmVzY3JpcHQnXG5saXZlc2NyaXB0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbGl2ZXNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubGl2ZXNjcmlwdCA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICAnaW50ZXJwb2xhdGVkLXN0cmluZyc6IHtcbiAgICAgIC8qIExvb2stYmVoaW5kIGFuZCBsb29rLWFoZWFkIHByZXZlbnRzIHdyb25nIGJlaGF2aW9yIG9mIHRoZSBncmVlZHkgcGF0dGVyblxuICAgICAgICogZm9yY2luZyBpdCB0byBtYXRjaCBcIlwiXCItcXVvdGVkIHN0cmluZyB3aGVuIGl0IHdvdWxkIG90aGVyd2lzZSBtYXRjaCBcIi1xdW90ZWQgZmlyc3QuICovXG4gICAgICBwYXR0ZXJuOiAvKF58W15cIl0pKFwiXCJcInxcIikoPzpcXFxcW1xcc1xcU118KD8hXFwyKVteXFxcXF0pKlxcMig/IVwiKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pI1thLXpfXSg/Oi0/W2Etel18W1xcZF9dKSovbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjXFx7W159XStcXH0vbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eI1xce3xcXH0kLyxcbiAgICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgICAgIH0gLy8gU2VlIHJlc3QgYmVsb3dcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0cmluZzogL1tcXHNcXFNdKy9cbiAgICAgIH1cbiAgICB9LFxuICAgIHN0cmluZzogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKCcnJ3wnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvPFxcW1tcXHNcXFNdKj9cXF0+LyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgL1xcXFxbXlxccyw7XFxdKX1dKy9cbiAgICBdLFxuICAgIHJlZ2V4OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cXC9cXC8oXFxbLis/XXxcXFxcLnwoPyFcXC9cXC8pW15cXFxcXSkrXFwvXFwvW2dpbXl1XXswLDV9LyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBjb21tZW50OiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1xcLyhcXFsuKz9dfFxcXFwufFteL1xcXFxcXHJcXG5dKStcXC9bZ2lteXVdezAsNX0vLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGtleXdvcmQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnwoPyEtKS4pXFxiKD86YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGVsc2V8ZXh0ZW5kc3xmYWxsdGhyb3VnaHxmaW5hbGx5fGZvcig/OiBldmVyKT98ZnVuY3Rpb258aWZ8aW1wbGVtZW50c3xpdHxsZXR8bG9vcHxuZXd8bnVsbHxvdGhlcndpc2V8b3dufHJldHVybnxzdXBlcnxzd2l0Y2h8dGhhdHx0aGVufHRoaXN8dGhyb3d8dHJ5fHVubGVzc3x1bnRpbHx2YXJ8dm9pZHx3aGVufHdoaWxlfHlpZWxkKSg/IS0pXFxiL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAna2V5d29yZC1vcGVyYXRvcic6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi1dKVxcYig/Oig/OmRlbGV0ZXxyZXF1aXJlfHR5cGVvZikhfCg/OmFuZHxieXxkZWxldGV8ZXhwb3J0fGZyb218aW1wb3J0KD86IGFsbCk/fGlufGluc3RhbmNlb2Z8aXMoPzpudHwgbm90KT98bm90fG9mfG9yfHRpbHx0b3x0eXBlb2Z8d2l0aHx4b3IpKD8hLSlcXGIpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9LFxuICAgIGJvb2xlYW46IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi1dKVxcYig/OmZhbHNlfG5vfG9mZnxvbnx0cnVlfHllcykoPyEtKVxcYi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgYXJndW1lbnQ6IHtcbiAgICAgIC8vIERvbid0IG1hdGNoIC4mLiBub3IgJiZcbiAgICAgIHBhdHRlcm46IC8oXnwoPyFcXC4mXFwuKVteJl0pJig/ISYpXFxkKi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBudW1iZXI6IC9cXGIoPzpcXGQrfltcXGRhLXpdK3xcXGRbXFxkX10qKD86XFwuXFxkW1xcZF9dKik/KD86W2Etel1cXHcqKT8pL2ksXG4gICAgaWRlbnRpZmllcjogL1thLXpfXSg/Oi0/W2Etel18W1xcZF9dKSovaSxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgLy8gU3BhY2VkIC5cbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyggKVxcLig/PSApLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSwgLy8gRnVsbCBsaXN0LCBpbiBvcmRlcjpcbiAgICAgIC8vIC49IC5+IC4uIC4uLlxuICAgICAgLy8gLiYuIC5eLiAuPDwuIC4+Pi4gLj4+Pi5cbiAgICAgIC8vIDo9IDo6IDo6PVxuICAgICAgLy8gJiZcbiAgICAgIC8vIHx8IHw+XG4gICAgICAvLyA8IDw8IDw8PCA8PDw8XG4gICAgICAvLyA8LSA8LS0gPC0hIDwtLSFcbiAgICAgIC8vIDx+IDx+fiA8fiEgPH5+IVxuICAgICAgLy8gPHwgPD0gPD9cbiAgICAgIC8vID4gPj4gPj0gPj9cbiAgICAgIC8vIC0gLS0gLT4gLS0+XG4gICAgICAvLyArICsrXG4gICAgICAvLyBAIEBAXG4gICAgICAvLyAlICUlXG4gICAgICAvLyAqICoqXG4gICAgICAvLyAhICE9ICF+PVxuICAgICAgLy8gIX4+ICF+fj5cbiAgICAgIC8vICEtPiAhLS0+XG4gICAgICAvLyB+IH4+IH5+PiB+PVxuICAgICAgLy8gPSA9PVxuICAgICAgLy8gXiBeXlxuICAgICAgLy8gLyA/XG4gICAgICAvXFwuKD86Wz1+XXxcXC5cXC4/KXxcXC4oPzpbJnxeXXw8PHw+Pj4/KVxcLnw6KD86PXw6PT8pfCYmfFxcfFt8Pl18PCg/Ojw8Pzw/fC0tPyE/fH5+PyE/fFt8PT9dKT98Pls+PT9dP3wtKD86LT4/fD4pP3xcXCtcXCs/fEBAP3wlJT98XFwqXFwqP3whKD86fj89fC0tPz58fj9+Pik/fH4oPzp+Pz58PSk/fD09P3xcXF5cXF4/fFtcXC8/XS9cbiAgICBdLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpe31cXFtcXF18Liw6O2BdL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5saXZlc2NyaXB0WydpbnRlcnBvbGF0ZWQtc3RyaW5nJ10uaW5zaWRlW1xuICAgICdpbnRlcnBvbGF0aW9uJ1xuICBdLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmxpdmVzY3JpcHRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=