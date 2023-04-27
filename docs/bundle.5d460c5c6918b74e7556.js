(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter/refractor-core-import"],{

/***/ "./node_modules/character-entities-legacy/index.json":
/*!***********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/*!*************************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = parse

var search = /[#.]/g

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var start = 0
  var subvalue
  var previous
  var match

  while (start < value.length) {
    search.lastIndex = start
    match = search.exec(value)
    subvalue = value.slice(start, match ? match.index : value.length)

    if (subvalue) {
      if (!previous) {
        name = subvalue
      } else if (previous === '#') {
        props.id = subvalue
      } else if (props.className) {
        props.className.push(subvalue)
      } else {
        props.className = [subvalue]
      }

      start += subvalue.length
    }

    if (match) {
      previous = match[0]
      start++
    }
  }

  return {type: 'element', tagName: name, properties: props, children: []}
}


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/refractor/core.js":
/*!****************************************!*\
  !*** ./node_modules/refractor/core.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global window, self */

var restore = capture()

// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx =
  typeof window === 'undefined'
    ? typeof self === 'undefined'
      ? {}
      : self
    : window

ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.
var h = __webpack_require__(/*! hastscript */ "./node_modules/refractor/node_modules/hastscript/index.js")
var decode = __webpack_require__(/*! parse-entities */ "./node_modules/refractor/node_modules/parse-entities/index.js")
var Prism = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js")
var markup = __webpack_require__(/*! ./lang/markup */ "./node_modules/refractor/lang/markup.js")
var css = __webpack_require__(/*! ./lang/css */ "./node_modules/refractor/lang/css.js")
var clike = __webpack_require__(/*! ./lang/clike */ "./node_modules/refractor/lang/clike.js")
var js = __webpack_require__(/*! ./lang/javascript */ "./node_modules/refractor/lang/javascript.js")

restore()

var own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = Prism

// Construct.
var refract = new Refractor()

// Expose.
module.exports = refract

// Create.
refract.highlight = highlight
refract.register = register
refract.alias = alias
refract.registered = registered
refract.listLanguages = listLanguages

// Register bundled grammars.
register(markup)
register(css)
register(clike)
register(js)

refract.util.encode = encode
refract.Token.stringify = stringify

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`')
  }

  // Do not duplicate registrations.
  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract)
  }
}

function alias(name, alias) {
  var languages = refract.languages
  var map = name
  var key
  var list
  var length
  var index

  if (alias) {
    map = {}
    map[name] = alias
  }

  for (key in map) {
    list = map[key]
    list = typeof list === 'string' ? [list] : list
    length = list.length
    index = -1

    while (++index < length) {
      languages[list[index]] = languages[key]
    }
  }
}

function highlight(value, name) {
  var sup = Prism.highlight
  var grammar

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`')
  }

  // `name` is a grammar object.
  if (refract.util.type(name) === 'Object') {
    grammar = name
    name = null
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return sup.call(this, value, grammar, name)
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`')
  }

  return own.call(refract.languages, language)
}

function listLanguages() {
  var languages = refract.languages
  var list = []
  var language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

function stringify(value, language, parent) {
  var env

  if (typeof value === 'string') {
    return {type: 'text', value: value}
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language)
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  }

  if (value.alias) {
    env.classes = env.classes.concat(value.alias)
  }

  refract.hooks.run('wrap', env)

  return h(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

function stringifyAll(values, language) {
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value)
    }
  }

  index = -1
  length = result.length

  while (++index < length) {
    value = result[index]
    result[index] = refract.Token.stringify(value, language, result)
  }

  return result
}

function encode(tokens) {
  return tokens
}

function attributes(attrs) {
  var key

  for (key in attrs) {
    attrs[key] = decode(attrs[key])
  }

  return attrs
}

function capture() {
  var defined = 'Prism' in __webpack_require__.g
  /* istanbul ignore next */
  var current = defined ? __webpack_require__.g.Prism : undefined

  return restore

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      __webpack_require__.g.Prism = current
    } else {
      delete __webpack_require__.g.Prism
    }

    defined = undefined
    current = undefined
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /@[\w-]+/ // See rest below
        }
      },
      url: {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/javascript.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = javascript
javascript.displayName = 'javascript'
javascript.aliases = ['js']
function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  })
  Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['xml', 'html', 'mathml', 'svg']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'] // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            tagName
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
}


/***/ }),

/***/ "./node_modules/refractor/node_modules/hastscript/factory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/refractor/node_modules/hastscript/factory.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var normalize = __webpack_require__(/*! property-information/normalize */ "./node_modules/property-information/normalize.js")
var parseSelector = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/index.js")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js").parse
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js").parse

module.exports = factory

var own = {}.hasOwnProperty

function factory(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null

  return h

  // Hyperscript compatible DSL for creating virtual hast trees.
  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName)
    var children = Array.prototype.slice.call(arguments, 2)
    var name = node.tagName.toLowerCase()
    var property

    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name

    if (properties && isChildren(properties, node)) {
      children.unshift(properties)
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    // Ignore nully and NaN values.
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    // Handle list values.
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    // Accept `object` on style.
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    // Class-names (which can be added both on the `selector` and here).
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

// Parse a (list of) primitives.
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

// Parse a single primitives.
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}

function createAdjustMap(values) {
  var length = values.length
  var index = -1
  var result = {}
  var value

  while (++index < length) {
    value = values[index]
    result[value.toLowerCase()] = value
  }

  return result
}


/***/ }),

/***/ "./node_modules/refractor/node_modules/hastscript/html.js":
/*!****************************************************************!*\
  !*** ./node_modules/refractor/node_modules/hastscript/html.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var schema = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var factory = __webpack_require__(/*! ./factory */ "./node_modules/refractor/node_modules/hastscript/factory.js")

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),

/***/ "./node_modules/refractor/node_modules/hastscript/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/refractor/node_modules/hastscript/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./html */ "./node_modules/refractor/node_modules/hastscript/html.js")


/***/ }),

/***/ "./node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/refractor/node_modules/parse-entities/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/refractor/node_modules/parse-entities/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js":
/*!******************************************************************************!*\
  !*** ./node_modules/refractor/node_modules/prismjs/components/prism-core.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL2lzLWFscGhhbnVtZXJpY2FsL2luZGV4LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9pcy1kZWNpbWFsL2luZGV4LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9pcy1oZXhhZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vZmluZC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2FyaWEuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9odG1sLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2RlZmluZWQtaW5mby5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvaW5mby5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bGluay5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3htbC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3htbG5zLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9jb3JlLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jbGlrZS5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NzLmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vanNvbi1zY2hlbWEtdmlld2VyLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9mYWN0b3J5LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3Ivbm9kZV9tb2R1bGVzL2hhc3RzY3JpcHQvaHRtbC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL2pzb24tc2NoZW1hLXZpZXdlci8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3Ivbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL25vZGVfbW9kdWxlcy9wYXJzZS1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29yZS5qcyIsIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvc3BhY2Utc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVk7O0FBRVosYUFBYTtBQUNiLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7QUMxQ1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYlk7O0FBRVosbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQyxzREFBWTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDVlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIscUJBQU07QUFDakM7QUFDQSwwQkFBMEIscUJBQU07O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUJBQU07QUFDWixLQUFLO0FBQ0wsYUFBYSxxQkFBTTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN09ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHdCQUF3QjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDamNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixZQUFZOztBQUVaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLG1CQUFtQjs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsbUVBQW1FO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDJCQUEyQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQXlFO0FBQ3pFLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRCxJQUFJLEtBQTZCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFCQUFNO0FBQ2pCLENBQUMscUJBQU07QUFDUDs7Ozs7Ozs7Ozs7O0FDdGlCWTs7QUFFWixhQUFhO0FBQ2IsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS41ZDQ2MGM1YzY5MThiNzRlNzU1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBjb21tYSA9ICcsJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZW1wdHkgPSAnJ1xuXG4vLyBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSlcbiAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSlcbiAgdmFyIGxhc3RJbmRleCA9IDBcbiAgdmFyIGVuZCA9IGZhbHNlXG4gIHZhciB2YWxcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFsID0gaW5wdXQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodmFsIHx8ICFlbmQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbClcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEsIGxhc3RJbmRleClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuLy8gQ29tcGlsZSBhbiBhcnJheSB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuLy8gYG9wdGlvbnMucGFkTGVmdGAgKGRlZmF1bHQ6IGB0cnVlYCkgcGFkcyBhIHNwYWNlIGxlZnQgb2YgZWFjaCB0b2tlbiwgYW5kXG4vLyBgb3B0aW9ucy5wYWRSaWdodGAgKGRlZmF1bHQ6IGBmYWxzZWApIHBhZHMgYSBzcGFjZSB0byB0aGUgcmlnaHQgb2YgZWFjaCB0b2tlbi5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbGVmdCA9IHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gZW1wdHkgOiBzcGFjZVxuICB2YXIgcmlnaHQgPSBzZXR0aW5ncy5wYWRSaWdodCA/IHNwYWNlIDogZW1wdHlcblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgaWYgKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IGVtcHR5KSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChlbXB0eSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihyaWdodCArIGNvbW1hICsgbGVmdCkudHJpbSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgc2VhcmNoID0gL1sjLl0vZ1xuXG4vLyBDcmVhdGUgYSBoYXN0IGVsZW1lbnQgZnJvbSBhIHNpbXBsZSBDU1Mgc2VsZWN0b3IuXG5mdW5jdGlvbiBwYXJzZShzZWxlY3RvciwgZGVmYXVsdFRhZ05hbWUpIHtcbiAgdmFyIHZhbHVlID0gc2VsZWN0b3IgfHwgJydcbiAgdmFyIG5hbWUgPSBkZWZhdWx0VGFnTmFtZSB8fCAnZGl2J1xuICB2YXIgcHJvcHMgPSB7fVxuICB2YXIgc3RhcnQgPSAwXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcHJldmlvdXNcbiAgdmFyIG1hdGNoXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2guZXhlYyh2YWx1ZSlcbiAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoKVxuXG4gICAgaWYgKHN1YnZhbHVlKSB7XG4gICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIG5hbWUgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyA9PT0gJyMnKSB7XG4gICAgICAgIHByb3BzLmlkID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZS5wdXNoKHN1YnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gW3N1YnZhbHVlXVxuICAgICAgfVxuXG4gICAgICBzdGFydCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICB9XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHByZXZpb3VzID0gbWF0Y2hbMF1cbiAgICAgIHN0YXJ0KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3R5cGU6ICdlbGVtZW50JywgdGFnTmFtZTogbmFtZSwgcHJvcGVydGllczogcHJvcHMsIGNoaWxkcmVuOiBbXX1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhYmV0aWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFiZXRpY2FsLlxuZnVuY3Rpb24gYWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSAvKiBhLXogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSAvKiBBLVogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYW51bWVyaWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFudW1lcmljYWwuXG5mdW5jdGlvbiBhbHBoYW51bWVyaWNhbChjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHx8IGRlY2ltYWwoY2hhcmFjdGVyKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgZGVjaW1hbC5cbmZ1bmN0aW9uIGRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgLyogMC05ICovXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZXhhZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgaGV4YWRlY2ltYWwuXG5mdW5jdGlvbiBoZXhhZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTAyKSAvKiB6ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDcwKSAvKiBaICovIHx8XG4gICAgKGNvZGUgPj0gNDggLyogQSAqLyAmJiBjb2RlIDw9IDU3KSAvKiBaICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIERlZmluZWRJbmZvID0gcmVxdWlyZSgnLi9saWIvdXRpbC9kZWZpbmVkLWluZm8nKVxudmFyIEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2luZm8nKVxuXG52YXIgZGF0YSA9ICdkYXRhJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRcblxudmFyIHZhbGlkID0gL15kYXRhWy1cXHcuOl0rJC9pXG52YXIgZGFzaCA9IC8tW2Etel0vZ1xudmFyIGNhcCA9IC9bQS1aXS9nXG5cbmZ1bmN0aW9uIGZpbmQoc2NoZW1hLCB2YWx1ZSkge1xuICB2YXIgbm9ybWFsID0gbm9ybWFsaXplKHZhbHVlKVxuICB2YXIgcHJvcCA9IHZhbHVlXG4gIHZhciBUeXBlID0gSW5mb1xuXG4gIGlmIChub3JtYWwgaW4gc2NoZW1hLm5vcm1hbCkge1xuICAgIHJldHVybiBzY2hlbWEucHJvcGVydHlbc2NoZW1hLm5vcm1hbFtub3JtYWxdXVxuICB9XG5cbiAgaWYgKG5vcm1hbC5sZW5ndGggPiA0ICYmIG5vcm1hbC5zbGljZSgwLCA0KSA9PT0gZGF0YSAmJiB2YWxpZC50ZXN0KHZhbHVlKSkge1xuICAgIC8vIEF0dHJpYnV0ZSBvciBwcm9wZXJ0eS5cbiAgICBpZiAodmFsdWUuY2hhckF0KDQpID09PSAnLScpIHtcbiAgICAgIHByb3AgPSBkYXRhc2V0VG9Qcm9wZXJ0eSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkYXRhc2V0VG9BdHRyaWJ1dGUodmFsdWUpXG4gICAgfVxuXG4gICAgVHlwZSA9IERlZmluZWRJbmZvXG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGUocHJvcCwgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRUb1Byb3BlcnR5KGF0dHJpYnV0ZSkge1xuICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGUuc2xpY2UoNSkucmVwbGFjZShkYXNoLCBjYW1lbGNhc2UpXG4gIHJldHVybiBkYXRhICsgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9BdHRyaWJ1dGUocHJvcGVydHkpIHtcbiAgdmFyIHZhbHVlID0gcHJvcGVydHkuc2xpY2UoNClcblxuICBpZiAoZGFzaC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcm9wZXJ0eVxuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGNhcCwga2ViYWIpXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gJy0nKSB7XG4gICAgdmFsdWUgPSAnLScgKyB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIGRhdGEgKyB2YWx1ZVxufVxuXG5mdW5jdGlvbiBrZWJhYigkMCkge1xuICByZXR1cm4gJy0nICsgJDAudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBjYW1lbGNhc2UoJDApIHtcbiAgcmV0dXJuICQwLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1lcmdlID0gcmVxdWlyZSgnLi9saWIvdXRpbC9tZXJnZScpXG52YXIgeGxpbmsgPSByZXF1aXJlKCcuL2xpYi94bGluaycpXG52YXIgeG1sID0gcmVxdWlyZSgnLi9saWIveG1sJylcbnZhciB4bWxucyA9IHJlcXVpcmUoJy4vbGliL3htbG5zJylcbnZhciBhcmlhID0gcmVxdWlyZSgnLi9saWIvYXJpYScpXG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vbGliL2h0bWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgaHRtbF0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxudmFyIGJvb2xlYW5pc2ggPSB0eXBlcy5ib29sZWFuaXNoXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHRyYW5zZm9ybTogYXJpYVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50OiBudWxsLFxuICAgIGFyaWFBdG9taWM6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUF1dG9Db21wbGV0ZTogbnVsbCxcbiAgICBhcmlhQnVzeTogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ2hlY2tlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ29sQ291bnQ6IG51bWJlcixcbiAgICBhcmlhQ29sSW5kZXg6IG51bWJlcixcbiAgICBhcmlhQ29sU3BhbjogbnVtYmVyLFxuICAgIGFyaWFDb250cm9sczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUN1cnJlbnQ6IG51bGwsXG4gICAgYXJpYURlc2NyaWJlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRGV0YWlsczogbnVsbCxcbiAgICBhcmlhRGlzYWJsZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYURyb3BFZmZlY3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFFcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgYXJpYUV4cGFuZGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFGbG93VG86IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFHcmFiYmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFIYXNQb3B1cDogbnVsbCxcbiAgICBhcmlhSGlkZGVuOiBib29sZWFuaXNoLFxuICAgIGFyaWFJbnZhbGlkOiBudWxsLFxuICAgIGFyaWFLZXlTaG9ydGN1dHM6IG51bGwsXG4gICAgYXJpYUxhYmVsOiBudWxsLFxuICAgIGFyaWFMYWJlbGxlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhTGV2ZWw6IG51bWJlcixcbiAgICBhcmlhTGl2ZTogbnVsbCxcbiAgICBhcmlhTW9kYWw6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpTGluZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBib29sZWFuaXNoLFxuICAgIGFyaWFPcmllbnRhdGlvbjogbnVsbCxcbiAgICBhcmlhT3duczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYVBsYWNlaG9sZGVyOiBudWxsLFxuICAgIGFyaWFQb3NJblNldDogbnVtYmVyLFxuICAgIGFyaWFQcmVzc2VkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSZWFkT25seTogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVsZXZhbnQ6IG51bGwsXG4gICAgYXJpYVJlcXVpcmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSb2xlRGVzY3JpcHRpb246IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFSb3dDb3VudDogbnVtYmVyLFxuICAgIGFyaWFSb3dJbmRleDogbnVtYmVyLFxuICAgIGFyaWFSb3dTcGFuOiBudW1iZXIsXG4gICAgYXJpYVNlbGVjdGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFTZXRTaXplOiBudW1iZXIsXG4gICAgYXJpYVNvcnQ6IG51bGwsXG4gICAgYXJpYVZhbHVlTWF4OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTWluOiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTm93OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlVGV4dDogbnVsbCxcbiAgICByb2xlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGFyaWFUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gcHJvcCA9PT0gJ3JvbGUnID8gcHJvcCA6ICdhcmlhLScgKyBwcm9wLnNsaWNlKDQpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG92ZXJsb2FkZWRCb29sZWFuID0gdHlwZXMub3ZlcmxvYWRlZEJvb2xlYW5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdodG1sJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGFjY2VwdGNoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gICAgY2xhc3NuYW1lOiAnY2xhc3MnLFxuICAgIGh0bWxmb3I6ICdmb3InLFxuICAgIGh0dHBlcXVpdjogJ2h0dHAtZXF1aXYnXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBtdXN0VXNlUHJvcGVydHk6IFsnY2hlY2tlZCcsICdtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCddLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLy8gU3RhbmRhcmQgUHJvcGVydGllcy5cbiAgICBhYmJyOiBudWxsLFxuICAgIGFjY2VwdDogY29tbWFTZXBhcmF0ZWQsXG4gICAgYWNjZXB0Q2hhcnNldDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZXNzS2V5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhY3Rpb246IG51bGwsXG4gICAgYWxsb3c6IG51bGwsXG4gICAgYWxsb3dGdWxsU2NyZWVuOiBib29sZWFuLFxuICAgIGFsbG93UGF5bWVudFJlcXVlc3Q6IGJvb2xlYW4sXG4gICAgYWxsb3dVc2VyTWVkaWE6IGJvb2xlYW4sXG4gICAgYWx0OiBudWxsLFxuICAgIGFzOiBudWxsLFxuICAgIGFzeW5jOiBib29sZWFuLFxuICAgIGF1dG9DYXBpdGFsaXplOiBudWxsLFxuICAgIGF1dG9Db21wbGV0ZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXV0b0ZvY3VzOiBib29sZWFuLFxuICAgIGF1dG9QbGF5OiBib29sZWFuLFxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXG4gICAgY2hhclNldDogbnVsbCxcbiAgICBjaGVja2VkOiBib29sZWFuLFxuICAgIGNpdGU6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb2xzOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBjb250cm9sczogYm9vbGVhbixcbiAgICBjb250cm9sc0xpc3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNvb3JkczogbnVtYmVyIHwgY29tbWFTZXBhcmF0ZWQsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBkYXRlVGltZTogbnVsbCxcbiAgICBkZWNvZGluZzogbnVsbCxcbiAgICBkZWZhdWx0OiBib29sZWFuLFxuICAgIGRlZmVyOiBib29sZWFuLFxuICAgIGRpcjogbnVsbCxcbiAgICBkaXJOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBib29sZWFuLFxuICAgIGRvd25sb2FkOiBvdmVybG9hZGVkQm9vbGVhbixcbiAgICBkcmFnZ2FibGU6IGJvb2xlYW5pc2gsXG4gICAgZW5jVHlwZTogbnVsbCxcbiAgICBlbnRlcktleUhpbnQ6IG51bGwsXG4gICAgZm9ybTogbnVsbCxcbiAgICBmb3JtQWN0aW9uOiBudWxsLFxuICAgIGZvcm1FbmNUeXBlOiBudWxsLFxuICAgIGZvcm1NZXRob2Q6IG51bGwsXG4gICAgZm9ybU5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgZm9ybVRhcmdldDogbnVsbCxcbiAgICBoZWFkZXJzOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBoaWRkZW46IGJvb2xlYW4sXG4gICAgaGlnaDogbnVtYmVyLFxuICAgIGhyZWY6IG51bGwsXG4gICAgaHJlZkxhbmc6IG51bGwsXG4gICAgaHRtbEZvcjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaHR0cEVxdWl2OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpZDogbnVsbCxcbiAgICBpbWFnZVNpemVzOiBudWxsLFxuICAgIGltYWdlU3JjU2V0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBpbnB1dE1vZGU6IG51bGwsXG4gICAgaW50ZWdyaXR5OiBudWxsLFxuICAgIGlzOiBudWxsLFxuICAgIGlzTWFwOiBib29sZWFuLFxuICAgIGl0ZW1JZDogbnVsbCxcbiAgICBpdGVtUHJvcDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVJlZjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVNjb3BlOiBib29sZWFuLFxuICAgIGl0ZW1UeXBlOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBraW5kOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIGxhbmc6IG51bGwsXG4gICAgbGFuZ3VhZ2U6IG51bGwsXG4gICAgbGlzdDogbnVsbCxcbiAgICBsb2FkaW5nOiBudWxsLFxuICAgIGxvb3A6IGJvb2xlYW4sXG4gICAgbG93OiBudW1iZXIsXG4gICAgbWFuaWZlc3Q6IG51bGwsXG4gICAgbWF4OiBudWxsLFxuICAgIG1heExlbmd0aDogbnVtYmVyLFxuICAgIG1lZGlhOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbWluTGVuZ3RoOiBudW1iZXIsXG4gICAgbXVsdGlwbGU6IGJvb2xlYW4sXG4gICAgbXV0ZWQ6IGJvb2xlYW4sXG4gICAgbmFtZTogbnVsbCxcbiAgICBub25jZTogbnVsbCxcbiAgICBub01vZHVsZTogYm9vbGVhbixcbiAgICBub1ZhbGlkYXRlOiBib29sZWFuLFxuICAgIG9uQWJvcnQ6IG51bGwsXG4gICAgb25BZnRlclByaW50OiBudWxsLFxuICAgIG9uQXV4Q2xpY2s6IG51bGwsXG4gICAgb25CZWZvcmVQcmludDogbnVsbCxcbiAgICBvbkJlZm9yZVVubG9hZDogbnVsbCxcbiAgICBvbkJsdXI6IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG4gICAgb25DYW5QbGF5OiBudWxsLFxuICAgIG9uQ2FuUGxheVRocm91Z2g6IG51bGwsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uQ29udGV4dE1lbnU6IG51bGwsXG4gICAgb25Db3B5OiBudWxsLFxuICAgIG9uQ3VlQ2hhbmdlOiBudWxsLFxuICAgIG9uQ3V0OiBudWxsLFxuICAgIG9uRGJsQ2xpY2s6IG51bGwsXG4gICAgb25EcmFnOiBudWxsLFxuICAgIG9uRHJhZ0VuZDogbnVsbCxcbiAgICBvbkRyYWdFbnRlcjogbnVsbCxcbiAgICBvbkRyYWdFeGl0OiBudWxsLFxuICAgIG9uRHJhZ0xlYXZlOiBudWxsLFxuICAgIG9uRHJhZ092ZXI6IG51bGwsXG4gICAgb25EcmFnU3RhcnQ6IG51bGwsXG4gICAgb25Ecm9wOiBudWxsLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6IG51bGwsXG4gICAgb25FbXB0aWVkOiBudWxsLFxuICAgIG9uRW5kZWQ6IG51bGwsXG4gICAgb25FcnJvcjogbnVsbCxcbiAgICBvbkZvY3VzOiBudWxsLFxuICAgIG9uRm9ybURhdGE6IG51bGwsXG4gICAgb25IYXNoQ2hhbmdlOiBudWxsLFxuICAgIG9uSW5wdXQ6IG51bGwsXG4gICAgb25JbnZhbGlkOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIG9uS2V5VXA6IG51bGwsXG4gICAgb25MYW5ndWFnZUNoYW5nZTogbnVsbCxcbiAgICBvbkxvYWQ6IG51bGwsXG4gICAgb25Mb2FkZWREYXRhOiBudWxsLFxuICAgIG9uTG9hZGVkTWV0YWRhdGE6IG51bGwsXG4gICAgb25Mb2FkRW5kOiBudWxsLFxuICAgIG9uTG9hZFN0YXJ0OiBudWxsLFxuICAgIG9uTWVzc2FnZTogbnVsbCxcbiAgICBvbk1lc3NhZ2VFcnJvcjogbnVsbCxcbiAgICBvbk1vdXNlRG93bjogbnVsbCxcbiAgICBvbk1vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Nb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uTW91c2VNb3ZlOiBudWxsLFxuICAgIG9uTW91c2VPdXQ6IG51bGwsXG4gICAgb25Nb3VzZU92ZXI6IG51bGwsXG4gICAgb25Nb3VzZVVwOiBudWxsLFxuICAgIG9uT2ZmbGluZTogbnVsbCxcbiAgICBvbk9ubGluZTogbnVsbCxcbiAgICBvblBhZ2VIaWRlOiBudWxsLFxuICAgIG9uUGFnZVNob3c6IG51bGwsXG4gICAgb25QYXN0ZTogbnVsbCxcbiAgICBvblBhdXNlOiBudWxsLFxuICAgIG9uUGxheTogbnVsbCxcbiAgICBvblBsYXlpbmc6IG51bGwsXG4gICAgb25Qb3BTdGF0ZTogbnVsbCxcbiAgICBvblByb2dyZXNzOiBudWxsLFxuICAgIG9uUmF0ZUNoYW5nZTogbnVsbCxcbiAgICBvblJlamVjdGlvbkhhbmRsZWQ6IG51bGwsXG4gICAgb25SZXNldDogbnVsbCxcbiAgICBvblJlc2l6ZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBvblNlY3VyaXR5UG9saWN5VmlvbGF0aW9uOiBudWxsLFxuICAgIG9uU2Vla2VkOiBudWxsLFxuICAgIG9uU2Vla2luZzogbnVsbCxcbiAgICBvblNlbGVjdDogbnVsbCxcbiAgICBvblNsb3RDaGFuZ2U6IG51bGwsXG4gICAgb25TdGFsbGVkOiBudWxsLFxuICAgIG9uU3RvcmFnZTogbnVsbCxcbiAgICBvblN1Ym1pdDogbnVsbCxcbiAgICBvblN1c3BlbmQ6IG51bGwsXG4gICAgb25UaW1lVXBkYXRlOiBudWxsLFxuICAgIG9uVG9nZ2xlOiBudWxsLFxuICAgIG9uVW5oYW5kbGVkUmVqZWN0aW9uOiBudWxsLFxuICAgIG9uVW5sb2FkOiBudWxsLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBudWxsLFxuICAgIG9uV2FpdGluZzogbnVsbCxcbiAgICBvbldoZWVsOiBudWxsLFxuICAgIG9wZW46IGJvb2xlYW4sXG4gICAgb3B0aW11bTogbnVtYmVyLFxuICAgIHBhdHRlcm46IG51bGwsXG4gICAgcGluZzogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgcGxheXNJbmxpbmU6IGJvb2xlYW4sXG4gICAgcG9zdGVyOiBudWxsLFxuICAgIHByZWxvYWQ6IG51bGwsXG4gICAgcmVhZE9ubHk6IGJvb2xlYW4sXG4gICAgcmVmZXJyZXJQb2xpY3k6IG51bGwsXG4gICAgcmVsOiBzcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZDogYm9vbGVhbixcbiAgICByZXZlcnNlZDogYm9vbGVhbixcbiAgICByb3dzOiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIHNhbmRib3g6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHNjb3BlOiBudWxsLFxuICAgIHNjb3BlZDogYm9vbGVhbixcbiAgICBzZWFtbGVzczogYm9vbGVhbixcbiAgICBzZWxlY3RlZDogYm9vbGVhbixcbiAgICBzaGFwZTogbnVsbCxcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc2l6ZXM6IG51bGwsXG4gICAgc2xvdDogbnVsbCxcbiAgICBzcGFuOiBudW1iZXIsXG4gICAgc3BlbGxDaGVjazogYm9vbGVhbmlzaCxcbiAgICBzcmM6IG51bGwsXG4gICAgc3JjRG9jOiBudWxsLFxuICAgIHNyY0xhbmc6IG51bGwsXG4gICAgc3JjU2V0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHN0ZXA6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bWJlcixcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHJhbnNsYXRlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdHlwZU11c3RNYXRjaDogYm9vbGVhbixcbiAgICB1c2VNYXA6IG51bGwsXG4gICAgdmFsdWU6IGJvb2xlYW5pc2gsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICB3cmFwOiBudWxsLFxuXG4gICAgLy8gTGVnYWN5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jb3RoZXItZWxlbWVudHMsLWF0dHJpYnV0ZXMtYW5kLWFwaXNcbiAgICBhbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdGV4dC1hbGlnbmAgaW5zdGVhZCxcbiAgICBhTGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6YWN0aXZlIHtjb2xvcn1gIGluc3RlYWRcbiAgICBhcmNoaXZlOiBzcGFjZVNlcGFyYXRlZCwgLy8gYDxvYmplY3Q+YC4gTGlzdCBvZiBVUklzIHRvIGFyY2hpdmVzXG4gICAgYXhpczogbnVsbCwgLy8gYDx0ZD5gIGFuZCBgPHRoPmAuIFVzZSBgc2NvcGVgIG9uIGA8dGg+YFxuICAgIGJhY2tncm91bmQ6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBiYWNrZ3JvdW5kLWltYWdlYCBpbnN0ZWFkXG4gICAgYmdDb2xvcjogbnVsbCwgLy8gYDxib2R5PmAgYW5kIHRhYmxlIGVsZW1lbnRzLiBVc2UgQ1NTIGBiYWNrZ3JvdW5kLWNvbG9yYCBpbnN0ZWFkXG4gICAgYm9yZGVyOiBudW1iZXIsIC8vIGA8dGFibGU+YC4gVXNlIENTUyBgYm9yZGVyLXdpZHRoYCBpbnN0ZWFkLFxuICAgIGJvcmRlckNvbG9yOiBudWxsLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci1jb2xvcmAgaW5zdGVhZCxcbiAgICBib3R0b21NYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBjZWxsUGFkZGluZzogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgY2VsbFNwYWNpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNoYXI6IG51bGwsIC8vIFNldmVyYWwgdGFibGUgZWxlbWVudHMuIFdoZW4gYGFsaWduPWNoYXJgLCBzZXRzIHRoZSBjaGFyYWN0ZXIgdG8gYWxpZ24gb25cbiAgICBjaGFyT2ZmOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBjaGFyYCwgb2Zmc2V0cyB0aGUgYWxpZ25tZW50XG4gICAgY2xhc3NJZDogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNsZWFyOiBudWxsLCAvLyBgPGJyPmAuIFVzZSBDU1MgYGNsZWFyYCBpbnN0ZWFkXG4gICAgY29kZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVCYXNlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29kZVR5cGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2xvcjogbnVsbCwgLy8gYDxmb250PmAgYW5kIGA8aHI+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgY29tcGFjdDogYm9vbGVhbiwgLy8gTGlzdHMuIFVzZSBDU1MgdG8gcmVkdWNlIHNwYWNlIGJldHdlZW4gaXRlbXMgaW5zdGVhZFxuICAgIGRlY2xhcmU6IGJvb2xlYW4sIC8vIGA8b2JqZWN0PmBcbiAgICBldmVudDogbnVsbCwgLy8gYDxzY3JpcHQ+YFxuICAgIGZhY2U6IG51bGwsIC8vIGA8Zm9udD5gLiBVc2UgQ1NTIGluc3RlYWRcbiAgICBmcmFtZTogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgZnJhbWVCb3JkZXI6IG51bGwsIC8vIGA8aWZyYW1lPmAuIFVzZSBDU1MgYGJvcmRlcmAgaW5zdGVhZFxuICAgIGhTcGFjZTogbnVtYmVyLCAvLyBgPGltZz5gIGFuZCBgPG9iamVjdD5gXG4gICAgbGVmdE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIGxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmxpbmsge2NvbG9yOiAqfWAgaW5zdGVhZFxuICAgIGxvbmdEZXNjOiBudWxsLCAvLyBgPGZyYW1lPmAsIGA8aWZyYW1lPmAsIGFuZCBgPGltZz5gLiBVc2UgYW4gYDxhPmBcbiAgICBsb3dTcmM6IG51bGwsIC8vIGA8aW1nPmAuIFVzZSBhIGA8cGljdHVyZT5gXG4gICAgbWFyZ2luSGVpZ2h0OiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbWFyZ2luV2lkdGg6IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBub1Jlc2l6ZTogYm9vbGVhbiwgLy8gYDxmcmFtZT5gXG4gICAgbm9IcmVmOiBib29sZWFuLCAvLyBgPGFyZWE+YC4gVXNlIG5vIGhyZWYgaW5zdGVhZCBvZiBhbiBleHBsaWNpdCBgbm9ocmVmYFxuICAgIG5vU2hhZGU6IGJvb2xlYW4sIC8vIGA8aHI+YC4gVXNlIGJhY2tncm91bmQtY29sb3IgYW5kIGhlaWdodCBpbnN0ZWFkIG9mIGJvcmRlcnNcbiAgICBub1dyYXA6IGJvb2xlYW4sIC8vIGA8dGQ+YCBhbmQgYDx0aD5gXG4gICAgb2JqZWN0OiBudWxsLCAvLyBgPGFwcGxldD5gXG4gICAgcHJvZmlsZTogbnVsbCwgLy8gYDxoZWFkPmBcbiAgICBwcm9tcHQ6IG51bGwsIC8vIGA8aXNpbmRleD5gXG4gICAgcmV2OiBudWxsLCAvLyBgPGxpbms+YFxuICAgIHJpZ2h0TWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgcnVsZXM6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIHNjaGVtZTogbnVsbCwgLy8gYDxtZXRhPmBcbiAgICBzY3JvbGxpbmc6IGJvb2xlYW5pc2gsIC8vIGA8ZnJhbWU+YC4gVXNlIG92ZXJmbG93IGluIHRoZSBjaGlsZCBjb250ZXh0XG4gICAgc3RhbmRieTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIHN1bW1hcnk6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIHRleHQ6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBjb2xvcmAgaW5zdGVhZFxuICAgIHRvcE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHZhbHVlVHlwZTogbnVsbCwgLy8gYDxwYXJhbT5gXG4gICAgdmVyc2lvbjogbnVsbCwgLy8gYDxodG1sPmAuIFVzZSBhIGRvY3R5cGUuXG4gICAgdkFsaWduOiBudWxsLCAvLyBTZXZlcmFsLiBVc2UgQ1NTIGB2ZXJ0aWNhbC1hbGlnbmAgaW5zdGVhZFxuICAgIHZMaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTp2aXNpdGVkIHtjb2xvcn1gIGluc3RlYWRcbiAgICB2U3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuXG4gICAgLy8gTm9uLXN0YW5kYXJkIFByb3BlcnRpZXMuXG4gICAgYWxsb3dUcmFuc3BhcmVuY3k6IG51bGwsXG4gICAgYXV0b0NvcnJlY3Q6IG51bGwsXG4gICAgYXV0b1NhdmU6IG51bGwsXG4gICAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmU6IGJvb2xlYW4sXG4gICAgZGlzYWJsZVJlbW90ZVBsYXliYWNrOiBib29sZWFuLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICByZXN1bHRzOiBudW1iZXIsXG4gICAgc2VjdXJpdHk6IG51bGwsXG4gICAgdW5zZWxlY3RhYmxlOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSkge1xuICByZXR1cm4gYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMgPyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gOiBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsaXplJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2RlZmluZWQtaW5mbycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbmZ1bmN0aW9uIGNyZWF0ZShkZWZpbml0aW9uKSB7XG4gIHZhciBzcGFjZSA9IGRlZmluaXRpb24uc3BhY2VcbiAgdmFyIG11c3RVc2VQcm9wZXJ0eSA9IGRlZmluaXRpb24ubXVzdFVzZVByb3BlcnR5IHx8IFtdXG4gIHZhciBhdHRyaWJ1dGVzID0gZGVmaW5pdGlvbi5hdHRyaWJ1dGVzIHx8IHt9XG4gIHZhciBwcm9wcyA9IGRlZmluaXRpb24ucHJvcGVydGllc1xuICB2YXIgdHJhbnNmb3JtID0gZGVmaW5pdGlvbi50cmFuc2Zvcm1cbiAgdmFyIHByb3BlcnR5ID0ge31cbiAgdmFyIG5vcm1hbCA9IHt9XG4gIHZhciBwcm9wXG4gIHZhciBpbmZvXG5cbiAgZm9yIChwcm9wIGluIHByb3BzKSB7XG4gICAgaW5mbyA9IG5ldyBEZWZpbmVkSW5mbyhcbiAgICAgIHByb3AsXG4gICAgICB0cmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcCksXG4gICAgICBwcm9wc1twcm9wXSxcbiAgICAgIHNwYWNlXG4gICAgKVxuXG4gICAgaWYgKG11c3RVc2VQcm9wZXJ0eS5pbmRleE9mKHByb3ApICE9PSAtMSkge1xuICAgICAgaW5mby5tdXN0VXNlUHJvcGVydHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcHJvcGVydHlbcHJvcF0gPSBpbmZvXG5cbiAgICBub3JtYWxbbm9ybWFsaXplKHByb3ApXSA9IHByb3BcbiAgICBub3JtYWxbbm9ybWFsaXplKGluZm8uYXR0cmlidXRlKV0gPSBwcm9wXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vaW5mbycpXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbmVkSW5mb1xuXG5EZWZpbmVkSW5mby5wcm90b3R5cGUgPSBuZXcgSW5mbygpXG5EZWZpbmVkSW5mby5wcm90b3R5cGUuZGVmaW5lZCA9IHRydWVcblxudmFyIGNoZWNrcyA9IFtcbiAgJ2Jvb2xlYW4nLFxuICAnYm9vbGVhbmlzaCcsXG4gICdvdmVybG9hZGVkQm9vbGVhbicsXG4gICdudW1iZXInLFxuICAnY29tbWFTZXBhcmF0ZWQnLFxuICAnc3BhY2VTZXBhcmF0ZWQnLFxuICAnY29tbWFPclNwYWNlU2VwYXJhdGVkJ1xuXVxudmFyIGNoZWNrc0xlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuZnVuY3Rpb24gRGVmaW5lZEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSwgbWFzaywgc3BhY2UpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoZWNrXG5cbiAgbWFyayh0aGlzLCAnc3BhY2UnLCBzcGFjZSlcblxuICBJbmZvLmNhbGwodGhpcywgcHJvcGVydHksIGF0dHJpYnV0ZSlcblxuICB3aGlsZSAoKytpbmRleCA8IGNoZWNrc0xlbmd0aCkge1xuICAgIGNoZWNrID0gY2hlY2tzW2luZGV4XVxuICAgIG1hcmsodGhpcywgY2hlY2ssIChtYXNrICYgdHlwZXNbY2hlY2tdKSA9PT0gdHlwZXNbY2hlY2tdKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmsodmFsdWVzLCBrZXksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHZhbHVlc1trZXldID0gdmFsdWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb1xuXG52YXIgcHJvdG8gPSBJbmZvLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLmF0dHJpYnV0ZSA9IG51bGxcbnByb3RvLnByb3BlcnR5ID0gbnVsbFxucHJvdG8uYm9vbGVhbiA9IGZhbHNlXG5wcm90by5ib29sZWFuaXNoID0gZmFsc2VcbnByb3RvLm92ZXJsb2FkZWRCb29sZWFuID0gZmFsc2VcbnByb3RvLm51bWJlciA9IGZhbHNlXG5wcm90by5jb21tYVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5zcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8ubXVzdFVzZVByb3BlcnR5ID0gZmFsc2VcbnByb3RvLmRlZmluZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVxuXG5mdW5jdGlvbiBtZXJnZShkZWZpbml0aW9ucykge1xuICB2YXIgbGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoXG4gIHZhciBwcm9wZXJ0eSA9IFtdXG4gIHZhciBub3JtYWwgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW5mb1xuICB2YXIgc3BhY2VcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGluZm8gPSBkZWZpbml0aW9uc1tpbmRleF1cbiAgICBwcm9wZXJ0eS5wdXNoKGluZm8ucHJvcGVydHkpXG4gICAgbm9ybWFsLnB1c2goaW5mby5ub3JtYWwpXG4gICAgc3BhY2UgPSBpbmZvLnNwYWNlXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShcbiAgICB4dGVuZC5hcHBseShudWxsLCBwcm9wZXJ0eSksXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgbm9ybWFsKSxcbiAgICBzcGFjZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBTY2hlbWFcblxudmFyIHByb3RvID0gU2NoZW1hLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLm5vcm1hbCA9IHt9XG5wcm90by5wcm9wZXJ0eSA9IHt9XG5cbmZ1bmN0aW9uIFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5ub3JtYWwgPSBub3JtYWxcblxuICBpZiAoc3BhY2UpIHtcbiAgICB0aGlzLnNwYWNlID0gc3BhY2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwb3dlcnMgPSAwXG5cbmV4cG9ydHMuYm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLmJvb2xlYW5pc2ggPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5vdmVybG9hZGVkQm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLm51bWJlciA9IGluY3JlbWVudCgpXG5leHBvcnRzLnNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCArK3Bvd2Vycylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bGluaycsXG4gIHRyYW5zZm9ybTogeGxpbmtUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4TGlua0FjdHVhdGU6IG51bGwsXG4gICAgeExpbmtBcmNSb2xlOiBudWxsLFxuICAgIHhMaW5rSHJlZjogbnVsbCxcbiAgICB4TGlua1JvbGU6IG51bGwsXG4gICAgeExpbmtTaG93OiBudWxsLFxuICAgIHhMaW5rVGl0bGU6IG51bGwsXG4gICAgeExpbmtUeXBlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhsaW5rVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bGluazonICsgcHJvcC5zbGljZSg1KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sJyxcbiAgdHJhbnNmb3JtOiB4bWxUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxMYW5nOiBudWxsLFxuICAgIHhtbEJhc2U6IG51bGwsXG4gICAgeG1sU3BhY2U6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geG1sVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bWw6JyArIHByb3Auc2xpY2UoMykudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sbnMnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgeG1sbnN4bGluazogJ3htbG5zOnhsaW5rJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbG5zOiBudWxsLFxuICAgIHhtbG5zWExpbms6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBnbG9iYWwgd2luZG93LCBzZWxmICovXG5cbnZhciByZXN0b3JlID0gY2FwdHVyZSgpXG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gRG9uJ3QgYWxsb3cgUHJpc20gdG8gcnVuIG9uIHBhZ2UgbG9hZCBpbiBicm93c2VyIG9yXG4vLyB0byBzdGFydCBtZXNzYWdpbmcgZnJvbSB3b3JrZXJzLlxudmFyIGN0eCA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gICAgPyB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8ge31cbiAgICAgIDogc2VsZlxuICAgIDogd2luZG93XG5cbmN0eC5QcmlzbSA9IHttYW51YWw6IHRydWUsIGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjogdHJ1ZX1cblxuLy8gTG9hZCBhbGwgc3R1ZmYgaW4gYHByaXNtLmpzYCBpdHNlbGYsIGV4Y2VwdCBmb3IgYHByaXNtLWZpbGUtaGlnaGxpZ2h0LmpzYC5cbi8vIFRoZSB3cmFwcGVkIG5vbi1sZWFreSBncmFtbWFycyBhcmUgbG9hZGVkIGluc3RlYWQgb2YgUHJpc23igJlzIG9yaWdpbmFscy5cbnZhciBoID0gcmVxdWlyZSgnaGFzdHNjcmlwdCcpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIFByaXNtID0gcmVxdWlyZSgncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNvcmUnKVxudmFyIG1hcmt1cCA9IHJlcXVpcmUoJy4vbGFuZy9tYXJrdXAnKVxudmFyIGNzcyA9IHJlcXVpcmUoJy4vbGFuZy9jc3MnKVxudmFyIGNsaWtlID0gcmVxdWlyZSgnLi9sYW5nL2NsaWtlJylcbnZhciBqcyA9IHJlcXVpcmUoJy4vbGFuZy9qYXZhc2NyaXB0JylcblxucmVzdG9yZSgpXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBJbmhlcml0LlxuZnVuY3Rpb24gUmVmcmFjdG9yKCkge31cblxuUmVmcmFjdG9yLnByb3RvdHlwZSA9IFByaXNtXG5cbi8vIENvbnN0cnVjdC5cbnZhciByZWZyYWN0ID0gbmV3IFJlZnJhY3RvcigpXG5cbi8vIEV4cG9zZS5cbm1vZHVsZS5leHBvcnRzID0gcmVmcmFjdFxuXG4vLyBDcmVhdGUuXG5yZWZyYWN0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodFxucmVmcmFjdC5yZWdpc3RlciA9IHJlZ2lzdGVyXG5yZWZyYWN0LmFsaWFzID0gYWxpYXNcbnJlZnJhY3QucmVnaXN0ZXJlZCA9IHJlZ2lzdGVyZWRcbnJlZnJhY3QubGlzdExhbmd1YWdlcyA9IGxpc3RMYW5ndWFnZXNcblxuLy8gUmVnaXN0ZXIgYnVuZGxlZCBncmFtbWFycy5cbnJlZ2lzdGVyKG1hcmt1cClcbnJlZ2lzdGVyKGNzcylcbnJlZ2lzdGVyKGNsaWtlKVxucmVnaXN0ZXIoanMpXG5cbnJlZnJhY3QudXRpbC5lbmNvZGUgPSBlbmNvZGVcbnJlZnJhY3QuVG9rZW4uc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKGdyYW1tYXIpIHtcbiAgaWYgKHR5cGVvZiBncmFtbWFyICE9PSAnZnVuY3Rpb24nIHx8ICFncmFtbWFyLmRpc3BsYXlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgZnVuY3Rpb25gIGZvciBgZ3JhbW1hcmAsIGdvdCBgJyArIGdyYW1tYXIgKyAnYCcpXG4gIH1cblxuICAvLyBEbyBub3QgZHVwbGljYXRlIHJlZ2lzdHJhdGlvbnMuXG4gIGlmIChyZWZyYWN0Lmxhbmd1YWdlc1tncmFtbWFyLmRpc3BsYXlOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZ3JhbW1hcihyZWZyYWN0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsaWFzKG5hbWUsIGFsaWFzKSB7XG4gIHZhciBsYW5ndWFnZXMgPSByZWZyYWN0Lmxhbmd1YWdlc1xuICB2YXIgbWFwID0gbmFtZVxuICB2YXIga2V5XG4gIHZhciBsaXN0XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG5cbiAgaWYgKGFsaWFzKSB7XG4gICAgbWFwID0ge31cbiAgICBtYXBbbmFtZV0gPSBhbGlhc1xuICB9XG5cbiAgZm9yIChrZXkgaW4gbWFwKSB7XG4gICAgbGlzdCA9IG1hcFtrZXldXG4gICAgbGlzdCA9IHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJyA/IFtsaXN0XSA6IGxpc3RcbiAgICBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICAgIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBsYW5ndWFnZXNbbGlzdFtpbmRleF1dID0gbGFuZ3VhZ2VzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0KHZhbHVlLCBuYW1lKSB7XG4gIHZhciBzdXAgPSBQcmlzbS5oaWdobGlnaHRcbiAgdmFyIGdyYW1tYXJcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIGB2YWx1ZWAsIGdvdCBgJyArIHZhbHVlICsgJ2AnKVxuICB9XG5cbiAgLy8gYG5hbWVgIGlzIGEgZ3JhbW1hciBvYmplY3QuXG4gIGlmIChyZWZyYWN0LnV0aWwudHlwZShuYW1lKSA9PT0gJ09iamVjdCcpIHtcbiAgICBncmFtbWFyID0gbmFtZVxuICAgIG5hbWUgPSBudWxsXG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgc3RyaW5nYCBmb3IgYG5hbWVgLCBnb3QgYCcgKyBuYW1lICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChvd24uY2FsbChyZWZyYWN0Lmxhbmd1YWdlcywgbmFtZSkpIHtcbiAgICAgIGdyYW1tYXIgPSByZWZyYWN0Lmxhbmd1YWdlc1tuYW1lXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IGAnICsgbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VwLmNhbGwodGhpcywgdmFsdWUsIGdyYW1tYXIsIG5hbWUpXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyZWQobGFuZ3VhZ2UpIHtcbiAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciBgbGFuZ3VhZ2VgLCBnb3QgYCcgKyBsYW5ndWFnZSArICdgJylcbiAgfVxuXG4gIHJldHVybiBvd24uY2FsbChyZWZyYWN0Lmxhbmd1YWdlcywgbGFuZ3VhZ2UpXG59XG5cbmZ1bmN0aW9uIGxpc3RMYW5ndWFnZXMoKSB7XG4gIHZhciBsYW5ndWFnZXMgPSByZWZyYWN0Lmxhbmd1YWdlc1xuICB2YXIgbGlzdCA9IFtdXG4gIHZhciBsYW5ndWFnZVxuXG4gIGZvciAobGFuZ3VhZ2UgaW4gbGFuZ3VhZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgb3duLmNhbGwobGFuZ3VhZ2VzLCBsYW5ndWFnZSkgJiZcbiAgICAgIHR5cGVvZiBsYW5ndWFnZXNbbGFuZ3VhZ2VdID09PSAnb2JqZWN0J1xuICAgICkge1xuICAgICAgbGlzdC5wdXNoKGxhbmd1YWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsaXN0XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSwgbGFuZ3VhZ2UsIHBhcmVudCkge1xuICB2YXIgZW52XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge3R5cGU6ICd0ZXh0JywgdmFsdWU6IHZhbHVlfVxuICB9XG5cbiAgaWYgKHJlZnJhY3QudXRpbC50eXBlKHZhbHVlKSA9PT0gJ0FycmF5Jykge1xuICAgIHJldHVybiBzdHJpbmdpZnlBbGwodmFsdWUsIGxhbmd1YWdlKVxuICB9XG5cbiAgZW52ID0ge1xuICAgIHR5cGU6IHZhbHVlLnR5cGUsXG4gICAgY29udGVudDogcmVmcmFjdC5Ub2tlbi5zdHJpbmdpZnkodmFsdWUuY29udGVudCwgbGFuZ3VhZ2UsIHBhcmVudCksXG4gICAgdGFnOiAnc3BhbicsXG4gICAgY2xhc3NlczogWyd0b2tlbicsIHZhbHVlLnR5cGVdLFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICBwYXJlbnQ6IHBhcmVudFxuICB9XG5cbiAgaWYgKHZhbHVlLmFsaWFzKSB7XG4gICAgZW52LmNsYXNzZXMgPSBlbnYuY2xhc3Nlcy5jb25jYXQodmFsdWUuYWxpYXMpXG4gIH1cblxuICByZWZyYWN0Lmhvb2tzLnJ1bignd3JhcCcsIGVudilcblxuICByZXR1cm4gaChcbiAgICBlbnYudGFnICsgJy4nICsgZW52LmNsYXNzZXMuam9pbignLicpLFxuICAgIGF0dHJpYnV0ZXMoZW52LmF0dHJpYnV0ZXMpLFxuICAgIGVudi5jb250ZW50XG4gIClcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5QWxsKHZhbHVlcywgbGFuZ3VhZ2UpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG5cbiAgICBpZiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSByZXN1bHRbaW5kZXhdXG4gICAgcmVzdWx0W2luZGV4XSA9IHJlZnJhY3QuVG9rZW4uc3RyaW5naWZ5KHZhbHVlLCBsYW5ndWFnZSwgcmVzdWx0KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG4gIHJldHVybiB0b2tlbnNcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlcyhhdHRycykge1xuICB2YXIga2V5XG5cbiAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICBhdHRyc1trZXldID0gZGVjb2RlKGF0dHJzW2tleV0pXG4gIH1cblxuICByZXR1cm4gYXR0cnNcbn1cblxuZnVuY3Rpb24gY2FwdHVyZSgpIHtcbiAgdmFyIGRlZmluZWQgPSAnUHJpc20nIGluIGdsb2JhbFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgY3VycmVudCA9IGRlZmluZWQgPyBnbG9iYWwuUHJpc20gOiB1bmRlZmluZWRcblxuICByZXR1cm4gcmVzdG9yZVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgLSBDbGVhbiBsZWFrcyBhZnRlciBQcmlzbS4gKi9cbiAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgZ2xvYmFsLlByaXNtID0gY3VycmVudFxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgZ2xvYmFsLlByaXNtXG4gICAgfVxuXG4gICAgZGVmaW5lZCA9IHVuZGVmaW5lZFxuICAgIGN1cnJlbnQgPSB1bmRlZmluZWRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xpa2VcbmNsaWtlLmRpc3BsYXlOYW1lID0gJ2NsaWtlJ1xuY2xpa2UuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjbGlrZShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLygoPzpcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyspfCg/OmNhdGNoXFxzK1xcKCkpW1xcdy5cXFxcXSsvaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9bLlxcXFxdL1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICBmdW5jdGlvbjogL1xcdysoPz1cXCgpLyxcbiAgICBudW1iZXI6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcbiAgICBvcGVyYXRvcjogLy0tP3xcXCtcXCs/fCE9Pz0/fDw9P3w+PT98PT0/PT98JiY/fFxcfFxcfD98XFw/fFxcKnxcXC98fnxcXF58JS8sXG4gICAgcHVuY3R1YXRpb246IC9be31bXFxdOygpLC46XS9cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3NzXG5jc3MuZGlzcGxheU5hbWUgPSAnY3NzJ1xuY3NzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gY3NzKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcbiAgICAgIGNvbW1lbnQ6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgIGF0cnVsZToge1xuICAgICAgICBwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBydWxlOiAvQFtcXHctXSsvIC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCd1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3xbXlxcblxccigpXSopXFxcXCknLCAnaScpLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBmdW5jdGlvbjogL151cmwvaSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL15cXCh8XFwpJC9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlbGVjdG9yOiBSZWdFeHAoXG4gICAgICAgICdbXnt9XFxcXHNdKD86W157fTtcIlxcJ118JyArIHN0cmluZy5zb3VyY2UgKyAnKSo/KD89XFxcXHMqXFxcXHspJ1xuICAgICAgKSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHByb3BlcnR5OiAvWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLFxuICAgICAgaW1wb3J0YW50OiAvIWltcG9ydGFudFxcYi9pLFxuICAgICAgZnVuY3Rpb246IC9bLWEtejAtOV0rKD89XFwoKS9pLFxuICAgICAgcHVuY3R1YXRpb246IC9bKCl7fTs6LF0vXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzc1xuICAgIHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gICAgaWYgKG1hcmt1cCkge1xuICAgICAgbWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICAgJ2luc2lkZScsXG4gICAgICAgICdhdHRyLXZhbHVlJyxcbiAgICAgICAge1xuICAgICAgICAgICdzdHlsZS1hdHRyJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15cXHMqc3R5bGUvaSxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IG1hcmt1cC50YWcuaW5zaWRlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFxuICAgICAgICAgICAgICAnYXR0ci12YWx1ZSc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvLisvaSxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3NcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWFya3VwLnRhZ1xuICAgICAgKVxuICAgIH1cbiAgfSkoUHJpc20pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhc2NyaXB0XG5qYXZhc2NyaXB0LmRpc3BsYXlOYW1lID0gJ2phdmFzY3JpcHQnXG5qYXZhc2NyaXB0LmFsaWFzZXMgPSBbJ2pzJ11cbmZ1bmN0aW9uIGphdmFzY3JpcHQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAnY2xhc3MtbmFtZSc6IFtcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY2xhc3MtbmFtZSddLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pW18kQS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAga2V5d29yZDogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pXFxiKD86YXN8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBudW1iZXI6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG4gICAgLy8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG4gICAgZnVuY3Rpb246IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcbiAgICBvcGVyYXRvcjogLy1bLT1dP3xcXCtbKz1dP3whPT89P3w8PD89P3w+Pj8+Pz0/fD0oPzo9PT98Pik/fCZbJj1dP3xcXHxbfD1dP3xcXCpcXCo/PT98XFwvPT98fnxcXF49P3wlPT98XFw/fFxcLnszfS9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbXG4gICAgJ2NsYXNzLW5hbWUnXG4gIF1bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rL1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG4gICAgcmVnZXg6IHtcbiAgICAgIHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdKVxccyopXFwvKFxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKl18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tnaW15dXNdezAsNn0oPz1cXHMqKCR8W1xcclxcbiwuO30pXFxdXSkpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcbiAgICAnZnVuY3Rpb24tdmFyaWFibGUnOiB7XG4gICAgICBwYXR0ZXJuOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXxbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKVxccyo9PikpLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICBwYXJhbWV0ZXI6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhmdW5jdGlvbig/OlxccytbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/OltfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSpcXHMqKVxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqXFx7KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbnN0YW50OiAvXFxiW0EtWl0oPzpbQS1aX118XFxkeD8pKlxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG4gICAgJ3RlbXBsYXRlLXN0cmluZyc6IHtcbiAgICAgIHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfXwoPyFcXCR7KVteXFxcXGBdKSpgLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAndGVtcGxhdGUtcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL15gfGAkLyxcbiAgICAgICAgICBhbGlhczogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL15cXCR7fH0kLyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nOiAvW1xcc1xcU10rL1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmt1cFxubWFya3VwLmRpc3BsYXlOYW1lID0gJ21hcmt1cCdcbm1hcmt1cC5hbGlhc2VzID0gWyd4bWwnLCAnaHRtbCcsICdtYXRobWwnLCAnc3ZnJ11cbmZ1bmN0aW9uIG1hcmt1cChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuICAgIGNvbW1lbnQ6IC88IS0tW1xcc1xcU10qPy0tPi8sXG4gICAgcHJvbG9nOiAvPFxcP1tcXHNcXFNdKz9cXD8+LyxcbiAgICBkb2N0eXBlOiAvPCFET0NUWVBFW1xcc1xcU10rPz4vaSxcbiAgICBjZGF0YTogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XV0+L2ksXG4gICAgdGFnOiB7XG4gICAgICBwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdGFnOiB7XG4gICAgICAgICAgcGF0dGVybjogL148XFwvP1teXFxzPlxcL10rL2ksXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL148XFwvPy8sXG4gICAgICAgICAgICBuYW1lc3BhY2U6IC9eW15cXHM+XFwvOl0rOi9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgICAgIHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspL2ksXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogW1xuICAgICAgICAgICAgICAvXj0vLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuICAgICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHVuY3R1YXRpb246IC9cXC8/Pi8sXG4gICAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgICAgcGF0dGVybjogL1teXFxzPlxcL10rLyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIG5hbWVzcGFjZTogL15bXlxccz5cXC86XSs6L1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW50aXR5OiAvJiM/W1xcZGEtel17MSw4fTsvaVxuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuICAgIFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2VudGl0eSddIC8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG4gIFByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuICAgIGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcbiAgICAgIGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQudmFsdWUucmVwbGFjZSgvJmFtcDsvLCAnJicpXG4gICAgfVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG4gICAgICpcbiAgICAgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcbiAgICAgKiBjYXNlIGluc2Vuc2l0aXZlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG4gICAgICB2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9XG4gICAgICBpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG4gICAgICAgIHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuICAgICAgfVxuICAgICAgaW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pXG4gICAgICB2YXIgaW5zaWRlID0ge1xuICAgICAgICAnaW5jbHVkZWQtY2RhdGEnOiB7XG4gICAgICAgICAgcGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuICAgICAgICAgIGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcbiAgICAgICAgcGF0dGVybjogL1tcXHNcXFNdKy8sXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG4gICAgICB9XG4gICAgICB2YXIgZGVmID0ge31cbiAgICAgIGRlZlt0YWdOYW1lXSA9IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKFxuICAgICAgICAgIC8oPF9fW1xcc1xcU10qPz4pKD86PCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+XFxzKnxbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAgIC9fXy9nLFxuICAgICAgICAgICAgdGFnTmFtZVxuICAgICAgICAgICksXG4gICAgICAgICAgJ2knXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiBpbnNpZGVcbiAgICAgIH1cbiAgICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZilcbiAgICB9XG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gIFByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gIFByaXNtLmxhbmd1YWdlcy5zdmcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZpbmQgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUnKVxudmFyIHBhcnNlU2VsZWN0b3IgPSByZXF1aXJlKCdoYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3InKVxudmFyIHNwYWNlcyA9IHJlcXVpcmUoJ3NwYWNlLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxudmFyIGNvbW1hcyA9IHJlcXVpcmUoJ2NvbW1hLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZhY3Rvcnkoc2NoZW1hLCBkZWZhdWx0VGFnTmFtZSwgY2FzZVNlbnNpdGl2ZSkge1xuICB2YXIgYWRqdXN0ID0gY2FzZVNlbnNpdGl2ZSA/IGNyZWF0ZUFkanVzdE1hcChjYXNlU2Vuc2l0aXZlKSA6IG51bGxcblxuICByZXR1cm4gaFxuXG4gIC8vIEh5cGVyc2NyaXB0IGNvbXBhdGlibGUgRFNMIGZvciBjcmVhdGluZyB2aXJ0dWFsIGhhc3QgdHJlZXMuXG4gIGZ1bmN0aW9uIGgoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgbm9kZSA9IHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKVxuICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgdmFyIHByb3BlcnR5XG5cbiAgICBub2RlLnRhZ05hbWUgPSBhZGp1c3QgJiYgb3duLmNhbGwoYWRqdXN0LCBuYW1lKSA/IGFkanVzdFtuYW1lXSA6IG5hbWVcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIGlzQ2hpbGRyZW4ocHJvcGVydGllcywgbm9kZSkpIHtcbiAgICAgIGNoaWxkcmVuLnVuc2hpZnQocHJvcGVydGllcylcbiAgICAgIHByb3BlcnRpZXMgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAocHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgICBhZGRQcm9wZXJ0eShub2RlLnByb3BlcnRpZXMsIHByb3BlcnR5LCBwcm9wZXJ0aWVzW3Byb3BlcnR5XSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDaGlsZChub2RlLmNoaWxkcmVuLCBjaGlsZHJlbilcblxuICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgIG5vZGUuY29udGVudCA9IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVufVxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5KHByb3BlcnRpZXMsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgaW5mb1xuICAgIHZhciBwcm9wZXJ0eVxuICAgIHZhciByZXN1bHRcblxuICAgIC8vIElnbm9yZSBudWxseSBhbmQgTmFOIHZhbHVlcy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZm8gPSBmaW5kKHNjaGVtYSwga2V5KVxuICAgIHByb3BlcnR5ID0gaW5mby5wcm9wZXJ0eVxuICAgIHJlc3VsdCA9IHZhbHVlXG5cbiAgICAvLyBIYW5kbGUgbGlzdCB2YWx1ZXMuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5mby5zcGFjZVNlcGFyYXRlZCkge1xuICAgICAgICByZXN1bHQgPSBzcGFjZXMocmVzdWx0KVxuICAgICAgfSBlbHNlIGlmIChpbmZvLmNvbW1hU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbW1hcyhyZXN1bHQpXG4gICAgICB9IGVsc2UgaWYgKGluZm8uY29tbWFPclNwYWNlU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHNwYWNlcyhjb21tYXMocmVzdWx0KS5qb2luKCcgJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWNjZXB0IGBvYmplY3RgIG9uIHN0eWxlLlxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSBzdHlsZShyZXN1bHQpXG4gICAgfVxuXG4gICAgLy8gQ2xhc3MtbmFtZXMgKHdoaWNoIGNhbiBiZSBhZGRlZCBib3RoIG9uIHRoZSBgc2VsZWN0b3JgIGFuZCBoZXJlKS5cbiAgICBpZiAocHJvcGVydHkgPT09ICdjbGFzc05hbWUnICYmIHByb3BlcnRpZXMuY2xhc3NOYW1lKSB7XG4gICAgICByZXN1bHQgPSBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5jb25jYXQocmVzdWx0KVxuICAgIH1cblxuICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gcGFyc2VQcmltaXRpdmVzKGluZm8sIHByb3BlcnR5LCByZXN1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZHJlbih2YWx1ZSwgbm9kZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAnbGVuZ3RoJyBpbiB2YWx1ZSB8fFxuICAgIGlzTm9kZShub2RlLnRhZ05hbWUsIHZhbHVlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh0YWdOYW1lLCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHZhbHVlLnR5cGVcblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0JyB8fCAhdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRyZW4gPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKClcblxuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZSAhPT0gJ21lbnUnICYmXG4gICAgICB0eXBlICE9PSAnc3VibWl0JyAmJlxuICAgICAgdHlwZSAhPT0gJ3Jlc2V0JyAmJlxuICAgICAgdHlwZSAhPT0gJ2J1dHRvbidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChub2RlcywgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogU3RyaW5nKHZhbHVlKX0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIGluZGV4ID0gLTFcbiAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhZGRDaGlsZChub2RlcywgdmFsdWVbaW5kZXhdKVxuICAgIH1cblxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgISgndHlwZScgaW4gdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub2Rlcywgb3Igc3RyaW5nLCBnb3QgYCcgKyB2YWx1ZSArICdgJylcbiAgfVxuXG4gIG5vZGVzLnB1c2godmFsdWUpXG59XG5cbi8vIFBhcnNlIGEgKGxpc3Qgb2YpIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZXMoaW5mbywgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICEoJ2xlbmd0aCcgaW4gdmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlUHJpbWl0aXZlKGluZm8sIG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZVtpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIFBhcnNlIGEgc2luZ2xlIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdmFsdWVcblxuICBpZiAoaW5mby5udW1iZXIgfHwgaW5mby5wb3NpdGl2ZU51bWJlcikge1xuICAgIGlmICghaXNOYU4ocmVzdWx0KSAmJiByZXN1bHQgIT09ICcnKSB7XG4gICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0KVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvLmJvb2xlYW4gfHwgaW5mby5vdmVybG9hZGVkQm9vbGVhbikge1xuICAgIC8vIEFjY2VwdCBgYm9vbGVhbmAgYW5kIGBzdHJpbmdgLlxuICAgIGlmIChcbiAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnICYmXG4gICAgICAocmVzdWx0ID09PSAnJyB8fCBub3JtYWxpemUodmFsdWUpID09PSBub3JtYWxpemUobmFtZSkpXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzdHlsZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVba2V5XV0uam9pbignOiAnKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignOyAnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGp1c3RNYXAodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHQgPSB7fVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdFt2YWx1ZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNjaGVtYSA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2h0bWwnKVxudmFyIGZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnknKVxuXG52YXIgaHRtbCA9IGZhY3Rvcnkoc2NoZW1hLCAnZGl2Jylcbmh0bWwuZGlzcGxheU5hbWUgPSAnaHRtbCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2h0bWwnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBpbnZhbGlkID0gcmVxdWlyZSgnY2hhcmFjdGVyLXJlZmVyZW5jZS1pbnZhbGlkJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGVjb2RlRW50aXR5ID0gcmVxdWlyZSgnLi9kZWNvZGUtZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUVudGl0aWVzXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciBub29wID0gRnVuY3Rpb24ucHJvdG90eXBlXG5cbi8vIERlZmF1bHQgc2V0dGluZ3MuXG52YXIgZGVmYXVsdHMgPSB7XG4gIHdhcm5pbmc6IG51bGwsXG4gIHJlZmVyZW5jZTogbnVsbCxcbiAgdGV4dDogbnVsbCxcbiAgd2FybmluZ0NvbnRleHQ6IG51bGwsXG4gIHJlZmVyZW5jZUNvbnRleHQ6IG51bGwsXG4gIHRleHRDb250ZXh0OiBudWxsLFxuICBwb3NpdGlvbjoge30sXG4gIGFkZGl0aW9uYWw6IG51bGwsXG4gIGF0dHJpYnV0ZTogZmFsc2UsXG4gIG5vblRlcm1pbmF0ZWQ6IHRydWVcbn1cblxuLy8gQ2hhcmFjdGVycy5cbnZhciB0YWIgPSA5IC8vICdcXHQnXG52YXIgbGluZUZlZWQgPSAxMCAvLyAnXFxuJ1xudmFyIGZvcm1GZWVkID0gMTIgLy8gICdcXGYnXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAgJyYnXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gICc8J1xudmFyIGVxdWFsc1RvID0gNjEgLy8gICc9J1xudmFyIG51bWJlclNpZ24gPSAzNSAvLyAgJyMnXG52YXIgdXBwZXJjYXNlWCA9IDg4IC8vICAnWCdcbnZhciBsb3dlcmNhc2VYID0gMTIwIC8vICAneCdcbnZhciByZXBsYWNlbWVudENoYXJhY3RlciA9IDY1NTMzIC8vICfvv70nXG5cbi8vIFJlZmVyZW5jZSB0eXBlcy5cbnZhciBuYW1lID0gJ25hbWVkJ1xudmFyIGhleGEgPSAnaGV4YWRlY2ltYWwnXG52YXIgZGVjaSA9ICdkZWNpbWFsJ1xuXG4vLyBNYXAgb2YgYmFzZXMuXG52YXIgYmFzZXMgPSB7fVxuXG5iYXNlc1toZXhhXSA9IDE2XG5iYXNlc1tkZWNpXSA9IDEwXG5cbi8vIE1hcCBvZiB0eXBlcyB0byB0ZXN0cy5cbi8vIEVhY2ggdHlwZSBvZiBjaGFyYWN0ZXIgcmVmZXJlbmNlIGFjY2VwdHMgZGlmZmVyZW50IGNoYXJhY3RlcnMuXG4vLyBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlY3Qgd2hldGhlciBhIHJlZmVyZW5jZSBoYXMgZW5kZWQgKGFzIHRoZSBzZW1pY29sb25cbi8vIGlzIG5vdCBzdHJpY3RseSBuZWVkZWQpLlxudmFyIHRlc3RzID0ge31cblxudGVzdHNbbmFtZV0gPSBhbHBoYW51bWVyaWNhbFxudGVzdHNbZGVjaV0gPSBkZWNpbWFsXG50ZXN0c1toZXhhXSA9IGhleGFkZWNpbWFsXG5cbi8vIFdhcm5pbmcgdHlwZXMuXG52YXIgbmFtZWROb3RUZXJtaW5hdGVkID0gMVxudmFyIG51bWVyaWNOb3RUZXJtaW5hdGVkID0gMlxudmFyIG5hbWVkRW1wdHkgPSAzXG52YXIgbnVtZXJpY0VtcHR5ID0gNFxudmFyIG5hbWVkVW5rbm93biA9IDVcbnZhciBudW1lcmljRGlzYWxsb3dlZCA9IDZcbnZhciBudW1lcmljUHJvaGliaXRlZCA9IDdcblxuLy8gV2FybmluZyBtZXNzYWdlcy5cbnZhciBtZXNzYWdlcyA9IHt9XG5cbm1lc3NhZ2VzW25hbWVkTm90VGVybWluYXRlZF0gPVxuICAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbnVtZXJpY05vdFRlcm1pbmF0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbmFtZWRFbXB0eV0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbnVtZXJpY0VtcHR5XSA9ICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW25hbWVkVW5rbm93bl0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSBrbm93bidcbm1lc3NhZ2VzW251bWVyaWNEaXNhbGxvd2VkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBkaXNhbGxvd2VkJ1xubWVzc2FnZXNbbnVtZXJpY1Byb2hpYml0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIFVuaWNvZGUgcmFuZ2UnXG5cbi8vIFdyYXAgdG8gZW5zdXJlIGNsZWFuIHBhcmFtZXRlcnMgYXJlIGdpdmVuIHRvIGBwYXJzZWAuXG5mdW5jdGlvbiBwYXJzZUVudGl0aWVzKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHt9XG4gIHZhciBvcHRpb25cbiAgdmFyIGtleVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBvcHRpb24gPSBvcHRpb25zW2tleV1cbiAgICBzZXR0aW5nc1trZXldID1cbiAgICAgIG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzW2tleV0gOiBvcHRpb25cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgc2V0dGluZ3MucG9zaXRpb24uc3RhcnQpIHtcbiAgICBzZXR0aW5ncy5pbmRlbnQgPSBzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgW11cbiAgICBzZXR0aW5ncy5wb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0XG4gIH1cblxuICByZXR1cm4gcGFyc2UodmFsdWUsIHNldHRpbmdzKVxufVxuXG4vLyBQYXJzZSBlbnRpdGllcy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpIHtcbiAgdmFyIGFkZGl0aW9uYWwgPSBzZXR0aW5ncy5hZGRpdGlvbmFsXG4gIHZhciBub25UZXJtaW5hdGVkID0gc2V0dGluZ3Mubm9uVGVybWluYXRlZFxuICB2YXIgaGFuZGxlVGV4dCA9IHNldHRpbmdzLnRleHRcbiAgdmFyIGhhbmRsZVJlZmVyZW5jZSA9IHNldHRpbmdzLnJlZmVyZW5jZVxuICB2YXIgaGFuZGxlV2FybmluZyA9IHNldHRpbmdzLndhcm5pbmdcbiAgdmFyIHRleHRDb250ZXh0ID0gc2V0dGluZ3MudGV4dENvbnRleHRcbiAgdmFyIHJlZmVyZW5jZUNvbnRleHQgPSBzZXR0aW5ncy5yZWZlcmVuY2VDb250ZXh0XG4gIHZhciB3YXJuaW5nQ29udGV4dCA9IHNldHRpbmdzLndhcm5pbmdDb250ZXh0XG4gIHZhciBwb3MgPSBzZXR0aW5ncy5wb3NpdGlvblxuICB2YXIgaW5kZW50ID0gc2V0dGluZ3MuaW5kZW50IHx8IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGluZXMgPSAtMVxuICB2YXIgY29sdW1uID0gcG9zLmNvbHVtbiB8fCAxXG4gIHZhciBsaW5lID0gcG9zLmxpbmUgfHwgMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGVudGl0eUNoYXJhY3RlcnNcbiAgdmFyIG5hbWVkRW50aXR5XG4gIHZhciB0ZXJtaW5hdGVkXG4gIHZhciBjaGFyYWN0ZXJzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlZmVyZW5jZVxuICB2YXIgZm9sbG93aW5nXG4gIHZhciB3YXJuaW5nXG4gIHZhciByZWFzb25cbiAgdmFyIG91dHB1dFxuICB2YXIgZW50aXR5XG4gIHZhciBiZWdpblxuICB2YXIgc3RhcnRcbiAgdmFyIHR5cGVcbiAgdmFyIHRlc3RcbiAgdmFyIHByZXZcbiAgdmFyIG5leHRcbiAgdmFyIGRpZmZcbiAgdmFyIGVuZFxuXG4gIGlmICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRpdGlvbmFsID0gYWRkaXRpb25hbC5jaGFyQ29kZUF0KDApXG4gIH1cblxuICAvLyBDYWNoZSB0aGUgY3VycmVudCBwb2ludC5cbiAgcHJldiA9IG5vdygpXG5cbiAgLy8gV3JhcCBgaGFuZGxlV2FybmluZ2AuXG4gIHdhcm5pbmcgPSBoYW5kbGVXYXJuaW5nID8gcGFyc2VFcnJvciA6IG5vb3BcblxuICAvLyBFbnN1cmUgdGhlIGFsZ29yaXRobSB3YWxrcyBvdmVyIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIHRoZSBlbmQgKGluY2x1c2l2ZSkuXG4gIGluZGV4LS1cbiAgbGVuZ3RoKytcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgd2FzIGEgbmV3bGluZS5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgY29sdW1uID0gaW5kZW50W2xpbmVzXSB8fCAxXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGFtcGVyc2FuZCkge1xuICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZGVwZW5kcyBvbiB0aGUgaWRlbnRpdHkgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgaWYgKFxuICAgICAgICBmb2xsb3dpbmcgPT09IHRhYiB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxpbmVGZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gZm9ybUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBzcGFjZSB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGFtcGVyc2FuZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxlc3NUaGFuIHx8XG4gICAgICAgIGZvbGxvd2luZyAhPT0gZm9sbG93aW5nIHx8XG4gICAgICAgIChhZGRpdGlvbmFsICYmIGZvbGxvd2luZyA9PT0gYWRkaXRpb25hbClcbiAgICAgICkge1xuICAgICAgICAvLyBOb3QgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICAgICAgICAvLyBObyBjaGFyYWN0ZXJzIGFyZSBjb25zdW1lZCwgYW5kIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGFuIGVycm9yLCBlaXRoZXIuXG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGJlZ2luID0gc3RhcnRcbiAgICAgIGVuZCA9IHN0YXJ0XG5cbiAgICAgIGlmIChmb2xsb3dpbmcgPT09IG51bWJlclNpZ24pIHtcbiAgICAgICAgLy8gTnVtZXJpY2FsIGVudGl0eS5cbiAgICAgICAgZW5kID0gKytiZWdpblxuXG4gICAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZnVydGhlciBkZXBlbmRzIG9uIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gdXBwZXJjYXNlWCB8fCBmb2xsb3dpbmcgPT09IGxvd2VyY2FzZVgpIHtcbiAgICAgICAgICAvLyBBU0NJSSBoZXggZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBoZXhhXG4gICAgICAgICAgZW5kID0gKytiZWdpblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFTQ0lJIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gZGVjaVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOYW1lZCBlbnRpdHkuXG4gICAgICAgIHR5cGUgPSBuYW1lXG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSAnJ1xuICAgICAgZW50aXR5ID0gJydcbiAgICAgIGNoYXJhY3RlcnMgPSAnJ1xuICAgICAgdGVzdCA9IHRlc3RzW3R5cGVdXG4gICAgICBlbmQtLVxuXG4gICAgICB3aGlsZSAoKytlbmQgPCBsZW5ndGgpIHtcbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKCF0ZXN0KGZvbGxvd2luZykpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVycyArPSBmcm9tQ2hhckNvZGUoZm9sbG93aW5nKVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBtYXRjaCBhIGxlZ2FjeSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIHNvLCB3ZSBjYWNoZSB0aGF0IGFzIHRoZSBsYXN0IHZpYWJsZSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBkbyBub3QgbmVlZCB0byB3YWxrIGJhY2t3YXJkcyBsYXRlci5cbiAgICAgICAgaWYgKHR5cGUgPT09IG5hbWUgJiYgb3duLmNhbGwobGVnYWN5LCBjaGFyYWN0ZXJzKSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbGVnYWN5W2NoYXJhY3RlcnNdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGVybWluYXRlZCA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gc2VtaWNvbG9uXG5cbiAgICAgIGlmICh0ZXJtaW5hdGVkKSB7XG4gICAgICAgIGVuZCsrXG5cbiAgICAgICAgbmFtZWRFbnRpdHkgPSB0eXBlID09PSBuYW1lID8gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIDogZmFsc2VcblxuICAgICAgICBpZiAobmFtZWRFbnRpdHkpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IG5hbWVkRW50aXR5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGlmZiA9IDEgKyBlbmQgLSBzdGFydFxuXG4gICAgICBpZiAoIXRlcm1pbmF0ZWQgJiYgIW5vblRlcm1pbmF0ZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgICAgIC8vIEFuIGVtcHR5IChwb3NzaWJsZSkgZW50aXR5IGlzIHZhbGlkLCB1bmxlc3MgaXTigJlzIG51bWVyaWMgKHRodXMgYW5cbiAgICAgICAgLy8gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFuIG9jdG90aG9ycCkuXG4gICAgICAgIGlmICh0eXBlICE9PSBuYW1lKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljRW1wdHksIGRpZmYpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyBBbiBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW55dGhpbmcgdW5rbm93biwgYW5kIG5vdCB0ZXJtaW5hdGVkLCBpc1xuICAgICAgICAvLyBpbnZhbGlkLlxuICAgICAgICBpZiAodGVybWluYXRlZCAmJiAhZW50aXR5KSB7XG4gICAgICAgICAgd2FybmluZyhuYW1lZFVua25vd24sIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmVzIHNvbWV0aGluZyBhZnRlciBhbiBlbnRpdHkgbmFtZSB3aGljaCBpcyBub3Qga25vd24sIGNhcFxuICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAgaWYgKGVudGl0eUNoYXJhY3RlcnMgIT09IGNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGVuZCA9IGJlZ2luICsgZW50aXR5Q2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgIGRpZmYgPSAxICsgZW5kIC0gYmVnaW5cbiAgICAgICAgICAgIHRlcm1pbmF0ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgbm90IHRlcm1pbmF0ZWQsIHdhcm4uXG4gICAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgICByZWFzb24gPSBlbnRpdHlDaGFyYWN0ZXJzID8gbmFtZWROb3RUZXJtaW5hdGVkIDogbmFtZWRFbXB0eVxuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgICAgICAgIGlmIChmb2xsb3dpbmcgPT09IGVxdWFsc1RvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhbnVtZXJpY2FsKGZvbGxvd2luZykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZSA9IGVudGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgLy8gQWxsIG5vbi10ZXJtaW5hdGVkIG51bWVyaWMgZW50aXRpZXMgYXJlIG5vdCByZW5kZXJlZCwgYW5kIHRyaWdnZXIgYVxuICAgICAgICAgIC8vIHdhcm5pbmcuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljTm90VGVybWluYXRlZCwgZGlmZilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGVybWluYXRlZCBhbmQgbnVtYmVyLCBwYXJzZSBhcyBlaXRoZXIgaGV4YWRlY2ltYWwgb3IgZGVjaW1hbC5cbiAgICAgICAgcmVmZXJlbmNlID0gcGFyc2VJbnQoY2hhcmFjdGVycywgYmFzZXNbdHlwZV0pXG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBwcm9oaWJpdGVkLCBhbmQgcmVwbGFjZVxuICAgICAgICAvLyB3aXRoIHJlcGxhY2VtZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKHByb2hpYml0ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY1Byb2hpYml0ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gZnJvbUNoYXJDb2RlKHJlcGxhY2VtZW50Q2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZW5jZSBpbiBpbnZhbGlkKSB7XG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBkaXNhbGxvd2VkLCBhbmQgcmVwbGFjZVxuICAgICAgICAgIC8vIGJ5IGFuIGFsdGVybmF0aXZlLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gaW52YWxpZFtyZWZlcmVuY2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUGFyc2UgdGhlIG51bWJlci5cbiAgICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgICAgICAgaWYgKGRpc2FsbG93ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdHJpbmdpZnkgdGhlIG51bWJlci5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlID4gMHhmZmZmKSB7XG4gICAgICAgICAgICByZWZlcmVuY2UgLT0gMHgxMDAwMFxuICAgICAgICAgICAgb3V0cHV0ICs9IGZyb21DaGFyQ29kZSgocmVmZXJlbmNlID4+PiAoMTAgJiAweDNmZikpIHwgMHhkODAwKVxuICAgICAgICAgICAgcmVmZXJlbmNlID0gMHhkYzAwIHwgKHJlZmVyZW5jZSAmIDB4M2ZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlZmVyZW5jZSA9IG91dHB1dCArIGZyb21DaGFyQ29kZShyZWZlcmVuY2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm91bmQgaXQhXG4gICAgICAvLyBGaXJzdCBlYXQgdGhlIHF1ZXVlZCBjaGFyYWN0ZXJzIGFzIG5vcm1hbCB0ZXh0LCB0aGVuIGVhdCBhbiBlbnRpdHkuXG4gICAgICBpZiAocmVmZXJlbmNlKSB7XG4gICAgICAgIGZsdXNoKClcblxuICAgICAgICBwcmV2ID0gbm93KClcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICAgIGNvbHVtbiArPSBlbmQgLSBzdGFydCArIDFcbiAgICAgICAgcmVzdWx0LnB1c2gocmVmZXJlbmNlKVxuICAgICAgICBuZXh0ID0gbm93KClcbiAgICAgICAgbmV4dC5vZmZzZXQrK1xuXG4gICAgICAgIGlmIChoYW5kbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBoYW5kbGVSZWZlcmVuY2UuY2FsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICB7c3RhcnQ6IHByZXYsIGVuZDogbmV4dH0sXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gbmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgY291bGQgbm90IGZpbmQgYSByZWZlcmVuY2UsIHF1ZXVlIHRoZSBjaGVja2VkIGNoYXJhY3RlcnMgKGFzXG4gICAgICAgIC8vIG5vcm1hbCBjaGFyYWN0ZXJzKSwgYW5kIG1vdmUgdGhlIHBvaW50ZXIgdG8gdGhlaXIgZW5kLlxuICAgICAgICAvLyBUaGlzIGlzIHBvc3NpYmxlIGJlY2F1c2Ugd2UgY2FuIGJlIGNlcnRhaW4gbmVpdGhlciBuZXdsaW5lcyBub3JcbiAgICAgICAgLy8gYW1wZXJzYW5kcyBhcmUgaW5jbHVkZWQuXG4gICAgICAgIGNoYXJhY3RlcnMgPSB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyc1xuICAgICAgICBjb2x1bW4gKz0gY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBhbnl0aGluZyBvdGhlciB0aGFuIGFuIGFtcGVyc2FuZCwgaW5jbHVkaW5nIG5ld2xpbmVzIGFuZCBFT0YuXG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gMTAgLy8gTGluZSBmZWVkXG4gICAgICApIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxpbmVzKytcbiAgICAgICAgY29sdW1uID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsdXNoKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHJlZHVjZWQgbm9kZXMsIGFuZCBhbnkgcG9zc2libGUgd2FybmluZ3MuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICAvLyBHZXQgY3VycmVudCBwb3NpdGlvbi5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICBvZmZzZXQ6IGluZGV4ICsgKHBvcy5vZmZzZXQgfHwgMClcbiAgICB9XG4gIH1cblxuICAvLyDigJxUaHJvd+KAnSBhIHBhcnNlLWVycm9yOiBhIHdhcm5pbmcuXG4gIGZ1bmN0aW9uIHBhcnNlRXJyb3IoY29kZSwgb2Zmc2V0KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbm93KClcblxuICAgIHBvc2l0aW9uLmNvbHVtbiArPSBvZmZzZXRcbiAgICBwb3NpdGlvbi5vZmZzZXQgKz0gb2Zmc2V0XG5cbiAgICBoYW5kbGVXYXJuaW5nLmNhbGwod2FybmluZ0NvbnRleHQsIG1lc3NhZ2VzW2NvZGVdLCBwb3NpdGlvbiwgY29kZSlcbiAgfVxuXG4gIC8vIEZsdXNoIGBxdWV1ZWAgKG5vcm1hbCB0ZXh0KS5cbiAgLy8gTWFjcm8gaW52b2tlZCBiZWZvcmUgZWFjaCBlbnRpdHkgYW5kIGF0IHRoZSBlbmQgb2YgYHZhbHVlYC5cbiAgLy8gRG9lcyBub3RoaW5nIHdoZW4gYHF1ZXVlYCBpcyBlbXB0eS5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICByZXN1bHQucHVzaChxdWV1ZSlcblxuICAgICAgaWYgKGhhbmRsZVRleHQpIHtcbiAgICAgICAgaGFuZGxlVGV4dC5jYWxsKHRleHRDb250ZXh0LCBxdWV1ZSwge3N0YXJ0OiBwcmV2LCBlbmQ6IG5vdygpfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSB1bmljb2RlIHJhbmdlLlxuZnVuY3Rpb24gcHJvaGliaXRlZChjb2RlKSB7XG4gIHJldHVybiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHx8IGNvZGUgPiAweDEwZmZmZlxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBkaXNhbGxvd2VkLlxuZnVuY3Rpb24gZGlzYWxsb3dlZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMHgwMDAxICYmIGNvZGUgPD0gMHgwMDA4KSB8fFxuICAgIGNvZGUgPT09IDB4MDAwYiB8fFxuICAgIChjb2RlID49IDB4MDAwZCAmJiBjb2RlIDw9IDB4MDAxZikgfHxcbiAgICAoY29kZSA+PSAweDAwN2YgJiYgY29kZSA8PSAweDAwOWYpIHx8XG4gICAgKGNvZGUgPj0gMHhmZGQwICYmIGNvZGUgPD0gMHhmZGVmKSB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZmIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmVcbiAgKVxufVxuIiwidmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHQ6IHt9ICAgLy8gaWYgaW4gbm9kZSBqc1xuXHQpO1xuXG4vKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqIE1JVCBsaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwL1xuICogQGF1dGhvciBMZWEgVmVyb3UgaHR0cDovL2xlYS52ZXJvdS5tZVxuICovXG5cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpe1xuXG4vLyBQcml2YXRlIGhlbHBlciB2YXJzXG52YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xudmFyIHVuaXF1ZUlkID0gMDtcblxudmFyIF8gPSB7XG5cdG1hbnVhbDogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20ubWFudWFsLFxuXHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblx0dXRpbDoge1xuXHRcdGVuY29kZTogZnVuY3Rpb24gKHRva2Vucykge1xuXHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgVG9rZW4odG9rZW5zLnR5cGUsIF8udXRpbC5lbmNvZGUodG9rZW5zLmNvbnRlbnQpLCB0b2tlbnMuYWxpYXMpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5tYXAoXy51dGlsLmVuY29kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdH0sXG5cblx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0fSxcblxuXHRcdC8vIERlZXAgY2xvbmUgYSBsYW5ndWFnZSBkZWZpbml0aW9uIChlLmcuIHRvIGV4dGVuZCBpdClcblx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdHZhciBjbG9uZSwgaWQsIHR5cGUgPSBfLnV0aWwudHlwZShvKTtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBjbG9uZTtcblxuXHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bGFuZ3VhZ2VzOiB7XG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluc2VydCBhIHRva2VuIGJlZm9yZSBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgbGl0ZXJhbFxuXHRcdCAqIEFzIHRoaXMgbmVlZHMgdG8gcmVjcmVhdGUgdGhlIG9iamVjdCAod2UgY2Fubm90IGFjdHVhbGx5IGluc2VydCBiZWZvcmUga2V5cyBpbiBvYmplY3QgbGl0ZXJhbHMpLFxuXHRcdCAqIHdlIGNhbm5vdCBqdXN0IHByb3ZpZGUgYW4gb2JqZWN0LCB3ZSBuZWVkIGFuIG9iamVjdCBhbmQgYSBrZXkuXG5cdFx0ICogQHBhcmFtIGluc2lkZSBUaGUga2V5IChvciBsYW5ndWFnZSBpZCkgb2YgdGhlIHBhcmVudFxuXHRcdCAqIEBwYXJhbSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdCAqIEBwYXJhbSBpbnNlcnQgT2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyB0byBpbnNlcnRcblx0XHQgKiBAcGFyYW0gcm9vdCBUaGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYGluc2lkZWAuIElmIGVxdWFsIHRvIFByaXNtLmxhbmd1YWdlcywgaXQgY2FuIGJlIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0cm9vdCA9IHJvb3QgfHwgXy5sYW5ndWFnZXM7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldLFxuXHRcdFx0XHRcdCAgICBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiB7fSxcblxuXHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdH0sXG5cblx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdHNlbGVjdG9yOiAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnXG5cdFx0fTtcblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZW52KTtcblxuXHRcdHZhciBlbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3Rvcik7XG5cblx0XHRmb3IgKHZhciBpPTAsIGVsZW1lbnQ7IGVsZW1lbnQgPSBlbGVtZW50c1tpKytdOykge1xuXHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBhc3luYywgY2FsbGJhY2spIHtcblx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0dmFyIGxhbmd1YWdlID0gJ25vbmUnLCBncmFtbWFyLCBwYXJlbnQgPSBlbGVtZW50O1xuXG5cdFx0d2hpbGUgKHBhcmVudCAmJiAhbGFuZy50ZXN0KHBhcmVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRsYW5ndWFnZSA9IChwYXJlbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssJ25vbmUnXSlbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRcdGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdFx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIHBhcmVudCwgZm9yIHN0eWxpbmdcblx0XHRcdHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYgKC9wcmUvaS50ZXN0KHBhcmVudC5ub2RlTmFtZSkpIHtcblx0XHRcdFx0cGFyZW50LmNsYXNzTmFtZSA9IHBhcmVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2UsXG5cdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0Y29kZTogY29kZVxuXHRcdH07XG5cblx0XHR2YXIgaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlID0gZnVuY3Rpb24gKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1pbnNlcnQnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdF8uaG9va3MucnVuKCdjb21wbGV0ZScsIGVudik7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXNhbml0eS1jaGVjaycsIGVudik7XG5cblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0dmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXy5maWxlbmFtZSk7XG5cblx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdH07XG5cblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0fSxcblxuXHRtYXRjaEdyYW1tYXI6IGZ1bmN0aW9uICh0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGluZGV4LCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG5cdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0aWYoIWdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pIHx8ICFncmFtbWFyW3Rva2VuXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRva2VuID09IHRhcmdldCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0cGF0dGVybnMgPSAoXy51dGlsLnR5cGUocGF0dGVybnMpID09PSBcIkFycmF5XCIpID8gcGF0dGVybnMgOiBbcGF0dGVybnNdO1xuXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBhdHRlcm5zLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybnNbal0sXG5cdFx0XHRcdFx0aW5zaWRlID0gcGF0dGVybi5pbnNpZGUsXG5cdFx0XHRcdFx0bG9va2JlaGluZCA9ICEhcGF0dGVybi5sb29rYmVoaW5kLFxuXHRcdFx0XHRcdGdyZWVkeSA9ICEhcGF0dGVybi5ncmVlZHksXG5cdFx0XHRcdFx0bG9va2JlaGluZExlbmd0aCA9IDAsXG5cdFx0XHRcdFx0YWxpYXMgPSBwYXR0ZXJuLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm4ucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltdXldKiQvKVswXTtcblx0XHRcdFx0XHRwYXR0ZXJuLnBhdHRlcm4gPSBSZWdFeHAocGF0dGVybi5wYXR0ZXJuLnNvdXJjZSwgZmxhZ3MgKyBcImdcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXR0ZXJuID0gcGF0dGVybi5wYXR0ZXJuIHx8IHBhdHRlcm47XG5cblx0XHRcdFx0Ly8gRG9u4oCZdCBjYWNoZSBsZW5ndGggYXMgaXQgY2hhbmdlcyBkdXJpbmcgdGhlIGxvb3Bcblx0XHRcdFx0Zm9yICh2YXIgaSA9IGluZGV4LCBwb3MgPSBzdGFydFBvczsgaSA8IHN0cmFyci5sZW5ndGg7IHBvcyArPSBzdHJhcnJbaV0ubGVuZ3RoLCArK2kpIHtcblxuXHRcdFx0XHRcdHZhciBzdHIgPSBzdHJhcnJbaV07XG5cblx0XHRcdFx0XHRpZiAoc3RyYXJyLmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSAmJiBpICE9IHN0cmFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyAobG9va2JlaGluZCA/IG1hdGNoWzFdLmxlbmd0aCA6IDApLFxuXHRcdFx0XHRcdFx0ICAgIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsXG5cdFx0XHRcdFx0XHQgICAgayA9IGksXG5cdFx0XHRcdFx0XHQgICAgcCA9IHBvcztcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbGVuID0gc3RyYXJyLmxlbmd0aDsgayA8IGxlbiAmJiAocCA8IHRvIHx8ICghc3RyYXJyW2tdLnR5cGUgJiYgIXN0cmFycltrIC0gMV0uZ3JlZWR5KSk7ICsraykge1xuXHRcdFx0XHRcdFx0XHRwICs9IHN0cmFycltrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdC8vIE1vdmUgdGhlIGluZGV4IGkgdG8gdGhlIGVsZW1lbnQgaW4gc3RyYXJyIHRoYXQgaXMgY2xvc2VzdCB0byBmcm9tXG5cdFx0XHRcdFx0XHRcdGlmIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0XHQrK2k7XG5cdFx0XHRcdFx0XHRcdFx0cG9zID0gcDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJZiBzdHJhcnJbaV0gaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0XHRpZiAoc3RyYXJyW2ldIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE51bWJlciBvZiB0b2tlbnMgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdFx0ZGVsTnVtID0gayAtIGk7XG5cdFx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0XHRtYXRjaC5pbmRleCAtPSBwb3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRcdFx0XHRcdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHN0ciksXG5cdFx0XHRcdFx0XHRcdGRlbE51bSA9IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0aWYgKG9uZXNob3QpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGxvb2tiZWhpbmQpIHtcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSBtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleCArIGxvb2tiZWhpbmRMZW5ndGgsXG5cdFx0XHRcdFx0ICAgIG1hdGNoID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCksXG5cdFx0XHRcdFx0ICAgIHRvID0gZnJvbSArIG1hdGNoLmxlbmd0aCxcblx0XHRcdFx0XHQgICAgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pLFxuXHRcdFx0XHRcdCAgICBhZnRlciA9IHN0ci5zbGljZSh0byk7XG5cblx0XHRcdFx0XHR2YXIgYXJncyA9IFtpLCBkZWxOdW1dO1xuXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0cG9zICs9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRhcmdzLnB1c2goYmVmb3JlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgd3JhcHBlZCA9IG5ldyBUb2tlbih0b2tlbiwgaW5zaWRlPyBfLnRva2VuaXplKG1hdGNoLCBpbnNpZGUpIDogbWF0Y2gsIGFsaWFzLCBtYXRjaCwgZ3JlZWR5KTtcblxuXHRcdFx0XHRcdGFyZ3MucHVzaCh3cmFwcGVkKTtcblxuXHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGFmdGVyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHN0cmFyciwgYXJncyk7XG5cblx0XHRcdFx0XHRpZiAoZGVsTnVtICE9IDEpXG5cdFx0XHRcdFx0XHRfLm1hdGNoR3JhbW1hcih0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGksIHBvcywgdHJ1ZSwgdG9rZW4pO1xuXG5cdFx0XHRcdFx0aWYgKG9uZXNob3QpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHR0b2tlbml6ZTogZnVuY3Rpb24odGV4dCwgZ3JhbW1hcikge1xuXHRcdHZhciBzdHJhcnIgPSBbdGV4dF07XG5cblx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblxuXHRcdGlmIChyZXN0KSB7XG5cdFx0XHRmb3IgKHZhciB0b2tlbiBpbiByZXN0KSB7XG5cdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHR9XG5cblx0XHRcdGRlbGV0ZSBncmFtbWFyLnJlc3Q7XG5cdFx0fVxuXG5cdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCAwLCAwLCBmYWxzZSk7XG5cblx0XHRyZXR1cm4gc3RyYXJyO1xuXHR9LFxuXG5cdGhvb2tzOiB7XG5cdFx0YWxsOiB7fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0aG9va3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdHJ1bjogZnVuY3Rpb24gKG5hbWUsIGVudikge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGk9MCwgY2FsbGJhY2s7IGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK107KSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdFRva2VuOiBUb2tlblxufTtcblxuX3NlbGYuUHJpc20gPSBfO1xuXG5mdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0ciwgZ3JlZWR5KSB7XG5cdHRoaXMudHlwZSA9IHR5cGU7XG5cdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdHRoaXMuYWxpYXMgPSBhbGlhcztcblx0Ly8gQ29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tXG5cdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgXCJcIikubGVuZ3RofDA7XG5cdHRoaXMuZ3JlZWR5ID0gISFncmVlZHk7XG59XG5cblRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKG8sIGxhbmd1YWdlKSB7XG5cdGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBvO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkobykpIHtcblx0XHRyZXR1cm4gby5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShlbGVtZW50LCBsYW5ndWFnZSk7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgZW52ID0ge1xuXHRcdHR5cGU6IG8udHlwZSxcblx0XHRjb250ZW50OiBUb2tlbi5zdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0dGFnOiAnc3BhbicsXG5cdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdH07XG5cblx0aWYgKG8uYWxpYXMpIHtcblx0XHR2YXIgYWxpYXNlcyA9IEFycmF5LmlzQXJyYXkoby5hbGlhcykgPyBvLmFsaWFzIDogW28uYWxpYXNdO1xuXHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVudi5jbGFzc2VzLCBhbGlhc2VzKTtcblx0fVxuXG5cdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHR2YXIgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKGVudi5hdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24obmFtZSkge1xuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdH0pLmpvaW4oJyAnKTtcblxuXHRyZXR1cm4gJzwnICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbignICcpICsgJ1wiJyArIChhdHRyaWJ1dGVzID8gJyAnICsgYXR0cmlidXRlcyA6ICcnKSArICc+JyArIGVudi5jb250ZW50ICsgJzwvJyArIGVudi50YWcgKyAnPic7XG59O1xuXG5pZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdC8vIGluIE5vZGUuanNcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHQvLyBJbiB3b3JrZXJcblx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSxcblx0XHRcdFx0bGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGUgPSBtZXNzYWdlLmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG5cdHJldHVybiBfO1xufVxuXG4vL0dldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG52YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpKS5wb3AoKTtcblxuaWYgKHNjcmlwdCkge1xuXHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRpZiAoIV8ubWFudWFsICYmICFzY3JpcHQuaGFzQXR0cmlidXRlKCdkYXRhLW1hbnVhbCcpKSB7XG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcblx0XHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXy5oaWdobGlnaHRBbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoXy5oaWdobGlnaHRBbGwsIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgXy5oaWdobGlnaHRBbGwpO1xuXHRcdH1cblx0fVxufVxuXG5yZXR1cm4gXztcblxufSkoX3NlbGYpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgZW1wdHkgPSAnJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgd2hpdGVTcGFjZSA9IC9bIFxcdFxcblxcclxcZl0rL2dcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KS50cmltKClcbiAgcmV0dXJuIGlucHV0ID09PSBlbXB0eSA/IFtdIDogaW5wdXQuc3BsaXQod2hpdGVTcGFjZSlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLmpvaW4oc3BhY2UpLnRyaW0oKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==