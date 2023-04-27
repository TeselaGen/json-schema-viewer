(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_stylus"],{

/***/ "./node_modules/refractor/lang/stylus.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/stylus.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = stylus
stylus.displayName = 'stylus'
stylus.aliases = []
function stylus(Prism) {
  ;(function(Prism) {
    var inside = {
      url: /url\((["']?).*?\1\)/i,
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: true
      },
      interpolation: null,
      // See below
      func: null,
      // See below
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
        lookbehind: true
      },
      hexcode: /#[\da-f]{3,6}/i,
      number: /\b\d+(?:\.\d+)?%?/,
      boolean: /\b(?:true|false)\b/,
      operator: [
        // We want non-word chars around "-" because it is
        // accepted in property names.
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
      ],
      punctuation: /[{}()\[\];:,]/
    }
    inside['interpolation'] = {
      pattern: /\{[^\r\n}:]+\}/,
      alias: 'variable',
      inside: {
        delimiter: {
          pattern: /^{|}$/,
          alias: 'punctuation'
        },
        rest: inside
      }
    }
    inside['func'] = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: {
        function: /^[^(]+/,
        rest: inside
      }
    }
    Prism.languages.stylus = {
      comment: {
        pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule-declaration': {
        pattern: /(^\s*)@.+/m,
        lookbehind: true,
        inside: {
          atrule: /^@[\w-]+/,
          rest: inside
        }
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
        lookbehind: true,
        inside: {
          variable: /^\S+/,
          rest: inside
        }
      },
      statement: {
        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
        lookbehind: true,
        inside: {
          keyword: /^\S+/,
          rest: inside
        }
      },
      // A property/value pair cannot end with a comma or a brace
      // It cannot have indented content unless it ended with a semicolon
      'property-declaration': {
        pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
        lookbehind: true,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: {
              interpolation: inside.interpolation
            }
          },
          rest: inside
        }
      },
      // A selector can contain parentheses only as part of a pseudo-element
      // It can span multiple lines.
      // It must end with a comma or an accolade or have indented content.
      selector: {
        pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
        lookbehind: true,
        inside: {
          interpolation: inside.interpolation,
          punctuation: /[{},]/
        }
      },
      func: inside.func,
      string: inside.string,
      interpolation: inside.interpolation,
      punctuation: /[{}()\[\];:.]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3R5bHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx5QkFBeUIsSUFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTyxLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixFQUFFO0FBQ3hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzREFBc0QsR0FBRyxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQixHQUFHLFFBQVEsdUJBQXVCLFVBQVUsSUFBSSw2QkFBNkI7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Q0FBdUMsR0FBRyxRQUFRLHVDQUF1Qyx1Q0FBdUMsR0FBRyxRQUFRLGNBQWMscUJBQXFCO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuYzU4NGJmOTcyNTljNWU1OTk5NmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsdXNcbnN0eWx1cy5kaXNwbGF5TmFtZSA9ICdzdHlsdXMnXG5zdHlsdXMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzdHlsdXMoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciBpbnNpZGUgPSB7XG4gICAgICB1cmw6IC91cmxcXCgoW1wiJ10/KS4qP1xcMVxcKS9pLFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXCJ8JykoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgaW50ZXJwb2xhdGlvbjogbnVsbCxcbiAgICAgIC8vIFNlZSBiZWxvd1xuICAgICAgZnVuYzogbnVsbCxcbiAgICAgIC8vIFNlZSBiZWxvd1xuICAgICAgaW1wb3J0YW50OiAvXFxCISg/OmltcG9ydGFudHxvcHRpb25hbClcXGIvaSxcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFxccyspKD86KD86aWZ8ZWxzZXxmb3J8cmV0dXJufHVubGVzcykoPz1cXHMrfCQpfEBbXFx3LV0rKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBoZXhjb2RlOiAvI1tcXGRhLWZdezMsNn0vaSxcbiAgICAgIG51bWJlcjogL1xcYlxcZCsoPzpcXC5cXGQrKT8lPy8sXG4gICAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgICAgb3BlcmF0b3I6IFtcbiAgICAgICAgLy8gV2Ugd2FudCBub24td29yZCBjaGFycyBhcm91bmQgXCItXCIgYmVjYXVzZSBpdCBpc1xuICAgICAgICAvLyBhY2NlcHRlZCBpbiBwcm9wZXJ0eSBuYW1lcy5cbiAgICAgICAgL358WyshXFwvJTw+Pz1dPT98Wy06XT18XFwqWyo9XT98XFwuK3wmJnxcXHxcXHx8XFxCLVxcQnxcXGIoPzphbmR8aW58aXMoPzogYXwgZGVmaW5lZHwgbm90fG50KT98bm90fG9yKVxcYi9cbiAgICAgIF0sXG4gICAgICBwdW5jdHVhdGlvbjogL1t7fSgpXFxbXFxdOzosXS9cbiAgICB9XG4gICAgaW5zaWRlWydpbnRlcnBvbGF0aW9uJ10gPSB7XG4gICAgICBwYXR0ZXJuOiAvXFx7W15cXHJcXG59Ol0rXFx9LyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICAgIHBhdHRlcm46IC9ee3x9JC8sXG4gICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfVxuICAgIGluc2lkZVsnZnVuYyddID0ge1xuICAgICAgcGF0dGVybjogL1tcXHctXStcXChbXildKlxcKS4qLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBmdW5jdGlvbjogL15bXihdKy8sXG4gICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgfVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuc3R5bHVzID0ge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkoXFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgJ2F0cnVsZS1kZWNsYXJhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogLyheXFxzKilALisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgYXRydWxlOiAvXkBbXFx3LV0rLyxcbiAgICAgICAgICByZXN0OiBpbnNpZGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICd2YXJpYWJsZS1kZWNsYXJhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKilbXFx3JC1dK1xccyouPz1bIFxcdF0qKD86KD86XFx7W159XSpcXH18LispfCQpL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiAvXlxcUysvLFxuICAgICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RhdGVtZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopKD86aWZ8ZWxzZXxmb3J8cmV0dXJufHVubGVzcylbIFxcdF0rLisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAga2V5d29yZDogL15cXFMrLyxcbiAgICAgICAgICByZXN0OiBpbnNpZGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEEgcHJvcGVydHkvdmFsdWUgcGFpciBjYW5ub3QgZW5kIHdpdGggYSBjb21tYSBvciBhIGJyYWNlXG4gICAgICAvLyBJdCBjYW5ub3QgaGF2ZSBpbmRlbnRlZCBjb250ZW50IHVubGVzcyBpdCBlbmRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gICAgICAncHJvcGVydHktZGVjbGFyYXRpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oKD86XnxcXHspKFsgXFx0XSopKSg/OltcXHctXXxcXHtbXn1cXHJcXG5dK1xcfSkrKD86XFxzKjpcXHMqfFsgXFx0XSspW157XFxyXFxuXSooPzo7fFtee1xcclxcbixdKD89JCkoPyEoXFxyP1xcbnxcXHIpKD86XFx7fFxcMlsgXFx0XSspKSkvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHJvcGVydHk6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eW15cXHM6XSsvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIGludGVycG9sYXRpb246IGluc2lkZS5pbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN0OiBpbnNpZGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEEgc2VsZWN0b3IgY2FuIGNvbnRhaW4gcGFyZW50aGVzZXMgb25seSBhcyBwYXJ0IG9mIGEgcHNldWRvLWVsZW1lbnRcbiAgICAgIC8vIEl0IGNhbiBzcGFuIG11bHRpcGxlIGxpbmVzLlxuICAgICAgLy8gSXQgbXVzdCBlbmQgd2l0aCBhIGNvbW1hIG9yIGFuIGFjY29sYWRlIG9yIGhhdmUgaW5kZW50ZWQgY29udGVudC5cbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopKD86KD89XFxTKSg/Oltee31cXHJcXG46KCldfDo6P1tcXHctXSsoPzpcXChbXilcXHJcXG5dKlxcKSk/fFxce1tefVxcclxcbl0rXFx9KSspKD86KD86XFxyP1xcbnxcXHIpKD86XFwxKD86KD89XFxTKSg/Oltee31cXHJcXG46KCldfDo6P1tcXHctXSsoPzpcXChbXilcXHJcXG5dKlxcKSk/fFxce1tefVxcclxcbl0rXFx9KSspKSkqKD86LCR8XFx7fCg/PSg/Olxccj9cXG58XFxyKSg/Olxce3xcXDFbIFxcdF0rKSkpL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGludGVycG9sYXRpb246IGluc2lkZS5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvW3t9LF0vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jOiBpbnNpZGUuZnVuYyxcbiAgICAgIHN0cmluZzogaW5zaWRlLnN0cmluZyxcbiAgICAgIGludGVycG9sYXRpb246IGluc2lkZS5pbnRlcnBvbGF0aW9uLFxuICAgICAgcHVuY3R1YXRpb246IC9be30oKVxcW1xcXTs6Ll0vXG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=