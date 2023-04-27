(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_lolcode"],{

/***/ "./node_modules/refractor/lang/lolcode.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/lolcode.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = lolcode
lolcode.displayName = 'lolcode'
lolcode.aliases = []
function lolcode(Prism) {
  Prism.languages.lolcode = {
    comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
    string: {
      pattern: /"(?::.|[^"])*"/,
      inside: {
        variable: /:\{[^}]+\}/,
        symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
      },
      greedy: true
    },
    number: /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
    symbol: {
      pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
      lookbehind: true,
      inside: {
        keyword: /A(?=\s)/
      }
    },
    label: {
      pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
      lookbehind: true,
      alias: 'string'
    },
    function: {
      pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
      lookbehind: true
    },
    keyword: [
      {
        pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
        lookbehind: true
      },
      /'Z(?=\s|,|$)/
    ],
    boolean: {
      pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
      lookbehind: true
    },
    variable: {
      pattern: /(^|\s)IT(?=\s|,|$)/,
      lookbehind: true
    },
    operator: {
      pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
      lookbehind: true
    },
    punctuation: /\.{3}|…|,|!/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbG9sY29kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRyxJQUFJO0FBQzdCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLEVBQUU7QUFDdkI7QUFDQSIsImZpbGUiOiJidW5kbGUuN2MzYTRjZmY1NzdiZDY1MjZiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2xjb2RlXG5sb2xjb2RlLmRpc3BsYXlOYW1lID0gJ2xvbGNvZGUnXG5sb2xjb2RlLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbG9sY29kZShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubG9sY29kZSA9IHtcbiAgICBjb21tZW50OiBbL1xcYk9CVFdcXHMrW1xcc1xcU10qP1xccytUTERSXFxiLywgL1xcYkJUVy4rL10sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzo6LnxbXlwiXSkqXCIvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvOlxce1tefV0rXFx9LyxcbiAgICAgICAgc3ltYm9sOiBbLzpcXChbYS1mXFxkXStcXCkvaSwgLzpcXFtbXlxcXV0rXFxdLywgLzpbKT5vXCI6XS9dXG4gICAgICB9LFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC8oPzpcXEItKT8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykvLFxuICAgIHN5bWJvbDoge1xuICAgICAgcGF0dGVybjogLyhefFxccykoPzpBICk/KD86WUFSTnxOVU1CUnxOVU1CQVJ8VFJPT0Z8QlVLS0lUfE5PT0IpKD89XFxzfCx8JCkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBrZXl3b3JkOiAvQSg/PVxccykvXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcGF0dGVybjogLygoPzpefFxccykoPzpJTSBJTiBZUnxJTSBPVVRUQSBZUikgKVthLXpBLVpdXFx3Ki8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLygoPzpefFxccykoPzpJIElafEhPVyBJWiBJfElaKSApW2EtekEtWl1cXHcqLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFxccykoPzpPIEhBSSBJTXxLVEhYfEhBSXxLVEhYQllFfEkgSEFTIEF8SVRaKD86IEEpP3xSfEFOfE1LQVl8U01PT1NIfE1BRUt8SVMgTk9XKD86IEEpP3xWSVNJQkxFfEdJTU1FSHxPIFJMWVxcP3xZQSBSTFl8Tk8gV0FJfE9JQ3xNRUJCRXxXVEZcXD98T01HfE9NR1dURnxHVEZPfElNIElOIFlSfElNIE9VVFRBIFlSfEZPVU5EIFlSfFlSfFRJTHxXSUxFfFVQUElOfE5FUkZJTnxJIElafEhPVyBJWiBJfElGIFUgU0FZIFNPfFNSU3xIQVMgQXxMSUVLKD86IEEpP3xJWikoPz1cXHN8LHwkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvJ1ooPz1cXHN8LHwkKS9cbiAgICBdLFxuICAgIGJvb2xlYW46IHtcbiAgICAgIHBhdHRlcm46IC8oXnxcXHMpKD86V0lOfEZBSUwpKD89XFxzfCx8JCkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgdmFyaWFibGU6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxcXHMpSVQoPz1cXHN8LHwkKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBvcGVyYXRvcjoge1xuICAgICAgcGF0dGVybjogLyhefFxccykoPzpOT1R8Qk9USCBTQUVNfERJRkZSSU5UfCg/OlNVTXxESUZGfFBST0RVS1R8UVVPU0hVTlR8TU9EfEJJR0dSfFNNQUxMUnxCT1RIfEVJVEhFUnxXT058QUxMfEFOWSkgT0YpKD89XFxzfCx8JCkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9cXC57M3184oCmfCx8IS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==