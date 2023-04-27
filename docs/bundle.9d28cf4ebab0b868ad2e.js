(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_aspnet"],{

/***/ "./node_modules/refractor/lang/aspnet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/aspnet.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = aspnet
aspnet.displayName = 'aspnet'
aspnet.aliases = []
function aspnet(Prism) {
  Prism.languages.aspnet = Prism.languages.extend('markup', {
    'page-directive tag': {
      pattern: /<%\s*@.*%>/i,
      inside: {
        'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
        rest: Prism.languages.markup.tag.inside
      }
    },
    'directive tag': {
      pattern: /<%.*%>/i,
      inside: {
        'directive tag': /<%\s*?[$=%#:]{0,2}|%>/i,
        rest: Prism.languages.csharp
      }
    }
  }) // Regexp copied from prism-markup, with a negative look-ahead added
  Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i // match directives of attribute value foo="<% Bar %>"
  Prism.languages.insertBefore(
    'inside',
    'punctuation',
    {
      'directive tag': Prism.languages.aspnet['directive tag']
    },
    Prism.languages.aspnet.tag.inside['attr-value']
  )
  Prism.languages.insertBefore('aspnet', 'comment', {
    'asp comment': /<%--[\s\S]*?--%>/
  }) // script runat="server" contains csharp, not javascript
  Prism.languages.insertBefore(
    'aspnet',
    Prism.languages.javascript ? 'script' : 'tag',
    {
      'asp script': {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.csharp || {}
      }
    }
  )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXNwbmV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjlkMjhjZjRlYmFiMGI4NjhhZDJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXNwbmV0XG5hc3BuZXQuZGlzcGxheU5hbWUgPSAnYXNwbmV0J1xuYXNwbmV0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYXNwbmV0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hc3BuZXQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG4gICAgJ3BhZ2UtZGlyZWN0aXZlIHRhZyc6IHtcbiAgICAgIHBhdHRlcm46IC88JVxccypALiolPi9pLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdwYWdlLWRpcmVjdGl2ZSB0YWcnOiAvPCVcXHMqQFxccyooPzpBc3NlbWJseXxDb250cm9sfEltcGxlbWVudHN8SW1wb3J0fE1hc3Rlcig/OlR5cGUpP3xPdXRwdXRDYWNoZXxQYWdlfFByZXZpb3VzUGFnZVR5cGV8UmVmZXJlbmNlfFJlZ2lzdGVyKT98JT4vaSxcbiAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlXG4gICAgICB9XG4gICAgfSxcbiAgICAnZGlyZWN0aXZlIHRhZyc6IHtcbiAgICAgIHBhdHRlcm46IC88JS4qJT4vaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZGlyZWN0aXZlIHRhZyc6IC88JVxccyo/WyQ9JSM6XXswLDJ9fCU+L2ksXG4gICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5jc2hhcnBcbiAgICAgIH1cbiAgICB9XG4gIH0pIC8vIFJlZ2V4cCBjb3BpZWQgZnJvbSBwcmlzbS1tYXJrdXAsIHdpdGggYSBuZWdhdGl2ZSBsb29rLWFoZWFkIGFkZGVkXG4gIFByaXNtLmxhbmd1YWdlcy5hc3BuZXQudGFnLnBhdHRlcm4gPSAvPCg/ISUpXFwvP1teXFxzPlxcL10rKD86XFxzK1teXFxzPlxcLz1dKyg/Oj0oPzooXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj49XSspKT8pKlxccypcXC8/Pi9pIC8vIG1hdGNoIGRpcmVjdGl2ZXMgb2YgYXR0cmlidXRlIHZhbHVlIGZvbz1cIjwlIEJhciAlPlwiXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgJ2luc2lkZScsXG4gICAgJ3B1bmN0dWF0aW9uJyxcbiAgICB7XG4gICAgICAnZGlyZWN0aXZlIHRhZyc6IFByaXNtLmxhbmd1YWdlcy5hc3BuZXRbJ2RpcmVjdGl2ZSB0YWcnXVxuICAgIH0sXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmFzcG5ldC50YWcuaW5zaWRlWydhdHRyLXZhbHVlJ11cbiAgKVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdhc3BuZXQnLCAnY29tbWVudCcsIHtcbiAgICAnYXNwIGNvbW1lbnQnOiAvPCUtLVtcXHNcXFNdKj8tLSU+L1xuICB9KSAvLyBzY3JpcHQgcnVuYXQ9XCJzZXJ2ZXJcIiBjb250YWlucyBjc2hhcnAsIG5vdCBqYXZhc2NyaXB0XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgJ2FzcG5ldCcsXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPyAnc2NyaXB0JyA6ICd0YWcnLFxuICAgIHtcbiAgICAgICdhc3Agc2NyaXB0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKDxzY3JpcHQoPz0uKnJ1bmF0PVsnXCJdP3NlcnZlclsnXCJdPylbXFxzXFxTXSo/PilbXFxzXFxTXSo/KD89PFxcL3NjcmlwdD4pL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzaGFycCB8fCB7fVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==