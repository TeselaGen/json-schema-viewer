(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_pug"],{

/***/ "./node_modules/refractor/lang/pug.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/pug.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = pug
pug.displayName = 'pug'
pug.aliases = []
function pug(Prism) {
  ;(function(Prism) {
    // TODO:
    // - Add CSS highlighting inside <style> tags
    // - Add support for multi-line code blocks
    // - Add support for interpolation #{} and !{}
    // - Add support for tag interpolation #[]
    // - Add explicit support for plain text using |
    // - Add support for markup embedded in plain text
    Prism.languages.pug = {
      // Multiline stuff should appear before the rest
      // This handles both single-line and multi-line comments
      comment: {
        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
        lookbehind: true
      },
      // All the tag-related part is in lookbehind
      // so that it can be highlighted by the "tag" pattern
      'multiline-script': {
        pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      // See at the end of the file for known filters
      filter: {
        pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          }
        }
      },
      'multiline-plain-text': {
        pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true
      },
      markup: {
        pattern: /(^[\t ]*)<.+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      },
      doctype: {
        pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
        lookbehind: true
      },
      // This handle all conditional and loop keywords
      'flow-control': {
        pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
        lookbehind: true,
        inside: {
          each: {
            pattern: /^each .+? in\b/,
            inside: {
              keyword: /\b(?:each|in)\b/,
              punctuation: /,/
            }
          },
          branch: {
            pattern: /^(?:if|unless|else|case|when|default|while)\b/,
            alias: 'keyword'
          },
          rest: Prism.languages.javascript
        }
      },
      keyword: {
        pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
        lookbehind: true
      },
      mixin: [
        // Declaration
        {
          pattern: /(^[\t ]*)mixin .+/m,
          lookbehind: true,
          inside: {
            keyword: /^mixin/,
            function: /\w+(?=\s*\(|\s*$)/,
            punctuation: /[(),.]/
          }
        }, // Usage
        {
          pattern: /(^[\t ]*)\+.+/m,
          lookbehind: true,
          inside: {
            name: {
              pattern: /^\+\w+/,
              alias: 'function'
            },
            rest: Prism.languages.javascript
          }
        }
      ],
      script: {
        pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      'plain-text': {
        pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
        lookbehind: true
      },
      tag: {
        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
        lookbehind: true,
        inside: {
          attributes: [
            {
              pattern: /&[^(]+\([^)]+\)/,
              inside: {
                rest: Prism.languages.javascript
              }
            },
            {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                  lookbehind: true,
                  inside: {
                    rest: Prism.languages.javascript
                  }
                },
                'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                punctuation: /[!=(),]+/
              }
            }
          ],
          punctuation: /:/
        }
      },
      code: [
        {
          pattern: /(^[\t ]*(?:-|!?=)).+/m,
          lookbehind: true,
          inside: {
            rest: Prism.languages.javascript
          }
        }
      ],
      punctuation: /[.\-!=|]+/
    }
    var filter_pattern = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/
      .source // Non exhaustive list of available filters and associated languages
    var filters = [
      {
        filter: 'atpl',
        language: 'twig'
      },
      {
        filter: 'coffee',
        language: 'coffeescript'
      },
      'ejs',
      'handlebars',
      'less',
      'livescript',
      'markdown',
      {
        filter: 'sass',
        language: 'scss'
      },
      'stylus'
    ]
    var all_filters = {}
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i]
      filter =
        typeof filter === 'string'
          ? {
              filter: filter,
              language: filter
            }
          : filter
      if (Prism.languages[filter.language]) {
        all_filters['filter-' + filter.filter] = {
          pattern: RegExp(
            filter_pattern.replace('{{filter_name}}', filter.filter),
            'm'
          ),
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            },
            rest: Prism.languages[filter.language]
          }
        }
      }
    }
    Prism.languages.insertBefore('pug', 'filter', all_filters)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsR0FBRyxJQUFJO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjRhMmJmOTcwNGZiYTkyNzBkOTQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHVnXG5wdWcuZGlzcGxheU5hbWUgPSAncHVnJ1xucHVnLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcHVnKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICAvLyBUT0RPOlxuICAgIC8vIC0gQWRkIENTUyBoaWdobGlnaHRpbmcgaW5zaWRlIDxzdHlsZT4gdGFnc1xuICAgIC8vIC0gQWRkIHN1cHBvcnQgZm9yIG11bHRpLWxpbmUgY29kZSBibG9ja3NcbiAgICAvLyAtIEFkZCBzdXBwb3J0IGZvciBpbnRlcnBvbGF0aW9uICN7fSBhbmQgIXt9XG4gICAgLy8gLSBBZGQgc3VwcG9ydCBmb3IgdGFnIGludGVycG9sYXRpb24gI1tdXG4gICAgLy8gLSBBZGQgZXhwbGljaXQgc3VwcG9ydCBmb3IgcGxhaW4gdGV4dCB1c2luZyB8XG4gICAgLy8gLSBBZGQgc3VwcG9ydCBmb3IgbWFya3VwIGVtYmVkZGVkIGluIHBsYWluIHRleHRcbiAgICBQcmlzbS5sYW5ndWFnZXMucHVnID0ge1xuICAgICAgLy8gTXVsdGlsaW5lIHN0dWZmIHNob3VsZCBhcHBlYXIgYmVmb3JlIHRoZSByZXN0XG4gICAgICAvLyBUaGlzIGhhbmRsZXMgYm90aCBzaW5nbGUtbGluZSBhbmQgbXVsdGktbGluZSBjb21tZW50c1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF4oW1xcdCBdKikpXFwvXFwvLiooPzooPzpcXHI/XFxufFxccilcXDJbXFx0IF0rLispKi9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gQWxsIHRoZSB0YWctcmVsYXRlZCBwYXJ0IGlzIGluIGxvb2tiZWhpbmRcbiAgICAgIC8vIHNvIHRoYXQgaXQgY2FuIGJlIGhpZ2hsaWdodGVkIGJ5IHRoZSBcInRhZ1wiIHBhdHRlcm5cbiAgICAgICdtdWx0aWxpbmUtc2NyaXB0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF4oW1xcdCBdKilzY3JpcHRcXGIuKlxcLltcXHQgXSopKD86KD86XFxyP1xcbnxcXHIoPyFcXG4pKSg/OlxcMltcXHQgXSsuK3xcXHMqPyg/PVxccj9cXG58XFxyKSkpKy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gU2VlIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUgZm9yIGtub3duIGZpbHRlcnNcbiAgICAgIGZpbHRlcjoge1xuICAgICAgICBwYXR0ZXJuOiAvKF4oW1xcdCBdKikpOi4rKD86KD86XFxyP1xcbnxcXHIoPyFcXG4pKSg/OlxcMltcXHQgXSsuK3xcXHMqPyg/PVxccj9cXG58XFxyKSkpKy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnZmlsdGVyLW5hbWUnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXjpbXFx3LV0rLyxcbiAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ211bHRpbGluZS1wbGFpbi10ZXh0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF4oW1xcdCBdKilbXFx3XFwtIy5dK1xcLltcXHQgXSopKD86KD86XFxyP1xcbnxcXHIoPyFcXG4pKSg/OlxcMltcXHQgXSsuK3xcXHMqPyg/PVxccj9cXG58XFxyKSkpKy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgbWFya3VwOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXltcXHQgXSopPC4rL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRvY3R5cGU6IHtcbiAgICAgICAgcGF0dGVybjogLygoPzpefFxcbilbXFx0IF0qKWRvY3R5cGUoPzogLispPy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBUaGlzIGhhbmRsZSBhbGwgY29uZGl0aW9uYWwgYW5kIGxvb3Aga2V5d29yZHNcbiAgICAgICdmbG93LWNvbnRyb2wnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXltcXHQgXSopKD86aWZ8dW5sZXNzfGVsc2V8Y2FzZXx3aGVufGRlZmF1bHR8ZWFjaHx3aGlsZSlcXGIoPzogLispPy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBlYWNoOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXmVhY2ggLis/IGluXFxiLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBrZXl3b3JkOiAvXFxiKD86ZWFjaHxpbilcXGIvLFxuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogLywvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBicmFuY2g6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eKD86aWZ8dW5sZXNzfGVsc2V8Y2FzZXx3aGVufGRlZmF1bHR8d2hpbGUpXFxiLyxcbiAgICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXltcXHQgXSopKD86YmxvY2t8ZXh0ZW5kc3xpbmNsdWRlfGFwcGVuZHxwcmVwZW5kKVxcYi4rL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBtaXhpbjogW1xuICAgICAgICAvLyBEZWNsYXJhdGlvblxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKiltaXhpbiAuKy9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAvXm1peGluLyxcbiAgICAgICAgICAgIGZ1bmN0aW9uOiAvXFx3Kyg/PVxccypcXCh8XFxzKiQpLyxcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWygpLC5dL1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gVXNhZ2VcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXltcXHQgXSopXFwrLisvbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxcK1xcdysvLFxuICAgICAgICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHBhdHRlcm46IC8oXltcXHQgXSpzY3JpcHQoPzooPzomW14oXSspP1xcKFteKV0rXFwpKSpbXFx0IF0rKS4rL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAncGxhaW4tdGV4dCc6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKig/IS0pW1xcd1xcLSMuXSpbXFx3XFwtXSg/Oig/OiZbXihdKyk/XFwoW14pXStcXCkpKlxcLz9bXFx0IF0rKS4rL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0YWc6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKikoPyEtKVtcXHdcXC0jLl0qW1xcd1xcLV0oPzooPzomW14oXSspP1xcKFteKV0rXFwpKSpcXC8/Oj8vbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvJlteKF0rXFwoW14pXStcXCkvLFxuICAgICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXFwoW14pXStcXCkvLFxuICAgICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgICAnYXR0ci12YWx1ZSc6IHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC8oPVxccyopKD86XFx7W159XSpcXH18W14sKVxcclxcbl0rKS8sXG4gICAgICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnYXR0ci1uYW1lJzogL1tcXHctXSsoPz1cXHMqIT89fFxccypbLCldKS8sXG4gICAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9bIT0oKSxdKy9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC86L1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29kZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKig/Oi18IT89KSkuKy9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWy5cXC0hPXxdKy9cbiAgICB9XG4gICAgdmFyIGZpbHRlcl9wYXR0ZXJuID0gLyheKFtcXHQgXSopKTp7e2ZpbHRlcl9uYW1lfX0oPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL1xuICAgICAgLnNvdXJjZSAvLyBOb24gZXhoYXVzdGl2ZSBsaXN0IG9mIGF2YWlsYWJsZSBmaWx0ZXJzIGFuZCBhc3NvY2lhdGVkIGxhbmd1YWdlc1xuICAgIHZhciBmaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBmaWx0ZXI6ICdhdHBsJyxcbiAgICAgICAgbGFuZ3VhZ2U6ICd0d2lnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmlsdGVyOiAnY29mZmVlJyxcbiAgICAgICAgbGFuZ3VhZ2U6ICdjb2ZmZWVzY3JpcHQnXG4gICAgICB9LFxuICAgICAgJ2VqcycsXG4gICAgICAnaGFuZGxlYmFycycsXG4gICAgICAnbGVzcycsXG4gICAgICAnbGl2ZXNjcmlwdCcsXG4gICAgICAnbWFya2Rvd24nLFxuICAgICAge1xuICAgICAgICBmaWx0ZXI6ICdzYXNzJyxcbiAgICAgICAgbGFuZ3VhZ2U6ICdzY3NzJ1xuICAgICAgfSxcbiAgICAgICdzdHlsdXMnXG4gICAgXVxuICAgIHZhciBhbGxfZmlsdGVycyA9IHt9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBmaWx0ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGZpbHRlciA9IGZpbHRlcnNbaV1cbiAgICAgIGZpbHRlciA9XG4gICAgICAgIHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICAgICAgICBsYW5ndWFnZTogZmlsdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBmaWx0ZXJcbiAgICAgIGlmIChQcmlzbS5sYW5ndWFnZXNbZmlsdGVyLmxhbmd1YWdlXSkge1xuICAgICAgICBhbGxfZmlsdGVyc1snZmlsdGVyLScgKyBmaWx0ZXIuZmlsdGVyXSA9IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgICBmaWx0ZXJfcGF0dGVybi5yZXBsYWNlKCd7e2ZpbHRlcl9uYW1lfX0nLCBmaWx0ZXIuZmlsdGVyKSxcbiAgICAgICAgICAgICdtJ1xuICAgICAgICAgICksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdmaWx0ZXItbmFtZSc6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL146W1xcdy1dKy8sXG4gICAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzW2ZpbHRlci5sYW5ndWFnZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncHVnJywgJ2ZpbHRlcicsIGFsbF9maWx0ZXJzKVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=