(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_csharp"],{

/***/ "./node_modules/refractor/lang/csharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/csharp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = csharp
csharp.displayName = 'csharp'
csharp.aliases = ['dotnet', 'cs']
function csharp(Prism) {
  Prism.languages.csharp = Prism.languages.extend('clike', {
    keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
    string: [
      {
        pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,
        greedy: true
      }
    ],
    'class-name': [
      {
        // (Foo bar, Bar baz)
        pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
        inside: {
          punctuation: /\./
        }
      },
      {
        // [Foo]
        pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo : Bar
        pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo
        pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    ],
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
    operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  })
  Prism.languages.insertBefore('csharp', 'class-name', {
    'generic-method': {
      pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
      inside: {
        function: /^\w+/,
        'class-name': {
          pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
          inside: {
            punctuation: /\./
          }
        },
        keyword: Prism.languages.csharp.keyword,
        punctuation: /[<>(),.:]/
      }
    },
    preprocessor: {
      pattern: /(^\s*)#.*/m,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight preprocessor directives as keywords
        directive: {
          pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NoYXJwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5lZWE1NDU3ODhmMWQ3YmRjZGE0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzaGFycFxuY3NoYXJwLmRpc3BsYXlOYW1lID0gJ2NzaGFycCdcbmNzaGFycC5hbGlhc2VzID0gWydkb3RuZXQnLCAnY3MnXVxuZnVuY3Rpb24gY3NoYXJwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5jc2hhcnAgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86YWJzdHJhY3R8YWRkfGFsaWFzfGFzfGFzY2VuZGluZ3xhc3luY3xhd2FpdHxiYXNlfGJvb2x8YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2hlY2tlZHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWNpbWFsfGRlZmF1bHR8ZGVsZWdhdGV8ZGVzY2VuZGluZ3xkb3xkb3VibGV8ZHluYW1pY3xlbHNlfGVudW18ZXZlbnR8ZXhwbGljaXR8ZXh0ZXJufGZhbHNlfGZpbmFsbHl8Zml4ZWR8ZmxvYXR8Zm9yfGZvcmVhY2h8ZnJvbXxnZXR8Z2xvYmFsfGdvdG98Z3JvdXB8aWZ8aW1wbGljaXR8aW58aW50fGludGVyZmFjZXxpbnRlcm5hbHxpbnRvfGlzfGpvaW58bGV0fGxvY2t8bG9uZ3xuYW1lc3BhY2V8bmV3fG51bGx8b2JqZWN0fG9wZXJhdG9yfG9yZGVyYnl8b3V0fG92ZXJyaWRlfHBhcmFtc3xwYXJ0aWFsfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZWZ8cmVtb3ZlfHJldHVybnxzYnl0ZXxzZWFsZWR8c2VsZWN0fHNldHxzaG9ydHxzaXplb2Z8c3RhY2thbGxvY3xzdGF0aWN8c3RyaW5nfHN0cnVjdHxzd2l0Y2h8dGhpc3x0aHJvd3x0cnVlfHRyeXx0eXBlb2Z8dWludHx1bG9uZ3x1bmNoZWNrZWR8dW5zYWZlfHVzaG9ydHx1c2luZ3x2YWx1ZXx2YXJ8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdoZXJlfHdoaWxlfHlpZWxkKVxcYi8sXG4gICAgc3RyaW5nOiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9AKFwifCcpKD86XFwxXFwxfFxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKj9cXDEvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgICdjbGFzcy1uYW1lJzogW1xuICAgICAge1xuICAgICAgICAvLyAoRm9vIGJhciwgQmFyIGJheilcbiAgICAgICAgcGF0dGVybjogL1xcYltBLVpdXFx3Kig/OlxcLlxcdyspKlxcYig/PVxccytcXHcrKS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBbRm9vXVxuICAgICAgICBwYXR0ZXJuOiAvKFxcWylbQS1aXVxcdyooPzpcXC5cXHcrKSpcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLi9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2xhc3MgRm9vIDogQmFyXG4gICAgICAgIHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlKVxccytbQS1aXVxcdyooPzpcXC5cXHcrKSpcXHMqOlxccyopW0EtWl1cXHcqKD86XFwuXFx3KykqXFxiLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGNsYXNzIEZvb1xuICAgICAgICBwYXR0ZXJuOiAvKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbQS1aXVxcdyooPzpcXC5cXHcrKSpcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspZj8vaSxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3xbLT1dPnwoWy0rJnw/XSlcXDF8fnxbLSsqLyUmfF4hPTw+XT0/LyxcbiAgICBwdW5jdHVhdGlvbjogL1xcP1xcLj98Ojp8W3t9W1xcXTsoKSwuOl0vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzaGFycCcsICdjbGFzcy1uYW1lJywge1xuICAgICdnZW5lcmljLW1ldGhvZCc6IHtcbiAgICAgIHBhdHRlcm46IC9cXHcrXFxzKjxbXj5cXHJcXG5dKz8+XFxzKig/PVxcKCkvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGZ1bmN0aW9uOiAvXlxcdysvLFxuICAgICAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiW0EtWl1cXHcqKD86XFwuXFx3KykqXFxiLyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZDogUHJpc20ubGFuZ3VhZ2VzLmNzaGFycC5rZXl3b3JkLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1s8PigpLC46XS9cbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXByb2Nlc3Nvcjoge1xuICAgICAgcGF0dGVybjogLyheXFxzKikjLiovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvLyBoaWdobGlnaHQgcHJlcHJvY2Vzc29yIGRpcmVjdGl2ZXMgYXMga2V5d29yZHNcbiAgICAgICAgZGlyZWN0aXZlOiB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXHMqIylcXGIoPzpkZWZpbmV8ZWxpZnxlbHNlfGVuZGlmfGVuZHJlZ2lvbnxlcnJvcnxpZnxsaW5lfHByYWdtYXxyZWdpb258dW5kZWZ8d2FybmluZylcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuZG90bmV0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzID0gUHJpc20ubGFuZ3VhZ2VzLmNzaGFycFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==