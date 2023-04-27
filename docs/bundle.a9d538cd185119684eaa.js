(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_actionscript"],{

/***/ "./node_modules/refractor/lang/actionscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/actionscript.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = actionscript
actionscript.displayName = 'actionscript'
actionscript.aliases = []
function actionscript(Prism) {
  Prism.languages.actionscript = Prism.languages.extend('javascript', {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
  })
  Prism.languages.actionscript['class-name'].alias = 'function'
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      }
    })
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYWN0aW9uc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmE5ZDUzOGNkMTg1MTE5Njg0ZWFhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uc2NyaXB0XG5hY3Rpb25zY3JpcHQuZGlzcGxheU5hbWUgPSAnYWN0aW9uc2NyaXB0J1xuYWN0aW9uc2NyaXB0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYWN0aW9uc2NyaXB0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hY3Rpb25zY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhc2NyaXB0Jywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzphc3xicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmdW5jdGlvbnxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxpbnRlcm5hbHxpc3xuYXRpdmV8bmV3fG51bGx8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dXNlfHZhcnx2b2lkfHdoaWxlfHdpdGh8ZHluYW1pY3xlYWNofGZpbmFsfGdldHxpbmNsdWRlfG5hbWVzcGFjZXxuYXRpdmV8b3ZlcnJpZGV8c2V0fHN0YXRpYylcXGIvLFxuICAgIG9wZXJhdG9yOiAvXFwrXFwrfC0tfCg/OlsrXFwtKlxcLyVeXXwmJj98XFx8XFx8P3w8PD98Pj4/Pj98WyE9XT0/KT0/fFt+P0BdL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuYWN0aW9uc2NyaXB0WydjbGFzcy1uYW1lJ10uYWxpYXMgPSAnZnVuY3Rpb24nXG4gIGlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYWN0aW9uc2NyaXB0JywgJ3N0cmluZycsIHtcbiAgICAgIHhtbDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W14uXSk8XFwvP1xcdysoPzpcXHMrW15cXHM+XFwvPV0rPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDIpW15cXFxcXSkqXFwyKSpcXHMqXFwvPz4vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9