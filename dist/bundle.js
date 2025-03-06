import React, { useRef, useEffect, useState, useLayoutEffect, useImperativeHandle, forwardRef, Component, createRef, useMemo } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));
	return classnames.exports;
}

var classnamesExports = requireClassnames();
var cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function getDirectionNames(hDirection, vDirection) {
    var camelCase, snakeCase;
    if (hDirection && vDirection) {
        camelCase = "" + hDirection + vDirection[0].toUpperCase() + vDirection.slice(1);
        snakeCase = hDirection + "-" + vDirection;
    }
    else {
        camelCase = hDirection || vDirection;
        snakeCase = hDirection || vDirection;
    }
    return { camelCase: camelCase, snakeCase: snakeCase };
}
function isBlob(url) {
    return /^blob:/.test(url);
}
function isDataUrl(url) {
    return /^data:/.test(url);
}
function isLocal(url) {
    return isBlob(url) || isDataUrl(url);
}
function isCrossOriginURL(url) {
    if (isLocal(url)) {
        return false;
    }
    var pageLocation = window.location;
    var URL_HOST_PATTERN = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/;
    var urlMatch = URL_HOST_PATTERN.exec(url) || [];
    var urlparts = {
        protocol: urlMatch[1] || '',
        host: urlMatch[2] || '',
        port: urlMatch[3] || '',
    };
    var defaultPort = function (protocol) {
        if (protocol === 'http') {
            return 80;
        }
        else {
            return 433;
        }
    };
    var portOf = function (location) {
        return location.port || defaultPort((location.protocol || pageLocation.protocol));
    };
    return !((!urlparts.protocol && !urlparts.host && !urlparts.port) ||
        Boolean(urlparts.protocol &&
            urlparts.protocol == pageLocation.protocol &&
            urlparts.host &&
            urlparts.host == pageLocation.host &&
            urlparts.host &&
            portOf(urlparts) == portOf(pageLocation)));
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function isUndefined(obj) {
    return obj === undefined;
}
var isObject = function (term) {
    return term !== null && typeof term === 'object';
};
// TODO: add the typing
function getOptions(options, defaultScheme, falseScheme) {
    if (falseScheme === void 0) { falseScheme = {}; }
    var result = {};
    if (isObject(options)) {
        Object.keys(defaultScheme).forEach(function (key) {
            if (isUndefined(options[key])) {
                result[key] = defaultScheme[key];
            }
            else if (isObject(defaultScheme[key])) {
                if (isObject(options[key])) {
                    result[key] = getOptions(options[key], defaultScheme[key], falseScheme[key]);
                }
                else {
                    result[key] = options[key] ? defaultScheme[key] : falseScheme[key];
                }
            }
            else if (defaultScheme[key] === true || defaultScheme[key] === false) {
                result[key] = Boolean(options[key]);
            }
            else {
                result[key] = options[key];
            }
        });
        return result;
    }
    else {
        if (options) {
            return defaultScheme;
        }
        else {
            return falseScheme;
        }
    }
}
function parseNumber(number) {
    var parsedNumber = Number(number);
    if (Number.isNaN(parsedNumber)) {
        return number;
    }
    else {
        return parsedNumber;
    }
}
function isBoolean(value) {
    return value === true || value === false;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isNaN$1(value) {
    return value !== value;
}
function isNumeric(value) {
    return ((isNumber(value) && !isNaN$1(value)) ||
        (isString(value) && !Number.isNaN(parseFloat(value)) && isFinite(parseFloat(value))));
}
function distance(firstPoint, secondPoint) {
    return Math.sqrt(Math.pow(firstPoint.left - secondPoint.left, 2) + Math.pow(firstPoint.top - secondPoint.top, 2));
}
function isRoughlyEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 1e-3; }
    return Math.abs(b - a) < tolerance;
}
function isGreater(a, b, tolerance) {
    return isRoughlyEqual(a, b, tolerance) ? false : a > b;
}
function isLower(a, b, tolerance) {
    return isRoughlyEqual(a, b, tolerance) ? false : a < b;
}
function sign(value) {
    var number = +value;
    if (number === 0 || isNaN$1(number)) {
        return number;
    }
    return number > 0 ? 1 : -1;
}
function promiseTimeout(timeout) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
}
// Not performant, small function to reduce the code amount
function deepClone(obj) {
    if (!isObject(obj)) {
        return obj;
    }
    var result = {};
    if (Array.isArray(obj)) {
        result = obj.map(function (item) { return deepClone(item); });
    }
    else {
        Object.keys(obj).forEach(function (key) {
            return (result[key] = deepClone(obj[key]));
        });
    }
    return result;
}
function deepCompare(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 1e-3; }
    if (isNumber(a) && isNumber(b) && isRoughlyEqual(a, b, tolerance))
        return true;
    if (a === b)
        return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor)
            return false;
        var length_1, i = void 0;
        if (Array.isArray(a)) {
            length_1 = a.length;
            if (length_1 != b.length)
                return false;
            for (i = length_1; i-- !== 0;)
                if (!deepCompare(a[i], b[i], tolerance))
                    return false;
            return true;
        }
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        var keys = Object.keys(a);
        length_1 = keys.length;
        if (length_1 !== Object.keys(b).length)
            return false;
        for (i = length_1; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
        for (i = length_1; i-- !== 0;) {
            var key = keys[i];
            if (!deepCompare(a[key], b[key], tolerance))
                return false;
        }
        return true;
    }
    return a !== a && b !== b;
}
function emptyCoordinates() {
    return {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    };
}
function isCardinalDirection(value) {
    return value === 'west' || value === 'south' || value === 'north' || value === 'east';
}
function debounce(callback, delay) {
    var timestamp;
    var timeout;
    function later() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var last = Date.now() - timestamp;
        var delayValue = isFunction(delay) ? delay() : delay || 0;
        if (last < delayValue && last >= 0) {
            timeout = setTimeout(function () { return later.apply(void 0, args); }, delayValue - last);
        }
        else {
            callback.apply(void 0, args);
        }
    }
    function result() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        timestamp = Date.now();
        timeout = setTimeout(function () { return later.apply(void 0, args); }, isFunction(delay) ? delay() : delay || 0);
    }
    result.clear = function () {
        clearTimeout(timeout);
    };
    return result;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ALL_DIRECTIONS = ['left', 'right', 'top', 'bottom'];
var HORIZONTAL_DIRECTIONS$1 = ['left', 'right'];
var VERTICAL_DIRECTIONS$1 = ['top', 'bottom'];

function diff(firstObject, secondObject) {
    return {
        left: firstObject.left - secondObject.left,
        top: firstObject.top - secondObject.top,
    };
}
function getCenter(object) {
    return {
        left: object.left + object.width / 2,
        top: object.top + object.height / 2,
    };
}
function getOppositeSide(side) {
    return {
        left: 'right',
        top: 'bottom',
        right: 'left',
        bottom: 'top',
    }[side];
}
function sizeDistance(a, b) {
    return Math.pow(a.width - b.width, 2) + Math.pow(a.height - b.height, 2);
}
function applyDirections(coordinates, directions) {
    return {
        left: coordinates.left - directions.left,
        top: coordinates.top - directions.top,
        width: coordinates.width + directions.left + directions.right,
        height: coordinates.height + directions.top + directions.bottom,
    };
}
function inverseMove(directions) {
    return {
        left: -directions.left,
        top: -directions.top,
    };
}
function applyMove(object, move) {
    return __assign(__assign({}, object), { left: object.left + move.left, top: object.top + move.top });
}
function coordinatesToPositionRestrictions(coordinates) {
    return {
        left: coordinates.left,
        top: coordinates.top,
        right: coordinates.left + coordinates.width,
        bottom: coordinates.top + coordinates.height,
    };
}
function applyScale(object, factor, center, progress) {
    if (factor !== 1) {
        if ('left' in object || 'top' in object) {
            if (center) {
                var currentCenter = getCenter(object);
                return {
                    width: object.width * factor,
                    height: object.height * factor,
                    left: object.left +
                        (object.width * (1 - factor)) / 2 +
                        (center.left - currentCenter.left) * (1 - factor),
                    top: object.top +
                        (object.height * (1 - factor)) / 2 +
                        (center.top - currentCenter.top) * (1 - factor),
                };
            }
            else {
                return {
                    width: object.width * factor,
                    height: object.height * factor,
                    left: object.left + (object.width * (1 - factor)) / 2,
                    top: object.top + (object.height * (1 - factor)) / 2,
                };
            }
        }
        else {
            return {
                width: object.width * factor,
                height: object.height * factor,
            };
        }
    }
    else {
        return object;
    }
}
function ratio(object) {
    return object.width / object.height;
}
function maxScale(size, restrictions) {
    return Math.min(restrictions.maxWidth ? restrictions.maxWidth / size.width : Infinity, restrictions.maxHeight ? restrictions.maxHeight / size.height : Infinity);
}
function minScale(size, restrictions) {
    return Math.max(restrictions.minWidth ? restrictions.minWidth / size.width : 0, restrictions.minHeight ? restrictions.minHeight / size.height : 0);
}
function getBrokenRatio(currentAspectRatio, aspectRatio) {
    var ratioBroken;
    if (aspectRatio.minimum && isLower(currentAspectRatio, aspectRatio.minimum)) {
        ratioBroken = aspectRatio.minimum;
    }
    else if (aspectRatio.maximum && isGreater(currentAspectRatio, aspectRatio.maximum)) {
        ratioBroken = aspectRatio.maximum;
    }
    return ratioBroken;
}
function fitToSizeRestrictions(coordinates, sizeRestrictions) {
    var aspectRatio = ratio(coordinates);
    var scale = 1;
    if (sizeRestrictions.minWidth > 0 && sizeRestrictions.minHeight > 0) {
        if (aspectRatio > sizeRestrictions.minWidth / sizeRestrictions.minHeight) {
            if (coordinates.height < sizeRestrictions.minHeight) {
                scale = sizeRestrictions.minHeight / coordinates.height;
            }
        }
        else {
            if (coordinates.width < sizeRestrictions.minWidth) {
                scale = sizeRestrictions.minWidth / coordinates.width;
            }
        }
    }
    else if (sizeRestrictions.minWidth > 0) {
        if (coordinates.width < sizeRestrictions.minWidth) {
            scale = sizeRestrictions.minWidth / coordinates.width;
        }
    }
    else if (sizeRestrictions.minHeight > 0) {
        if (coordinates.height < sizeRestrictions.minHeight) {
            scale = sizeRestrictions.minHeight / coordinates.height;
        }
    }
    if (sizeRestrictions.maxWidth < Infinity && sizeRestrictions.maxHeight < Infinity) {
        if (aspectRatio > sizeRestrictions.maxWidth / sizeRestrictions.maxHeight) {
            if (coordinates.width > sizeRestrictions.maxWidth) {
                scale = sizeRestrictions.maxWidth / coordinates.width;
            }
        }
        else {
            if (coordinates.height > sizeRestrictions.maxHeight) {
                scale = sizeRestrictions.maxHeight / coordinates.height;
            }
        }
    }
    else if (sizeRestrictions.maxWidth < Infinity) {
        if (coordinates.width > sizeRestrictions.maxWidth) {
            scale = sizeRestrictions.maxWidth / coordinates.width;
        }
    }
    else if (sizeRestrictions.maxHeight < Infinity) {
        if (coordinates.height > sizeRestrictions.maxHeight) {
            scale = sizeRestrictions.maxHeight / coordinates.height;
        }
    }
    return scale;
}
function getIntersections(object, positionRestrictions) {
    var intersections = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    };
    ALL_DIRECTIONS.forEach(function (direction) {
        var areaLimit = positionRestrictions[direction];
        var objectLimit = coordinatesToPositionRestrictions(object)[direction];
        if (areaLimit !== undefined && objectLimit !== undefined) {
            if (direction === 'left' || direction === 'top') {
                intersections[direction] = Math.max(0, areaLimit - objectLimit);
            }
            else {
                intersections[direction] = Math.max(0, objectLimit - areaLimit);
            }
        }
        else {
            intersections[direction] = 0;
        }
    });
    return intersections;
}
function resizeToSizeRestrictions(coordinates, sizeRestrictions) {
    return applyScale(coordinates, fitToSizeRestrictions(coordinates, sizeRestrictions));
}
function rotateSize(size, angle) {
    var radians = (angle * Math.PI) / 180;
    return {
        width: Math.abs(size.width * Math.cos(radians)) + Math.abs(size.height * Math.sin(radians)),
        height: Math.abs(size.width * Math.sin(radians)) + Math.abs(size.height * Math.cos(radians)),
    };
}
function rotatePoint(point, angle, anchor) {
    var radians = (angle * Math.PI) / 180;
    if (anchor) {
        return {
            left: (point.left - anchor.left) * Math.cos(radians) -
                (point.top - anchor.top) * Math.sin(radians) +
                anchor.left,
            top: (point.left - anchor.left) * Math.sin(radians) +
                (point.top - anchor.top) * Math.cos(radians) +
                anchor.top,
        };
    }
    else {
        return {
            left: point.left * Math.cos(radians) - point.top * Math.sin(radians),
            top: point.left * Math.sin(radians) + point.top * Math.cos(radians),
        };
    }
}
function positionToSizeRestrictions(positionRestrictions) {
    return {
        minWidth: 0,
        minHeight: 0,
        maxWidth: positionRestrictions.right !== undefined && positionRestrictions.left !== undefined
            ? positionRestrictions.right - positionRestrictions.left
            : Infinity,
        maxHeight: positionRestrictions.bottom !== undefined && positionRestrictions.top !== undefined
            ? positionRestrictions.bottom - positionRestrictions.top
            : Infinity,
    };
}
function mergePositionRestrictions(a, b) {
    var restrictions = {};
    ALL_DIRECTIONS.forEach(function (direction) {
        var firstDirection = a[direction];
        var secondDirection = b[direction];
        if (firstDirection !== undefined && secondDirection !== undefined) {
            if (direction === 'left' || direction === 'top') {
                restrictions[direction] = Math.max(firstDirection, secondDirection);
            }
            else {
                restrictions[direction] = Math.min(firstDirection, secondDirection);
            }
        }
        else if (secondDirection !== undefined) {
            restrictions[direction] = secondDirection;
        }
        else if (firstDirection !== undefined) {
            restrictions[direction] = firstDirection;
        }
    });
    return restrictions;
}
function fitToPositionRestrictions(coordinates, positionRestrictions) {
    var directions = {
        left: 0,
        top: 0,
    };
    var intersection = getIntersections(coordinates, positionRestrictions);
    if (intersection.left && intersection.left > 0) {
        directions.left = intersection.left;
    }
    else if (intersection.right && intersection.right > 0) {
        directions.left = -intersection.right;
    }
    if (intersection.top && intersection.top > 0) {
        directions.top = intersection.top;
    }
    else if (intersection.bottom && intersection.bottom > 0) {
        directions.top = -intersection.bottom;
    }
    return directions;
}
function moveToPositionRestrictions(coordinates, positionRestrictions) {
    return applyMove(coordinates, fitToPositionRestrictions(coordinates, positionRestrictions));
}
function createAspectRatio(aspectRatio) {
    if (aspectRatio === void 0) { aspectRatio = {}; }
    if (isNumber(aspectRatio)) {
        return {
            minimum: aspectRatio,
            maximum: aspectRatio,
        };
    }
    else {
        return {
            minimum: isNumeric(aspectRatio.minimum) ? aspectRatio.minimum : 0,
            maximum: isNumeric(aspectRatio.maximum) ? aspectRatio.maximum : Infinity,
        };
    }
}
function isConsistentSize(size, restrictions) {
    return ((isUndefined(restrictions.maxWidth) || !isGreater(size.width, restrictions.maxWidth)) &&
        (isUndefined(restrictions.maxHeight) || !isGreater(size.height, restrictions.maxHeight)) &&
        (isUndefined(restrictions.minHeight) || !isLower(size.height, restrictions.minHeight)) &&
        (isUndefined(restrictions.minWidth) || !isLower(size.width, restrictions.minWidth)));
}
function isConsistentPosition(coordinates, restrictions) {
    return ((isUndefined(restrictions.left) || !isLower(coordinates.left, restrictions.left)) &&
        (isUndefined(restrictions.top) || !isLower(coordinates.top, restrictions.top)) &&
        (isUndefined(restrictions.right) || !isGreater(coordinates.left + coordinates.width, restrictions.right)) &&
        (isUndefined(restrictions.bottom) || !isGreater(coordinates.top + coordinates.height, restrictions.bottom)));
}
function getCloserSize(candidates, reference, sizeRestrictions, aspectRatio) {
    var traverse = function (ignoreMinimum) {
        return candidates.reduce(function (minimum, size) {
            var _a = isFunction(sizeRestrictions)
                ? sizeRestrictions(size)
                : sizeRestrictions, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minWidth = _a.minWidth, minHeight = _a.minHeight;
            var preparedAspectRatio = createAspectRatio(isFunction(aspectRatio) ? aspectRatio(size) : aspectRatio);
            var preparedSizeRestrictions = ignoreMinimum
                ? { maxWidth: maxWidth, maxHeight: maxHeight }
                : { maxWidth: maxWidth, maxHeight: maxHeight, minWidth: minWidth, minHeight: minHeight };
            if (isConsistentSize(size, preparedSizeRestrictions) &&
                !getBrokenRatio(ratio(size), preparedAspectRatio) &&
                size.width &&
                size.height) {
                return !minimum || isLower(sizeDistance(size, reference), sizeDistance(minimum, reference))
                    ? size
                    : minimum;
            }
            else {
                return minimum;
            }
        }, null);
    };
    return traverse() || traverse(true);
}

function isInitializedState(state) {
    return Boolean(state && state.visibleArea && state.coordinates);
}
function getAreaSizeRestrictions(state, settings) {
    return calculateAreaSizeRestrictions(state, settings);
}
function getAreaPositionRestrictions(state, settings) {
    return isFunction(settings.areaPositionRestrictions)
        ? settings.areaPositionRestrictions(state, settings)
        : settings.areaPositionRestrictions;
}
function getSizeRestrictions(state, settings) {
    return calculateSizeRestrictions(state, settings);
}
function getPositionRestrictions(state, settings) {
    return isFunction(settings.positionRestrictions)
        ? settings.positionRestrictions(state, settings)
        : settings.positionRestrictions;
}
function getCoefficient(state) {
    return state.visibleArea ? state.visibleArea.width / state.boundary.width : 0;
}
function getStencilCoordinates(state) {
    if (isInitializedState(state)) {
        var _a = state.coordinates, width = _a.width, height = _a.height, left = _a.left, top_1 = _a.top;
        var coefficient = getCoefficient(state);
        return {
            width: width / coefficient,
            height: height / coefficient,
            left: (left - state.visibleArea.left) / coefficient,
            top: (top_1 - state.visibleArea.top) / coefficient,
        };
    }
    else {
        return emptyCoordinates();
    }
}
function getAspectRatio(state, settings) {
    return createAspectRatio(isFunction(settings.aspectRatio) ? settings.aspectRatio(state, settings) : settings.aspectRatio);
}
function getDefaultCoordinates(state, settings) {
    return isFunction(settings.defaultCoordinates)
        ? settings.defaultCoordinates(state, settings)
        : settings.defaultCoordinates;
}
function getDefaultVisibleArea(state, settings) {
    return isFunction(settings.defaultVisibleArea)
        ? settings.defaultVisibleArea(state, settings)
        : settings.defaultVisibleArea;
}
function getDefaultTransforms(state, settings) {
    var transforms = __assign(__assign({}, state.transforms), { flip: __assign({}, state.transforms.flip) });
    if (settings.defaultTransforms) {
        var defaultTransforms = isFunction(settings.defaultTransforms)
            ? settings.defaultTransforms(state, settings)
            : settings.defaultTransforms;
        if (isNumber(defaultTransforms.rotate)) {
            transforms.rotate = defaultTransforms.rotate;
        }
        if (defaultTransforms.flip) {
            if (isBoolean(defaultTransforms.flip.horizontal)) {
                transforms.flip.horizontal = defaultTransforms.flip.horizontal;
            }
            if (isBoolean(defaultTransforms.flip.vertical)) {
                transforms.flip.vertical = defaultTransforms.flip.vertical;
            }
        }
    }
    return transforms;
}
function getTransformedImageSize(state) {
    if (state.imageSize && state.imageSize.width && state.imageSize.height) {
        return rotateSize(state.imageSize, state.transforms.rotate);
    }
    else {
        return {
            width: 0,
            height: 0,
        };
    }
}
function getMinimumSize(state) {
    // The magic number is the approximation of the handler size
    // Temporary solution that should be improved in the future
    return state.coordinates
        ? Math.min(state.coordinates.width, state.coordinates.height, 20 * getCoefficient(state))
        : 1;
}
function getRoundedCoordinates(state, settings) {
    if (isInitializedState(state)) {
        var sizeRestrictions = getSizeRestrictions(state, settings);
        var positionRestrictions = getPositionRestrictions(state, settings);
        var roundCoordinates = {
            width: Math.round(state.coordinates.width),
            height: Math.round(state.coordinates.height),
            left: Math.round(state.coordinates.left),
            top: Math.round(state.coordinates.top),
        };
        if (roundCoordinates.width > sizeRestrictions.maxWidth) {
            roundCoordinates.width = Math.floor(state.coordinates.width);
        }
        else if (roundCoordinates.width < sizeRestrictions.minWidth) {
            roundCoordinates.width = Math.ceil(state.coordinates.width);
        }
        if (roundCoordinates.height > sizeRestrictions.maxHeight) {
            roundCoordinates.height = Math.floor(state.coordinates.height);
        }
        else if (roundCoordinates.height < sizeRestrictions.minHeight) {
            roundCoordinates.height = Math.ceil(state.coordinates.height);
        }
        return moveToPositionRestrictions(roundCoordinates, positionRestrictions);
    }
    else {
        return null;
    }
}
function isConsistentState(state, settings) {
    if (isInitializedState(state)) {
        return (!getBrokenRatio(ratio(state.coordinates), getAspectRatio(state, settings)) &&
            isConsistentSize(state.visibleArea, getAreaSizeRestrictions(state, settings)) &&
            isConsistentSize(state.coordinates, getSizeRestrictions(state, settings)) &&
            isConsistentPosition(state.visibleArea, getAreaPositionRestrictions(state, settings)) &&
            isConsistentPosition(state.coordinates, getPositionRestrictions(state, settings)));
    }
    else {
        return true;
    }
}

