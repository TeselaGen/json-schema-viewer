(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_protobuf"],{

/***/ "./node_modules/refractor/lang/protobuf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = protobuf
protobuf.displayName = 'protobuf'
protobuf.aliases = []
function protobuf(Prism) {
  ;(function(Prism) {
    var builtinTypes = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/
    Prism.languages.protobuf = Prism.languages.extend('clike', {
      'class-name': {
        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
        lookbehind: true
      },
      keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/
    })
    Prism.languages.insertBefore('protobuf', 'operator', {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /[<>.,]/,
          builtin: builtinTypes
        }
      },
      builtin: builtinTypes,
      'positional-class-name': {
        pattern: /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /\./
        }
      },
      annotation: {
        pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvdG9idWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuODg2NGI3NWYwOTU0YjUwYTg5MDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwcm90b2J1ZlxucHJvdG9idWYuZGlzcGxheU5hbWUgPSAncHJvdG9idWYnXG5wcm90b2J1Zi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb3RvYnVmKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgYnVpbHRpblR5cGVzID0gL1xcYig/OmRvdWJsZXxmbG9hdHxbc3VdP2ludCg/OjMyfDY0KXxzP2ZpeGVkKD86MzJ8NjQpfGJvb2x8c3RyaW5nfGJ5dGVzKVxcYi9cbiAgICBQcmlzbS5sYW5ndWFnZXMucHJvdG9idWYgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcYig/OmVudW18ZXh0ZW5kfG1lc3NhZ2V8c2VydmljZSlcXHMrKVtBLVphLXpfXVxcdyooPz1cXHMqXFx7KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiAvXFxiKD86ZW51bXxleHRlbmR8ZXh0ZW5zaW9uc3xpbXBvcnR8bWVzc2FnZXxvbmVvZnxvcHRpb258b3B0aW9uYWx8cGFja2FnZXxwdWJsaWN8cmVwZWF0ZWR8cmVxdWlyZWR8cmVzZXJ2ZWR8c2VydmljZXxzeW50YXh8dG8pXFxiL1xuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncHJvdG9idWYnLCAnb3BlcmF0b3InLCB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgcGF0dGVybjogL1xcYm1hcDxcXHMqW1xcdy5dK1xccyosXFxzKltcXHcuXStcXHMqPig/PVxccytbQS1aYS16X11cXHcqXFxzKls9O10pLyxcbiAgICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9bPD4uLF0vLFxuICAgICAgICAgIGJ1aWx0aW46IGJ1aWx0aW5UeXBlc1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYnVpbHRpbjogYnVpbHRpblR5cGVzLFxuICAgICAgJ3Bvc2l0aW9uYWwtY2xhc3MtbmFtZSc6IHtcbiAgICAgICAgcGF0dGVybjogLyg/OlxcYnxcXEJcXC4pW0EtWmEtel9dXFx3Kig/OlxcLltBLVphLXpfXVxcdyopKig/PVxccytbQS1aYS16X11cXHcqXFxzKls9O10pLyxcbiAgICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhbm5vdGF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxbXFxzKilbQS1aYS16X11cXHcqKD89XFxzKj0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==