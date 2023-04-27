(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_mizar"],{

/***/ "./node_modules/refractor/lang/mizar.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/mizar.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = mizar
mizar.displayName = 'mizar'
mizar.aliases = []
function mizar(Prism) {
  Prism.languages.mizar = {
    comment: /::.+/,
    keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
    parameter: {
      pattern: /\$(?:10|\d)/,
      alias: 'variable'
    },
    variable: /\w+(?=:)/,
    number: /(?:\b|-)\d+\b/,
    operator: /\.\.\.|->|&|\.?=/,
    punctuation: /\(#|#\)|[,:;\[\](){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWl6YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQSIsImZpbGUiOiJidW5kbGUuNWIzOGM3MzY1ZGE1MjA5OTU2ZGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtaXphclxubWl6YXIuZGlzcGxheU5hbWUgPSAnbWl6YXInXG5taXphci5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1pemFyKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5taXphciA9IHtcbiAgICBjb21tZW50OiAvOjouKy8sXG4gICAga2V5d29yZDogL0Bwcm9vZlxcYnxcXGIoPzphY2NvcmRpbmd8YWdncmVnYXRlfGFsbHxhbmR8YW50b255bXxhcmV8YXN8YXNzb2NpYXRpdml0eXxhc3N1bWV8YXN5bW1ldHJ5fGF0dHJ8YmV8YmVnaW58YmVpbmd8Ynl8Y2FuY2VsZWR8Y2FzZXxjYXNlc3xjbHVzdGVycz98Y29oZXJlbmNlfGNvbW11dGF0aXZpdHl8Y29tcGF0aWJpbGl0eXxjb25uZWN0ZWRuZXNzfGNvbnNpZGVyfGNvbnNpc3RlbmN5fGNvbnN0cnVjdG9yc3xjb250cmFkaWN0aW9ufGNvcnJlY3RuZXNzfGRlZnxkZWZmdW5jfGRlZmluZXxkZWZpbml0aW9ucz98ZGVmcHJlZHxkb3xkb2VzfGVxdWFsc3xlbmR8ZW52aXJvbnxleHxleGFjdGx5fGV4aXN0ZW5jZXxmb3J8ZnJvbXxmdW5jfGdpdmVufGhlbmNlfGhlcmVieXxob2xkc3xpZGVtcG90ZW5jZXxpZGVudGl0eXxpZmY/fGltcGxpZXN8aW52b2x1dGl2ZW5lc3N8aXJyZWZsZXhpdml0eXxpc3xpdHxsZXR8bWVhbnN8bW9kZXxub258bm90fG5vdGF0aW9ucz98bm93fG9mfG9yfG90aGVyd2lzZXxvdmVyfHBlcnxwcmVkfHByZWZpeHxwcm9qZWN0aXZpdHl8cHJvb2Z8cHJvdmlkZWR8cXVhfHJlY29uc2lkZXJ8cmVkZWZpbmV8cmVkdWNlfHJlZHVjaWJpbGl0eXxyZWZsZXhpdml0eXxyZWdpc3RyYXRpb25zP3xyZXF1aXJlbWVudHN8cmVzZXJ2ZXxzY2h8c2NoZW1lcz98c2VjdGlvbnxzZWxlY3RvcnxzZXR8c2V0aG9vZHxzdHxzdHJ1Y3R8c3VjaHxzdXBwb3NlfHN5bW1ldHJ5fHN5bm9ueW18dGFrZXx0aGF0fHRoZXx0aGVufHRoZW9yZW1zP3x0aGVzaXN8dGh1c3x0b3x0cmFuc2l0aXZpdHl8dW5pcXVlbmVzc3x2b2NhYnVsYXIoPzp5fGllcyl8d2hlbnx3aGVyZXx3aXRofHdydClcXGIvLFxuICAgIHBhcmFtZXRlcjoge1xuICAgICAgcGF0dGVybjogL1xcJCg/OjEwfFxcZCkvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIHZhcmlhYmxlOiAvXFx3Kyg/PTopLyxcbiAgICBudW1iZXI6IC8oPzpcXGJ8LSlcXGQrXFxiLyxcbiAgICBvcGVyYXRvcjogL1xcLlxcLlxcLnwtPnwmfFxcLj89LyxcbiAgICBwdW5jdHVhdGlvbjogL1xcKCN8I1xcKXxbLDo7XFxbXFxdKCl7fV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=