(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_processing"],{

/***/ "./node_modules/refractor/lang/processing.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/processing.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = processing
processing.displayName = 'processing'
processing.aliases = []
function processing(Prism) {
  Prism.languages.processing = Prism.languages.extend('clike', {
    keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
  })
  Prism.languages.insertBefore('processing', 'number', {
    // Special case: XML is a type
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
      alias: 'variable'
    }
  }) // Spaces are allowed between function name and parenthesis
  Prism.languages.processing['function'].pattern = /\w+(?=\s*\()/ // Class-names is not styled by default
  Prism.languages.processing['class-name'].alias = 'variable'
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvY2Vzc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjA1MGUxZTYxZDJiZTM0ODBlZmM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc2luZ1xucHJvY2Vzc2luZy5kaXNwbGF5TmFtZSA9ICdwcm9jZXNzaW5nJ1xucHJvY2Vzc2luZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb2Nlc3NpbmcoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnByb2Nlc3NpbmcgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86YnJlYWt8Y2F0Y2h8Y2FzZXxjbGFzc3xjb250aW51ZXxkZWZhdWx0fGVsc2V8ZXh0ZW5kc3xmaW5hbHxmb3J8aWZ8aW1wbGVtZW50c3xpbXBvcnR8bmV3fG51bGx8cHJpdmF0ZXxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0cnl8dm9pZHx3aGlsZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvPFs8PV0/fD5bPj1dP3wmJj98XFx8XFx8P3xbJT9dfFshPStcXC0qXFwvXT0/L1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwcm9jZXNzaW5nJywgJ251bWJlcicsIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IFhNTCBpcyBhIHR5cGVcbiAgICBjb25zdGFudDogL1xcYig/IVhNTFxcYilbQS1aXVtBLVpcXGRfXStcXGIvLFxuICAgIHR5cGU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpib29sZWFufGJ5dGV8Y2hhcnxjb2xvcnxkb3VibGV8ZmxvYXR8aW50fFhNTHxbQS1aXVxcdyopXFxiLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9KSAvLyBTcGFjZXMgYXJlIGFsbG93ZWQgYmV0d2VlbiBmdW5jdGlvbiBuYW1lIGFuZCBwYXJlbnRoZXNpc1xuICBQcmlzbS5sYW5ndWFnZXMucHJvY2Vzc2luZ1snZnVuY3Rpb24nXS5wYXR0ZXJuID0gL1xcdysoPz1cXHMqXFwoKS8gLy8gQ2xhc3MtbmFtZXMgaXMgbm90IHN0eWxlZCBieSBkZWZhdWx0XG4gIFByaXNtLmxhbmd1YWdlcy5wcm9jZXNzaW5nWydjbGFzcy1uYW1lJ10uYWxpYXMgPSAndmFyaWFibGUnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9