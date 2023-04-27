(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_parigp"],{

/***/ "./node_modules/refractor/lang/parigp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parigp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = parigp
parigp.displayName = 'parigp'
parigp.aliases = []
function parigp(Prism) {
  Prism.languages.parigp = {
    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
    string: {
      pattern: /"(?:[^"\\\r\n]|\\.)*"/,
      greedy: true
    },
    // PARI/GP does not care about white spaces at all
    // so let's process the keywords to build an appropriate regexp
    // (e.g. "b *r *e *a *k", etc.)
    keyword: (function() {
      var keywords = [
        'breakpoint',
        'break',
        'dbg_down',
        'dbg_err',
        'dbg_up',
        'dbg_x',
        'forcomposite',
        'fordiv',
        'forell',
        'forpart',
        'forprime',
        'forstep',
        'forsubgroup',
        'forvec',
        'for',
        'iferr',
        'if',
        'local',
        'my',
        'next',
        'return',
        'until',
        'while'
      ]
      keywords = keywords
        .map(function(keyword) {
          return keyword.split('').join(' *')
        })
        .join('|')
      return RegExp('\\b(?:' + keywords + ')\\b')
    })(),
    function: /\w[\w ]*?(?= *\()/,
    number: {
      // The lookbehind and the negative lookahead prevent from breaking the .. operator
      pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
      lookbehind: true
    },
    operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
    punctuation: /[\[\]{}().,:;|]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcGFyaWdwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrSkFBa0osSUFBSTtBQUN0Six5QkFBeUIsTUFBTTtBQUMvQjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4wMzVjNTcyMjgxZDUwNDZlMzMxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmlncFxucGFyaWdwLmRpc3BsYXlOYW1lID0gJ3BhcmlncCdcbnBhcmlncC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHBhcmlncChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucGFyaWdwID0ge1xuICAgIGNvbW1lbnQ6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfFxcXFxcXFxcLiovLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86W15cIlxcXFxcXHJcXG5dfFxcXFwuKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIC8vIFBBUkkvR1AgZG9lcyBub3QgY2FyZSBhYm91dCB3aGl0ZSBzcGFjZXMgYXQgYWxsXG4gICAgLy8gc28gbGV0J3MgcHJvY2VzcyB0aGUga2V5d29yZHMgdG8gYnVpbGQgYW4gYXBwcm9wcmlhdGUgcmVnZXhwXG4gICAgLy8gKGUuZy4gXCJiICpyICplICphICprXCIsIGV0Yy4pXG4gICAga2V5d29yZDogKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleXdvcmRzID0gW1xuICAgICAgICAnYnJlYWtwb2ludCcsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdkYmdfZG93bicsXG4gICAgICAgICdkYmdfZXJyJyxcbiAgICAgICAgJ2RiZ191cCcsXG4gICAgICAgICdkYmdfeCcsXG4gICAgICAgICdmb3Jjb21wb3NpdGUnLFxuICAgICAgICAnZm9yZGl2JyxcbiAgICAgICAgJ2ZvcmVsbCcsXG4gICAgICAgICdmb3JwYXJ0JyxcbiAgICAgICAgJ2ZvcnByaW1lJyxcbiAgICAgICAgJ2ZvcnN0ZXAnLFxuICAgICAgICAnZm9yc3ViZ3JvdXAnLFxuICAgICAgICAnZm9ydmVjJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdpZmVycicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdsb2NhbCcsXG4gICAgICAgICdteScsXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd1bnRpbCcsXG4gICAgICAgICd3aGlsZSdcbiAgICAgIF1cbiAgICAgIGtleXdvcmRzID0ga2V5d29yZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIGtleXdvcmQuc3BsaXQoJycpLmpvaW4oJyAqJylcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJ3wnKVxuICAgICAgcmV0dXJuIFJlZ0V4cCgnXFxcXGIoPzonICsga2V5d29yZHMgKyAnKVxcXFxiJylcbiAgICB9KSgpLFxuICAgIGZ1bmN0aW9uOiAvXFx3W1xcdyBdKj8oPz0gKlxcKCkvLFxuICAgIG51bWJlcjoge1xuICAgICAgLy8gVGhlIGxvb2tiZWhpbmQgYW5kIHRoZSBuZWdhdGl2ZSBsb29rYWhlYWQgcHJldmVudCBmcm9tIGJyZWFraW5nIHRoZSAuLiBvcGVyYXRvclxuICAgICAgcGF0dGVybjogLygoPzpcXC4gKlxcLiAqKT8pKD86XFxkKD86ICpcXGQpKig/OiAqKD8hXFwuICpcXC4pXFwuKD86ICpcXGQpKik/fFxcLiAqXFxkKD86ICpcXGQpKikoPzogKmUgKlsrLV0/ICpcXGQoPzogKlxcZCkqKT8vaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIG9wZXJhdG9yOiAvXFwuICpcXC58WypcXC8hXSg/OiAqPSk/fCUoPzogKj18KD86ICojKT8oPzogKicpKik/fFxcKyg/OiAqWys9XSk/fC0oPzogKlstPT5dKT98PCg/Oig/OiAqPCk/KD86ICo9KT98ICo+KT98Pig/OiAqPik/KD86ICo9KT98PSg/OiAqPSl7MCwyfXxcXFxcKD86ICpcXC8pPyg/OiAqPSk/fCYoPzogKiYpP3xcXHwgKlxcfHxbJyN+Xl0vLFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXXt9KCkuLDo7fF0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=