(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_asm6502"],{

/***/ "./node_modules/refractor/lang/asm6502.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/asm6502.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = asm6502
asm6502.displayName = 'asm6502'
asm6502.aliases = []
function asm6502(Prism) {
  Prism.languages.asm6502 = {
    comment: /;.*/,
    directive: {
      pattern: /\.\w+(?= )/,
      alias: 'keyword'
    },
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    opcode: {
      pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
      alias: 'property'
    },
    hexnumber: {
      pattern: /#?\$[\da-f]{2,4}/i,
      alias: 'string'
    },
    binarynumber: {
      pattern: /#?%[01]+/,
      alias: 'string'
    },
    decimalnumber: {
      pattern: /#?\d+/,
      alias: 'string'
    },
    register: {
      pattern: /\b[xya]\b/i,
      alias: 'variable'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXNtNjUwMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5kMjc2MmEyZDQxZDU1ZGVlOTg0Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzbTY1MDJcbmFzbTY1MDIuZGlzcGxheU5hbWUgPSAnYXNtNjUwMidcbmFzbTY1MDIuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhc202NTAyKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hc202NTAyID0ge1xuICAgIGNvbW1lbnQ6IC87LiovLFxuICAgIGRpcmVjdGl2ZToge1xuICAgICAgcGF0dGVybjogL1xcLlxcdysoPz0gKS8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBzdHJpbmc6IC8oW1wiJ2BdKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgIG9wY29kZToge1xuICAgICAgcGF0dGVybjogL1xcYig/OmFkY3xhbmR8YXNsfGJjY3xiY3N8YmVxfGJpdHxibWl8Ym5lfGJwbHxicmt8YnZjfGJ2c3xjbGN8Y2xkfGNsaXxjbHZ8Y21wfGNweHxjcHl8ZGVjfGRleHxkZXl8ZW9yfGluY3xpbnh8aW55fGptcHxqc3J8bGRhfGxkeHxsZHl8bHNyfG5vcHxvcmF8cGhhfHBocHxwbGF8cGxwfHJvbHxyb3J8cnRpfHJ0c3xzYmN8c2VjfHNlZHxzZWl8c3RhfHN0eHxzdHl8dGF4fHRheXx0c3h8dHhhfHR4c3x0eWF8QURDfEFORHxBU0x8QkNDfEJDU3xCRVF8QklUfEJNSXxCTkV8QlBMfEJSS3xCVkN8QlZTfENMQ3xDTER8Q0xJfENMVnxDTVB8Q1BYfENQWXxERUN8REVYfERFWXxFT1J8SU5DfElOWHxJTll8Sk1QfEpTUnxMREF8TERYfExEWXxMU1J8Tk9QfE9SQXxQSEF8UEhQfFBMQXxQTFB8Uk9MfFJPUnxSVEl8UlRTfFNCQ3xTRUN8U0VEfFNFSXxTVEF8U1RYfFNUWXxUQVh8VEFZfFRTWHxUWEF8VFhTfFRZQSlcXGIvLFxuICAgICAgYWxpYXM6ICdwcm9wZXJ0eSdcbiAgICB9LFxuICAgIGhleG51bWJlcjoge1xuICAgICAgcGF0dGVybjogLyM/XFwkW1xcZGEtZl17Miw0fS9pLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBiaW5hcnludW1iZXI6IHtcbiAgICAgIHBhdHRlcm46IC8jPyVbMDFdKy8sXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIGRlY2ltYWxudW1iZXI6IHtcbiAgICAgIHBhdHRlcm46IC8jP1xcZCsvLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICByZWdpc3Rlcjoge1xuICAgICAgcGF0dGVybjogL1xcYlt4eWFdXFxiL2ksXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==