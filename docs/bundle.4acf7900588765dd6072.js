(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_fsharp"],{

/***/ "./node_modules/refractor/lang/fsharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/fsharp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = fsharp
fsharp.displayName = 'fsharp'
fsharp.aliases = []
function fsharp(Prism) {
  Prism.languages.fsharp = Prism.languages.extend('clike', {
    comment: [
      {
        pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    ],
    string: {
      pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
      lookbehind: true,
      inside: {
        operator: /->|\*/,
        punctuation: /\./
      }
    },
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
    number: [
      /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
      /\b0b[01]+(?:y|uy)?\b/,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
      /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
    ],
    operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
  })
  Prism.languages.insertBefore('fsharp', 'keyword', {
    preprocessor: {
      pattern: /^[^\r\n\S]*#.*/m,
      alias: 'property',
      inside: {
        directive: {
          pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.insertBefore('fsharp', 'punctuation', {
    'computation-expression': {
      pattern: /[_a-z]\w*(?=\s*\{)/i,
      alias: 'keyword'
    }
  })
  Prism.languages.insertBefore('fsharp', 'string', {
    annotation: {
      pattern: /\[<.+?>\]/,
      inside: {
        punctuation: /^\[<|>\]$/,
        'class-name': {
          pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
          lookbehind: true
        },
        'annotation-content': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.fsharp
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZnNoYXJwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRTtBQUNoSjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxJQUFJO0FBQ2hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjRhY2Y3OTAwNTg4NzY1ZGQ2MDcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnNoYXJwXG5mc2hhcnAuZGlzcGxheU5hbWUgPSAnZnNoYXJwJ1xuZnNoYXJwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZnNoYXJwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5mc2hhcnAgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcKFxcKltcXHNcXFNdKj9cXCpcXCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oPzpcIlwiXCJbXFxzXFxTXSo/XCJcIlwifEBcIig/OlwiXCJ8W15cIl0pKlwifFwiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIpQj98Jyg/OlteXFxcXCddfFxcXFwoPzoufFxcZHszfXx4W2EtZkEtRlxcZF17Mn18dVthLWZBLUZcXGRdezR9fFVbYS1mQS1GXFxkXXs4fSkpJ0I/LyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmV4Y2VwdGlvbnxpbmhlcml0fGludGVyZmFjZXxuZXd8b2Z8dHlwZSlcXHMrfFxcd1xccyo6XFxzKnxcXHM6XFw/Pz5cXHMqKVsuXFx3XStcXGIoPzpcXHMqKD86LT58XFwqKVxccypbLlxcd10rXFxiKSooPyFcXHMqWzouXSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBvcGVyYXRvcjogLy0+fFxcKi8sXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmxldHxyZXR1cm58dXNlfHlpZWxkKSg/OiFcXEJ8XFxiKXxcXGIoYWJzdHJhY3R8YW5kfGFzfGFzc2VydHxiYXNlfGJlZ2lufGNsYXNzfGRlZmF1bHR8ZGVsZWdhdGV8ZG98ZG9uZXxkb3duY2FzdHxkb3dudG98ZWxpZnxlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJufGZhbHNlfGZpbmFsbHl8Zm9yfGZ1bnxmdW5jdGlvbnxnbG9iYWx8aWZ8aW58aW5oZXJpdHxpbmxpbmV8aW50ZXJmYWNlfGludGVybmFsfGxhenl8bWF0Y2h8bWVtYmVyfG1vZHVsZXxtdXRhYmxlfG5hbWVzcGFjZXxuZXd8bm90fG51bGx8b2Z8b3BlbnxvcnxvdmVycmlkZXxwcml2YXRlfHB1YmxpY3xyZWN8c2VsZWN0fHN0YXRpY3xzdHJ1Y3R8dGhlbnx0b3x0cnVlfHRyeXx0eXBlfHVwY2FzdHx2YWx8dm9pZHx3aGVufHdoaWxlfHdpdGh8YXNyfGxhbmR8bG9yfGxzbHxsc3J8bHhvcnxtb2R8c2lnfGF0b21pY3xicmVha3xjaGVja2VkfGNvbXBvbmVudHxjb25zdHxjb25zdHJhaW50fGNvbnN0cnVjdG9yfGNvbnRpbnVlfGVhZ2VyfGV2ZW50fGV4dGVybmFsfGZpeGVkfGZ1bmN0b3J8aW5jbHVkZXxtZXRob2R8bWl4aW58b2JqZWN0fHBhcmFsbGVsfHByb2Nlc3N8cHJvdGVjdGVkfHB1cmV8c2VhbGVkfHRhaWxjYWxsfHRyYWl0fHZpcnR1YWx8dm9sYXRpbGUpXFxiLyxcbiAgICBudW1iZXI6IFtcbiAgICAgIC9cXGIweFtcXGRhLWZBLUZdKyg/OnVufGxmfExGKT9cXGIvLFxuICAgICAgL1xcYjBiWzAxXSsoPzp5fHV5KT9cXGIvLFxuICAgICAgLyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltmbV18ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICAgICAvXFxiXFxkKyg/OltJbExzeV18dVtsc3ldP3xVTCk/XFxiL1xuICAgIF0sXG4gICAgb3BlcmF0b3I6IC8oWzw+fiZeXSlcXDFcXDF8KFsqLjo8PiZdKVxcMnw8LXwtPnxbIT06XT18PD9cXHx7MSwzfT4/fFxcPz8oPzo8PXw+PXw8PnxbLSsqLyU9PD5dKVxcPz98WyE/XiZdfH5bK34tXXw6Pnw6XFw/Pj8vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2ZzaGFycCcsICdrZXl3b3JkJywge1xuICAgIHByZXByb2Nlc3Nvcjoge1xuICAgICAgcGF0dGVybjogL15bXlxcclxcblxcU10qIy4qL20sXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBkaXJlY3RpdmU6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxccyojKVxcYig/OmVsc2V8ZW5kaWZ8aWZ8bGlnaHR8bGluZXxub3dhcm4pXFxiLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZnNoYXJwJywgJ3B1bmN0dWF0aW9uJywge1xuICAgICdjb21wdXRhdGlvbi1leHByZXNzaW9uJzoge1xuICAgICAgcGF0dGVybjogL1tfYS16XVxcdyooPz1cXHMqXFx7KS9pLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZnNoYXJwJywgJ3N0cmluZycsIHtcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxbPC4rPz5cXF0vLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXlxcWzx8PlxcXSQvLFxuICAgICAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXlxcdyskfChefDtcXHMqKVtBLVpdXFx3Kig/PVxcKCkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ2Fubm90YXRpb24tY29udGVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5mc2hhcnBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=