function reconcileSizeRestrictions(sizeRestrictions) {
    var restrictions = __assign({}, sizeRestrictions);
    // Process the border cases when minimum height / width larger than maximum height / width
    if (restrictions.minWidth > restrictions.maxWidth) {
        restrictions.minWidth = restrictions.maxWidth;
    }
    if (restrictions.minHeight > restrictions.maxHeight) {
        restrictions.minHeight = restrictions.maxHeight;
    }
    return restrictions;
}
function mergeSizeRestrictions(a, b) {
    var first = a;
    var second = __assign({ minWidth: 0, minHeight: 0, maxWidth: Infinity, maxHeight: Infinity }, b);
    return reconcileSizeRestrictions({
        maxHeight: Math.min(first.maxHeight, second.maxHeight),
        minHeight: Math.max(first.minHeight, second.minHeight),
        maxWidth: Math.min(first.maxWidth, second.maxWidth),
        minWidth: Math.max(first.minWidth, second.minWidth),
    });
}
function calculateSizeRestrictions(state, settings) {
    var sizeRestrictions = isFunction(settings.sizeRestrictions)
        ? settings.sizeRestrictions(state, settings)
        : settings.sizeRestrictions;
    var positionRestrictions = getPositionRestrictions(state, settings);
    // User can forget to set some of restrictions, so we should initialize them by default values
    var restrictions = {
        minWidth: isNumeric(sizeRestrictions.minWidth) ? parseNumber(sizeRestrictions.minWidth) : 0,
        minHeight: isNumeric(sizeRestrictions.minHeight) ? parseNumber(sizeRestrictions.minHeight) : 0,
        maxWidth: isNumeric(sizeRestrictions.maxWidth) ? parseNumber(sizeRestrictions.maxWidth) : Infinity,
        maxHeight: isNumeric(sizeRestrictions.maxHeight) ? parseNumber(sizeRestrictions.maxHeight) : Infinity,
    };
    // The situation, when stencil can't be positioned in cropper due to positionRestrictions should be avoided
    if (positionRestrictions.left !== undefined && positionRestrictions.right !== undefined) {
        restrictions.maxWidth = Math.min(restrictions.maxWidth, positionRestrictions.right - positionRestrictions.left);
    }
    if (positionRestrictions.bottom !== undefined && positionRestrictions.top !== undefined) {
        restrictions.maxHeight = Math.min(restrictions.maxHeight, positionRestrictions.bottom - positionRestrictions.top);
    }
    return reconcileSizeRestrictions(restrictions);
}
function calculateAreaSizeRestrictions(state, settings) {
    var sizeRestrictions = isFunction(settings.areaSizeRestrictions)
        ? settings.areaSizeRestrictions(state, settings)
        : settings.areaSizeRestrictions;
    if (sizeRestrictions.maxWidth < Infinity && sizeRestrictions.maxHeight < Infinity) {
        if (ratio(state.boundary) > sizeRestrictions.maxWidth / sizeRestrictions.maxHeight) {
            sizeRestrictions.maxHeight = sizeRestrictions.maxWidth / ratio(state.boundary);
        }
        else {
            sizeRestrictions.maxWidth = sizeRestrictions.maxHeight * ratio(state.boundary);
        }
    }
    return reconcileSizeRestrictions(sizeRestrictions);
}

function copyState(state) {
    return deepClone(state);
}

var ImageRestriction;
(function (ImageRestriction) {
    ImageRestriction["fillArea"] = "fillArea";
    ImageRestriction["fitArea"] = "fitArea";
    ImageRestriction["stencil"] = "stencil";
    ImageRestriction["none"] = "none";
})(ImageRestriction || (ImageRestriction = {}));
var Priority;
(function (Priority) {
    Priority["coordinates"] = "coordinates";
    Priority["visibleArea"] = "visibleArea";
})(Priority || (Priority = {}));

// Limitations:
// 1. Assume that maximum width and height always larger than minimum width and height
// 2. Assume that aspectRatio.minimum < aspectRatio.maximum
// If you break this limitations function could return null!
function approximateSize(params) {
    var width = params.width, height = params.height;
    var sizeRestrictions = params.sizeRestrictions || {
        minWidth: 0,
        minHeight: 0,
        maxWidth: Infinity,
        maxHeight: Infinity,
    };
    var aspectRatio = createAspectRatio(params.aspectRatio);
    var coordinates = {
        width: Math.max(sizeRestrictions.minWidth, Math.min(sizeRestrictions.maxWidth, width)),
        height: Math.max(sizeRestrictions.minHeight, Math.min(sizeRestrictions.maxHeight, height)),
    };
    var candidates = [coordinates];
    if (aspectRatio) {
        [aspectRatio.minimum, aspectRatio.maximum].forEach(function (ratio) {
            if (ratio) {
                candidates.push({ width: coordinates.width, height: coordinates.width / ratio }, { width: coordinates.height * ratio, height: coordinates.height });
            }
        });
    }
    // Resize the candidates as much as possible to prevent breaking minimum size
    candidates = candidates.map(function (candidate) { return resizeToSizeRestrictions(candidate, sizeRestrictions); });
    // TODO: fix the type of return value
    return getCloserSize(candidates, { width: width, height: height }, sizeRestrictions, aspectRatio);
}

function fitVisibleArea(state, settings) {
    var result = copyState(state);
    if (state.visibleArea) {
        var areaSizeRestrictions = getAreaSizeRestrictions(state, settings);
        // Fit the visible area to its size restrictions and boundary aspect ratio:
        result.visibleArea = __assign(__assign({}, state.visibleArea), approximateSize({
            width: state.visibleArea.width,
            height: state.visibleArea.height,
            aspectRatio: {
                minimum: ratio(result.boundary),
                maximum: ratio(result.boundary),
            },
            sizeRestrictions: areaSizeRestrictions,
        }));
        // Return the visible area to previous center
        result.visibleArea = applyMove(result.visibleArea, diff(getCenter(state.visibleArea), getCenter(result.visibleArea)));
        // Fit the visible area to positions restrictions
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
    }
    return result;
}

function moveCoordinatesAlgorithm(coordinates, directions, positionRestrictions) {
    var movedCoordinates = applyMove(coordinates, directions);
    return positionRestrictions ? moveToPositionRestrictions(movedCoordinates, positionRestrictions) : movedCoordinates;
}

var SetCoordinatesMode;
(function (SetCoordinatesMode) {
    SetCoordinatesMode["limit"] = "limit";
    SetCoordinatesMode["zoom"] = "zoom";
    SetCoordinatesMode["unsafe"] = "unsafe";
})(SetCoordinatesMode || (SetCoordinatesMode = {}));
function setCoordinates(state, settings, transform, 
// If you set mode to `false`, the coordinates can leave the visible area
mode) {
    if (mode === void 0) { mode = true; }
    var currentMode = mode === false ? SetCoordinatesMode.unsafe : mode === true ? SetCoordinatesMode.zoom : mode;
    var aspectRatio = getAspectRatio(state, settings);
    var sizeRestrictions = getSizeRestrictions(state, settings);
    if (state.visibleArea && currentMode === SetCoordinatesMode.limit) {
        sizeRestrictions = __assign(__assign({}, sizeRestrictions), { minWidth: Math.min(state.visibleArea.width, sizeRestrictions.minWidth), minHeight: Math.min(state.visibleArea.height, sizeRestrictions.minHeight), maxWidth: Math.min(state.visibleArea.width, sizeRestrictions.maxWidth), maxHeight: Math.min(state.visibleArea.height, sizeRestrictions.maxHeight) });
    }
    var positionRestrictions = getPositionRestrictions(state, settings);
    if (state.visibleArea && currentMode === SetCoordinatesMode.limit) {
        positionRestrictions = mergePositionRestrictions(positionRestrictions, coordinatesToPositionRestrictions(state.visibleArea));
    }
    var move = function (prevCoordinates, newCoordinates) {
        return moveCoordinatesAlgorithm(prevCoordinates, {
            left: newCoordinates.left - (prevCoordinates.left || 0),
            top: newCoordinates.top - (prevCoordinates.top || 0),
        }, positionRestrictions);
    };
    var resize = function (prevCoordinates, newCoordinates) {
        var coordinates = __assign(__assign(__assign({}, prevCoordinates), approximateSize({
            width: newCoordinates.width,
            height: newCoordinates.height,
            sizeRestrictions: sizeRestrictions,
            aspectRatio: aspectRatio,
        })), { left: 0, top: 0 });
        return move(coordinates, {
            left: prevCoordinates.left || 0,
            top: prevCoordinates.top || 0,
        });
    };
    var coordinates = state.coordinates ? __assign({}, state.coordinates) : emptyCoordinates();
    var transforms = Array.isArray(transform) ? transform : [transform];
    transforms.forEach(function (transform) {
        var changes;
        if (typeof transform === 'function') {
            changes = transform(__assign(__assign({}, state), { coordinates: coordinates }), settings);
        }
        else {
            changes = transform;
        }
        if (changes) {
            if (!isUndefined(changes.width) || !isUndefined(changes.height)) {
                coordinates = resize(coordinates, __assign(__assign({}, coordinates), changes));
            }
            if (!isUndefined(changes.left) || !isUndefined(changes.top)) {
                coordinates = move(coordinates, __assign(__assign({}, coordinates), changes));
            }
        }
    });
    var result = __assign(__assign({}, copyState(state)), { coordinates: coordinates });
    if (result.visibleArea && currentMode === SetCoordinatesMode.zoom) {
        var widthIntersections = Math.max(0, result.coordinates.width - result.visibleArea.width);
        var heightIntersections = Math.max(0, result.coordinates.height - result.visibleArea.height);
        var areaSizeRestrictions = getAreaSizeRestrictions(state, settings);
        var scale = widthIntersections > heightIntersections
            ? result.coordinates.width / result.visibleArea.width
            : result.coordinates.height / result.visibleArea.height;
        if (scale > 1) {
            result.visibleArea = applyScale(result.visibleArea, Math.min(scale, maxScale(result.visibleArea, areaSizeRestrictions)));
        }
        result.visibleArea = applyMove(result.visibleArea, inverseMove(fitToPositionRestrictions(result.coordinates, coordinatesToPositionRestrictions(result.visibleArea))));
        return fitVisibleArea(result, settings);
    }
    else {
        return result;
    }
}

function fitCoordinates(state, settings) {
    if (state.coordinates) {
        var result = copyState(state);
        var aspectRatio = getAspectRatio(state, settings);
        var sizeRestrictions = getSizeRestrictions(state, settings);
        // Fit the size of coordinates to existing size restrictions and visible area
        result.coordinates = __assign(__assign({}, state.coordinates), approximateSize({
            width: state.coordinates.width,
            height: state.coordinates.height,
            aspectRatio: aspectRatio,
            sizeRestrictions: state.visibleArea
                ? {
                    maxWidth: Math.min(state.visibleArea.width, sizeRestrictions.maxWidth),
                    maxHeight: Math.min(state.visibleArea.height, sizeRestrictions.maxHeight),
                    minHeight: Math.min(state.visibleArea.height, sizeRestrictions.minHeight),
                    minWidth: Math.min(state.visibleArea.width, sizeRestrictions.minWidth),
                }
                : sizeRestrictions,
        }));
        // Return the coordinates to the previous center
        result.coordinates = applyMove(result.coordinates, diff(getCenter(state.coordinates), getCenter(result.coordinates)));
        // Fit the coordinates to position restrictions and visible area
        result.coordinates = moveToPositionRestrictions(result.coordinates, state.visibleArea
            ? mergePositionRestrictions(coordinatesToPositionRestrictions(state.visibleArea), getPositionRestrictions(result, settings))
            : getPositionRestrictions(result, settings));
        return result;
    }
    return state;
}

function setVisibleArea(state, settings, visibleArea, 
// If you set safe to `false`, the coordinates will be able to leave the visible area
safe) {
    if (safe === void 0) { safe = true; }
    var result = __assign(__assign({}, copyState(state)), { visibleArea: visibleArea });
    // There is no possibility to break visible area limitations.
    result = fitVisibleArea(result, settings);
    if (safe) {
        result = fitCoordinates(result, settings);
    }
    return result;
}

function createState(options, settings) {
    var _a, _b, _c, _d, _e;
    var boundary = options.boundary, image = options.image;
    var state = {
        boundary: {
            width: boundary.width,
            height: boundary.height,
        },
        imageSize: {
            width: image.width,
            height: image.height,
        },
        transforms: {
            rotate: ((_a = image.transforms) === null || _a === void 0 ? void 0 : _a.rotate) || 0,
            flip: {
                horizontal: ((_c = (_b = image.transforms) === null || _b === void 0 ? void 0 : _b.flip) === null || _c === void 0 ? void 0 : _c.horizontal) || false,
                vertical: ((_e = (_d = image.transforms) === null || _d === void 0 ? void 0 : _d.flip) === null || _e === void 0 ? void 0 : _e.vertical) || false,
            },
        },
        visibleArea: null,
        coordinates: null,
    };
    if (settings.defaultTransforms) {
        state.transforms = getDefaultTransforms(state, settings);
    }
    if (settings.priority === Priority.visibleArea) {
        state = setVisibleArea(state, settings, getDefaultVisibleArea(state, settings), false);
        state = setCoordinates(state, settings, getDefaultCoordinates(state, settings), SetCoordinatesMode.limit);
    }
    else {
        state = setCoordinates(state, settings, getDefaultCoordinates(state, settings), SetCoordinatesMode.unsafe);
        state = setVisibleArea(state, settings, getDefaultVisibleArea(state, settings), true);
    }
    return state;
}

function moveCoordinates(state, settings, directions) {
    if (isInitializedState(state)) {
        var result = copyState(state);
        result.coordinates = applyMove(result.coordinates, directions);
        result.coordinates = moveToPositionRestrictions(result.coordinates, mergePositionRestrictions(coordinatesToPositionRestrictions(result.visibleArea), getPositionRestrictions(result, settings)));
        return result;
    }
    return state;
}

function fitDirections(_a) {
    var coordinates = _a.coordinates, directions = _a.directions, positionRestrictions = _a.positionRestrictions, sizeRestrictions = _a.sizeRestrictions, preserveRatio = _a.preserveRatio, allowedDirections = _a.allowedDirections, _b = _a.compensate, compensate = _b === void 0 ? true : _b;
    var fittedDirections = __assign({}, directions);
    var currentWidth = applyDirections(coordinates, fittedDirections).width;
    var currentHeight = applyDirections(coordinates, fittedDirections).height;
    // Prevent strange resizes when the width or height of stencil becomes smaller than 0
    if (currentWidth < 0) {
        if (fittedDirections.left < 0 && fittedDirections.right < 0) {
            fittedDirections.left =
                -(coordinates.width - sizeRestrictions.minWidth) / (fittedDirections.left / fittedDirections.right);
            fittedDirections.right =
                -(coordinates.width - sizeRestrictions.minWidth) / (fittedDirections.right / fittedDirections.left);
        }
        else if (fittedDirections.left < 0) {
            fittedDirections.left = -(coordinates.width - sizeRestrictions.minWidth);
        }
        else if (fittedDirections.right < 0) {
            fittedDirections.right = -(coordinates.width - sizeRestrictions.minWidth);
        }
    }
    if (currentHeight < 0) {
        if (fittedDirections.top < 0 && fittedDirections.bottom < 0) {
            fittedDirections.top =
                -(coordinates.height - sizeRestrictions.minHeight) / (fittedDirections.top / fittedDirections.bottom);
            fittedDirections.bottom =
                -(coordinates.height - sizeRestrictions.minHeight) / (fittedDirections.bottom / fittedDirections.top);
        }
        else if (fittedDirections.top < 0) {
            fittedDirections.top = -(coordinates.height - sizeRestrictions.minHeight);
        }
        else if (fittedDirections.bottom < 0) {
            fittedDirections.bottom = -(coordinates.height - sizeRestrictions.minHeight);
        }
    }
    // Prevent breaking limits
    var breaks = getIntersections(applyDirections(coordinates, fittedDirections), positionRestrictions);
    var canBeCompensated = ALL_DIRECTIONS.every(function (direction) {
        return !isGreater(breaks[getOppositeSide(direction)], 0) || allowedDirections[direction];
    });
    if (compensate && canBeCompensated) {
        if (breaks.left && breaks.left > 0 && breaks.right === 0) {
            fittedDirections.right += breaks.left;
            fittedDirections.left -= breaks.left;
        }
        else if (breaks.right && breaks.right > 0 && breaks.left === 0) {
            fittedDirections.left += breaks.right;
            fittedDirections.right -= breaks.right;
        }
        if (breaks.top && breaks.top > 0 && breaks.bottom === 0) {
            fittedDirections.bottom += breaks.top;
            fittedDirections.top -= breaks.top;
        }
        else if (breaks.bottom && breaks.bottom > 0 && breaks.top === 0) {
            fittedDirections.top += breaks.bottom;
            fittedDirections.bottom -= breaks.bottom;
        }
        breaks = getIntersections(applyDirections(coordinates, fittedDirections), positionRestrictions);
    }
    var maxResize = {
        width: Infinity,
        height: Infinity,
        left: Infinity,
        right: Infinity,
        top: Infinity,
        bottom: Infinity,
    };
    ALL_DIRECTIONS.forEach(function (direction) {
        var intersection = breaks[direction];
        if (intersection && fittedDirections[direction]) {
            maxResize[direction] = Math.max(0, 1 - intersection / fittedDirections[direction]);
        }
    });
    if (preserveRatio) {
        var multiplier_1 = Math.min.apply(Math, ALL_DIRECTIONS.map(function (direction) { return maxResize[direction]; }));
        if (multiplier_1 !== Infinity) {
            ALL_DIRECTIONS.forEach(function (direction) {
                fittedDirections[direction] *= multiplier_1;
            });
        }
    }
    else {
        ALL_DIRECTIONS.forEach(function (direction) {
            if (maxResize[direction] !== Infinity) {
                fittedDirections[direction] *= maxResize[direction];
            }
        });
    }
    currentWidth = applyDirections(coordinates, fittedDirections).width;
    currentHeight = applyDirections(coordinates, fittedDirections).height;
    if (fittedDirections.right + fittedDirections.left) {
        if (currentWidth > sizeRestrictions.maxWidth) {
            maxResize.width =
                (sizeRestrictions.maxWidth - coordinates.width) / (fittedDirections.right + fittedDirections.left);
        }
        else if (currentWidth < sizeRestrictions.minWidth) {
            maxResize.width =
                (sizeRestrictions.minWidth - coordinates.width) / (fittedDirections.right + fittedDirections.left);
        }
    }
    if (fittedDirections.bottom + fittedDirections.top) {
        if (currentHeight > sizeRestrictions.maxHeight) {
            maxResize.height =
                (sizeRestrictions.maxHeight - coordinates.height) / (fittedDirections.bottom + fittedDirections.top);
        }
        else if (currentHeight < sizeRestrictions.minHeight) {
            maxResize.height =
                (sizeRestrictions.minHeight - coordinates.height) / (fittedDirections.bottom + fittedDirections.top);
        }
    }
    if (preserveRatio) {
        var multiplier_2 = Math.min(maxResize.width, maxResize.height);
        if (multiplier_2 !== Infinity) {
            ALL_DIRECTIONS.forEach(function (direction) {
                fittedDirections[direction] *= multiplier_2;
            });
        }
    }
    else {
        if (maxResize.width !== Infinity) {
            HORIZONTAL_DIRECTIONS$1.forEach(function (direction) {
                fittedDirections[direction] *= maxResize.width;
            });
        }
        if (maxResize.height !== Infinity) {
            VERTICAL_DIRECTIONS$1.forEach(function (direction) {
                fittedDirections[direction] *= maxResize.height;
            });
        }
    }
    return fittedDirections;
}
function distributeOverlap(overlap, first, second) {
    if (isRoughlyEqual(first + second, 0)) {
        return overlap / 2;
    }
    else if (isRoughlyEqual(first, 0)) {
        return 0;
    }
    else if (isRoughlyEqual(second, 0)) {
        return overlap;
    }
    else {
        return overlap * Math.abs(first / (first + second));
    }
}
function resizeCoordinatesAlgorithm(coordinates, directions, options, limitations) {
    var aspectRatio = limitations.aspectRatio, positionRestrictions = limitations.positionRestrictions, sizeRestrictions = limitations.sizeRestrictions;
    var actualCoordinates = __assign({}, coordinates);
    directions = __assign({}, directions);
    var allowedDirections = options.allowedDirections || {
        left: true,
        right: true,
        bottom: true,
        top: true,
    };
    // It's possible that coordinates can be smaller than minimum width or minimum height. In this case
    // corresponding resize should be blocked
    if (coordinates.width < sizeRestrictions.minWidth) {
        directions.left = 0;
        directions.right = 0;
    }
    if (coordinates.height < sizeRestrictions.minHeight) {
        directions.top = 0;
        directions.bottom = 0;
    }
    ALL_DIRECTIONS.forEach(function (direction) {
        if (!allowedDirections[direction]) {
            directions[direction] = 0;
        }
    });
    // 1. First step: determine the safe and desired area
    directions = fitDirections({
        coordinates: actualCoordinates,
        directions: directions,
        sizeRestrictions: sizeRestrictions,
        positionRestrictions: positionRestrictions,
        allowedDirections: allowedDirections,
    });
    // 2. Second step: fix desired box to correspondent to aspect ratio
    var currentWidth = applyDirections(actualCoordinates, directions).width;
    var currentHeight = applyDirections(actualCoordinates, directions).height;
    // Checks ratio:
    var ratioBroken = options.preserveAspectRatio
        ? ratio(actualCoordinates)
        : getBrokenRatio(currentWidth / currentHeight, aspectRatio);
    if (ratioBroken) {
        var respectDirection = options.respectDirection;
        if (respectDirection !== 'width' && respectDirection !== 'height') {
            if (actualCoordinates.width >= actualCoordinates.height || ratioBroken === 1) {
                respectDirection = 'width';
            }
            else {
                respectDirection = 'height';
            }
        }
        if (respectDirection === 'width') {
            var overlapHeight = currentWidth / ratioBroken - actualCoordinates.height;
            if (allowedDirections.top && allowedDirections.bottom) {
                var top_1 = directions.top, bottom = directions.bottom;
                directions.bottom = distributeOverlap(overlapHeight, bottom, top_1);
                directions.top = distributeOverlap(overlapHeight, top_1, bottom);
            }
            else if (allowedDirections.bottom) {
                directions.bottom = overlapHeight;
            }
            else if (allowedDirections.top) {
                directions.top = overlapHeight;
            }
            else if (allowedDirections.right) {
                directions.right = 0;
            }
            else if (allowedDirections.left) {
                directions.left = 0;
            }
        }
        else if (respectDirection === 'height') {
            var overlapWidth = actualCoordinates.width - currentHeight * ratioBroken;
            if (allowedDirections.left && allowedDirections.right) {
                var left = directions.left, right = directions.right;
                directions.left = -distributeOverlap(overlapWidth, left, right);
                directions.right = -distributeOverlap(overlapWidth, right, left);
            }
            else if (allowedDirections.left) {
                directions.left = -overlapWidth;
            }
            else if (allowedDirections.right) {
                directions.right = -overlapWidth;
            }
            else if (allowedDirections.top) {
                directions.top = 0;
            }
            else if (allowedDirections.bottom) {
                directions.bottom = 0;
            }
        }
        // 3. Third step: check if desired box with correct aspect ratios break some limits and fit to this conditions
        directions = fitDirections({
            directions: directions,
            coordinates: actualCoordinates,
            sizeRestrictions: sizeRestrictions,
            positionRestrictions: positionRestrictions,
            preserveRatio: true,
            compensate: options.compensate,
            allowedDirections: allowedDirections,
        });
    }
    // 4. Check if ratio broken (temporary):
    currentWidth = applyDirections(actualCoordinates, directions).width;
    currentHeight = applyDirections(actualCoordinates, directions).height;
    ratioBroken = options.preserveAspectRatio
        ? ratio(actualCoordinates)
        : getBrokenRatio(currentWidth / currentHeight, aspectRatio);
    if (ratioBroken && isGreater(Math.abs(ratioBroken - currentWidth / currentHeight), 0)) {
        ALL_DIRECTIONS.forEach(function (direction) {
            directions[direction] = 0;
        });
    }
    return moveCoordinatesAlgorithm({
        width: coordinates.width + directions.right + directions.left,
        height: coordinates.height + directions.top + directions.bottom,
        left: coordinates.left,
        top: coordinates.top,
    }, {
        left: -directions.left,
        top: -directions.top,
    }, positionRestrictions);
}
function anchorToMassPoint(coordinates, anchor) {
    var plainAnchor = anchor.toLowerCase();
    return {
        left: coordinates.left +
            coordinates.width * (plainAnchor.indexOf('west') !== -1 ? 1 : plainAnchor.indexOf('east') !== -1 ? 0 : 0.5),
        top: coordinates.top +
            coordinates.height *
                (plainAnchor.indexOf('north') !== -1 ? 1 : plainAnchor.indexOf('south') !== -1 ? 0 : 0.5),
    };
}
function anchorToAllowedDirections(anchor) {
    var plainAnchor = anchor.toLowerCase();
    return {
        left: plainAnchor.indexOf('east') === -1,
        top: plainAnchor.indexOf('south') === -1,
        right: plainAnchor.indexOf('west') === -1,
        bottom: plainAnchor.indexOf('north') === -1,
    };
}
function anchorMoveToResizeDirections(anchor, directions) {
    var plainAnchor = anchor.toLowerCase();
    var normalizedDirections = {
        left: plainAnchor.indexOf('west') === -1 ? directions.left : -directions.left,
        top:  -directions.top,
        right: directions.left,
        bottom: directions.top,
    };
    if (['north', 'south', 'center'].every(function (el) { return plainAnchor.indexOf(el) === -1; })) {
        normalizedDirections.top = 0;
        normalizedDirections.bottom = 0;
    }
    if (['west', 'east', 'center'].every(function (el) { return plainAnchor.indexOf(el) === -1; })) {
        normalizedDirections.left = 0;
        normalizedDirections.right = 0;
    }
    var allowedDirections = anchorToAllowedDirections(anchor);
    ALL_DIRECTIONS.forEach(function (direction) {
        if (!allowedDirections[direction]) {
            normalizedDirections[direction] = 0;
        }
    });
    return normalizedDirections;
}
function anchoredResizeCoordinatesAlgorithm(coordinates, anchor, directions, options, limitations) {
    var reference = options.reference;
    var resizeDirections = anchorMoveToResizeDirections(anchor, directions);
    var allowedDirections = anchorToAllowedDirections(anchor);
    var result = resizeCoordinatesAlgorithm(coordinates, resizeDirections, __assign(__assign({}, options), { allowedDirections: allowedDirections }), limitations);
    if (reference) {
        // Move the result to anchor
        result = applyMove(result, diff(anchorToMassPoint(reference, anchor), anchorToMassPoint(result, anchor)));
    }
    return moveToPositionRestrictions(result, limitations.positionRestrictions);
}

