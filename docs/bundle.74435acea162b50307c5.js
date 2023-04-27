(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_elixir"],{

/***/ "./node_modules/refractor/lang/elixir.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/elixir.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = elixir
elixir.displayName = 'elixir'
elixir.aliases = []
function elixir(Prism) {
  Prism.languages.elixir = {
    comment: /#.*/m,
    // ~r"""foo""" (multi-line), ~r'''foo''' (multi-line), ~r/foo/, ~r|foo|, ~r"foo", ~r'foo', ~r(foo), ~r[foo], ~r{foo}, ~r<foo>
    regex: {
      pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
      greedy: true
    },
    string: [
      {
        // ~s"""foo""" (multi-line), ~s'''foo''' (multi-line), ~s/foo/, ~s|foo|, ~s"foo", ~s'foo', ~s(foo), ~s[foo], ~s{foo} (with interpolation care), ~s<foo>
        pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      },
      {
        pattern: /("""|''')[\s\S]*?\1/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      },
      {
        // Multi-line strings are allowed
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      }
    ],
    atom: {
      // Look-behind prevents bad highlighting of the :: operator
      pattern: /(^|[^:]):\w+/,
      lookbehind: true,
      alias: 'symbol'
    },
    // Look-ahead prevents bad highlighting of the :: operator
    'attr-name': /\w+:(?!:)/,
    capture: {
      // Look-behind prevents bad highlighting of the && operator
      pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
      lookbehind: true,
      alias: 'function'
    },
    argument: {
      // Look-behind prevents bad highlighting of the && operator
      pattern: /(^|[^&])&\d+/,
      lookbehind: true,
      alias: 'variable'
    },
    attribute: {
      pattern: /@\w+/,
      alias: 'variable'
    },
    number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
    keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
    boolean: /\b(?:true|false|nil)\b/,
    operator: [
      /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
      {
        // We don't want to match <<
        pattern: /([^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /([^>])>(?!>)/,
        lookbehind: true
      }
    ],
    punctuation: /<<|>>|[.,%\[\]{}()]/
  }
  Prism.languages.elixir.string.forEach(function(o) {
    o.inside = {
      interpolation: {
        pattern: /#\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^#\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.elixir
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZWxpeGlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9IQUFvSCxJQUFJO0FBQ3hIO0FBQ0Esb0pBQW9KLFlBQVksU0FBUztBQUN6SztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0hBQXdILElBQUk7QUFDNUgsMEpBQTBKLFVBQVUsR0FBRyxJQUFJLE1BQU0sU0FBUztBQUMxTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEdBQUcsSUFBSTtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjc0NDM1YWNlYTE2MmI1MDMwN2M1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZWxpeGlyXG5lbGl4aXIuZGlzcGxheU5hbWUgPSAnZWxpeGlyJ1xuZWxpeGlyLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZWxpeGlyKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5lbGl4aXIgPSB7XG4gICAgY29tbWVudDogLyMuKi9tLFxuICAgIC8vIH5yXCJcIlwiZm9vXCJcIlwiIChtdWx0aS1saW5lKSwgfnInJydmb28nJycgKG11bHRpLWxpbmUpLCB+ci9mb28vLCB+cnxmb298LCB+clwiZm9vXCIsIH5yJ2ZvbycsIH5yKGZvbyksIH5yW2Zvb10sIH5ye2Zvb30sIH5yPGZvbz5cbiAgICByZWdleDoge1xuICAgICAgcGF0dGVybjogL35bclJdKD86KFwiXCJcInwnJycpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKStcXDF8KFtcXC98XCInXSkoPzpcXFxcLnwoPyFcXDIpW15cXFxcXFxyXFxuXSkrXFwyfFxcKCg/OlxcXFwufFteXFxcXClcXHJcXG5dKStcXCl8XFxbKD86XFxcXC58W15cXFxcXFxdXFxyXFxuXSkrXFxdfFxceyg/OlxcXFwufFteXFxcXH1cXHJcXG5dKStcXH18PCg/OlxcXFwufFteXFxcXD5cXHJcXG5dKSs+KVt1aXNteGZyXSovLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gfnNcIlwiXCJmb29cIlwiXCIgKG11bHRpLWxpbmUpLCB+cycnJ2ZvbycnJyAobXVsdGktbGluZSksIH5zL2Zvby8sIH5zfGZvb3wsIH5zXCJmb29cIiwgfnMnZm9vJywgfnMoZm9vKSwgfnNbZm9vXSwgfnN7Zm9vfSAod2l0aCBpbnRlcnBvbGF0aW9uIGNhcmUpLCB+czxmb28+XG4gICAgICAgIHBhdHRlcm46IC9+W2NDc1N3V10oPzooXCJcIlwifCcnJykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pK1xcMXwoW1xcL3xcIiddKSg/OlxcXFwufCg/IVxcMilbXlxcXFxcXHJcXG5dKStcXDJ8XFwoKD86XFxcXC58W15cXFxcKVxcclxcbl0pK1xcKXxcXFsoPzpcXFxcLnxbXlxcXFxcXF1cXHJcXG5dKStcXF18XFx7KD86XFxcXC58I1xce1tefV0rXFx9fFteXFxcXH1cXHJcXG5dKStcXH18PCg/OlxcXFwufFteXFxcXD5cXHJcXG5dKSs+KVtjc2FdPy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgLy8gU2VlIGludGVycG9sYXRpb24gYmVsb3dcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhcIlwiXCJ8JycnKVtcXHNcXFNdKj9cXDEvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIC8vIFNlZSBpbnRlcnBvbGF0aW9uIGJlbG93XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE11bHRpLWxpbmUgc3RyaW5ncyBhcmUgYWxsb3dlZFxuICAgICAgICBwYXR0ZXJuOiAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgLy8gU2VlIGludGVycG9sYXRpb24gYmVsb3dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgYXRvbToge1xuICAgICAgLy8gTG9vay1iZWhpbmQgcHJldmVudHMgYmFkIGhpZ2hsaWdodGluZyBvZiB0aGUgOjogb3BlcmF0b3JcbiAgICAgIHBhdHRlcm46IC8oXnxbXjpdKTpcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICB9LFxuICAgIC8vIExvb2stYWhlYWQgcHJldmVudHMgYmFkIGhpZ2hsaWdodGluZyBvZiB0aGUgOjogb3BlcmF0b3JcbiAgICAnYXR0ci1uYW1lJzogL1xcdys6KD8hOikvLFxuICAgIGNhcHR1cmU6IHtcbiAgICAgIC8vIExvb2stYmVoaW5kIHByZXZlbnRzIGJhZCBoaWdobGlnaHRpbmcgb2YgdGhlICYmIG9wZXJhdG9yXG4gICAgICBwYXR0ZXJuOiAvKF58W14mXSkmKD86W14mXFxzXFxkKCldW15cXHMoKV0qfCg/PVxcKCkpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAgYXJndW1lbnQ6IHtcbiAgICAgIC8vIExvb2stYmVoaW5kIHByZXZlbnRzIGJhZCBoaWdobGlnaHRpbmcgb2YgdGhlICYmIG9wZXJhdG9yXG4gICAgICBwYXR0ZXJuOiAvKF58W14mXSkmXFxkKy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIGF0dHJpYnV0ZToge1xuICAgICAgcGF0dGVybjogL0BcXHcrLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBudW1iZXI6IC9cXGIoPzowW2JveF1bYS1mXFxkX10rfFxcZFtcXGRfXSopKD86XFwuW1xcZF9dKyk/KD86ZVsrLV0/W1xcZF9dKyk/XFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OmFmdGVyfGFsaWFzfGFuZHxjYXNlfGNhdGNofGNvbmR8ZGVmKD86Y2FsbGJhY2t8ZXhjZXB0aW9ufGltcGx8bW9kdWxlfHB8cHJvdG9jb2x8c3RydWN0KT98ZG98ZWxzZXxlbmR8Zm58Zm9yfGlmfGltcG9ydHxub3R8b3J8cmVxdWlyZXxyZXNjdWV8dHJ5fHVubGVzc3x1c2V8d2hlbilcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlfG5pbClcXGIvLFxuICAgIG9wZXJhdG9yOiBbXG4gICAgICAvXFxiaW5cXGJ8JiY/fFxcfFt8Pl0/fFxcXFxcXFxcfDo6fFxcLlxcLlxcLj98XFwrXFwrP3wtWy0+XT98PFstPT5dfD49fCE9PT98XFxCIXw9KD86PT0/fFs+fl0pP3xbKlxcL15dLyxcbiAgICAgIHtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBtYXRjaCA8PFxuICAgICAgICBwYXR0ZXJuOiAvKFtePF0pPCg/ITwpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBtYXRjaCA+PlxuICAgICAgICBwYXR0ZXJuOiAvKFtePl0pPig/IT4pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC88PHw+PnxbLiwlXFxbXFxde30oKV0vXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLmVsaXhpci5zdHJpbmcuZm9yRWFjaChmdW5jdGlvbihvKSB7XG4gICAgby5pbnNpZGUgPSB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC8jXFx7W159XStcXH0vLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eI1xce3xcXH0kLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuZWxpeGlyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9