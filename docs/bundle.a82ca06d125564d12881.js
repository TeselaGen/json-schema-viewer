(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_verilog"],{

/***/ "./node_modules/refractor/lang/verilog.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/verilog.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = verilog
verilog.displayName = 'verilog'
verilog.aliases = []
function verilog(Prism) {
  Prism.languages.verilog = {
    comment: /\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: true
    },
    // support for any kernel function (ex: $display())
    property: /\B\$\w+\b/,
    // support for user defined constants (ex: `define)
    constant: /\B`\w+\b/,
    function: /\w+(?=\()/,
    // support for verilog and system verilog keywords
    keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
    // bold highlighting for all verilog and system verilog logic blocks
    important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
    // support for time ticks, vectors, and real numbers
    number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
    operator: /[-+{}^~%*\/?=!<>&|]+/,
    punctuation: /[[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdmVyaWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkI7QUFDQSIsImZpbGUiOiJidW5kbGUuYTgyY2EwNmQxMjU1NjRkMTI4ODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJpbG9nXG52ZXJpbG9nLmRpc3BsYXlOYW1lID0gJ3Zlcmlsb2cnXG52ZXJpbG9nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdmVyaWxvZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudmVyaWxvZyA9IHtcbiAgICBjb21tZW50OiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gc3VwcG9ydCBmb3IgYW55IGtlcm5lbCBmdW5jdGlvbiAoZXg6ICRkaXNwbGF5KCkpXG4gICAgcHJvcGVydHk6IC9cXEJcXCRcXHcrXFxiLyxcbiAgICAvLyBzdXBwb3J0IGZvciB1c2VyIGRlZmluZWQgY29uc3RhbnRzIChleDogYGRlZmluZSlcbiAgICBjb25zdGFudDogL1xcQmBcXHcrXFxiLyxcbiAgICBmdW5jdGlvbjogL1xcdysoPz1cXCgpLyxcbiAgICAvLyBzdXBwb3J0IGZvciB2ZXJpbG9nIGFuZCBzeXN0ZW0gdmVyaWxvZyBrZXl3b3Jkc1xuICAgIGtleXdvcmQ6IC9cXGIoPzphbGlhc3xhbmR8YXNzZXJ0fGFzc2lnbnxhc3N1bWV8YXV0b21hdGljfGJlZm9yZXxiZWdpbnxiaW5kfGJpbnN8Ymluc29mfGJpdHxicmVha3xidWZ8YnVmaWYwfGJ1ZmlmMXxieXRlfGNsYXNzfGNhc2V8Y2FzZXh8Y2FzZXp8Y2VsbHxjaGFuZGxlfGNsb2NraW5nfGNtb3N8Y29uZmlnfGNvbnN0fGNvbnN0cmFpbnR8Y29udGV4dHxjb250aW51ZXxjb3Zlcnxjb3Zlcmdyb3VwfGNvdmVycG9pbnR8Y3Jvc3N8ZGVhc3NpZ258ZGVmYXVsdHxkZWZwYXJhbXxkZXNpZ258ZGlzYWJsZXxkaXN0fGRvfGVkZ2V8ZWxzZXxlbmR8ZW5kY2FzZXxlbmRjbGFzc3xlbmRjbG9ja2luZ3xlbmRjb25maWd8ZW5kZnVuY3Rpb258ZW5kZ2VuZXJhdGV8ZW5kZ3JvdXB8ZW5kaW50ZXJmYWNlfGVuZG1vZHVsZXxlbmRwYWNrYWdlfGVuZHByaW1pdGl2ZXxlbmRwcm9ncmFtfGVuZHByb3BlcnR5fGVuZHNwZWNpZnl8ZW5kc2VxdWVuY2V8ZW5kdGFibGV8ZW5kdGFza3xlbnVtfGV2ZW50fGV4cGVjdHxleHBvcnR8ZXh0ZW5kc3xleHRlcm58ZmluYWx8Zmlyc3RfbWF0Y2h8Zm9yfGZvcmNlfGZvcmVhY2h8Zm9yZXZlcnxmb3JrfGZvcmtqb2lufGZ1bmN0aW9ufGdlbmVyYXRlfGdlbnZhcnxoaWdoejB8aGlnaHoxfGlmfGlmZnxpZm5vbmV8aWdub3JlX2JpbnN8aWxsZWdhbF9iaW5zfGltcG9ydHxpbmNkaXJ8aW5jbHVkZXxpbml0aWFsfGlub3V0fGlucHV0fGluc2lkZXxpbnN0YW5jZXxpbnR8aW50ZWdlcnxpbnRlcmZhY2V8aW50ZXJzZWN0fGpvaW58am9pbl9hbnl8am9pbl9ub25lfGxhcmdlfGxpYmxpc3R8bGlicmFyeXxsb2NhbHxsb2NhbHBhcmFtfGxvZ2ljfGxvbmdpbnR8bWFjcm9tb2R1bGV8bWF0Y2hlc3xtZWRpdW18bW9kcG9ydHxtb2R1bGV8bmFuZHxuZWdlZGdlfG5ld3xubW9zfG5vcnxub3Nob3djYW5jZWxsZWR8bm90fG5vdGlmMHxub3RpZjF8bnVsbHxvcnxvdXRwdXR8cGFja2FnZXxwYWNrZWR8cGFyYW1ldGVyfHBtb3N8cG9zZWRnZXxwcmltaXRpdmV8cHJpb3JpdHl8cHJvZ3JhbXxwcm9wZXJ0eXxwcm90ZWN0ZWR8cHVsbDB8cHVsbDF8cHVsbGRvd258cHVsbHVwfHB1bHNlc3R5bGVfb25ldmVudHxwdWxzZXN0eWxlX29uZGV0ZWN0fHB1cmV8cmFuZHxyYW5kY3xyYW5kY2FzZXxyYW5kc2VxdWVuY2V8cmNtb3N8cmVhbHxyZWFsdGltZXxyZWZ8cmVnfHJlbGVhc2V8cmVwZWF0fHJldHVybnxybm1vc3xycG1vc3xydHJhbnxydHJhbmlmMHxydHJhbmlmMXxzY2FsYXJlZHxzZXF1ZW5jZXxzaG9ydGludHxzaG9ydHJlYWx8c2hvd2NhbmNlbGxlZHxzaWduZWR8c21hbGx8c29sdmV8c3BlY2lmeXxzcGVjcGFyYW18c3RhdGljfHN0cmluZ3xzdHJvbmcwfHN0cm9uZzF8c3RydWN0fHN1cGVyfHN1cHBseTB8c3VwcGx5MXx0YWJsZXx0YWdnZWR8dGFza3x0aGlzfHRocm91Z2hvdXR8dGltZXx0aW1lcHJlY2lzaW9ufHRpbWV1bml0fHRyYW58dHJhbmlmMHx0cmFuaWYxfHRyaXx0cmkwfHRyaTF8dHJpYW5kfHRyaW9yfHRyaXJlZ3x0eXBlfHR5cGVkZWZ8dW5pb258dW5pcXVlfHVuc2lnbmVkfHVzZXx1d2lyZXx2YXJ8dmVjdG9yZWR8dmlydHVhbHx2b2lkfHdhaXR8d2FpdF9vcmRlcnx3YW5kfHdlYWswfHdlYWsxfHdoaWxlfHdpbGRjYXJkfHdpcmV8d2l0aHx3aXRoaW58d29yfHhub3J8eG9yKVxcYi8sXG4gICAgLy8gYm9sZCBoaWdobGlnaHRpbmcgZm9yIGFsbCB2ZXJpbG9nIGFuZCBzeXN0ZW0gdmVyaWxvZyBsb2dpYyBibG9ja3NcbiAgICBpbXBvcnRhbnQ6IC9cXGIoPzphbHdheXNfbGF0Y2h8YWx3YXlzX2NvbWJ8YWx3YXlzX2ZmfGFsd2F5cylcXGIgP0A/LyxcbiAgICAvLyBzdXBwb3J0IGZvciB0aW1lIHRpY2tzLCB2ZWN0b3JzLCBhbmQgcmVhbCBudW1iZXJzXG4gICAgbnVtYmVyOiAvXFxCIyM/XFxkK3woPzpcXGJcXGQrKT8nW29kYmhdID9bXFxkYS1menhfP10rfFxcYlxcZCpbLl9dP1xcZCsoPzplWy0rXT9cXGQrKT8vaSxcbiAgICBvcGVyYXRvcjogL1stK3t9Xn4lKlxcLz89ITw+JnxdKy8sXG4gICAgcHVuY3R1YXRpb246IC9bW1xcXTsoKSwuOl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=