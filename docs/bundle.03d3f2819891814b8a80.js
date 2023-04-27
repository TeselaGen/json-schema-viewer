(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_keyman"],{

/***/ "./node_modules/refractor/lang/keyman.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/keyman.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = keyman
keyman.displayName = 'keyman'
keyman.aliases = []
function keyman(Prism) {
  Prism.languages.keyman = {
    comment: /\bc\s.*/i,
    function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
    // virtual key
    string: /("|').*?\1/,
    bold: [
      // header statements, system stores and variable system stores
      /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
      /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
    ],
    keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
    // rule keywords
    atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
    // structural keywords
    number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
    // U+####, x###, d### characters and numbers
    operator: /[+>\\,()]/,
    tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i // prefixes
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcva2V5bWFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMDNkM2YyODE5ODkxODE0YjhhODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBrZXltYW5cbmtleW1hbi5kaXNwbGF5TmFtZSA9ICdrZXltYW4nXG5rZXltYW4uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBrZXltYW4oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmtleW1hbiA9IHtcbiAgICBjb21tZW50OiAvXFxiY1xccy4qL2ksXG4gICAgZnVuY3Rpb246IC9cXFtcXHMqKD86KD86Q1RSTHxTSElGVHxBTFR8TENUUkx8UkNUUkx8TEFMVHxSQUxUfENBUFN8TkNBUFMpXFxzKykqKD86W1RLVV1fW1xcdz9dK3xcIi4rP1wifCcuKz8nKVxccypcXF0vaSxcbiAgICAvLyB2aXJ0dWFsIGtleVxuICAgIHN0cmluZzogLyhcInwnKS4qP1xcMS8sXG4gICAgYm9sZDogW1xuICAgICAgLy8gaGVhZGVyIHN0YXRlbWVudHMsIHN5c3RlbSBzdG9yZXMgYW5kIHZhcmlhYmxlIHN5c3RlbSBzdG9yZXNcbiAgICAgIC8mKD86YmFzZWxheW91dHxiaXRtYXB8Y2Fwc29ub25seXxjYXBzYWx3YXlzb2ZmfHNoaWZ0ZnJlZXNjYXBzfGNvcHlyaWdodHxldGhub2xvZ3VlY29kZXxob3RrZXl8aW5jbHVkZWNvZGVzfGtleWJvYXJkdmVyc2lvbnxrbXdfZW1iZWRjc3N8a213X2VtYmVkanN8a213X2hlbHBmaWxlfGttd19oZWxwdGV4dHxrbXdfcnRsfGxhbmd1YWdlfGxheWVyfGxheW91dGZpbGV8bWVzc2FnZXxtbmVtb25pY2xheW91dHxuYW1lfG9sZGNoYXJwb3NtYXRjaGluZ3xwbGF0Zm9ybXx0YXJnZXRzfHZlcnNpb258dmlzdWFsa2V5Ym9hcmR8d2luZG93c2xhbmd1YWdlcylcXGIvaSxcbiAgICAgIC9cXGIoPzpiaXRtYXB8Yml0bWFwc3xjYXBzIG9uIG9ubHl8Y2FwcyBhbHdheXMgb2ZmfHNoaWZ0IGZyZWVzIGNhcHN8Y29weXJpZ2h0fGhvdGtleXxsYW5ndWFnZXxsYXlvdXR8bWVzc2FnZXxuYW1lfHZlcnNpb24pXFxiL2lcbiAgICBdLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphbnl8YmFzZWxheW91dHxiZWVwfGNhbGx8Y29udGV4dHxkZWFka2V5fGRrfGlmfGluZGV4fGxheWVyfG5vdGFueXxudWx8b3V0c3xwbGF0Zm9ybXxyZXR1cm58cmVzZXR8c2F2ZXxzZXR8c3RvcmV8dXNlKVxcYi9pLFxuICAgIC8vIHJ1bGUga2V5d29yZHNcbiAgICBhdHJ1bGU6IC9cXGIoPzphbnNpfGJlZ2lufHVuaWNvZGV8Z3JvdXB8dXNpbmcga2V5c3xtYXRjaHxub21hdGNoKVxcYi9pLFxuICAgIC8vIHN0cnVjdHVyYWwga2V5d29yZHNcbiAgICBudW1iZXI6IC9cXGIoPzpVXFwrW1xcZEEtRl0rfGRcXGQrfHhbXFxkYS1mXSt8XFxkKylcXGIvaSxcbiAgICAvLyBVKyMjIyMsIHgjIyMsIGQjIyMgY2hhcmFjdGVycyBhbmQgbnVtYmVyc1xuICAgIG9wZXJhdG9yOiAvWys+XFxcXCwoKV0vLFxuICAgIHRhZzogL1xcJCg/OmtleW1hbnxrbWZsfHdlYXZlcnxrZXltYW53ZWJ8a2V5bWFub25seSk6L2kgLy8gcHJlZml4ZXNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==