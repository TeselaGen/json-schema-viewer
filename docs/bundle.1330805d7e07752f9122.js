(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_xojo"],{

/***/ "./node_modules/refractor/lang/xojo.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/xojo.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = xojo
xojo.displayName = 'xojo'
xojo.aliases = []
function xojo(Prism) {
  Prism.languages.xojo = {
    comment: {
      pattern: /(?:'|\/\/|Rem\b).+/i,
      inside: {
        keyword: /^Rem/i
      }
    },
    string: {
      pattern: /"(?:""|[^"])*"/,
      greedy: true
    },
    number: [/(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
    keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,
    operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
    punctuation: /[.,;:()]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcveG9qby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSIsImZpbGUiOiJidW5kbGUuMTMzMDgwNWQ3ZTA3NzUyZjkxMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB4b2pvXG54b2pvLmRpc3BsYXlOYW1lID0gJ3hvam8nXG54b2pvLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24geG9qbyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMueG9qbyA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKD86J3xcXC9cXC98UmVtXFxiKS4rL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL15SZW0vaVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcIlwifFteXCJdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogWy8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpFWystXT9cXGQrKT8vaSwgLyZbYmNob3VdW2EtelxcZF0rL2ldLFxuICAgIHN5bWJvbDogLyMoPzpJZnxFbHNlfEVsc2VJZnxFbmRpZnxQcmFnbWEpXFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OkFkZEhhbmRsZXJ8QXBwfEFycmF5fEFzKD86c2lnbnMpP3xCeSg/OlJlZnxWYWwpfEJyZWFrfENhbGx8Q2FzZXxDYXRjaHxDb25zdHxDb250aW51ZXxDdXJyZW50TWV0aG9kTmFtZXxEZWNsYXJlfERpbXxEbyg/OnduVG8pP3xFYWNofEVsc2UoPzpJZik/fEVuZHxFeGl0fEV4dGVuZHN8RmFsc2V8RmluYWxseXxGb3J8R2xvYmFsfElmfElufExpYnxMb29wfE1lfE5leHR8TmlsfE9wdGlvbmFsfFBhcmFtQXJyYXl8UmFpc2UoPzpFdmVudCk/fFJlRGltfFJlbXxSZW1vdmVIYW5kbGVyfFJldHVybnxTZWxlY3R8U2VsZnxTb2Z0fFN0YXRpY3xTdGVwfFN1cGVyfFRoZW58VG98VHJ1ZXxUcnl8VWJvdW5kfFVudGlsfFVzaW5nfFdlbmR8V2hpbGUpXFxiL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Pj0/fFsrXFwtKlxcL1xcXFxePV18XFxiKD86QWRkcmVzc09mfEFuZHxDdHlwZXxJc0E/fE1vZHxOZXd8Tm90fE9yfFhvcnxXZWFrQWRkcmVzc09mKVxcYi9pLFxuICAgIHB1bmN0dWF0aW9uOiAvWy4sOzooKV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=