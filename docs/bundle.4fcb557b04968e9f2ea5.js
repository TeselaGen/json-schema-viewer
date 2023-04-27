(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_rust"],{

/***/ "./node_modules/refractor/lang/rust.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rust.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = rust
rust.displayName = 'rust'
rust.aliases = []
function rust(Prism) {
  /* TODO
Add support for Markdown notation inside doc comments
Add support for nested block comments...
Match closure params even when not followed by dash or brace
Add better support for macro definition
*/
  Prism.languages.rust = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    ],
    string: [
      {
        pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/,
        greedy: true
      },
      {
        pattern: /b?"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      }
    ],
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
      alias: 'string'
    },
    'lifetime-annotation': {
      pattern: /'[^\s>']+/,
      alias: 'symbol'
    },
    keyword: /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
    attribute: {
      pattern: /#!?\[.+?\]/,
      greedy: true,
      alias: 'attr-name'
    },
    function: [
      /\w+(?=\s*\()/, // Macros can use parens or brackets
      /\w+!(?=\s*\(|\[)/
    ],
    'macro-rules': {
      pattern: /\w+!/,
      alias: 'function'
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
    // Closure params should not be confused with bitwise OR |
    'closure-params': {
      pattern: /\|[^|]*\|(?=\s*[{-])/,
      inside: {
        punctuation: /[|:,]/,
        operator: /[&*]/
      }
    },
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcnVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUIsSUFBSTtBQUNuRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsSUFBSSxPQUFPLElBQUk7QUFDN0M7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS40ZmNiNTU3YjA0OTY4ZTlmMmVhNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1c3RcbnJ1c3QuZGlzcGxheU5hbWUgPSAncnVzdCdcbnJ1c3QuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBydXN0KFByaXNtKSB7XG4gIC8qIFRPRE9cbkFkZCBzdXBwb3J0IGZvciBNYXJrZG93biBub3RhdGlvbiBpbnNpZGUgZG9jIGNvbW1lbnRzXG5BZGQgc3VwcG9ydCBmb3IgbmVzdGVkIGJsb2NrIGNvbW1lbnRzLi4uXG5NYXRjaCBjbG9zdXJlIHBhcmFtcyBldmVuIHdoZW4gbm90IGZvbGxvd2VkIGJ5IGRhc2ggb3IgYnJhY2VcbkFkZCBiZXR0ZXIgc3VwcG9ydCBmb3IgbWFjcm8gZGVmaW5pdGlvblxuKi9cbiAgUHJpc20ubGFuZ3VhZ2VzLnJ1c3QgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgc3RyaW5nOiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9iP3IoIyopXCIoPzpcXFxcLnwoPyFcIlxcMSlbXlxcXFxcXHJcXG5dKSpcIlxcMS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL2I/XCIoPzpcXFxcLnxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBjaGFyOiB7XG4gICAgICBwYXR0ZXJuOiAvYj8nKD86XFxcXCg/OnhbMC03XVtcXGRhLWZBLUZdfHV7KD86W1xcZGEtZkEtRl1fKil7MSw2fXwuKXxbXlxcXFxcXHJcXG5cXHQnXSknLyxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgJ2xpZmV0aW1lLWFubm90YXRpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvJ1teXFxzPiddKy8sXG4gICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzphYnN0cmFjdHxhbGlnbm9mfGFzfGFzeW5jfGF3YWl0fGJlfGJveHxicmVha3xjb25zdHxjb250aW51ZXxjcmF0ZXxkb3xkeW58ZWxzZXxlbnVtfGV4dGVybnxmYWxzZXxmaW5hbHxmbnxmb3J8aWZ8aW1wbHxpbnxsZXR8bG9vcHxtYXRjaHxtb2R8bW92ZXxtdXR8b2Zmc2V0b2Z8b25jZXxvdmVycmlkZXxwcml2fHB1YnxwdXJlfHJlZnxyZXR1cm58c2l6ZW9mfHN0YXRpY3xzZWxmfFNlbGZ8c3RydWN0fHN1cGVyfHRydWV8dHJhaXR8dHlwZXx0eXBlb2Z8dW5pb258dW5zYWZlfHVuc2l6ZWR8dXNlfHZpcnR1YWx8d2hlcmV8d2hpbGV8eWllbGQpXFxiLyxcbiAgICBhdHRyaWJ1dGU6IHtcbiAgICAgIHBhdHRlcm46IC8jIT9cXFsuKz9cXF0vLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnXG4gICAgfSxcbiAgICBmdW5jdGlvbjogW1xuICAgICAgL1xcdysoPz1cXHMqXFwoKS8sIC8vIE1hY3JvcyBjYW4gdXNlIHBhcmVucyBvciBicmFja2V0c1xuICAgICAgL1xcdyshKD89XFxzKlxcKHxcXFspL1xuICAgIF0sXG4gICAgJ21hY3JvLXJ1bGVzJzoge1xuICAgICAgcGF0dGVybjogL1xcdyshLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICAvLyBIZXgsIG9jdCwgYmluLCBkZWMgbnVtYmVycyB3aXRoIHZpc3VhbCBzZXBhcmF0b3JzIGFuZCB0eXBlIHN1ZmZpeFxuICAgIG51bWJlcjogL1xcYig/OjB4W1xcZEEtRmEtZl0oPzpfP1tcXGRBLUZhLWZdKSp8MG9bMC03XSg/Ol8/WzAtN10pKnwwYlswMV0oPzpfP1swMV0pKnwoXFxkKD86Xz9cXGQpKik/XFwuP1xcZCg/Ol8/XFxkKSooPzpbRWVdWystXT9cXGQrKT8pKD86Xz8oPzpbaXVdKD86OHwxNnwzMnw2NCk/fGYzMnxmNjQpKT9cXGIvLFxuICAgIC8vIENsb3N1cmUgcGFyYW1zIHNob3VsZCBub3QgYmUgY29uZnVzZWQgd2l0aCBiaXR3aXNlIE9SIHxcbiAgICAnY2xvc3VyZS1wYXJhbXMnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFx8W158XSpcXHwoPz1cXHMqW3stXSkvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvW3w6LF0vLFxuICAgICAgICBvcGVyYXRvcjogL1smKl0vXG4gICAgICB9XG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogLy0+fFxcLlxcLj18XFwuezEsM318Ojp8W3t9W1xcXTsoKSw6XS8sXG4gICAgb3BlcmF0b3I6IC9bLSsqXFwvJSFeXT0/fD1bPT5dP3wmWyY9XT98XFx8W3w9XT98PDw/PT98Pj4/PT98W0A/XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==