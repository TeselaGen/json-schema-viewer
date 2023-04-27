(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_applescript"],{

/***/ "./node_modules/refractor/lang/applescript.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/applescript.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = applescript
applescript.displayName = 'applescript'
applescript.aliases = []
function applescript(Prism) {
  Prism.languages.applescript = {
    comment: [
      // Allow one level of nesting
      /\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/,
      /--.+/,
      /#.+/
    ],
    string: /"(?:\\.|[^"\\\r\n])*"/,
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
    operator: [
      /[&=≠≤≥*+\-\/÷^]|[<>]=?/,
      /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
    ],
    keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
    class: {
      pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
      alias: 'builtin'
    },
    punctuation: /[{}():,¬«»《》]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXBwbGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQjtBQUNyQjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42OTNkNTMzY2ZjMDU4YzlhMzU1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGxlc2NyaXB0XG5hcHBsZXNjcmlwdC5kaXNwbGF5TmFtZSA9ICdhcHBsZXNjcmlwdCdcbmFwcGxlc2NyaXB0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYXBwbGVzY3JpcHQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFwcGxlc2NyaXB0ID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIC8vIEFsbG93IG9uZSBsZXZlbCBvZiBuZXN0aW5nXG4gICAgICAvXFwoXFwqKD86XFwoXFwqW1xcc1xcU10qP1xcKlxcKXxbXFxzXFxTXSkqP1xcKlxcKS8sXG4gICAgICAvLS0uKy8sXG4gICAgICAvIy4rL1xuICAgIF0sXG4gICAgc3RyaW5nOiAvXCIoPzpcXFxcLnxbXlwiXFxcXFxcclxcbl0pKlwiLyxcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplLT9cXGQrKT9cXGIvaSxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1smPeKJoOKJpOKJpSorXFwtXFwvw7deXXxbPD5dPT8vLFxuICAgICAgL1xcYig/Oig/OnN0YXJ0fGJlZ2lufGVuZClzPyB3aXRofCg/Oig/OmRvZXMgbm90fGRvZXNuJ3QpIGNvbnRhaW58Y29udGFpbnM/KXwoPzppc3xpc24ndHxpcyBub3QpICg/OmlufGNvbnRhaW5lZCBieSl8KD86KD86aXN8aXNuJ3R8aXMgbm90KSApPyg/OmdyZWF0ZXJ8bGVzcykgdGhhbig/OiBvciBlcXVhbCk/KD86IHRvKT98KD86KD86ZG9lcyBub3R8ZG9lc24ndCkgY29tZXxjb21lcykgKD86YmVmb3JlfGFmdGVyKXwoPzppc3xpc24ndHxpcyBub3QpIGVxdWFsKD86IHRvKT98KD86KD86ZG9lcyBub3R8ZG9lc24ndCkgZXF1YWx8ZXF1YWxzfGVxdWFsIHRvfGlzbid0fGlzIG5vdCl8KD86YSApPyg/OnJlZig/OiB0byk/fHJlZmVyZW5jZSB0byl8KD86YW5kfG9yfGRpdnxtb2R8YXN8bm90KSlcXGIvXG4gICAgXSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YWJvdXR8YWJvdmV8YWZ0ZXJ8YWdhaW5zdHxhcGFydCBmcm9tfGFyb3VuZHxhc2lkZSBmcm9tfGF0fGJhY2t8YmVmb3JlfGJlZ2lubmluZ3xiZWhpbmR8YmVsb3d8YmVuZWF0aHxiZXNpZGV8YmV0d2VlbnxidXR8Ynl8Y29uc2lkZXJpbmd8Y29udGludWV8Y29weXxkb2VzfGVpZ2h0aHxlbHNlfGVuZHxlcXVhbHxlcnJvcnxldmVyeXxleGl0fGZhbHNlfGZpZnRofGZpcnN0fGZvcnxmb3VydGh8ZnJvbXxmcm9udHxnZXR8Z2l2ZW58Z2xvYmFsfGlmfGlnbm9yaW5nfGlufGluc3RlYWQgb2Z8aW50b3xpc3xpdHxpdHN8bGFzdHxsb2NhbHxtZXxtaWRkbGV8bXl8bmludGh8b2Z8b258b250b3xvdXQgb2Z8b3Zlcnxwcm9wfHByb3BlcnR5fHB1dHxyZXBlYXR8cmV0dXJufHJldHVybmluZ3xzZWNvbmR8c2V0fHNldmVudGh8c2luY2V8c2l4dGh8c29tZXx0ZWxsfHRlbnRofHRoYXR8dGhlfHRoZW58dGhpcmR8dGhyb3VnaHx0aHJ1fHRpbWVvdXR8dGltZXN8dG98dHJhbnNhY3Rpb258dHJ1ZXx0cnl8dW50aWx8d2hlcmV8d2hpbGV8d2hvc2V8d2l0aHx3aXRob3V0KVxcYi8sXG4gICAgY2xhc3M6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzphbGlhc3xhcHBsaWNhdGlvbnxib29sZWFufGNsYXNzfGNvbnN0YW50fGRhdGV8ZmlsZXxpbnRlZ2VyfGxpc3R8bnVtYmVyfFBPU0lYIGZpbGV8cmVhbHxyZWNvcmR8cmVmZXJlbmNlfFJHQiBjb2xvcnxzY3JpcHR8dGV4dHxjZW50aW1ldHJlc3xjZW50aW1ldGVyc3xmZWV0fGluY2hlc3xraWxvbWV0cmVzfGtpbG9tZXRlcnN8bWV0cmVzfG1ldGVyc3xtaWxlc3x5YXJkc3xzcXVhcmUgZmVldHxzcXVhcmUga2lsb21ldHJlc3xzcXVhcmUga2lsb21ldGVyc3xzcXVhcmUgbWV0cmVzfHNxdWFyZSBtZXRlcnN8c3F1YXJlIG1pbGVzfHNxdWFyZSB5YXJkc3xjdWJpYyBjZW50aW1ldHJlc3xjdWJpYyBjZW50aW1ldGVyc3xjdWJpYyBmZWV0fGN1YmljIGluY2hlc3xjdWJpYyBtZXRyZXN8Y3ViaWMgbWV0ZXJzfGN1YmljIHlhcmRzfGdhbGxvbnN8bGl0cmVzfGxpdGVyc3xxdWFydHN8Z3JhbXN8a2lsb2dyYW1zfG91bmNlc3xwb3VuZHN8ZGVncmVlcyBDZWxzaXVzfGRlZ3JlZXMgRmFocmVuaGVpdHxkZWdyZWVzIEtlbHZpbilcXGIvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9be30oKToswqzCq8K744CK44CLXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==