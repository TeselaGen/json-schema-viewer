(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_lisp"],{

/***/ "./node_modules/refractor/lang/lisp.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/lisp.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = lisp
lisp.displayName = 'lisp'
lisp.aliases = []
function lisp(Prism) {
  ;(function(Prism) {
    // Functions to construct regular expressions
    // simple form
    // e.g. (interactive ... or (interactive)
    function simple_form(name) {
      return RegExp('(\\()' + name + '(?=[\\s\\)])')
    } // booleans and numbers
    function primitive(pattern) {
      return RegExp('([\\s([])' + pattern + '(?=[\\s)])')
    } // Patterns in regular expressions
    // Symbol name. See https://www.gnu.org/software/emacs/manual/html_node/elisp/Symbol-Type.html
    // & and : are excluded as they are usually used for special purposes
    var symbol = '[-+*/_~!@$%^=<>{}\\w]+' // symbol starting with & used in function arguments
    var marker = '&' + symbol // Open parenthesis for look-behind
    var par = '(\\()'
    var endpar = '(?=\\))' // End the pattern with look-ahead space
    var space = '(?=\\s)'
    var language = {
      // Three or four semicolons are considered a heading.
      // See https://www.gnu.org/software/emacs/manual/html_node/elisp/Comment-Tips.html
      heading: {
        pattern: /;;;.*/,
        alias: ['comment', 'title']
      },
      comment: /;.*/,
      string: {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: true,
        inside: {
          argument: /[-A-Z]+(?=[.,\s])/,
          symbol: RegExp('`' + symbol + "'")
        }
      },
      'quoted-symbol': {
        pattern: RegExp("#?'" + symbol),
        alias: ['variable', 'symbol']
      },
      'lisp-property': {
        pattern: RegExp(':' + symbol),
        alias: 'property'
      },
      splice: {
        pattern: RegExp(',@?' + symbol),
        alias: ['symbol', 'variable']
      },
      keyword: [
        {
          pattern: RegExp(
            par +
              '(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)' +
              space
          ),
          lookbehind: true
        },
        {
          pattern: RegExp(
            par +
              '(?:for|do|collect|return|finally|append|concat|in|by)' +
              space
          ),
          lookbehind: true
        }
      ],
      declare: {
        pattern: simple_form('declare'),
        lookbehind: true,
        alias: 'keyword'
      },
      interactive: {
        pattern: simple_form('interactive'),
        lookbehind: true,
        alias: 'keyword'
      },
      boolean: {
        pattern: primitive('(?:t|nil)'),
        lookbehind: true
      },
      number: {
        pattern: primitive('[-+]?\\d+(?:\\.\\d*)?'),
        lookbehind: true
      },
      defvar: {
        pattern: RegExp(par + 'def(?:var|const|custom|group)\\s+' + symbol),
        lookbehind: true,
        inside: {
          keyword: /^def[a-z]+/,
          variable: RegExp(symbol)
        }
      },
      defun: {
        pattern: RegExp(
          par +
            '(?:cl-)?(?:defun\\*?|defmacro)\\s+' +
            symbol +
            '\\s+\\([\\s\\S]*?\\)'
        ),
        lookbehind: true,
        inside: {
          keyword: /^(?:cl-)?def\S+/,
          // See below, this property needs to be defined later so that it can
          // reference the language object.
          arguments: null,
          function: {
            pattern: RegExp('(^\\s)' + symbol),
            lookbehind: true
          },
          punctuation: /[()]/
        }
      },
      lambda: {
        pattern: RegExp(par + 'lambda\\s+\\((?:&?' + symbol + '\\s*)*\\)'),
        lookbehind: true,
        inside: {
          keyword: /^lambda/,
          // See below, this property needs to be defined later so that it can
          // reference the language object.
          arguments: null,
          punctuation: /[()]/
        }
      },
      car: {
        pattern: RegExp(par + symbol),
        lookbehind: true
      },
      punctuation: [
        // open paren, brackets, and close paren
        /(['`,]?\(|[)\[\]])/, // cons
        {
          pattern: /(\s)\.(?=\s)/,
          lookbehind: true
        }
      ]
    }
    var arg = {
      'lisp-marker': RegExp(marker),
      rest: {
        argument: {
          pattern: RegExp(symbol),
          alias: 'variable'
        },
        varform: {
          pattern: RegExp(par + symbol + '\\s+\\S[\\s\\S]*' + endpar),
          lookbehind: true,
          inside: {
            string: language.string,
            boolean: language.boolean,
            number: language.number,
            symbol: language.symbol,
            punctuation: /[()]/
          }
        }
      }
    }
    var forms = '\\S+(?:\\s+\\S+)*'
    var arglist = {
      pattern: RegExp(par + '[\\s\\S]*' + endpar),
      lookbehind: true,
      inside: {
        'rest-vars': {
          pattern: RegExp('&(?:rest|body)\\s+' + forms),
          inside: arg
        },
        'other-marker-vars': {
          pattern: RegExp('&(?:optional|aux)\\s+' + forms),
          inside: arg
        },
        keys: {
          pattern: RegExp('&key\\s+' + forms + '(?:\\s+&allow-other-keys)?'),
          inside: arg
        },
        argument: {
          pattern: RegExp(symbol),
          alias: 'variable'
        },
        punctuation: /[()]/
      }
    }
    language['lambda'].inside.arguments = arglist
    language['defun'].inside.arguments = Prism.util.clone(arglist)
    language['defun'].inside.arguments.inside.sublist = arglist
    Prism.languages.lisp = language
    Prism.languages.elisp = language
    Prism.languages.emacs = language
    Prism.languages['emacs-lisp'] = language
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbGlzcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsT0FBTztBQUNQLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuOTZlMDRiMTNkMDNhOGRhNzQ0MjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXNwXG5saXNwLmRpc3BsYXlOYW1lID0gJ2xpc3AnXG5saXNwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbGlzcChQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgLy8gRnVuY3Rpb25zIHRvIGNvbnN0cnVjdCByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgLy8gc2ltcGxlIGZvcm1cbiAgICAvLyBlLmcuIChpbnRlcmFjdGl2ZSAuLi4gb3IgKGludGVyYWN0aXZlKVxuICAgIGZ1bmN0aW9uIHNpbXBsZV9mb3JtKG5hbWUpIHtcbiAgICAgIHJldHVybiBSZWdFeHAoJyhcXFxcKCknICsgbmFtZSArICcoPz1bXFxcXHNcXFxcKV0pJylcbiAgICB9IC8vIGJvb2xlYW5zIGFuZCBudW1iZXJzXG4gICAgZnVuY3Rpb24gcHJpbWl0aXZlKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBSZWdFeHAoJyhbXFxcXHMoW10pJyArIHBhdHRlcm4gKyAnKD89W1xcXFxzKV0pJylcbiAgICB9IC8vIFBhdHRlcm5zIGluIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICAvLyBTeW1ib2wgbmFtZS4gU2VlIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvZW1hY3MvbWFudWFsL2h0bWxfbm9kZS9lbGlzcC9TeW1ib2wtVHlwZS5odG1sXG4gICAgLy8gJiBhbmQgOiBhcmUgZXhjbHVkZWQgYXMgdGhleSBhcmUgdXN1YWxseSB1c2VkIGZvciBzcGVjaWFsIHB1cnBvc2VzXG4gICAgdmFyIHN5bWJvbCA9ICdbLSsqL19+IUAkJV49PD57fVxcXFx3XSsnIC8vIHN5bWJvbCBzdGFydGluZyB3aXRoICYgdXNlZCBpbiBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICB2YXIgbWFya2VyID0gJyYnICsgc3ltYm9sIC8vIE9wZW4gcGFyZW50aGVzaXMgZm9yIGxvb2stYmVoaW5kXG4gICAgdmFyIHBhciA9ICcoXFxcXCgpJ1xuICAgIHZhciBlbmRwYXIgPSAnKD89XFxcXCkpJyAvLyBFbmQgdGhlIHBhdHRlcm4gd2l0aCBsb29rLWFoZWFkIHNwYWNlXG4gICAgdmFyIHNwYWNlID0gJyg/PVxcXFxzKSdcbiAgICB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgICAvLyBUaHJlZSBvciBmb3VyIHNlbWljb2xvbnMgYXJlIGNvbnNpZGVyZWQgYSBoZWFkaW5nLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvZW1hY3MvbWFudWFsL2h0bWxfbm9kZS9lbGlzcC9Db21tZW50LVRpcHMuaHRtbFxuICAgICAgaGVhZGluZzoge1xuICAgICAgICBwYXR0ZXJuOiAvOzs7LiovLFxuICAgICAgICBhbGlhczogWydjb21tZW50JywgJ3RpdGxlJ11cbiAgICAgIH0sXG4gICAgICBjb21tZW50OiAvOy4qLyxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBhcmd1bWVudDogL1stQS1aXSsoPz1bLixcXHNdKS8sXG4gICAgICAgICAgc3ltYm9sOiBSZWdFeHAoJ2AnICsgc3ltYm9sICsgXCInXCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAncXVvdGVkLXN5bWJvbCc6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKFwiIz8nXCIgKyBzeW1ib2wpLFxuICAgICAgICBhbGlhczogWyd2YXJpYWJsZScsICdzeW1ib2wnXVxuICAgICAgfSxcbiAgICAgICdsaXNwLXByb3BlcnR5Jzoge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJzonICsgc3ltYm9sKSxcbiAgICAgICAgYWxpYXM6ICdwcm9wZXJ0eSdcbiAgICAgIH0sXG4gICAgICBzcGxpY2U6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCcsQD8nICsgc3ltYm9sKSxcbiAgICAgICAgYWxpYXM6IFsnc3ltYm9sJywgJ3ZhcmlhYmxlJ11cbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgICBwYXIgK1xuICAgICAgICAgICAgICAnKD86KD86bGV4aWNhbC0pP2xldFxcXFwqP3woPzpjbC0pP2xldGZ8aWZ8d2hlbnx3aGlsZXx1bmxlc3N8Y29uc3xjbC1sb29wfGFuZHxvcnxub3R8Y29uZHxzZXRxfGVycm9yfG1lc3NhZ2V8bnVsbHxyZXF1aXJlfHByb3ZpZGV8dXNlLXBhY2thZ2UpJyArXG4gICAgICAgICAgICAgIHNwYWNlXG4gICAgICAgICAgKSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgICBwYXIgK1xuICAgICAgICAgICAgICAnKD86Zm9yfGRvfGNvbGxlY3R8cmV0dXJufGZpbmFsbHl8YXBwZW5kfGNvbmNhdHxpbnxieSknICtcbiAgICAgICAgICAgICAgc3BhY2VcbiAgICAgICAgICApLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRlY2xhcmU6IHtcbiAgICAgICAgcGF0dGVybjogc2ltcGxlX2Zvcm0oJ2RlY2xhcmUnKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgfSxcbiAgICAgIGludGVyYWN0aXZlOiB7XG4gICAgICAgIHBhdHRlcm46IHNpbXBsZV9mb3JtKCdpbnRlcmFjdGl2ZScpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICB9LFxuICAgICAgYm9vbGVhbjoge1xuICAgICAgICBwYXR0ZXJuOiBwcmltaXRpdmUoJyg/OnR8bmlsKScpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46IHByaW1pdGl2ZSgnWy0rXT9cXFxcZCsoPzpcXFxcLlxcXFxkKik/JyksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWZ2YXI6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKHBhciArICdkZWYoPzp2YXJ8Y29uc3R8Y3VzdG9tfGdyb3VwKVxcXFxzKycgKyBzeW1ib2wpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBrZXl3b3JkOiAvXmRlZlthLXpdKy8sXG4gICAgICAgICAgdmFyaWFibGU6IFJlZ0V4cChzeW1ib2wpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZ1bjoge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgcGFyICtcbiAgICAgICAgICAgICcoPzpjbC0pPyg/OmRlZnVuXFxcXCo/fGRlZm1hY3JvKVxcXFxzKycgK1xuICAgICAgICAgICAgc3ltYm9sICtcbiAgICAgICAgICAgICdcXFxccytcXFxcKFtcXFxcc1xcXFxTXSo/XFxcXCknXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGtleXdvcmQ6IC9eKD86Y2wtKT9kZWZcXFMrLyxcbiAgICAgICAgICAvLyBTZWUgYmVsb3csIHRoaXMgcHJvcGVydHkgbmVlZHMgdG8gYmUgZGVmaW5lZCBsYXRlciBzbyB0aGF0IGl0IGNhblxuICAgICAgICAgIC8vIHJlZmVyZW5jZSB0aGUgbGFuZ3VhZ2Ugb2JqZWN0LlxuICAgICAgICAgIGFyZ3VtZW50czogbnVsbCxcbiAgICAgICAgICBmdW5jdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKCcoXlxcXFxzKScgKyBzeW1ib2wpLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9bKCldL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGFtYmRhOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChwYXIgKyAnbGFtYmRhXFxcXHMrXFxcXCgoPzomPycgKyBzeW1ib2wgKyAnXFxcXHMqKSpcXFxcKScpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBrZXl3b3JkOiAvXmxhbWJkYS8sXG4gICAgICAgICAgLy8gU2VlIGJlbG93LCB0aGlzIHByb3BlcnR5IG5lZWRzIHRvIGJlIGRlZmluZWQgbGF0ZXIgc28gdGhhdCBpdCBjYW5cbiAgICAgICAgICAvLyByZWZlcmVuY2UgdGhlIGxhbmd1YWdlIG9iamVjdC5cbiAgICAgICAgICBhcmd1bWVudHM6IG51bGwsXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9bKCldL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FyOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChwYXIgKyBzeW1ib2wpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IFtcbiAgICAgICAgLy8gb3BlbiBwYXJlbiwgYnJhY2tldHMsIGFuZCBjbG9zZSBwYXJlblxuICAgICAgICAvKFsnYCxdP1xcKHxbKVxcW1xcXV0pLywgLy8gY29uc1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXHMpXFwuKD89XFxzKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIHZhciBhcmcgPSB7XG4gICAgICAnbGlzcC1tYXJrZXInOiBSZWdFeHAobWFya2VyKSxcbiAgICAgIHJlc3Q6IHtcbiAgICAgICAgYXJndW1lbnQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoc3ltYm9sKSxcbiAgICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgICAgICB9LFxuICAgICAgICB2YXJmb3JtOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKHBhciArIHN5bWJvbCArICdcXFxccytcXFxcU1tcXFxcc1xcXFxTXSonICsgZW5kcGFyKSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgc3RyaW5nOiBsYW5ndWFnZS5zdHJpbmcsXG4gICAgICAgICAgICBib29sZWFuOiBsYW5ndWFnZS5ib29sZWFuLFxuICAgICAgICAgICAgbnVtYmVyOiBsYW5ndWFnZS5udW1iZXIsXG4gICAgICAgICAgICBzeW1ib2w6IGxhbmd1YWdlLnN5bWJvbCxcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZvcm1zID0gJ1xcXFxTKyg/OlxcXFxzK1xcXFxTKykqJ1xuICAgIHZhciBhcmdsaXN0ID0ge1xuICAgICAgcGF0dGVybjogUmVnRXhwKHBhciArICdbXFxcXHNcXFxcU10qJyArIGVuZHBhciksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyZXN0LXZhcnMnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCcmKD86cmVzdHxib2R5KVxcXFxzKycgKyBmb3JtcyksXG4gICAgICAgICAgaW5zaWRlOiBhcmdcbiAgICAgICAgfSxcbiAgICAgICAgJ290aGVyLW1hcmtlci12YXJzJzoge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnJig/Om9wdGlvbmFsfGF1eClcXFxccysnICsgZm9ybXMpLFxuICAgICAgICAgIGluc2lkZTogYXJnXG4gICAgICAgIH0sXG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJyZrZXlcXFxccysnICsgZm9ybXMgKyAnKD86XFxcXHMrJmFsbG93LW90aGVyLWtleXMpPycpLFxuICAgICAgICAgIGluc2lkZTogYXJnXG4gICAgICAgIH0sXG4gICAgICAgIGFyZ3VtZW50OiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKHN5bWJvbCksXG4gICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgfSxcbiAgICAgICAgcHVuY3R1YXRpb246IC9bKCldL1xuICAgICAgfVxuICAgIH1cbiAgICBsYW5ndWFnZVsnbGFtYmRhJ10uaW5zaWRlLmFyZ3VtZW50cyA9IGFyZ2xpc3RcbiAgICBsYW5ndWFnZVsnZGVmdW4nXS5pbnNpZGUuYXJndW1lbnRzID0gUHJpc20udXRpbC5jbG9uZShhcmdsaXN0KVxuICAgIGxhbmd1YWdlWydkZWZ1biddLmluc2lkZS5hcmd1bWVudHMuaW5zaWRlLnN1Ymxpc3QgPSBhcmdsaXN0XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmxpc3AgPSBsYW5ndWFnZVxuICAgIFByaXNtLmxhbmd1YWdlcy5lbGlzcCA9IGxhbmd1YWdlXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmVtYWNzID0gbGFuZ3VhZ2VcbiAgICBQcmlzbS5sYW5ndWFnZXNbJ2VtYWNzLWxpc3AnXSA9IGxhbmd1YWdlXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==