function resizeCoordinates(state, settings, anchor, directions, options) {
    var minimumSize = getMinimumSize(state);
    var sizeRestrictions = getSizeRestrictions(state, settings);
    return isInitializedState(state)
        ? __assign(__assign({}, copyState(state)), { coordinates: anchoredResizeCoordinatesAlgorithm(state.coordinates, anchor, directions, options, {
                positionRestrictions: mergePositionRestrictions(getPositionRestrictions(state, settings), coordinatesToPositionRestrictions(state.visibleArea)),
                sizeRestrictions: {
                    maxWidth: Math.min(sizeRestrictions.maxWidth, state.visibleArea.width),
                    maxHeight: Math.min(sizeRestrictions.maxHeight, state.visibleArea.height),
                    minWidth: Math.max(Math.min(sizeRestrictions.minWidth, state.visibleArea.width), minimumSize),
                    minHeight: Math.max(Math.min(sizeRestrictions.minHeight, state.visibleArea.height), minimumSize),
                },
                aspectRatio: getAspectRatio(state, settings),
            }) }) : state;
}

function setBoundary(state, settings, boundary) {
    var result = __assign(__assign({}, copyState(state)), { boundary: boundary });
    if (result.visibleArea && result.coordinates && state.visibleArea) {
        // Scale visible area size to fit new boundary:
        result.visibleArea.height = result.visibleArea.width / ratio(boundary);
        result.visibleArea.top += (state.visibleArea.height - result.visibleArea.height) / 2;
        // Scale visible area to prevent overlap coordinates (and its minimum size)
        var sizeRestrictions = getSizeRestrictions(result, settings);
        if (Math.max(sizeRestrictions.minHeight, result.coordinates.height) - result.visibleArea.height > 0 ||
            Math.max(sizeRestrictions.minWidth, result.coordinates.width) - result.visibleArea.width > 0) {
            result.visibleArea = applyScale(result.visibleArea, Math.max(Math.max(sizeRestrictions.minHeight, result.coordinates.height) / result.visibleArea.height, Math.max(sizeRestrictions.minWidth, result.coordinates.width) / result.visibleArea.width));
        }
        // Scale visible area to prevent overlap area restrictions
        result.visibleArea = resizeToSizeRestrictions(result.visibleArea, getAreaSizeRestrictions(result, settings));
        // Move visible are to prevent moving of the coordinates:
        var move = inverseMove(fitToPositionRestrictions(result.coordinates, coordinatesToPositionRestrictions(result.visibleArea)));
        if (result.visibleArea.width < result.coordinates.width) {
            move.left = 0;
        }
        if (result.visibleArea.height < result.coordinates.height) {
            move.top = 0;
        }
        result.visibleArea = applyMove(result.visibleArea, move);
        // Move visible area to prevent overlap the area restrictions
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
        result = fitCoordinates(result, settings);
    }
    return result;
}

function rotateImageAlgorithm(state, settings, rotate) {
    if (isInitializedState(state)) {
        var result = copyState(state);
        var angle = isNumber(rotate) ? rotate : rotate.angle;
        var imageCenter = rotatePoint(getCenter(__assign({ left: 0, top: 0 }, getTransformedImageSize(state))), angle);
        result.transforms.rotate += angle;
        result.coordinates = __assign(__assign({}, approximateSize({
            sizeRestrictions: getSizeRestrictions(result, settings),
            aspectRatio: getAspectRatio(result, settings),
            width: result.coordinates.width,
            height: result.coordinates.height,
        })), rotatePoint(getCenter(result.coordinates), angle));
        var center = !isNumber(rotate) && rotate.center ? rotate.center : getCenter(state.coordinates);
        var shift = diff(getCenter(state.coordinates), rotatePoint(getCenter(state.coordinates), angle, center));
        var imageSize = getTransformedImageSize(result);
        result.coordinates.left -= imageCenter.left - imageSize.width / 2 + result.coordinates.width / 2 - shift.left;
        result.coordinates.top -= imageCenter.top - imageSize.height / 2 + result.coordinates.height / 2 - shift.top;
        // Check that visible area doesn't break the area restrictions:
        result.visibleArea = resizeToSizeRestrictions(result.visibleArea, mergeSizeRestrictions(getAreaSizeRestrictions(result, settings), {
            minWidth: result.coordinates.width,
            minHeight: result.coordinates.height,
        }));
        result.coordinates = moveToPositionRestrictions(result.coordinates, getPositionRestrictions(result, settings));
        result.visibleArea = applyMove(result.visibleArea, diff(getCenter(result.coordinates), getCenter(state.coordinates)));
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
        return result;
    }
    return state;
}

function flipImageAlgorithm(state, settings, horizontal, vertical) {
    if (isInitializedState(state)) {
        var result = copyState(state);
        var rotate = state.transforms.rotate;
        var imageSize = getTransformedImageSize(state);
        var changed = {
            horizontal: horizontal,
            vertical: vertical,
        };
        if (changed.horizontal || changed.vertical) {
            var imageCenter = rotatePoint({
                left: imageSize.width / 2,
                top: imageSize.height / 2,
            }, -rotate);
            var oldCenter = rotatePoint(getCenter(result.coordinates), -rotate);
            var newCenter = rotatePoint({
                left: changed.horizontal ? imageCenter.left - (oldCenter.left - imageCenter.left) : oldCenter.left,
                top: changed.vertical ? imageCenter.top - (oldCenter.top - imageCenter.top) : oldCenter.top,
            }, rotate);
            result.coordinates = applyMove(result.coordinates, diff(newCenter, getCenter(result.coordinates)));
            oldCenter = rotatePoint(getCenter(result.visibleArea), -rotate);
            newCenter = rotatePoint({
                left: changed.horizontal ? imageCenter.left - (oldCenter.left - imageCenter.left) : oldCenter.left,
                top: changed.vertical ? imageCenter.top - (oldCenter.top - imageCenter.top) : oldCenter.top,
            }, rotate);
            result.visibleArea = applyMove(result.visibleArea, diff(newCenter, getCenter(result.visibleArea)));
            result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
        }
        if (changed.horizontal) {
            result.transforms.flip.horizontal = !state.transforms.flip.horizontal;
        }
        if (changed.vertical) {
            result.transforms.flip.vertical = !state.transforms.flip.vertical;
        }
        return result;
    }
    return state;
}

function transformImageAlgorithm(state, settings, transform) {
    var _a;
    var _b = transform.scale, scale = _b === void 0 ? 1 : _b, _c = transform.move, move = _c === void 0 ? {} : _c;
    if (isInitializedState(state)) {
        var result = copyState(state);
        // It's reversed because zooming in the image is actually zooming out visible area
        var scaleFactor = 1 / (isNumber(scale) ? scale : scale.factor);
        var scaleCenter = !isNumber(scale) ? scale.center : undefined;
        var isAllowedScale = !isRoughlyEqual(scaleFactor, 1);
        var areaScale = 1;
        var stencilScale = 1;
        result.visibleArea = applyMove(result.visibleArea, {
            left: move.left || 0,
            top: move.top || 0,
        });
        var sizeRestrictions = getSizeRestrictions(result, settings);
        var positionRestrictions = getPositionRestrictions(result, settings);
        var areaSizeRestrictions = getAreaSizeRestrictions(result, settings);
        var scaleRestrictions = {
            stencil: {
                minimum: Math.max(sizeRestrictions.minWidth ? sizeRestrictions.minWidth / result.coordinates.width : 0, sizeRestrictions.minHeight ? sizeRestrictions.minHeight / result.coordinates.height : 0),
                maximum: Math.min(sizeRestrictions.maxWidth ? sizeRestrictions.maxWidth / result.coordinates.width : Infinity, sizeRestrictions.maxHeight ? sizeRestrictions.maxHeight / result.coordinates.height : Infinity, maxScale(result.coordinates, positionToSizeRestrictions(positionRestrictions))),
            },
            area: {
                maximum: maxScale(result.visibleArea, areaSizeRestrictions),
                minimum: minScale(result.visibleArea, areaSizeRestrictions),
            },
        };
        // If there is scaling then begin scale
        if (scaleFactor && isAllowedScale) {
            // Determine scale factor
            if (scaleFactor < 1) {
                stencilScale = Math.max(scaleFactor, Math.max(scaleRestrictions.area.minimum, scaleRestrictions.stencil.minimum));
                if (stencilScale > 1) {
                    stencilScale = 1;
                }
            }
            else if (scaleFactor > 1) {
                stencilScale = Math.min(scaleFactor, Math.min(scaleRestrictions.area.maximum, scaleRestrictions.stencil.maximum));
                if (stencilScale < 1) {
                    stencilScale = 1;
                }
            }
        }
        if (stencilScale) {
            // Resize stencil with area as much as possible
            result.visibleArea = applyScale(result.visibleArea, stencilScale, scaleCenter);
        }
        var relativeCoordinates = {
            left: state.coordinates.left - state.visibleArea.left,
            right: state.visibleArea.width + state.visibleArea.left - (state.coordinates.width + state.coordinates.left),
            top: state.coordinates.top - state.visibleArea.top,
            bottom: state.visibleArea.height + state.visibleArea.top - (state.coordinates.height + state.coordinates.top),
        };
        // Move the area to fit to the coordinates limits:
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, {
            left: positionRestrictions.left !== undefined
                ? positionRestrictions.left - relativeCoordinates.left * stencilScale
                : undefined,
            top: positionRestrictions.top !== undefined
                ? positionRestrictions.top - relativeCoordinates.top * stencilScale
                : undefined,
            bottom: positionRestrictions.bottom !== undefined
                ? positionRestrictions.bottom + relativeCoordinates.bottom * stencilScale
                : undefined,
            right: positionRestrictions.right !== undefined
                ? positionRestrictions.right + relativeCoordinates.right * stencilScale
                : undefined,
        });
        // But the more important to fit are to the area restrictions, so we should fit it to that restrictions:
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
        // Set the same coordinates of stencil inside visible area
        result.coordinates.width = result.coordinates.width * stencilScale;
        result.coordinates.height = result.coordinates.height * stencilScale;
        result.coordinates.left = result.visibleArea.left + relativeCoordinates.left * stencilScale;
        result.coordinates.top = result.visibleArea.top + relativeCoordinates.top * stencilScale;
        // Move the coordinates to prevent the intersection with visible area and position restrictions
        result.coordinates = moveToPositionRestrictions(result.coordinates, mergePositionRestrictions(coordinatesToPositionRestrictions(result.visibleArea), positionRestrictions));
        // Resize only area if stencil can't be resized and stencil resize is disabled
        if (isAllowedScale && scaleFactor && ((_a = settings.transformImage) === null || _a === void 0 ? void 0 : _a.adjustStencil)) {
            if (scaleFactor > 1) {
                areaScale = Math.min(scaleRestrictions.area.maximum, scaleFactor) / stencilScale;
            }
            else if (scaleFactor < 1) {
                areaScale = Math.max(result.coordinates.height / result.visibleArea.height, result.coordinates.width / result.visibleArea.width, scaleFactor / stencilScale);
            }
            if (areaScale !== 1) {
                result.visibleArea = applyScale(result.visibleArea, areaScale, scaleFactor > 1 ? scaleCenter : getCenter(result.coordinates));
                // Move to prevent the breaking of the area restrictions:
                result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
                // Move to prevent the intersection with coordinates:
                result.visibleArea = applyMove(result.visibleArea, inverseMove(fitToPositionRestrictions(result.coordinates, coordinatesToPositionRestrictions(result.visibleArea))));
            }
        }
        return result;
    }
    return state;
}

function transformImage(state, settings, transform) {
    if (transform.rotate) {
        state = rotateImageAlgorithm(state, settings, transform.rotate);
    }
    if (transform.flip) {
        state = flipImageAlgorithm(state, settings, transform.flip.horizontal, transform.flip.vertical);
    }
    if (transform.move || transform.scale) {
        state = transformImageAlgorithm(state, settings, transform);
    }
    return state;
}

function reconcileState(state, settings) {
    if (isInitializedState(state)) {
        var result = copyState(state);
        var aspectRatio = getAspectRatio(state, settings);
        var sizeRestrictions = getSizeRestrictions(state, settings);
        var areaSizeRestrictions = getAreaSizeRestrictions(state, settings);
        // Fit the size of coordinates to existing size restrictions and visible area
        var brokenRatio = getBrokenRatio(ratio(state.coordinates), aspectRatio);
        var desiredSize = brokenRatio
            ? {
                height: state.coordinates.height,
                width: state.coordinates.height * brokenRatio,
            }
            : state.coordinates;
        result.coordinates = __assign(__assign({}, result.coordinates), approximateSize({
            width: desiredSize.width,
            height: desiredSize.height,
            aspectRatio: aspectRatio,
            sizeRestrictions: mergeSizeRestrictions(areaSizeRestrictions, sizeRestrictions),
        }));
        // Return the coordinates to the previous center
        result.coordinates = applyMove(result.coordinates, diff(getCenter(state.coordinates), getCenter(result.coordinates)));
        var scaleModifier = Math.max(result.coordinates.width / result.visibleArea.width, result.coordinates.height / result.visibleArea.height, 1);
        // Fit the visible area to its size restrictions and boundary aspect ratio:
        result.visibleArea = __assign(__assign({}, state.visibleArea), approximateSize({
            width: state.visibleArea.width * scaleModifier,
            height: state.visibleArea.height * scaleModifier,
            aspectRatio: {
                minimum: ratio(result.boundary),
                maximum: ratio(result.boundary),
            },
            sizeRestrictions: areaSizeRestrictions,
        }));
        // Return the visible area to previous center
        result.visibleArea = applyMove(result.visibleArea, diff(getCenter(state.visibleArea), getCenter(result.visibleArea)));
        // Fit the visible area to positions restrictions
        result.visibleArea = moveToPositionRestrictions(result.visibleArea, getAreaPositionRestrictions(result, settings));
        // Fit the coordinates to position restrictions and visible area
        result.coordinates = moveToPositionRestrictions(result.coordinates, mergePositionRestrictions(coordinatesToPositionRestrictions(result.visibleArea), getPositionRestrictions(result, settings)));
        return result;
    }
    return state;
}

function normalizeResizeDirections(state, directions) {
    var coefficient = getCoefficient(state);
    return {
        left: isNumber(directions.left) ? directions.left * coefficient : 0,
        top: isNumber(directions.top) ? directions.top * coefficient : 0,
        right: isNumber(directions.right) ? directions.right * coefficient : 0,
        bottom: isNumber(directions.bottom) ? directions.bottom * coefficient : 0,
    };
}
function normalizeCenter(state, center) {
    var coefficient = getCoefficient(state);
    if (state.visibleArea) {
        return {
            left: center.left * coefficient + state.visibleArea.left,
            top: center.top * coefficient + state.visibleArea.top,
        };
    }
    return center;
}
function normalizeFlip(state, flip) {
    if (state) {
        var normalizedAngle = Math.abs(state.transforms.rotate % 180);
        if (normalizedAngle <= 45 || normalizedAngle >= 135) {
            return flip;
        }
        else {
            return {
                horizontal: flip.vertical,
                vertical: flip.horizontal,
            };
        }
    }
    return flip;
}
function fillMoveDirections(directions) {
    return {
        left: isNumber(directions.left) ? directions.left : 0,
        top: isNumber(directions.top) ? directions.top : 0,
    };
}
function fillResizeDirections(directions) {
    return {
        left: isNumber(directions.left) ? directions.left : 0,
        top: isNumber(directions.top) ? directions.top : 0,
        right: isNumber(directions.right) ? directions.right : 0,
        bottom: isNumber(directions.bottom) ? directions.bottom : 0,
    };
}
function normalizeMoveDirections(state, directions) {
    var coefficient = getCoefficient(state);
    return {
        left: isNumber(directions.left) ? directions.left * coefficient : 0,
        top: isNumber(directions.top) ? directions.top * coefficient : 0,
    };
}
function normalizeImageTransform(state, transform) {
    if (transform.scale) {
        transform.scale = {
            factor: isNumber(transform.scale) ? transform.scale : transform.scale.factor,
            center: !isNumber(transform.scale) && transform.scale.center
                ? normalizeCenter(state, transform.scale.center)
                : undefined,
        };
    }
    if (transform.rotate) {
        transform.rotate = {
            angle: isNumber(transform.rotate) ? transform.rotate : transform.rotate.angle,
            center: !isNumber(transform.rotate) && transform.rotate.center
                ? normalizeCenter(state, transform.rotate.center)
                : undefined,
        };
    }
    if (transform.move) {
        transform.move = normalizeMoveDirections(state, transform.move);
    }
    return transform;
}

