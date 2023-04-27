(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_groovy"],{

/***/ "./node_modules/refractor/lang/groovy.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/groovy.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = groovy
groovy.displayName = 'groovy'
groovy.aliases = []
function groovy(Prism) {
  Prism.languages.groovy = Prism.languages.extend('clike', {
    keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    string: [
      {
        pattern: /("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/,
        greedy: true
      },
      {
        pattern: /(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
    operator: {
      pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: true
    },
    punctuation: /\.+|[{}[\];(),:$]/
  })
  Prism.languages.insertBefore('groovy', 'string', {
    shebang: {
      pattern: /#!.+/,
      alias: 'comment'
    }
  })
  Prism.languages.insertBefore('groovy', 'punctuation', {
    'spock-block': /\b(?:setup|given|when|then|and|cleanup|expect|where):/
  })
  Prism.languages.insertBefore('groovy', 'function', {
    annotation: {
      alias: 'punctuation',
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    }
  }) // Handle string interpolation
  Prism.hooks.add('wrap', function(env) {
    if (env.language === 'groovy' && env.type === 'string') {
      var delimiter = env.content.value[0]
      if (delimiter != "'") {
        var pattern = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/
        if (delimiter === '$') {
          pattern = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/
        } // To prevent double HTML-encoding we have to decode env.content first
        env.content.value = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(env.content.value, {
          expression: {
            pattern: pattern,
            lookbehind: true,
            inside: Prism.languages.groovy
          }
        })
        env.classes.push(delimiter === '/' ? 'regex' : 'gstring')
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ3Jvb3Z5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLElBQUk7QUFDaEY7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLElBQUk7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBLHNDQUFzQyxLQUFLO0FBQzNDLFNBQVM7QUFDVDtBQUNBLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuOTk2ODYxZmUwMWE4MmY4OTZmNmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBncm9vdnlcbmdyb292eS5kaXNwbGF5TmFtZSA9ICdncm9vdnknXG5ncm9vdnkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBncm9vdnkoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmdyb292eSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzphc3xkZWZ8aW58YWJzdHJhY3R8YXNzZXJ0fGJvb2xlYW58YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmbG9hdHxmb3J8Z290b3xpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnN0YW5jZW9mfGludHxpbnRlcmZhY2V8bG9uZ3xuYXRpdmV8bmV3fHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzaG9ydHxzdGF0aWN8c3RyaWN0ZnB8c3VwZXJ8c3dpdGNofHN5bmNocm9uaXplZHx0aGlzfHRocm93fHRocm93c3x0cmFpdHx0cmFuc2llbnR8dHJ5fHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhcIlwiXCJ8JycnKVtcXHNcXFNdKj9cXDF8KD86XFwkXFwvKSg/OlxcJFxcL1xcJHxbXFxzXFxTXSkqP1xcL1xcJC8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhbXCInXFwvXSkoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBudW1iZXI6IC9cXGIoPzowYlswMV9dK3wweFtcXGRhLWZfXSsoPzpcXC5bXFxkYS1mX3BcXC1dKyk/fFtcXGRfXSsoPzpcXC5bXFxkX10rKT8oPzplWystXT9bXFxkXSspPylbZ2xpZGZdP1xcYi9pLFxuICAgIG9wZXJhdG9yOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14uXSkoPzp+fD09P34/fFxcP1suOl0/fFxcKig/OlsuPV18XFwqPT8pP3xcXC5bQCZdfFxcLlxcLjx8XFwuezEsMn0oPyFcXC4pfC1bLT0+XT98XFwrWys9XT98IT0/fDwoPzo8PT98PT4/KT98Pig/Oj4+Pz0/fD0pP3wmWyY9XT98XFx8W3w9XT98XFwvPT98XFxePT98JT0/KS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1xcLit8W3t9W1xcXTsoKSw6JF0vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2dyb292eScsICdzdHJpbmcnLCB7XG4gICAgc2hlYmFuZzoge1xuICAgICAgcGF0dGVybjogLyMhLisvLFxuICAgICAgYWxpYXM6ICdjb21tZW50J1xuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZ3Jvb3Z5JywgJ3B1bmN0dWF0aW9uJywge1xuICAgICdzcG9jay1ibG9jayc6IC9cXGIoPzpzZXR1cHxnaXZlbnx3aGVufHRoZW58YW5kfGNsZWFudXB8ZXhwZWN0fHdoZXJlKTovXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2dyb292eScsICdmdW5jdGlvbicsIHtcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJyxcbiAgICAgIHBhdHRlcm46IC8oXnxbXi5dKUBcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9XG4gIH0pIC8vIEhhbmRsZSBzdHJpbmcgaW50ZXJwb2xhdGlvblxuICBQcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcbiAgICBpZiAoZW52Lmxhbmd1YWdlID09PSAnZ3Jvb3Z5JyAmJiBlbnYudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkZWxpbWl0ZXIgPSBlbnYuY29udGVudC52YWx1ZVswXVxuICAgICAgaWYgKGRlbGltaXRlciAhPSBcIidcIikge1xuICAgICAgICB2YXIgcGF0dGVybiA9IC8oW15cXFxcXSkoPzpcXCQoPzpcXHsuKj9cXH18W1xcdy5dKykpL1xuICAgICAgICBpZiAoZGVsaW1pdGVyID09PSAnJCcpIHtcbiAgICAgICAgICBwYXR0ZXJuID0gLyhbXlxcJF0pKD86XFwkKD86XFx7Lio/XFx9fFtcXHcuXSspKS9cbiAgICAgICAgfSAvLyBUbyBwcmV2ZW50IGRvdWJsZSBIVE1MLWVuY29kaW5nIHdlIGhhdmUgdG8gZGVjb2RlIGVudi5jb250ZW50IGZpcnN0XG4gICAgICAgIGVudi5jb250ZW50LnZhbHVlID0gZW52LmNvbnRlbnQudmFsdWVcbiAgICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJylcbiAgICAgICAgZW52LmNvbnRlbnQgPSBQcmlzbS5oaWdobGlnaHQoZW52LmNvbnRlbnQudmFsdWUsIHtcbiAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmdyb292eVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZW52LmNsYXNzZXMucHVzaChkZWxpbWl0ZXIgPT09ICcvJyA/ICdyZWdleCcgOiAnZ3N0cmluZycpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==