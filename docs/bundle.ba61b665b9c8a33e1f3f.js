(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_pascal"],{

/***/ "./node_modules/refractor/lang/pascal.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/pascal.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = pascal
pascal.displayName = 'pascal'
pascal.aliases = ['objectpascal']
function pascal(Prism) {
  // Based on Free Pascal
  /* TODO
Support inline asm ?
*/
  Prism.languages.pascal = {
    comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
    string: {
      pattern: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
      greedy: true
    },
    keyword: [
      {
        // Turbo Pascal
        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
        lookbehind: true
      },
      {
        // Free Pascal
        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
        lookbehind: true
      },
      {
        // Object Pascal
        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
        lookbehind: true
      },
      {
        // Modifiers
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
        lookbehind: true
      }
    ],
    number: [
      // Hexadecimal, octal and binary
      /(?:[&%]\d+|\$[a-f\d]+)/i, // Decimal
      /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i
    ],
    operator: [
      /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
      {
        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
        lookbehind: true
      }
    ],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
  }
  Prism.languages.objectpascal = Prism.languages.pascal
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcGFzY2FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmJhNjFiNjY1YjljOGEzM2UxZjNmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFzY2FsXG5wYXNjYWwuZGlzcGxheU5hbWUgPSAncGFzY2FsJ1xucGFzY2FsLmFsaWFzZXMgPSBbJ29iamVjdHBhc2NhbCddXG5mdW5jdGlvbiBwYXNjYWwoUHJpc20pIHtcbiAgLy8gQmFzZWQgb24gRnJlZSBQYXNjYWxcbiAgLyogVE9ET1xuU3VwcG9ydCBpbmxpbmUgYXNtID9cbiovXG4gIFByaXNtLmxhbmd1YWdlcy5wYXNjYWwgPSB7XG4gICAgY29tbWVudDogWy9cXChcXCpbXFxzXFxTXSs/XFwqXFwpLywgL1xce1tcXHNcXFNdKz9cXH0vLCAvXFwvXFwvLiovXSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oPzonKD86Jyd8W14nXFxyXFxuXSkqJ3wjWyYkJV0/W2EtZlxcZF0rKSt8XFxeW2Etel0vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDogW1xuICAgICAge1xuICAgICAgICAvLyBUdXJibyBQYXNjYWxcbiAgICAgICAgcGF0dGVybjogLyhefFteJl0pXFxiKD86YWJzb2x1dGV8YXJyYXl8YXNtfGJlZ2lufGNhc2V8Y29uc3R8Y29uc3RydWN0b3J8ZGVzdHJ1Y3Rvcnxkb3xkb3dudG98ZWxzZXxlbmR8ZmlsZXxmb3J8ZnVuY3Rpb258Z290b3xpZnxpbXBsZW1lbnRhdGlvbnxpbmhlcml0ZWR8aW5saW5lfGludGVyZmFjZXxsYWJlbHxuaWx8b2JqZWN0fG9mfG9wZXJhdG9yfHBhY2tlZHxwcm9jZWR1cmV8cHJvZ3JhbXxyZWNvcmR8cmVpbnRyb2R1Y2V8cmVwZWF0fHNlbGZ8c2V0fHN0cmluZ3x0aGVufHRvfHR5cGV8dW5pdHx1bnRpbHx1c2VzfHZhcnx3aGlsZXx3aXRoKVxcYi9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBGcmVlIFBhc2NhbFxuICAgICAgICBwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzpkaXNwb3NlfGV4aXR8ZmFsc2V8bmV3fHRydWUpXFxiL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE9iamVjdCBQYXNjYWxcbiAgICAgICAgcGF0dGVybjogLyhefFteJl0pXFxiKD86Y2xhc3N8ZGlzcGludGVyZmFjZXxleGNlcHR8ZXhwb3J0c3xmaW5hbGl6YXRpb258ZmluYWxseXxpbml0aWFsaXphdGlvbnxpbmxpbmV8bGlicmFyeXxvbnxvdXR8cGFja2VkfHByb3BlcnR5fHJhaXNlfHJlc291cmNlc3RyaW5nfHRocmVhZHZhcnx0cnkpXFxiL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE1vZGlmaWVyc1xuICAgICAgICBwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzphYnNvbHV0ZXxhYnN0cmFjdHxhbGlhc3xhc3NlbWJsZXJ8Yml0cGFja2VkfGJyZWFrfGNkZWNsfGNvbnRpbnVlfGNwcGRlY2x8Y3ZhcnxkZWZhdWx0fGRlcHJlY2F0ZWR8ZHluYW1pY3xlbnVtZXJhdG9yfGV4cGVyaW1lbnRhbHxleHBvcnR8ZXh0ZXJuYWx8ZmFyfGZhcjE2fGZvcndhcmR8Z2VuZXJpY3xoZWxwZXJ8aW1wbGVtZW50c3xpbmRleHxpbnRlcnJ1cHR8aW9jaGVja3N8bG9jYWx8bWVzc2FnZXxuYW1lfG5lYXJ8bm9kZWZhdWx0fG5vcmV0dXJufG5vc3RhY2tmcmFtZXxvbGRmcGNjYWxsfG90aGVyd2lzZXxvdmVybG9hZHxvdmVycmlkZXxwYXNjYWx8cGxhdGZvcm18cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHB1Ymxpc2hlZHxyZWFkfHJlZ2lzdGVyfHJlaW50cm9kdWNlfHJlc3VsdHxzYWZlY2FsbHxzYXZlcmVnaXN0ZXJzfHNvZnRmbG9hdHxzcGVjaWFsaXplfHN0YXRpY3xzdGRjYWxsfHN0b3JlZHxzdHJpY3R8dW5hbGlnbmVkfHVuaW1wbGVtZW50ZWR8dmFyYXJnc3x2aXJ0dWFsfHdyaXRlKVxcYi9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBudW1iZXI6IFtcbiAgICAgIC8vIEhleGFkZWNpbWFsLCBvY3RhbCBhbmQgYmluYXJ5XG4gICAgICAvKD86WyYlXVxcZCt8XFwkW2EtZlxcZF0rKS9pLCAvLyBEZWNpbWFsXG4gICAgICAvXFxiXFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspPy9pXG4gICAgXSxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1xcLlxcLnxcXCpcXCp8Oj18PFs8PT5dP3w+Wz49XT98WytcXC0qXFwvXT0/fFtAXj1dL2ksXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXiZdKVxcYig/OmFuZHxhc3xkaXZ8ZXhjbHVkZXxpbnxpbmNsdWRlfGlzfG1vZHxub3R8b3J8c2hsfHNocnx4b3IpXFxiLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC9cXChcXC58XFwuXFwpfFsoKVxcW1xcXTo7LC5dL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5vYmplY3RwYXNjYWwgPSBQcmlzbS5sYW5ndWFnZXMucGFzY2FsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9