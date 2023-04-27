(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_docker"],{

/***/ "./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = docker
docker.displayName = 'docker'
docker.aliases = ['dockerfile']
function docker(Prism) {
  Prism.languages.docker = {
    keyword: {
      pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
      lookbehind: true
    },
    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
    comment: /#.*/,
    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
  }
  Prism.languages.dockerfile = Prism.languages.docker
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZG9ja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjY3MDI5ZTFkMGZmMDYzN2I3ZmIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZG9ja2VyXG5kb2NrZXIuZGlzcGxheU5hbWUgPSAnZG9ja2VyJ1xuZG9ja2VyLmFsaWFzZXMgPSBbJ2RvY2tlcmZpbGUnXVxuZnVuY3Rpb24gZG9ja2VyKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5kb2NrZXIgPSB7XG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKikoPzpBRER8QVJHfENNRHxDT1BZfEVOVFJZUE9JTlR8RU5WfEVYUE9TRXxGUk9NfEhFQUxUSENIRUNLfExBQkVMfE1BSU5UQUlORVJ8T05CVUlMRHxSVU58U0hFTEx8U1RPUFNJR05BTHxVU0VSfFZPTFVNRXxXT1JLRElSKSg/PVxccykvaW0sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IC8oXCJ8JykoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXFwxLyxcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBwdW5jdHVhdGlvbjogLy0tLXxcXC5cXC5cXC58WzpbXFxde31cXC0sfD4/XS9cbiAgfVxuICBQcmlzbS5sYW5ndWFnZXMuZG9ja2VyZmlsZSA9IFByaXNtLmxhbmd1YWdlcy5kb2NrZXJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=