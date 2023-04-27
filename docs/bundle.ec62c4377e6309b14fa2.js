(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_nix"],{

/***/ "./node_modules/refractor/lang/nix.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nix.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = nix
nix.displayName = 'nix'
nix.aliases = []
function nix(Prism) {
  Prism.languages.nix = {
    comment: /\/\*[\s\S]*?\*\/|#.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
      greedy: true,
      inside: {
        interpolation: {
          // The lookbehind ensures the ${} is not preceded by \ or ''
          pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
          lookbehind: true,
          inside: {
            antiquotation: {
              pattern: /^\$(?=\{)/,
              alias: 'variable'
            } // See rest below
          }
        }
      }
    },
    url: [
      /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
      {
        pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
        lookbehind: true
      }
    ],
    antiquotation: {
      pattern: /\$(?=\{)/,
      alias: 'variable'
    },
    number: /\b\d+\b/,
    keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
    function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
    boolean: /\b(?:true|false)\b/,
    operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
    punctuation: /[{}()[\].,:;]/
  }
  Prism.languages.nix.string.inside.interpolation.inside.rest =
    Prism.languages.nix
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbml4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyw4Q0FBOEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsSUFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5lYzYyYzQzNzdlNjMwOWIxNGZhMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5peFxubml4LmRpc3BsYXlOYW1lID0gJ25peCdcbm5peC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG5peChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubml4ID0ge1xuICAgIGNvbW1lbnQ6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfCMuKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXFtcXHNcXFNdKSpcInwnJyg/Oig/IScnKVtcXHNcXFNdfCcnKD86J3xcXFxcfFxcJFxceykpKicnLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgLy8gVGhlIGxvb2tiZWhpbmQgZW5zdXJlcyB0aGUgJHt9IGlzIG5vdCBwcmVjZWRlZCBieSBcXCBvciAnJ1xuICAgICAgICAgIHBhdHRlcm46IC8oXnwoPzpefCg/IScnKS4pW15cXFxcXSlcXCRcXHsoPzpbXn1dfFxce1tefV0qXFx9KSp9LyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgYW50aXF1b3RhdGlvbjoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxcJCg/PVxceykvLFxuICAgICAgICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgICAgICAgICAgfSAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdXJsOiBbXG4gICAgICAvXFxiKD86W2Etel17Myw3fTpcXC9cXC8pW1xcd1xcLSslflxcLy46Iz0/Jl0rLyxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhbXlxcL10pKD86W1xcd1xcLSslfi46Iz0/Jl0qKD8hXFwvXFwvKVtcXHdcXC0rJX5cXC8uOiM9PyZdKT8oPyFcXC9cXC8pXFwvW1xcd1xcLSslflxcLy46Iz0/Jl0qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgYW50aXF1b3RhdGlvbjoge1xuICAgICAgcGF0dGVybjogL1xcJCg/PVxceykvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIG51bWJlcjogL1xcYlxcZCtcXGIvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphc3NlcnR8YnVpbHRpbnN8ZWxzZXxpZnxpbnxpbmhlcml0fGxldHxudWxsfG9yfHRoZW58d2l0aClcXGIvLFxuICAgIGZ1bmN0aW9uOiAvXFxiKD86YWJvcnR8YWRkfGFsbHxhbnl8YXR0ck5hbWVzfGF0dHJWYWx1ZXN8YmFzZU5hbWVPZnxjb21wYXJlVmVyc2lvbnN8Y29uY2F0TGlzdHN8Y3VycmVudFN5c3RlbXxkZWVwU2VxfGRlcml2YXRpb258ZGlyT2Z8ZGl2fGVsZW0oPzpBdCk/fGZldGNoKD86dXJsfFRhcmJhbGwpfGZpbHRlcig/OlNvdXJjZSk/fGZyb21KU09OfGdlbkxpc3R8Z2V0QXR0cnxnZXRFbnZ8aGFzQXR0cnxoYXNoU3RyaW5nfGhlYWR8aW1wb3J0fGludGVyc2VjdEF0dHJzfGlzKD86QXR0cnN8Qm9vbHxGdW5jdGlvbnxJbnR8TGlzdHxOdWxsfFN0cmluZyl8bGVuZ3RofGxlc3NUaGFufGxpc3RUb0F0dHJzfG1hcHxtdWx8cGFyc2VEcnZOYW1lfHBhdGhFeGlzdHN8cmVhZCg/OkRpcnxGaWxlKXxyZW1vdmVBdHRyc3xyZXBsYWNlU3RyaW5nc3xzZXF8c29ydHxzdHJpbmdMZW5ndGh8c3ViKD86c3RyaW5nKT98dGFpbHx0aHJvd3x0byg/OkZpbGV8SlNPTnxQYXRofFN0cmluZ3xYTUwpfHRyYWNlfHR5cGVPZilcXGJ8XFxiZm9sZGwnXFxCLyxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvWz0hPD5dPT98XFwrXFwrP3xcXHxcXHx8JiZ8XFwvXFwvfC0+P3xbP0BdLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fSgpW1xcXS4sOjtdL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5uaXguc3RyaW5nLmluc2lkZS5pbnRlcnBvbGF0aW9uLmluc2lkZS5yZXN0ID1cbiAgICBQcmlzbS5sYW5ndWFnZXMubml4XG59XG4iXSwic291cmNlUm9vdCI6IiJ9