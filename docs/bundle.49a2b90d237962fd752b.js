(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_swift"],{

/***/ "./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = swift
swift.displayName = 'swift'
swift.aliases = []
function swift(Prism) {
  // issues: nested multiline comments
  Prism.languages.swift = Prism.languages.extend('clike', {
    string: {
      pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
          inside: {
            delimiter: {
              pattern: /^\\\(|\)$/,
              alias: 'variable'
            } // See rest below
          }
        }
      }
    },
    keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
  })
  Prism.languages.swift['string'].inside['interpolation'].inside.rest =
    Prism.languages.swift
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3dpZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQkFBK0IsR0FBRztBQUNsQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNDlhMmI5MGQyMzc5NjJmZDc1MmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzd2lmdFxuc3dpZnQuZGlzcGxheU5hbWUgPSAnc3dpZnQnXG5zd2lmdC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHN3aWZ0KFByaXNtKSB7XG4gIC8vIGlzc3VlczogbmVzdGVkIG11bHRpbGluZSBjb21tZW50c1xuICBQcmlzbS5sYW5ndWFnZXMuc3dpZnQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oXCJ8JykoXFxcXCg/OlxcKCg/OlteKCldfFxcKFteKV0rXFwpKStcXCl8XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcXFxcXCgoPzpbXigpXXxcXChbXildK1xcKSkrXFwpLyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxcXFxcXCh8XFwpJC8sXG4gICAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgICB9IC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YXN8YXNzb2NpYXRpdml0eXxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnRpbnVlfGNvbnZlbmllbmNlfGRlZmF1bHR8ZGVmZXJ8ZGVpbml0fGRpZFNldHxkb3xkeW5hbWljKD86VHlwZSk/fGVsc2V8ZW51bXxleHRlbnNpb258ZmFsbHRocm91Z2h8ZmluYWx8Zm9yfGZ1bmN8Z2V0fGd1YXJkfGlmfGltcG9ydHxpbnxpbmZpeHxpbml0fGlub3V0fGludGVybmFsfGlzfGxhenl8bGVmdHxsZXR8bXV0YXRpbmd8bmV3fG5vbmV8bm9ubXV0YXRpbmd8b3BlcmF0b3J8b3B0aW9uYWx8b3ZlcnJpZGV8cG9zdGZpeHxwcmVjZWRlbmNlfHByZWZpeHxwcml2YXRlfHByb3RvY29sfHB1YmxpY3xyZXBlYXR8cmVxdWlyZWR8cmV0aHJvd3N8cmV0dXJufHJpZ2h0fHNhZmV8c2VsZnxTZWxmfHNldHxzdGF0aWN8c3RydWN0fHN1YnNjcmlwdHxzdXBlcnxzd2l0Y2h8dGhyb3dzP3x0cnl8VHlwZXx0eXBlYWxpYXN8dW5vd25lZHx1bnNhZmV8dmFyfHdlYWt8d2hlcmV8d2hpbGV8d2lsbFNldHxfXyg/OkNPTFVNTl9ffEZJTEVfX3xGVU5DVElPTl9ffExJTkVfXykpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIoPzpbXFxkX10rKD86XFwuW1xcZGVfXSspP3wweFthLWYwLTlfXSsoPzpcXC5bYS1mMC05cF9dKyk/fDBiWzAxX10rfDBvWzAtN19dKylcXGIvaSxcbiAgICBjb25zdGFudDogL1xcYig/Om5pbHxbQS1aX117Mix9fGtbQS1aXVtBLVphLXpfXSspXFxiLyxcbiAgICBhdHJ1bGU6IC9AXFxiKD86SUIoPzpPdXRsZXR8RGVzaWduYWJsZXxBY3Rpb258SW5zcGVjdGFibGUpfGNsYXNzX3Byb3RvY29sfGV4cG9ydGVkfG5vcmV0dXJufE5TKD86Q29weWluZ3xNYW5hZ2VkKXxvYmpjfFVJQXBwbGljYXRpb25NYWlufGF1dG9fY2xvc3VyZSlcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpbQS1aXVxcUyt8YWJzfGFkdmFuY2V8YWxpZ25vZig/OlZhbHVlKT98YXNzZXJ0fGNvbnRhaW5zfGNvdW50KD86RWxlbWVudHMpP3xkZWJ1Z1ByaW50KD86bG4pP3xkaXN0YW5jZXxkcm9wKD86Rmlyc3R8TGFzdCl8ZHVtcHxlbnVtZXJhdGV8ZXF1YWx8ZmlsdGVyfGZpbmR8Zmlyc3R8Z2V0VmFMaXN0fGluZGljZXN8aXNFbXB0eXxqb2lufGxhc3R8bGV4aWNvZ3JhcGhpY2FsQ29tcGFyZXxtYXB8bWF4KD86RWxlbWVudCk/fG1pbig/OkVsZW1lbnQpP3xudW1lcmljQ2FzdHxvdmVybGFwc3xwYXJ0aXRpb258cHJpbnQoPzpsbik/fHJlZHVjZXxyZWZsZWN0fHJldmVyc2V8c2l6ZW9mKD86VmFsdWUpP3xzb3J0KD86ZWQpP3xzcGxpdHxzdGFydHNXaXRofHN0cmlkZSg/Om9mKD86VmFsdWUpPyk/fHN1ZmZpeHxzd2FwfHRvRGVidWdTdHJpbmd8dG9TdHJpbmd8dHJhbnNjb2RlfHVuZGVyZXN0aW1hdGVDb3VudHx1bnNhZmVCaXRDYXN0fHdpdGgoPzpFeHRlbmRlZExpZmV0aW1lfFVuc2FmZSg/Ok11dGFibGVQb2ludGVycz98UG9pbnRlcnM/KXxWYUxpc3QpKVxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnN3aWZ0WydzdHJpbmcnXS5pbnNpZGVbJ2ludGVycG9sYXRpb24nXS5pbnNpZGUucmVzdCA9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnN3aWZ0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9