function calculateGeometricProperties(touches, container) {
    var _a = container.getBoundingClientRect(), left = _a.left, top = _a.top;
    var centerMass = { left: 0, top: 0 };
    var spread = 0;
    touches.forEach(function (touch) {
        centerMass.left += (touch.clientX - left) / touches.length;
        centerMass.top += (touch.clientY - top) / touches.length;
    });
    touches.forEach(function (touch) {
        spread += distance({ left: centerMass.left, top: centerMass.top }, { left: touch.clientX - left, top: touch.clientY - top });
    });
    return { centerMass: centerMass, spread: spread, count: touches.length };
}
function touchesToImageTransform(touches, previousTouches, container, options) {
    if (options === void 0) { options = {}; }
    var move, scale, rotate;
    if (previousTouches.length === 1 && touches.length === 1) {
        if (options.move) {
            move = {
                left: previousTouches[0].clientX - touches[0].clientX,
                top: previousTouches[0].clientY - touches[0].clientY,
            };
        }
    }
    else if (touches.length > 1) {
        var previousProperties = calculateGeometricProperties(previousTouches, container);
        var properties = calculateGeometricProperties(touches, container);
        if (options.rotate && previousTouches.length === 2 && touches.length === 2) {
            var diffs = {
                left: [
                    touches[0].clientX - touches[1].clientX,
                    previousTouches[0].clientX - previousTouches[1].clientX,
                ],
                top: [touches[0].clientY - touches[1].clientY, previousTouches[0].clientY - previousTouches[1].clientY],
            };
            var y = diffs.left[0] * diffs.top[1] - diffs.left[1] * diffs.top[0];
            var x = diffs.left[0] * diffs.left[1] + diffs.top[0] * diffs.top[1];
            if (!isRoughlyEqual(x, 0) && !isRoughlyEqual(y, 0)) {
                var radians = Math.atan2(y, x);
                var angle = -(radians * 180) / Math.PI;
                rotate = {
                    center: properties.centerMass,
                    angle: angle,
                };
            }
        }
        if (options.move) {
            move = {
                left: previousProperties.centerMass.left - properties.centerMass.left,
                top: previousProperties.centerMass.top - properties.centerMass.top,
            };
        }
        if (options.scale) {
            scale = {
                factor: properties.spread / previousProperties.spread,
                center: properties.centerMass,
            };
        }
    }
    return {
        move: move,
        scale: scale,
        rotate: rotate,
    };
}
function wheelEventToImageTransform(event, container, ratio) {
    if (ratio === void 0) { ratio = 0.1; }
    var _a = container.getBoundingClientRect(), left = _a.left, top = _a.top;
    var factor = 1 - ratio * sign((event.deltaY || event.detail || event.wheelDelta));
    var center = {
        left: event.clientX - left,
        top: event.clientY - top,
    };
    return { scale: { factor: factor, center: center } };
}

function hasInteractions(interactions) {
    return (interactions.moveCoordinates ||
        interactions.resizeCoordinates ||
        interactions.transformImage.move ||
        interactions.transformImage.rotate ||
        interactions.transformImage.flip ||
        interactions.transformImage.scale);
}
function getEmptyInteractions() {
    return {
        moveCoordinates: false,
        resizeCoordinates: false,
        transformImage: {
            rotate: false,
            move: false,
            scale: false,
            flip: false,
        },
    };
}

function defaultPositionRestrictions(state, settings) {
    var imageSize = getTransformedImageSize(state);
    var limits = {};
    if (settings.imageRestriction && settings.imageRestriction !== 'none') {
        limits = {
            left: 0,
            top: 0,
            right: imageSize.width,
            bottom: imageSize.height,
        };
    }
    return limits;
}

function defaultVisibleArea(state, settings) {
    var coordinates = state.coordinates, boundary = state.boundary;
    var imageSize = getTransformedImageSize(state);
    var boundaryRatio = ratio(boundary);
    if (coordinates) {
        // Visible area will try to fit reference:
        var reference = {
            height: Math.max(coordinates.height, imageSize.height),
            width: Math.max(coordinates.width, imageSize.width),
        };
        var visibleArea = {
            left: 0,
            top: 0,
            width: ratio(reference) > boundaryRatio ? reference.width : reference.height * boundaryRatio,
            height: ratio(reference) > boundaryRatio ? reference.width / boundaryRatio : reference.height,
        };
        // Visible area should correspond its restrictions:
        visibleArea = resizeToSizeRestrictions(visibleArea, getAreaSizeRestrictions(state, settings));
        // Visible area will try to center stencil:
        visibleArea.left = coordinates.left + coordinates.width / 2 - visibleArea.width / 2;
        visibleArea.top = coordinates.top + coordinates.height / 2 - visibleArea.height / 2;
        // TODO: Controversial behavior:
        // If the coordinates are beyond image visible area will be allowed to be beyond image alike:
        var coordinatesIntersection = getIntersections(coordinates, coordinatesToPositionRestrictions(__assign({ left: 0, top: 0 }, imageSize)));
        var restrictions = {};
        if (!coordinatesIntersection.left && !coordinatesIntersection.right && visibleArea.width <= imageSize.width) {
            restrictions.left = 0;
            restrictions.right = imageSize.width;
        }
        if (!coordinatesIntersection.top && !coordinatesIntersection.bottom && visibleArea.height <= imageSize.height) {
            restrictions.top = 0;
            restrictions.bottom = imageSize.height;
        }
        return moveToPositionRestrictions(visibleArea, restrictions);
    }
    else {
        var imageRatio = ratio(imageSize);
        var areaProperties = {
            height: imageRatio < boundaryRatio ? imageSize.height : imageSize.width / boundaryRatio,
            width: imageRatio < boundaryRatio ? imageSize.height * boundaryRatio : imageSize.width,
        };
        return {
            left: imageSize.width / 2 - areaProperties.width / 2,
            top: imageSize.height / 2 - areaProperties.height / 2,
            width: areaProperties.width,
            height: areaProperties.height,
        };
    }
}

function defaultSize(state, settings) {
    var imageSize = state.imageSize, visibleArea = state.visibleArea;
    var sizeRestrictions = getSizeRestrictions(state, settings);
    var aspectRatio = getAspectRatio(state, settings);
    var area;
    if (visibleArea) {
        area = visibleArea;
    }
    else {
        var sizeRestrictions_1 = positionToSizeRestrictions(getPositionRestrictions(state, settings));
        area = {
            width: Math.max(sizeRestrictions_1.minWidth, Math.min(sizeRestrictions_1.maxWidth, imageSize.width)),
            height: Math.max(sizeRestrictions_1.minHeight, Math.min(sizeRestrictions_1.maxHeight, imageSize.height)),
        };
    }
    var optimalRatio = Math.min(aspectRatio.maximum || Infinity, Math.max(aspectRatio.minimum || 0, ratio(area)));
    var size = area.width < area.height
        ? {
            width: area.width * 0.8,
            height: (area.width * 0.8) / optimalRatio,
        }
        : {
            height: area.height * 0.8,
            width: area.height * 0.8 * optimalRatio,
        };
    return approximateSize(__assign(__assign({}, size), { aspectRatio: aspectRatio, sizeRestrictions: sizeRestrictions }));
}

function retrieveSizeRestrictions(settings) {
    return {
        minWidth: isNumeric(settings.minWidth) ? parseNumber(settings.minWidth) : 0,
        minHeight: isNumeric(settings.minHeight) ? parseNumber(settings.minHeight) : 0,
        maxWidth: isNumeric(settings.maxWidth) ? parseNumber(settings.maxWidth) : Infinity,
        maxHeight: isNumeric(settings.maxHeight) ? parseNumber(settings.maxHeight) : Infinity,
    };
}
function pixelsRestrictions(state, settings) {
    return retrieveSizeRestrictions(settings);
}

function defaultPosition(state) {
    var visibleArea = state.visibleArea, coordinates = state.coordinates;
    var area = visibleArea || getTransformedImageSize(state);
    return {
        left: (visibleArea ? visibleArea.left : 0) + area.width / 2 - (coordinates ? coordinates.width / 2 : 0),
        top: (visibleArea ? visibleArea.top : 0) + area.height / 2 - (coordinates ? coordinates.height / 2 : 0),
    };
}

function defaultAreaPositionRestrictions(state, settings) {
    var visibleArea = state.visibleArea, boundary = state.boundary;
    var imageRestriction = settings.imageRestriction;
    var imageSize = getTransformedImageSize(state);
    var restrictions = {};
    if (imageRestriction === ImageRestriction.fillArea) {
        restrictions = {
            left: 0,
            top: 0,
            right: imageSize.width,
            bottom: imageSize.height,
        };
    }
    else if (imageRestriction === ImageRestriction.fitArea) {
        if (ratio(boundary) > ratio(imageSize)) {
            restrictions = {
                top: 0,
                bottom: imageSize.height,
            };
            if (visibleArea) {
                if (visibleArea.width > imageSize.width) {
                    restrictions.left = -(visibleArea.width - imageSize.width) / 2;
                    restrictions.right = imageSize.width - restrictions.left;
                }
                else {
                    restrictions.left = 0;
                    restrictions.right = imageSize.width;
                }
            }
        }
        else {
            restrictions = {
                left: 0,
                right: imageSize.width,
            };
            if (visibleArea) {
                if (visibleArea.height > imageSize.height) {
                    restrictions.top = -(visibleArea.height - imageSize.height) / 2;
                    restrictions.bottom = imageSize.height - restrictions.top;
                }
                else {
                    restrictions.top = 0;
                    restrictions.bottom = imageSize.height;
                }
            }
        }
    }
    return restrictions;
}

function defaultAreaSizeRestrictions(state, settings) {
    var boundary = state.boundary;
    var imageRestriction = settings.imageRestriction;
    var imageSize = getTransformedImageSize(state);
    var restrictions = {
        minWidth: 0,
        minHeight: 0,
        maxWidth: Infinity,
        maxHeight: Infinity,
    };
    if (imageRestriction === ImageRestriction.fillArea) {
        restrictions.maxWidth = imageSize.width;
        restrictions.maxHeight = imageSize.height;
    }
    else if (imageRestriction === ImageRestriction.fitArea) {
        if (ratio(boundary) > ratio(imageSize)) {
            restrictions.maxHeight = imageSize.height;
            restrictions.maxWidth = imageSize.height * ratio(boundary);
        }
        else {
            restrictions.maxWidth = imageSize.width;
            restrictions.maxHeight = imageSize.width / ratio(boundary);
        }
    }
    return restrictions;
}

function fillBoundary(boundary) {
    var _a = boundary.getBoundingClientRect(), width = _a.width, height = _a.height;
    return {
        width: width,
        height: height,
    };
}

function defaultStencilConstraints(rawSettings, stencilProps) {
    if (!rawSettings.aspectRatio) {
        return {
            aspectRatio: createAspectRatio(isFunction(stencilProps.aspectRatio) ? stencilProps.aspectRatio() : stencilProps.aspectRatio),
        };
    }
    return {};
}

function createDefaultSettings(params) {
    return __assign(__assign({}, params), { sizeRestrictions: function (state, basicSettings) {
            var restrictions;
            if (params.sizeRestrictions) {
                restrictions = isFunction(params.sizeRestrictions)
                    ? params.sizeRestrictions(state, basicSettings)
                    : params.sizeRestrictions;
            }
            else {
                restrictions = pixelsRestrictions(state, basicSettings);
            }
            return restrictions;
        }, areaPositionRestrictions: function (state, basicSettings) {
            if (params.areaPositionRestrictions) {
                return isFunction(params.areaPositionRestrictions)
                    ? params.areaPositionRestrictions(state, basicSettings)
                    : params.areaPositionRestrictions;
            }
            else {
                return defaultAreaPositionRestrictions(state, basicSettings);
            }
        }, areaSizeRestrictions: function (state, basicSettings) {
            if (params.areaSizeRestrictions) {
                return isFunction(params.areaSizeRestrictions)
                    ? params.areaSizeRestrictions(state, basicSettings)
                    : params.areaSizeRestrictions;
            }
            else {
                return defaultAreaSizeRestrictions(state, basicSettings);
            }
        }, positionRestrictions: function (state, basicSettings) {
            if (params.positionRestrictions) {
                return isFunction(params.positionRestrictions)
                    ? params.positionRestrictions(state, basicSettings)
                    : params.positionRestrictions;
            }
            else {
                return defaultPositionRestrictions(state, basicSettings);
            }
        }, defaultCoordinates: function (state, basicSettings) {
            if (params.defaultCoordinates) {
                return isFunction(params.defaultCoordinates)
                    ? params.defaultCoordinates(state, basicSettings)
                    : params.defaultCoordinates;
            }
            else {
                var defaultSizeAlgorithm = params.defaultSize;
                if (!defaultSizeAlgorithm) {
                    defaultSizeAlgorithm = defaultSize;
                }
                var size = isFunction(defaultSizeAlgorithm)
                    ? defaultSizeAlgorithm(state, basicSettings)
                    : defaultSizeAlgorithm;
                var defaultPositionAlgorithm_1 = params.defaultPosition || defaultPosition;
                return [
                    size,
                    function (state) { return (__assign({}, (isFunction(defaultPositionAlgorithm_1)
                        ? defaultPositionAlgorithm_1(state, basicSettings)
                        : defaultPositionAlgorithm_1))); },
                ];
            }
        }, defaultVisibleArea: function (state, basicSettings) {
            if (params.defaultVisibleArea) {
                return isFunction(params.defaultVisibleArea)
                    ? params.defaultVisibleArea(state, basicSettings)
                    : params.defaultVisibleArea;
            }
            else {
                return defaultVisibleArea(state, basicSettings);
            }
        }, aspectRatio: function (state, basicSettings) {
            return createAspectRatio(isFunction(params.aspectRatio) ? params.aspectRatio(state, basicSettings) : params.aspectRatio);
        } });
}

