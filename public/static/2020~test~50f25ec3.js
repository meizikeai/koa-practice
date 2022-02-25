"use strict";
(self["webpackChunkkoa_practice"] = self["webpackChunkkoa_practice"] || []).push([["2020~test"],{

/***/ "./client/pages/2020/test/index.js":
/*!*****************************************!*\
  !*** ./client/pages/2020/test/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _getDevice = _interopRequireDefault(__webpack_require__(/*! ../../../utils/get-device */ "./client/utils/get-device.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../../../components/layout */ "./client/components/layout/index.js"));

var _layoutPc = _interopRequireDefault(__webpack_require__(/*! ../../../components/layout-pc */ "./client/components/layout-pc/index.js"));

var _popupMinLayer = _interopRequireDefault(__webpack_require__(/*! ../../../components/popup-min-layer */ "./client/components/popup-min-layer/index.js"));

__webpack_require__(/*! ./index.scss */ "./client/pages/2020/test/index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var App = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      var index = _this.state.index;

      _popupMinLayer["default"].show({
        content: 'I also want to look for a girlfriend...'
      });

      _this.setState({
        index: index + 1
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mainContent", function () {
      var index = _this.state.index;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_getDevice["default"] ? 'demo-pc' : 'demo')
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Hello Demo!"), /*#__PURE__*/_react["default"].createElement("p", null, "Welcome to Demo!"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "click"
      }, "You clicked", /*#__PURE__*/_react["default"].createElement("span", null, index), "times"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: _this.handleClick
      }, "Click me"));
    });
    _this.state = {
      index: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fetch('/json').then(function (response) {
        return response.json();
      }).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var device = this.props.device;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "wrapper"
      }, device ? /*#__PURE__*/_react["default"].createElement(_layoutPc["default"], null, this.mainContent()) : /*#__PURE__*/_react["default"].createElement(_layout["default"], null, this.mainContent()));
    }
  }]);
  return App;
}(_react.Component);

(0, _defineProperty2["default"])(App, "propTypes", {
  device: _propTypes["default"].bool
});

if (typeof window !== 'undefined') {
  var config = window.CONFIG || {};
  (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(App, config), document.querySelector('#app'));
}

module.exports = App;

/***/ }),

/***/ "./client/pages/2020/test/index.scss":
/*!*******************************************!*\
  !*** ./client/pages/2020/test/index.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","default"], function() { return __webpack_exec__("./client/pages/2020/test/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMH50ZXN0fjUwZjI1ZWMzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFFTUE7Ozs7O0FBS0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRGlCLG9HQWFMLFlBQU07QUFDbEIsVUFBUUMsS0FBUixHQUFrQixNQUFLQyxLQUF2QixDQUFRRCxLQUFSOztBQUVBRSxnQ0FBY0MsSUFBZCxDQUFtQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFuQjs7QUFFQSxZQUFLQyxRQUFMLENBQWM7QUFDWkwsUUFBQUEsS0FBSyxFQUFFQSxLQUFLLEdBQUc7QUFESCxPQUFkO0FBR0QsS0FyQmtCO0FBQUEsb0dBdUJMLFlBQU07QUFDbEIsVUFBUUEsS0FBUixHQUFrQixNQUFLQyxLQUF2QixDQUFRRCxLQUFSO0FBRUEsMEJBQ0U7QUFBSyxpQkFBUyxZQUFLTSx3QkFBUyxTQUFULEdBQXFCLE1BQTFCO0FBQWQsc0JBQ0UsMERBREYsZUFFRSw4REFGRixlQUdFO0FBQUssaUJBQVMsRUFBQztBQUFmLHFDQUVFLDhDQUFPTixLQUFQLENBRkYsVUFIRixlQVFFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFLE1BQUtPO0FBQXBDLG9CQVJGLENBREY7QUFjRCxLQXhDa0I7QUFFakIsVUFBS04sS0FBTCxHQUFhO0FBQUVELE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQWI7QUFGaUI7QUFHbEI7Ozs7V0FFRCw2QkFBb0I7QUFDbEJRLE1BQUFBLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLEdBQUQsRUFBUztBQUNiQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BSkg7QUFLRDs7O1dBK0JELGtCQUFTO0FBQ1AsVUFBUU4sTUFBUixHQUFtQixLQUFLUCxLQUF4QixDQUFRTyxNQUFSO0FBRUEsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDR0EsTUFBTSxnQkFBRyxnQ0FBQyxvQkFBRCxRQUFXLEtBQUtTLFdBQUwsRUFBWCxDQUFILGdCQUErQyxnQ0FBQyxrQkFBRCxRQUFTLEtBQUtBLFdBQUwsRUFBVCxDQUR4RCxDQURGO0FBS0Q7OztFQXZEZUM7O2lDQUFabEIsa0JBQ2U7QUFDakJRLEVBQUFBLE1BQU0sRUFBRVcsc0JBQVVDO0FBREQ7O0FBeURyQixJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLE1BQVAsSUFBaUIsRUFBaEM7QUFDQSx1Q0FBUSxnQ0FBQyxHQUFELEVBQVNELE1BQVQsQ0FBUixFQUE2QkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQTdCO0FBQ0Q7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLEdBQWpCOzs7Ozs7Ozs7OztBQzFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS1wcmFjdGljZS8uL2NsaWVudC9wYWdlcy8yMDIwL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8va29hLXByYWN0aWNlLy4vY2xpZW50L3BhZ2VzLzIwMjAvdGVzdC9pbmRleC5zY3NzPzkxMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IGRldmljZSBmcm9tICcuLi8uLi8uLi91dGlscy9nZXQtZGV2aWNlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBMYXlvdXRQQyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC1wYydcbmltcG9ydCBQb3B1cE1pbkxheWVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZXZpY2U6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBpbmRleDogMCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnL2pzb24nKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBQb3B1cE1pbkxheWVyLnNob3coeyBjb250ZW50OiAnSSBhbHNvIHdhbnQgdG8gbG9vayBmb3IgYSBnaXJsZnJpZW5kLi4uJyB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmRleDogaW5kZXggKyAxLFxuICAgIH0pXG4gIH1cblxuICBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2RldmljZSA/ICdkZW1vLXBjJyA6ICdkZW1vJ31gfT5cbiAgICAgICAgPGgxPkhlbGxvIERlbW8hPC9oMT5cbiAgICAgICAgPHA+V2VsY29tZSB0byBEZW1vITwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWNrJz5cbiAgICAgICAgICBZb3UgY2xpY2tlZFxuICAgICAgICAgIDxzcGFuPntpbmRleH08L3NwYW4+XG4gICAgICAgICAgdGltZXNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICBDbGljayBtZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRldmljZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAge2RldmljZSA/IDxMYXlvdXRQQz57dGhpcy5tYWluQ29udGVudCgpfTwvTGF5b3V0UEM+IDogPExheW91dD57dGhpcy5tYWluQ29udGVudCgpfTwvTGF5b3V0Pn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc3QgY29uZmlnID0gd2luZG93LkNPTkZJRyB8fCB7fVxuICBoeWRyYXRlKDxBcHAgey4uLmNvbmZpZ30gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImluZGV4Iiwic3RhdGUiLCJQb3B1cE1pbkxheWVyIiwic2hvdyIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImRldmljZSIsImhhbmRsZUNsaWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1haW5Db250ZW50IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYm9vbCIsIndpbmRvdyIsImNvbmZpZyIsIkNPTkZJRyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9