(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_tcl"],{

/***/ "./node_modules/refractor/lang/tcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tcl.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = tcl
tcl.displayName = 'tcl'
tcl.aliases = []
function tcl(Prism) {
  Prism.languages.tcl = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: {
      pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
        lookbehind: true
      },
      {
        pattern: /(\$){[^}]+}/,
        lookbehind: true
      },
      {
        pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
        lookbehind: true
      }
    ],
    function: {
      pattern: /(^\s*proc[ \t]+)[^\s]+/m,
      lookbehind: true
    },
    builtin: [
      {
        pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
        lookbehind: true
      },
      /\b(?:elseif|else)\b/
    ],
    scope: {
      pattern: /(^\s*)(?:global|upvar|variable)\b/m,
      lookbehind: true,
      alias: 'constant'
    },
    keyword: {
      pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
      lookbehind: true
    },
    operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
    punctuation: /[{}()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdGNsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUJBQXVCLEdBQUcsR0FBRztBQUM3QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSIsImZpbGUiOiJidW5kbGUuOTFmYzJkNmMxOGY2NTVhNjg4NDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0Y2xcbnRjbC5kaXNwbGF5TmFtZSA9ICd0Y2wnXG50Y2wuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB0Y2woUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnRjbCA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgdmFyaWFibGU6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhcXCQpKD86OjopPyg/OlthLXpBLVowLTldKzo6KSpcXHcrLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhcXCQpe1tefV0rfS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXlxccypzZXRbIFxcdF0rKSg/Ojo6KT8oPzpbYS16QS1aMC05XSs6OikqXFx3Ky9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLyheXFxzKnByb2NbIFxcdF0rKVteXFxzXSsvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGJ1aWx0aW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyheXFxzKikoPzpwcm9jfHJldHVybnxjbGFzc3xlcnJvcnxldmFsfGV4aXR8Zm9yfGZvcmVhY2h8aWZ8c3dpdGNofHdoaWxlfGJyZWFrfGNvbnRpbnVlKVxcYi9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgL1xcYig/OmVsc2VpZnxlbHNlKVxcYi9cbiAgICBdLFxuICAgIHNjb3BlOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/Omdsb2JhbHx1cHZhcnx2YXJpYWJsZSlcXGIvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2NvbnN0YW50J1xuICAgIH0sXG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKnxcXFspKD86YWZ0ZXJ8YXBwZW5kfGFwcGx5fGFycmF5fGF1dG9fKD86ZXhlY29rfGltcG9ydHxsb2FkfG1raW5kZXh8cXVhbGlmeXxyZXNldCl8YXV0b21raW5kZXhfb2xkfGJnZXJyb3J8YmluYXJ5fGNhdGNofGNkfGNoYW58Y2xvY2t8Y2xvc2V8Y29uY2F0fGRkZXxkaWN0fGVuY29kaW5nfGVvZnxleGVjfGV4cHJ8ZmJsb2NrZWR8ZmNvbmZpZ3VyZXxmY29weXxmaWxlKD86ZXZlbnR8bmFtZSk/fGZsdXNofGdldHN8Z2xvYnxoaXN0b3J5fGh0dHB8aW5jcnxpbmZvfGludGVycHxqb2lufGxhcHBlbmR8bGFzc2lnbnxsaW5kZXh8bGluc2VydHxsaXN0fGxsZW5ndGh8bG9hZHxscmFuZ2V8bHJlcGVhdHxscmVwbGFjZXxscmV2ZXJzZXxsc2VhcmNofGxzZXR8bHNvcnR8bWF0aCg/OmZ1bmN8b3ApfG1lbW9yeXxtc2djYXR8bmFtZXNwYWNlfG9wZW58cGFja2FnZXxwYXJyYXl8cGlkfHBrZ19ta0luZGV4fHBsYXRmb3JtfHB1dHN8cHdkfHJlX3N5bnRheHxyZWFkfHJlZmNoYW58cmVnZXhwfHJlZ2lzdHJ5fHJlZ3N1YnxyZW5hbWV8U2FmZV9CYXNlfHNjYW58c2Vla3xzZXR8c29ja2V0fHNvdXJjZXxzcGxpdHxzdHJpbmd8c3Vic3R8VGNsfHRjbCg/Ol9lbmRPZldvcmR8X2ZpbmRMaWJyYXJ5fHN0YXJ0T2YoPzpOZXh0fFByZXZpb3VzKVdvcmR8d29yZEJyZWFrKD86QWZ0ZXJ8QmVmb3JlKXx0ZXN0fHZhcnMpfHRlbGx8dGltZXx0bXx0cmFjZXx1bmtub3dufHVubG9hZHx1bnNldHx1cGRhdGV8dXBsZXZlbHx2d2FpdClcXGIvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIG9wZXJhdG9yOiAvIT0/fFxcKlxcKj98PT18JiY/fFxcfFxcfD98PFs9PF0/fD5bPT5dP3xbLSt+XFwvJT9eXXxcXGIoPzplcXxuZXxpbnxuaSlcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9KClcXFtcXF1dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9