function runCallback(callback, getInstance) {
    if (callback && getInstance) {
        var instance = getInstance();
        if (instance) {
            callback(instance);
        }
    }
}
function runCallbacks(callbacks, getInstance) {
    callbacks.forEach(function (callback) {
        runCallback(callback, getInstance);
    });
}
var AbstractCropperInstance = /** @class */ (function () {
    function AbstractCropperInstance() {
        var _this = this;
        this.getTransitions = function () {
            var data = _this.getData();
            var transitions = _this.getProps().transitions;
            return __assign(__assign({}, getOptions(transitions, {
                timingFunction: 'ease-in-out',
                duration: 350,
            })), { active: data.transitions });
        };
        this.getInteractions = function () {
            var interactions = _this.getData().interactions;
            return deepClone(interactions);
        };
        this.hasInteractions = function () {
            var interactions = _this.getData().interactions;
            return hasInteractions(interactions);
        };
        this.startTransitions = function () {
            var _a = _this.getProps(), onTransitionsStart = _a.onTransitionsStart, onUpdate = _a.onUpdate, getInstance = _a.getInstance;
            var _b = _this.getData(), transitions = _b.transitions, data = __rest(_b, ["transitions"]);
            _this.setData(__assign(__assign({}, data), { transitions: true }));
            if (!transitions) {
                runCallbacks([onTransitionsStart, onUpdate], getInstance);
            }
            _this.endTransitions();
        };
        this.endTransitions = debounce(function () {
            var _a = _this.getProps(), onTransitionsEnd = _a.onTransitionsEnd, onUpdate = _a.onUpdate, getInstance = _a.getInstance;
            _this.setData(__assign(__assign({}, _this.getData()), { transitions: false }));
            runCallbacks([onTransitionsEnd, onUpdate], getInstance);
        }, function () {
            return _this.getTransitions().duration;
        });
        this.applyPostProcess = function (action, state) {
            var _a = _this.getProps(), settings = _a.settings, postProcess = _a.postProcess;
            var name = action.name, _b = action.interaction, interaction = _b === void 0 ? false : _b, _c = action.transitions, transitions = _c === void 0 ? false : _c, _d = action.immediately, immediately = _d === void 0 ? false : _d;
            var preparedAction = {
                name: name,
                interaction: interaction,
                transitions: transitions,
                immediately: immediately,
            };
            if (isArray(postProcess)) {
                return postProcess.reduce(function (processedState, p) { return p(processedState, settings, preparedAction); }, state);
            }
            else if (isFunction(postProcess)) {
                return postProcess(state, settings, preparedAction);
            }
            else {
                return state;
            }
        };
        this.updateState = function (modifier, options, callbacks) {
            if (options === void 0) { options = {}; }
            if (callbacks === void 0) { callbacks = []; }
            var _a = options.transitions, transitions = _a === void 0 ? false : _a;
            var _b = _this.getProps(), onTransitionsStart = _b.onTransitionsStart, getInstance = _b.getInstance, onChange = _b.onChange, onUpdate = _b.onUpdate, settings = _b.settings;
            var previousData = _this.getData();
            var state = isFunction(modifier) ? modifier(previousData.state, settings) : modifier;
            var tolerance = state ? 1e-3 * getCoefficient(state) : 1e-3;
            var somethingChanged = !deepCompare(previousData.state, state, tolerance);
            var affectTransitionProperties = [
                'coordinates',
                'boundary',
                'visibleArea',
                'imageSize',
                'transforms',
            ].some(function (property) { var _a; return !deepCompare((_a = previousData.state) === null || _a === void 0 ? void 0 : _a[property], state === null || state === void 0 ? void 0 : state[property], tolerance); });
            var currentData = previousData;
            if (somethingChanged) {
                if (transitions && affectTransitionProperties) {
                    _this.endTransitions();
                }
                currentData = __assign(__assign({}, currentData), { state: copyState(state), transitions: transitions && affectTransitionProperties });
                _this.setData(currentData);
                runCallback(onChange, getInstance);
            }
            if (currentData.transitions && !previousData.transitions) {
                runCallback(onTransitionsStart, getInstance);
            }
            runCallbacks(__spreadArrays(callbacks, [onUpdate]), getInstance);
        };
        this.setInteractions = function (interactions) {
            var _a = _this.getProps(), onInteractionStart = _a.onInteractionStart, onInteractionEnd = _a.onInteractionEnd, getInstance = _a.getInstance;
            var previousInteractions = _this.getInteractions();
            var currentInteractions = __assign(__assign({}, previousInteractions), interactions);
            if (!deepCompare(previousInteractions, currentInteractions)) {
                _this.setData(__assign(__assign({}, _this.getData()), { interactions: currentInteractions }));
            }
            if (hasInteractions(previousInteractions) !== hasInteractions(currentInteractions)) {
                if (!hasInteractions(previousInteractions)) {
                    runCallback(onInteractionStart, getInstance);
                }
                else {
                    var state_1 = _this.getData().state;
                    _this.updateState(function () {
                        return state_1 &&
                            _this.applyPostProcess({
                                name: 'interactionEnd',
                                immediately: true,
                                transitions: true,
                            }, state_1);
                    }, {
                        transitions: true,
                    }, [onInteractionEnd]);
                }
            }
        };
        this.resetState = function (boundary, image) {
            _this.updateState(_this.createDefaultState(boundary, image));
        };
        this.clear = function () {
            _this.updateState(null);
        };
        this.reconcileState = function (options) {
            if (options === void 0) { options = {}; }
            var _a = _this.getProps(), reconcileStateAlgorithm = _a.reconcileStateAlgorithm, settings = _a.settings;
            var state = _this.getData().state;
            var _b = options.transitions, transitions = _b === void 0 ? false : _b;
            if (state && !isConsistentState(state, settings)) {
                var reconciledState = (reconcileStateAlgorithm || reconcileState)(state, settings);
                reconciledState = _this.applyPostProcess({
                    name: 'reconcileState',
                    immediately: true,
                    transitions: transitions,
                }, reconciledState);
                _this.updateState(reconciledState, {
                    transitions: transitions,
                });
            }
        };
        this.transformImage = function (transform, options) {
            if (options === void 0) { options = {}; }
            var _a = options.transitions, transitions = _a === void 0 ? true : _a, _b = options.interaction, interaction = _b === void 0 ? true : _b, _c = options.immediately, immediately = _c === void 0 ? false : _c, _d = options.normalize, normalize = _d === void 0 ? true : _d;
            var _e = _this.getProps(), transformImageAlgorithm = _e.transformImageAlgorithm, onTransformImage = _e.onTransformImage, onTransformImageEnd = _e.onTransformImageEnd, settings = _e.settings;
            var state = _this.getData().state;
            var callbacks = [];
            if (state) {
                if (normalize) {
                    transform = normalizeImageTransform(state, transform);
                }
                var result = _this.applyPostProcess({
                    name: 'transformImage',
                    transitions: transitions,
                    immediately: immediately,
                }, (transformImageAlgorithm || transformImage)(state, settings, transform));
                callbacks.push(onTransformImage);
                if (interaction) {
                    _this.setInteractions({
                        transformImage: {
                            rotate: !isUndefined(transform.rotate),
                            flip: !isUndefined(transform.flip),
                            scale: !isUndefined(transform.scale),
                            move: !isUndefined(transform.move),
                        },
                    });
                }
                else {
                    result = _this.applyPostProcess({
                        name: 'transformImageEnd',
                        transitions: transitions,
                        immediately: true,
                    }, result);
                    callbacks.push(onTransformImageEnd);
                }
                _this.updateState(result, {
                    transitions: immediately && transitions,
                }, callbacks);
            }
        };
        this.transformImageEnd = function (options) {
            if (options === void 0) { options = {}; }
            var _a = options.immediately, immediately = _a === void 0 ? true : _a, _b = options.transitions, transitions = _b === void 0 ? true : _b;
            var state = _this.getData().state;
            var onTransformImageEnd = _this.getProps().onTransformImageEnd;
            _this.updateState(function () { return state && _this.applyPostProcess({ name: 'transformImageEnd', immediately: immediately, transitions: transitions }, state); }, {
                transitions: transitions,
            }, [onTransformImageEnd]);
            _this.setInteractions({
                transformImage: {
                    rotate: false,
                    flip: false,
                    scale: false,
                    move: false,
                },
            });
        };
        this.zoomImage = function (scale, options) {
            if (options === void 0) { options = {}; }
            var _a = options.interaction, interaction = _a === void 0 ? false : _a, _b = options.immediately, immediately = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? true : _c, _d = options.normalize, normalize = _d === void 0 ? false : _d;
            _this.transformImage({
                scale: scale,
            }, { interaction: interaction, immediately: immediately, transitions: transitions, normalize: normalize });
        };
        this.moveImage = function (left, top, options) {
            if (options === void 0) { options = {}; }
            var _a = options.interaction, interaction = _a === void 0 ? false : _a, _b = options.immediately, immediately = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? true : _c, _d = options.normalize, normalize = _d === void 0 ? false : _d;
            _this.transformImage({
                move: {
                    left: left,
                    top: top,
                },
            }, { interaction: interaction, immediately: immediately, transitions: transitions, normalize: normalize });
        };
        this.flipImage = function (horizontal, vertical, options) {
            if (options === void 0) { options = {}; }
            var _a = options.interaction, interaction = _a === void 0 ? false : _a, _b = options.immediately, immediately = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? true : _c, _d = options.normalize, normalize = _d === void 0 ? true : _d;
            var state = _this.getState();
            var flip = {
                horizontal: horizontal,
                vertical: vertical,
            };
            _this.transformImage({
                flip: state && normalize ? normalizeFlip(state, flip) : flip,
            }, { interaction: interaction, immediately: immediately, transitions: transitions });
        };
        this.rotateImage = function (rotate, options) {
            if (options === void 0) { options = {}; }
            var _a = options.interaction, interaction = _a === void 0 ? false : _a, _b = options.immediately, immediately = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? true : _c, _d = options.normalize, normalize = _d === void 0 ? false : _d;
            _this.transformImage({
                rotate: rotate,
            }, { interaction: interaction, immediately: immediately, transitions: transitions, normalize: normalize });
        };
        this.reset = function (boundary, image) {
            _this.resetState(boundary, image);
        };
        this.setState = function (modifier, options) {
            if (options === void 0) { options = {}; }
            var settings = _this.getSettings();
            var state = _this.getData().state;
            var _a = options.transitions, transitions = _a === void 0 ? true : _a, _b = options.immediately, immediately = _b === void 0 ? false : _b, _c = options.interaction, interaction = _c === void 0 ? false : _c, _d = options.postprocess, postprocess = _d === void 0 ? false : _d;
            var newState = modifier && (isFunction(modifier) ? modifier(state, settings) : __assign(__assign({}, state), modifier));
            _this.updateState(function () {
                return postprocess
                    ? newState &&
                        _this.applyPostProcess({
                            name: 'setState',
                            immediately: immediately,
                            transitions: transitions,
                            interaction: interaction,
                        }, newState)
                    : newState;
            }, {
                transitions: transitions,
            });
        };
        this.setCoordinates = function (transforms, options) {
            if (options === void 0) { options = {}; }
            var state = _this.getData().state;
            var _a = _this.getProps(), setCoordinatesAlgorithm = _a.setCoordinatesAlgorithm, settings = _a.settings;
            var _b = options.transitions, transitions = _b === void 0 ? true : _b, _c = options.immediately, immediately = _c === void 0 ? true : _c;
            _this.updateState(function () {
                return state &&
                    _this.applyPostProcess({
                        name: 'setCoordinates',
                        immediately: immediately,
                        transitions: transitions,
                    }, (setCoordinatesAlgorithm || setCoordinates)(state, settings, transforms, SetCoordinatesMode.zoom));
            }, {
                transitions: transitions,
            });
        };
        this.setVisibleArea = function (visibleArea, options) {
            if (options === void 0) { options = {}; }
            var _a = options.transitions, transitions = _a === void 0 ? true : _a, _b = options.immediately, immediately = _b === void 0 ? true : _b;
            var state = _this.getData().state;
            var _c = _this.getProps(), setVisibleAreaAlgorithm = _c.setVisibleAreaAlgorithm, settings = _c.settings;
            _this.updateState(function () {
                return state &&
                    _this.applyPostProcess({ name: 'setVisibleArea', immediately: immediately, transitions: transitions }, (setVisibleAreaAlgorithm || setVisibleArea)(state, settings, visibleArea));
            }, {
                transitions: transitions,
            });
        };
        this.setBoundary = function (boundary, options) {
            if (options === void 0) { options = {}; }
            var state = _this.getData().state;
            var _a = _this.getProps(), setBoundaryAlgorithm = _a.setBoundaryAlgorithm, settings = _a.settings;
            var _b = options.transitions, transitions = _b === void 0 ? false : _b, _c = options.immediately, immediately = _c === void 0 ? true : _c;
            if (boundary) {
                _this.updateState(function () {
                    return state &&
                        _this.applyPostProcess({ name: 'setBoundary', immediately: immediately, transitions: transitions }, (setBoundaryAlgorithm || setBoundary)(state, settings, boundary));
                });
            }
            else {
                _this.updateState(null);
            }
        };
        this.moveCoordinates = function (directions, options) {
            if (options === void 0) { options = {}; }
            var data = _this.getData();
            var _a = _this.getProps(), moveCoordinatesAlgorithm = _a.moveCoordinatesAlgorithm, onMove = _a.onMove, onMoveEnd = _a.onMoveEnd, settings = _a.settings;
            var _b = options.interaction, interaction = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? false : _c, _d = options.immediately, immediately = _d === void 0 ? false : _d, _e = options.normalize, normalize = _e === void 0 ? true : _e;
            var callbacks = [];
            if (!data.transitions && data.state) {
                var normalizedDirections = normalize
                    ? normalizeMoveDirections(data.state, directions)
                    : fillMoveDirections(directions);
                var result = _this.applyPostProcess({ name: 'moveCoordinates', interaction: interaction, immediately: immediately, transitions: transitions }, (moveCoordinatesAlgorithm || moveCoordinates)(data.state, settings, normalizedDirections));
                callbacks.push(onMove);
                if (interaction) {
                    _this.setInteractions({
                        moveCoordinates: true,
                    });
                }
                else {
                    result = _this.applyPostProcess({ name: 'moveCoordinatesEnd', interaction: interaction, immediately: immediately, transitions: transitions }, result);
                    callbacks.push(onMoveEnd);
                }
                _this.updateState(result, {
                    transitions: immediately && transitions,
                }, callbacks);
            }
        };
        this.moveCoordinatesEnd = function (options) {
            if (options === void 0) { options = {}; }
            var state = _this.getData().state;
            var onMoveEnd = _this.getProps().onMoveEnd;
            var _a = options.transitions, transitions = _a === void 0 ? true : _a, _b = options.immediately, immediately = _b === void 0 ? false : _b;
            _this.updateState(function () { return state && _this.applyPostProcess({ name: 'moveCoordinatesEnd', transitions: transitions, immediately: immediately }, state); }, {
                transitions: transitions,
            }, [onMoveEnd]);
            _this.setInteractions({
                moveCoordinates: false,
            });
        };
        this.resizeCoordinates = function (anchor, directions, parameters, options) {
            if (options === void 0) { options = {}; }
            var state = _this.getData().state;
            var _a = _this.getProps(), resizeCoordinatesAlgorithm = _a.resizeCoordinatesAlgorithm, onResize = _a.onResize, onResizeEnd = _a.onResizeEnd, settings = _a.settings;
            var _b = options.interaction, interaction = _b === void 0 ? true : _b, _c = options.transitions, transitions = _c === void 0 ? false : _c, _d = options.immediately, immediately = _d === void 0 ? false : _d, _e = options.normalize, normalize = _e === void 0 ? true : _e;
            var transitionsOptions = _this.getTransitions();
            if (!transitionsOptions.active && state) {
                var callbacks = [];
                var normalizedDirections = normalize
                    ? normalizeResizeDirections(state, directions)
                    : fillResizeDirections(directions);
                var result = _this.applyPostProcess({ name: 'resizeCoordinates', interaction: interaction, immediately: immediately, transitions: transitions }, (resizeCoordinatesAlgorithm || resizeCoordinates)(state, settings, anchor, normalizedDirections, isObject(parameters) ? parameters : {}));
                callbacks.push(onResize);
                if (interaction) {
                    _this.setInteractions({
                        resizeCoordinates: true,
                    });
                }
                else {
                    result = _this.applyPostProcess({ name: 'resizeCoordinatesEnd', interaction: interaction, immediately: immediately, transitions: transitions }, result);
                    callbacks.push(onResizeEnd);
                }
                _this.updateState(result, {
                    transitions: immediately && transitions,
                }, callbacks);
            }
        };
        this.resizeCoordinatesEnd = function (options) {
            if (options === void 0) { options = {}; }
            var onResizeEnd = _this.getProps().onResizeEnd;
            var state = _this.getData().state;
            var _a = options.transitions, transitions = _a === void 0 ? true : _a, _b = options.immediately, immediately = _b === void 0 ? false : _b;
            _this.updateState(function () { return state && _this.applyPostProcess({ name: 'resizeCoordinatesEnd', transitions: transitions, immediately: immediately }, state); }, {
                transitions: transitions,
            }, [onResizeEnd]);
            _this.setInteractions({
                resizeCoordinates: false,
            });
        };
        this.getStencilCoordinates = function () {
            var state = _this.getData().state;
            return getStencilCoordinates(state);
        };
        this.getCoordinates = function (options) {
            if (options === void 0) { options = {}; }
            var state = _this.getData().state;
            var settings = _this.getProps().settings;
            if (state && state.coordinates) {
                var _a = options.round, round = _a === void 0 ? true : _a;
                if (round) {
                    return getRoundedCoordinates(state, settings);
                }
                else {
                    return __assign({}, state.coordinates);
                }
            }
            else {
                return null;
            }
        };
        this.getVisibleArea = function () {
            var state = _this.getData().state;
            if (state === null || state === void 0 ? void 0 : state.visibleArea) {
                return __assign({}, state.visibleArea);
            }
            else {
                return null;
            }
        };
        this.getSettings = function () {
            var settings = _this.getProps().settings;
            return __assign({}, settings);
        };
        this.getState = function () {
            var state = _this.getData().state;
            return copyState(state);
        };
        this.getTransforms = function () {
            var state = _this.getData().state;
            return state
                ? deepClone(state.transforms)
                : {
                    rotate: 0,
                    flip: {
                        horizontal: false,
                        vertical: false,
                    },
                };
        };
        this.createDefaultState = function (boundary, image) {
            var _a = _this.getProps(), createStateAlgorithm = _a.createStateAlgorithm, settings = _a.settings;
            return _this.applyPostProcess({
                name: 'createState',
                immediately: true,
                transitions: false,
            }, (createStateAlgorithm || createState)({
                image: image,
                boundary: boundary,
            }, settings));
        };
        this.isConsistent = function () {
            var state = _this.getData().state;
            var settings = _this.getProps().settings;
            return state ? isConsistentState(state, settings) : true;
        };
    }
    return AbstractCropperInstance;
}());

var timingFunctions = {
    linear: function (t) {
        return t;
    },
    'ease-in': function (t) {
        return Math.pow(t, 1.675);
    },
    'ease-out': function (t) {
        return 1 - Math.pow(1 - t, 1.675);
    },
    'ease-in-out': function (t) {
        return 0.5 * (Math.sin((t - 0.5) * Math.PI) + 1);
    },
};
var Animation = /** @class */ (function () {
    function Animation() {
        this.active = false;
    }
    Animation.prototype.start = function (animation) {
        var _a;
        this.onStart = animation.onStart;
        this.onProgress = animation.onProgress;
        this.onStop = animation.onStop;
        if (!this.active) {
            (_a = this.onStart) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        if (this.id) {
            window.cancelAnimationFrame(this.id);
        }
        this.startTime = performance.now();
        this.timingFunction = animation.timingFunction;
        this.endTime = this.startTime + animation.duration;
        this.active = true;
        this.animate();
    };
    Animation.prototype.animate = function () {
        var _this = this;
        if (this.startTime && this.endTime) {
            var timingFunction = timingFunctions[this.timingFunction];
            if (!timingFunction) {
                if (process.env.NODE_ENV !== 'production') {
                    console.warn("[Animation] The timing function '" + timingFunction + "' is not supported. Available timing function: 'linear', 'ease-in', 'ease-in-out', 'ease-out'. Reset to 'ease-out'.");
                }
                timingFunction = timingFunctions['ease-out'];
            }
            var percent = 1 - (this.endTime - performance.now()) / (this.endTime - this.startTime);
            var progress = Math.min(1, timingFunction(percent));
            if (this.onProgress) {
                this.onProgress(progress);
            }
            if (percent < 1) {
                this.id = window.requestAnimationFrame(function () { return _this.animate(); });
            }
            else {
                this.stop();
            }
        }
        else {
            this.stop();
        }
    };
    Animation.prototype.stop = function () {
        this.active = false;
        if (this.id) {
            window.cancelAnimationFrame(this.id);
        }
        if (this.onStop) {
            this.onStop();
        }
    };
    return Animation;
}());

function prepareSource(canvas, image, _a) {
    var rotate = _a.rotate, flip = _a.flip;
    var originalSize = {
        width: 'naturalWidth' in image ? image.naturalWidth : image.width,
        height: 'naturalHeight' in image ? image.naturalHeight : image.height,
    };
    var transformedSize = rotateSize(originalSize, rotate);
    var ctx = canvas.getContext('2d');
    canvas.height = transformedSize.height;
    canvas.width = transformedSize.width;
    if (ctx) {
        ctx.save();
        // Rotation:
        var canvasCenter = rotatePoint(getCenter(__assign({ left: 0, top: 0 }, originalSize)), rotate);
        ctx.translate(-(canvasCenter.left - transformedSize.width / 2), -(canvasCenter.top - transformedSize.height / 2));
        ctx.rotate((rotate * Math.PI) / 180);
        // Reflection;
        ctx.translate(flip.horizontal ? originalSize.width : 0, flip.vertical ? originalSize.height : 0);
        ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
        ctx.drawImage(image, 0, 0, originalSize.width, originalSize.height);
        ctx.restore();
    }
    return canvas;
}
function updateCanvas(canvas, source, coordinates, resultSize, options) {
    canvas.width = resultSize ? resultSize.width : coordinates.width;
    canvas.height = resultSize ? resultSize.height : coordinates.height;
    var ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (options) {
            if (options.imageSmoothingEnabled) {
                ctx.imageSmoothingEnabled = options.imageSmoothingEnabled;
            }
            if (options.imageSmoothingQuality) {
                ctx.imageSmoothingQuality = options.imageSmoothingQuality;
            }
            if (options.fillColor) {
                ctx.fillStyle = options.fillColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.save();
            }
        }
        var offsetX = coordinates.left < 0 ? -coordinates.left : 0;
        var offsetY = coordinates.top < 0 ? -coordinates.top : 0;
        ctx.drawImage(source, coordinates.left + offsetX, coordinates.top + offsetY, coordinates.width, coordinates.height, offsetX * (canvas.width / coordinates.width), offsetY * (canvas.height / coordinates.height), canvas.width, canvas.height);
    }
    return canvas;
}
function drawCroppedArea(state, image, resultCanvas, spareCanvas, options) {
    if (isInitializedState(state)) {
        var transforms = state.transforms, coordinates = state.coordinates;
        var imageTransformed = transforms.rotate !== 0 || transforms.flip.horizontal || transforms.flip.vertical;
        var source = imageTransformed ? prepareSource(spareCanvas, image, transforms) : image;
        var params = __assign({ minWidth: 0, minHeight: 0, maxWidth: Infinity, maxHeight: Infinity, maxArea: Infinity, imageSmoothingEnabled: true, imageSmoothingQuality: 'high', fillColor: 'transparent' }, options);
        var firstNumeric = function (array) { return array.find(function (el) { return isNumeric(el); }); };
        var size = approximateSize({
            sizeRestrictions: {
                minWidth: firstNumeric([params.width, params.minWidth]) || 0,
                minHeight: firstNumeric([params.height, params.minHeight]) || 0,
                maxWidth: firstNumeric([params.width, params.maxWidth]) || Infinity,
                maxHeight: firstNumeric([params.height, params.maxHeight]) || Infinity,
            },
            width: coordinates.width,
            height: coordinates.height,
            aspectRatio: {
                minimum: coordinates.width / coordinates.height,
                maximum: coordinates.width / coordinates.height,
            },
        });
        if (params.maxArea && size.width * size.height > params.maxArea) {
            var scale = Math.sqrt(params.maxArea / (size.width * size.height));
            size = {
                width: Math.round(scale * size.width),
                height: Math.round(scale * size.height),
            };
        }
        return updateCanvas(resultCanvas, source, coordinates, size, params);
    }
    else {
        return null;
    }
}

function stretchCropperBoundary(boundary, stretcher, size) {
    // Reset stretcher
    stretcher.style.width = "0px";
    stretcher.style.height = "0px";
    // Try to fit the size by width:
    stretcher.style.width = Math.max(boundary.clientWidth, size.width) + "px";
    // After that try to fit the size by height and resulted width:
    var ratio = size.width / size.height;
    stretcher.style.height = Math.max(boundary.clientHeight, stretcher.clientWidth / ratio) + "px";
    stretcher.style.width = stretcher.clientHeight * ratio + "px";
}

