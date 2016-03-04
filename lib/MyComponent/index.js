'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent() {
    var styles = {
        textAlign: 'center',
        fontFamily: '"SF UI Text", "Helvetica Neue", arial, san-serif',
        fontSize: '3rem',
        padding: '2rem'
    };
    return _react2.default.createElement(
        'div',
        { style: styles },
        'Reusable component'
    );
};

exports.default = MyComponent;