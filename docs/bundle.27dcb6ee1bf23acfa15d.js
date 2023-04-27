(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_parser"],{

/***/ "./node_modules/refractor/lang/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parser.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = parser
parser.displayName = 'parser'
parser.aliases = []
function parser(Prism) {
  ;(function(Prism) {
    var parser = (Prism.languages.parser = Prism.languages.extend('markup', {
      keyword: {
        pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
        lookbehind: true
      },
      variable: {
        pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          punctuation: /\.|:+/
        }
      },
      function: {
        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /(^@)(?:GET_|SET_)/,
            lookbehind: true
          },
          punctuation: /\.|:+/
        }
      },
      escape: {
        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
        alias: 'builtin'
      },
      punctuation: /[\[\](){};]/
    }))
    parser = Prism.languages.insertBefore('parser', 'keyword', {
      'parser-comment': {
        pattern: /(\s)#.*/,
        lookbehind: true,
        alias: 'comment'
      },
      expression: {
        // Allow for 3 levels of depth
        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
        greedy: true,
        lookbehind: true,
        inside: {
          string: {
            pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
            lookbehind: true
          },
          keyword: parser.keyword,
          variable: parser.variable,
          function: parser.function,
          boolean: /\b(?:true|false)\b/,
          number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
          escape: parser.escape,
          operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
          punctuation: parser.punctuation
        }
      }
    })
    parser = Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        expression: parser.expression,
        keyword: parser.keyword,
        variable: parser.variable,
        function: parser.function,
        escape: parser.escape,
        'parser-punctuation': {
          pattern: parser.punctuation,
          alias: 'punctuation'
        }
      },
      parser['tag'].inside['attr-value']
    )
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcGFyc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBLE9BQU87QUFDUCw4QkFBOEI7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjI3ZGNiNmVlMWJmMjNhY2ZhMTVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyXG5wYXJzZXIuZGlzcGxheU5hbWUgPSAncGFyc2VyJ1xucGFyc2VyLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcGFyc2VyKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgcGFyc2VyID0gKFByaXNtLmxhbmd1YWdlcy5wYXJzZXIgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG4gICAgICBrZXl3b3JkOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXl5dKSg/OlxcXig/OmNhc2V8ZXZhbHxmb3J8aWZ8c3dpdGNofHRocm93KVxcYnxAKD86QkFTRXxDTEFTU3xHRVQoPzpfREVGQVVMVCk/fE9QVElPTlN8U0VUX0RFRkFVTFR8VVNFKVxcYikvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXl0pXFxCXFwkKD86XFx3K3woPz1bLntdKSkoPzooPzpcXC58Ojo/KVxcdyspKig/OlxcLnw6Oj8pPy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwufDorL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXl0pXFxCW0BeXVxcdysoPzooPzpcXC58Ojo/KVxcdyspKig/OlxcLnw6Oj8pPy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXkApKD86R0VUX3xTRVRfKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLnw6Ky9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVzY2FwZToge1xuICAgICAgICBwYXR0ZXJuOiAvXFxeKD86WyReO0AoKVxcW1xcXXt9XCInOl18I1thLWZcXGRdKikvaSxcbiAgICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXSgpe307XS9cbiAgICB9KSlcbiAgICBwYXJzZXIgPSBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwYXJzZXInLCAna2V5d29yZCcsIHtcbiAgICAgICdwYXJzZXItY29tbWVudCc6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXHMpIy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdjb21tZW50J1xuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIDMgbGV2ZWxzIG9mIGRlcHRoXG4gICAgICAgIHBhdHRlcm46IC8oXnxbXl5dKVxcKCg/OlteKCldfFxcKCg/OlteKCldfFxcKCg/OlteKCldKSpcXCkpKlxcKSkqXFwpLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBzdHJpbmc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXl5dKShbXCInXSkoPzooPyFcXDIpW15eXXxcXF5bXFxzXFxTXSkqXFwyLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtleXdvcmQ6IHBhcnNlci5rZXl3b3JkLFxuICAgICAgICAgIHZhcmlhYmxlOiBwYXJzZXIudmFyaWFibGUsXG4gICAgICAgICAgZnVuY3Rpb246IHBhcnNlci5mdW5jdGlvbixcbiAgICAgICAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgICAgICAgIG51bWJlcjogL1xcYig/OjB4W2EtZlxcZF0rfFxcZCtcXC4/XFxkKig/OmVbKy1dP1xcZCspPylcXGIvaSxcbiAgICAgICAgICBlc2NhcGU6IHBhcnNlci5lc2NhcGUsXG4gICAgICAgICAgb3BlcmF0b3I6IC9bfisqXFwvXFxcXCVdfCEoPzpcXHxcXHw/fD0pP3wmJj98XFx8XFx8P3w9PXw8Wzw9XT98Pls+PV0/fC1bZmRdP3xcXGIoPzpkZWZ8ZXF8Z2V8Z3R8aW58aXN8bGV8bHR8bmUpXFxiLyxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogcGFyc2VyLnB1bmN0dWF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHBhcnNlciA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgICAnaW5zaWRlJyxcbiAgICAgICdwdW5jdHVhdGlvbicsXG4gICAgICB7XG4gICAgICAgIGV4cHJlc3Npb246IHBhcnNlci5leHByZXNzaW9uLFxuICAgICAgICBrZXl3b3JkOiBwYXJzZXIua2V5d29yZCxcbiAgICAgICAgdmFyaWFibGU6IHBhcnNlci52YXJpYWJsZSxcbiAgICAgICAgZnVuY3Rpb246IHBhcnNlci5mdW5jdGlvbixcbiAgICAgICAgZXNjYXBlOiBwYXJzZXIuZXNjYXBlLFxuICAgICAgICAncGFyc2VyLXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IHBhcnNlci5wdW5jdHVhdGlvbixcbiAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGFyc2VyWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXVxuICAgIClcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9