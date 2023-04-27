(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_icon"],{

/***/ "./node_modules/refractor/lang/icon.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/icon.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = icon
icon.displayName = 'icon'
icon.aliases = []
function icon(Prism) {
  Prism.languages.icon = {
    comment: /#.*/,
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
    'builtin-keyword': {
      pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
      alias: 'variable'
    },
    directive: {
      pattern: /\$\w+/,
      alias: 'builtin'
    },
    keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
    function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
    operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
    punctuation: /[\[\](){},;]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSIsImZpbGUiOiJidW5kbGUuMGM0MDdiOWRhYzE0YTQwMjIyMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpY29uXG5pY29uLmRpc3BsYXlOYW1lID0gJ2ljb24nXG5pY29uLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaWNvbihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaWNvbiA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86KD8hXFwxKVteXFxcXFxcclxcbl9dfFxcXFwufF8oPyFcXDEpKD86XFxyXFxufFtcXHNcXFNdKSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgbnVtYmVyOiAvXFxiKD86XFxkK3JbYS16XFxkXSt8XFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspPylcXGJ8XFwuXFxkK1xcYi9pLFxuICAgICdidWlsdGluLWtleXdvcmQnOiB7XG4gICAgICBwYXR0ZXJuOiAvJig/OmFsbG9jYXRlZHxhc2NpaXxjbG9ja3xjb2xsZWN0aW9uc3xjc2V0fGN1cnJlbnR8ZGF0ZXxkYXRlbGluZXxkaWdpdHN8ZHVtcHxlfGVycm9yKD86bnVtYmVyfHRleHR8dmFsdWUpP3xlcnJvdXR8ZmFpbHxmZWF0dXJlc3xmaWxlfGhvc3R8aW5wdXR8bGNhc2V8bGV0dGVyc3xsZXZlbHxsaW5lfG1haW58bnVsbHxvdXRwdXR8cGhpfHBpfHBvc3xwcm9nbmFtZXxyYW5kb218cmVnaW9uc3xzb3VyY2V8c3RvcmFnZXxzdWJqZWN0fHRpbWV8dHJhY2V8dWNhc2V8dmVyc2lvbilcXGIvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIGRpcmVjdGl2ZToge1xuICAgICAgcGF0dGVybjogL1xcJFxcdysvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmJyZWFrfGJ5fGNhc2V8Y3JlYXRlfGRlZmF1bHR8ZG98ZWxzZXxlbmR8ZXZlcnl8ZmFpbHxnbG9iYWx8aWZ8aW5pdGlhbHxpbnZvY2FibGV8bGlua3xsb2NhbHxuZXh0fG5vdHxvZnxwcm9jZWR1cmV8cmVjb3JkfHJlcGVhdHxyZXR1cm58c3RhdGljfHN1c3BlbmR8dGhlbnx0b3x1bnRpbHx3aGlsZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvKD8hXFxkKVxcdysoPz1cXHMqWyh7XXxcXHMqIVxccypcXFspLyxcbiAgICBvcGVyYXRvcjogL1srLV06KD8hPSl8KD86W1xcLz9AXiUmXXxcXCtcXCs/fC0tP3w9PT89P3x+PT0/PT98XFwqXFwqP3xcXHxcXHxcXHw/fDwoPzotPj98PD89Pyl8Pj4/PT8pKD86Oj0pP3w6KD86PTo/KT98WyEuXFxcXHx+XS8sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCl7fSw7XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==