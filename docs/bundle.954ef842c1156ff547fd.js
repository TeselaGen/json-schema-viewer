(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_vhdl"],{

/***/ "./node_modules/refractor/lang/vhdl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/vhdl.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = vhdl
vhdl.displayName = 'vhdl'
vhdl.aliases = []
function vhdl(Prism) {
  Prism.languages.vhdl = {
    comment: /--.+/,
    // support for all logic vectors
    'vhdl-vectors': {
      pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
      alias: 'number'
    },
    // support for operator overloading included
    'quoted-function': {
      pattern: /"\S+?"(?=\()/,
      alias: 'function'
    },
    string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
    constant: /\b(?:use|library)\b/i,
    // support for predefined attributes included
    keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
    boolean: /\b(?:true|false)\b/i,
    function: /\w+(?=\()/,
    // decimal, based, physical, and exponential numbers supported
    number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
    operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdmhkbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS45NTRlZjg0MmMxMTU2ZmY1NDdmZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZoZGxcbnZoZGwuZGlzcGxheU5hbWUgPSAndmhkbCdcbnZoZGwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB2aGRsKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy52aGRsID0ge1xuICAgIGNvbW1lbnQ6IC8tLS4rLyxcbiAgICAvLyBzdXBwb3J0IGZvciBhbGwgbG9naWMgdmVjdG9yc1xuICAgICd2aGRsLXZlY3RvcnMnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiW294Yl1cIltcXGRhLWZfXStcInxcIlswMXV4endsaC1dK1wiL2ksXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgIC8vIHN1cHBvcnQgZm9yIG9wZXJhdG9yIG92ZXJsb2FkaW5nIGluY2x1ZGVkXG4gICAgJ3F1b3RlZC1mdW5jdGlvbic6IHtcbiAgICAgIHBhdHRlcm46IC9cIlxcUys/XCIoPz1cXCgpLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICBzdHJpbmc6IC9cIig/OlteXFxcXFwiXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXCIvLFxuICAgIGNvbnN0YW50OiAvXFxiKD86dXNlfGxpYnJhcnkpXFxiL2ksXG4gICAgLy8gc3VwcG9ydCBmb3IgcHJlZGVmaW5lZCBhdHRyaWJ1dGVzIGluY2x1ZGVkXG4gICAga2V5d29yZDogL1xcYig/OidhY3RpdmV8J2FzY2VuZGluZ3wnYmFzZXwnZGVsYXllZHwnZHJpdmluZ3wnZHJpdmluZ192YWx1ZXwnZXZlbnR8J2hpZ2h8J2ltYWdlfCdpbnN0YW5jZV9uYW1lfCdsYXN0X2FjdGl2ZXwnbGFzdF9ldmVudHwnbGFzdF92YWx1ZXwnbGVmdHwnbGVmdG9mfCdsZW5ndGh8J2xvd3wncGF0aF9uYW1lfCdwb3N8J3ByZWR8J3F1aWV0fCdyYW5nZXwncmV2ZXJzZV9yYW5nZXwncmlnaHR8J3JpZ2h0b2Z8J3NpbXBsZV9uYW1lfCdzdGFibGV8J3N1Y2N8J3RyYW5zYWN0aW9ufCd2YWx8J3ZhbHVlfGFjY2Vzc3xhZnRlcnxhbGlhc3xhbGx8YXJjaGl0ZWN0dXJlfGFycmF5fGFzc2VydHxhdHRyaWJ1dGV8YmVnaW58YmxvY2t8Ym9keXxidWZmZXJ8YnVzfGNhc2V8Y29tcG9uZW50fGNvbmZpZ3VyYXRpb258Y29uc3RhbnR8ZGlzY29ubmVjdHxkb3dudG98ZWxzZXxlbHNpZnxlbmR8ZW50aXR5fGV4aXR8ZmlsZXxmb3J8ZnVuY3Rpb258Z2VuZXJhdGV8Z2VuZXJpY3xncm91cHxndWFyZGVkfGlmfGltcHVyZXxpbnxpbmVydGlhbHxpbm91dHxpc3xsYWJlbHxsaWJyYXJ5fGxpbmthZ2V8bGl0ZXJhbHxsb29wfG1hcHxuZXd8bmV4dHxudWxsfG9mfG9ufG9wZW58b3RoZXJzfG91dHxwYWNrYWdlfHBvcnR8cG9zdHBvbmVkfHByb2NlZHVyZXxwcm9jZXNzfHB1cmV8cmFuZ2V8cmVjb3JkfHJlZ2lzdGVyfHJlamVjdHxyZXBvcnR8cmV0dXJufHNlbGVjdHxzZXZlcml0eXxzaGFyZWR8c2lnbmFsfHN1YnR5cGV8dGhlbnx0b3x0cmFuc3BvcnR8dHlwZXx1bmFmZmVjdGVkfHVuaXRzfHVudGlsfHVzZXx2YXJpYWJsZXx3YWl0fHdoZW58d2hpbGV8d2l0aClcXGIvaSxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvaSxcbiAgICBmdW5jdGlvbjogL1xcdysoPz1cXCgpLyxcbiAgICAvLyBkZWNpbWFsLCBiYXNlZCwgcGh5c2ljYWwsIGFuZCBleHBvbmVudGlhbCBudW1iZXJzIHN1cHBvcnRlZFxuICAgIG51bWJlcjogLydbMDF1eHp3bGgtXSd8XFxiKD86XFxkKyNbXFxkYS1mXy5dKyN8XFxkW1xcZF8uXSopKD86ZVstK10/XFxkKyk/L2ksXG4gICAgb3BlcmF0b3I6IC9bPD5dPT98Oj18Wy0rKi8mPV18XFxiKD86YWJzfG5vdHxtb2R8cmVtfHNsbHxzcmx8c2xhfHNyYXxyb2x8cm9yfGFuZHxvcnxuYW5kfHhub3J8eG9yfG5vcilcXGIvaSxcbiAgICBwdW5jdHVhdGlvbjogL1t7fVtcXF07KCksLjpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9