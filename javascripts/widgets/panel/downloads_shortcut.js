var React = require('react'),

    OS = require('os'),
    Link = OS.Link;

var DownloadsShortcut = React.createClass({
  handleClick: function () {
    chrome.tabs.create({
      url: 'chrome://downloads'
    });
  },

  render: function () {
    return (
      <Link
        style={ this.props.style }
        hoverStyle={ this.props.hoverStyle }
        onClick={ this.handleClick }>

        <span className="glyphicon glyphicon-download" />
      </Link>
    );
  }
});

module.exports = DownloadsShortcut;