(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_http"],{

/***/ "./node_modules/refractor/lang/http.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/http.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = http
http.displayName = 'http'
http.aliases = []
function http(Prism) {
  ;(function(Prism) {
    Prism.languages.http = {
      'request-line': {
        pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
        inside: {
          // HTTP Verb
          property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
          // Path or query argument
          'attr-name': /:\w+/
        }
      },
      'response-status': {
        pattern: /^HTTP\/1.[01] \d+.*/m,
        inside: {
          // Status, e.g. 200 OK
          property: {
            pattern: /(^HTTP\/1.[01] )\d+.*/i,
            lookbehind: true
          }
        }
      },
      // HTTP header name
      'header-name': {
        pattern: /^[\w-]+:(?=.)/m,
        alias: 'keyword'
      }
    } // Create a mapping of Content-Type headers to language definitions
    var langs = Prism.languages
    var httpLanguages = {
      'application/javascript': langs.javascript,
      'application/json': langs.json || langs.javascript,
      'application/xml': langs.xml,
      'text/xml': langs.xml,
      'text/html': langs.html,
      'text/css': langs.css
    } // Declare which types can also be suffixes
    var suffixTypes = {
      'application/json': true,
      'application/xml': true
    }
    /**
     * Returns a pattern for the given content type which matches it and any type which has it as a suffix.
     *
     * @param {string} contentType
     * @returns {string}
     */
    function getSuffixPattern(contentType) {
      var suffix = contentType.replace(/^[a-z]+\//, '')
      var suffixPattern = '\\w+/(?:[\\w.-]+\\+)+' + suffix + '(?![+\\w.-])'
      return '(?:' + contentType + '|' + suffixPattern + ')'
    } // Insert each content type parser that has its associated language
    // currently loaded.
    var options
    for (var contentType in httpLanguages) {
      if (httpLanguages[contentType]) {
        options = options || {}
        var pattern = suffixTypes[contentType]
          ? getSuffixPattern(contentType)
          : contentType
        options[contentType] = {
          pattern: RegExp(
            '(content-type:\\s*' +
              pattern +
              '[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*',
            'i'
          ),
          lookbehind: true,
          inside: {
            rest: httpLanguages[contentType]
          }
        }
      }
    }
    if (options) {
      Prism.languages.insertBefore('http', 'header-name', options)
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaHR0cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjA2ODkyZDM5Yzc0NjBhYjkwOGEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaHR0cFxuaHR0cC5kaXNwbGF5TmFtZSA9ICdodHRwJ1xuaHR0cC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGh0dHAoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy5odHRwID0ge1xuICAgICAgJ3JlcXVlc3QtbGluZSc6IHtcbiAgICAgICAgcGF0dGVybjogL14oPzpQT1NUfEdFVHxQVVR8REVMRVRFfE9QVElPTlN8UEFUQ0h8VFJBQ0V8Q09OTkVDVClcXHMoPzpodHRwcz86XFwvXFwvfFxcLylcXFMrXFxzSFRUUFxcL1swLTkuXSsvbSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgLy8gSFRUUCBWZXJiXG4gICAgICAgICAgcHJvcGVydHk6IC9eKD86UE9TVHxHRVR8UFVUfERFTEVURXxPUFRJT05TfFBBVENIfFRSQUNFfENPTk5FQ1QpXFxiLyxcbiAgICAgICAgICAvLyBQYXRoIG9yIHF1ZXJ5IGFyZ3VtZW50XG4gICAgICAgICAgJ2F0dHItbmFtZSc6IC86XFx3Ky9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdyZXNwb25zZS1zdGF0dXMnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eSFRUUFxcLzEuWzAxXSBcXGQrLiovbSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgLy8gU3RhdHVzLCBlLmcuIDIwMCBPS1xuICAgICAgICAgIHByb3BlcnR5OiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF5IVFRQXFwvMS5bMDFdIClcXGQrLiovaSxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBIVFRQIGhlYWRlciBuYW1lXG4gICAgICAnaGVhZGVyLW5hbWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eW1xcdy1dKzooPz0uKS9tLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICB9XG4gICAgfSAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIENvbnRlbnQtVHlwZSBoZWFkZXJzIHRvIGxhbmd1YWdlIGRlZmluaXRpb25zXG4gICAgdmFyIGxhbmdzID0gUHJpc20ubGFuZ3VhZ2VzXG4gICAgdmFyIGh0dHBMYW5ndWFnZXMgPSB7XG4gICAgICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc6IGxhbmdzLmphdmFzY3JpcHQsXG4gICAgICAnYXBwbGljYXRpb24vanNvbic6IGxhbmdzLmpzb24gfHwgbGFuZ3MuamF2YXNjcmlwdCxcbiAgICAgICdhcHBsaWNhdGlvbi94bWwnOiBsYW5ncy54bWwsXG4gICAgICAndGV4dC94bWwnOiBsYW5ncy54bWwsXG4gICAgICAndGV4dC9odG1sJzogbGFuZ3MuaHRtbCxcbiAgICAgICd0ZXh0L2Nzcyc6IGxhbmdzLmNzc1xuICAgIH0gLy8gRGVjbGFyZSB3aGljaCB0eXBlcyBjYW4gYWxzbyBiZSBzdWZmaXhlc1xuICAgIHZhciBzdWZmaXhUeXBlcyA9IHtcbiAgICAgICdhcHBsaWNhdGlvbi9qc29uJzogdHJ1ZSxcbiAgICAgICdhcHBsaWNhdGlvbi94bWwnOiB0cnVlXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwYXR0ZXJuIGZvciB0aGUgZ2l2ZW4gY29udGVudCB0eXBlIHdoaWNoIG1hdGNoZXMgaXQgYW5kIGFueSB0eXBlIHdoaWNoIGhhcyBpdCBhcyBhIHN1ZmZpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50VHlwZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U3VmZml4UGF0dGVybihjb250ZW50VHlwZSkge1xuICAgICAgdmFyIHN1ZmZpeCA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoL15bYS16XStcXC8vLCAnJylcbiAgICAgIHZhciBzdWZmaXhQYXR0ZXJuID0gJ1xcXFx3Ky8oPzpbXFxcXHcuLV0rXFxcXCspKycgKyBzdWZmaXggKyAnKD8hWytcXFxcdy4tXSknXG4gICAgICByZXR1cm4gJyg/OicgKyBjb250ZW50VHlwZSArICd8JyArIHN1ZmZpeFBhdHRlcm4gKyAnKSdcbiAgICB9IC8vIEluc2VydCBlYWNoIGNvbnRlbnQgdHlwZSBwYXJzZXIgdGhhdCBoYXMgaXRzIGFzc29jaWF0ZWQgbGFuZ3VhZ2VcbiAgICAvLyBjdXJyZW50bHkgbG9hZGVkLlxuICAgIHZhciBvcHRpb25zXG4gICAgZm9yICh2YXIgY29udGVudFR5cGUgaW4gaHR0cExhbmd1YWdlcykge1xuICAgICAgaWYgKGh0dHBMYW5ndWFnZXNbY29udGVudFR5cGVdKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICAgIHZhciBwYXR0ZXJuID0gc3VmZml4VHlwZXNbY29udGVudFR5cGVdXG4gICAgICAgICAgPyBnZXRTdWZmaXhQYXR0ZXJuKGNvbnRlbnRUeXBlKVxuICAgICAgICAgIDogY29udGVudFR5cGVcbiAgICAgICAgb3B0aW9uc1tjb250ZW50VHlwZV0gPSB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKFxuICAgICAgICAgICAgJyhjb250ZW50LXR5cGU6XFxcXHMqJyArXG4gICAgICAgICAgICAgIHBhdHRlcm4gK1xuICAgICAgICAgICAgICAnW1xcXFxzXFxcXFNdKj8pKD86XFxcXHI/XFxcXG58XFxcXHIpezJ9W1xcXFxzXFxcXFNdKicsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgICApLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICByZXN0OiBodHRwTGFuZ3VhZ2VzW2NvbnRlbnRUeXBlXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaHR0cCcsICdoZWFkZXItbmFtZScsIG9wdGlvbnMpXG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=