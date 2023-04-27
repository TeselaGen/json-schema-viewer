(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_velocity"],{

/***/ "./node_modules/refractor/lang/velocity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/velocity.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = velocity
velocity.displayName = 'velocity'
velocity.aliases = []
function velocity(Prism) {
  ;(function(Prism) {
    Prism.languages.velocity = Prism.languages.extend('markup', {})
    var velocity = {
      variable: {
        pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
        lookbehind: true,
        inside: {} // See below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      number: /\b\d+\b/,
      boolean: /\b(?:true|false)\b/,
      operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
      punctuation: /[(){}[\]:,.]/
    }
    velocity.variable.inside = {
      string: velocity['string'],
      function: {
        pattern: /([^\w-])[a-z][\w-]*(?=\()/,
        lookbehind: true
      },
      number: velocity['number'],
      boolean: velocity['boolean'],
      punctuation: velocity['punctuation']
    }
    Prism.languages.insertBefore('velocity', 'comment', {
      unparsed: {
        pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^#\[\[|]]#$/
        }
      },
      'velocity-comment': [
        {
          pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        },
        {
          pattern: /(^|[^\\])##.*/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        }
      ],
      directive: {
        pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
            inside: {
              punctuation: /[{}]/
            }
          },
          rest: velocity
        }
      },
      variable: velocity['variable']
    })
    Prism.languages.velocity['tag'].inside['attr-value'].inside.rest =
      Prism.languages.velocity
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdmVsb2NpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxnSEFBZ0gsR0FBRyxHQUFHO0FBQ3RIO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsWUFBWTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjAzNmQxZmNlNzBiZWFlMzY3OTg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmVsb2NpdHlcbnZlbG9jaXR5LmRpc3BsYXlOYW1lID0gJ3ZlbG9jaXR5J1xudmVsb2NpdHkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB2ZWxvY2l0eShQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge30pXG4gICAgdmFyIHZlbG9jaXR5ID0ge1xuICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0oPzpcXFxcXFxcXCkqKVxcJCE/KD86W2Etel1bXFx3LV0qKD86XFwoW14pXSpcXCkpPyg/OlxcLlthLXpdW1xcdy1dKig/OlxcKFteKV0qXFwpKT98XFxbW15cXF1dK10pKnx7W159XSt9KS9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHt9IC8vIFNlZSBiZWxvd1xuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCJbXlwiXSpcInwnW14nXSonLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiAvXFxiXFxkK1xcYi8sXG4gICAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgICAgb3BlcmF0b3I6IC9bPSE8Pl09P3xbKyovJS1dfCYmfFxcfFxcfHxcXC5cXC58XFxiKD86ZXF8Z1tldF18bFtldF18big/OmV8b3QpKVxcYi8sXG4gICAgICBwdW5jdHVhdGlvbjogL1soKXt9W1xcXTosLl0vXG4gICAgfVxuICAgIHZlbG9jaXR5LnZhcmlhYmxlLmluc2lkZSA9IHtcbiAgICAgIHN0cmluZzogdmVsb2NpdHlbJ3N0cmluZyddLFxuICAgICAgZnVuY3Rpb246IHtcbiAgICAgICAgcGF0dGVybjogLyhbXlxcdy1dKVthLXpdW1xcdy1dKig/PVxcKCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB2ZWxvY2l0eVsnbnVtYmVyJ10sXG4gICAgICBib29sZWFuOiB2ZWxvY2l0eVsnYm9vbGVhbiddLFxuICAgICAgcHVuY3R1YXRpb246IHZlbG9jaXR5WydwdW5jdHVhdGlvbiddXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3ZlbG9jaXR5JywgJ2NvbW1lbnQnLCB7XG4gICAgICB1bnBhcnNlZDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjXFxbXFxbW1xcc1xcU10qP11dIy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9eI1xcW1xcW3xdXSMkL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3ZlbG9jaXR5LWNvbW1lbnQnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjXFwqW1xcc1xcU10qP1xcKiMvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMjLiovLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSg/OlxcXFxcXFxcKSopI0A/KD86W2Etel1bXFx3LV0qfHtbYS16XVtcXHctXSp9KSg/OlxccypcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSk/L2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eI0A/KD86W2Etel1bXFx3LV0qfHtbYS16XVtcXHctXSp9KXxcXGJpblxcYi8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9be31dL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdDogdmVsb2NpdHlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiB2ZWxvY2l0eVsndmFyaWFibGUnXVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGUucmVzdCA9XG4gICAgICBQcmlzbS5sYW5ndWFnZXMudmVsb2NpdHlcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9