"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("epubjs/lib/index"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

global.ePub = _index.default; // Fix for v3 branch of epub.js -> needs ePub to by a global var

var EpubView =
/*#__PURE__*/
function (_Component) {
  _inherits(EpubView, _Component);

  function EpubView(props) {
    var _this;

    _classCallCheck(this, EpubView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EpubView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onLocationChange", function (loc) {
      var _this$props = _this.props,
          location = _this$props.location,
          locationChanged = _this$props.locationChanged;
      var newLocation = loc && loc.start;

      if (location !== newLocation) {
        _this.location = newLocation;
        locationChanged && locationChanged(newLocation);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (_ref) {
      var key = _ref.key;
      key && key === "ArrowRight" && _this.nextPage();
      key && key === "ArrowLeft" && _this.prevPage();
    });

    _this.state = {
      isLoaded: false,
      toc: []
    };
    _this.viewerRef = _react.default.createRef();
    _this.location = props.location;
    _this.book = _this.rendition = _this.prevPage = _this.nextPage = null;
    return _this;
  }

  _createClass(EpubView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          url = _this$props2.url,
          tocChanged = _this$props2.tocChanged; // use empty options to avoid ArrayBuffer urls being treated as options in epub.js

      var epubOptions = {};
      this.book = new _index.default(url, epubOptions);
      this.book.loaded.navigation.then(function (_ref2) {
        var toc = _ref2.toc;

        _this2.setState({
          isLoaded: true,
          toc: toc
        }, function () {
          tocChanged && tocChanged(toc);

          _this2.initReader();
        });
      });
      document.addEventListener("keydown", this.handleKeyPress, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.book = this.rendition = this.prevPage = this.nextPage = null;
      document.removeEventListener("keydown", this.handleKeyPress, false);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !this.state.isLoaded || nextProps.location !== this.props.location;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location && this.location !== this.props.location) {
        this.rendition.display(this.props.location);
      }
    }
  }, {
    key: "initReader",
    value: function initReader() {
      var _this3 = this;

      var toc = this.state.toc;
      var _this$props3 = this.props,
          location = _this$props3.location,
          epubOptions = _this$props3.epubOptions,
          getRendition = _this$props3.getRendition;
      var node = this.viewerRef.current;
      this.rendition = this.book.renderTo(node, _objectSpread({
        contained: true,
        width: "100%",
        height: "100%"
      }, epubOptions));
      this.rendition.display(typeof location === "string" || typeof location === "number" ? location : toc[0].href);

      this.prevPage = function () {
        _this3.rendition.prev();
      };

      this.nextPage = function () {
        _this3.rendition.next();
      };

      this.rendition.on("locationChanged", this.onLocationChange);
      getRendition && getRendition(this.rendition);
    }
  }, {
    key: "renderBook",
    value: function renderBook() {
      var styles = this.props.styles;
      return _react.default.createElement("div", {
        ref: this.viewerRef,
        style: styles.view
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;
      var _this$props4 = this.props,
          loadingView = _this$props4.loadingView,
          styles = _this$props4.styles;
      return _react.default.createElement("div", {
        style: styles.viewHolder
      }, isLoaded && this.renderBook() || loadingView);
    }
  }]);

  return EpubView;
}(_react.Component);

EpubView.defaultProps = {
  loadingView: null,
  locationChanged: null,
  tocChanged: null,
  styles: _style.default,
  epubOptions: {}
};
EpubView.propTypes = {
  url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(ArrayBuffer)]),
  loadingView: _propTypes.default.element,
  location: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  locationChanged: _propTypes.default.func,
  tocChanged: _propTypes.default.func,
  styles: _propTypes.default.object,
  epubOptions: _propTypes.default.object,
  getRendition: _propTypes.default.func
};
var _default = EpubView;
exports.default = _default;