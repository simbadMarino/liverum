"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSwipeable = require("react-swipeable");

var _ = require("..");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TocItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TocItem, _PureComponent);

  function TocItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TocItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TocItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setLocation", function () {
      _this.props.setLocation(_this.props.href);
    });

    return _this;
  }

  _createClass(TocItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          styles = _this$props.styles;
      return _react.default.createElement("button", {
        onClick: this.setLocation,
        style: styles
      }, label);
    }
  }]);

  return TocItem;
}(_react.PureComponent);

TocItem.propTypes = {
  label: _propTypes.default.string,
  href: _propTypes.default.string,
  setLocation: _propTypes.default.func,
  styles: _propTypes.default.object
};

var ReactReader =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(ReactReader, _PureComponent2);

  function ReactReader(props) {
    var _this2;

    _classCallCheck(this, ReactReader);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ReactReader).call(this, props));

    _defineProperty(_assertThisInitialized(_this2), "toggleToc", function () {
      _this2.setState({
        expanedToc: !_this2.state.expanedToc
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "next", function () {
      var node = _this2.readerRef.current;
      node.nextPage();
    });

    _defineProperty(_assertThisInitialized(_this2), "prev", function () {
      var node = _this2.readerRef.current;
      node.prevPage();
    });

    _defineProperty(_assertThisInitialized(_this2), "onTocChange", function (toc) {
      var tocChanged = _this2.props.tocChanged;

      _this2.setState({
        toc: toc
      }, function () {
        return tocChanged && tocChanged(toc);
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "setLocation", function (loc) {
      var locationChanged = _this2.props.locationChanged;

      _this2.setState({
        expanedToc: false
      }, function () {
        return locationChanged && locationChanged(loc);
      });
    });

    _this2.readerRef = _react.default.createRef();
    _this2.state = {
      expanedToc: false,
      toc: false
    };
    return _this2;
  }

  _createClass(ReactReader, [{
    key: "renderToc",
    value: function renderToc() {
      var _this3 = this;

      var _this$state = this.state,
          toc = _this$state.toc,
          expanedToc = _this$state.expanedToc;
      var styles = this.props.styles;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        style: styles.tocArea
      }, _react.default.createElement("div", {
        style: styles.toc
      }, toc.map(function (item, i) {
        return _react.default.createElement(TocItem, _extends({}, item, {
          key: i,
          setLocation: _this3.setLocation,
          styles: styles.tocAreaButton
        }));
      }))), expanedToc && _react.default.createElement("div", {
        style: styles.tocBackground,
        onClick: this.toggleToc
      }));
    }
  }, {
    key: "renderTocToggle",
    value: function renderTocToggle() {
      var expanedToc = this.state.expanedToc;
      var styles = this.props.styles;
      return _react.default.createElement("button", {
        style: Object.assign({}, styles.tocButton, expanedToc ? styles.tocButtonExpaned : {}),
        onClick: this.toggleToc
      }, _react.default.createElement("span", {
        style: Object.assign({}, styles.tocButtonBar, styles.tocButtonBarTop)
      }), _react.default.createElement("span", {
        style: Object.assign({}, styles.tocButtonBar, styles.tocButtonBottom)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          url = _this$props2.url,
          title = _this$props2.title,
          showToc = _this$props2.showToc,
          loadingView = _this$props2.loadingView,
          epubOptions = _this$props2.epubOptions,
          styles = _this$props2.styles,
          getRendition = _this$props2.getRendition,
          locationChanged = _this$props2.locationChanged,
          location = _this$props2.location,
          swipeable = _this$props2.swipeable;
      var _this$state2 = this.state,
          toc = _this$state2.toc,
          expanedToc = _this$state2.expanedToc;
      return _react.default.createElement("div", {
        style: styles.container
      }, _react.default.createElement("div", {
        style: Object.assign({}, styles.readerArea, expanedToc ? styles.containerExpaned : {})
      }, showToc && this.renderTocToggle(), _react.default.createElement("div", {
        style: styles.titleArea
      }, title), _react.default.createElement(_reactSwipeable.Swipeable, {
        onSwipedRight: this.prev,
        onSwipedLeft: this.next,
        trackMouse: true
      }, _react.default.createElement("div", {
        style: styles.reader
      }, _react.default.createElement(_.EpubView, {
        ref: this.readerRef,
        url: url,
        location: location,
        loadingView: loadingView,
        tocChanged: this.onTocChange,
        locationChanged: locationChanged,
        epubOptions: epubOptions,
        getRendition: getRendition
      }), swipeable && _react.default.createElement("div", {
        style: styles.swipeWrapper
      }))), _react.default.createElement("button", {
        style: Object.assign({}, styles.arrow, styles.prev),
        onClick: this.prev
      }, "\u2039"), _react.default.createElement("button", {
        style: Object.assign({}, styles.arrow, styles.next),
        onClick: this.next
      }, "\u203A")), showToc && toc && this.renderToc());
    }
  }]);

  return ReactReader;
}(_react.PureComponent);

ReactReader.defaultProps = {
  loadingView: _react.default.createElement("div", {
    style: _style.default.loadingView
  }, "Loading\u2026"),
  locationChanged: null,
  tocChanged: null,
  showToc: true,
  styles: _style.default
};
ReactReader.propTypes = {
  title: _propTypes.default.string,
  loadingView: _propTypes.default.element,
  url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(ArrayBuffer)]),
  showToc: _propTypes.default.bool,
  location: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  locationChanged: _propTypes.default.func,
  tocChanged: _propTypes.default.func,
  styles: _propTypes.default.object,
  epubOptions: _propTypes.default.object,
  getRendition: _propTypes.default.func,
  swipeable: _propTypes.default.bool
};
var _default = ReactReader;
exports.default = _default;