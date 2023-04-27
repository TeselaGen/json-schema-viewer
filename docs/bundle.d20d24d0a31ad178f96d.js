(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_sql"],{

/***/ "./node_modules/refractor/lang/sql.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sql.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = sql
sql.displayName = 'sql'
sql.aliases = []
function sql(Prism) {
  Prism.languages.sql = {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
      lookbehind: true
    },
    variable: [
      {
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: true
      },
      /@[\w.$]+/
    ],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: true,
      lookbehind: true
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    // Should we highlight user defined functions too?
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5kMjBkMjRkMGEzMWFkMTc4Zjk2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNxbFxuc3FsLmRpc3BsYXlOYW1lID0gJ3NxbCdcbnNxbC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNxbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuc3FsID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98KD86LS18XFwvXFwvfCMpLiopLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHZhcmlhYmxlOiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9AKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pK1xcMS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC9AW1xcdy4kXSsvXG4gICAgXSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXkBcXFxcXSkoXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwyKVteXFxcXF18XFwyXFwyKSpcXDIvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgZnVuY3Rpb246IC9cXGIoPzpBVkd8Q09VTlR8RklSU1R8Rk9STUFUfExBU1R8TENBU0V8TEVOfE1BWHxNSUR8TUlOfE1PRHxOT1d8Uk9VTkR8U1VNfFVDQVNFKSg/PVxccypcXCgpL2ksXG4gICAgLy8gU2hvdWxkIHdlIGhpZ2hsaWdodCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zIHRvbz9cbiAgICBrZXl3b3JkOiAvXFxiKD86QUNUSU9OfEFERHxBRlRFUnxBTEdPUklUSE18QUxMfEFMVEVSfEFOQUxZWkV8QU5ZfEFQUExZfEFTfEFTQ3xBVVRIT1JJWkFUSU9OfEFVVE9fSU5DUkVNRU5UfEJBQ0tVUHxCREJ8QkVHSU58QkVSS0VMRVlEQnxCSUdJTlR8QklOQVJZfEJJVHxCTE9CfEJPT0x8Qk9PTEVBTnxCUkVBS3xCUk9XU0V8QlRSRUV8QlVMS3xCWXxDQUxMfENBU0NBREVEP3xDQVNFfENIQUlOfENIQVIoPzpBQ1RFUnxTRVQpP3xDSEVDSyg/OlBPSU5UKT98Q0xPU0V8Q0xVU1RFUkVEfENPQUxFU0NFfENPTExBVEV8Q09MVU1OUz98Q09NTUVOVHxDT01NSVQoPzpURUQpP3xDT01QVVRFfENPTk5FQ1R8Q09OU0lTVEVOVHxDT05TVFJBSU5UfENPTlRBSU5TKD86VEFCTEUpP3xDT05USU5VRXxDT05WRVJUfENSRUFURXxDUk9TU3xDVVJSRU5UKD86X0RBVEV8X1RJTUV8X1RJTUVTVEFNUHxfVVNFUik/fENVUlNPUnxDWUNMRXxEQVRBKD86QkFTRVM/KT98REFURSg/OlRJTUUpP3xEQVl8REJDQ3xERUFMTE9DQVRFfERFQ3xERUNJTUFMfERFQ0xBUkV8REVGQVVMVHxERUZJTkVSfERFTEFZRUR8REVMRVRFfERFTElNSVRFUlM/fERFTll8REVTQ3xERVNDUklCRXxERVRFUk1JTklTVElDfERJU0FCTEV8RElTQ0FSRHxESVNLfERJU1RJTkNUfERJU1RJTkNUUk9XfERJU1RSSUJVVEVEfERPfERPVUJMRXxEUk9QfERVTU1ZfERVTVAoPzpGSUxFKT98RFVQTElDQVRFfEVMU0UoPzpJRik/fEVOQUJMRXxFTkNMT1NFRHxFTkR8RU5HSU5FfEVOVU18RVJSTFZMfEVSUk9SU3xFU0NBUEVEP3xFWENFUFR8RVhFQyg/OlVURSk/fEVYSVNUU3xFWElUfEVYUExBSU58RVhURU5ERUR8RkVUQ0h8RklFTERTfEZJTEV8RklMTEZBQ1RPUnxGSVJTVHxGSVhFRHxGTE9BVHxGT0xMT1dJTkd8Rk9SKD86IEVBQ0ggUk9XKT98Rk9SQ0V8Rk9SRUlHTnxGUkVFVEVYVCg/OlRBQkxFKT98RlJPTXxGVUxMfEZVTkNUSU9OfEdFT01FVFJZKD86Q09MTEVDVElPTik/fEdMT0JBTHxHT1RPfEdSQU5UfEdST1VQfEhBTkRMRVJ8SEFTSHxIQVZJTkd8SE9MRExPQ0t8SE9VUnxJREVOVElUWSg/Ol9JTlNFUlR8Q09MKT98SUZ8SUdOT1JFfElNUE9SVHxJTkRFWHxJTkZJTEV8SU5ORVJ8SU5OT0RCfElOT1VUfElOU0VSVHxJTlR8SU5URUdFUnxJTlRFUlNFQ1R8SU5URVJWQUx8SU5UT3xJTlZPS0VSfElTT0xBVElPTnxJVEVSQVRFfEpPSU58S0VZUz98S0lMTHxMQU5HVUFHRXxMQVNUfExFQVZFfExFRlR8TEVWRUx8TElNSVR8TElORU5PfExJTkVTfExJTkVTVFJJTkd8TE9BRHxMT0NBTHxMT0NLfExPTkcoPzpCTE9CfFRFWFQpfExPT1B8TUFUQ0goPzpFRCk/fE1FRElVTSg/OkJMT0J8SU5UfFRFWFQpfE1FUkdFfE1JRERMRUlOVHxNSU5VVEV8TU9ERXxNT0RJRklFU3xNT0RJRll8TU9OVEh8TVVMVEkoPzpMSU5FU1RSSU5HfFBPSU5UfFBPTFlHT04pfE5BVElPTkFMfE5BVFVSQUx8TkNIQVJ8TkVYVHxOT3xOT05DTFVTVEVSRUR8TlVMTElGfE5VTUVSSUN8T0ZGP3xPRkZTRVRTP3xPTnxPUEVOKD86REFUQVNPVVJDRXxRVUVSWXxST1dTRVQpP3xPUFRJTUlaRXxPUFRJT04oPzpBTExZKT98T1JERVJ8T1VUKD86RVJ8RklMRSk/fE9WRVJ8UEFSVElBTHxQQVJUSVRJT058UEVSQ0VOVHxQSVZPVHxQTEFOfFBPSU5UfFBPTFlHT058UFJFQ0VESU5HfFBSRUNJU0lPTnxQUkVQQVJFfFBSRVZ8UFJJTUFSWXxQUklOVHxQUklWSUxFR0VTfFBST0MoPzpFRFVSRSk/fFBVQkxJQ3xQVVJHRXxRVUlDS3xSQUlTRVJST1J8UkVBRFM/fFJFQUx8UkVDT05GSUdVUkV8UkVGRVJFTkNFU3xSRUxFQVNFfFJFTkFNRXxSRVBFQVQoPzpBQkxFKT98UkVQTEFDRXxSRVBMSUNBVElPTnxSRVFVSVJFfFJFU0lHTkFMfFJFU1RPUkV8UkVTVFJJQ1R8UkVUVVJOUz98UkVWT0tFfFJJR0hUfFJPTExCQUNLfFJPVVRJTkV8Uk9XKD86Q09VTlR8R1VJRENPTHxTKT98UlRSRUV8UlVMRXxTQVZFKD86UE9JTlQpP3xTQ0hFTUF8U0VDT05EfFNFTEVDVHxTRVJJQUwoPzpJWkFCTEUpP3xTRVNTSU9OKD86X1VTRVIpP3xTRVQoPzpVU0VSKT98U0hBUkV8U0hPV3xTSFVURE9XTnxTSU1QTEV8U01BTExJTlR8U05BUFNIT1R8U09NRXxTT05BTUV8U1FMfFNUQVJUKD86SU5HKT98U1RBVElTVElDU3xTVEFUVVN8U1RSSVBFRHxTWVNURU1fVVNFUnxUQUJMRVM/fFRBQkxFU1BBQ0V8VEVNUCg/Ok9SQVJZfFRBQkxFKT98VEVSTUlOQVRFRHxURVhUKD86U0laRSk/fFRIRU58VElNRSg/OlNUQU1QKT98VElOWSg/OkJMT0J8SU5UfFRFWFQpfFRPUD98VFJBTig/OlNBQ1RJT05TPyk/fFRSSUdHRVJ8VFJVTkNBVEV8VFNFUVVBTHxUWVBFUz98VU5CT1VOREVEfFVOQ09NTUlUVEVEfFVOREVGSU5FRHxVTklPTnxVTklRVUV8VU5MT0NLfFVOUElWT1R8VU5TSUdORUR8VVBEQVRFKD86VEVYVCk/fFVTQUdFfFVTRXxVU0VSfFVTSU5HfFZBTFVFUz98VkFSKD86QklOQVJZfENIQVJ8Q0hBUkFDVEVSfFlJTkcpfFZJRVd8V0FJVEZPUnxXQVJOSU5HU3xXSEVOfFdIRVJFfFdISUxFfFdJVEgoPzogUk9MTFVQfElOKT98V09SS3xXUklURSg/OlRFWFQpP3xZRUFSKVxcYi9pLFxuICAgIGJvb2xlYW46IC9cXGIoPzpUUlVFfEZBTFNFfE5VTEwpXFxiL2ksXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXStcXGJ8XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCtcXGIvaSxcbiAgICBvcGVyYXRvcjogL1stKypcXC89JV5+XXwmJj98XFx8XFx8P3whPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT98XFxiKD86QU5EfEJFVFdFRU58SU58TElLRXxOT1R8T1J8SVN8RElWfFJFR0VYUHxSTElLRXxTT1VORFMgTElLRXxYT1IpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bO1tcXF0oKWAsLl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=