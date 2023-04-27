(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_io"],{

/***/ "./node_modules/refractor/lang/io.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/io.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = io
io.displayName = 'io'
io.aliases = []
function io(Prism) {
  Prism.languages.io = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true
      }
    ],
    'triple-quoted-string': {
      pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /"(?:\\.|[^\\\r\n"])*"/,
      greedy: true
    },
    keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
    builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/,
    boolean: /\b(?:true|false|nil)\b/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i,
    operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|(\b(?:return|and|or|not)\b)|@@?|\?\??|\.\./,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5jY2VjN2YwMGRjYTRmODQwOWYzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlvXG5pby5kaXNwbGF5TmFtZSA9ICdpbydcbmlvLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaW8oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmlvID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcLy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pIy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgJ3RyaXBsZS1xdW90ZWQtc3RyaW5nJzoge1xuICAgICAgcGF0dGVybjogL1wiXCJcIig/OlxcXFxbXFxzXFxTXXwoPyFcIlwiXCIpW15cXFxcXSkqXCJcIlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmFjdGl2YXRlfGFjdGl2ZUNvcm9Db3VudHxhc1N0cmluZ3xibG9ja3xicmVha3xjYXRjaHxjbG9uZXxjb2xsZWN0R2FyYmFnZXxjb21waWxlU3RyaW5nfGNvbnRpbnVlfGRvfGRvRmlsZXxkb01lc3NhZ2V8ZG9TdHJpbmd8ZWxzZXxlbHNlaWZ8ZXhpdHxmb3J8Zm9yZWFjaHxmb3J3YXJkfGdldFNsb3R8Z2V0RW52aXJvbm1lbnRWYXJpYWJsZXxoYXNTbG90fGlmfGlmRmFsc2V8aWZOaWx8aWZOaWxFdmFsfGlmVHJ1ZXxpc0FjdGl2ZXxpc05pbHxpc1Jlc3VtYWJsZXxsaXN0fG1lc3NhZ2V8bWV0aG9kfHBhcmVudHxwYXNzfHBhdXNlfHBlcmZvcm18cGVyZm9ybVdpdGhBcmdMaXN0fHByaW50fHByaW50bG58cHJvdG98cmFpc2V8cmFpc2VSZXN1bWFibGV8cmVtb3ZlU2xvdHxyZXNlbmR8cmVzdW1lfHNjaGVkdWxlclNsZWVwU2Vjb25kc3xzZWxmfHNlbmRlcnxzZXRTY2hlZHVsZXJTbGVlcFNlY29uZHN8c2V0U2xvdHxzaGFsbG93Q29weXxzbG90TmFtZXN8c3VwZXJ8c3lzdGVtfHRoZW58dGhpc0Jsb2NrfHRoaXNDb250ZXh0fGNhbGx8dHJ5fHR5cGV8dW5pcXVlSWR8dXBkYXRlU2xvdHx3YWl0fHdoaWxlfHdyaXRlfHlpZWxkKVxcYi8sXG4gICAgYnVpbHRpbjogL1xcYig/OkFycmF5fEF1ZGlvRGV2aWNlfEF1ZGlvTWl4ZXJ8QmxvY2t8Qm94fEJ1ZmZlcnxDRnVuY3Rpb258Q0dJfENvbG9yfEN1cnNlc3xEQk18RE5TUmVzb2x2ZXJ8RE9Db25uZWN0aW9ufERPUHJveHl8RE9TZXJ2ZXJ8RGF0ZXxEaXJlY3Rvcnl8RHVyYXRpb258RHluTGlifEVycm9yfEV4Y2VwdGlvbnxGRlR8RmlsZXxGbm1hdGNofEZvbnR8RnV0dXJlfEdMfEdMRXxHTFNjaXNzb3J8R0xVfEdMVUN5bGluZGVyfEdMVVF1YWRyaWN8R0xVU3BoZXJlfEdMVVR8SG9zdHxJbWFnZXxJbXBvcnRlcnxMaW5rTGlzdHxMaXN0fExvYmJ5fExvY2Fsc3xNRDV8TVAzRGVjb2RlcnxNUDNFbmNvZGVyfE1hcHxNZXNzYWdlfE1vdmllfE5vdGlmaWNhdGlvbnxOdW1iZXJ8T2JqZWN0fE9wZW5HTHxQb2ludHxQcm90b3N8UmVnZXh8U0dNTHxTR01MRWxlbWVudHxTR01MUGFyc2VyfFNRTGl0ZXxTZXJ2ZXJ8U2VxdWVuY2V8U2hvd01lc3NhZ2V8U2xlZXB5Q2F0fFNsZWVweUNhdEN1cnNvcnxTb2NrZXR8U29ja2V0TWFuYWdlcnxTb3VuZHxTb3VwfFN0b3JlfFN0cmluZ3xUcmVlfFVEUFNlbmRlcnxVUERSZWNlaXZlcnxVUkx8VXNlcnxXYXJuaW5nfFdlYWtMaW5rfFJhbmRvbXxCaWdOdW18U2VxdWVuY2UpXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZXxuaWwpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplLT9cXGQrKT8vaSxcbiAgICBvcGVyYXRvcjogL1s9ISovJSstXiZ8XT18Pj4/PT98PDw/PT98Oj86Pz18XFwrXFwrP3wtLT98XFwqXFwqP3xcXC9cXC8/fCV8XFx8XFx8P3wmJj98KFxcYig/OnJldHVybnxhbmR8b3J8bm90KVxcYil8QEA/fFxcP1xcPz98XFwuXFwuLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fVtcXF07KCksLjpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9