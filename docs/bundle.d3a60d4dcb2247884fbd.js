(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_asciidoc"],{

/***/ "./node_modules/refractor/lang/asciidoc.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/asciidoc.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = asciidoc
asciidoc.displayName = 'asciidoc'
asciidoc.aliases = ['adoc']
function asciidoc(Prism) {
  ;(function(Prism) {
    var attributes = {
      pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
      lookbehind: true,
      inside: {
        quoted: {
          pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
          inside: {
            punctuation: /^[$`]|[$`]$/
          }
        },
        interpreted: {
          pattern: /'(?:[^'\\]|\\.)*'/,
          inside: {
            punctuation: /^'|'$/ // See rest below
          }
        },
        string: /"(?:[^"\\]|\\.)*"/,
        variable: /\w+(?==)/,
        punctuation: /^\[|\]$|,/,
        operator: /=/,
        // The negative look-ahead prevents blank matches
        'attr-value': /(?!^\s+$).+/
      }
    }
    var asciidoc = (Prism.languages.asciidoc = {
      'comment-block': {
        pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
        alias: 'comment'
      },
      table: {
        pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
        inside: {
          specifiers: {
            pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
            alias: 'attr-value'
          },
          punctuation: {
            pattern: /(^|[^\\])[|!]=*/,
            lookbehind: true
          } // See rest below
        }
      },
      'passthrough-block': {
        pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^\++|\++$/ // See rest below
        }
      },
      // Literal blocks and listing blocks
      'literal-block': {
        pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/ // See rest below
        }
      },
      // Sidebar blocks, quote blocks, example blocks and open blocks
      'other-block': {
        pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/ // See rest below
        }
      },
      // list-punctuation and list-label must appear before indented-block
      'list-punctuation': {
        pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
        lookbehind: true,
        alias: 'punctuation'
      },
      'list-label': {
        pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
        lookbehind: true,
        alias: 'symbol'
      },
      'indented-block': {
        pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
        lookbehind: true
      },
      comment: /^\/\/.*/m,
      title: {
        pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
        alias: 'important',
        inside: {
          punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/ // See rest below
        }
      },
      'attribute-entry': {
        pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
        alias: 'tag'
      },
      attributes: attributes,
      hr: {
        pattern: /^'{3,}$/m,
        alias: 'punctuation'
      },
      'page-break': {
        pattern: /^<{3,}$/m,
        alias: 'punctuation'
      },
      admonition: {
        pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
        alias: 'keyword'
      },
      callout: [
        {
          pattern: /(^[ \t]*)<?\d*>/m,
          lookbehind: true,
          alias: 'symbol'
        },
        {
          pattern: /<\d+>/,
          alias: 'symbol'
        }
      ],
      macro: {
        pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
        inside: {
          function: /^[a-z\d-]+(?=:)/,
          punctuation: /^::?/,
          attributes: {
            pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: attributes.inside
          }
        }
      },
      inline: {
        /*
The initial look-behind prevents the highlighting of escaped quoted text.
Quoted text can be multi-line but cannot span an empty line.
All quoted text can have attributes before [foobar, 'foobar', baz="bar"].
First, we handle the constrained quotes.
Those must be bounded by non-word chars and cannot have spaces between the delimiter and the first char.
They are, in order: _emphasis_, ``double quotes'', `single quotes', `monospace`, 'emphasis', *strong*, +monospace+ and #unquoted#
Then we handle the unconstrained quotes.
Those do not have the restrictions of the constrained quotes.
They are, in order: __emphasis__, **strong**, ++monospace++, +++passthrough+++, ##unquoted##, $$passthrough$$, ~subscript~, ^superscript^, {attribute-reference}, [[anchor]], [[[bibliography anchor]]], <<xref>>, (((indexes))) and ((indexes))
*/
        pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
        lookbehind: true,
        inside: {
          attributes: attributes,
          url: {
            pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
            inside: {
              punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
            }
          },
          'attribute-ref': {
            pattern: /^\{.+\}$/,
            inside: {
              variable: {
                pattern: /(^\{)[a-z\d,+_-]+/,
                lookbehind: true
              },
              operator: /^[=?!#%@$]|!(?=[:}])/,
              punctuation: /^\{|\}$|::?/
            }
          },
          italic: {
            pattern: /^(['_])[\s\S]+\1$/,
            inside: {
              punctuation: /^(?:''?|__?)|(?:''?|__?)$/
            }
          },
          bold: {
            pattern: /^\*[\s\S]+\*$/,
            inside: {
              punctuation: /^\*\*?|\*\*?$/
            }
          },
          punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
        }
      },
      replacement: {
        pattern: /\((?:C|TM|R)\)/,
        alias: 'builtin'
      },
      entity: /&#?[\da-z]{1,8};/i,
      'line-continuation': {
        pattern: /(^| )\+$/m,
        lookbehind: true,
        alias: 'punctuation'
      }
    }) // Allow some nesting. There is no recursion though, so cloning should not be needed.
    function copyFromAsciiDoc(keys) {
      keys = keys.split(' ')
      var o = {}
      for (var i = 0, l = keys.length; i < l; i++) {
        o[keys[i]] = asciidoc[keys[i]]
      }
      return o
    }
    attributes.inside['interpreted'].inside.rest = copyFromAsciiDoc(
      'macro inline replacement entity'
    )
    asciidoc['passthrough-block'].inside.rest = copyFromAsciiDoc('macro')
    asciidoc['literal-block'].inside.rest = copyFromAsciiDoc('callout')
    asciidoc['table'].inside.rest = copyFromAsciiDoc(
      'comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation'
    )
    asciidoc['other-block'].inside.rest = copyFromAsciiDoc(
      'table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation'
    )
    asciidoc['title'].inside.rest = copyFromAsciiDoc(
      'macro inline replacement entity'
    ) // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function(env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
      }
    })
    Prism.languages.adoc = Prism.languages.asciidoc
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXNjaWlkb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsR0FBRztBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixHQUFHLG9DQUFvQyxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixHQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esc0JBQXNCLEdBQUcsSUFBSSxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMEJBQTBCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxJQUFJLElBQUksSUFBSTtBQUMvQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EseUNBQXlDLElBQUksR0FBRztBQUNoRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUVBQXVFLEVBQUU7QUFDekU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLElBQUk7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QjtBQUNBLE9BQU87QUFDUDtBQUNBLHFCQUFxQixHQUFHO0FBQ3hCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRJQUE0SSxvQkFBb0I7QUFDaEs7QUFDQSx3ZEFBd2QsR0FBRyxRQUFRO0FBQ25lO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSx5QkFBeUIsSUFBSTtBQUM3QjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsZUFBZTtBQUNmLDJDQUEyQztBQUMzQywrQkFBK0IsR0FBRztBQUNsQztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbUNBQW1DLElBQUksa0NBQWtDLElBQUk7QUFDN0U7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuZDNhNjBkNGRjYjIyNDc4ODRmYmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaWRvY1xuYXNjaWlkb2MuZGlzcGxheU5hbWUgPSAnYXNjaWlkb2MnXG5hc2NpaWRvYy5hbGlhc2VzID0gWydhZG9jJ11cbmZ1bmN0aW9uIGFzY2lpZG9jKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopXFxbKD8hXFxbKSg/OihbXCInJGBdKSg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSpcXDJ8XFxbKD86W15cXF1cXFxcXXxcXFxcLikqXFxdfFteXFxdXFxcXF18XFxcXC4pKlxcXS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBxdW90ZWQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFskYF0pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKlxcMS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL15bJGBdfFskYF0kL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJwcmV0ZWQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvJyg/OlteJ1xcXFxdfFxcXFwuKSonLyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXid8JyQvIC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdHJpbmc6IC9cIig/OlteXCJcXFxcXXxcXFxcLikqXCIvLFxuICAgICAgICB2YXJpYWJsZTogL1xcdysoPz09KS8sXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXlxcW3xcXF0kfCwvLFxuICAgICAgICBvcGVyYXRvcjogLz0vLFxuICAgICAgICAvLyBUaGUgbmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBibGFuayBtYXRjaGVzXG4gICAgICAgICdhdHRyLXZhbHVlJzogLyg/IV5cXHMrJCkuKy9cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGFzY2lpZG9jID0gKFByaXNtLmxhbmd1YWdlcy5hc2NpaWRvYyA9IHtcbiAgICAgICdjb21tZW50LWJsb2NrJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXihcXC97NCx9KSg/Olxccj9cXG58XFxyKSg/OltcXHNcXFNdKig/Olxccj9cXG58XFxyKSk/P1xcMS9tLFxuICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICB9LFxuICAgICAgdGFibGU6IHtcbiAgICAgICAgcGF0dGVybjogL15cXHw9ezMsfSg/Oig/Olxccj9cXG58XFxyKS4qKSo/KD86XFxyP1xcbnxcXHIpXFx8PXszLH0kL20sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHNwZWNpZmllcnM6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oPyFcXHwpKD86KD86KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKVsrKl0pPyg/Ols8Xj5dKD86XFwuWzxePl0pP3xcXC5bPF4+XSk/W2Etel0qKSg/PVxcfCkvLFxuICAgICAgICAgICAgYWxpYXM6ICdhdHRyLXZhbHVlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVt8IV09Ki8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3Bhc3N0aHJvdWdoLWJsb2NrJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXihcXCt7NCx9KSg/Olxccj9cXG58XFxyKSg/OltcXHNcXFNdKig/Olxccj9cXG58XFxyKSk/P1xcMSQvbSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9eXFwrK3xcXCsrJC8gLy8gU2VlIHJlc3QgYmVsb3dcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIExpdGVyYWwgYmxvY2tzIGFuZCBsaXN0aW5nIGJsb2Nrc1xuICAgICAgJ2xpdGVyYWwtYmxvY2snOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKC17NCx9fFxcLns0LH0pKD86XFxyP1xcbnxcXHIpKD86W1xcc1xcU10qKD86XFxyP1xcbnxcXHIpKT8/XFwxJC9tLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL14oPzotK3xcXC4rKXwoPzotK3xcXC4rKSQvIC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBTaWRlYmFyIGJsb2NrcywgcXVvdGUgYmxvY2tzLCBleGFtcGxlIGJsb2NrcyBhbmQgb3BlbiBibG9ja3NcbiAgICAgICdvdGhlci1ibG9jayc6IHtcbiAgICAgICAgcGF0dGVybjogL14oLS18XFwqezQsfXxfezQsfXw9ezQsfSkoPzpcXHI/XFxufFxccikoPzpbXFxzXFxTXSooPzpcXHI/XFxufFxccikpPz9cXDEkL20sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXig/Oi0rfFxcKit8Xyt8PSspfCg/Oi0rfFxcKit8Xyt8PSspJC8gLy8gU2VlIHJlc3QgYmVsb3dcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGxpc3QtcHVuY3R1YXRpb24gYW5kIGxpc3QtbGFiZWwgbXVzdCBhcHBlYXIgYmVmb3JlIGluZGVudGVkLWJsb2NrXG4gICAgICAnbGlzdC1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKikoPzotfFxcKnsxLDV9fFxcLnsxLDV9fCg/OlthLXpdfFxcZCspXFwufFt4dmldK1xcKSkoPz0gKS9pbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH0sXG4gICAgICAnbGlzdC1sYWJlbCc6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKilbYS16XFxkXS4rKD86OnsyLDR9fDs7KSg/PVxccykvaW0sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnc3ltYm9sJ1xuICAgICAgfSxcbiAgICAgICdpbmRlbnRlZC1ibG9jayc6IHtcbiAgICAgICAgcGF0dGVybjogLygoXFxyP1xcbnxcXHIpXFwyKShbIFxcdF0rKVxcUy4qKD86KD86XFxyP1xcbnxcXHIpXFwzLispKig/PVxcMnsyfXwkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb21tZW50OiAvXlxcL1xcLy4qL20sXG4gICAgICB0aXRsZToge1xuICAgICAgICBwYXR0ZXJuOiAvXi4rKD86XFxyP1xcbnxcXHIpKD86PXszLH18LXszLH18fnszLH18XFxeezMsfXxcXCt7Myx9KSR8Xj17MSw1fSArLit8XlxcLig/IVtcXHMuXSkuKi9tLFxuICAgICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXig/OlxcLnw9Kyl8KD86PSt8LSt8fit8XFxeK3xcXCsrKSQvIC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnYXR0cmlidXRlLWVudHJ5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvXjpbXjpcXHJcXG5dKzooPzogLio/KD86IFxcKyg/Olxccj9cXG58XFxyKS4qPykqKT8kL20sXG4gICAgICAgIGFsaWFzOiAndGFnJ1xuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICBocjoge1xuICAgICAgICBwYXR0ZXJuOiAvXid7Myx9JC9tLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgICdwYWdlLWJyZWFrJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXjx7Myx9JC9tLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIGFkbW9uaXRpb246IHtcbiAgICAgICAgcGF0dGVybjogL14oPzpUSVB8Tk9URXxJTVBPUlRBTlR8V0FSTklOR3xDQVVUSU9OKTovbSxcbiAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgfSxcbiAgICAgIGNhbGxvdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopPD9cXGQqPi9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdzeW1ib2wnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPFxcZCs+LyxcbiAgICAgICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG1hY3JvOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXGJbYS16XFxkXVthLXpcXGQtXSo6Oj8oPzooPzpcXFMrKT8/XFxbKD86W15cXF1cXFxcXCJdfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqXFwxfFxcXFwuKSpcXF0pLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZnVuY3Rpb246IC9eW2EtelxcZC1dKyg/PTopLyxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL146Oj8vLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oPzpcXFsoPzpbXlxcXVxcXFxcIl18KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSpcXDF8XFxcXC4pKlxcXSkvLFxuICAgICAgICAgICAgaW5zaWRlOiBhdHRyaWJ1dGVzLmluc2lkZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlubGluZToge1xuICAgICAgICAvKlxuVGhlIGluaXRpYWwgbG9vay1iZWhpbmQgcHJldmVudHMgdGhlIGhpZ2hsaWdodGluZyBvZiBlc2NhcGVkIHF1b3RlZCB0ZXh0LlxuUXVvdGVkIHRleHQgY2FuIGJlIG11bHRpLWxpbmUgYnV0IGNhbm5vdCBzcGFuIGFuIGVtcHR5IGxpbmUuXG5BbGwgcXVvdGVkIHRleHQgY2FuIGhhdmUgYXR0cmlidXRlcyBiZWZvcmUgW2Zvb2JhciwgJ2Zvb2JhcicsIGJhej1cImJhclwiXS5cbkZpcnN0LCB3ZSBoYW5kbGUgdGhlIGNvbnN0cmFpbmVkIHF1b3Rlcy5cblRob3NlIG11c3QgYmUgYm91bmRlZCBieSBub24td29yZCBjaGFycyBhbmQgY2Fubm90IGhhdmUgc3BhY2VzIGJldHdlZW4gdGhlIGRlbGltaXRlciBhbmQgdGhlIGZpcnN0IGNoYXIuXG5UaGV5IGFyZSwgaW4gb3JkZXI6IF9lbXBoYXNpc18sIGBgZG91YmxlIHF1b3RlcycnLCBgc2luZ2xlIHF1b3RlcycsIGBtb25vc3BhY2VgLCAnZW1waGFzaXMnLCAqc3Ryb25nKiwgK21vbm9zcGFjZSsgYW5kICN1bnF1b3RlZCNcblRoZW4gd2UgaGFuZGxlIHRoZSB1bmNvbnN0cmFpbmVkIHF1b3Rlcy5cblRob3NlIGRvIG5vdCBoYXZlIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlIGNvbnN0cmFpbmVkIHF1b3Rlcy5cblRoZXkgYXJlLCBpbiBvcmRlcjogX19lbXBoYXNpc19fLCAqKnN0cm9uZyoqLCArK21vbm9zcGFjZSsrLCArKytwYXNzdGhyb3VnaCsrKywgIyN1bnF1b3RlZCMjLCAkJHBhc3N0aHJvdWdoJCQsIH5zdWJzY3JpcHR+LCBec3VwZXJzY3JpcHReLCB7YXR0cmlidXRlLXJlZmVyZW5jZX0sIFtbYW5jaG9yXV0sIFtbW2JpYmxpb2dyYXBoeSBhbmNob3JdXV0sIDw8eHJlZj4+LCAoKChpbmRleGVzKSkpIGFuZCAoKGluZGV4ZXMpKVxuKi9cbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86KD86XFxCXFxbKD86W15cXF1cXFxcXCJdfChbXCInXSkoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqXFwyfFxcXFwuKSpcXF0pPyg/OlxcYl8oPyFcXHMpKD86IF98W15fXFxcXFxcclxcbl18XFxcXC4pKyg/Oig/Olxccj9cXG58XFxyKSg/OiBffFteX1xcXFxcXHJcXG5dfFxcXFwuKSspKl9cXGJ8XFxCYGAoPyFcXHMpLis/KD86KD86XFxyP1xcbnxcXHIpLis/KSonJ1xcQnxcXEJgKD8hXFxzKSg/OiBbJ2BdfC4pKz8oPzooPzpcXHI/XFxufFxccikoPzogWydgXXwuKSs/KSpbJ2BdXFxCfFxcQihbJyorI10pKD8hXFxzKSg/OiBcXDN8KD8hXFwzKVteXFxcXFxcclxcbl18XFxcXC4pKyg/Oig/Olxccj9cXG58XFxyKSg/OiBcXDN8KD8hXFwzKVteXFxcXFxcclxcbl18XFxcXC4pKykqXFwzXFxCKXwoPzpcXFsoPzpbXlxcXVxcXFxcIl18KFtcIiddKSg/Oig/IVxcNClbXlxcXFxdfFxcXFwuKSpcXDR8XFxcXC4pKlxcXSk/KD86KF9ffFxcKlxcKnxcXCtcXCtcXCs/fCMjfFxcJFxcJHxbfl5dKS4rPyg/Oig/Olxccj9cXG58XFxyKS4rPykqXFw1fFxce1tefVxcclxcbl0rXFx9fFxcW1xcW1xcWz8uKz8oPzooPzpcXHI/XFxufFxccikuKz8pKlxcXT9cXF1cXF18PDwuKz8oPzooPzpcXHI/XFxufFxccikuKz8pKj4+fFxcKFxcKFxcKD8uKz8oPzooPzpcXHI/XFxufFxccikuKz8pKlxcKT9cXClcXCkpKS9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oPzpcXFtcXFtcXFs/Lis/XFxdP1xcXVxcXXw8PC4rPz4+KSQvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXig/OlxcW1xcW1xcWz98PDwpfCg/OlxcXVxcXVxcXT98Pj4pJC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdhdHRyaWJ1dGUtcmVmJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cXHsuK1xcfSQvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyheXFx7KVthLXpcXGQsK18tXSsvLFxuICAgICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IC9eWz0/ISMlQCRdfCEoPz1bOn1dKS8sXG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXlxce3xcXH0kfDo6Py9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGl0YWxpYzoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oWydfXSlbXFxzXFxTXStcXDEkLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL14oPzonJz98X18/KXwoPzonJz98X18/KSQvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2xkOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcKltcXHNcXFNdK1xcKiQvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXlxcKlxcKj98XFwqXFwqPyQvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL14oPzpgYD98XFwrezEsM318IyM/fFxcJFxcJHxbfl5dfFxcKFxcKFxcKD8pfCg/OicnP3xcXCt7MSwzfXwjIz98XFwkXFwkfFt+XmBdfFxcKT9cXClcXCkpJC9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlcGxhY2VtZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCgoPzpDfFRNfFIpXFwpLyxcbiAgICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgICAgfSxcbiAgICAgIGVudGl0eTogLyYjP1tcXGRhLXpdezEsOH07L2ksXG4gICAgICAnbGluZS1jb250aW51YXRpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnwgKVxcKyQvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH1cbiAgICB9KSAvLyBBbGxvdyBzb21lIG5lc3RpbmcuIFRoZXJlIGlzIG5vIHJlY3Vyc2lvbiB0aG91Z2gsIHNvIGNsb25pbmcgc2hvdWxkIG5vdCBiZSBuZWVkZWQuXG4gICAgZnVuY3Rpb24gY29weUZyb21Bc2NpaURvYyhrZXlzKSB7XG4gICAgICBrZXlzID0ga2V5cy5zcGxpdCgnICcpXG4gICAgICB2YXIgbyA9IHt9XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIG9ba2V5c1tpXV0gPSBhc2NpaWRvY1trZXlzW2ldXVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9cbiAgICB9XG4gICAgYXR0cmlidXRlcy5pbnNpZGVbJ2ludGVycHJldGVkJ10uaW5zaWRlLnJlc3QgPSBjb3B5RnJvbUFzY2lpRG9jKFxuICAgICAgJ21hY3JvIGlubGluZSByZXBsYWNlbWVudCBlbnRpdHknXG4gICAgKVxuICAgIGFzY2lpZG9jWydwYXNzdGhyb3VnaC1ibG9jayddLmluc2lkZS5yZXN0ID0gY29weUZyb21Bc2NpaURvYygnbWFjcm8nKVxuICAgIGFzY2lpZG9jWydsaXRlcmFsLWJsb2NrJ10uaW5zaWRlLnJlc3QgPSBjb3B5RnJvbUFzY2lpRG9jKCdjYWxsb3V0JylcbiAgICBhc2NpaWRvY1sndGFibGUnXS5pbnNpZGUucmVzdCA9IGNvcHlGcm9tQXNjaWlEb2MoXG4gICAgICAnY29tbWVudC1ibG9jayBwYXNzdGhyb3VnaC1ibG9jayBsaXRlcmFsLWJsb2NrIG90aGVyLWJsb2NrIGxpc3QtcHVuY3R1YXRpb24gaW5kZW50ZWQtYmxvY2sgY29tbWVudCB0aXRsZSBhdHRyaWJ1dGUtZW50cnkgYXR0cmlidXRlcyBociBwYWdlLWJyZWFrIGFkbW9uaXRpb24gbGlzdC1sYWJlbCBjYWxsb3V0IG1hY3JvIGlubGluZSByZXBsYWNlbWVudCBlbnRpdHkgbGluZS1jb250aW51YXRpb24nXG4gICAgKVxuICAgIGFzY2lpZG9jWydvdGhlci1ibG9jayddLmluc2lkZS5yZXN0ID0gY29weUZyb21Bc2NpaURvYyhcbiAgICAgICd0YWJsZSBsaXN0LXB1bmN0dWF0aW9uIGluZGVudGVkLWJsb2NrIGNvbW1lbnQgYXR0cmlidXRlLWVudHJ5IGF0dHJpYnV0ZXMgaHIgcGFnZS1icmVhayBhZG1vbml0aW9uIGxpc3QtbGFiZWwgbWFjcm8gaW5saW5lIHJlcGxhY2VtZW50IGVudGl0eSBsaW5lLWNvbnRpbnVhdGlvbidcbiAgICApXG4gICAgYXNjaWlkb2NbJ3RpdGxlJ10uaW5zaWRlLnJlc3QgPSBjb3B5RnJvbUFzY2lpRG9jKFxuICAgICAgJ21hY3JvIGlubGluZSByZXBsYWNlbWVudCBlbnRpdHknXG4gICAgKSAvLyBQbHVnaW4gdG8gbWFrZSBlbnRpdHkgdGl0bGUgc2hvdyB0aGUgcmVhbCBlbnRpdHksIGlkZWEgYnkgUm9tYW4gS29tYXJvdlxuICAgIFByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuICAgICAgaWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuICAgICAgICBlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnZhbHVlLnJlcGxhY2UoLyZhbXA7LywgJyYnKVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmFkb2MgPSBQcmlzbS5sYW5ndWFnZXMuYXNjaWlkb2NcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9