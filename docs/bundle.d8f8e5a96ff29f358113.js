(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_scheme"],{

/***/ "./node_modules/refractor/lang/scheme.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/scheme.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = scheme
scheme.displayName = 'scheme'
scheme.aliases = []
function scheme(Prism) {
  Prism.languages.scheme = {
    comment: /;.*/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/,
      greedy: true
    },
    character: {
      pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
      alias: 'string'
    },
    keyword: {
      pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
      lookbehind: true
    },
    builtin: {
      pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
      lookbehind: true
    },
    number: {
      pattern: /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
      lookbehind: true
    },
    boolean: /#[tf]/,
    operator: {
      pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
      lookbehind: true
    },
    function: {
      pattern: /(\()[^()'\s]+(?=[()\s)]|$)/,
      lookbehind: true
    },
    punctuation: /[()']/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2NoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5kOGY4ZTVhOTZmZjI5ZjM1ODExMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVtZVxuc2NoZW1lLmRpc3BsYXlOYW1lID0gJ3NjaGVtZSdcbnNjaGVtZS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNjaGVtZShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuc2NoZW1lID0ge1xuICAgIGNvbW1lbnQ6IC87LiovLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86W15cIlxcXFxdfFxcXFwuKSpcInwnW14oKSMnXFxzXSsvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBjaGFyYWN0ZXI6IHtcbiAgICAgIHBhdHRlcm46IC8jXFxcXCg/Olt1eF1bYS1mQS1GXFxkXSt8W2EtekEtWl0rfFxcUykvLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcKCkoPzpkZWZpbmUoPzotc3ludGF4fC1saWJyYXJ5fC12YWx1ZXMpP3woPzpjYXNlLSk/bGFtYmRhfGxldCg/OlxcKnxyZWMpPyg/Oi12YWx1ZXMpP3xlbHNlfGlmfGNvbmR8YmVnaW58ZGVsYXkoPzotZm9yY2UpP3xwYXJhbWV0ZXJpemV8Z3VhcmR8c2V0IXwoPzpxdWFzaS0pP3F1b3RlfHN5bnRheC1ydWxlcykoPz1bKClcXHNdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBidWlsdGluOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcKCkoPzooPzpjb25zfGNhcnxjZHJ8bGlzdHxjYWxsLXdpdGgtY3VycmVudC1jb250aW51YXRpb258Y2FsbFxcL2NjfGFwcGVuZHxhYnN8YXBwbHl8ZXZhbClcXGJ8bnVsbFxcP3xwYWlyXFw/fGJvb2xlYW5cXD98ZW9mLW9iamVjdFxcP3xjaGFyXFw/fHByb2NlZHVyZVxcP3xudW1iZXJcXD98cG9ydFxcP3xzdHJpbmdcXD98dmVjdG9yXFw/fHN5bWJvbFxcP3xieXRldmVjdG9yXFw/KSg/PVsoKVxcc10pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgcGF0dGVybjogLyhbXFxzKCldKVstK10/KD86XFxkK1xcL1xcZCt8XFxkKlxcLj9cXGQrKD86XFxzKlstK11cXHMqXFxkKlxcLj9cXGQraSk/KVxcYi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBib29sZWFuOiAvI1t0Zl0vLFxuICAgIG9wZXJhdG9yOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcKCkoPzpbLSsqJVxcL118Wzw+XT0/fD0+PykoPz1cXHN8JCkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgZnVuY3Rpb246IHtcbiAgICAgIHBhdHRlcm46IC8oXFwoKVteKCknXFxzXSsoPz1bKClcXHMpXXwkKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1soKSddL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9