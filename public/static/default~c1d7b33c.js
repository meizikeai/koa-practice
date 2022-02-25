"use strict";
(self["webpackChunkkoa_practice"] = self["webpackChunkkoa_practice"] || []).push([["default"],{

/***/ "./client/components/layout-pc/index.js":
/*!**********************************************!*\
  !*** ./client/components/layout-pc/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

__webpack_require__(/*! ../reset.css */ "./client/components/reset.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Layout = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    (0, _classCallCheck2["default"])(this, Layout);
    _this = _super.call(this);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
    }
  }]);
  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes["default"].node
};
var _default = Layout;
exports["default"] = _default;

/***/ }),

/***/ "./client/components/layout/index.js":
/*!*******************************************!*\
  !*** ./client/components/layout/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

__webpack_require__(/*! ../reset.css */ "./client/components/reset.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Layout = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    (0, _classCallCheck2["default"])(this, Layout);
    _this = _super.call(this);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
    }
  }]);
  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes["default"].node
};
var _default = Layout;
exports["default"] = _default;

/***/ }),

/***/ "./client/components/popup-min-layer/index.js":
/*!****************************************************!*\
  !*** ./client/components/popup-min-layer/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

__webpack_require__(/*! ./index.css */ "./client/components/popup-min-layer/index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var popupMinLayerScrollTop = 0;

var PopupMinLayer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PopupMinLayer, _Component);

  var _super = _createSuper(PopupMinLayer);

  function PopupMinLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PopupMinLayer);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentWillUnmount", function () {// clearTimeout(this.timer)
    });
    var show = _this.props.show;
    _this.state = {
      show: show
    };
    return _this;
  }

  (0, _createClass2["default"])(PopupMinLayer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!nextState.show) {
        var node = this.props.node;

        _reactDom["default"].unmountComponentAtNode(node);

        document.body.removeChild(node);
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      var _this$props = this.props,
          content = _this$props.content,
          height = _this$props.height,
          layer = _this$props.layer,
          model = _this$props.model;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "model-mini-layer",
        style: {
          display: show ? null : 'none'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "layer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, content)), layer ? /*#__PURE__*/_react["default"].createElement("div", {
        className: model ? 'layer-back white' : 'layer-back black',
        style: {
          height: "".concat(height, "px")
        }
      }) : '');
    }
  }]);
  return PopupMinLayer;
}(_react.Component);
/**
 * 获取滚动条位置
 */


