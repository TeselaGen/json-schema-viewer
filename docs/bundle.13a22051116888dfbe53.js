(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_lua"],{

/***/ "./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = lua
lua.displayName = 'lua'
lua.aliases = []
function lua(Prism) {
  Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    // \z may be used to skip the following space
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: true
    },
    number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        // Match ".." but don't break "..."
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: true
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbHVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFO0FBQzdCO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjEzYTIyMDUxMTE2ODg4ZGZiZTUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbHVhXG5sdWEuZGlzcGxheU5hbWUgPSAnbHVhJ1xubHVhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbHVhKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5sdWEgPSB7XG4gICAgY29tbWVudDogL14jIS4rfC0tKD86XFxbKD0qKVxcW1tcXHNcXFNdKj9cXF1cXDFcXF18LiopL20sXG4gICAgLy8gXFx6IG1heSBiZSB1c2VkIHRvIHNraXAgdGhlIGZvbGxvd2luZyBzcGFjZVxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxceig/OlxcclxcbnxcXHMpfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDF8XFxbKD0qKVxcW1tcXHNcXFNdKj9cXF1cXDJcXF0vLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC9cXGIweFthLWZcXGRdK1xcLj9bYS1mXFxkXSooPzpwWystXT9cXGQrKT9cXGJ8XFxiXFxkKyg/OlxcLlxcQnxcXC4/XFxkKig/OmVbKy1dP1xcZCspP1xcYil8XFxCXFwuXFxkKyg/OmVbKy1dP1xcZCspP1xcYi9pLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphbmR8YnJlYWt8ZG98ZWxzZXxlbHNlaWZ8ZW5kfGZhbHNlfGZvcnxmdW5jdGlvbnxnb3RvfGlmfGlufGxvY2FsfG5pbHxub3R8b3J8cmVwZWF0fHJldHVybnx0aGVufHRydWV8dW50aWx8d2hpbGUpXFxiLyxcbiAgICBmdW5jdGlvbjogLyg/IVxcZClcXHcrKD89XFxzKig/Olsoe10pKS8sXG4gICAgb3BlcmF0b3I6IFtcbiAgICAgIC9bLSsqJV4mfCNdfFxcL1xcLz98PFs8PV0/fD5bPj1dP3xbPX5dPT8vLFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCBcIi4uXCIgYnV0IGRvbid0IGJyZWFrIFwiLi4uXCJcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pXFwuXFwuKD8hXFwuKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXSgpe30sO118XFwuK3w6Ky9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==