var XHR_DONE = 4;
function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/^data:([^;]+);base64,/gim, '');
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return buffer;
}
function objectURLToBlob(url, callback) {
    var http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.responseType = 'blob';
    http.onload = function () {
        if (this.status == 200 || this.status === 0) {
            callback(this.response);
        }
    };
    http.send();
}
function getTransforms(orientation) {
    var result = {
        flip: {
            horizontal: false,
            vertical: false,
        },
        rotate: 0,
    };
    if (orientation) {
        switch (orientation) {
            case 2:
                result.flip.horizontal = true;
                break;
            case 3:
                result.rotate = -180;
                break;
            case 4:
                result.flip.vertical = true;
                break;
            case 5:
                result.rotate = 90;
                result.flip.vertical = true;
                break;
            case 6:
                result.rotate = 90;
                break;
            case 7:
                result.rotate = 90;
                result.flip.horizontal = true;
                break;
            case 8:
                result.rotate = -90;
                break;
        }
    }
    return result;
}
function getImageData(img) {
    return new Promise(function (resolve, reject) {
        try {
            if (img) {
                if (/^data:/i.test(img)) {
                    // Data URL
                    resolve(base64ToArrayBuffer(img));
                }
                else if (/^blob:/i.test(img)) {
                    // Blob
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        var _a;
                        resolve((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
                    };
                    objectURLToBlob(img, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    // Simple URL
                    var http_1 = new XMLHttpRequest();
                    http_1.onreadystatechange = function () {
                        if (http_1.readyState !== XHR_DONE)
                            return;
                        if (http_1.status === 200 || http_1.status === 0) {
                            resolve(http_1.response);
                        }
                        else {
                            reject('Warning: could not load an image to parse its orientation');
                        }
                    };
                    http_1.onprogress = function () {
                        // Abort the request directly if it not a JPEG image for better performance
                        if (http_1.getResponseHeader('content-type') !== 'image/jpeg') {
                            http_1.abort();
                        }
                    };
                    http_1.withCredentials = false;
                    http_1.open('GET', img, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
            else {
                reject('Error: the image is empty');
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
function getStyleTransforms(transforms) {
    var _a = transforms.rotate, rotate = _a === void 0 ? 0 : _a, _b = transforms.flip, flip = _b === void 0 ? { horizontal: false, vertical: false } : _b, _c = transforms.scale, scale = _c === void 0 ? 1 : _c;
    return " rotate(" + rotate + "deg) scaleX(" + scale * (flip.horizontal ? -1 : 1) + ") scaleY(" + scale * (flip.vertical ? -1 : 1) + ")";
}
function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;
    for (i = start, length += start; i < length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
}
function resetAndGetOrientation(arrayBuffer) {
    try {
        var dataView = new DataView(arrayBuffer);
        var orientation_1;
        var exifIDCode = void 0;
        var tiffOffset = void 0;
        var littleEndian = void 0;
        var app1Start = void 0;
        var ifdStart = void 0;
        // Only handle JPEG image (start by 0xFFD8)
        if (dataView.getUint8(0) === 0xff && dataView.getUint8(1) === 0xd8) {
            var length_1 = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length_1) {
                if (dataView.getUint8(offset) === 0xff && dataView.getUint8(offset + 1) === 0xe1) {
                    app1Start = offset;
                    break;
                }
                offset++;
            }
        }
        if (app1Start) {
            exifIDCode = app1Start + 4;
            tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
                var endianness = dataView.getUint16(tiffOffset);
                littleEndian = endianness === 0x4949;
                if (littleEndian || endianness === 0x4d4d /* bigEndian */) {
                    if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002a) {
                        var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                        if (firstIFDOffset >= 0x00000008) {
                            ifdStart = tiffOffset + firstIFDOffset;
                        }
                    }
                }
            }
        }
        if (ifdStart) {
            var length_2 = dataView.getUint16(ifdStart, littleEndian);
            for (var i = 0; i < length_2; i++) {
                var offset = ifdStart + i * 12 + 2;
                if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {
                    // 8 is the offset of the current tag's value
                    offset += 8;
                    // Get the original orientation value
                    orientation_1 = dataView.getUint16(offset, littleEndian);
                    // Override the orientation with its default value
                    dataView.setUint16(offset, 1, littleEndian);
                    break;
                }
            }
        }
        return orientation_1;
    }
    catch (error) {
        return null;
    }
}
function arrayBufferToDataURL(arrayBuffer) {
    var chunks = [];
    // Chunk Typed Array for better performance
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);
    while (uint8.length > 0) {
        var value = uint8.subarray(0, chunkSize);
        chunks.push(String.fromCharCode.apply(null, (Array.from ? Array.from(value) : value.slice())));
        uint8 = uint8.subarray(chunkSize);
    }
    return "data:image/jpeg;base64," + btoa(chunks.join(''));
}
function getImage(_a) {
    var src = _a.src, _b = _a.arrayBuffer, arrayBuffer = _b === void 0 ? null : _b, _c = _a.orientation, orientation = _c === void 0 ? null : _c;
    var options = {
        src: src,
        arrayBuffer: arrayBuffer,
        revoke: false,
        transforms: {
            flip: {
                horizontal: false,
                vertical: false,
            },
            rotate: 0,
        },
    };
    if (arrayBuffer && orientation && orientation > 1) {
        if (isBlob(src) || !isLocal(src)) {
            options.src = URL.createObjectURL(new Blob([arrayBuffer]));
            options.revoke = true;
        }
        else {
            options.src = arrayBufferToDataURL(arrayBuffer);
        }
    }
    else {
        options.src = src;
    }
    if (orientation) {
        options.transforms = getTransforms(orientation);
    }
    return options;
}
function parseImage(src, settings) {
    if (settings === void 0) { settings = {}; }
    var checkOrientation = settings.checkOrientation, parse = settings.parse;
    return new Promise(function (resolve) {
        if (checkOrientation || parse) {
            getImageData(src)
                .then(function (data) {
                var orientation = resetAndGetOrientation(data);
                resolve(getImage(data
                    ? { src: src, arrayBuffer: data, orientation: orientation }
                    : { src: src, arrayBuffer: null, orientation: null }));
            })
                .catch(function (error) {
                console.warn(error);
                resolve(getImage({ src: src }));
            });
        }
        else {
            resolve(getImage({ src: src }));
        }
    });
}
function createImage(src, settings) {
    if (settings === void 0) { settings = {}; }
    return new Promise(function (resolve, reject) {
        var image = document.createElement('img');
        if (settings.crossOrigin) {
            image.crossOrigin = settings.crossOrigin !== true ? settings.crossOrigin : 'anonymous';
        }
        image.src = src;
        image.style.visibility = 'hidden';
        image.style.position = 'fixed';
        document.body.appendChild(image);
        if (image.complete) {
            resolve(image);
            document.body.removeChild(image);
        }
        else {
            image.addEventListener('load', function () {
                resolve(image);
                document.body.removeChild(image);
            });
            image.addEventListener('error', function () {
                reject(null);
                document.body.removeChild(image);
            });
        }
    });
}
function loadImage(src, settings) {
    if (settings === void 0) { settings = {}; }
    return parseImage(src, __assign(__assign({}, settings), { crossOrigin: isCrossOriginURL(src) && settings.crossOrigin })).then(function (options) {
        return new Promise(function (resolve, reject) {
            createImage(options.src, settings)
                .then(function (image) {
                resolve(__assign(__assign({}, options), { width: image.naturalWidth, height: image.naturalHeight }));
            })
                .catch(function () {
                reject(null);
            });
        });
    });
}
function getImageStyle(image, state, area, coefficient, transitions) {
    if (transitions === void 0) { transitions = null; }
    var optimalImageSize = image.width > image.height
        ? {
            width: Math.min(512, image.width),
            height: Math.min(512, image.width) / (image.width / image.height),
        }
        : {
            height: Math.min(512, image.height),
            width: Math.min(512, image.height) * (image.width / image.height),
        };
    var actualImageSize = getTransformedImageSize(state);
    var imageTransforms = {
        rotate: state.transforms.rotate,
        flip: {
            horizontal: state.transforms.flip.horizontal,
            vertical: state.transforms.flip.vertical,
        },
        translateX: area.left / coefficient,
        translateY: area.top / coefficient,
        scale: 1 / coefficient,
    };
    var compensations = {
        rotate: {
            left: (optimalImageSize.width - actualImageSize.width) / (2 * coefficient),
            top: (optimalImageSize.height - actualImageSize.height) / (2 * coefficient),
        },
        scale: {
            left: ((1 - 1 / coefficient) * optimalImageSize.width) / 2,
            top: ((1 - 1 / coefficient) * optimalImageSize.height) / 2,
        },
    };
    var transforms = __assign(__assign({}, imageTransforms), { scale: imageTransforms.scale * (image.width / optimalImageSize.width) });
    var result = {
        width: optimalImageSize.width + "px",
        height: optimalImageSize.height + "px",
        left: '0px',
        top: '0px',
        transition: 'none',
        transform: "translate3d(" + (-compensations.rotate.left - compensations.scale.left - imageTransforms.translateX) + "px, " + (-compensations.rotate.top - compensations.scale.top - imageTransforms.translateY) + "px, 0px)" + getStyleTransforms(transforms),
        willChange: 'none',
    };
    if (transitions && transitions.active) {
        result.willChange = 'transform';
        result.transition = transitions.duration + "ms " + transitions.timingFunction;
    }
    return result;
}
function getBackgroundStyle(image, state, transitions) {
    if (transitions === void 0) { transitions = null; }
    if (image && state && state.visibleArea) {
        return getImageStyle(image, state, state.visibleArea, getCoefficient(state), transitions);
    }
    else {
        return {};
    }
}

function useFirstMountState() {
  var isFirst = useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
}

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isFirstMount = useFirstMountState();
  useEffect(function () {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

function useStateWithCallback(initialState) {
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    callback = _useState4[0],
    setCallback = _useState4[1];
  var previousState = useRef(initialState);
  useUpdateEffect(function () {
    if (callback) {
      callback(state, previousState.current);
    }
  }, [callback]);
  return [state, function (value, callback) {
    previousState.current = state;
    setState(value);
    setCallback(function () {
      return callback;
    });
  }];
}

var CropperInstance = /*#__PURE__*/function (_AbstractCropperInsta) {
  function CropperInstance(props, onChange) {
    var _this;
    _classCallCheck(this, CropperInstance);
    _this = _callSuper(this, CropperInstance);
    _this.props = props;
    _this.notify = onChange;
    _this.data = {
      state: null,
      transitions: false,
      interactions: getEmptyInteractions()
    };
    return _this;
  }
  _inherits(CropperInstance, _AbstractCropperInsta);
  return _createClass(CropperInstance, [{
    key: "getProps",
    value: function getProps() {
      return this.props();
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.notify();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }]);
}(AbstractCropperInstance);

function useForceRerender() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setTick = _useState2[1];
  return function () {
    setTick({});
  };
}

function usePersistentFunction(props) {
  var propsRef = useRef(props);
  propsRef.current = props;
  return function () {
    return propsRef.current.apply(propsRef, arguments);
  };
}

var _excluded$2 = ["settings"];
function useCropperInstance(props) {
  var rerender = useForceRerender();
  var getProps = usePersistentFunction(function () {
    var _props = props(),
      settings = _props.settings,
      parameters = _objectWithoutProperties(_props, _excluded$2);
    var extendedSettings = _objectSpread2({
      imageRestriction: ImageRestriction.fitArea,
      transformImage: {
        adjustStencil: true
      }
    }, settings);
    var extendedParameters = _objectSpread2({
      transitions: true
    }, parameters);
    return _objectSpread2({
      settings: _objectSpread2(_objectSpread2({}, extendedSettings), createDefaultSettings(extendedSettings))
    }, extendedParameters);
  });
  var cropper = useRef(new CropperInstance(getProps, rerender));
  return cropper.current;
}

function useCropperImage(options) {
  var src = options.src,
    onLoadingStart = options.onLoadingStart,
    onLoadingEnd = options.onLoadingEnd,
    onError = options.onError,
    onLoad = options.onLoad,
    crossOrigin = options.crossOrigin,
    checkOrientation = options.checkOrientation,
    canvas = options.canvas,
    unloadTime = options.unloadTime;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    image = _useState2[0],
    setImage = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useStateWithCallback = useStateWithCallback(false),
    _useStateWithCallback2 = _slicedToArray(_useStateWithCallback, 2),
    loaded = _useStateWithCallback2[0],
    setLoaded = _useStateWithCallback2[1];
  var currentSrc = useRef(null);
  useEffect(function () {
    if (currentSrc.current !== src) {
      currentSrc.current = src || null;
      setLoaded(false);
      if (src) {
        setLoading(true);
        onLoadingStart === null || onLoadingStart === void 0 || onLoadingStart();
        var promises = [loadImage(src, {
          crossOrigin: isUndefined(crossOrigin) ? canvas : crossOrigin,
          checkOrientation: checkOrientation
        })];
        if (loaded && unloadTime) {
          promises.push(promiseTimeout(unloadTime));
        }
        Promise.all(promises).then(function (responses) {
          var _responses = _slicedToArray(responses, 1),
            image = _responses[0];
          if (currentSrc.current === src) {
            setImage(image);
          }
        })["catch"](function () {
          if (currentSrc.current === src) {
            onError === null || onError === void 0 || onError();
          }
        })["finally"](function () {
          if (currentSrc.current === src) {
            onLoadingEnd === null || onLoadingEnd === void 0 || onLoadingEnd();
            setLoading(false);
          }
        });
      } else {
        if (unloadTime) {
          promiseTimeout(unloadTime).then(function () {
            if (currentSrc.current === src) {
              setImage(null);
            }
          });
        } else {
          setImage(null);
        }
      }
    }
  }, [src, image]);
  useEffect(function () {
    if (image) {
      setLoaded(true, function () {
        onLoad === null || onLoad === void 0 || onLoad(image);
      });
    }
  }, [image]);
  return {
    isLoading: function isLoading() {
      return loading;
    },
    isLoaded: function isLoaded() {
      return loaded;
    },
    getImage: function getImage() {
      return image;
    },
    setImage: setImage
  };
}

var useWindowResize = function useWindowResize(callback) {
  var callbackRef = useRef(callback);
  var internalCallback = function internalCallback() {
    if (callbackRef.current) {
      callbackRef.current();
    }
  };
  useEffect(function () {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(function () {
    window.addEventListener('resize', internalCallback);
    window.addEventListener('orientationchange', internalCallback);
    return function () {
      window.removeEventListener('resize', internalCallback);
      window.removeEventListener('orientationchange', internalCallback);
    };
  }, []);
};

function useCropperAutoReconcile(cropper) {
  var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _useState = useState(enabled),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  useLayoutEffect(function () {
    if (active && !cropper.hasInteractions()) {
      cropper.reconcileState();
    }
  });
  return {
    pause: function pause() {
      setActive(false);
    },
    resume: function resume() {
      setActive(true);
    }
  };
}

function useAbstractCropper(props) {
  var _props = props(),
    src = _props.src,
    onReady = _props.onReady,
    _onError = _props.onError,
    onUpdate = _props.onUpdate,
    _props$canvas = _props.canvas,
    canvas = _props$canvas === void 0 ? true : _props$canvas,
    _props$unloadTime = _props.unloadTime,
    unloadTime = _props$unloadTime === void 0 ? 500 : _props$unloadTime,
    _props$crossOrigin = _props.crossOrigin,
    crossOrigin = _props$crossOrigin === void 0 ? true : _props$crossOrigin,
    _props$checkOrientati = _props.checkOrientation,
    checkOrientation = _props$checkOrientati === void 0 ? true : _props$checkOrientati,
    _props$autoReconcileS = _props.autoReconcileState,
    autoReconcileState = _props$autoReconcileS === void 0 ? true : _props$autoReconcileS;
  var imageRef = useRef(null);
  var boundaryRef = useRef(null);
  var canvasRef = useRef(null);
  var cropperRef = useRef(null);
  var _useStateWithCallback = useStateWithCallback(null),
    _useStateWithCallback2 = _slicedToArray(_useStateWithCallback, 2),
    currentImage = _useStateWithCallback2[0],
    setCurrentImage = _useStateWithCallback2[1];
  var cropper = useCropperInstance(function () {
    return _objectSpread2(_objectSpread2({}, props()), {}, {
      getInstance: function getInstance() {
        return cropperRef.current;
      }
    });
  });
  var cropperImage = useCropperImage({
    src: src,
    crossOrigin: crossOrigin,
    checkOrientation: checkOrientation,
    unloadTime: unloadTime,
    canvas: canvas,
    onError: function onError() {
      if (cropperRef.current) {
        _onError === null || _onError === void 0 || _onError(cropperRef.current);
      }
    }
  });
  var autoReconcile = useCropperAutoReconcile(cropper, autoReconcileState);
  var resetCropper = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _boundaryRef$current, image, boundary;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!boundaryRef.current) {
              _context.next = 8;
              break;
            }
            autoReconcile.pause();
            image = cropperImage.getImage();
            _context.next = 5;
            return (_boundaryRef$current = boundaryRef.current) === null || _boundaryRef$current === void 0 ? void 0 : _boundaryRef$current.stretchTo(image);
          case 5:
            boundary = _context.sent;
            setCurrentImage(image, function () {
              if (boundary && image) {
                cropper.reset(boundary, image);
              } else {
                cropper.clear();
              }
            });
            autoReconcile.resume();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resetCropper() {
      return _ref.apply(this, arguments);
    };
  }();
  var refreshCropper = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _boundaryRef$current2, image, boundary, state;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!boundaryRef.current) {
              _context2.next = 8;
              break;
            }
            autoReconcile.pause();
            image = cropperImage.getImage();
            _context2.next = 5;
            return (_boundaryRef$current2 = boundaryRef.current) === null || _boundaryRef$current2 === void 0 ? void 0 : _boundaryRef$current2.stretchTo(image);
          case 5:
            boundary = _context2.sent;
            if (boundary && image) {
              state = cropper.getState();
              if (state) {
                if (boundary.width !== state.boundary.width || boundary.height !== state.boundary.height) {
                  cropper.setBoundary(boundary);
                  cropper.reconcileState();
                }
              } else {
                cropper.reset(boundary, image);
              }
            } else {
              cropper.clear();
            }
            autoReconcile.resume();
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function refreshCropper() {
      return _ref2.apply(this, arguments);
    };
  }();
  var cropperInterface = {
    reset: resetCropper,
    refresh: refreshCropper,
    setImage: setCurrentImage,
    reconcileState: cropper.reconcileState,
    moveCoordinates: cropper.moveCoordinates,
    moveCoordinatesEnd: cropper.moveCoordinatesEnd,
    resizeCoordinates: cropper.resizeCoordinates,
    clear: cropper.clear,
    resizeCoordinatesEnd: cropper.resizeCoordinatesEnd,
    moveImage: cropper.moveImage,
    flipImage: cropper.flipImage,
    zoomImage: cropper.zoomImage,
    rotateImage: cropper.rotateImage,
    transformImage: cropper.transformImage,
    transformImageEnd: cropper.transformImageEnd,
    setCoordinates: cropper.setCoordinates,
    setVisibleArea: cropper.setVisibleArea,
    startTransitions: cropper.startTransitions,
    setState: cropper.setState,
    hasInteractions: cropper.hasInteractions,
    getStencilCoordinates: cropper.getStencilCoordinates,
    getCoordinates: cropper.getCoordinates,
    getVisibleArea: cropper.getVisibleArea,
    getTransforms: cropper.getTransforms,
    getTransitions: cropper.getTransitions,
    getInteractions: cropper.getInteractions,
    getSettings: cropper.getSettings,
    getState: cropper.getState,
    getDefaultState: function getDefaultState() {
      var state = cropper.getState();
      var image = cropperImage.getImage();
      return state && image ? cropper.createDefaultState(state.boundary, image) : null;
    },
    getCanvas: function getCanvas(options) {
      var state = cropper.getState();
      return imageRef.current && canvasRef.current && state ? canvasRef.current.draw(state, imageRef.current, options) : null;
    },
    getImage: function getImage() {
      return currentImage ? _objectSpread2({}, currentImage) : null;
    },
    isLoading: cropperImage.isLoading,
    isLoaded: cropperImage.isLoaded
  };
  useWindowResize(refreshCropper);
  useUpdateEffect(resetCropper, [cropperImage.getImage()]);
  useUpdateEffect(function () {
    if (cropperRef.current && currentImage) {
      onReady === null || onReady === void 0 || onReady(cropperRef.current);
    }
  }, [currentImage]);
  useUpdateEffect(function () {
    if (cropperRef.current) {
      onUpdate === null || onUpdate === void 0 || onUpdate(cropperRef.current);
    }
  }, [cropperImage.isLoaded(), cropperImage.isLoading()]);
  useImperativeHandle(cropperRef, function () {
    return cropperInterface;
  });
  return {
    cropper: cropperInterface,
    refs: {
      image: imageRef,
      boundary: boundaryRef,
      canvas: canvasRef
    },
    image: currentImage
  };
}

var StretchableBoundary = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    stretcherClassName = _ref.stretcherClassName,
    contentClassName = _ref.contentClassName,
    _ref$stretchAlgorithm = _ref.stretchAlgorithm,
    stretchAlgorithm = _ref$stretchAlgorithm === void 0 ? stretchCropperBoundary : _ref$stretchAlgorithm,
    _ref$sizeAlgorithm = _ref.sizeAlgorithm,
    sizeAlgorithm = _ref$sizeAlgorithm === void 0 ? fillBoundary : _ref$sizeAlgorithm,
    children = _ref.children;
  var stretcherRef = useRef(null);
  var boundaryRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      reset: function reset() {
        var stretcher = stretcherRef.current;
        if (stretcher) {
          stretcher.style.height = '';
          stretcher.style.width = '';
        }
      },
      stretchTo: function stretchTo(size) {
        var stretcher = stretcherRef.current;
        var boundary = boundaryRef.current;
        if (size !== null && size !== void 0 && size.width && size !== null && size !== void 0 && size.height && stretcher && boundary) {
          stretchAlgorithm(boundary, stretcher, size);
          var result = sizeAlgorithm(boundary, size);
          return Promise.resolve(result.width && result.height ? result : null);
        } else {
          if (stretcher) {
            stretcher.style.height = '';
            stretcher.style.width = '';
          }
          return Promise.resolve(null);
        }
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: boundaryRef,
    style: style,
    className: cn('advanced-cropper-boundary', className)
  }, /*#__PURE__*/React.createElement("div", {
    ref: stretcherRef,
    className: cn('advanced-cropper-boundary__stretcher', stretcherClassName)
  }), /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-boundary__content', contentClassName)
  }, children));
});
StretchableBoundary.displayName = 'StretchableBoundary';

var CropperFade = function CropperFade(_ref) {
  var visible = _ref.visible,
    className = _ref.className,
    style = _ref.style,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: cn(className, 'advanced-cropper-fade', Boolean(visible) && 'advanced-cropper-fade--visible')
  }, children);
};

var CropperWrapper = function CropperWrapper(_ref) {
  var cropper = _ref.cropper,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  var state = cropper ? cropper.getState() : null;
  var loaded = cropper ? cropper.isLoaded() : false;
  return /*#__PURE__*/React.createElement("div", {
    className: cn(className, 'advanced-cropper-wrapper'),
    style: style
  }, /*#__PURE__*/React.createElement(CropperFade, {
    visible: state && loaded,
    className: 'advanced-cropper-wrapper__fade'
  }, children));
};

function preventDefault(e) {
  e.preventDefault();
}

var CropperBackgroundImage = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    cropper = _ref.cropper,
    _ref$crossOrigin = _ref.crossOrigin,
    crossOrigin = _ref$crossOrigin === void 0 ? true : _ref$crossOrigin;
  var state = cropper.getState();
  var transitions = cropper.getTransitions();
  var image = cropper.getImage();
  var transformStyles = image && state ? getBackgroundStyle(image, state, transitions) : {};
  var src = image ? image.src : undefined;
  return src ? /*#__PURE__*/React.createElement("img", {
    key: src,
    ref: ref,
    className: cn('advanced-cropper-background-image', className),
    src: src,
    crossOrigin: crossOrigin === true ? 'anonymous' : crossOrigin || undefined,
    style: _objectSpread2(_objectSpread2({}, transformStyles), style),
    onMouseDown: preventDefault
  }) : null;
});
CropperBackgroundImage.displayName = 'CropperBackgroundImage';

var CropperCanvas = /*#__PURE__*/forwardRef(function (_, ref) {
  var canvasRef = useRef(null);
  var spareCanvasRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      draw: function draw(state, image) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (image && canvasRef.current && spareCanvasRef.current) {
          return drawCroppedArea(state, image, canvasRef.current, spareCanvasRef.current, options);
        } else {
          return null;
        }
      }
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("canvas", {
    className: "advanced-cropper-canvas",
    ref: canvasRef
  }), /*#__PURE__*/React.createElement("canvas", {
    className: "advanced-cropper-canvas",
    ref: spareCanvasRef
  }));
});
CropperCanvas.displayName = 'CropperCanvas';

