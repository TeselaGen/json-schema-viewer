(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_d"],{

/***/ "./node_modules/refractor/lang/d.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/d.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = d
d.displayName = 'd'
d.aliases = []
function d(Prism) {
  Prism.languages.d = Prism.languages.extend('clike', {
    string: [
      // r"", x""
      /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/, // q"[]", q"()", q"<>", q"{}"
      /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/, // q"IDENT
      // ...
      // IDENT"
      /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/, // q"//", q"||", etc.
      /\bq"(.)[\s\S]*?\1"/, // Characters
      /'(?:\\'|\\?[^']+)'/,
      /(["`])(?:\\[\s\S]|(?!\1)[^\\])*\1[cwd]?/
    ],
    number: [
      // The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator
      // Hexadecimal numbers must be handled separately to avoid problems with exponent "e"
      /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,
      {
        pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
        lookbehind: true
      }
    ],
    // In order: $, keywords and special tokens, globally defined symbols
    keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
    operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
  })
  Prism.languages.d.comment = [
    // Shebang
    /^\s*#!.+/, // /+ +/
    {
      // Allow one level of nesting
      pattern: /(^|[^\\])\/\+(?:\/\+[\s\S]*?\+\/|[\s\S])*?\+\//,
      lookbehind: true
    }
  ].concat(Prism.languages.d.comment)
  Prism.languages.insertBefore('d', 'comment', {
    'token-string': {
      // Allow one level of nesting
      pattern: /\bq\{(?:\{[^}]*\}|[^}])*\}/,
      alias: 'string'
    }
  })
  Prism.languages.insertBefore('d', 'keyword', {
    property: /\B@\w*/
  })
  Prism.languages.insertBefore('d', 'function', {
    register: {
      // Iasm registers
      pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
      alias: 'variable'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLjI4NDNlYzY1NWVlNWQ2OWRlOTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZFxuZC5kaXNwbGF5TmFtZSA9ICdkJ1xuZC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBzdHJpbmc6IFtcbiAgICAgIC8vIHJcIlwiLCB4XCJcIlxuICAgICAgL1xcYltyeF1cIig/OlxcXFxbXFxzXFxTXXxbXlxcXFxcIl0pKlwiW2N3ZF0/LywgLy8gcVwiW11cIiwgcVwiKClcIiwgcVwiPD5cIiwgcVwie31cIlxuICAgICAgL1xcYnFcIig/OlxcW1tcXHNcXFNdKj9cXF18XFwoW1xcc1xcU10qP1xcKXw8W1xcc1xcU10qPz58XFx7W1xcc1xcU10qP1xcfSlcIi8sIC8vIHFcIklERU5UXG4gICAgICAvLyAuLi5cbiAgICAgIC8vIElERU5UXCJcbiAgICAgIC9cXGJxXCIoW19hLXpBLVpdW19hLXpBLVpcXGRdKikoPzpcXHI/XFxufFxccilbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwxXCIvLCAvLyBxXCIvL1wiLCBxXCJ8fFwiLCBldGMuXG4gICAgICAvXFxicVwiKC4pW1xcc1xcU10qP1xcMVwiLywgLy8gQ2hhcmFjdGVyc1xuICAgICAgLycoPzpcXFxcJ3xcXFxcP1teJ10rKScvLFxuICAgICAgLyhbXCJgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMVtjd2RdPy9cbiAgICBdLFxuICAgIG51bWJlcjogW1xuICAgICAgLy8gVGhlIGxvb2tiZWhpbmQgYW5kIHRoZSBuZWdhdGl2ZSBsb29rLWFoZWFkIHRyeSB0byBwcmV2ZW50IGJhZCBoaWdobGlnaHRpbmcgb2YgdGhlIC4uIG9wZXJhdG9yXG4gICAgICAvLyBIZXhhZGVjaW1hbCBudW1iZXJzIG11c3QgYmUgaGFuZGxlZCBzZXBhcmF0ZWx5IHRvIGF2b2lkIHByb2JsZW1zIHdpdGggZXhwb25lbnQgXCJlXCJcbiAgICAgIC9cXGIweFxcLj9bYS1mXFxkX10rKD86KD8hXFwuXFwuKVxcLlthLWZcXGRfXSopPyg/OnBbKy1dP1thLWZcXGRfXSspP1t1bGZpXSovaSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLygoPzpcXC5cXC4pPykoPzpcXGIwYlxcLj98XFxifFxcLilcXGRbXFxkX10qKD86KD8hXFwuXFwuKVxcLltcXGRfXSopPyg/OmVbKy1dP1xcZFtcXGRfXSopP1t1bGZpXSovaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gSW4gb3JkZXI6ICQsIGtleXdvcmRzIGFuZCBzcGVjaWFsIHRva2VucywgZ2xvYmFsbHkgZGVmaW5lZCBzeW1ib2xzXG4gICAga2V5d29yZDogL1xcJHxcXGIoPzphYnN0cmFjdHxhbGlhc3xhbGlnbnxhc218YXNzZXJ0fGF1dG98Ym9keXxib29sfGJyZWFrfGJ5dGV8Y2FzZXxjYXN0fGNhdGNofGNkb3VibGV8Y2VudHxjZmxvYXR8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxjcmVhbHxkY2hhcnxkZWJ1Z3xkZWZhdWx0fGRlbGVnYXRlfGRlbGV0ZXxkZXByZWNhdGVkfGRvfGRvdWJsZXxlbHNlfGVudW18ZXhwb3J0fGV4dGVybnxmYWxzZXxmaW5hbHxmaW5hbGx5fGZsb2F0fGZvcnxmb3JlYWNofGZvcmVhY2hfcmV2ZXJzZXxmdW5jdGlvbnxnb3RvfGlkb3VibGV8aWZ8aWZsb2F0fGltbXV0YWJsZXxpbXBvcnR8aW5vdXR8aW50fGludGVyZmFjZXxpbnZhcmlhbnR8aXJlYWx8bGF6eXxsb25nfG1hY3JvfG1peGlufG1vZHVsZXxuZXd8bm90aHJvd3xudWxsfG91dHxvdmVycmlkZXxwYWNrYWdlfHByYWdtYXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cHVyZXxyZWFsfHJlZnxyZXR1cm58c2NvcGV8c2hhcmVkfHNob3J0fHN0YXRpY3xzdHJ1Y3R8c3VwZXJ8c3dpdGNofHN5bmNocm9uaXplZHx0ZW1wbGF0ZXx0aGlzfHRocm93fHRydWV8dHJ5fHR5cGVkZWZ8dHlwZWlkfHR5cGVvZnx1Ynl0ZXx1Y2VudHx1aW50fHVsb25nfHVuaW9ufHVuaXR0ZXN0fHVzaG9ydHx2ZXJzaW9ufHZvaWR8dm9sYXRpbGV8d2NoYXJ8d2hpbGV8d2l0aHxfXyg/Oig/OkZJTEV8TU9EVUxFfExJTkV8RlVOQ1RJT058UFJFVFRZX0ZVTkNUSU9OfERBVEV8RU9GfFRJTUV8VElNRVNUQU1QfFZFTkRPUnxWRVJTSU9OKV9ffGdzaGFyZWR8dHJhaXRzfHZlY3RvcnxwYXJhbWV0ZXJzKXxzdHJpbmd8d3N0cmluZ3xkc3RyaW5nfHNpemVfdHxwdHJkaWZmX3QpXFxiLyxcbiAgICBvcGVyYXRvcjogL1xcfFt8PV0/fCZbJj1dP3xcXCtbKz1dP3wtWy09XT98XFwuP1xcLlxcLnw9Wz49XT98ISg/OmlbbnNdXFxifDw+Pz0/fD49P3w9KT98XFxiaVtuc11cXGJ8KD86PFs8Pl0/fD4+Pz4/fFxcXlxcXnxbKlxcLyVefl0pPT8vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5kLmNvbW1lbnQgPSBbXG4gICAgLy8gU2hlYmFuZ1xuICAgIC9eXFxzKiMhLisvLCAvLyAvKyArL1xuICAgIHtcbiAgICAgIC8vIEFsbG93IG9uZSBsZXZlbCBvZiBuZXN0aW5nXG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCsoPzpcXC9cXCtbXFxzXFxTXSo/XFwrXFwvfFtcXHNcXFNdKSo/XFwrXFwvLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9XG4gIF0uY29uY2F0KFByaXNtLmxhbmd1YWdlcy5kLmNvbW1lbnQpXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2QnLCAnY29tbWVudCcsIHtcbiAgICAndG9rZW4tc3RyaW5nJzoge1xuICAgICAgLy8gQWxsb3cgb25lIGxldmVsIG9mIG5lc3RpbmdcbiAgICAgIHBhdHRlcm46IC9cXGJxXFx7KD86XFx7W159XSpcXH18W159XSkqXFx9LyxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZCcsICdrZXl3b3JkJywge1xuICAgIHByb3BlcnR5OiAvXFxCQFxcdyovXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2QnLCAnZnVuY3Rpb24nLCB7XG4gICAgcmVnaXN0ZXI6IHtcbiAgICAgIC8vIElhc20gcmVnaXN0ZXJzXG4gICAgICBwYXR0ZXJuOiAvXFxiKD86W0FCQ0RdW0xIWF18RVtBQkNEXVh8RT8oPzpCUHxTUHxESXxTSSl8W0VDU0RHRl1TfENSWzAyMzRdfERSWzAxMjM2N118VFJbMy03XXxYP01NWzAtN118UltBQkNEXVh8W0JTXVBMfFJbQlNdUHxbRFNdSUx8UltEU11JfFIoPzpbODldfDFbMC01XSlbQldEXT98WE1NKD86Wzg5XXwxWzAtNV0pfFlNTSg/OjFbMC01XXxcXGQpKVxcYnxcXGJTVCg/OlxcKFswLTddXFwpfFxcYikvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9