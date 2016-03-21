'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cassis = require('cassis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.css = {
      'modal': new _cassis.Stylesheet('\n      .reacted-modal {\n        position : absolute;\n        top : 0;\n        height : 100vh;\n        left : 0;\n        right : 0;\n        background : rgba(0, 0, 0, .6);\n      }\n\n      .reacted-modal--hidden {\n        top : -99999px\n      }\n    '),

      box: new _cassis.Stylesheet('.reacted-modal-box {\n      position : absolute;\n      border : 5px solid black;\n      background : #fff;\n      top : 25%;\n      left : 25%;\n      right : 25%;\n      bottom : 25%;\n      z-index : 999;\n    }')
    }, _this.style = document.querySelector('#cassis-style'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.view = _reactDom2.default.findDOMNode(this.refs.view);

      if (!this.style) {
        this.style = document.createElement('style');
        this.style.setAttribute('id', 'cassis-style');
        this.style.appendChild(document.createTextNode([this.css.modal.toString(), this.css.box.toString()].join('\n')));

        document.body.appendChild(this.style);
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.props.toggle(e);
    }
  }, {
    key: 'blockToggle',
    value: function blockToggle(e) {
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var show = false;

      if ('show' in this.props) {
        show = this.props.show;
      }

      var classes = ['reacted-modal'];

      if (!show) {
        classes.push('reacted-modal--hidden');
      }

      return _react2.default.createElement(
        'div',
        { ref: 'view', className: classes.join(' '), onClick: this.toggle.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reacted-modal-box', onClick: this.blockToggle.bind(this) },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;