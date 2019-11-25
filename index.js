'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
var AudioAssets = require('./lib/react');

// module.exports = function(number, locale) {
//     return number.toLocaleString(locale);
// };

var React = require('react');

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

var Button = React.createClass({
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});

module.exports = Button;