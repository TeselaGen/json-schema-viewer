(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_cssExtras"],{

/***/ "./node_modules/refractor/lang/css-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/css-extras.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = cssExtras
cssExtras.displayName = 'cssExtras'
cssExtras.aliases = []
function cssExtras(Prism) {
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      class: /\.[-:.\w]+/,
      id: /#[-:.\w]+/,
      attribute: {
        pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
        greedy: true,
        inside: {
          punctuation: /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          namespace: {
            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
            lookbehind: true,
            inside: {
              punctuation: /\|$/
            }
          },
          attribute: {
            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
            lookbehind: true
          },
          value: [
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            {
              pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
              lookbehind: true
            }
          ],
          operator: /[|~*^$]?=/
        }
      },
      'n-th': [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }
      ],
      punctuation: /[()]/
    }
  }
  Prism.languages.insertBefore('css', 'property', {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
      lookbehind: true
    }
  })
  Prism.languages.insertBefore('css', 'function', {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    hexcode: /#[\da-f]{3,8}/i,
    entity: /\\[\da-f]{1,8}/i,
    unit: {
      pattern: /(\d)(?:%|[a-z]+)/,
      lookbehind: true
    },
    number: /-?[\d.]+/
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NzLWV4dHJhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLElBQUk7QUFDM0IsdUJBQXVCLElBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS40N2UyM2JhMTIxNjdlZjAxMGY1Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc0V4dHJhc1xuY3NzRXh0cmFzLmRpc3BsYXlOYW1lID0gJ2Nzc0V4dHJhcydcbmNzc0V4dHJhcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGNzc0V4dHJhcyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzLnNlbGVjdG9yID0ge1xuICAgIHBhdHRlcm46IFByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IsXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHNldWRvLWVsZW1lbnQnOiAvOig/OmFmdGVyfGJlZm9yZXxmaXJzdC1sZXR0ZXJ8Zmlyc3QtbGluZXxzZWxlY3Rpb24pfDo6Wy1cXHddKy8sXG4gICAgICAncHNldWRvLWNsYXNzJzogLzpbLVxcd10rLyxcbiAgICAgIGNsYXNzOiAvXFwuWy06Llxcd10rLyxcbiAgICAgIGlkOiAvI1stOi5cXHddKy8sXG4gICAgICBhdHRyaWJ1dGU6IHtcbiAgICAgICAgcGF0dGVybjogL1xcWyg/OlteW1xcXVwiJ118KFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMSkqXFxdLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL15cXFt8XFxdJC8sXG4gICAgICAgICAgJ2Nhc2Utc2Vuc2l0aXZpdHknOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKFxccylbc2ldJC9pLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWVzcGFjZToge1xuICAgICAgICAgICAgcGF0dGVybjogL14oXFxzKilbLSpcXHdcXHhBMC1cXHVGRkZGXSpcXHwoPyE9KS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8JC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJpYnV0ZToge1xuICAgICAgICAgICAgcGF0dGVybjogL14oXFxzKilbLVxcd1xceEEwLVxcdUZGRkZdKy8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvKD1cXHMqKVstXFx3XFx4QTAtXFx1RkZGRl0rKD89XFxzKiQpLyxcbiAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BlcmF0b3I6IC9bfH4qXiRdPz0vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnbi10aCc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFwoXFxzKilbKy1dP1xcZCpbXFxkbl0oPzpcXHMqWystXVxccypcXGQrKT8oPz1cXHMqXFwpKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIG51bWJlcjogL1tcXGRuXSsvLFxuICAgICAgICAgICAgb3BlcmF0b3I6IC9bKy1dL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFwoXFxzKikoPzpldmVufG9kZCkoPz1cXHMqXFwpKS9pLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS9cbiAgICB9XG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NzJywgJ3Byb3BlcnR5Jywge1xuICAgIHZhcmlhYmxlOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pLS1bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc3MnLCAnZnVuY3Rpb24nLCB7XG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxzKVsrXFwtKlxcL10oPz1cXHMpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGhleGNvZGU6IC8jW1xcZGEtZl17Myw4fS9pLFxuICAgIGVudGl0eTogL1xcXFxbXFxkYS1mXXsxLDh9L2ksXG4gICAgdW5pdDoge1xuICAgICAgcGF0dGVybjogLyhcXGQpKD86JXxbYS16XSspLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogLy0/W1xcZC5dKy9cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=