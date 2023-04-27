(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = xeora
xeora.displayName = 'xeora'
xeora.aliases = ['xeoracube']
function xeora(Prism) {
  ;(function(Prism) {
    Prism.languages.xeora = Prism.languages.extend('markup', {
      constant: {
        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
        inside: {
          punctuation: {
            pattern: /\$/
          }
        }
      },
      variable: {
        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[$.]/
          },
          operator: {
            pattern: /#+|[-+*~=^@]/
          }
        }
      },
      'function-inline': {
        pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
        inside: {
          variable: {
            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
            inside: {
              punctuation: {
                pattern: /[,.|]/
              },
              operator: {
                pattern: /#+|[-+*~=^@]/
              }
            }
          },
          punctuation: {
            pattern: /\$\w:|[$:?.,|]/
          }
        },
        alias: 'function'
      },
      'function-block': {
        pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
        inside: {
          punctuation: {
            pattern: /[$:{}?.,|]/
          }
        },
        alias: 'function'
      },
      'directive-inline': {
        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          }
        },
        alias: 'function'
      },
      'directive-block-open': {
        pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          },
          attribute: {
            pattern: /![A-Z]+$/,
            inside: {
              punctuation: {
                pattern: /!/
              }
            },
            alias: 'keyword'
          }
        },
        alias: 'function'
      },
      'directive-block-separator': {
        pattern: /}:[-\w.]+:{/,
        inside: {
          punctuation: {
            pattern: /[:{}]/
          }
        },
        alias: 'function'
      },
      'directive-block-close': {
        pattern: /}:[-\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[:{}$]/
          }
        },
        alias: 'function'
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        variable: Prism.languages.xeora['function-inline'].inside['variable']
      },
      Prism.languages.xeora['function-block']
    )
    Prism.languages.xeoracube = Prism.languages.xeora
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcveGVvcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0Esd0JBQXdCLGtHQUFrRztBQUMxSDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjUwZmMyMTgzMGY5MzIwZDlhNDg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0geGVvcmFcbnhlb3JhLmRpc3BsYXlOYW1lID0gJ3hlb3JhJ1xueGVvcmEuYWxpYXNlcyA9IFsneGVvcmFjdWJlJ11cbmZ1bmN0aW9uIHhlb3JhKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMueGVvcmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG4gICAgICBjb25zdGFudDoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkKD86RG9tYWluQ29udGVudHN8UGFnZVJlbmRlckR1cmF0aW9uKVxcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRAPyg/OiMrfFstKyp+PV5dKT9bXFx3Ll0rXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9bJC5dL1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8jK3xbLSsqfj1eQF0vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ2Z1bmN0aW9uLWlubGluZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJEY6Wy1cXHcuXStcXD9bLVxcdy5dKyg/OiwoPzpcXHw/KD86Wy0jLl4rKn5dKig/OltcXHcrXVteJF0qKXw9KD86W1xcUytdW14kXSopfEBbLSNdKig/OlxcdysuKVtcXHcrLl0rKT8pKik/XFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oPzpbLHxdKUA/KD86Iyt8Wy0rKn49Xl0pP1tcXHcuXSsvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL1ssLnxdL1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8jK3xbLSsqfj1eQF0vXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkXFx3OnxbJDo/Lix8XS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9LFxuICAgICAgJ2Z1bmN0aW9uLWJsb2NrJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkWEY6e1stXFx3Ll0rXFw/Wy1cXHcuXSsoPzosKD86XFx8Pyg/OlstIy5eKyp+XSooPzpbXFx3K11bXiRdKil8PSg/OltcXFMrXVteJF0qKXxAWy0jXSooPzpcXHcrLilbXFx3Ky5dKyk/KSopP306WEZcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1skOnt9Py4sfF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtaW5saW5lJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkXFx3KD86I1xcZCtcXCs/KT8oPzpcXFtbLVxcdy5dK10pPzpbLVxcL1xcdy5dK1xcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkKD86XFx3OnxDKD86XFxbfCNcXGQpKT98Wzp7W1xcXV0vLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8jXFxkL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtYmxvY2stb3Blbic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJFxcdys6e3xcXCRcXHcoPzojXFxkK1xcKz8pPyg/OlxcW1stXFx3Ll0rXSk/OlstXFx3Ll0rOnsoIVtBLVpdKyk/LyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cXCQoPzpcXHc6fEMoPzpcXFt8I1xcZCkpP3xbOntbXFxdXS8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyNcXGQvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJpYnV0ZToge1xuICAgICAgICAgICAgcGF0dGVybjogLyFbQS1aXSskLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8hL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLXNlcGFyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL306Wy1cXHcuXSs6ey8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvWzp7fV0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtYmxvY2stY2xvc2UnOiB7XG4gICAgICAgIHBhdHRlcm46IC99OlstXFx3Ll0rXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9bOnt9JF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ3B1bmN0dWF0aW9uJyxcbiAgICAgIHtcbiAgICAgICAgdmFyaWFibGU6IFByaXNtLmxhbmd1YWdlcy54ZW9yYVsnZnVuY3Rpb24taW5saW5lJ10uaW5zaWRlWyd2YXJpYWJsZSddXG4gICAgICB9LFxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLnhlb3JhWydmdW5jdGlvbi1ibG9jayddXG4gICAgKVxuICAgIFByaXNtLmxhbmd1YWdlcy54ZW9yYWN1YmUgPSBQcmlzbS5sYW5ndWFnZXMueGVvcmFcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9