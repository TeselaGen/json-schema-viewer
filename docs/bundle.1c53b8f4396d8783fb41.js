(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_arduino"],{

/***/ "./node_modules/refractor/lang/arduino.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/arduino.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorCpp = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js")
module.exports = arduino
arduino.displayName = 'arduino'
arduino.aliases = []
function arduino(Prism) {
  Prism.register(refractorCpp)
  Prism.languages.arduino = Prism.languages.extend('cpp', {
    keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
    builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/,
    constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = c
c.displayName = 'c'
c.aliases = []
function c(Prism) {
  Prism.languages.c = Prism.languages.extend('clike', {
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
  })
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight the path of the include statement as a string
        string: {
          pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
          lookbehind: true
        },
        // highlight macro directives as keywords
        directive: {
          pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    },
    // highlight predefined macros as constants
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
  })
  delete Prism.languages.c['boolean']
}


/***/ }),

/***/ "./node_modules/refractor/lang/cpp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cpp.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = cpp
cpp.displayName = 'cpp'
cpp.aliases = []
function cpp(Prism) {
  Prism.register(refractorC)
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': {
      pattern: /(\b(?:class|enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
      greedy: true
    },
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:true|false)\b/
  })
  Prism.languages.insertBefore('cpp', 'string', {
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYXJkdWluby5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYy5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3BwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZO0FBQ1osbUJBQW1CLG1CQUFPLENBQUMsc0RBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNaWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN4Q1k7QUFDWixpQkFBaUIsbUJBQU8sQ0FBQyxrREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS4xYzUzYjhmNDM5NmQ4NzgzZmI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckNwcCA9IHJlcXVpcmUoJy4vY3BwLmpzJylcbm1vZHVsZS5leHBvcnRzID0gYXJkdWlub1xuYXJkdWluby5kaXNwbGF5TmFtZSA9ICdhcmR1aW5vJ1xuYXJkdWluby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGFyZHVpbm8oUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yQ3BwKVxuICBQcmlzbS5sYW5ndWFnZXMuYXJkdWlubyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NwcCcsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86c2V0dXB8aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZGVmYXVsdHxmdW5jdGlvbnxsb29wfGdvdG98c3dpdGNofGNhc2V8bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWV8Ym9vbGVhbnxib29sfHZvaWR8Ynl0ZXx3b3JkfHN0cmluZ3xTdHJpbmd8YXJyYXl8aW50fGxvbmd8aW50ZWdlcnxkb3VibGUpXFxiLyxcbiAgICBidWlsdGluOiAvXFxiKD86S2V5Ym9hcmRDb250cm9sbGVyfE1vdXNlQ29udHJvbGxlcnxTb2Z0d2FyZVNlcmlhbHxFdGhlcm5ldFNlcnZlcnxFdGhlcm5ldENsaWVudHxMaXF1aWRDcnlzdGFsfExpcXVpZENyeXN0YWxfSTJDfFJvYm90Q29udHJvbHxHU01Wb2ljZUNhbGx8RXRoZXJuZXRVRFB8RXNwbG9yYVRGVHxIdHRwQ2xpZW50fFJvYm90TW90b3J8V2lGaUNsaWVudHxHU01TY2FubmVyfEZpbGVTeXN0ZW18U2NoZWR1bGVyfEdTTVNlcnZlcnxZdW5DbGllbnR8WXVuU2VydmVyfElQQWRkcmVzc3xHU01DbGllbnR8R1NNTW9kZW18S2V5Ym9hcmR8RXRoZXJuZXR8Q29uc29sZXxHU01CYW5kfEVzcGxvcmF8U3RlcHBlcnxQcm9jZXNzfFdpRmlVRFB8R1NNX1NNU3xNYWlsYm94fFVTQkhvc3R8RmlybWF0YXxQSW1hZ2V8Q2xpZW50fFNlcnZlcnxHU01QSU58RmlsZUlPfEJyaWRnZXxTZXJpYWx8RUVQUk9NfFN0cmVhbXxNb3VzZXxBdWRpb3xTZXJ2b3xGaWxlfFRhc2t8R1BSU3xXaUZpfFdpcmV8VEZUfEdTTXxTUEl8U0R8cnVuU2hlbGxDb21tYW5kQXN5bmNocm9ub3VzbHl8YW5hbG9nV3JpdGVSZXNvbHV0aW9ufHJldHJpZXZlQ2FsbGluZ051bWJlcnxwcmludEZpcm13YXJlVmVyc2lvbnxhbmFsb2dSZWFkUmVzb2x1dGlvbnxzZW5kRGlnaXRhbFBvcnRQYWlyfG5vTGlzdGVuT25Mb2NhbGhvc3R8cmVhZEpveXN0aWNrQnV0dG9ufHNldEZpcm13YXJlVmVyc2lvbnxyZWFkSm95c3RpY2tTd2l0Y2h8c2Nyb2xsRGlzcGxheVJpZ2h0fGdldFZvaWNlQ2FsbFN0YXR1c3xzY3JvbGxEaXNwbGF5TGVmdHx3cml0ZU1pY3Jvc2Vjb25kc3xkZWxheU1pY3Jvc2Vjb25kc3xiZWdpblRyYW5zbWlzc2lvbnxnZXRTaWduYWxTdHJlbmd0aHxydW5Bc3luY2hyb25vdXNseXxnZXRBc3luY2hyb25vdXNseXxsaXN0ZW5PbkxvY2FsaG9zdHxnZXRDdXJyZW50Q2FycmllcnxyZWFkQWNjZWxlcm9tZXRlcnxtZXNzYWdlQXZhaWxhYmxlfHNlbmREaWdpdGFsUG9ydHN8bGluZUZvbGxvd0NvbmZpZ3xjb3VudHJ5TmFtZVdyaXRlfHJ1blNoZWxsQ29tbWFuZHxyZWFkU3RyaW5nVW50aWx8cmV3aW5kRGlyZWN0b3J5fHJlYWRUZW1wZXJhdHVyZXxzZXRDbG9ja0RpdmlkZXJ8cmVhZExpZ2h0U2Vuc29yfGVuZFRyYW5zbWlzc2lvbnxhbmFsb2dSZWZlcmVuY2V8ZGV0YWNoSW50ZXJydXB0fGNvdW50cnlOYW1lUmVhZHxhdHRhY2hJbnRlcnJ1cHR8ZW5jcnlwdGlvblR5cGV8cmVhZEJ5dGVzVW50aWx8cm9ib3ROYW1lV3JpdGV8cmVhZE1pY3JvcGhvbmV8cm9ib3ROYW1lUmVhZHxjaXR5TmFtZVdyaXRlfHVzZXJOYW1lV3JpdGV8cmVhZEpveXN0aWNrWXxyZWFkSm95c3RpY2tYfG1vdXNlUmVsZWFzZWR8b3Blbk5leHRGaWxlfHNjYW5OZXR3b3Jrc3xub0ludGVycnVwdHN8ZGlnaXRhbFdyaXRlfGJlZ2luU3BlYWtlcnxtb3VzZVByZXNzZWR8aXNBY3Rpb25Eb25lfG1vdXNlRHJhZ2dlZHxkaXNwbGF5TG9nb3N8bm9BdXRvc2Nyb2xsfGFkZFBhcmFtZXRlcnxyZW1vdGVOdW1iZXJ8Z2V0TW9kaWZpZXJzfGtleWJvYXJkUmVhZHx1c2VyTmFtZVJlYWR8d2FpdENvbnRpbnVlfHByb2Nlc3NJbnB1dHxwYXJzZUNvbW1hbmR8cHJpbnRWZXJzaW9ufHJlYWROZXR3b3Jrc3x3cml0ZU1lc3NhZ2V8YmxpbmtWZXJzaW9ufGNpdHlOYW1lUmVhZHxyZWFkTWVzc2FnZXxzZXREYXRhTW9kZXxwYXJzZVBhY2tldHxpc0xpc3RlbmluZ3xzZXRCaXRPcmRlcnxiZWdpblBhY2tldHxpc0RpcmVjdG9yeXxtb3RvcnNXcml0ZXxkcmF3Q29tcGFzc3xkaWdpdGFsUmVhZHxjbGVhclNjcmVlbnxzZXJpYWxFdmVudHxyaWdodFRvTGVmdHxzZXRUZXh0U2l6ZXxsZWZ0VG9SaWdodHxyZXF1ZXN0RnJvbXxrZXlSZWxlYXNlZHxjb21wYXNzUmVhZHxhbmFsb2dXcml0ZXxpbnRlcnJ1cHRzfFdpRmlTZXJ2ZXJ8ZGlzY29ubmVjdHxwbGF5TWVsb2R5fHBhcnNlRmxvYXR8YXV0b3Njcm9sbHxnZXRQSU5Vc2VkfHNldFBJTlVzZWR8c2V0VGltZW91dHxzZW5kQW5hbG9nfHJlYWRTbGlkZXJ8YW5hbG9nUmVhZHxiZWdpbldyaXRlfGNyZWF0ZUNoYXJ8bW90b3JzU3RvcHxrZXlQcmVzc2VkfHRlbXBvV3JpdGV8cmVhZEJ1dHRvbnxzdWJuZXRNYXNrfGRlYnVnUHJpbnR8bWFjQWRkcmVzc3x3cml0ZUdyZWVufHJhbmRvbVNlZWR8YXR0YWNoR1BSU3xyZWFkU3RyaW5nfHNlbmRTdHJpbmd8cmVtb3RlUG9ydHxyZWxlYXNlQWxsfG1vdXNlTW92ZWR8YmFja2dyb3VuZHxnZXRYQ2hhbmdlfGdldFlDaGFuZ2V8YW5zd2VyQ2FsbHxnZXRSZXN1bHR8dm9pY2VDYWxsfGVuZFBhY2tldHxjb25zdHJhaW58Z2V0U29ja2V0fHdyaXRlSlNPTnxnZXRCdXR0b258YXZhaWxhYmxlfGNvbm5lY3RlZHxmaW5kVW50aWx8cmVhZEJ5dGVzfGV4aXRWYWx1ZXxyZWFkR3JlZW58d3JpdGVCbHVlfHN0YXJ0TG9vcHxJUEFkZHJlc3N8aXNQcmVzc2VkfHNlbmRTeXNleHxwYXVzZU1vZGV8Z2F0ZXdheUlQfHNldEN1cnNvcnxnZXRPZW1LZXl8dHVuZVdyaXRlfG5vRGlzcGxheXxsb2FkSW1hZ2V8c3dpdGNoUElOfG9uUmVxdWVzdHxvblJlY2VpdmV8Y2hhbmdlUElOfHBsYXlGaWxlfG5vQnVmZmVyfHBhcnNlSW50fG92ZXJmbG93fGNoZWNrUElOfGtub2JSZWFkfGJlZ2luVEZUfGJpdENsZWFyfHVwZGF0ZUlSfGJpdFdyaXRlfHBvc2l0aW9ufHdyaXRlUkdCfGhpZ2hCeXRlfHdyaXRlUmVkfHNldFNwZWVkfHJlYWRCbHVlfG5vU3Ryb2tlfHJlbW90ZUlQfHRyYW5zZmVyfHNodXRkb3dufGhhbmdDYWxsfGJlZ2luU01TfGVuZFdyaXRlfGF0dGFjaGVkfG1haW50YWlufG5vQ3Vyc29yfGNoZWNrUmVnfGNoZWNrUFVLfHNoaWZ0T3V0fGlzVmFsaWR8c2hpZnRJbnxwdWxzZUlufGNvbm5lY3R8cHJpbnRsbnxsb2NhbElQfHBpbk1vZGV8Z2V0SU1FSXxkaXNwbGF5fG5vQmxpbmt8cHJvY2Vzc3xnZXRCYW5kfHJ1bm5pbmd8YmVnaW5TRHxkcmF3Qk1QfGxvd0J5dGV8c2V0QmFuZHxyZWxlYXNlfGJpdFJlYWR8cHJlcGFyZXxwb2ludFRvfHJlYWRSZWR8c2V0TW9kZXxub0ZpbGx8cmVtb3ZlfGxpc3RlbnxzdHJva2V8ZGV0YWNofGF0dGFjaHxub1RvbmV8ZXhpc3RzfGJ1ZmZlcnxoZWlnaHR8Yml0U2V0fGNpcmNsZXxjb25maWd8Y3Vyc29yfHJhbmRvbXxJUnJlYWR8c2V0RE5TfGVuZFNNU3xnZXRLZXl8bWljcm9zfG1pbGxpc3xiZWdpbnxwcmludHx3cml0ZXxyZWFkeXxmbHVzaHx3aWR0aHxpc1BJTnxibGlua3xjbGVhcnxwcmVzc3xta2RpcnxybWRpcnxjbG9zZXxwb2ludHx5aWVsZHxpbWFnZXxCU1NJRHxjbGlja3xkZWxheXxyZWFkfHRleHR8bW92ZXxwZWVrfGJlZXB8cmVjdHxsaW5lfG9wZW58c2Vla3xmaWxsfHNpemV8dHVybnxzdG9wfGhvbWV8ZmluZHxzdGVwfHRvbmV8c3FydHxSU1NJfFNTSUR8ZW5kfGJpdHx0YW58Y29zfHNpbnxwb3d8bWFwfGFic3xtYXh8bWlufGdldHxydW58cHV0KVxcYi8sXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpESUdJVEFMX01FU1NBR0V8RklSTUFUQV9TVFJJTkd8QU5BTE9HX01FU1NBR0V8UkVQT1JUX0RJR0lUQUx8UkVQT1JUX0FOQUxPR3xJTlBVVF9QVUxMVVB8U0VUX1BJTl9NT0RFfElOVEVSTkFMMlY1NnxTWVNURU1fUkVTRVR8TEVEX0JVSUxUSU58SU5URVJOQUwxVjF8U1lTRVhfU1RBUlR8SU5URVJOQUx8RVhURVJOQUx8REVGQVVMVHxPVVRQVVR8SU5QVVR8SElHSHxMT1cpXFxiL1xuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY1xuYy5kaXNwbGF5TmFtZSA9ICdjJ1xuYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZW51bXxzdHJ1Y3QpXFxzKylcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py8sXG4gICAgbnVtYmVyOiAvKD86XFxiMHgoPzpbXFxkYS1mXStcXC4/W1xcZGEtZl0qfFxcLltcXGRhLWZdKykoPzpwWystXT9cXGQrKT98KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdKi9pXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuICAgIG1hY3JvOiB7XG4gICAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgICAgcGF0dGVybjogLyheXFxzKikjXFxzKlthLXpdKyg/OlteXFxyXFxuXFxcXF18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyppbmNsdWRlXFxzKikoPzo8Lis/PnwoXCJ8JykoPzpcXFxcPy4pKz9cXDIpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhpZ2hsaWdodCBtYWNybyBkaXJlY3RpdmVzIGFzIGtleXdvcmRzXG4gICAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyopXFxiKD86ZGVmaW5lfGRlZmluZWR8ZWxpZnxlbHNlfGVuZGlmfGVycm9yfGlmZGVmfGlmbmRlZnxpZnxpbXBvcnR8aW5jbHVkZXxsaW5lfHByYWdtYXx1bmRlZnx1c2luZylcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xfX0RBVEVfX3xfX1RJTUVfX3xfX1RJTUVTVEFNUF9ffF9fZnVuY19ffEVPRnxOVUxMfFNFRUtfQ1VSfFNFRUtfRU5EfFNFRUtfU0VUfHN0ZGlufHN0ZG91dHxzdGRlcnIpXFxiL1xuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9yQyA9IHJlcXVpcmUoJy4vYy5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IGNwcFxuY3BwLmRpc3BsYXlOYW1lID0gJ2NwcCdcbmNwcC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGNwcChQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JDKVxuICBQcmlzbS5sYW5ndWFnZXMuY3BwID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnYycsIHtcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8ZW51bXxzdHJ1Y3QpXFxzKylcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzphbGlnbmFzfGFsaWdub2Z8YXNtfGF1dG98Ym9vbHxicmVha3xjYXNlfGNhdGNofGNoYXJ8Y2hhcjE2X3R8Y2hhcjMyX3R8Y2xhc3N8Y29tcGx8Y29uc3R8Y29uc3RleHByfGNvbnN0X2Nhc3R8Y29udGludWV8ZGVjbHR5cGV8ZGVmYXVsdHxkZWxldGV8ZG98ZG91YmxlfGR5bmFtaWNfY2FzdHxlbHNlfGVudW18ZXhwbGljaXR8ZXhwb3J0fGV4dGVybnxmbG9hdHxmb3J8ZnJpZW5kfGdvdG98aWZ8aW5saW5lfGludHxpbnQ4X3R8aW50MTZfdHxpbnQzMl90fGludDY0X3R8dWludDhfdHx1aW50MTZfdHx1aW50MzJfdHx1aW50NjRfdHxsb25nfG11dGFibGV8bmFtZXNwYWNlfG5ld3xub2V4Y2VwdHxudWxscHRyfG9wZXJhdG9yfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWdpc3RlcnxyZWludGVycHJldF9jYXN0fHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdGF0aWNfYXNzZXJ0fHN0YXRpY19jYXN0fHN0cnVjdHxzd2l0Y2h8dGVtcGxhdGV8dGhpc3x0aHJlYWRfbG9jYWx8dGhyb3d8dHJ5fHR5cGVkZWZ8dHlwZWlkfHR5cGVuYW1lfHVuaW9ufHVuc2lnbmVkfHVzaW5nfHZpcnR1YWx8dm9pZHx2b2xhdGlsZXx3Y2hhcl90fHdoaWxlKVxcYi8sXG4gICAgbnVtYmVyOiB7XG4gICAgICBwYXR0ZXJuOiAvKD86XFxiMGJbMDEnXSt8XFxiMHgoPzpbXFxkYS1mJ10rXFwuP1tcXGRhLWYnXSp8XFwuW1xcZGEtZiddKykoPzpwWystXT9bXFxkJ10rKT98KD86XFxiW1xcZCddK1xcLj9bXFxkJ10qfFxcQlxcLltcXGQnXSspKD86ZVsrLV0/W1xcZCddKyk/KVtmdWxdKi9pLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09P3xcXGIoPzphbmR8YW5kX2VxfGJpdGFuZHxiaXRvcnxub3R8bm90X2VxfG9yfG9yX2VxfHhvcnx4b3JfZXEpXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdzdHJpbmcnLCB7XG4gICAgJ3Jhdy1zdHJpbmcnOiB7XG4gICAgICBwYXR0ZXJuOiAvUlwiKFteKClcXFxcIF17MCwxNn0pXFwoW1xcc1xcU10qP1xcKVxcMVwiLyxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH1cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=