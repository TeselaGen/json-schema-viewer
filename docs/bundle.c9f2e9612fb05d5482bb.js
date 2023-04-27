(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_batch"],{

/***/ "./node_modules/refractor/lang/batch.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/batch.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = batch
batch.displayName = 'batch'
batch.aliases = []
function batch(Prism) {
  ;(function(Prism) {
    var variable = /%%?[~:\w]+%?|!\S+!/
    var parameter = {
      pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
      alias: 'attr-name',
      inside: {
        punctuation: /:/
      }
    }
    var string = /"[^"]*"/
    var number = /(?:\b|-)\d+\b/
    Prism.languages.batch = {
      comment: [
        /^::.*/m,
        {
          pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true
        }
      ],
      label: {
        pattern: /^:.*/m,
        alias: 'property'
      },
      command: [
        {
          // FOR command
          pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
          lookbehind: true,
          inside: {
            keyword: /^for\b|\b(?:in|do)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            punctuation: /[()',]/
          }
        },
        {
          // IF command
          pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
          lookbehind: true,
          inside: {
            keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
          }
        },
        {
          // ELSE command
          pattern: /((?:^|[&()])[ \t]*)else\b/im,
          lookbehind: true,
          inside: {
            keyword: /^else\b/i
          }
        },
        {
          // SET command
          pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^set\b/i,
            string: string,
            parameter: parameter,
            variable: [variable, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
            number: number,
            operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
            punctuation: /[()',]/
          }
        },
        {
          // Other commands
          pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^\w+\b/i,
            string: string,
            parameter: parameter,
            label: {
              pattern: /(^\s*):\S+/m,
              lookbehind: true,
              alias: 'property'
            },
            variable: variable,
            number: number,
            operator: /\^/
          }
        }
      ],
      operator: /[&@]/,
      punctuation: /[()']/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYmF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS5jOWYyZTk2MTJmYjA1ZDU0ODJiYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhdGNoXG5iYXRjaC5kaXNwbGF5TmFtZSA9ICdiYXRjaCdcbmJhdGNoLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYmF0Y2goUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciB2YXJpYWJsZSA9IC8lJT9bfjpcXHddKyU/fCFcXFMrIS9cbiAgICB2YXIgcGFyYW1ldGVyID0ge1xuICAgICAgcGF0dGVybjogL1xcL1thLXo/XSsoPz1bIDpdfCQpOj98LVthLXpdXFxifC0tW2Etei1dK1xcYi9pbSxcbiAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBwdW5jdHVhdGlvbjogLzovXG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSAvXCJbXlwiXSpcIi9cbiAgICB2YXIgbnVtYmVyID0gLyg/OlxcYnwtKVxcZCtcXGIvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmJhdGNoID0ge1xuICAgICAgY29tbWVudDogW1xuICAgICAgICAvXjo6LiovbSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopcmVtXFxiKD86W15eJilcXHJcXG5dfFxcXig/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBwYXR0ZXJuOiAvXjouKi9tLFxuICAgICAgICBhbGlhczogJ3Byb3BlcnR5J1xuICAgICAgfSxcbiAgICAgIGNvbW1hbmQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZPUiBjb21tYW5kXG4gICAgICAgICAgcGF0dGVybjogLygoPzpefFsmKF0pWyBcXHRdKilmb3IoPzogP1xcL1thLXo/XSg/OlsgOl0oPzpcIlteXCJdKlwifFxcUyspKT8pKiBcXFMrIGluIFxcKFteKV0rXFwpIGRvL2ltLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAvXmZvclxcYnxcXGIoPzppbnxkbylcXGIvaSxcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nLFxuICAgICAgICAgICAgcGFyYW1ldGVyOiBwYXJhbWV0ZXIsXG4gICAgICAgICAgICB2YXJpYWJsZTogdmFyaWFibGUsXG4gICAgICAgICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWygpJyxdL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIElGIGNvbW1hbmRcbiAgICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qKWlmKD86ID9cXC9bYS16P10oPzpbIDpdKD86XCJbXlwiXSpcInxcXFMrKSk/KSogKD86bm90ICk/KD86Y21kZXh0dmVyc2lvbiBcXGQrfGRlZmluZWQgXFx3K3xlcnJvcmxldmVsIFxcZCt8ZXhpc3QgXFxTK3woPzpcIlteXCJdKlwifFxcUyspPyg/Oj09fCAoPzplcXV8bmVxfGxzc3xsZXF8Z3RyfGdlcSkgKSg/OlwiW15cIl0qXCJ8XFxTKykpL2ltLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAvXmlmXFxifFxcYig/Om5vdHxjbWRleHR2ZXJzaW9ufGRlZmluZWR8ZXJyb3JsZXZlbHxleGlzdClcXGIvaSxcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nLFxuICAgICAgICAgICAgcGFyYW1ldGVyOiBwYXJhbWV0ZXIsXG4gICAgICAgICAgICB2YXJpYWJsZTogdmFyaWFibGUsXG4gICAgICAgICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgICAgICAgIG9wZXJhdG9yOiAvXFxefD09fFxcYig/OmVxdXxuZXF8bHNzfGxlcXxndHJ8Z2VxKVxcYi9pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gRUxTRSBjb21tYW5kXG4gICAgICAgICAgcGF0dGVybjogLygoPzpefFsmKCldKVsgXFx0XSopZWxzZVxcYi9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL15lbHNlXFxiL2lcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBTRVQgY29tbWFuZFxuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopc2V0KD86ID9cXC9bYS16XSg/OlsgOl0oPzpcIlteXCJdKlwifFxcUyspKT8pKiAoPzpbXl4mKVxcclxcbl18XFxeKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAvXnNldFxcYi9pLFxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgICAgICAgICBwYXJhbWV0ZXI6IHBhcmFtZXRlcixcbiAgICAgICAgICAgIHZhcmlhYmxlOiBbdmFyaWFibGUsIC9cXHcrKD89KD86WypcXC8lK1xcLSZefF18PDx8Pj4pPz0pL10sXG4gICAgICAgICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgICAgICAgIG9wZXJhdG9yOiAvWypcXC8lK1xcLSZefF09P3w8PD0/fD4+PT98WyF+Xz1dLyxcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWygpJyxdL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIE90aGVyIGNvbW1hbmRzXG4gICAgICAgICAgcGF0dGVybjogLygoPzpefFsmKF0pWyBcXHRdKkA/KVxcdytcXGIoPzpbXl4mKVxcclxcbl18XFxeKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAvXlxcdytcXGIvaSxcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nLFxuICAgICAgICAgICAgcGFyYW1ldGVyOiBwYXJhbWV0ZXIsXG4gICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKTpcXFMrL20sXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICAgIGFsaWFzOiAncHJvcGVydHknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICBvcGVyYXRvcjogL1xcXi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvcGVyYXRvcjogL1smQF0vLFxuICAgICAgcHVuY3R1YXRpb246IC9bKCknXS9cbiAgICB9XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==