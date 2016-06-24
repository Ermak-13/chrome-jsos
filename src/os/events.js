var sprintf = require('underscore.string/sprintf');

var Events = {
  openSettingsDialog: function (name) {
    return sprintf('open-%s-settings-dialog', name);
  },

  updateSettings: function (name) {
    return sprintf('update-%s-settings', name);
  },

  saveSettings: function (name) {
    return sprintf('update-%s-settings', name);
  },
};

module.exports = Events;