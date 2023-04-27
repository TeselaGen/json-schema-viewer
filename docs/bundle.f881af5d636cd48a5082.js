(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_sass"],{

/***/ "./node_modules/refractor/lang/sass.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/sass.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = sass
sass.displayName = 'sass'
sass.aliases = []
function sass(Prism) {
  ;(function(Prism) {
    Prism.languages.sass = Prism.languages.extend('css', {
      // Sass comments don't need to be closed, only indented
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('sass', 'atrule', {
      // We want to consume the whole line
      'atrule-line': {
        // Includes support for = and + shortcuts
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/m
        }
      }
    })
    delete Prism.languages.sass.atrule
    var variable = /\$[-\w]+|#\{\$[-\w]+\}/
    var operator = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: true
      }
    ]
    Prism.languages.insertBefore('sass', 'property', {
      // We want to consume the whole line
      'variable-line': {
        pattern: /^[ \t]*\$.+/m,
        inside: {
          punctuation: /:/,
          variable: variable,
          operator: operator
        }
      },
      // We want to consume the whole line
      'property-line': {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            {
              pattern: /(:)[^:\s]+/,
              lookbehind: true
            }
          ],
          punctuation: /:/,
          variable: variable,
          operator: operator,
          important: Prism.languages.sass.important
        }
      }
    })
    delete Prism.languages.sass.property
    delete Prism.languages.sass.important // Now that whole lines for other patterns are consumed,
    // what's left should be selectors
    Prism.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2Fzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuZjg4MWFmNWQ2MzZjZDQ4YTUwODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzYXNzXG5zYXNzLmRpc3BsYXlOYW1lID0gJ3Nhc3MnXG5zYXNzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc2FzcyhQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnNhc3MgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG4gICAgICAvLyBTYXNzIGNvbW1lbnRzIGRvbid0IG5lZWQgdG8gYmUgY2xvc2VkLCBvbmx5IGluZGVudGVkXG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC9eKFsgXFx0XSopXFwvW1xcLypdLiooPzooPzpcXHI/XFxufFxccilcXDFbIFxcdF0rLispKi9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzYXNzJywgJ2F0cnVsZScsIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICAgJ2F0cnVsZS1saW5lJzoge1xuICAgICAgICAvLyBJbmNsdWRlcyBzdXBwb3J0IGZvciA9IGFuZCArIHNob3J0Y3V0c1xuICAgICAgICBwYXR0ZXJuOiAvXig/OlsgXFx0XSopW0ArPV0uKy9tLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBhdHJ1bGU6IC8oPzpAW1xcdy1dK3xbKz1dKS9tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5hdHJ1bGVcbiAgICB2YXIgdmFyaWFibGUgPSAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbiAgICB2YXIgb3BlcmF0b3IgPSBbXG4gICAgICAvWysqXFwvJV18Wz0hXT18PD0/fD49P3xcXGIoPzphbmR8b3J8bm90KVxcYi8sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxzKyktKD89XFxzKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2FzcycsICdwcm9wZXJ0eScsIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICAgJ3ZhcmlhYmxlLWxpbmUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eWyBcXHRdKlxcJC4rL20sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvOi8sXG4gICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gV2Ugd2FudCB0byBjb25zdW1lIHRoZSB3aG9sZSBsaW5lXG4gICAgICAncHJvcGVydHktbGluZSc6IHtcbiAgICAgICAgcGF0dGVybjogL15bIFxcdF0qKD86W146XFxzXSsgKjouKnw6W146XFxzXSsuKikvbSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHJvcGVydHk6IFtcbiAgICAgICAgICAgIC9bXjpcXHNdKyg/PVxccyo6KS8sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC8oOilbXjpcXHNdKy8sXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvOi8sXG4gICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgICBpbXBvcnRhbnQ6IFByaXNtLmxhbmd1YWdlcy5zYXNzLmltcG9ydGFudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MucHJvcGVydHlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MuaW1wb3J0YW50IC8vIE5vdyB0aGF0IHdob2xlIGxpbmVzIGZvciBvdGhlciBwYXR0ZXJucyBhcmUgY29uc3VtZWQsXG4gICAgLy8gd2hhdCdzIGxlZnQgc2hvdWxkIGJlIHNlbGVjdG9yc1xuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Nhc3MnLCAncHVuY3R1YXRpb24nLCB7XG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBwYXR0ZXJuOiAvKFsgXFx0XSopXFxTKD86LD9bXixcXHJcXG5dKykqKD86LCg/Olxccj9cXG58XFxyKVxcMVsgXFx0XStcXFMoPzosP1teLFxcclxcbl0rKSopKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=