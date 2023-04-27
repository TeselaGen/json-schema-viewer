(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_dart"],{

/***/ "./node_modules/refractor/lang/dart.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/dart.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = dart
dart.displayName = 'dart'
dart.aliases = []
function dart(Prism) {
  Prism.languages.dart = Prism.languages.extend('clike', {
    string: [
      {
        pattern: /r?("""|''')[\s\S]*?\1/,
        greedy: true
      },
      {
        pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    keyword: [
      /\b(?:async|sync|yield)\*/,
      /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
    ],
    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
  })
  Prism.languages.insertBefore('dart', 'function', {
    metadata: {
      pattern: /@\w+/,
      alias: 'symbol'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuMTczNDI2ZGU4Nzc5Njg5ODcxOWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkYXJ0XG5kYXJ0LmRpc3BsYXlOYW1lID0gJ2RhcnQnXG5kYXJ0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZGFydChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZGFydCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIHN0cmluZzogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvcj8oXCJcIlwifCcnJylbXFxzXFxTXSo/XFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvcj8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBrZXl3b3JkOiBbXG4gICAgICAvXFxiKD86YXN5bmN8c3luY3x5aWVsZClcXCovLFxuICAgICAgL1xcYig/OmFic3RyYWN0fGFzc2VydHxhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZGVmZXJyZWR8ZG98ZHluYW1pY3xlbHNlfGVudW18ZXhwb3J0fGV4dGVybmFsfGV4dGVuZHN8ZmFjdG9yeXxmaW5hbHxmaW5hbGx5fGZvcnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58bGlicmFyeXxuZXd8bnVsbHxvcGVyYXRvcnxwYXJ0fHJldGhyb3d8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVkZWZ8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvXG4gICAgXSxcbiAgICBvcGVyYXRvcjogL1xcYmlzIXxcXGIoPzphc3xpcylcXGJ8XFwrXFwrfC0tfCYmfFxcfFxcfHw8PD0/fD4+PT98fig/OlxcLz0/KT98WytcXC0qXFwvJSZefD0hPD5dPT98XFw/L1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdkYXJ0JywgJ2Z1bmN0aW9uJywge1xuICAgIG1ldGFkYXRhOiB7XG4gICAgICBwYXR0ZXJuOiAvQFxcdysvLFxuICAgICAgYWxpYXM6ICdzeW1ib2wnXG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==