var DraggableElement = /*#__PURE__*/function (_Component) {
  function DraggableElement(props) {
    var _this;
    _classCallCheck(this, DraggableElement);
    _this = _callSuper(this, DraggableElement, [props]);
    _defineProperty(_this, "processMove", function (e, newTouches) {
      var container = _this.container.current;
      if (container && _this.touches.length) {
        var _container$getBoundin = container.getBoundingClientRect(),
          left = _container$getBoundin.left,
          top = _container$getBoundin.top;
        if (_this.touches.length === 1 && newTouches.length === 1) {
          if (_this.props.onMove) {
            var _this$props;
            var movingToAnchor = {
              left: Math.abs(newTouches[0].clientX - _this.anchor.left - left) < Math.abs(_this.touches[0].clientX - _this.anchor.left - left),
              top: Math.abs(newTouches[0].clientY - _this.anchor.top - top) < Math.abs(_this.touches[0].clientY - _this.anchor.top - top)
            };
            var direction = {
              left: 0,
              top: 0
            };
            if (!_this.props.useAnchor || !movingToAnchor.left) {
              direction.left = newTouches[0].clientX - _this.touches[0].clientX;
            }
            if (!_this.props.useAnchor || !movingToAnchor.top) {
              direction.top = newTouches[0].clientY - _this.touches[0].clientY;
            }
            (_this$props = _this.props) === null || _this$props === void 0 || _this$props.onMove(direction, e);
            _this.touches = _toConsumableArray(newTouches);
          }
        }
      }
    });
    _defineProperty(_this, "processEnd", function () {
      var _this$props2 = _this.props,
        onMoveEnd = _this$props2.onMoveEnd,
        onLeave = _this$props2.onLeave;
      if (!_this.props.disabled && _this.touches.length) {
        onMoveEnd === null || onMoveEnd === void 0 || onMoveEnd();
      }
      if (_this.hovered) {
        onLeave === null || onLeave === void 0 || onLeave();
        _this.hovered = false;
      }
      _this.touches = [];
    });
    _defineProperty(_this, "initAnchor", function (touch) {
      var container = _this.container.current;
      if (container) {
        var _container$getBoundin2 = container.getBoundingClientRect(),
          left = _container$getBoundin2.left,
          top = _container$getBoundin2.top;
        _this.anchor = {
          left: touch.clientX - left,
          top: touch.clientY - top
        };
      }
    });
    _defineProperty(_this, "onMouseOver", function () {
      var _this$props3 = _this.props,
        onEnter = _this$props3.onEnter,
        disabled = _this$props3.disabled;
      if (!_this.hovered && !disabled) {
        _this.hovered = true;
        onEnter === null || onEnter === void 0 || onEnter();
      }
    });
    _defineProperty(_this, "onMouseLeave", function () {
      var onLeave = _this.props.onLeave;
      if (_this.hovered && !_this.touches.length) {
        _this.hovered = false;
        onLeave === null || onLeave === void 0 || onLeave();
      }
    });
    _defineProperty(_this, "onTouchStart", function (e) {
      var _this$props4 = _this.props,
        onEnter = _this$props4.onEnter,
        onMoveStart = _this$props4.onMoveStart,
        disabled = _this$props4.disabled;
      if (e.cancelable) {
        _this.touches = Array.from(e.touches);
        var shouldStartMove = !disabled && e.touches.length === 1;
        if (shouldStartMove) {
          _this.touches = Array.from(e.touches);
          onMoveStart === null || onMoveStart === void 0 || onMoveStart();
        }
        if (!_this.hovered && !disabled) {
          _this.hovered = true;
          onEnter === null || onEnter === void 0 || onEnter();
        }
        if (_this.started || shouldStartMove) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    });
    _defineProperty(_this, "onTouchEnd", function () {
      _this.started = false;
      _this.processEnd();
    });
    _defineProperty(_this, "onTouchMove", function (e) {
      if (_this.touches.length >= 1) {
        if (_this.started) {
          _this.processMove(e, Array.from(e.touches));
          e.preventDefault();
          e.stopPropagation();
        } else if (distance({
          left: _this.touches[0].clientX,
          top: _this.touches[0].clientY
        }, {
          left: e.touches[0].clientX,
          top: e.touches[0].clientY
        }) > (_this.props.activationDistance || 0)) {
          _this.initAnchor({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
          });
          _this.started = true;
        }
      }
    });
    _defineProperty(_this, "onMouseDown", function (e) {
      var _this$props5 = _this.props,
        onMoveStart = _this$props5.onMoveStart,
        disabled = _this$props5.disabled;
      if (!disabled && e.button === 0) {
        var touch = {
          clientX: e.clientX,
          clientY: e.clientY
        };
        _this.touches = [touch];
        _this.initAnchor(touch);
        e.stopPropagation();
        onMoveStart === null || onMoveStart === void 0 || onMoveStart();
      }
    });
    _defineProperty(_this, "onMouseMove", function (e) {
      if (!_this.props.disabled && _this.touches.length) {
        _this.processMove(e, [{
          clientX: e.clientX,
          clientY: e.clientY
        }]);
        if (e.preventDefault && e.cancelable) {
          e.preventDefault();
        }
        e.stopPropagation();
      }
    });
    _defineProperty(_this, "onMouseUp", function () {
      _this.processEnd();
    });
    _this.touches = [];
    _this.hovered = false;
    _this.started = false;
    _this.anchor = {
      left: 0,
      top: 0
    };
    _this.container = /*#__PURE__*/createRef();
    return _this;
  }
  _inherits(DraggableElement, _Component);
  return _createClass(DraggableElement, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
      var container = this.container.current;
      if (container) {
        container.removeEventListener('touchstart', this.onTouchStart);
        container.removeEventListener('mousedown', this.onMouseDown);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseUp, {
        passive: false
      });
      window.addEventListener('mousemove', this.onMouseMove, {
        passive: false
      });
      window.addEventListener('touchmove', this.onTouchMove, {
        passive: false
      });
      window.addEventListener('touchend', this.onTouchEnd, {
        passive: false
      });
      var container = this.container.current;
      if (container) {
        container.addEventListener('touchstart', this.onTouchStart, {
          passive: false
        });
        container.addEventListener('mousedown', this.onMouseDown, {
          passive: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.disabled && !prevProps.disabled) {
        this.touches = [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        children = _this$props6.children,
        className = _this$props6.className;
      return /*#__PURE__*/React.createElement("div", {
        className: cn('advanced-cropper-draggable-element', className),
        ref: this.container,
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave
      }, children);
    }
  }]);
}(Component);
_defineProperty(DraggableElement, "defaultProps", {
  disabled: false,
  activationDistance: 30,
  useAnchor: true,
  rerender: true
});

var LineWrapper = function LineWrapper(_ref) {
  var position = _ref.position,
    className = _ref.className,
    disabled = _ref.disabled,
    onDrag = _ref.onDrag,
    onDragEnd = _ref.onDragEnd,
    onLeave = _ref.onLeave,
    onEnter = _ref.onEnter,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(DraggableElement, {
    className: cn(['advanced-cropper-line-wrapper', position && "advanced-cropper-line-wrapper--".concat(position), disabled && "advanced-cropper-line-wrapper--disabled", className]),
    disabled: disabled,
    onMove: onDrag,
    onMoveEnd: onDragEnd,
    onLeave: onLeave,
    onEnter: onEnter,
    activationDistance: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: cn(['advanced-cropper-line-wrapper__content', position && "advanced-cropper-line-wrapper__content--".concat(position)])
  }, children));
};

var SimpleLine = function SimpleLine(_ref) {
  var position = _ref.position,
    hoverClassName = _ref.hoverClassName,
    wrapperClassName = _ref.wrapperClassName,
    defaultClassName = _ref.defaultClassName,
    disabled = _ref.disabled,
    onMove = _ref.onMove,
    onMoveEnd = _ref.onMoveEnd;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var onEnter = function onEnter() {
    setHover(true);
  };
  var onLeave = function onLeave() {
    setHover(false);
  };
  return /*#__PURE__*/React.createElement(LineWrapper, {
    className: cn('advanced-cropper-simple-line-wrapper', wrapperClassName, _defineProperty({}, "advanced-cropper-simple-line-wrapper--".concat(position), !!position)),
    position: position,
    disabled: disabled,
    onDrag: onMove,
    onDragEnd: onMoveEnd,
    onLeave: onLeave,
    onEnter: onEnter
  }, /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-simple-line', hover && 'advanced-cropper-simple-line--hover', defaultClassName, hover && hoverClassName, _defineProperty({}, "advanced-cropper-simple-line--".concat(position), !!position))
  }));
};

var HandlerWrapper = function HandlerWrapper(_ref) {
  var horizontalPosition = _ref.horizontalPosition,
    verticalPosition = _ref.verticalPosition,
    className = _ref.className,
    disabled = _ref.disabled,
    onDrag = _ref.onDrag,
    onDragEnd = _ref.onDragEnd,
    onLeave = _ref.onLeave,
    onEnter = _ref.onEnter,
    children = _ref.children,
    style = _ref.style;
  var position = horizontalPosition || verticalPosition ? getDirectionNames(horizontalPosition, verticalPosition).snakeCase : null;
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: cn(className, 'advanced-cropper-handler-wrapper', position && "advanced-cropper-handler-wrapper--".concat(position), disabled && 'advanced-cropper-handler-wrapper--disabled')
  }, /*#__PURE__*/React.createElement(DraggableElement, {
    className: 'advanced-cropper-handler-wrapper__draggable',
    disabled: disabled,
    onMove: onDrag,
    onMoveEnd: onDragEnd,
    onLeave: onLeave,
    onEnter: onEnter,
    activationDistance: 0
  }, children));
};

var SimpleHandler = function SimpleHandler(_ref) {
  var verticalPosition = _ref.verticalPosition,
    horizontalPosition = _ref.horizontalPosition,
    hoverClassName = _ref.hoverClassName,
    wrapperClassName = _ref.wrapperClassName,
    defaultClassName = _ref.defaultClassName,
    wrapperStyle = _ref.wrapperStyle,
    disabled = _ref.disabled,
    onMove = _ref.onMove,
    onMoveEnd = _ref.onMoveEnd;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var onEnter = function onEnter() {
    setHover(true);
  };
  var onLeave = function onLeave() {
    setHover(false);
  };
  return /*#__PURE__*/React.createElement(HandlerWrapper, {
    style: wrapperStyle,
    className: cn('advanced-cropper-simple-handler-wrapper', wrapperClassName, verticalPosition && "advanced-cropper-simple-handler-wrapper--".concat(verticalPosition), horizontalPosition && "advanced-cropper-simple-handler-wrapper--".concat(horizontalPosition), horizontalPosition && verticalPosition && "advanced-cropper-simple-handler-wrapper--".concat(horizontalPosition, "-").concat(verticalPosition), hover && 'advanced-cropper-simple-handler-wrapper--hover'),
    verticalPosition: verticalPosition,
    horizontalPosition: horizontalPosition,
    disabled: disabled,
    onDrag: onMove,
    onDragEnd: onMoveEnd,
    onLeave: onLeave,
    onEnter: onEnter
  }, /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-simple-handler', hover && 'advanced-cropper-simple-handler--hover', defaultClassName, hover && hoverClassName, _defineProperty(_defineProperty(_defineProperty({}, "advanced-cropper-simple-handler--".concat(verticalPosition), !!verticalPosition), "advanced-cropper-simple-handler--".concat(horizontalPosition), !!horizontalPosition), "advanced-cropper-simple-handler--".concat(horizontalPosition, "-").concat(verticalPosition), horizontalPosition && verticalPosition))
  }));
};

var HORIZONTAL_DIRECTIONS = ['east', 'west', null];
var VERTICAL_DIRECTIONS = ['south', 'north', null];
var BoundingBox = function BoundingBox(_ref) {
  var style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    onResize = _ref.onResize,
    onResizeEnd = _ref.onResizeEnd,
    _ref$handlerComponent = _ref.handlerComponent,
    handlerComponent = _ref$handlerComponent === void 0 ? SimpleHandler : _ref$handlerComponent,
    _ref$handlers = _ref.handlers,
    handlers = _ref$handlers === void 0 ? {
      eastNorth: true,
      north: true,
      westNorth: true,
      west: true,
      westSouth: true,
      south: true,
      eastSouth: true,
      east: true
    } : _ref$handlers,
    _ref$handlerClassName = _ref.handlerClassNames,
    handlerClassNames = _ref$handlerClassName === void 0 ? {} : _ref$handlerClassName,
    _ref$handlerWrapperCl = _ref.handlerWrapperClassNames,
    handlerWrapperClassNames = _ref$handlerWrapperCl === void 0 ? {} : _ref$handlerWrapperCl,
    _ref$lines = _ref.lines,
    lines = _ref$lines === void 0 ? {
      west: true,
      north: true,
      east: true,
      south: true
    } : _ref$lines,
    _ref$lineComponent = _ref.lineComponent,
    lineComponent = _ref$lineComponent === void 0 ? SimpleLine : _ref$lineComponent,
    _ref$lineClassNames = _ref.lineClassNames,
    lineClassNames = _ref$lineClassNames === void 0 ? {} : _ref$lineClassNames,
    _ref$lineWrapperClass = _ref.lineWrapperClassNames,
    lineWrapperClassNames = _ref$lineWrapperClass === void 0 ? {} : _ref$lineWrapperClass,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$reference = _ref.reference,
    reference = _ref$reference === void 0 ? null : _ref$reference;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    lastReference = _useState2[0],
    setLastReference = _useState2[1];
  var points = useMemo(function () {
    var result = [];
    HORIZONTAL_DIRECTIONS.forEach(function (hDirection) {
      VERTICAL_DIRECTIONS.forEach(function (vDirection) {
        if (hDirection !== vDirection) {
          var _getDirectionNames = getDirectionNames(hDirection, vDirection),
            snakeCase = _getDirectionNames.snakeCase,
            camelCase = _getDirectionNames.camelCase;
          if (snakeCase && camelCase) {
            result.push({
              name: camelCase,
              className: snakeCase,
              verticalPosition: vDirection,
              horizontalPosition: hDirection
            });
          }
        }
      });
    });
    return result;
  }, []);
  var lineNodes = useMemo(function () {
    var result = [];
    points.forEach(function (point) {
      if (isCardinalDirection(point.name) && (isObject(lines) ? lines[point.name] : lines)) {
        result.push({
          name: point.name,
          component: lineComponent,
          className: cn(lineClassNames["default"], lineClassNames[point.name], disabled && lineClassNames.disabled),
          wrapperClassName: cn("advanced-cropper-bounding-box__line", "advanced-cropper-bounding-box__line--".concat(point.name), lineWrapperClassNames["default"], lineWrapperClassNames[point.name], disabled && lineWrapperClassNames.disabled),
          hoverClassName: lineClassNames.hover,
          verticalPosition: point.verticalPosition,
          horizontalPosition: point.horizontalPosition,
          disabled: disabled
        });
      }
    });
    return result;
  }, [points, lines, lineComponent, lineClassNames, lineWrapperClassNames, disabled]);
  var handlerNodes = useMemo(function () {
    var result = [];
    points.forEach(function (point) {
      if (isObject(handlers) ? handlers[point.name] : handlers) {
        result.push({
          name: point.name,
          component: handlerComponent,
          className: cn(handlerClassNames["default"], handlerClassNames[point.name]),
          containerClassName: cn("advanced-cropper-bounding-box__handler-wrapper", "advanced-cropper-bounding-box__handler-wrapper--".concat(point.className)),
          wrapperClassName: cn("advanced-cropper-bounding-box__handler", "advanced-cropper-bounding-box__handler--".concat(point.className), handlerWrapperClassNames["default"], handlerWrapperClassNames[point.name]),
          hoverClassName: handlerClassNames.hover,
          verticalPosition: point.verticalPosition,
          horizontalPosition: point.horizontalPosition,
          disabled: disabled
        });
      }
    });
    return result;
  }, [points, handlers, handlerComponent, handlerClassNames, handlerWrapperClassNames, disabled]);
  var onHandlerMove = function onHandlerMove(horizontalPosition, verticalPosition) {
    return function (_ref2, nativeEvent) {
      var left = _ref2.left,
        top = _ref2.top;
      var directions = {
        left: left,
        top: top
      };
      var respectDirection;
      if (!verticalPosition && horizontalPosition) {
        respectDirection = 'width';
      } else if (verticalPosition && !horizontalPosition) {
        respectDirection = 'height';
      }
      if (!disabled) {
        if (onResize) {
          var anchor = getDirectionNames(horizontalPosition, verticalPosition).camelCase;
          if (anchor) {
            onResize(anchor, directions, {
              reference: lastReference || reference,
              preserveAspectRatio: nativeEvent && nativeEvent.shiftKey,
              respectDirection: respectDirection,
              compensate: true
            });
          }
        }
        if (!lastReference) {
          setLastReference(reference);
        }
      }
    };
  };
  var onHandlerMoveEnd = function onHandlerMoveEnd() {
    onResizeEnd === null || onResizeEnd === void 0 || onResizeEnd();
    setLastReference(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-bounding-box', className),
    style: style
  }, children, /*#__PURE__*/React.createElement("div", null, lineNodes.map(function (line) {
    return /*#__PURE__*/React.createElement(line.component, {
      key: line.name,
      defaultClassName: line.className,
      hoverClassName: line.hoverClassName,
      wrapperClassName: line.wrapperClassName,
      position: line.name,
      disabled: line.disabled,
      onMove: onHandlerMove(line.horizontalPosition, line.verticalPosition),
      onMoveEnd: onHandlerMoveEnd
    });
  })), /*#__PURE__*/React.createElement("div", null, handlerNodes.map(function (handler) {
    var handlerElement = /*#__PURE__*/React.createElement(handler.component, {
      defaultClassName: handler.className,
      hoverClassName: handler.hoverClassName,
      wrapperClassName: handler.wrapperClassName,
      horizontalPosition: handler.horizontalPosition,
      verticalPosition: handler.verticalPosition,
      disabled: handler.disabled,
      onMove: onHandlerMove(handler.horizontalPosition, handler.verticalPosition),
      onMoveEnd: onHandlerMoveEnd
    });
    return /*#__PURE__*/React.createElement("div", {
      key: handler.name,
      className: handler.containerClassName
    }, handlerElement);
  })));
};

var StencilOverlay = function StencilOverlay(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-stencil-overlay', className)
  }, children);
};

function useTransition() {
  var transitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var animation = useRef(new Animation());
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  return [function (callback) {
    if (transitions && transitions.active) {
      animation.current.start(_objectSpread2(_objectSpread2({}, transitions), {}, {
        onStart: function onStart() {
          setActive(true);
        },
        onProgress: function onProgress(progress) {
          callback(progress);
        },
        onStop: function onStop() {
          setActive(false);
        }
      }));
    } else if (!animation.current.active) {
      callback(1);
    }
  }, active];
}

var _excluded$1 = ["className", "transitions", "children"];
var ArtificialTransition = function ArtificialTransition(_ref) {
  var className = _ref.className,
    transitions = _ref.transitions,
    children = _ref.children,
    values = _objectWithoutProperties(_ref, _excluded$1);
  var root = useRef(null);
  var transitionValues = useRef(_objectSpread2({}, values));
  var _useState = useState(values),
    _useState2 = _slicedToArray(_useState, 2),
    rememberedValues = _useState2[0],
    setRememberedValues = _useState2[1];
  var _useTransition = useTransition(transitions),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    runTransitions = _useTransition2[0],
    transitionsActive = _useTransition2[1];
  useLayoutEffect(function () {
    if (!deepCompare(rememberedValues, values)) {
      setRememberedValues(values);
      var startValues = transitionsActive ? _objectSpread2({}, transitionValues.current) : rememberedValues;
      runTransitions(function (progress) {
        var properties = ['left', 'top', 'height', 'width'];
        properties.forEach(function (property) {
          var desiredValue = values[property];
          var startValue = startValues[property];
          transitionValues.current[property] = isNumber(startValue) && isNumber(desiredValue) ? startValue + (desiredValue - startValue) * progress : desiredValue;
        });
        if (root.current) {
          root.current.style.width = "".concat(transitionValues.current.width, "px");
          root.current.style.height = "".concat(transitionValues.current.height, "px");
          root.current.style.transform = "translate3d(".concat(transitionValues.current.left, "px, ").concat(transitionValues.current.top, "px, 0px)");
        }
      });
    }
  }, [rememberedValues, transitionsActive, values.width, values.height, values.top, values.left]);
  var currentValues = transitionsActive ? transitionValues.current : values;
  var rootStyle = {
    left: 0,
    top: 0,
    width: "".concat(currentValues.width, "px"),
    height: "".concat(currentValues.height, "px"),
    transform: "translate3d(".concat(currentValues.left, "px, ").concat(currentValues.top, "px, 0px)")
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    className: cn('advanced-cropper-artificial-transition', className),
    style: rootStyle
  }, children);
};

var StencilWrapper = function StencilWrapper(_ref) {
  var className = _ref.className,
    transitions = _ref.transitions,
    width = _ref.width,
    height = _ref.height,
    left = _ref.left,
    top = _ref.top,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(ArtificialTransition, {
    className: cn('advanced-cropper-stencil-wrapper', className),
    transitions: transitions,
    width: width,
    height: height,
    top: top,
    left: left
  }, children);
};

