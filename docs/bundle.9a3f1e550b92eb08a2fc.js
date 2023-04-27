(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_n4js"],{

/***/ "./node_modules/refractor/lang/n4js.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n4js.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = n4js
n4js.displayName = 'n4js'
n4js.aliases = []
function n4js(Prism) {
  Prism.languages.n4js = Prism.languages.extend('javascript', {
    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
    keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
  })
  Prism.languages.insertBefore('n4js', 'constant', {
    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
    annotation: {
      pattern: /@+\w+/,
      alias: 'operator'
    }
  })
  Prism.languages.n4jsd = Prism.languages.n4js
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbjRqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJidW5kbGUuOWEzZjFlNTUwYjkyZWIwOGEyZmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBuNGpzXG5uNGpzLmRpc3BsYXlOYW1lID0gJ240anMnXG5uNGpzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbjRqcyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubjRqcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgLy8gS2V5d29yZHMgZnJvbSBONEpTIGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vbnVtYmVyZm91ci5naXRodWIuaW8vbjRqcy9zcGVjL040SlNTcGVjLmh0bWxcbiAgICBrZXl3b3JkOiAvXFxiKD86YW55fEFycmF5fGJvb2xlYW58YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmYWxzZXxmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bW9kdWxlfG5ld3xudWxsfG51bWJlcnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdHJpbmd8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ1ZXx0cnl8dHlwZW9mfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCduNGpzJywgJ2NvbnN0YW50Jywge1xuICAgIC8vIEFubm90YXRpb25zIGluIE40SlMgc3BlYzogaHR0cHM6Ly9udW1iZXJmb3VyLmdpdGh1Yi5pby9uNGpzL3NwZWMvTjRKU1NwZWMuaHRtbCNfYW5ub3RhdGlvbnNcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvQCtcXHcrLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMubjRqc2QgPSBQcmlzbS5sYW5ndWFnZXMubjRqc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==