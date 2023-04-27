(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_glsl"],{

/***/ "./node_modules/refractor/lang/glsl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/glsl.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = glsl
glsl.displayName = 'glsl'
glsl.aliases = []
function glsl(Prism) {
  Prism.languages.glsl = Prism.languages.extend('clike', {
    comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
    number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
    keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
  })
  Prism.languages.insertBefore('glsl', 'comment', {
    preprocessor: {
      pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
      lookbehind: true,
      alias: 'builtin'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ2xzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJidW5kbGUuYWIzMTMxYWFiNjQ3MTk3NWE5OTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnbHNsXG5nbHNsLmRpc3BsYXlOYW1lID0gJ2dsc2wnXG5nbHNsLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZ2xzbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZ2xzbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IFsvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sIC9cXC9cXC8oPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5dKSovXSxcbiAgICBudW1iZXI6IC8oPzpcXGIweFtcXGRhLWZdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8pW3VsZl0qL2ksXG4gICAga2V5d29yZDogL1xcYig/OmF0dHJpYnV0ZXxjb25zdHx1bmlmb3JtfHZhcnlpbmd8YnVmZmVyfHNoYXJlZHxjb2hlcmVudHx2b2xhdGlsZXxyZXN0cmljdHxyZWFkb25seXx3cml0ZW9ubHl8YXRvbWljX3VpbnR8bGF5b3V0fGNlbnRyb2lkfGZsYXR8c21vb3RofG5vcGVyc3BlY3RpdmV8cGF0Y2h8c2FtcGxlfGJyZWFrfGNvbnRpbnVlfGRvfGZvcnx3aGlsZXxzd2l0Y2h8Y2FzZXxkZWZhdWx0fGlmfGVsc2V8c3Vicm91dGluZXxpbnxvdXR8aW5vdXR8ZmxvYXR8ZG91YmxlfGludHx2b2lkfGJvb2x8dHJ1ZXxmYWxzZXxpbnZhcmlhbnR8cHJlY2lzZXxkaXNjYXJkfHJldHVybnxkP21hdFsyMzRdKD86eFsyMzRdKT98W2liZHVdP3ZlY1syMzRdfHVpbnR8bG93cHxtZWRpdW1wfGhpZ2hwfHByZWNpc2lvbnxbaXVdP3NhbXBsZXJbMTIzXUR8W2l1XT9zYW1wbGVyQ3ViZXxzYW1wbGVyWzEyXURTaGFkb3d8c2FtcGxlckN1YmVTaGFkb3d8W2l1XT9zYW1wbGVyWzEyXURBcnJheXxzYW1wbGVyWzEyXURBcnJheVNoYWRvd3xbaXVdP3NhbXBsZXIyRFJlY3R8c2FtcGxlcjJEUmVjdFNoYWRvd3xbaXVdP3NhbXBsZXJCdWZmZXJ8W2l1XT9zYW1wbGVyMkRNUyg/OkFycmF5KT98W2l1XT9zYW1wbGVyQ3ViZUFycmF5fHNhbXBsZXJDdWJlQXJyYXlTaGFkb3d8W2l1XT9pbWFnZVsxMjNdRHxbaXVdP2ltYWdlMkRSZWN0fFtpdV0/aW1hZ2VDdWJlfFtpdV0/aW1hZ2VCdWZmZXJ8W2l1XT9pbWFnZVsxMl1EQXJyYXl8W2l1XT9pbWFnZUN1YmVBcnJheXxbaXVdP2ltYWdlMkRNUyg/OkFycmF5KT98c3RydWN0fGNvbW1vbnxwYXJ0aXRpb258YWN0aXZlfGFzbXxjbGFzc3x1bmlvbnxlbnVtfHR5cGVkZWZ8dGVtcGxhdGV8dGhpc3xyZXNvdXJjZXxnb3RvfGlubGluZXxub2lubGluZXxwdWJsaWN8c3RhdGljfGV4dGVybnxleHRlcm5hbHxpbnRlcmZhY2V8bG9uZ3xzaG9ydHxoYWxmfGZpeGVkfHVuc2lnbmVkfHN1cGVycHxpbnB1dHxvdXRwdXR8aHZlY1syMzRdfGZ2ZWNbMjM0XXxzYW1wbGVyM0RSZWN0fGZpbHRlcnxzaXplb2Z8Y2FzdHxuYW1lc3BhY2V8dXNpbmcpXFxiL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdnbHNsJywgJ2NvbW1lbnQnLCB7XG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKSMoPzooPzpkZWZpbmV8dW5kZWZ8aWZ8aWZkZWZ8aWZuZGVmfGVsc2V8ZWxpZnxlbmRpZnxlcnJvcnxwcmFnbWF8ZXh0ZW5zaW9ufHZlcnNpb258bGluZSlcXGIpPy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9