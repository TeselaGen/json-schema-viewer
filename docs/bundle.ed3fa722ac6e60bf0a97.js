(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_git"],{

/***/ "./node_modules/refractor/lang/git.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/git.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = git
git.displayName = 'git'
git.aliases = []
function git(Prism) {
  Prism.languages.git = {
    /*
     * A simple one line comment like in a git status command
     * For instance:
     * $ git status
     * # On branch infinite-scroll
     * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
     * # and have 1 and 2 different commits each, respectively.
     * nothing to commit (working directory clean)
     */
    comment: /^#.*/m,
    /*
     * Regexp to match the changed lines in a git diff output. Check the example below.
     */
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    /*
     * a string (double and simple quote)
     */
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    /*
     * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
     * For instance:
     * $ git add file.txt
     */
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        /*
         * A git command can contain a parameter starting by a single or a double dash followed by a string
         * For instance:
         * $ git diff --cached
         * $ git log -p
         */
        parameter: /\s--?\w+/m
      }
    },
    /*
     * Coordinates displayed in a git diff command
     * For instance:
     * $ git diff
     * diff --git file.txt file.txt
     * index 6214953..1d54a52 100644
     * --- file.txt
     * +++ file.txt
     * @@ -1 +1,2 @@
     * -Here's my tetx file
     * +Here's my text file
     * +And this is the second line
     */
    coord: /^@@.*@@$/m,
    /*
     * Match a "commit [SHA1]" line in a git log output.
     * For instance:
     * $ git log
     * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
     * Author: lgiraudel
     * Date:   Mon Feb 17 11:18:34 2014 +0100
     *
     *     Add of a new line
     */
    commit_sha1: /^commit \w{40}$/m
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ2l0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixHQUFHO0FBQ2hDO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmVkM2ZhNzIyYWM2ZTYwYmYwYTk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ2l0XG5naXQuZGlzcGxheU5hbWUgPSAnZ2l0J1xuZ2l0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZ2l0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5naXQgPSB7XG4gICAgLypcbiAgICAgKiBBIHNpbXBsZSBvbmUgbGluZSBjb21tZW50IGxpa2UgaW4gYSBnaXQgc3RhdHVzIGNvbW1hbmRcbiAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICogJCBnaXQgc3RhdHVzXG4gICAgICogIyBPbiBicmFuY2ggaW5maW5pdGUtc2Nyb2xsXG4gICAgICogIyBZb3VyIGJyYW5jaCBhbmQgJ29yaWdpbi9zaGFyZWRCcmFuY2hlcy9mcm9udGVuZFRlYW0vaW5maW5pdGUtc2Nyb2xsJyBoYXZlIGRpdmVyZ2VkLFxuICAgICAqICMgYW5kIGhhdmUgMSBhbmQgMiBkaWZmZXJlbnQgY29tbWl0cyBlYWNoLCByZXNwZWN0aXZlbHkuXG4gICAgICogbm90aGluZyB0byBjb21taXQgKHdvcmtpbmcgZGlyZWN0b3J5IGNsZWFuKVxuICAgICAqL1xuICAgIGNvbW1lbnQ6IC9eIy4qL20sXG4gICAgLypcbiAgICAgKiBSZWdleHAgdG8gbWF0Y2ggdGhlIGNoYW5nZWQgbGluZXMgaW4gYSBnaXQgZGlmZiBvdXRwdXQuIENoZWNrIHRoZSBleGFtcGxlIGJlbG93LlxuICAgICAqL1xuICAgIGRlbGV0ZWQ6IC9eWy3igJNdLiovbSxcbiAgICBpbnNlcnRlZDogL15cXCsuKi9tLFxuICAgIC8qXG4gICAgICogYSBzdHJpbmcgKGRvdWJsZSBhbmQgc2ltcGxlIHF1b3RlKVxuICAgICAqL1xuICAgIHN0cmluZzogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvbSxcbiAgICAvKlxuICAgICAqIGEgZ2l0IGNvbW1hbmQuIEl0IHN0YXJ0cyB3aXRoIGEgcmFuZG9tIHByb21wdCBmaW5pc2hpbmcgYnkgYSAkLCB0aGVuIFwiZ2l0XCIgdGhlbiBzb21lIG90aGVyIHBhcmFtZXRlcnNcbiAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICogJCBnaXQgYWRkIGZpbGUudHh0XG4gICAgICovXG4gICAgY29tbWFuZDoge1xuICAgICAgcGF0dGVybjogL14uKlxcJCBnaXQgLiokL20sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgLypcbiAgICAgICAgICogQSBnaXQgY29tbWFuZCBjYW4gY29udGFpbiBhIHBhcmFtZXRlciBzdGFydGluZyBieSBhIHNpbmdsZSBvciBhIGRvdWJsZSBkYXNoIGZvbGxvd2VkIGJ5IGEgc3RyaW5nXG4gICAgICAgICAqIEZvciBpbnN0YW5jZTpcbiAgICAgICAgICogJCBnaXQgZGlmZiAtLWNhY2hlZFxuICAgICAgICAgKiAkIGdpdCBsb2cgLXBcbiAgICAgICAgICovXG4gICAgICAgIHBhcmFtZXRlcjogL1xccy0tP1xcdysvbVxuICAgICAgfVxuICAgIH0sXG4gICAgLypcbiAgICAgKiBDb29yZGluYXRlcyBkaXNwbGF5ZWQgaW4gYSBnaXQgZGlmZiBjb21tYW5kXG4gICAgICogRm9yIGluc3RhbmNlOlxuICAgICAqICQgZ2l0IGRpZmZcbiAgICAgKiBkaWZmIC0tZ2l0IGZpbGUudHh0IGZpbGUudHh0XG4gICAgICogaW5kZXggNjIxNDk1My4uMWQ1NGE1MiAxMDA2NDRcbiAgICAgKiAtLS0gZmlsZS50eHRcbiAgICAgKiArKysgZmlsZS50eHRcbiAgICAgKiBAQCAtMSArMSwyIEBAXG4gICAgICogLUhlcmUncyBteSB0ZXR4IGZpbGVcbiAgICAgKiArSGVyZSdzIG15IHRleHQgZmlsZVxuICAgICAqICtBbmQgdGhpcyBpcyB0aGUgc2Vjb25kIGxpbmVcbiAgICAgKi9cbiAgICBjb29yZDogL15AQC4qQEAkL20sXG4gICAgLypcbiAgICAgKiBNYXRjaCBhIFwiY29tbWl0IFtTSEExXVwiIGxpbmUgaW4gYSBnaXQgbG9nIG91dHB1dC5cbiAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICogJCBnaXQgbG9nXG4gICAgICogY29tbWl0IGExMWExNGVmN2UyNmYyY2E2MmQ0YjM1ZWFjNDU1Y2U2MzZkMGRjMDlcbiAgICAgKiBBdXRob3I6IGxnaXJhdWRlbFxuICAgICAqIERhdGU6ICAgTW9uIEZlYiAxNyAxMToxODozNCAyMDE0ICswMTAwXG4gICAgICpcbiAgICAgKiAgICAgQWRkIG9mIGEgbmV3IGxpbmVcbiAgICAgKi9cbiAgICBjb21taXRfc2hhMTogL15jb21taXQgXFx3ezQwfSQvbVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9