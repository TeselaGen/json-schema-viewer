(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_ichigojam"],{

/***/ "./node_modules/refractor/lang/ichigojam.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/ichigojam.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = ichigojam
ichigojam.displayName = 'ichigojam'
ichigojam.aliases = []
function ichigojam(Prism) {
  // according to the offical reference (EN)
  // https://ichigojam.net/IchigoJam-en.html
  Prism.languages.ichigojam = {
    comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
      greedy: true
    },
    number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
    function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
    label: /(?:\B@[^\s]+)/i,
    operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
    punctuation: /[\[,;:()\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaWNoaWdvamFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjgxNjZjNmE0YjI5NDMxMjgwYjFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaWNoaWdvamFtXG5pY2hpZ29qYW0uZGlzcGxheU5hbWUgPSAnaWNoaWdvamFtJ1xuaWNoaWdvamFtLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaWNoaWdvamFtKFByaXNtKSB7XG4gIC8vIGFjY29yZGluZyB0byB0aGUgb2ZmaWNhbCByZWZlcmVuY2UgKEVOKVxuICAvLyBodHRwczovL2ljaGlnb2phbS5uZXQvSWNoaWdvSmFtLWVuLmh0bWxcbiAgUHJpc20ubGFuZ3VhZ2VzLmljaGlnb2phbSA9IHtcbiAgICBjb21tZW50OiAvKD86XFxCJ3xSRU0pKD86W15cXG5cXHJdKikvaSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlwiXCJ8WyEjJCUmJygpKixcXC86Ozw9Pj9eXyArXFwtLkEtWlxcZF0pKlwiL2ksXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogL1xcQiNbMC05QS1GXSt8XFxCYFswMV0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OkVbKy1dP1xcZCspPy9pLFxuICAgIGtleXdvcmQ6IC9cXGIoPzpCRUVQfEJQU3xDQVNFfENMRUFSfENMS3xDTE98Q0xQfENMU3xDTFR8Q0xWfENPTlR8Q09QWXxFTFNFfEVORHxGSUxFfEZJTEVTfEZPUnxHT1NVQnxHU0J8R09UT3xJRnxJTlBVVHxLQkR8TEVEfExFVHxMSVNUfExPQUR8TE9DQVRFfExSVU58TkVXfE5FWFR8T1VUfFJJR0hUfFBMQVl8UE9LRXxQUklOVHxQV018UkVNfFJFTlVNfFJFU0VUfFJFVFVSTnxSVE58UlVOfFNBVkV8U0NST0xMfFNMRUVQfFNSTkR8U1RFUHxTVE9QfFNVQnxURU1QT3xUSEVOfFRPfFVBUlR8VklERU98V0FJVCkoPzpcXCR8XFxiKS9pLFxuICAgIGZ1bmN0aW9uOiAvXFxiKD86QUJTfEFOQXxBU0N8QklOfEJUTnxERUN8RU5EfEZSRUV8SEVMUHxIRVh8STJDUnxJMkNXfElOfElOS0VZfExFTnxMSU5FfFBFRUt8Uk5EfFNDUnxTT1VORHxTVFJ8VElDS3xVU1J8VkVSfFZQRUVLfFpFUikoPzpcXCR8XFxiKS9pLFxuICAgIGxhYmVsOiAvKD86XFxCQFteXFxzXSspL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Pj0/fFxcfFxcfHwmJnxbK1xcLSpcXC89fCZefiFdfFxcYig/OkFORHxOT1R8T1IpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bXFxbLDs6KClcXF1dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9