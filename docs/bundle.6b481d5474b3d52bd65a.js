(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_markdown"],{

/***/ "./node_modules/refractor/lang/markdown.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/markdown.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = markdown
markdown.displayName = 'markdown'
markdown.aliases = ['md']
function markdown(Prism) {
  ;(function(Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source
    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
     * @returns {RegExp}
     */
    function createInline(pattern, starAlternative) {
      pattern = pattern.replace(/<inner>/g, inner)
      if (starAlternative) {
        pattern = pattern + '|' + pattern.replace(/_/g, '\\*')
      }
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
    }
    var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(
      /__/g,
      tableCell
    )
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
      .source
    Prism.languages.markdown = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore('markdown', 'prolog', {
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp(
          '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
          'm'
        ),
        inside: {
          'table-data-rows': {
            pattern: RegExp(
              '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
            ),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
          lookbehind: true,
          alias: 'keyword'
        },
        {
          // `code`
          // ``code``
          pattern: /``.+?``|`[^`\r\n]+`/,
          alias: 'keyword'
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
              lookbehind: true
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======
          // title 2
          // -------
          pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#+.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(
          /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(
          /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /~~?/
        }
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
            .source,
          false
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          variable: {
            pattern: /(\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          content: {
            pattern: /(^!?\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below
          },
          string: {
            pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
          }
        }
      }
    })
    ;['url', 'bold', 'italic', 'strike'].forEach(function(token) {
      ;['url', 'bold', 'italic', 'strike'].forEach(function(inside) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] =
            Prism.languages.markdown[inside]
        }
      })
    })
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return
        }
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (token.type !== 'code') {
            walkTokens(token.content)
            continue
          }
          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */
          var codeLang = token.content[1]
          var codeBlock = token.content[3]
          if (
            codeLang &&
            codeBlock &&
            codeLang.type === 'code-language' &&
            codeBlock.type === 'code-block' &&
            typeof codeLang.content === 'string'
          ) {
            // this might be a language that Prism does not support
            var alias =
              'language-' +
              codeLang.content
                .trim()
                .split(/\s+/)[0]
                .toLowerCase() // add alias
            if (!codeBlock.alias) {
              codeBlock.alias = [alias]
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias]
            } else {
              codeBlock.alias.push(alias)
            }
          }
        }
      }
      walkTokens(env.tokens)
    })
    Prism.hooks.add('wrap', function(env) {
      if (env.type !== 'code-block') {
        return
      }
      var codeLang = ''
      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i]
        var match = /language-(.+)/.exec(cls)
        if (match) {
          codeLang = match[1]
          break
        }
      }
      var grammar = Prism.languages[codeLang]
      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(Math.random() * 1e16)
          env.attributes['id'] = id
          Prism.plugins.autoloader.loadLanguages(codeLang, function() {
            var ele = document.getElementById(id)
            if (ele) {
              ele.innerHTML = Prism.highlight(
                ele.textContent,
                Prism.languages[codeLang],
                codeLang
              )
            }
          })
        }
      } else {
        // reverse Prism.util.encode
        var code = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(code, grammar, codeLang)
      }
    })
    Prism.languages.md = Prism.languages.markdown
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWFya2Rvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEdBQUcsdUJBQXVCLEdBQUc7QUFDL0Q7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxHQUFHO0FBQ3RDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxFQUFFLDBCQUEwQixFQUFFO0FBQzVFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjZiNDgxZDU0NzRiM2Q1MmJkNjVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25cbm1hcmtkb3duLmRpc3BsYXlOYW1lID0gJ21hcmtkb3duJ1xubWFya2Rvd24uYWxpYXNlcyA9IFsnbWQnXVxuZnVuY3Rpb24gbWFya2Rvd24oUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIC8vIEFsbG93IG9ubHkgb25lIGxpbmUgYnJlYWtcbiAgICB2YXIgaW5uZXIgPSAvKD86XFxcXC58W15cXFxcXFxuXFxyXXwoPzpcXHI/XFxufFxccikoPyFcXHI/XFxufFxccikpLy5zb3VyY2VcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIGZvciB0aGUgY3JlYXRpb24gb2YgdGhlIGJvbGQgb3IgaXRhbGljIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBUaGlzIGFsc28gYWRkcyBhIGxvb2tiZWhpbmQgZ3JvdXAgdG8gdGhlIGdpdmVuIHBhdHRlcm4gdG8gZW5zdXJlIHRoYXQgdGhlIHBhdHRlcm4gaXMgbm90IGJhY2tzbGFzaC1lc2NhcGVkLlxuICAgICAqXG4gICAgICogX05vdGU6XyBLZWVwIGluIG1pbmQgdGhhdCB0aGlzIGFkZHMgYSBjYXB0dXJpbmcgZ3JvdXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhckFsdGVybmF0aXZlIFdoZXRoZXIgdG8gYWxzbyBhZGQgYW4gYWx0ZXJuYXRpdmUgd2hlcmUgYWxsIGBfYHMgYXJlIHJlcGxhY2VkIHdpdGggYCpgcy5cbiAgICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUlubGluZShwYXR0ZXJuLCBzdGFyQWx0ZXJuYXRpdmUpIHtcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoLzxpbm5lcj4vZywgaW5uZXIpXG4gICAgICBpZiAoc3RhckFsdGVybmF0aXZlKSB7XG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuICsgJ3wnICsgcGF0dGVybi5yZXBsYWNlKC9fL2csICdcXFxcKicpXG4gICAgICB9XG4gICAgICByZXR1cm4gUmVnRXhwKC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKikvLnNvdXJjZSArICcoPzonICsgcGF0dGVybiArICcpJylcbiAgICB9XG4gICAgdmFyIHRhYmxlQ2VsbCA9IC8oPzpcXFxcLnxgYC4rP2BgfGBbXmBcXHJcXG5dK2B8W15cXFxcfFxcclxcbmBdKSsvLnNvdXJjZVxuICAgIHZhciB0YWJsZVJvdyA9IC9cXHw/X18oPzpcXHxfXykrXFx8Pyg/Oig/Olxccj9cXG58XFxyKXwkKS8uc291cmNlLnJlcGxhY2UoXG4gICAgICAvX18vZyxcbiAgICAgIHRhYmxlQ2VsbFxuICAgIClcbiAgICB2YXIgdGFibGVMaW5lID0gL1xcfD9bIFxcdF0qOj8tezMsfTo/WyBcXHRdKig/OlxcfFsgXFx0XSo6Py17Myx9Oj9bIFxcdF0qKStcXHw/KD86XFxyP1xcbnxcXHIpL1xuICAgICAgLnNvdXJjZVxuICAgIFByaXNtLmxhbmd1YWdlcy5tYXJrZG93biA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmtkb3duJywgJ3Byb2xvZycsIHtcbiAgICAgIGJsb2NrcXVvdGU6IHtcbiAgICAgICAgLy8gPiAuLi5cbiAgICAgICAgcGF0dGVybjogL14+KD86W1xcdCBdKj4pKi9tLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIHRhYmxlOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAnXicgKyB0YWJsZVJvdyArIHRhYmxlTGluZSArICcoPzonICsgdGFibGVSb3cgKyAnKSonLFxuICAgICAgICAgICdtJ1xuICAgICAgICApLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAndGFibGUtZGF0YS1yb3dzJzoge1xuICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKFxuICAgICAgICAgICAgICAnXignICsgdGFibGVSb3cgKyB0YWJsZUxpbmUgKyAnKSg/OicgKyB0YWJsZVJvdyArICcpKiQnXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAndGFibGUtZGF0YSc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAodGFibGVDZWxsKSxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93blxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICd0YWJsZS1saW5lJzoge1xuICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeKCcgKyB0YWJsZVJvdyArICcpJyArIHRhYmxlTGluZSArICckJyksXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8fDo/LXszLH06Py9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICd0YWJsZS1oZWFkZXItcm93Jzoge1xuICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeJyArIHRhYmxlUm93ICsgJyQnKSxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAndGFibGUtaGVhZGVyJzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCh0YWJsZUNlbGwpLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnaW1wb3J0YW50JyxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93blxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2RlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBQcmVmaXhlZCBieSA0IHNwYWNlcyBvciAxIHRhYiBhbmQgcHJlY2VkZWQgYnkgYW4gZW1wdHkgbGluZVxuICAgICAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSooPzpcXHI/XFxufFxccikpKD86IHs0fXxcXHQpLisoPzooPzpcXHI/XFxufFxccikoPzogezR9fFxcdCkuKykqL20sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBgY29kZWBcbiAgICAgICAgICAvLyBgYGNvZGVgYFxuICAgICAgICAgIHBhdHRlcm46IC9gYC4rP2BgfGBbXmBcXHJcXG5dK2AvLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGBgYG9wdGlvbmFsIGxhbmd1YWdlXG4gICAgICAgICAgLy8gY29kZSBibG9ja1xuICAgICAgICAgIC8vIGBgYFxuICAgICAgICAgIHBhdHRlcm46IC9eYGBgW1xcc1xcU10qP15gYGAkL20sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ2NvZGUtYmxvY2snOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eKGBgYC4qKD86XFxyP1xcbnxcXHIpKVtcXHNcXFNdKz8oPz0oPzpcXHI/XFxufFxccileYGBgJCkvbSxcbiAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb2RlLWxhbmd1YWdlJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihgYGApLisvLFxuICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9gYGAvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdGl0bGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIHRpdGxlIDFcbiAgICAgICAgICAvLyA9PT09PT09XG4gICAgICAgICAgLy8gdGl0bGUgMlxuICAgICAgICAgIC8vIC0tLS0tLS1cbiAgICAgICAgICBwYXR0ZXJuOiAvXFxTLiooPzpcXHI/XFxufFxccikoPzo9PSt8LS0rKSg/PVsgXFx0XSokKS9tLFxuICAgICAgICAgIGFsaWFzOiAnaW1wb3J0YW50JyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvPT0rJHwtLSskL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vICMgdGl0bGUgMVxuICAgICAgICAgIC8vICMjIyMjIyB0aXRsZSA2XG4gICAgICAgICAgcGF0dGVybjogLyheXFxzKikjKy4rL20sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL14jK3wjKyQvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaHI6IHtcbiAgICAgICAgLy8gKioqXG4gICAgICAgIC8vIC0tLVxuICAgICAgICAvLyAqICogKlxuICAgICAgICAvLyAtLS0tLS0tLS0tLVxuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKShbKi1dKSg/OltcXHQgXSpcXDIpezIsfSg/PVxccyokKS9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgLy8gKiBpdGVtXG4gICAgICAgIC8vICsgaXRlbVxuICAgICAgICAvLyAtIGl0ZW1cbiAgICAgICAgLy8gMS4gaXRlbVxuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/OlsqKy1dfFxcZCtcXC4pKD89W1xcdCBdLikvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH0sXG4gICAgICAndXJsLXJlZmVyZW5jZSc6IHtcbiAgICAgICAgLy8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tIFwiT3B0aW9uYWwgdGl0bGVcIlxuICAgICAgICAvLyBbaWRdOiBodHRwOi8vZXhhbXBsZS5jb20gJ09wdGlvbmFsIHRpdGxlJ1xuICAgICAgICAvLyBbaWRdOiBodHRwOi8vZXhhbXBsZS5jb20gKE9wdGlvbmFsIHRpdGxlKVxuICAgICAgICAvLyBbaWRdOiA8aHR0cDovL2V4YW1wbGUuY29tPiBcIk9wdGlvbmFsIHRpdGxlXCJcbiAgICAgICAgcGF0dGVybjogLyE/XFxbW15cXF1dK1xcXTpbXFx0IF0rKD86XFxTK3w8KD86XFxcXC58W14+XFxcXF0pKz4pKD86W1xcdCBdKyg/OlwiKD86XFxcXC58W15cIlxcXFxdKSpcInwnKD86XFxcXC58W14nXFxcXF0pKid8XFwoKD86XFxcXC58W14pXFxcXF0pKlxcKSkpPy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXighP1xcWylbXlxcXV0rLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0cmluZzogLyg/OlwiKD86XFxcXC58W15cIlxcXFxdKSpcInwnKD86XFxcXC58W14nXFxcXF0pKid8XFwoKD86XFxcXC58W14pXFxcXF0pKlxcKSkkLyxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL15bXFxbXFxdITpdfFs8Pl0vXG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAndXJsJ1xuICAgICAgfSxcbiAgICAgIGJvbGQ6IHtcbiAgICAgICAgLy8gKipzdHJvbmcqKlxuICAgICAgICAvLyBfX3N0cm9uZ19fXG4gICAgICAgIC8vIGFsbG93IG9uZSBuZXN0ZWQgaW5zdGFuY2Ugb2YgaXRhbGljIHRleHQgdXNpbmcgdGhlIHNhbWUgZGVsaW1pdGVyXG4gICAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZShcbiAgICAgICAgICAvX18oPzooPyFfKTxpbm5lcj58Xyg/Oig/IV8pPGlubmVyPikrXykrX18vLnNvdXJjZSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogLyheLi4pW1xcc1xcU10rKD89Li4kKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwqXFwqfF9fL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRhbGljOiB7XG4gICAgICAgIC8vICplbSpcbiAgICAgICAgLy8gX2VtX1xuICAgICAgICAvLyBhbGxvdyBvbmUgbmVzdGVkIGluc3RhbmNlIG9mIGJvbGQgdGV4dCB1c2luZyB0aGUgc2FtZSBkZWxpbWl0ZXJcbiAgICAgICAgcGF0dGVybjogY3JlYXRlSW5saW5lKFxuICAgICAgICAgIC9fKD86KD8hXyk8aW5uZXI+fF9fKD86KD8hXyk8aW5uZXI+KStfXykrXy8uc291cmNlLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF4uKVtcXHNcXFNdKyg/PS4kKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWypfXS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0cmlrZToge1xuICAgICAgICAvLyB+fnN0cmlrZSB0aHJvdWdofn5cbiAgICAgICAgLy8gfnN0cmlrZX5cbiAgICAgICAgcGF0dGVybjogY3JlYXRlSW5saW5lKC8ofn4/KSg/Oig/IX4pPGlubmVyPikrP1xcMi8uc291cmNlLCBmYWxzZSksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefn4/KVtcXHNcXFNdKyg/PVxcMSQpLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9+fj8vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgLy8gW2V4YW1wbGVdKGh0dHA6Ly9leGFtcGxlLmNvbSBcIk9wdGlvbmFsIHRpdGxlXCIpXG4gICAgICAgIC8vIFtleGFtcGxlXVtpZF1cbiAgICAgICAgLy8gW2V4YW1wbGVdIFtpZF1cbiAgICAgICAgcGF0dGVybjogY3JlYXRlSW5saW5lKFxuICAgICAgICAgIC8hP1xcWyg/Oig/IVxcXSk8aW5uZXI+KStcXF0oPzpcXChbXlxccyldKyg/OltcXHQgXStcIig/OlxcXFwufFteXCJcXFxcXSkqXCIpP1xcKXwgP1xcWyg/Oig/IVxcXSk8aW5uZXI+KStcXF0pL1xuICAgICAgICAgICAgLnNvdXJjZSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKFxcWylbXlxcXV0rKD89XFxdJCkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogLyheIT9cXFspW15cXF1dKyg/PVxcXSkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge30gLy8gc2VlIGJlbG93XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHJpbmc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXCJcXFxcXSkqXCIoPz1cXCkkKS9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIDtbJ3VybCcsICdib2xkJywgJ2l0YWxpYycsICdzdHJpa2UnXS5mb3JFYWNoKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICA7Wyd1cmwnLCAnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtlJ10uZm9yRWFjaChmdW5jdGlvbihpbnNpZGUpIHtcbiAgICAgICAgaWYgKHRva2VuICE9PSBpbnNpZGUpIHtcbiAgICAgICAgICBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25bdG9rZW5dLmluc2lkZS5jb250ZW50Lmluc2lkZVtpbnNpZGVdID1cbiAgICAgICAgICAgIFByaXNtLmxhbmd1YWdlcy5tYXJrZG93bltpbnNpZGVdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSAnbWFya2Rvd24nICYmIGVudi5sYW5ndWFnZSAhPT0gJ21kJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG4gICAgICAgIGlmICghdG9rZW5zIHx8IHR5cGVvZiB0b2tlbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuICAgICAgICAgICAgd2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgYGxhbmd1YWdlLXh4eHhgIGNsYXNzIHRvIHRoaXMgY29kZSBibG9jay4gS2VlcCBpbiBtaW5kIHRoYXQgdGhlIGBjb2RlLWxhbmd1YWdlYCB0b2tlblxuICAgICAgICAgICAqIGlzIG9wdGlvbmFsLiBCdXQgdGhlIGdyYW1tYXIgaXMgZGVmaW5lZCBzbyB0aGF0IHRoZXJlIGlzIG9ubHkgb25lIGNhc2Ugd2UgaGF2ZSB0byBoYW5kbGU6XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiB0b2tlbi5jb250ZW50ID0gW1xuICAgICAgICAgICAqICAgICA8c3BhbiBjbGFzcz1cInB1bmN0dWF0aW9uXCI+YGBgPC9zcGFuPixcbiAgICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJjb2RlLWxhbmd1YWdlXCI+eHh4eDwvc3Bhbj4sXG4gICAgICAgICAgICogICAgICdcXG4nLCAvLyBleGFjdGx5IG9uZSBuZXcgbGluZXMgKFxcciBvciBcXG4gb3IgXFxyXFxuKVxuICAgICAgICAgICAqICAgICA8c3BhbiBjbGFzcz1cImNvZGUtYmxvY2tcIj4uLi48L3NwYW4+LFxuICAgICAgICAgICAqICAgICAnXFxuJywgLy8gZXhhY3RseSBvbmUgbmV3IGxpbmVzIGFnYWluXG4gICAgICAgICAgICogICAgIDxzcGFuIGNsYXNzPVwicHVuY3R1YXRpb25cIj5gYGA8L3NwYW4+XG4gICAgICAgICAgICogXTtcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgY29kZUxhbmcgPSB0b2tlbi5jb250ZW50WzFdXG4gICAgICAgICAgdmFyIGNvZGVCbG9jayA9IHRva2VuLmNvbnRlbnRbM11cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb2RlTGFuZyAmJlxuICAgICAgICAgICAgY29kZUJsb2NrICYmXG4gICAgICAgICAgICBjb2RlTGFuZy50eXBlID09PSAnY29kZS1sYW5ndWFnZScgJiZcbiAgICAgICAgICAgIGNvZGVCbG9jay50eXBlID09PSAnY29kZS1ibG9jaycgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb2RlTGFuZy5jb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gdGhpcyBtaWdodCBiZSBhIGxhbmd1YWdlIHRoYXQgUHJpc20gZG9lcyBub3Qgc3VwcG9ydFxuICAgICAgICAgICAgdmFyIGFsaWFzID1cbiAgICAgICAgICAgICAgJ2xhbmd1YWdlLScgK1xuICAgICAgICAgICAgICBjb2RlTGFuZy5jb250ZW50XG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKy8pWzBdXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCkgLy8gYWRkIGFsaWFzXG4gICAgICAgICAgICBpZiAoIWNvZGVCbG9jay5hbGlhcykge1xuICAgICAgICAgICAgICBjb2RlQmxvY2suYWxpYXMgPSBbYWxpYXNdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2RlQmxvY2suYWxpYXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvZGVCbG9jay5hbGlhcyA9IFtjb2RlQmxvY2suYWxpYXMsIGFsaWFzXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29kZUJsb2NrLmFsaWFzLnB1c2goYWxpYXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpXG4gICAgfSlcbiAgICBQcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcbiAgICAgIGlmIChlbnYudHlwZSAhPT0gJ2NvZGUtYmxvY2snKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGNvZGVMYW5nID0gJydcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZW52LmNsYXNzZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjbHMgPSBlbnYuY2xhc3Nlc1tpXVxuICAgICAgICB2YXIgbWF0Y2ggPSAvbGFuZ3VhZ2UtKC4rKS8uZXhlYyhjbHMpXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGNvZGVMYW5nID0gbWF0Y2hbMV1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tjb2RlTGFuZ11cbiAgICAgIGlmICghZ3JhbW1hcikge1xuICAgICAgICBpZiAoY29kZUxhbmcgJiYgY29kZUxhbmcgIT09ICdub25lJyAmJiBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXIpIHtcbiAgICAgICAgICB2YXIgaWQgPVxuICAgICAgICAgICAgJ21kLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKS52YWx1ZU9mKCkgK1xuICAgICAgICAgICAgJy0nICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlMTYpXG4gICAgICAgICAgZW52LmF0dHJpYnV0ZXNbJ2lkJ10gPSBpZFxuICAgICAgICAgIFByaXNtLnBsdWdpbnMuYXV0b2xvYWRlci5sb2FkTGFuZ3VhZ2VzKGNvZGVMYW5nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgICAgIGlmIChlbGUpIHtcbiAgICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodChcbiAgICAgICAgICAgICAgICBlbGUudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgUHJpc20ubGFuZ3VhZ2VzW2NvZGVMYW5nXSxcbiAgICAgICAgICAgICAgICBjb2RlTGFuZ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV2ZXJzZSBQcmlzbS51dGlsLmVuY29kZVxuICAgICAgICB2YXIgY29kZSA9IGVudi5jb250ZW50LnZhbHVlXG4gICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXG4gICAgICAgIGVudi5jb250ZW50ID0gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIGdyYW1tYXIsIGNvZGVMYW5nKVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLm1kID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==