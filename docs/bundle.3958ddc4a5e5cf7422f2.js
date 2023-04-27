(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_q"],{

/***/ "./node_modules/refractor/lang/q.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/q.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = q
q.displayName = 'q'
q.aliases = []
function q(Prism) {
  Prism.languages.q = {
    string: /"(?:\\.|[^"\\\r\n])*"/,
    comment: [
      // From http://code.kx.com/wiki/Reference/Slash:
      // When / is following a space (or a right parenthesis, bracket, or brace), it is ignored with the rest of the line.
      {
        pattern: /([\t )\]}])\/.*/,
        lookbehind: true,
        greedy: true
      }, // From http://code.kx.com/wiki/Reference/Slash:
      // A line which has / as its first character and contains at least one other non-whitespace character is a whole-line comment and is ignored entirely.
      // A / on a line by itself begins a multiline comment which is terminated by the next \ on a line by itself.
      // If a / is not matched by a \, the multiline comment is unterminated and continues to end of file.
      // The / and \ must be the first char on the line, but may be followed by any amount of whitespace.
      {
        pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
        lookbehind: true,
        greedy: true
      }, // From http://code.kx.com/wiki/Reference/Slash:
      // A \ on a line by itself with no preceding matching / will comment to end of file.
      {
        pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,
        greedy: true
      },
      {
        pattern: /^#!.+/m,
        greedy: true
      }
    ],
    symbol: /`(?::\S+|[\w.]*)/,
    datetime: {
      pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
      alias: 'number'
    },
    // The negative look-ahead prevents bad highlighting
    // of verbs 0: and 1:
    number: /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
    keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
    adverb: {
      pattern: /['\/\\]:?|\beach\b/,
      alias: 'function'
    },
    verb: {
      pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,
      alias: 'operator'
    },
    punctuation: /[(){}\[\];.]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLEtBQUs7QUFDNUI7QUFDQSIsImZpbGUiOiJidW5kbGUuMzk1OGRkYzRhNWU1Y2Y3NDIyZjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBxXG5xLmRpc3BsYXlOYW1lID0gJ3EnXG5xLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucSA9IHtcbiAgICBzdHJpbmc6IC9cIig/OlxcXFwufFteXCJcXFxcXFxyXFxuXSkqXCIvLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIC8vIEZyb20gaHR0cDovL2NvZGUua3guY29tL3dpa2kvUmVmZXJlbmNlL1NsYXNoOlxuICAgICAgLy8gV2hlbiAvIGlzIGZvbGxvd2luZyBhIHNwYWNlIChvciBhIHJpZ2h0IHBhcmVudGhlc2lzLCBicmFja2V0LCBvciBicmFjZSksIGl0IGlzIGlnbm9yZWQgd2l0aCB0aGUgcmVzdCBvZiB0aGUgbGluZS5cbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhbXFx0IClcXF19XSlcXC8uKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSwgLy8gRnJvbSBodHRwOi8vY29kZS5reC5jb20vd2lraS9SZWZlcmVuY2UvU2xhc2g6XG4gICAgICAvLyBBIGxpbmUgd2hpY2ggaGFzIC8gYXMgaXRzIGZpcnN0IGNoYXJhY3RlciBhbmQgY29udGFpbnMgYXQgbGVhc3Qgb25lIG90aGVyIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBpcyBhIHdob2xlLWxpbmUgY29tbWVudCBhbmQgaXMgaWdub3JlZCBlbnRpcmVseS5cbiAgICAgIC8vIEEgLyBvbiBhIGxpbmUgYnkgaXRzZWxmIGJlZ2lucyBhIG11bHRpbGluZSBjb21tZW50IHdoaWNoIGlzIHRlcm1pbmF0ZWQgYnkgdGhlIG5leHQgXFwgb24gYSBsaW5lIGJ5IGl0c2VsZi5cbiAgICAgIC8vIElmIGEgLyBpcyBub3QgbWF0Y2hlZCBieSBhIFxcLCB0aGUgbXVsdGlsaW5lIGNvbW1lbnQgaXMgdW50ZXJtaW5hdGVkIGFuZCBjb250aW51ZXMgdG8gZW5kIG9mIGZpbGUuXG4gICAgICAvLyBUaGUgLyBhbmQgXFwgbXVzdCBiZSB0aGUgZmlyc3QgY2hhciBvbiB0aGUgbGluZSwgYnV0IG1heSBiZSBmb2xsb3dlZCBieSBhbnkgYW1vdW50IG9mIHdoaXRlc3BhY2UuXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxcXHI/XFxufFxccilcXC9bXFx0IF0qKD86KD86XFxyP1xcbnxcXHIpKD86LiooPzpcXHI/XFxufFxccikpKj8oPzpcXFxcKD89W1xcdCBdKig/Olxccj9cXG58XFxyKSl8JCl8XFxTLiopLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LCAvLyBGcm9tIGh0dHA6Ly9jb2RlLmt4LmNvbS93aWtpL1JlZmVyZW5jZS9TbGFzaDpcbiAgICAgIC8vIEEgXFwgb24gYSBsaW5lIGJ5IGl0c2VsZiB3aXRoIG5vIHByZWNlZGluZyBtYXRjaGluZyAvIHdpbGwgY29tbWVudCB0byBlbmQgb2YgZmlsZS5cbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL15cXFxcW1xcdCBdKig/Olxccj9cXG58XFxyKVtcXHNcXFNdKy9tLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9eIyEuKy9tLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHN5bWJvbDogL2AoPzo6XFxTK3xbXFx3Ll0qKS8sXG4gICAgZGF0ZXRpbWU6IHtcbiAgICAgIHBhdHRlcm46IC8wTlttZHp1dnRdfDBXW2R0el18XFxkezR9XFwuXFxkXFxkKD86bXxcXC5cXGRcXGQoPzpUKD86XFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLjpdXFxkXFxkXFxkKT8pPyk/KT8pP1tkel0/KXxcXGRcXGQ6XFxkXFxkKD86OlxcZFxcZCg/OlsuOl1cXGRcXGRcXGQpPyk/W3V2dF0/LyxcbiAgICAgIGFsaWFzOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgLy8gVGhlIG5lZ2F0aXZlIGxvb2stYWhlYWQgcHJldmVudHMgYmFkIGhpZ2hsaWdodGluZ1xuICAgIC8vIG9mIHZlcmJzIDA6IGFuZCAxOlxuICAgIG51bWJlcjogL1xcYig/IVswMV06KSg/OjBbd25dfDBXW2hqXT98ME5baGplXT98MHhbXFxkYS1mQS1GXSt8XFxkK1xcLj9cXGQqKD86ZVsrLV0/XFxkKyk/W2hqZmViXT8pLyxcbiAgICBrZXl3b3JkOiAvXFxcXFxcdytcXGJ8XFxiKD86YWJzfGFjb3N8YWowP3xhbGx8YW5kfGFueXxhc2N8YXNpbnxhc29mfGF0YW58YXR0cnxhdmdzP3xiaW5yP3xieXxjZWlsaW5nfGNvbHN8Y29yfGNvc3xjb3VudHxjb3Z8Y3Jvc3N8Y3N2fGN1dHxkZWxldGV8ZGVsdGFzfGRlc2N8ZGV2fGRpZmZlcnxkaXN0aW5jdHxkaXZ8ZG98ZHNhdmV8ZWp8ZW5saXN0fGV2YWx8ZXhjZXB0fGV4ZWN8ZXhpdHxleHB8ZmJ5fGZpbGxzfGZpcnN0fGZrZXlzfGZsaXB8Zmxvb3J8ZnJvbXxnZXR8Z2V0ZW52fGdyb3VwfGd0aW1lfGhjbG9zZXxoY291bnR8aGRlbHxob3Blbnxoc3ltfGlhc2N8aWRlbnRpdHl8aWRlc2N8aWZ8aWp8aW58aW5zZXJ0fGludGVyfGludnxrZXlzP3xsYXN0fGxpa2V8bGlzdHxsamY/fGxvYWR8bG9nfGxvd2VyfGxzcXxsdGltZXxsdHJpbXxtYXZnfG1heHM/fG1jb3VudHxtZDV8bWRldnxtZWR8bWV0YXxtaW5zP3xtbWF4fG1taW58bW11fG1vZHxtc3VtfG5lZ3xuZXh0fG5vdHxudWxsfG9yfG92ZXJ8cGFyc2V8cGVhY2h8cGp8cGxpc3R8cHJkcz98cHJldnxwcmlvcnxyYW5kfHJhbmt8cmF0aW9zfHJhemV8cmVhZDB8cmVhZDF8cmVjaXByb2NhbHxyZXZhbHxyZXZlcnNlfHJsb2FkfHJvdGF0ZXxyc2F2ZXxydHJpbXxzYXZlfHNjYW58c2NvdnxzZGV2fHNlbGVjdHxzZXR8c2V0ZW52fHNob3d8c2lnbnVtfHNpbnxzcXJ0fHNzcj98c3RyaW5nfHN1Ymxpc3R8c3Vtcz98c3Z8c3ZhcnxzeXN0ZW18dGFibGVzfHRhbnx0aWx8dHJpbXx0eGZ8dHlwZXx1anx1bmdyb3VwfHVuaW9ufHVwZGF0ZXx1cHBlcnx1cHNlcnR8dmFsdWV8dmFyfHZpZXdzP3x2c3x3YXZnfHdoZXJlfHdoaWxlfHdpdGhpbnx3ajE/fHdzdW18d3d8eGFzY3x4YmFyfHhjb2xzP3x4ZGVzY3x4ZXhwfHhncm91cHx4a2V5fHhsb2d8eHByZXZ8eHJhbmspXFxiLyxcbiAgICBhZHZlcmI6IHtcbiAgICAgIHBhdHRlcm46IC9bJ1xcL1xcXFxdOj98XFxiZWFjaFxcYi8sXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAgdmVyYjoge1xuICAgICAgcGF0dGVybjogLyg/OlxcQlxcLlxcQnxcXGJbMDFdOnw8Wz0+XT98Pj0/fFs6K1xcLSolLCE/X349fCQmI0BeXSk6Py8sXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9bKCl7fVxcW1xcXTsuXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==