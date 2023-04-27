(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_bro"],{

/***/ "./node_modules/refractor/lang/bro.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bro.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = bro
bro.displayName = 'bro'
bro.aliases = []
function bro(Prism) {
  Prism.languages.bro = {
    comment: {
      pattern: /(^|[^\\$])#.*/,
      lookbehind: true,
      inside: {
        italic: /\b(?:TODO|FIXME|XXX)\b/
      }
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    boolean: /\b[TF]\b/,
    function: {
      pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
      inside: {
        keyword: /^(?:function|hook|event)/
      }
    },
    variable: {
      pattern: /(?:global|local) \w+/i,
      inside: {
        keyword: /(?:global|local)/
      }
    },
    builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
    constant: {
      pattern: /const \w+/i,
      inside: {
        keyword: /const/
      }
    },
    keyword: /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYnJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5lOTMzNTg4YTIzOGNkMDEwZmNkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJyb1xuYnJvLmRpc3BsYXlOYW1lID0gJ2JybydcbmJyby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGJybyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYnJvID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFwkXSkjLiovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBpdGFsaWM6IC9cXGIoPzpUT0RPfEZJWE1FfFhYWClcXGIvXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGJvb2xlYW46IC9cXGJbVEZdXFxiLyxcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLyg/OmZ1bmN0aW9ufGhvb2t8ZXZlbnQpIFxcdysoPzo6OlxcdyspPy8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL14oPzpmdW5jdGlvbnxob29rfGV2ZW50KS9cbiAgICAgIH1cbiAgICB9LFxuICAgIHZhcmlhYmxlOiB7XG4gICAgICBwYXR0ZXJuOiAvKD86Z2xvYmFsfGxvY2FsKSBcXHcrL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogLyg/Omdsb2JhbHxsb2NhbCkvXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsdGluOiAvKD86QCg/OmxvYWQoPzotKD86c2lnc3xwbHVnaW4pKT98dW5sb2FkfHByZWZpeGVzfGlmbj9kZWZ8ZWxzZXwoPzplbmQpP2lmfERJUnxGSUxFTkFNRSkpfCg/OiY/KD86cmVkZWZ8cHJpb3JpdHl8bG9nfG9wdGlvbmFsfGRlZmF1bHR8YWRkX2Z1bmN8ZGVsZXRlX2Z1bmN8ZXhwaXJlX2Z1bmN8cmVhZF9leHBpcmV8d3JpdGVfZXhwaXJlfGNyZWF0ZV9leHBpcmV8c3luY2hyb25pemVkfHBlcnNpc3RlbnR8cm90YXRlX2ludGVydmFsfHJvdGF0ZV9zaXplfGVuY3J5cHR8cmF3X291dHB1dHxtZXJnZWFibGV8Z3JvdXB8ZXJyb3JfaGFuZGxlcnx0eXBlX2NvbHVtbikpLyxcbiAgICBjb25zdGFudDoge1xuICAgICAgcGF0dGVybjogL2NvbnN0IFxcdysvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBrZXl3b3JkOiAvY29uc3QvXG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YnJlYWt8bmV4dHxjb250aW51ZXxhbGFybXx1c2luZ3xvZnxhZGR8ZGVsZXRlfGV4cG9ydHxwcmludHxyZXR1cm58c2NoZWR1bGV8d2hlbnx0aW1lb3V0fGFkZHJ8YW55fGJvb2x8Y291bnR8ZG91YmxlfGVudW18ZmlsZXxpbnR8aW50ZXJ2YWx8cGF0dGVybnxvcGFxdWV8cG9ydHxyZWNvcmR8c2V0fHN0cmluZ3xzdWJuZXR8dGFibGV8dGltZXx2ZWN0b3J8Zm9yfGlmfGVsc2V8aW58bW9kdWxlfGZ1bmN0aW9uKVxcYi8sXG4gICAgb3BlcmF0b3I6IC8tLT98XFwrXFwrP3whPT89P3w8PT98Pj0/fD09Pz0/fCYmfFxcfFxcfD98XFw/fFxcKnxcXC98fnxcXF58JS8sXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG4gICAgcHVuY3R1YXRpb246IC9be31bXFxdOygpLC46XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==