var StencilGrid = function StencilGrid(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 3 : _ref$columns,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 3 : _ref$rows,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    className = _ref.className;
  var nodes = [];
  var _useState = useState(columns),
    _useState2 = _slicedToArray(_useState, 2),
    currentColumns = _useState2[0],
    setCurrentColumns = _useState2[1];
  var _useState3 = useState(rows),
    _useState4 = _slicedToArray(_useState3, 2),
    currentRows = _useState4[0],
    setCurrentRows = _useState4[1];
  useUpdateEffect(function () {
    if (visible) {
      setCurrentRows(rows);
      setCurrentColumns(columns);
    }
  }, [visible, columns, rows]);
  for (var i = 0; i < currentRows; i++) {
    var cells = [];
    for (var j = 0; j < currentColumns; j++) {
      cells.push(/*#__PURE__*/React.createElement("div", {
        key: j,
        className: cn('advanced-cropper-stencil-grid__cell', i === 0 && 'advanced-cropper-stencil-grid__cell--top', i === currentRows - 1 && 'advanced-cropper-stencil-grid__cell--bottom', j === 0 && 'advanced-cropper-stencil-grid__cell--left', j === currentColumns - 1 && 'advanced-cropper-stencil-grid__cell--right')
      }));
    }
    nodes.push(/*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'advanced-cropper-stencil-grid__row'
    }, cells));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-stencil-grid', visible && 'advanced-cropper-stencil-grid--visible', className)
  }, nodes);
};

var RectangleStencil = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var cropper = _ref.cropper,
    coordinates = _ref.coordinates,
    aspectRatio = _ref.aspectRatio,
    minAspectRatio = _ref.minAspectRatio,
    maxAspectRatio = _ref.maxAspectRatio,
    _ref$handlerComponent = _ref.handlerComponent,
    handlerComponent = _ref$handlerComponent === void 0 ? SimpleHandler : _ref$handlerComponent,
    _ref$handlers = _ref.handlers,
    handlers = _ref$handlers === void 0 ? {
      eastNorth: true,
      north: true,
      westNorth: true,
      west: true,
      westSouth: true,
      south: true,
      eastSouth: true,
      east: true
    } : _ref$handlers,
    _ref$handlerClassName = _ref.handlerClassNames,
    handlerClassNames = _ref$handlerClassName === void 0 ? {} : _ref$handlerClassName,
    _ref$handlerWrapperCl = _ref.handlerWrapperClassNames,
    handlerWrapperClassNames = _ref$handlerWrapperCl === void 0 ? {} : _ref$handlerWrapperCl,
    _ref$lines = _ref.lines,
    lines = _ref$lines === void 0 ? {
      west: true,
      north: true,
      east: true,
      south: true
    } : _ref$lines,
    _ref$lineComponent = _ref.lineComponent,
    lineComponent = _ref$lineComponent === void 0 ? SimpleLine : _ref$lineComponent,
    _ref$lineClassNames = _ref.lineClassNames,
    lineClassNames = _ref$lineClassNames === void 0 ? {} : _ref$lineClassNames,
    _ref$lineWrapperClass = _ref.lineWrapperClassNames,
    lineWrapperClassNames = _ref$lineWrapperClass === void 0 ? {} : _ref$lineWrapperClass,
    _ref$resizable = _ref.resizable,
    resizable = _ref$resizable === void 0 ? true : _ref$resizable,
    _ref$movable = _ref.movable,
    movable = _ref$movable === void 0 ? true : _ref$movable,
    grid = _ref.grid,
    gridClassName = _ref.gridClassName,
    className = _ref.className,
    _ref$movingClassName = _ref.movingClassName,
    movingClassName = _ref$movingClassName === void 0 ? '' : _ref$movingClassName,
    _ref$resizingClassNam = _ref.resizingClassName,
    resizingClassName = _ref$resizingClassNam === void 0 ? '' : _ref$resizingClassNam,
    previewClassName = _ref.previewClassName,
    boundingBoxClassName = _ref.boundingBoxClassName,
    overlayClassName = _ref.overlayClassName,
    draggableAreaClassName = _ref.draggableAreaClassName,
    disabled = _ref.disabled;
  // Add safety checks
  var safeGetState = function safeGetState() {
    try {
      return typeof cropper.getState === 'function' ? cropper.getState() : null;
    } catch (e) {
      console.error('Error getting state:', e);
      return null;
    }
  };
  var safeGetTransitions = function safeGetTransitions() {
    try {
      return typeof cropper.getTransitions === 'function' ? cropper.getTransitions() : {};
    } catch (e) {
      console.error('Error getting transitions:', e);
      return {};
    }
  };
  var safeGetInteractions = function safeGetInteractions() {
    try {
      return typeof cropper.getInteractions === 'function' ? cropper.getInteractions() : {};
    } catch (e) {
      console.error('Error getting interactions:', e);
      return {};
    }
  };
  var state = safeGetState();
  var transitions = safeGetTransitions();
  var interactions = safeGetInteractions();
  var resizeAllowed = resizable && !disabled;
  var moveAllowed = movable && !disabled;
  useImperativeHandle(ref, function () {
    return {
      aspectRatio: createAspectRatio(aspectRatio || {
        minimum: minAspectRatio,
        maximum: maxAspectRatio
      })
    };
  });
  var onMove = function onMove(directions) {
    if (cropper && moveAllowed && typeof cropper.moveCoordinates === 'function') {
      cropper.moveCoordinates(directions);
    }
  };
  var onMoveEnd = function onMoveEnd() {
    if (cropper && typeof cropper.moveCoordinatesEnd === 'function') {
      cropper.moveCoordinatesEnd();
    }
  };
  var onResize = function onResize(anchor, directions, options) {
    if (cropper && resizeAllowed && typeof cropper.resizeCoordinates === 'function') {
      cropper.resizeCoordinates(anchor, directions, options);
    }
  };
  var onResizeEnd = function onResizeEnd() {
    if (cropper && typeof cropper.resizeCoordinatesEnd === 'function') {
      cropper.resizeCoordinatesEnd();
    }
  };
  if (!state) {
    return null;
  }
  var _ref2 = coordinates ? typeof coordinates === 'function' ? coordinates(state) : coordinates : getStencilCoordinates(state),
    width = _ref2.width,
    height = _ref2.height,
    left = _ref2.left,
    top = _ref2.top;

  // Make sure all interactions values are safe
  var safeInteractions = {
    moveCoordinates: interactions && interactions.moveCoordinates,
    resizeCoordinates: interactions && interactions.resizeCoordinates,
    transformImage: interactions && interactions.transformImage ? {
      rotate: interactions.transformImage.rotate
    } : {
      rotate: false
    }
  };

  // Check if the cropper has any interactions
  var hasInteractions = function hasInteractions() {
    try {
      return typeof cropper.hasInteractions === 'function' ? cropper.hasInteractions() : false;
    } catch (e) {
      console.error('Error checking interactions:', e);
      return false;
    }
  };
  return /*#__PURE__*/React.createElement(StencilWrapper, {
    className: cn('advanced-cropper-rectangle-stencil', className, safeInteractions.moveCoordinates && movingClassName, safeInteractions.resizeCoordinates && resizingClassName, {
      'advanced-cropper-rectangle-stencil--movable': moveAllowed,
      'advanced-cropper-rectangle-stencil--moving': safeInteractions.moveCoordinates,
      'advanced-cropper-rectangle-stencil--resizable': resizeAllowed,
      'advanced-cropper-rectangle-stencil--resizing': safeInteractions.resizeCoordinates,
      'advanced-cropper-rectangle-stencil--disabled': disabled
    }),
    width: width,
    height: height,
    left: left,
    top: top,
    transitions: transitions
  }, /*#__PURE__*/React.createElement(BoundingBox, {
    reference: state.coordinates,
    className: cn(boundingBoxClassName, 'advanced-cropper-rectangle-stencil__bounding-box'),
    handlers: handlers,
    handlerComponent: handlerComponent,
    handlerClassNames: handlerClassNames,
    handlerWrapperClassNames: handlerWrapperClassNames,
    lines: lines,
    lineComponent: lineComponent,
    lineClassNames: lineClassNames,
    lineWrapperClassNames: lineWrapperClassNames,
    onResize: onResize,
    onResizeEnd: onResizeEnd,
    disabled: !resizeAllowed
  }, /*#__PURE__*/React.createElement(DraggableElement, {
    disabled: !moveAllowed,
    onMove: onMove,
    onMoveEnd: onMoveEnd,
    className: cn('advanced-cropper-rectangle-stencil__draggable-area', draggableAreaClassName)
  }, /*#__PURE__*/React.createElement(StencilOverlay, {
    className: cn('advanced-cropper-rectangle-stencil__overlay', overlayClassName)
  }, grid && /*#__PURE__*/React.createElement(StencilGrid, {
    visible: hasInteractions(),
    columns: safeInteractions.transformImage.rotate ? 9 : 3,
    rows: safeInteractions.transformImage.rotate ? 9 : 3,
    className: cn('advanced-cropper-rectangle-stencil__grid', gridClassName)
  }), /*#__PURE__*/React.createElement("div", {
    className: cn('advanced-cropper-rectangle-stencil__preview', previewClassName)
  })))));
});
RectangleStencil.displayName = 'RectangleStencil';

function useScaleImageOptions(scaleImage) {
  return useMemo(function () {
    return getOptions(scaleImage, {
      touch: true,
      wheel: {
        ratio: 0.1
      }
    }, {
      touch: false,
      wheel: false
    });
  }, [scaleImage]);
}

function useMoveImageOptions(moveImage) {
  return useMemo(function () {
    return getOptions(moveImage, {
      touch: true,
      mouse: true
    }, {
      touch: false,
      mouse: false
    });
  }, [moveImage]);
}

var TransformableImageEvent = /*#__PURE__*/function () {
  function TransformableImageEvent(_ref) {
    var active = _ref.active;
    _classCallCheck(this, TransformableImageEvent);
    this.active = active;
    this.defaultPrevented = false;
  }
  return _createClass(TransformableImageEvent, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }]);
}();
var TransformableImage = /*#__PURE__*/function (_Component) {
  function TransformableImage(props) {
    var _this;
    _classCallCheck(this, TransformableImage);
    _this = _callSuper(this, TransformableImage, [props]);
    _defineProperty(_this, "processMove", function (newTouches) {
      var _this$props = _this.props,
        onTransform = _this$props.onTransform,
        touchScale = _this$props.touchScale,
        touchMove = _this$props.touchMove,
        touchRotate = _this$props.touchRotate;
      var container = _this.container.current;
      if (container && onTransform) {
        onTransform(touchesToImageTransform(newTouches, _this.touches, container, {
          scale: touchScale,
          rotate: touchRotate,
          move: touchMove
        }));
        _this.touches = newTouches;
      }
    });
    _defineProperty(_this, "processEnd", function () {
      var onTransformEnd = _this.props.onTransformEnd;
      if (_this.transforming) {
        _this.transforming = false;
        if (onTransformEnd) {
          onTransformEnd();
        }
      }
    });
    _defineProperty(_this, "processStart", function () {
      _this.transforming = true;
      _this.debouncedProcessEnd.clear();
    });
    _defineProperty(_this, "processEvent", function (nativeEvent) {
      var _this$props2 = _this.props,
        onEvent = _this$props2.onEvent,
        disabled = _this$props2.disabled,
        _this$props2$preventD = _this$props2.preventDefault,
        preventDefault = _this$props2$preventD === void 0 ? true : _this$props2$preventD;
      var transformEvent = new TransformableImageEvent({
        active: _this.transforming
      });
      if (onEvent) {
        onEvent(transformEvent, nativeEvent);
      } else if (preventDefault) {
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();
      }
      return !disabled && !transformEvent.defaultPrevented;
    });
    _defineProperty(_this, "onWheel", function (event) {
      var _this$props3 = _this.props,
        onTransform = _this$props3.onTransform,
        wheelScale = _this$props3.wheelScale;
      var container = _this.container.current;
      if (wheelScale) {
        if (_this.processEvent(event)) {
          _this.processStart();
          if (onTransform && container) {
            onTransform(wheelEventToImageTransform(event, container, wheelScale === true ? 0.1 : wheelScale.ratio));
          }
          if (!_this.touches.length) {
            _this.debouncedProcessEnd();
          }
        }
      }
    });
    _defineProperty(_this, "onTouchStart", function (event) {
      var _this$props4 = _this.props,
        touchMove = _this$props4.touchMove,
        touchScale = _this$props4.touchScale,
        touchRotate = _this$props4.touchRotate;
      if (event.cancelable && (touchMove || (touchScale || touchRotate) && event.touches.length > 1)) {
        if (_this.processEvent(event)) {
          var container = _this.container.current;
          if (container) {
            var _container$getBoundin = container.getBoundingClientRect(),
              left = _container$getBoundin.left,
              top = _container$getBoundin.top,
              bottom = _container$getBoundin.bottom,
              right = _container$getBoundin.right;
            _this.touches = Array.from(event.touches).filter(function (touch) {
              return touch.clientX > left && touch.clientX < right && touch.clientY > top && touch.clientY < bottom;
            });
          }
        }
      }
    });
    _defineProperty(_this, "onTouchEnd", function (event) {
      if (event.touches.length === 0) {
        _this.touches = [];
        _this.processEnd();
      }
    });
    _defineProperty(_this, "onTouchMove", function (event) {
      if (_this.touches.length) {
        var touches = _toConsumableArray(event.touches).filter(function (touch) {
          return !touch.identifier || _this.touches.find(function (anotherTouch) {
            return anotherTouch.identifier === touch.identifier;
          });
        });
        if (_this.processEvent(event)) {
          _this.processMove(touches);
          _this.processStart();
        }
      }
    });
    _defineProperty(_this, "onMouseDown", function (event) {
      var mouseMove = _this.props.mouseMove;
      if (mouseMove && 'buttons' in event && event.buttons === 1) {
        if (_this.processEvent(event)) {
          var touch = {
            clientX: event.clientX,
            clientY: event.clientY
          };
          _this.touches = [touch];
          _this.processStart();
        }
      }
    });
    _defineProperty(_this, "onMouseMove", function (event) {
      if (_this.touches.length) {
        if (_this.processEvent(event)) {
          _this.processMove([{
            clientX: event.clientX,
            clientY: event.clientY
          }]);
        }
      }
    });
    _defineProperty(_this, "onMouseUp", function () {
      _this.touches = [];
      _this.processEnd();
    });
    _this.transforming = false;
    _this.touches = [];
    _this.anchor = {
      left: 0,
      top: 0
    };
    _this.container = /*#__PURE__*/createRef();
    _this.debouncedProcessEnd = debounce(_this.processEnd, props.timeout);
    return _this;
  }
  _inherits(TransformableImage, _Component);
  return _createClass(TransformableImage, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
      var container = this.container.current;
      if (container) {
        container.removeEventListener('touchstart', this.onTouchStart);
        container.removeEventListener('mousedown', this.onMouseDown);
        container.removeEventListener('wheel', this.onWheel);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseUp, {
        passive: false
      });
      window.addEventListener('mousemove', this.onMouseMove, {
        passive: false
      });
      window.addEventListener('touchmove', this.onTouchMove, {
        passive: false
      });
      window.addEventListener('touchend', this.onTouchEnd, {
        passive: false
      });
      var container = this.container.current;
      if (container) {
        container.addEventListener('touchstart', this.onTouchStart, {
          passive: false
        });
        container.addEventListener('mousedown', this.onMouseDown, {
          passive: false
        });
        container.addEventListener('wheel', this.onWheel, {
          passive: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        className = _this$props5.className,
        children = _this$props5.children,
        style = _this$props5.style;
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        style: style,
        ref: this.container
      }, children);
    }
  }]);
}(Component);
_defineProperty(TransformableImage, "defaultProps", {
  touchMove: true,
  mouseMove: true,
  touchScale: true,
  touchRotate: false,
  wheelScale: true,
  timeout: 500
});

var CropperBackgroundWrapper = function CropperBackgroundWrapper(_ref) {
  var _ref$scaleImage = _ref.scaleImage,
    scaleImage = _ref$scaleImage === void 0 ? true : _ref$scaleImage,
    _ref$moveImage = _ref.moveImage,
    moveImage = _ref$moveImage === void 0 ? true : _ref$moveImage,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    cropper = _ref.cropper,
    timeout = _ref.timeout,
    disabled = _ref.disabled;
  var transitions = cropper.getTransitions();
  var scaleImageOptions = useScaleImageOptions(scaleImage);
  var moveImageOptions = useMoveImageOptions(moveImage);
  return /*#__PURE__*/React.createElement(TransformableImage, {
    className: className,
    style: style,
    onTransform: cropper.transformImage,
    onTransformEnd: cropper.transformImageEnd,
    touchMove: moveImageOptions.touch,
    mouseMove: moveImageOptions.mouse,
    touchScale: scaleImageOptions.touch,
    wheelScale: scaleImageOptions.wheel,
    disabled: transitions.active || disabled,
    preventDefault: !disabled,
    timeout: timeout
  }, children);
};

function createCropper(render) {
  return /*#__PURE__*/forwardRef(render);
}

var _excluded = ["style", "className", "stencilComponent", "stencilConstraints", "stencilProps", "wrapperComponent", "wrapperProps", "backgroundComponent", "backgroundProps", "backgroundClassName", "backgroundWrapperComponent", "backgroundWrapperProps", "boundaryComponent", "boundaryProps", "boundaryClassName", "canvas", "crossOrigin", "disabled", "settings"];
var AbstractCropperComponent = function AbstractCropperComponent(props, ref) {
  var style = props.style,
    className = props.className,
    _props$stencilCompone = props.stencilComponent,
    stencilComponent = _props$stencilCompone === void 0 ? RectangleStencil : _props$stencilCompone,
    _props$stencilConstra = props.stencilConstraints,
    stencilConstraints = _props$stencilConstra === void 0 ? defaultStencilConstraints : _props$stencilConstra,
    _props$stencilProps = props.stencilProps,
    stencilProps = _props$stencilProps === void 0 ? {} : _props$stencilProps,
    _props$wrapperCompone = props.wrapperComponent,
    wrapperComponent = _props$wrapperCompone === void 0 ? CropperWrapper : _props$wrapperCompone,
    _props$wrapperProps = props.wrapperProps,
    wrapperProps = _props$wrapperProps === void 0 ? {} : _props$wrapperProps,
    _props$backgroundComp = props.backgroundComponent,
    backgroundComponent = _props$backgroundComp === void 0 ? CropperBackgroundImage : _props$backgroundComp,
    _props$backgroundProp = props.backgroundProps,
    backgroundProps = _props$backgroundProp === void 0 ? {} : _props$backgroundProp,
    backgroundClassName = props.backgroundClassName,
    _props$backgroundWrap = props.backgroundWrapperComponent,
    backgroundWrapperComponent = _props$backgroundWrap === void 0 ? CropperBackgroundWrapper : _props$backgroundWrap,
    _props$backgroundWrap2 = props.backgroundWrapperProps,
    backgroundWrapperProps = _props$backgroundWrap2 === void 0 ? {} : _props$backgroundWrap2,
    _props$boundaryCompon = props.boundaryComponent,
    boundaryComponent = _props$boundaryCompon === void 0 ? StretchableBoundary : _props$boundaryCompon,
    boundaryProps = props.boundaryProps,
    boundaryClassName = props.boundaryClassName,
    _props$canvas = props.canvas,
    canvas = _props$canvas === void 0 ? true : _props$canvas,
    _props$crossOrigin = props.crossOrigin,
    crossOrigin = _props$crossOrigin === void 0 ? true : _props$crossOrigin,
    disabled = props.disabled,
    settings = props.settings,
    parameters = _objectWithoutProperties(props, _excluded);
  var stencilRef = useRef(null);
  var _useAbstractCropper = useAbstractCropper(function () {
      return _objectSpread2(_objectSpread2({}, parameters), {}, {
        crossOrigin: crossOrigin,
        stencilProps: stencilProps,
        canvas: canvas,
        settings: _objectSpread2(_objectSpread2({}, settings), stencilConstraints(settings, _objectSpread2(_objectSpread2({}, stencilProps), stencilRef.current || {})))
      });
    }),
    cropper = _useAbstractCropper.cropper,
    image = _useAbstractCropper.image,
    refs = _useAbstractCropper.refs;
  var StencilComponent = stencilComponent;
  var WrapperComponent = wrapperComponent;
  var BackgroundWrapperComponent = backgroundWrapperComponent;
  var BackgroundComponent = backgroundComponent;
  var BoundaryComponent = boundaryComponent;
  useImperativeHandle(ref, function () {
    return cropper;
  });
  var deprecatedWrapperProps = {
    loading: cropper.isLoading(),
    loaded: cropper.isLoaded()
  };
  var state = cropper.getState();
  return /*#__PURE__*/React.createElement(WrapperComponent, _extends({}, wrapperProps, {
    disabled: disabled,
    className: cn('advanced-cropper', className),
    cropper: cropper,
    style: style
  }, deprecatedWrapperProps), /*#__PURE__*/React.createElement(BoundaryComponent, _extends({}, boundaryProps, {
    ref: refs.boundary,
    className: cn('advanced-cropper__boundary', boundaryClassName)
  }), /*#__PURE__*/React.createElement(BackgroundWrapperComponent, _extends({}, backgroundWrapperProps, {
    disabled: disabled,
    cropper: cropper,
    className: 'advanced-cropper__background-wrapper'
  }), state && /*#__PURE__*/React.createElement(BackgroundComponent, _extends({}, backgroundProps, {
    ref: refs.image,
    crossOrigin: crossOrigin,
    cropper: cropper,
    className: cn('advanced-cropper__background', backgroundClassName)
  })), /*#__PURE__*/React.createElement(StencilComponent, _extends({}, stencilProps, {
    disabled: disabled,
    ref: stencilRef,
    cropper: cropper,
    image: image
  }))), canvas && /*#__PURE__*/React.createElement(CropperCanvas, {
    ref: refs.canvas
  })));
};
var AbstractCropper = createCropper(AbstractCropperComponent);

var defaultSettings = ['transformImage', 'moveCoordinates', 'resizeCoordinates', 'defaultCoordinates', 'defaultVisibleArea', 'areaPositionRestrictions', 'areaSizeRestrictions', 'sizeRestrictions', 'positionRestrictions', 'aspectRatio', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'defaultSize', 'defaultPosition', 'defaultTransforms', 'imageRestriction', 'priority'];

function useAbstractCropperProps(props) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSettings;
  var result = {
    settings: {},
    props: {}
  };
  Object.keys(props).forEach(function (key) {
    if (settings.some(function (setting) {
      return setting === key;
    })) {
      result.settings[key] = props[key];
    } else {
      result.props[key] = props[key];
    }
  });
  return result;
}

var Cropper = /*#__PURE__*/forwardRef(function (props, ref) {
  var cropperProps = useAbstractCropperProps(props);
  _extends({}, (_objectDestructuringEmpty(cropperProps.settings), cropperProps.settings));
  return /*#__PURE__*/React.createElement(AbstractCropper, {
    ref: ref
  });
});
Cropper.displayName = 'CropperComponent';

export { Cropper as default };
