var sprintf = require('sprintf-js').sprintf,

    AppDispatcher = require('../app_dispatcher'),
    Events = require('../events'),

    isUrl = require('./is_url'),
    download = require('./download'),
    log = require('./log');

var installScript = function (url) {
  var message = 
    'This feature is disabled because ' +
    'it break google "Developer Program Policies":\n' +
    '"Do not post an app where the primary functionality ' +
    'is to install or launch another app, theme, or extension."\n\n' +
    'If you want you can install JSOS directly - https://github.com/Ermak-13/jsos';

  return alert(message);

  log('info', sprintf('install script %s.', url));

  if (isUrl(url) && global.Settings.get('scripts_is_downloadable')) {
    installDownloadableScript(url);
  } else {
    installRemoteScript(url);
  }
};

var installDownloadableScript = function (url) {
  download(url, {
    success: function (text) {
      var script = {
        url: url,
        text: text
      };

      AppDispatcher.installScript(script);
    }
  });
};

var installRemoteScript = function (url) {
  var script = {
    url: url
  };

  AppDispatcher.installScript(script);
};

module.exports = installScript;
