(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_latex"],{

/***/ "./node_modules/refractor/lang/latex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latex.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = latex
latex.displayName = 'latex'
latex.aliases = ['tex', 'context']
function latex(Prism) {
  ;(function(Prism) {
    var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i
    var insideEqu = {
      'equation-command': {
        pattern: funcPattern,
        alias: 'regex'
      }
    }
    Prism.languages.latex = {
      comment: /%.*/m,
      // the verbatim environment prints whitespace to the document
      cdata: {
        pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: true
      },
      /*
       * equations can be between $$ $$ or $ $ or \( \) or \[ \]
       * (all are multiline)
       */
      equation: [
        {
          pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
          inside: insideEqu,
          alias: 'string'
        },
        {
          pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: true,
          inside: insideEqu,
          alias: 'string'
        }
      ],
      /*
       * arguments which are keywords or references are highlighted
       * as keywords
       */
      keyword: {
        pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
        lookbehind: true
      },
      url: {
        pattern: /(\\url\{)[^}]+(?=\})/,
        lookbehind: true
      },
      /*
       * section or chapter headlines are highlighted as bold so that
       * they stand out more
       */
      headline: {
        pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
        lookbehind: true,
        alias: 'class-name'
      },
      function: {
        pattern: funcPattern,
        alias: 'selector'
      },
      punctuation: /[[\]{}&]/
    }
    Prism.languages.tex = Prism.languages.latex
    Prism.languages.context = Prism.languages.latex
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbGF0ZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEIsbUJBQW1CLElBQUk7QUFDakY7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCLHVEQUF1RCxtQkFBbUIsSUFBSTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixJQUFJLE9BQU87QUFDdEc7QUFDQSxPQUFPO0FBQ1A7QUFDQSwwQkFBMEIsSUFBSSxPQUFPO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSkFBK0osSUFBSSxPQUFPO0FBQzFLO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjIwZTFiNTkxMDJmNzFiZWZiMGM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGF0ZXhcbmxhdGV4LmRpc3BsYXlOYW1lID0gJ2xhdGV4J1xubGF0ZXguYWxpYXNlcyA9IFsndGV4JywgJ2NvbnRleHQnXVxuZnVuY3Rpb24gbGF0ZXgoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciBmdW5jUGF0dGVybiA9IC9cXFxcKD86W15hLXooKVtcXF1dfFthLXoqXSspL2lcbiAgICB2YXIgaW5zaWRlRXF1ID0ge1xuICAgICAgJ2VxdWF0aW9uLWNvbW1hbmQnOiB7XG4gICAgICAgIHBhdHRlcm46IGZ1bmNQYXR0ZXJuLFxuICAgICAgICBhbGlhczogJ3JlZ2V4J1xuICAgICAgfVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMubGF0ZXggPSB7XG4gICAgICBjb21tZW50OiAvJS4qL20sXG4gICAgICAvLyB0aGUgdmVyYmF0aW0gZW52aXJvbm1lbnQgcHJpbnRzIHdoaXRlc3BhY2UgdG8gdGhlIGRvY3VtZW50XG4gICAgICBjZGF0YToge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcXFxiZWdpblxceygoPzp2ZXJiYXRpbXxsc3RsaXN0aW5nKVxcKj8pXFx9KVtcXHNcXFNdKj8oPz1cXFxcZW5kXFx7XFwyXFx9KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAgICogZXF1YXRpb25zIGNhbiBiZSBiZXR3ZWVuICQkICQkIG9yICQgJCBvciBcXCggXFwpIG9yIFxcWyBcXF1cbiAgICAgICAqIChhbGwgYXJlIG11bHRpbGluZSlcbiAgICAgICAqL1xuICAgICAgZXF1YXRpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXCRcXCQoPzpcXFxcW1xcc1xcU118W15cXFxcJF0pK1xcJFxcJHxcXCQoPzpcXFxcW1xcc1xcU118W15cXFxcJF0pK1xcJHxcXFxcXFwoW1xcc1xcU10qP1xcXFxcXCl8XFxcXFxcW1tcXHNcXFNdKj9cXFxcXFxdLyxcbiAgICAgICAgICBpbnNpZGU6IGluc2lkZUVxdSxcbiAgICAgICAgICBhbGlhczogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFxcXGJlZ2luXFx7KCg/OmVxdWF0aW9ufG1hdGh8ZXFuYXJyYXl8YWxpZ258bXVsdGxpbmV8Z2F0aGVyKVxcKj8pXFx9KVtcXHNcXFNdKj8oPz1cXFxcZW5kXFx7XFwyXFx9KS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IGluc2lkZUVxdSxcbiAgICAgICAgICBhbGlhczogJ3N0cmluZydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8qXG4gICAgICAgKiBhcmd1bWVudHMgd2hpY2ggYXJlIGtleXdvcmRzIG9yIHJlZmVyZW5jZXMgYXJlIGhpZ2hsaWdodGVkXG4gICAgICAgKiBhcyBrZXl3b3Jkc1xuICAgICAgICovXG4gICAgICBrZXl3b3JkOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxcXCg/OmJlZ2lufGVuZHxyZWZ8Y2l0ZXxsYWJlbHx1c2VwYWNrYWdlfGRvY3VtZW50Y2xhc3MpKD86XFxbW15cXF1dK1xcXSk/XFx7KVtefV0rKD89XFx9KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXFxcdXJsXFx7KVtefV0rKD89XFx9KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAgICogc2VjdGlvbiBvciBjaGFwdGVyIGhlYWRsaW5lcyBhcmUgaGlnaGxpZ2h0ZWQgYXMgYm9sZCBzbyB0aGF0XG4gICAgICAgKiB0aGV5IHN0YW5kIG91dCBtb3JlXG4gICAgICAgKi9cbiAgICAgIGhlYWRsaW5lOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxcXCg/OnBhcnR8Y2hhcHRlcnxzZWN0aW9ufHN1YnNlY3Rpb258ZnJhbWV0aXRsZXxzdWJzdWJzZWN0aW9ufHBhcmFncmFwaHxzdWJwYXJhZ3JhcGh8c3Vic3VicGFyYWdyYXBofHN1YnN1YnN1YnBhcmFncmFwaClcXCo/KD86XFxbW15cXF1dK1xcXSk/XFx7KVtefV0rKD89XFx9KD86XFxbW15cXF1dK1xcXSk/KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZSdcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjoge1xuICAgICAgICBwYXR0ZXJuOiBmdW5jUGF0dGVybixcbiAgICAgICAgYWxpYXM6ICdzZWxlY3RvcidcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1tbXFxde30mXS9cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnRleCA9IFByaXNtLmxhbmd1YWdlcy5sYXRleFxuICAgIFByaXNtLmxhbmd1YWdlcy5jb250ZXh0ID0gUHJpc20ubGFuZ3VhZ2VzLmxhdGV4XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==