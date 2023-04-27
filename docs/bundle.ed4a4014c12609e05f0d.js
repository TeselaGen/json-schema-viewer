(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_haxe"],{

/***/ "./node_modules/refractor/lang/haxe.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haxe.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = haxe
haxe.displayName = 'haxe'
haxe.aliases = []
function haxe(Prism) {
  Prism.languages.haxe = Prism.languages.extend('clike', {
    // Strings can be multi-line
    string: {
      pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
          lookbehind: true,
          inside: {
            interpolation: {
              pattern: /^\$\w*/,
              alias: 'variable'
            } // See rest below
          }
        }
      }
    },
    // The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
    keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
    operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
  })
  Prism.languages.insertBefore('haxe', 'class-name', {
    regex: {
      pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,
      greedy: true
    }
  })
  Prism.languages.insertBefore('haxe', 'keyword', {
    preprocessor: {
      pattern: /#\w+/,
      alias: 'builtin'
    },
    metadata: {
      pattern: /@:?\w+/,
      alias: 'symbol'
    },
    reification: {
      pattern: /\$(?:\w+|(?=\{))/,
      alias: 'variable'
    }
  })
  Prism.languages.haxe['string'].inside['interpolation'].inside.rest =
    Prism.languages.haxe
  delete Prism.languages.haxe['class-name']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaGF4ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUcsSUFBSTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmVkNGE0MDE0YzEyNjA5ZTA1ZjBkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGF4ZVxuaGF4ZS5kaXNwbGF5TmFtZSA9ICdoYXhlJ1xuaGF4ZS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGhheGUoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmhheGUgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAvLyBTdHJpbmdzIGNhbiBiZSBtdWx0aS1saW5lXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFxbXFxzXFxTXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwkKD86XFx3K3xcXHtbXn1dK1xcfSkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eXFwkXFx3Ki8sXG4gICAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgICB9IC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBUaGUgZmluYWwgbG9vay1haGVhZCBwcmV2ZW50cyBoaWdobGlnaHRpbmcgb2Yga2V5d29yZHMgaWYgZXhwcmVzc2lvbnMgc3VjaCBhcyBcImhheGUubWFjcm8uRXhwclwiXG4gICAga2V5d29yZDogL1xcYnRoaXNcXGJ8XFxiKD86YWJzdHJhY3R8YXN8YnJlYWt8Y2FzZXxjYXN0fGNhdGNofGNsYXNzfGNvbnRpbnVlfGRlZmF1bHR8ZG98ZHluYW1pY3xlbHNlfGVudW18ZXh0ZW5kc3xleHRlcm58ZnJvbXxmb3J8ZnVuY3Rpb258aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5saW5lfGludGVyZmFjZXxtYWNyb3xuZXd8bnVsbHxvdmVycmlkZXxwdWJsaWN8cHJpdmF0ZXxyZXR1cm58c3RhdGljfHN1cGVyfHN3aXRjaHx0aHJvd3x0b3x0cnl8dHlwZWRlZnx1c2luZ3x2YXJ8d2hpbGUpKD8hXFwuKVxcYi8sXG4gICAgb3BlcmF0b3I6IC9cXC57M318XFwrXFwrP3wtWy0+XT98Wz0hXT0/fCYmP3xcXHxcXHw/fDxbPD1dP3w+Wz49XT98WypcXC8lfl5dL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdoYXhlJywgJ2NsYXNzLW5hbWUnLCB7XG4gICAgcmVnZXg6IHtcbiAgICAgIHBhdHRlcm46IC9+XFwvKD86W15cXC9cXFxcXFxyXFxuXXxcXFxcLikrXFwvW2lnbXN1XSovLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdoYXhlJywgJ2tleXdvcmQnLCB7XG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICBwYXR0ZXJuOiAvI1xcdysvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHBhdHRlcm46IC9AOj9cXHcrLyxcbiAgICAgIGFsaWFzOiAnc3ltYm9sJ1xuICAgIH0sXG4gICAgcmVpZmljYXRpb246IHtcbiAgICAgIHBhdHRlcm46IC9cXCQoPzpcXHcrfCg/PVxceykpLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaGF4ZVsnc3RyaW5nJ10uaW5zaWRlWydpbnRlcnBvbGF0aW9uJ10uaW5zaWRlLnJlc3QgPVxuICAgIFByaXNtLmxhbmd1YWdlcy5oYXhlXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuaGF4ZVsnY2xhc3MtbmFtZSddXG59XG4iXSwic291cmNlUm9vdCI6IiJ9