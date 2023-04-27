(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_jolie"],{

/***/ "./node_modules/refractor/lang/jolie.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jolie.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = jolie
jolie.displayName = 'jolie'
jolie.aliases = []
function jolie(Prism) {
  Prism.languages.jolie = Prism.languages.extend('clike', {
    keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
    builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
    operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
    symbol: /[|;@]/,
    punctuation: /[,.]/,
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    }
  })
  delete Prism.languages.jolie['class-name']
  Prism.languages.insertBefore('jolie', 'keyword', {
    function: {
      pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
      lookbehind: true
    },
    aggregates: {
      pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
      lookbehind: true,
      inside: {
        withExtension: {
          pattern: /\bwith\s+\w+/,
          inside: {
            keyword: /\bwith\b/
          }
        },
        function: {
          pattern: /\w+/
        },
        punctuation: {
          pattern: /,/
        }
      }
    },
    redirects: {
      pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
      lookbehind: true,
      inside: {
        punctuation: {
          pattern: /,/
        },
        function: {
          pattern: /\w+/
        },
        symbol: {
          pattern: /=>/
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvam9saWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS4zNDgxMzk5Nzk0ZTQyMzgyZTQ2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpvbGllXG5qb2xpZS5kaXNwbGF5TmFtZSA9ICdqb2xpZSdcbmpvbGllLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gam9saWUoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmpvbGllID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAga2V5d29yZDogL1xcYig/OmluY2x1ZGV8ZGVmaW5lfGlzX2RlZmluZWR8dW5kZWZ8bWFpbnxpbml0fG91dHB1dFBvcnR8aW5wdXRQb3J0fExvY2F0aW9ufFByb3RvY29sfEludGVyZmFjZXN8UmVxdWVzdFJlc3BvbnNlfE9uZVdheXx0eXBlfGludGVyZmFjZXxleHRlbmRlcnx0aHJvd3N8Y3NldHxjc2V0c3xmb3J3YXJkfEFnZ3JlZ2F0ZXN8UmVkaXJlY3RzfGVtYmVkZGVkfGNvdXJpZXJ8ZXhlY3V0aW9ufHNlcXVlbnRpYWx8Y29uY3VycmVudHxzaW5nbGV8c2NvcGV8aW5zdGFsbHx0aHJvd3xjb21wfGNIfGRlZmF1bHR8Z2xvYmFsfGxpbmtJbnxsaW5rT3V0fHN5bmNocm9uaXplZHx0aGlzfG5ld3xmb3J8aWZ8ZWxzZXx3aGlsZXxpbnxKb2xpZXxKYXZhfEphdmFzY3JpcHR8bnVsbFByb2Nlc3N8c3Bhd258Y29uc3RhbnRzfHdpdGh8cHJvdmlkZXx1bnRpbHxleGl0fGZvcmVhY2h8aW5zdGFuY2VvZnxvdmVyfHNlcnZpY2UpXFxiLyxcbiAgICBidWlsdGluOiAvXFxiKD86dW5kZWZpbmVkfHN0cmluZ3xpbnR8dm9pZHxsb25nfEJ5dGV8Ym9vbHxkb3VibGV8ZmxvYXR8Y2hhcnxhbnkpXFxiLyxcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT9sPy9pLFxuICAgIG9wZXJhdG9yOiAvLVstPT5dP3xcXCtbKz1dP3w8Wzw9XT98Wz49KiFdPT98JiZ8XFx8XFx8fFs6P1xcLyVeXS8sXG4gICAgc3ltYm9sOiAvW3w7QF0vLFxuICAgIHB1bmN0dWF0aW9uOiAvWywuXS8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfVxuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmpvbGllWydjbGFzcy1uYW1lJ11cbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnam9saWUnLCAna2V5d29yZCcsIHtcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLygoPzpcXGIoPzpvdXRwdXRQb3J0fGlucHV0UG9ydHxpbnxzZXJ2aWNlfGNvdXJpZXIpXFxifEApXFxzKilcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGFnZ3JlZ2F0ZXM6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiQWdncmVnYXRlc1xccyo6XFxzKikoPzpcXHcrKD86XFxzK3dpdGhcXHMrXFx3Kyk/XFxzKixcXHMqKSpcXHcrKD86XFxzK3dpdGhcXHMrXFx3Kyk/LyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgd2l0aEV4dGVuc2lvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJ3aXRoXFxzK1xcdysvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL1xcYndpdGhcXGIvXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXHcrL1xuICAgICAgICB9LFxuICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC8sL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZWRpcmVjdHM6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiUmVkaXJlY3RzXFxzKjpcXHMqKSg/OlxcdytcXHMqPT5cXHMqXFx3K1xccyosXFxzKikqKD86XFx3K1xccyo9PlxccypcXHcrKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgcGF0dGVybjogLywvXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcdysvXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHBhdHRlcm46IC89Pi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=