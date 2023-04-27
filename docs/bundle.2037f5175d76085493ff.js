(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_oz"],{

/***/ "./node_modules/refractor/lang/oz.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/oz.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = oz
oz.displayName = 'oz'
oz.aliases = []
function oz(Prism) {
  Prism.languages.oz = {
    comment: /\/\*[\s\S]*?\*\/|%.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"/,
      greedy: true
    },
    atom: {
      pattern: /'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      alias: 'builtin'
    },
    keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
    function: [
      /[a-z][A-Za-z\d]*(?=\()/,
      {
        pattern: /(\{)[A-Z][A-Za-z\d]*/,
        lookbehind: true
      }
    ],
    number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
    variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
    'attr-name': /\w+(?=:)/,
    operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
    punctuation: /[\[\](){}.:;?]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvb3ouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixHQUFHO0FBQzlCO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjIwMzdmNTE3NWQ3NjA4NTQ5M2ZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb3pcbm96LmRpc3BsYXlOYW1lID0gJ296J1xub3ouYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBveihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMub3ogPSB7XG4gICAgY29tbWVudDogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98JS4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlteXCJcXFxcXXxcXFxcW1xcc1xcU10pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgYXRvbToge1xuICAgICAgcGF0dGVybjogLycoPzpbXidcXFxcXXxcXFxcW1xcc1xcU10pKicvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAga2V5d29yZDogL1skX118XFxbXFxdfFxcYig/OmF0fGF0dHJ8Y2FzZXxjYXRjaHxjaG9pY2V8Y2xhc3N8Y29uZHxkZWNsYXJlfGRlZmluZXxkaXN8ZWxzZSg/OmNhc2V8aWYpP3xlbmR8ZXhwb3J0fGZhaWx8ZmFsc2V8ZmVhdHxmaW5hbGx5fGZyb218ZnVufGZ1bmN0b3J8aWZ8aW1wb3J0fGlufGxvY2FsfGxvY2t8bWV0aHxuaWx8bm90fG9mfG9yfHByZXBhcmV8cHJvY3xwcm9wfHJhaXNlfHJlcXVpcmV8c2VsZnxza2lwfHRoZW58dGhyZWFkfHRydWV8dHJ5fHVuaXQpXFxiLyxcbiAgICBmdW5jdGlvbjogW1xuICAgICAgL1thLXpdW0EtWmEtelxcZF0qKD89XFwoKS8sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXFx7KVtBLVpdW0EtWmEtelxcZF0qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgbnVtYmVyOiAvXFxiKD86MFtieF1bXFxkYS1mXSt8XFxkK1xcLj9cXGQqKD86ZX4/XFxkKyk/XFxiKXwmKD86W15cXFxcXXxcXFxcKD86XFxkezN9fC4pKS9pLFxuICAgIHZhcmlhYmxlOiAvXFxiW0EtWl1bQS1aYS16XFxkXSp8YCg/OlteYFxcXFxdfFxcXFwuKStgLyxcbiAgICAnYXR0ci1uYW1lJzogL1xcdysoPz06KS8sXG4gICAgb3BlcmF0b3I6IC86KD86PXw6Oj8pfDxbLTo9XT98PSg/Oj18PD86Pyl8Pj0/Oj98XFxcXD06P3whIT98W3wjK1xcLSpcXC8sfl5AXXxcXGIoPzphbmR0aGVufGRpdnxtb2R8b3JlbHNlKVxcYi8sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCl7fS46Oz9dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9