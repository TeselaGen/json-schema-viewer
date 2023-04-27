(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_csp"],{

/***/ "./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = csp
csp.displayName = 'csp'
csp.aliases = []
function csp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/
   *
   * Supports the following:
   *  - CSP Level 1
   *  - CSP Level 2
   *  - CSP Level 3
   */
  Prism.languages.csp = {
    directive: {
      pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
      alias: 'keyword'
    },
    safe: {
      pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
      alias: 'function'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseU5BQXlOO0FBQ3pOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjUyOGJlMjliMjg2MGQwYzNmZmU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3NwXG5jc3AuZGlzcGxheU5hbWUgPSAnY3NwJ1xuY3NwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gY3NwKFByaXNtKSB7XG4gIC8qKlxuICAgKiBPcmlnaW5hbCBieSBTY290dCBIZWxtZS5cbiAgICpcbiAgICogUmVmZXJlbmNlOiBodHRwczovL3Njb3R0aGVsbWUuY28udWsvY3NwLWNoZWF0LXNoZWV0L1xuICAgKlxuICAgKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nOlxuICAgKiAgLSBDU1AgTGV2ZWwgMVxuICAgKiAgLSBDU1AgTGV2ZWwgMlxuICAgKiAgLSBDU1AgTGV2ZWwgM1xuICAgKi9cbiAgUHJpc20ubGFuZ3VhZ2VzLmNzcCA9IHtcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzooPzpiYXNlLXVyaXxmb3JtLWFjdGlvbnxmcmFtZS1hbmNlc3RvcnN8cGx1Z2luLXR5cGVzfHJlZmVycmVyfHJlZmxlY3RlZC14c3N8cmVwb3J0LXRvfHJlcG9ydC11cml8cmVxdWlyZS1zcmktZm9yfHNhbmRib3gpIHwoPzpibG9jay1hbGwtbWl4ZWQtY29udGVudHxkaXNvd24tb3BlbmVyfHVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHMpKD86IHw7KXwoPzpjaGlsZHxjb25uZWN0fGRlZmF1bHR8Zm9udHxmcmFtZXxpbWd8bWFuaWZlc3R8bWVkaWF8b2JqZWN0fHNjcmlwdHxzdHlsZXx3b3JrZXIpLXNyYyApL2ksXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBzYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OnNlbGZ8bm9uZXxzdHJpY3QtZHluYW1pY3woPzpub25jZS18c2hhKD86MjU2fDM4NHw1MTIpLSlbYS16QS1aXFxkKz0vXSspJy8sXG4gICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgIH0sXG4gICAgdW5zYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvKD86J3Vuc2FmZS1pbmxpbmUnfCd1bnNhZmUtZXZhbCd8J3Vuc2FmZS1oYXNoZWQtYXR0cmlidXRlcyd8XFwqKS8sXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==