(0, _defineProperty2["default"])(PopupMinLayer, "propTypes", {
  content: _propTypes["default"].string,
  height: _propTypes["default"].number,
  layer: _propTypes["default"].bool,
  model: _propTypes["default"].bool,
  node: _propTypes["default"].object,
  show: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(PopupMinLayer, "defaultProps", {
  content: '',
  layer: true,
  model: true,
  show: true
});

var getScrollTop = function getScrollTop() {
  var total = document.body.scrollTop + document.documentElement.scrollTop;
  return (0, _parseInt2["default"])(total, 10);
};
/**
 * 设置滚动条位置
 * @param {number} top 位置
 */


var setScrollTop = function setScrollTop(top) {
  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;
};
/**
 * disableScroll 禁止滚动条
 */


function disableScroll() {
  popupMinLayerScrollTop = getScrollTop();
  var toastNode = document.querySelector('.toast-model-mini');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  if (toastNode) {
    toastNode.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * restartScroll 放开滚动条
 */


function restartScroll() {
  var toastNode = document.querySelector('.toast-model-mini');
  var marker = document.querySelector('.toast-marker');

  if (!marker) {
    document.documentElement.style.overflow = 'inherit';
    document.body.style.overflow = 'inherit';
    setScrollTop(popupMinLayerScrollTop);
  }

  if (toastNode) {
    toastNode.removeEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * 创建一个节点〜
 */


function createToast() {
  var toast = document.createElement('div');
  toast.setAttribute('id', "toast-".concat(Math.floor(Math.random() * 10000000)));
  toast.setAttribute('class', 'toast-model-mini');
  document.body.appendChild(toast);
  return toast;
}

var _default = {
  show: function show(options) {
    var content = options.content,
        callback = options.callback,
        duration = options.duration,
        layer = options.layer,
        model = options.model;
    var toast = createToast();

    if (!duration) {
      duration = 2000;
    } else if (typeof duration !== 'number') {
      duration = 2000;
    }

    (0, _setTimeout2["default"])(function () {
      restartScroll();

      _reactDom["default"].unmountComponentAtNode(toast);

      document.body.removeChild(toast);

      if (typeof callback === 'function') {
        callback();
      }
    }, duration);

    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(PopupMinLayer, {
      content: content,
      height: document.body.clientHeight,
      layer: layer,
      model: model,
      node: toast
    }), toast);

    disableScroll();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./client/utils/get-device.js":
/*!************************************!*\
  !*** ./client/utils/get-device.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var device = false;

if (typeof window !== 'undefined') {
  var result = window.CONFIG.device;
  device = result;
} else if (typeof __webpack_require__.g !== 'undefined') {
  var _result = __webpack_require__.g.KoaPractice.device;
  device = _result;
}

module.exports = device;

/***/ }),

/***/ "./client/components/popup-min-layer/index.css":
/*!*****************************************************!*\
  !*** ./client/components/popup-min-layer/index.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/components/reset.css":
/*!*************************************!*\
  !*** ./client/components/reset.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdDQUFDLGFBQUQ7QUFBZSxhQUFPLEVBQUVyQyxPQUF4QjtBQUFpQyxZQUFNLEVBQUVILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjd0MsWUFBdkQ7QUFBcUUsV0FBSyxFQUFFcEMsS0FBNUU7QUFBbUYsV0FBSyxFQUFFQyxLQUExRjtBQUFpRyxVQUFJLEVBQUV3QjtBQUF2RyxNQURGLEVBRUVBLEtBRkY7O0FBS0FaLElBQUFBLGFBQWE7QUFDZDtBQTNCWTs7Ozs7Ozs7Ozs7OztBQzNKZixJQUFJd0IsTUFBTSxHQUFHLEtBQWI7O0FBRUEsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWNILE1BQTdCO0FBQ0FBLEVBQUFBLE1BQU0sR0FBR0UsTUFBVDtBQUNELENBSEQsTUFHTyxJQUFJLE9BQU9FLHFCQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDLE1BQU1GLE9BQU0sR0FBR0UscUJBQU0sQ0FBQ0MsV0FBUCxDQUFtQkwsTUFBbEM7QUFDQUEsRUFBQUEsTUFBTSxHQUFHRSxPQUFUO0FBQ0Q7O0FBRURJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsTUFBakI7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0LXBjL2luZGV4LmpzIiwid2VicGFjazovL2tvYS1wcmFjdGljZS8uL2NsaWVudC9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9rb2EtcHJhY3RpY2UvLi9jbGllbnQvY29tcG9uZW50cy9wb3B1cC1taW4tbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8va29hLXByYWN0aWNlLy4vY2xpZW50L3V0aWxzL2dldC1kZXZpY2UuanMiLCJ3ZWJwYWNrOi8va29hLXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyL2luZGV4LmNzcz83ODFlIiwid2VicGFjazovL2tvYS1wcmFjdGljZS8uL2NsaWVudC9jb21wb25lbnRzL3Jlc2V0LmNzcz84ZjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQgJy4uL3Jlc2V0LmNzcydcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntjaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PlxuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0ICcuLi9yZXNldC5jc3MnXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiLyoqXG4gKiDnroDljZXmj5DnpLrmoYbmqKHniYhcbiAqIOWPguaVsOivtOaYju+8mlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQg5o+Q56S65YaF5a65XG4gKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24g6Ieq5Yqo5YWz6Zet55qE5pe26Ze077yM6buY6K6kMjAwMFxuICogQHBhcmFtIHtCb29sZWFufSBsYXllciDpgI/mmI7lurbmoaPmmK/kuI3mmK/lh7rnjrBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbW9kZWwg6buRL+eZvVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5Zue6LCDXG4gKiDkvb/nlKjmlrnlvI/vvJpcbiAqIFBvcHVwTWluTGF5ZXIuc2hvdyh7XG4gKiAgY29udGVudDogJ+ivt+i+k+WFpeS9k+mqjOeggScsXG4gKiAgZHVyYXRpb246IDIwMDAsXG4gKiAgbGF5ZXI6IGZhbHNlLFxuICogIG1vZGVsOiBmYWxzZSxcbiAqICBjYWxsYmFjazogKCkgPT4geyB9LFxuICogfSlcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICcuL2luZGV4LmNzcydcblxubGV0IHBvcHVwTWluTGF5ZXJTY3JvbGxUb3AgPSAwXG5cbmNsYXNzIFBvcHVwTWluTGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb2RlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9kZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudDogJycsXG4gICAgbGF5ZXI6IHRydWUsXG4gICAgbW9kZWw6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3csXG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKCFuZXh0U3RhdGUuc2hvdykge1xuICAgICAgY29uc3QgeyBub2RlIH0gPSB0aGlzLnByb3BzXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKG5vZGUpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb250ZW50LCBoZWlnaHQsIGxheWVyLCBtb2RlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kZWwtbWluaS1sYXllcicgc3R5bGU9e3sgZGlzcGxheTogc2hvdyA/IG51bGwgOiAnbm9uZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXllcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPntjb250ZW50fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xheWVyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlbCA/ICdsYXllci1iYWNrIHdoaXRlJyA6ICdsYXllci1iYWNrIGJsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICovXG5jb25zdCBnZXRTY3JvbGxUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIHJldHVybiBwYXJzZUludCh0b3RhbCwgMTApXG59XG5cbi8qKlxuICog6K6+572u5rua5Yqo5p2h5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIOS9jee9rlxuICovXG5jb25zdCBzZXRTY3JvbGxUb3AgPSAodG9wKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdG9wXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB0b3Bcbn1cblxuLyoqXG4gKiBkaXNhYmxlU2Nyb2xsIOemgeatoua7muWKqOadoVxuICovXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICBwb3B1cE1pbkxheWVyU2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKClcblxuICBjb25zdCB0b2FzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbW9kZWwtbWluaScpXG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgaWYgKHRvYXN0Tm9kZSkge1xuICAgIHRvYXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogcmVzdGFydFNjcm9sbCDmlL7lvIDmu5rliqjmnaFcbiAqL1xuZnVuY3Rpb24gcmVzdGFydFNjcm9sbCgpIHtcbiAgY29uc3QgdG9hc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LW1vZGVsLW1pbmknKVxuICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbWFya2VyJylcbiAgaWYgKCFtYXJrZXIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaW5oZXJpdCdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2luaGVyaXQnXG5cbiAgICBzZXRTY3JvbGxUb3AocG9wdXBNaW5MYXllclNjcm9sbFRvcClcbiAgfVxuXG4gIGlmICh0b2FzdE5vZGUpIHtcbiAgICB0b2FzdE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOWIm+W7uuS4gOS4quiKgueCueOAnFxuICovXG5mdW5jdGlvbiBjcmVhdGVUb2FzdCgpIHtcbiAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2FzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvYXN0LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApfWApXG4gIHRvYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9hc3QtbW9kZWwtbWluaScpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpXG4gIHJldHVybiB0b2FzdFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3cob3B0aW9ucykge1xuICAgIGxldCB7IGNvbnRlbnQsIGNhbGxiYWNrLCBkdXJhdGlvbiwgbGF5ZXIsIG1vZGVsIH0gPSBvcHRpb25zXG4gICAgY29uc3QgdG9hc3QgPSBjcmVhdGVUb2FzdCgpXG5cbiAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IDIwMDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgIGR1cmF0aW9uID0gMjAwMFxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdGFydFNjcm9sbCgpXG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodG9hc3QpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvYXN0KVxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pXG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UG9wdXBNaW5MYXllciBjb250ZW50PXtjb250ZW50fSBoZWlnaHQ9e2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fSBsYXllcj17bGF5ZXJ9IG1vZGVsPXttb2RlbH0gbm9kZT17dG9hc3R9IC8+LFxuICAgICAgdG9hc3RcbiAgICApXG5cbiAgICBkaXNhYmxlU2Nyb2xsKClcbiAgfSxcbn1cbiIsImxldCBkZXZpY2UgPSBmYWxzZVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gd2luZG93LkNPTkZJRy5kZXZpY2VcbiAgZGV2aWNlID0gcmVzdWx0XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGdsb2JhbC5Lb2FQcmFjdGljZS5kZXZpY2VcbiAgZGV2aWNlID0gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGV2aWNlXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiTGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInBvcHVwTWluTGF5ZXJTY3JvbGxUb3AiLCJQb3B1cE1pbkxheWVyIiwic2hvdyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiY29udGVudCIsImhlaWdodCIsImxheWVyIiwibW9kZWwiLCJkaXNwbGF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImdldFNjcm9sbFRvcCIsInRvdGFsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0U2Nyb2xsVG9wIiwidG9wIiwiZGlzYWJsZVNjcm9sbCIsInRvYXN0Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXN0YXJ0U2Nyb2xsIiwibWFya2VyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRvYXN0IiwidG9hc3QiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInJlbmRlciIsImNsaWVudEhlaWdodCIsImRldmljZSIsIndpbmRvdyIsInJlc3VsdCIsIkNPTkZJRyIsImdsb2JhbCIsIktvYVByYWN0aWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=