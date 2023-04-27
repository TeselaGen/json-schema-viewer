(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_scala"],{

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = java
java.displayName = 'java'
java.aliases = []
function java(Prism) {
  ;(function(Prism) {
    var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/ // based on the java naming conventions
    var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/
    Prism.languages.java = Prism.languages.extend('clike', {
      'class-name': [
        className, // variables and parameters
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
      ],
      keyword: keywords,
      function: [
        Prism.languages.clike.function,
        {
          pattern: /(\:\:)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('java', 'class-name', {
      annotation: {
        alias: 'punctuation',
        pattern: /(^|[^.])@\w+/,
        lookbehind: true
      },
      namespace: {
        pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      generics: {
        pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/scala.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/scala.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorJava = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js")
module.exports = scala
scala.displayName = 'scala'
scala.aliases = []
function scala(Prism) {
  Prism.register(refractorJava)
  Prism.languages.scala = Prism.languages.extend('java', {
    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    string: [
      {
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
    number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
    symbol: /'[^\d\s\\]\w*/
  })
  delete Prism.languages.scala['class-name']
  delete Prism.languages.scala['function']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvamF2YS5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2NhbGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDckRZO0FBQ1osb0JBQW9CLG1CQUFPLENBQUMsd0RBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMzNlNTgxZjgxZjM2OWNiNjEzNGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhXG5qYXZhLmRpc3BsYXlOYW1lID0gJ2phdmEnXG5qYXZhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gamF2YShQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgdmFyIGtleXdvcmRzID0gL1xcYig/OmFic3RyYWN0fGNvbnRpbnVlfGZvcnxuZXd8c3dpdGNofGFzc2VydHxkZWZhdWx0fGdvdG98cGFja2FnZXxzeW5jaHJvbml6ZWR8Ym9vbGVhbnxkb3xpZnxwcml2YXRlfHRoaXN8YnJlYWt8ZG91YmxlfGltcGxlbWVudHN8cHJvdGVjdGVkfHRocm93fGJ5dGV8ZWxzZXxpbXBvcnR8cHVibGljfHRocm93c3xjYXNlfGVudW18aW5zdGFuY2VvZnxyZXR1cm58dHJhbnNpZW50fGNhdGNofGV4dGVuZHN8aW50fHNob3J0fHRyeXxjaGFyfGZpbmFsfGludGVyZmFjZXxzdGF0aWN8dm9pZHxjbGFzc3xmaW5hbGx5fGxvbmd8c3RyaWN0ZnB8dm9sYXRpbGV8Y29uc3R8ZmxvYXR8bmF0aXZlfHN1cGVyfHdoaWxlfHZhcnxudWxsfGV4cG9ydHN8bW9kdWxlfG9wZW58b3BlbnN8cHJvdmlkZXN8cmVxdWlyZXN8dG98dHJhbnNpdGl2ZXx1c2VzfHdpdGgpXFxiLyAvLyBiYXNlZCBvbiB0aGUgamF2YSBuYW1pbmcgY29udmVudGlvbnNcbiAgICB2YXIgY2xhc3NOYW1lID0gL1xcYltBLVpdKD86XFx3KlthLXpdXFx3Kik/XFxiL1xuICAgIFByaXNtLmxhbmd1YWdlcy5qYXZhID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgICAnY2xhc3MtbmFtZSc6IFtcbiAgICAgICAgY2xhc3NOYW1lLCAvLyB2YXJpYWJsZXMgYW5kIHBhcmFtZXRlcnNcbiAgICAgICAgLy8gdGhpcyB0byBzdXBwb3J0IGNsYXNzIG5hbWVzIChvciBnZW5lcmljIHBhcmFtZXRlcnMpIHdoaWNoIGRvIG5vdCBjb250YWluIGEgbG93ZXIgY2FzZSBsZXR0ZXIgKGFsc28gd29ya3MgZm9yIG1ldGhvZHMpXG4gICAgICAgIC9cXGJbQS1aXVxcdyooPz1cXHMrXFx3K1xccypbOyw9KCkpXSkvXG4gICAgICBdLFxuICAgICAga2V5d29yZDoga2V5d29yZHMsXG4gICAgICBmdW5jdGlvbjogW1xuICAgICAgICBQcmlzbS5sYW5ndWFnZXMuY2xpa2UuZnVuY3Rpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxcOlxcOilbYS16X11cXHcqLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBudW1iZXI6IC9cXGIwYlswMV1bMDFfXSpMP1xcYnxcXGIweFtcXGRhLWZfXSpcXC4/W1xcZGEtZl9wKy1dK1xcYnwoPzpcXGJcXGRbXFxkX10qXFwuP1tcXGRfXSp8XFxCXFwuXFxkW1xcZF9dKikoPzplWystXT9cXGRbXFxkX10qKT9bZGZsXT8vaSxcbiAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXi5dKSg/Ojw8PT98Pj4+Pz0/fC0+fChbLSsmfF0pXFwyfFs/On5dfFstKyovJSZ8XiE9PD5dPT8pL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmEnLCAnY2xhc3MtbmFtZScsIHtcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbicsXG4gICAgICAgIHBhdHRlcm46IC8oXnxbXi5dKUBcXHcrLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG5hbWVzcGFjZToge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcYig/OmV4cG9ydHN8aW1wb3J0KD86XFxzK3N0YXRpYyk/fG1vZHVsZXxvcGVufG9wZW5zfHBhY2thZ2V8cHJvdmlkZXN8cmVxdWlyZXN8dG98dHJhbnNpdGl2ZXx1c2VzfHdpdGgpXFxzKylbYS16XVxcdyooXFwuW2Etel1cXHcqKSsvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLi9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdlbmVyaWNzOiB7XG4gICAgICAgIHBhdHRlcm46IC88KD86W1xcd1xccywuJj9dfDwoPzpbXFx3XFxzLC4mP118PCg/OltcXHdcXHMsLiY/XXw8W1xcd1xccywuJj9dKj4pKj4pKj4pKj4vLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnY2xhc3MtbmFtZSc6IGNsYXNzTmFtZSxcbiAgICAgICAgICBrZXl3b3JkOiBrZXl3b3JkcyxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1s8PigpLC46XS8sXG4gICAgICAgICAgb3BlcmF0b3I6IC9bPyZ8XS9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9ySmF2YSA9IHJlcXVpcmUoJy4vamF2YS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxhXG5zY2FsYS5kaXNwbGF5TmFtZSA9ICdzY2FsYSdcbnNjYWxhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc2NhbGEoUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9ySmF2YSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnNjYWxhID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YScsIHtcbiAgICBrZXl3b3JkOiAvPC18PT58XFxiKD86YWJzdHJhY3R8Y2FzZXxjYXRjaHxjbGFzc3xkZWZ8ZG98ZWxzZXxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm9yfGZvclNvbWV8aWZ8aW1wbGljaXR8aW1wb3J0fGxhenl8bWF0Y2h8bmV3fG51bGx8b2JqZWN0fG92ZXJyaWRlfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cmV0dXJufHNlYWxlZHxzZWxmfHN1cGVyfHRoaXN8dGhyb3d8dHJhaXR8dHJ5fHR5cGV8dmFsfHZhcnx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgc3RyaW5nOiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgYnVpbHRpbjogL1xcYig/OlN0cmluZ3xJbnR8TG9uZ3xTaG9ydHxCeXRlfEJvb2xlYW58RG91YmxlfEZsb2F0fENoYXJ8QW55fEFueVJlZnxBbnlWYWx8VW5pdHxOb3RoaW5nKVxcYi8sXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXSpcXC4/W1xcZGEtZl0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVcXGQrKT9bZGZsXT8vaSxcbiAgICBzeW1ib2w6IC8nW15cXGRcXHNcXFxcXVxcdyovXG4gIH0pXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2NhbGFbJ2NsYXNzLW5hbWUnXVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNjYWxhWydmdW5jdGlvbiddXG59XG4iXSwic291cmNlUm9vdCI6IiJ9