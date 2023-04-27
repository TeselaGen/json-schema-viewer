(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_diff"],{

/***/ "./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = diff
diff.displayName = 'diff'
diff.aliases = []
function diff(Prism) {
  ;(function(Prism) {
    Prism.languages.diff = {
      coord: [
        // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
        /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
        /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
        /^\d+.*$/m
      ] // deleted, inserted, unchanged, diff
    }
    /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */
    var PREFIXES = {
      'deleted-sign': '-',
      'deleted-arrow': '<',
      'inserted-sign': '+',
      'inserted-arrow': '>',
      unchanged: ' ',
      diff: '!'
    } // add a token for each prefix
    Object.keys(PREFIXES).forEach(function(name) {
      var prefix = PREFIXES[name]
      var alias = []
      if (!/^\w+$/.test(name)) {
        // "deleted-sign" -> "deleted"
        alias.push(/\w+/.exec(name)[0])
      }
      if (name === 'diff') {
        alias.push('bold')
      }
      Prism.languages.diff[name] = {
        // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
        pattern: RegExp(
          '^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
          'm'
        ),
        alias: alias
      }
    }) // make prefixes available to Diff plugin
    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
      value: PREFIXES
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZGlmZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS42YmEzNzZmZGUxZjM2YmIwNzdkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbmRpZmYuZGlzcGxheU5hbWUgPSAnZGlmZidcbmRpZmYuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBkaWZmKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuZGlmZiA9IHtcbiAgICAgIGNvb3JkOiBbXG4gICAgICAgIC8vIE1hdGNoIGFsbCBraW5kcyBvZiBjb29yZCBsaW5lcyAocHJlZml4ZWQgYnkgXCIrKytcIiwgXCItLS1cIiBvciBcIioqKlwiKS5cbiAgICAgICAgL14oPzpcXCp7M318LXszfXxcXCt7M30pLiokL20sIC8vIE1hdGNoIFwiQEAgLi4uIEBAXCIgY29vcmQgbGluZXMgaW4gdW5pZmllZCBkaWZmLlxuICAgICAgICAvXkBALipAQCQvbSwgLy8gTWF0Y2ggY29vcmQgbGluZXMgaW4gbm9ybWFsIGRpZmYgKHN0YXJ0cyB3aXRoIGEgbnVtYmVyKS5cbiAgICAgICAgL15cXGQrLiokL21cbiAgICAgIF0gLy8gZGVsZXRlZCwgaW5zZXJ0ZWQsIHVuY2hhbmdlZCwgZGlmZlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIG1hcCBmcm9tIHRoZSBuYW1lIG9mIGEgYmxvY2sgdG8gaXRzIGxpbmUgcHJlZml4LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG4gICAgICovXG4gICAgdmFyIFBSRUZJWEVTID0ge1xuICAgICAgJ2RlbGV0ZWQtc2lnbic6ICctJyxcbiAgICAgICdkZWxldGVkLWFycm93JzogJzwnLFxuICAgICAgJ2luc2VydGVkLXNpZ24nOiAnKycsXG4gICAgICAnaW5zZXJ0ZWQtYXJyb3cnOiAnPicsXG4gICAgICB1bmNoYW5nZWQ6ICcgJyxcbiAgICAgIGRpZmY6ICchJ1xuICAgIH0gLy8gYWRkIGEgdG9rZW4gZm9yIGVhY2ggcHJlZml4XG4gICAgT2JqZWN0LmtleXMoUFJFRklYRVMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIHByZWZpeCA9IFBSRUZJWEVTW25hbWVdXG4gICAgICB2YXIgYWxpYXMgPSBbXVxuICAgICAgaWYgKCEvXlxcdyskLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIC8vIFwiZGVsZXRlZC1zaWduXCIgLT4gXCJkZWxldGVkXCJcbiAgICAgICAgYWxpYXMucHVzaCgvXFx3Ky8uZXhlYyhuYW1lKVswXSlcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSAnZGlmZicpIHtcbiAgICAgICAgYWxpYXMucHVzaCgnYm9sZCcpXG4gICAgICB9XG4gICAgICBQcmlzbS5sYW5ndWFnZXMuZGlmZltuYW1lXSA9IHtcbiAgICAgICAgLy8gcGF0dGVybjogL14oPzpbX10uKig/Olxcclxcbj98XFxufCg/IVtcXHNcXFNdKSkpKy9tXG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAnXig/OlsnICsgcHJlZml4ICsgJ10uKig/Olxcclxcbj98XFxufCg/IVtcXFxcc1xcXFxTXSkpKSsnLFxuICAgICAgICAgICdtJ1xuICAgICAgICApLFxuICAgICAgICBhbGlhczogYWxpYXNcbiAgICAgIH1cbiAgICB9KSAvLyBtYWtlIHByZWZpeGVzIGF2YWlsYWJsZSB0byBEaWZmIHBsdWdpblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMuZGlmZiwgJ1BSRUZJWEVTJywge1xuICAgICAgdmFsdWU6IFBSRUZJWEVTXG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9