(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_liquid"],{

/***/ "./node_modules/refractor/lang/liquid.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/liquid.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = liquid
liquid.displayName = 'liquid'
liquid.aliases = []
function liquid(Prism) {
  Prism.languages.liquid = {
    keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
    operator: {
      pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
      lookbehind: true
    },
    function: {
      pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
      lookbehind: true
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbGlxdWlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLHliQUF5YjtBQUNoZDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNTgwZWJkZGZhZmFiMDcwMjE3NGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXF1aWRcbmxpcXVpZC5kaXNwbGF5TmFtZSA9ICdsaXF1aWQnXG5saXF1aWQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBsaXF1aWQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmxpcXVpZCA9IHtcbiAgICBrZXl3b3JkOiAvXFxiKD86Y29tbWVudHxlbmRjb21tZW50fGlmfGVsc2lmfGVsc2V8ZW5kaWZ8dW5sZXNzfGVuZHVubGVzc3xmb3J8ZW5kZm9yfGNhc2V8ZW5kY2FzZXx3aGVufGlufGJyZWFrfGFzc2lnbnxjb250aW51ZXxsaW1pdHxvZmZzZXR8cmFuZ2V8cmV2ZXJzZWR8cmF3fGVuZHJhd3xjYXB0dXJlfGVuZGNhcHR1cmV8dGFibGVyb3d8ZW5kdGFibGVyb3cpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIwYlswMV0rXFxifFxcYjB4W1xcZGEtZl0qXFwuP1tcXGRhLWZwLV0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspP1tkZl0/L2ksXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi5dKSg/OlxcK1srPV0/fC1bLT1dP3whPT98PDw/PT98Pj4/Pj89P3w9PT98JlsmPV0/fFxcfFt8PV0/fFxcKj0/fFxcLz0/fCU9P3xcXF49P3xbPzp+XSkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGZ1bmN0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl0pKD86YXBwZW5kfHByZXBlbmR8Y2FwaXRhbGl6ZXxjeWNsZXxjb2xzfGluY3JlbWVudHxkZWNyZW1lbnR8YWJzfGF0X2xlYXN0fGF0X21vc3R8Y2VpbHxjb21wYWN0fGNvbmNhdHxkYXRlfGRlZmF1bHR8ZGl2aWRlZF9ieXxkb3duY2FzZXxlc2NhcGV8ZXNjYXBlX29uY2V8Zmlyc3R8Zmxvb3J8am9pbnxsYXN0fGxzdHJpcHxtYXB8bWludXN8bW9kdWxvfG5ld2xpbmVfdG9fYnJ8cGx1c3xyZW1vdmV8cmVtb3ZlX2ZpcnN0fHJlcGxhY2V8cmVwbGFjZV9maXJzdHxyZXZlcnNlfHJvdW5kfHJzdHJpcHxzaXplfHNsaWNlfHNvcnR8c29ydF9uYXR1cmFsfHNwbGl0fHN0cmlwfHN0cmlwX2h0bWx8c3RyaXBfbmV3bGluZXN8dGltZXN8dHJ1bmNhdGV8dHJ1bmNhdGV3b3Jkc3x1bmlxfHVwY2FzZXx1cmxfZGVjb2RlfHVybF9lbmNvZGV8aW5jbHVkZXxwYWdpbmF0ZSkoPz0kfFtcXHM7fCZdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9