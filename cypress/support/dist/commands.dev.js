"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEST_ADDRESS_NEVER_USE_SHORTENED = exports.TEST_ADDRESS_NEVER_USE = void 0;

var _providers = require("@ethersproject/providers");

var _wallet = require("@ethersproject/wallet");

var _eip1193Bridge = require("@ethersproject/experimental/lib/eip1193-bridge");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PRIVATE_KEY_TEST_NEVER_USE = '0xad20c82497421e9784f18460ad2fe84f73569068e98e270b3e63743268af5763'; // address of the above key

var TEST_ADDRESS_NEVER_USE = '0x0fF2D1eFd7A57B7562b2bf27F3f37899dB27F4a5';
exports.TEST_ADDRESS_NEVER_USE = TEST_ADDRESS_NEVER_USE;
var TEST_ADDRESS_NEVER_USE_SHORTENED = '0x0fF2...F4a5';
exports.TEST_ADDRESS_NEVER_USE_SHORTENED = TEST_ADDRESS_NEVER_USE_SHORTENED;

var CustomizedBridge =
/*#__PURE__*/
function (_Eip1193Bridge2) {
  _inherits(CustomizedBridge, _Eip1193Bridge2);

  function CustomizedBridge() {
    _classCallCheck(this, CustomizedBridge);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomizedBridge).apply(this, arguments));
  }

  _createClass(CustomizedBridge, [{
    key: "sendAsync",
    value: function sendAsync() {
      var _console;

      var _len,
          args,
          _key,
          _args = arguments;

      return regeneratorRuntime.async(function sendAsync$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              (_console = console).debug.apply(_console, ['sendAsync called'].concat(args));

              return _context.abrupt("return", this.send.apply(this, args));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "send",
    value: function send() {
      var _console2;

      var _len2,
          args,
          _key2,
          isCallbackForm,
          callback,
          method,
          params,
          result,
          _args2 = arguments;

      return regeneratorRuntime.async(function send$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = _args2[_key2];
              }

              (_console2 = console).debug.apply(_console2, ['send called'].concat(args));

              isCallbackForm = _typeof(args[0]) === 'object' && typeof args[1] === 'function';

              if (isCallbackForm) {
                callback = args[1];
                method = args[0].method;
                params = args[0].params;
              } else {
                method = args[0];
                params = args[1];
              }

              if (!(method === 'eth_requestAccounts' || method === 'eth_accounts')) {
                _context2.next = 10;
                break;
              }

              if (!isCallbackForm) {
                _context2.next = 9;
                break;
              }

              callback({
                result: [TEST_ADDRESS_NEVER_USE]
              });
              _context2.next = 10;
              break;

            case 9:
              return _context2.abrupt("return", Promise.resolve([TEST_ADDRESS_NEVER_USE]));

            case 10:
              if (!(method === 'eth_chainId')) {
                _context2.next = 16;
                break;
              }

              if (!isCallbackForm) {
                _context2.next = 15;
                break;
              }

              callback(null, {
                result: '0x4'
              });
              _context2.next = 16;
              break;

            case 15:
              return _context2.abrupt("return", Promise.resolve('0x4'));

            case 16:
              _context2.prev = 16;
              _context2.next = 19;
              return regeneratorRuntime.awrap(_get(_getPrototypeOf(CustomizedBridge.prototype), "send", this).call(this, method, params));

            case 19:
              result = _context2.sent;
              console.debug('result received', method, params, result);

              if (!isCallbackForm) {
                _context2.next = 25;
                break;
              }

              callback(null, {
                result: result
              });
              _context2.next = 26;
              break;

            case 25:
              return _context2.abrupt("return", result);

            case 26:
              _context2.next = 35;
              break;

            case 28:
              _context2.prev = 28;
              _context2.t0 = _context2["catch"](16);

              if (!isCallbackForm) {
                _context2.next = 34;
                break;
              }

              callback(_context2.t0, null);
              _context2.next = 35;
              break;

            case 34:
              throw _context2.t0;

            case 35:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[16, 28]]);
    }
  }]);

  return CustomizedBridge;
}(_eip1193Bridge._Eip1193Bridge); // sets up the injected provider to be a mock ethereum provider with the given mnemonic/index


Cypress.Commands.overwrite('visit', function (original, url, options) {
  return original(url.startsWith('/') && url.length > 2 && !url.startsWith('/#') ? "/#".concat(url) : url, _objectSpread({}, options, {
    onBeforeLoad: function onBeforeLoad(win) {
      options && options.onBeforeLoad && options.onBeforeLoad(win);
      win.localStorage.clear();
      var provider = new _providers.JsonRpcProvider('https://rinkeby.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847', 4);
      var signer = new _wallet.Wallet(PRIVATE_KEY_TEST_NEVER_USE, provider);
      win.ethereum = new CustomizedBridge(signer, provider);
    }
  }));
});