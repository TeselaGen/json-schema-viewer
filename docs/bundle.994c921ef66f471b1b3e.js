(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_elm"],{

/***/ "./node_modules/refractor/lang/elm.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/elm.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = elm
elm.displayName = 'elm'
elm.aliases = []
function elm(Prism) {
  Prism.languages.elm = {
    comment: /--.*|{-[\s\S]*?-}/,
    char: {
      pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
      greedy: true
    },
    string: [
      {
        // Multiline strings are wrapped in triple ". Quotes may appear unescaped.
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
        greedy: true
      }
    ],
    import_statement: {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
      inside: {
        keyword: /\b(?:import|as|exposing)\b/
      }
    },
    keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
    // These are builtin variables only. Constructors are highlighted later as a constant.
    builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
    // decimal integers and floating point numbers | hexadecimal integers
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
    // Most of this is needed because of the meaning of a single '.'.
    // If it stands alone freely, it is the function composition.
    // It may also be a separator between a module name and an identifier => no
    // operator. If it comes together with other special characters it is an
    // operator too.
    // Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!
    // Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ
    operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
    // In Elm, nearly everything is a variable, do not highlight these.
    hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
    constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
    punctuation: /[{}[\]|(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZWxtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsR0FBRztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSIsImZpbGUiOiJidW5kbGUuOTk0YzkyMWVmNjZmNDcxYjFiM2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlbG1cbmVsbS5kaXNwbGF5TmFtZSA9ICdlbG0nXG5lbG0uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBlbG0oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmVsbSA9IHtcbiAgICBjb21tZW50OiAvLS0uKnx7LVtcXHNcXFNdKj8tfS8sXG4gICAgY2hhcjoge1xuICAgICAgcGF0dGVybjogLycoPzpbXlxcXFwnXFxyXFxuXXxcXFxcKD86W2FiZm5ydHZcXFxcJ118XFxkK3x4WzAtOWEtZkEtRl0rKSknLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiBbXG4gICAgICB7XG4gICAgICAgIC8vIE11bHRpbGluZSBzdHJpbmdzIGFyZSB3cmFwcGVkIGluIHRyaXBsZSBcIi4gUXVvdGVzIG1heSBhcHBlYXIgdW5lc2NhcGVkLlxuICAgICAgICBwYXR0ZXJuOiAvXCJcIlwiW1xcc1xcU10qP1wiXCJcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86W15cXFxcXCJcXHJcXG5dfFxcXFwoPzpbYWJmbnJ0dlxcXFxcIl18XFxkK3x4WzAtOWEtZkEtRl0rKSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGltcG9ydF9zdGF0ZW1lbnQ6IHtcbiAgICAgIC8vIFRoZSBpbXBvcnRlZCBvciBoaWRkZW4gbmFtZXMgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGltcG9ydFxuICAgICAgLy8gc3RhdGVtZW50LiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBoaWdobGlnaHQgdGhvc2UgZXhhY3RseSBsaWtlXG4gICAgICAvLyB3ZSBkbyBmb3IgdGhlIG5hbWVzIGluIHRoZSBwcm9ncmFtLlxuICAgICAgcGF0dGVybjogL15cXHMqaW1wb3J0XFxzK1tBLVpdXFx3Kig/OlxcLltBLVpdXFx3KikqKD86XFxzK2FzXFxzKyhbQS1aXVxcdyopKD86XFwuW0EtWl1cXHcqKSopPyg/OlxccytleHBvc2luZ1xccyspPy9tLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGtleXdvcmQ6IC9cXGIoPzppbXBvcnR8YXN8ZXhwb3NpbmcpXFxiL1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmFsaWFzfGFzfGNhc2V8ZWxzZXxleHBvc2luZ3xpZnxpbnxpbmZpeGx8aW5maXhyfGxldHxtb2R1bGV8b2Z8dGhlbnx0eXBlKVxcYi8sXG4gICAgLy8gVGhlc2UgYXJlIGJ1aWx0aW4gdmFyaWFibGVzIG9ubHkuIENvbnN0cnVjdG9ycyBhcmUgaGlnaGxpZ2h0ZWQgbGF0ZXIgYXMgYSBjb25zdGFudC5cbiAgICBidWlsdGluOiAvXFxiKD86YWJzfGFjb3N8YWx3YXlzfGFzaW58YXRhbnxhdGFuMnxjZWlsaW5nfGNsYW1wfGNvbXBhcmV8Y29zfGN1cnJ5fGRlZ3JlZXN8ZXxmbGlwfGZsb29yfGZyb21Qb2xhcnxpZGVudGl0eXxpc0luZmluaXRlfGlzTmFOfGxvZ0Jhc2V8bWF4fG1pbnxuZWdhdGV8bmV2ZXJ8bm90fHBpfHJhZGlhbnN8cmVtfHJvdW5kfHNpbnxzcXJ0fHRhbnx0b0Zsb2F0fHRvUG9sYXJ8dG9TdHJpbmd8dHJ1bmNhdGV8dHVybnN8dW5jdXJyeXx4b3IpXFxiLyxcbiAgICAvLyBkZWNpbWFsIGludGVnZXJzIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzIHwgaGV4YWRlY2ltYWwgaW50ZWdlcnNcbiAgICBudW1iZXI6IC9cXGIoPzpcXGQrKD86XFwuXFxkKyk/KD86ZVsrLV0/XFxkKyk/fDB4WzAtOWEtZl0rKVxcYi9pLFxuICAgIC8vIE1vc3Qgb2YgdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBvZiB0aGUgbWVhbmluZyBvZiBhIHNpbmdsZSAnLicuXG4gICAgLy8gSWYgaXQgc3RhbmRzIGFsb25lIGZyZWVseSwgaXQgaXMgdGhlIGZ1bmN0aW9uIGNvbXBvc2l0aW9uLlxuICAgIC8vIEl0IG1heSBhbHNvIGJlIGEgc2VwYXJhdG9yIGJldHdlZW4gYSBtb2R1bGUgbmFtZSBhbmQgYW4gaWRlbnRpZmllciA9PiBub1xuICAgIC8vIG9wZXJhdG9yLiBJZiBpdCBjb21lcyB0b2dldGhlciB3aXRoIG90aGVyIHNwZWNpYWwgY2hhcmFjdGVycyBpdCBpcyBhblxuICAgIC8vIG9wZXJhdG9yIHRvby5cbiAgICAvLyBWYWxpZCBvcGVyYXRvciBjaGFyYWN0ZXJzIGluIDAuMTg6ICstLyo9LiQ8PjomfF4/JSNAfiFcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vZm9ydW0vIyFtc2cvZWxtLWRldi8wQUhTbkRka1NrUS9FMFNWVTcwSkVRQUpcbiAgICBvcGVyYXRvcjogL1xcc1xcLlxcc3xbK1xcLS8qPS4kPD46JnxePyUjQH4hXXsyLH18WytcXC0vKj0kPD46JnxePyUjQH4hXS8sXG4gICAgLy8gSW4gRWxtLCBuZWFybHkgZXZlcnl0aGluZyBpcyBhIHZhcmlhYmxlLCBkbyBub3QgaGlnaGxpZ2h0IHRoZXNlLlxuICAgIGh2YXJpYWJsZTogL1xcYig/OltBLVpdXFx3KlxcLikqW2Etel1cXHcqXFxiLyxcbiAgICBjb25zdGFudDogL1xcYig/OltBLVpdXFx3KlxcLikqW0EtWl1cXHcqXFxiLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fVtcXF18KCksLjpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9