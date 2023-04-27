(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_css"],{

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /@[\w-]+/ // See rest below
        }
      },
      url: {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGFBQWEsWUFBWSx1Q0FBdUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS5lYTk5NmYyNzUyYzg5ZTYzZjhlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc1xuY3NzLmRpc3BsYXlOYW1lID0gJ2NzcydcbmNzcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGNzcyhQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgdmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxL1xuICAgIFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG4gICAgICBjb21tZW50OiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG4gICAgICBhdHJ1bGU6IHtcbiAgICAgICAgcGF0dGVybjogL0BbXFx3LV0rW1xcc1xcU10qPyg/Ojt8KD89XFxzKlxceykpLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcnVsZTogL0BbXFx3LV0rLyAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXJsOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cCgndXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8W15cXG5cXHIoKV0qKVxcXFwpJywgJ2knKSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZnVuY3Rpb246IC9edXJsL2ksXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9eXFwofFxcKSQvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWxlY3RvcjogUmVnRXhwKFxuICAgICAgICAnW157fVxcXFxzXSg/Oltee307XCJcXCddfCcgKyBzdHJpbmcuc291cmNlICsgJykqPyg/PVxcXFxzKlxcXFx7KSdcbiAgICAgICksXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogc3RyaW5nLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0eTogL1stX2EtelxceEEwLVxcdUZGRkZdWy1cXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqOikvaSxcbiAgICAgIGltcG9ydGFudDogLyFpbXBvcnRhbnRcXGIvaSxcbiAgICAgIGZ1bmN0aW9uOiAvWy1hLXowLTldKyg/PVxcKCkvaSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpe307OixdL1xuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3NcbiAgICB2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgIGlmIChtYXJrdXApIHtcbiAgICAgIG1hcmt1cC50YWcuYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJylcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICdpbnNpZGUnLFxuICAgICAgICAnYXR0ci12YWx1ZScsXG4gICAgICAgIHtcbiAgICAgICAgICAnc3R5bGUtYXR0cic6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cXHMqc3R5bGU9KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvaSxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAnYXR0ci1uYW1lJzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eXFxzKnN0eWxlL2ksXG4gICAgICAgICAgICAgICAgaW5zaWRlOiBtYXJrdXAudGFnLmluc2lkZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcbiAgICAgICAgICAgICAgJ2F0dHItdmFsdWUnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLy4rL2ksXG4gICAgICAgICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlhczogJ2xhbmd1YWdlLWNzcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1hcmt1cC50YWdcbiAgICAgIClcbiAgICB9XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==