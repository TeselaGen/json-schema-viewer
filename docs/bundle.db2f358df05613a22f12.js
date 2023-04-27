(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_rip"],{

/***/ "./node_modules/refractor/lang/rip.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/rip.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = rip
rip.displayName = 'rip'
rip.aliases = []
function rip(Prism) {
  Prism.languages.rip = {
    comment: /#.*/,
    keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
    builtin: /@|\bSystem\b/,
    boolean: /\b(?:true|false)\b/,
    date: /\b\d{4}-\d{2}-\d{2}\b/,
    time: /\b\d{2}:\d{2}:\d{2}\b/,
    datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
    character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
    regex: {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
      lookbehind: true,
      greedy: true
    },
    symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
    punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
    reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcmlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUM5QixvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3BELDhCQUE4QixlQUFlO0FBQzdDO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLGVBQWUsWUFBWSxlQUFlO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixJQUFJLFFBQVEsZUFBZTtBQUNuRCw2QkFBNkIsZUFBZSxZQUFZLGVBQWU7QUFDdkU7QUFDQSIsImZpbGUiOiJidW5kbGUuZGIyZjM1OGRmMDU2MTNhMjJmMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByaXBcbnJpcC5kaXNwbGF5TmFtZSA9ICdyaXAnXG5yaXAuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiByaXAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnJpcCA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBrZXl3b3JkOiAvKD86PT58LT4pfFxcYig/OmNsYXNzfGlmfGVsc2V8c3dpdGNofGNhc2V8cmV0dXJufGV4aXR8dHJ5fGNhdGNofGZpbmFsbHl8cmFpc2UpXFxiLyxcbiAgICBidWlsdGluOiAvQHxcXGJTeXN0ZW1cXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgZGF0ZTogL1xcYlxcZHs0fS1cXGR7Mn0tXFxkezJ9XFxiLyxcbiAgICB0aW1lOiAvXFxiXFxkezJ9OlxcZHsyfTpcXGR7Mn1cXGIvLFxuICAgIGRhdGV0aW1lOiAvXFxiXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn1cXGIvLFxuICAgIGNoYXJhY3RlcjogL1xcQmBbXlxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dXFxiLyxcbiAgICByZWdleDoge1xuICAgICAgcGF0dGVybjogLyhefFteL10pXFwvKD8hXFwvKShcXFsuKz9dfFxcXFwufFteL1xcXFxcXHJcXG5dKStcXC8oPz1cXHMqKCR8W1xcclxcbiwuO30pXSkpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHN5bWJvbDogLzpbXlxcZFxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dW15cXHNgJ1wiLC46OyNcXC9cXFxcKCk8PlxcW1xcXXt9XSovLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC9bKy1dPyg/Oig/OlxcZCtcXC5cXGQrKXwoPzpcXGQrKSkvLFxuICAgIHB1bmN0dWF0aW9uOiAvKD86XFwuezIsM30pfFtgLC46Oz1cXC9cXFxcKCk8PlxcW1xcXXt9XS8sXG4gICAgcmVmZXJlbmNlOiAvW15cXGRcXHNgJ1wiLC46OyNcXC9cXFxcKCk8PlxcW1xcXXt9XVteXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV0qL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9