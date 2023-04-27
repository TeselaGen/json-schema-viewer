(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_matlab"],{

/***/ "./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = matlab
matlab.displayName = 'matlab'
matlab.aliases = []
function matlab(Prism) {
  Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
      pattern: /\B'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    // FIXME We could handle imaginary numbers as a whole
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbWF0bGFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFLEtBQUssUUFBUTtBQUNwQztBQUNBIiwiZmlsZSI6ImJ1bmRsZS44NGQ3MjdjYmJhN2E3NGZmZDE2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGxhYlxubWF0bGFiLmRpc3BsYXlOYW1lID0gJ21hdGxhYidcbm1hdGxhYi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1hdGxhYihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubWF0bGFiID0ge1xuICAgIGNvbW1lbnQ6IFsvJVxce1tcXHNcXFNdKj9cXH0lLywgLyUuKy9dLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1xcQicoPzonJ3xbXidcXHJcXG5dKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gRklYTUUgV2UgY291bGQgaGFuZGxlIGltYWdpbmFyeSBudW1iZXJzIGFzIGEgd2hvbGVcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbZUVdWystXT9cXGQrKT8oPzpbaWpdKT98XFxiW2lqXVxcYi8sXG4gICAga2V5d29yZDogL1xcYig/OmJyZWFrfGNhc2V8Y2F0Y2h8Y29udGludWV8ZWxzZXxlbHNlaWZ8ZW5kfGZvcnxmdW5jdGlvbnxpZnxpbmZ8TmFOfG90aGVyd2lzZXxwYXJmb3J8cGF1c2V8cGl8cmV0dXJufHN3aXRjaHx0cnl8d2hpbGUpXFxiLyxcbiAgICBmdW5jdGlvbjogLyg/IVxcZClcXHcrKD89XFxzKlxcKCkvLFxuICAgIG9wZXJhdG9yOiAvXFwuP1sqXlxcL1xcXFwnXXxbK1xcLTpAXXxbPD49fl09P3wmJj98XFx8XFx8Py8sXG4gICAgcHVuY3R1YXRpb246IC9cXC57M318Wy4sO1xcW1xcXSgpe30hXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==