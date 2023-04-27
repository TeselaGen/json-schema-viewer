(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_prolog"],{

/***/ "./node_modules/refractor/lang/prolog.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/prolog.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = prolog
prolog.displayName = 'prolog'
prolog.aliases = []
function prolog(Prism) {
  Prism.languages.prolog = {
    // Syntax depends on the implementation
    comment: [/%.+/, /\/\*[\s\S]*?\*\//],
    // Depending on the implementation, strings may allow escaped newlines and quote-escape
    string: {
      pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    variable: /\b[A-Z_]\w*/,
    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?
    function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    number: /\b\d+\.?\d*/,
    // Custom operators are allowed
    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    punctuation: /[(){}\[\],]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4xNzYwMWRhM2QyZGQ3ZDc0MmJmMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2xvZ1xucHJvbG9nLmRpc3BsYXlOYW1lID0gJ3Byb2xvZydcbnByb2xvZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb2xvZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucHJvbG9nID0ge1xuICAgIC8vIFN5bnRheCBkZXBlbmRzIG9uIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGNvbW1lbnQ6IFsvJS4rLywgL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vXSxcbiAgICAvLyBEZXBlbmRpbmcgb24gdGhlIGltcGxlbWVudGF0aW9uLCBzdHJpbmdzIG1heSBhbGxvdyBlc2NhcGVkIG5ld2xpbmVzIGFuZCBxdW90ZS1lc2NhcGVcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFwxXFwxfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBidWlsdGluOiAvXFxiKD86Znh8Znl8eGZbeHldP3x5Zng/KVxcYi8sXG4gICAgdmFyaWFibGU6IC9cXGJbQS1aX11cXHcqLyxcbiAgICAvLyBGSVhNRTogU2hvdWxkIHdlIGxpc3QgYWxsIG51bGwtYXJ5IHByZWRpY2F0ZXMgKG5vdCBmb2xsb3dlZCBieSBhIHBhcmVudGhlc2lzKSBsaWtlIGhhbHQsIHRyYWNlLCBldGMuP1xuICAgIGZ1bmN0aW9uOiAvXFxiW2Etel1cXHcqKD86KD89XFwoKXxcXC9cXGQrKS8sXG4gICAgbnVtYmVyOiAvXFxiXFxkK1xcLj9cXGQqLyxcbiAgICAvLyBDdXN0b20gb3BlcmF0b3JzIGFyZSBhbGxvd2VkXG4gICAgb3BlcmF0b3I6IC9bOlxcXFw9PjxcXC0/KkBcXC87K158ISQuXSt8XFxiKD86aXN8bW9kfG5vdHx4b3IpXFxiLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKXt9XFxbXFxdLF0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=