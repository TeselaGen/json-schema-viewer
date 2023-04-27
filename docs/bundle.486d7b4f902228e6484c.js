(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_nsis"],{

/***/ "./node_modules/refractor/lang/nsis.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/nsis.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = nsis
nsis.displayName = 'nsis'
nsis.aliases = []
function nsis(Prism) {
  /**
   * Original by Jan T. Sott (http://github.com/idleberg)
   *
   * Includes all commands and plug-ins shipped with NSIS 3.02
   */
  Prism.languages.nsis = {
    comment: {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,
      lookbehind: true
    },
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    keyword: {
      pattern: /(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,
      lookbehind: true
    },
    property: /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK((CR|CU|LM)(32|64)?|DD|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
    constant: /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,
    variable: /\$\w+/i,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
    operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
    punctuation: /[{}[\];(),.:]/,
    important: {
      pattern: /(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
      lookbehind: true
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbnNpcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjQ4NmQ3YjRmOTAyMjI4ZTY0ODRjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbnNpc1xubnNpcy5kaXNwbGF5TmFtZSA9ICduc2lzJ1xubnNpcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG5zaXMoUHJpc20pIHtcbiAgLyoqXG4gICAqIE9yaWdpbmFsIGJ5IEphbiBULiBTb3R0IChodHRwOi8vZ2l0aHViLmNvbS9pZGxlYmVyZylcbiAgICpcbiAgICogSW5jbHVkZXMgYWxsIGNvbW1hbmRzIGFuZCBwbHVnLWlucyBzaGlwcGVkIHdpdGggTlNJUyAzLjAyXG4gICAqL1xuICBQcmlzbS5sYW5ndWFnZXMubnNpcyA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkoXFwvXFwqW1xcc1xcU10qP1xcKlxcL3xbIztdLiopLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/OkFib3J0fEFkZCg/OkJyYW5kaW5nSW1hZ2V8U2l6ZSl8QWR2U3BsYXNofEFsbG93KD86Um9vdERpckluc3RhbGx8U2tpcEZpbGVzKXxBdXRvQ2xvc2VXaW5kb3d8QmFubmVyfEJHKD86Rm9udHxHcmFkaWVudHxJbWFnZSl8QnJhbmRpbmdUZXh0fEJyaW5nVG9Gcm9udHxDYWxsKD86SW5zdERMTCk/fENhcHRpb258Q2hhbmdlVUl8Q2hlY2tCaXRtYXB8Q2xlYXJFcnJvcnN8Q29tcGxldGVkVGV4dHxDb21wb25lbnRUZXh0fENvcHlGaWxlc3xDUkNDaGVja3xDcmVhdGUoPzpEaXJlY3Rvcnl8Rm9udHxTaG9ydEN1dCl8RGVsZXRlKD86SU5JU2VjfElOSVN0cnxSZWdLZXl8UmVnVmFsdWUpP3xEZXRhaWwoPzpQcmludHxzQnV0dG9uVGV4dCl8RGlhbGVyfERpcig/OlRleHR8VmFyfFZlcmlmeSl8RW5hYmxlV2luZG93fEVudW0oPzpSZWdLZXl8UmVnVmFsdWUpfEV4Y2h8RXhlYyg/OlNoZWxsKD86V2FpdCk/fFdhaXQpP3xFeHBhbmRFbnZTdHJpbmdzfEZpbGUoPzpCdWZTaXplfENsb3NlfEVycm9yVGV4dHxPcGVufFJlYWR8UmVhZEJ5dGV8UmVhZFVURjE2TEV8UmVhZFdvcmR8V3JpdGVVVEYxNkxFfFNlZWt8V3JpdGV8V3JpdGVCeXRlfFdyaXRlV29yZCk/fEZpbmQoPzpDbG9zZXxGaXJzdHxOZXh0fFdpbmRvdyl8Rmx1c2hJTkl8R2V0KD86Q3VySW5zdFR5cGV8Q3VycmVudEFkZHJlc3N8RGxnSXRlbXxETExWZXJzaW9uKD86TG9jYWwpP3xFcnJvckxldmVsfEZpbGVUaW1lKD86TG9jYWwpP3xGdWxsUGF0aE5hbWV8RnVuY3Rpb24oPzpBZGRyZXNzfEVuZCk/fEluc3REaXJFcnJvcnxMYWJlbEFkZHJlc3N8VGVtcEZpbGVOYW1lKXxHb3RvfEhpZGVXaW5kb3d8SWNvbnxJZig/OkFib3J0fEVycm9yc3xGaWxlRXhpc3RzfFJlYm9vdEZsYWd8U2lsZW50KXxJbml0UGx1Z2luc0RpcnxJbnN0YWxsKD86QnV0dG9uVGV4dHxDb2xvcnN8RGlyKD86UmVnS2V5KT8pfEluc3RQcm9ncmVzc0ZsYWdzfEluc3QoPzpUeXBlKD86R2V0VGV4dHxTZXRUZXh0KT8pfEludCg/OjY0fFB0cik/Q21wVT98SW50KD86NjQpP0ZtdHxJbnQoPzpQdHIpP09wfElzV2luZG93fExhbmcoPzpETEx8U3RyaW5nKXxMaWNlbnNlKD86QmtDb2xvcnxEYXRhfEZvcmNlU2VsZWN0aW9ufExhbmdTdHJpbmd8VGV4dCl8TG9hZExhbmd1YWdlRmlsZXxMb2NrV2luZG93fExvZyg/OlNldHxUZXh0KXxNYW5pZmVzdCg/OkRQSUF3YXJlfFN1cHBvcnRlZE9TKXxNYXRofE1lc3NhZ2VCb3h8TWlzY0J1dHRvblRleHR8TmFtZXxOb3B8bnMoPzpEaWFsb2dzfEV4ZWMpfE5TSVNkbHxPdXRGaWxlfFBhZ2UoPzpDYWxsYmFja3MpP3xQRSg/OkRsbENoYXJhY3RlcmlzdGljc3xTdWJzeXNWZXIpfFBvcHxQdXNofFF1aXR8UmVhZCg/OkVudlN0cnxJTklTdHJ8UmVnRFdPUkR8UmVnU3RyKXxSZWJvb3R8UmVnRExMfFJlbmFtZXxSZXF1ZXN0RXhlY3V0aW9uTGV2ZWx8UmVzZXJ2ZUZpbGV8UmV0dXJufFJNRGlyfFNlYXJjaFBhdGh8U2VjdGlvbig/OkVuZHxHZXRGbGFnc3xHZXRJbnN0VHlwZXN8R2V0U2l6ZXxHZXRUZXh0fEdyb3VwfElufFNldEZsYWdzfFNldEluc3RUeXBlc3xTZXRTaXplfFNldFRleHQpP3xTZW5kTWVzc2FnZXxTZXQoPzpBdXRvQ2xvc2V8QnJhbmRpbmdJbWFnZXxDb21wcmVzc3xDb21wcmVzc29yKD86RGljdFNpemUpP3xDdGxDb2xvcnN8Q3VySW5zdFR5cGV8RGF0YWJsb2NrT3B0aW1pemV8RGF0ZVNhdmV8RGV0YWlscyg/OlByaW50fFZpZXcpfEVycm9yTGV2ZWx8RXJyb3JzfEZpbGVBdHRyaWJ1dGVzfEZvbnR8T3V0UGF0aHxPdmVyd3JpdGV8UGx1Z2luVW5sb2FkfFJlYm9vdEZsYWd8UmVnVmlld3xTaGVsbFZhckNvbnRleHR8U2lsZW50KXxTaG93KD86SW5zdERldGFpbHN8VW5pbnN0RGV0YWlsc3xXaW5kb3cpfFNpbGVudCg/Okluc3RhbGx8VW5JbnN0YWxsKXxTbGVlcHxTcGFjZVRleHRzfFNwbGFzaHxTdGFydE1lbnV8U3RyKD86Q21wUz98Q3B5fExlbil8U3ViQ2FwdGlvbnxTeXN0ZW18VW5pY29kZXxVbmluc3RhbGwoPzpCdXR0b25UZXh0fENhcHRpb258SWNvbnxTdWJDYXB0aW9ufFRleHQpfFVuaW5zdFBhZ2V8VW5SZWdETEx8VXNlckluZm98VmFyfFZJKD86QWRkVmVyc2lvbktleXxGaWxlVmVyc2lvbnxQcm9kdWN0VmVyc2lvbil8VlBhdGNofFdpbmRvd0ljb258V3JpdGUoPzpJTklTdHJ8UmVnKD86QmlufERXT1JEfEV4cGFuZFN0cnxNdWx0aVN0cnxOb25lfFN0cil8VW5pbnN0YWxsZXIpfFhQU3R5bGUpXFxiL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBwcm9wZXJ0eTogL1xcYig/OmFkbWlufGFsbHxhdXRvfGJvdGh8Y29sb3JlZHxmYWxzZXxmb3JjZXxoaWRlfGhpZ2hlc3R8bGFzdHVzZWR8bGVhdmV8bGlzdG9ubHl8bm9uZXxub3JtYWx8bm90c2V0fG9mZnxvbnxvcGVufHByaW50fHNob3d8c2lsZW50fHNpbGVudGxvZ3xzbW9vdGh8dGV4dG9ubHl8dHJ1ZXx1c2VyfEFSQ0hJVkV8RklMRV8oQVRUUklCVVRFX0FSQ0hJVkV8QVRUUklCVVRFX05PUk1BTHxBVFRSSUJVVEVfT0ZGTElORXxBVFRSSUJVVEVfUkVBRE9OTFl8QVRUUklCVVRFX1NZU1RFTXxBVFRSSUJVVEVfVEVNUE9SQVJZKXxISygoQ1J8Q1V8TE0pKDMyfDY0KT98RER8UER8VSl8SEtFWV8oQ0xBU1NFU19ST09UfENVUlJFTlRfQ09ORklHfENVUlJFTlRfVVNFUnxEWU5fREFUQXxMT0NBTF9NQUNISU5FfFBFUkZPUk1BTkNFX0RBVEF8VVNFUlMpfElEKEFCT1JUfENBTkNFTHxJR05PUkV8Tk98T0t8UkVUUll8WUVTKXxNQl8oQUJPUlRSRVRSWUlHTk9SRXxERUZCVVRUT04xfERFRkJVVFRPTjJ8REVGQlVUVE9OM3xERUZCVVRUT040fElDT05FWENMQU1BVElPTnxJQ09OSU5GT1JNQVRJT058SUNPTlFVRVNUSU9OfElDT05TVE9QfE9LfE9LQ0FOQ0VMfFJFVFJZQ0FOQ0VMfFJJR0hUfFJUTFJFQURJTkd8U0VURk9SRUdST1VORHxUT1BNT1NUfFVTRVJJQ09OfFlFU05PKXxOT1JNQUx8T0ZGTElORXxSRUFET05MWXxTSENUWHxTSEVMTF9DT05URVhUfFNZU1RFTXxURU1QT1JBUlkpXFxiLyxcbiAgICBjb25zdGFudDogL1xcJHtbXFx3XFwuOlxcXi1dK318XFwkXFwoW1xcd1xcLjpcXF4tXStcXCkvaSxcbiAgICB2YXJpYWJsZTogL1xcJFxcdysvaSxcbiAgICBudW1iZXI6IC9cXGIweFtcXGRBLUZhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbRWVdLT9cXGQrKT8vLFxuICAgIG9wZXJhdG9yOiAvLS0/fFxcK1xcKz98PD0/fD49P3w9PT89P3wmJj98XFx8XFx8P3xbPypcXC9+XiVdLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fVtcXF07KCksLjpdLyxcbiAgICBpbXBvcnRhbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyopISg/OmFkZGluY2x1ZGVkaXJ8YWRkcGx1Z2luZGlyfGFwcGVuZGZpbGV8Y2R8ZGVmaW5lfGRlbGZpbGV8ZWNob3xlbHNlfGVuZGlmfGVycm9yfGV4ZWN1dGV8ZmluYWxpemV8Z2V0ZGxsdmVyc2lvbnxnZXR0bGJ2ZXJzaW9ufGlmZGVmfGlmbWFjcm9kZWZ8aWZtYWNyb25kZWZ8aWZuZGVmfGlmfGluY2x1ZGV8aW5zZXJ0bWFjcm98bWFjcm9lbmR8bWFjcm98bWFrZW5zaXN8cGFja2hkcnxwcmFnbWF8c2VhcmNocGFyc2V8c2VhcmNocmVwbGFjZXxzeXN0ZW18dGVtcGZpbGV8dW5kZWZ8dmVyYm9zZXx3YXJuaW5nKVxcYi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=