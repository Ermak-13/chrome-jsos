var _ = require('underscore');

var settings = {
  STORAGE_TYPE: 'chrome.local',

  LANG: 'en',
  DEFAULT_LANG: 'en',

  DESKTOP_STORAGE_KEY: 'desktop',
  WIDGETS_STORAGE_KEY: 'widgets',
  SCRIPTS_STORAGE_KEY: 'scripts',
  STYLES_STORAGE_KEY: 'styles',

  SCRIPTS_IS_DOWNLOADABLE: true,
  STYLES_IS_DOWNLOADABLE: true,

  CONFIGURATOR_CONTAINER_ID: 'configurator-container',

  DEFAULT_POSITION: {
    xSide: 'left',
    left: '70px',
    ySide: 'top',
    top: '10px'
  },

  DEFAULT_WIDGET_STYLES: {
    width: '300px',
    height: '200px',
    position: 'absolute',
    top: '10px',
    left: '70px'
  },

  DEFAULT_SETTINGS_DIALOG_NAME: 'default',
  DEFAULT_CONFIGURATOR_REF_NAME: 'configurator',
  WIDGET_DATA_STORAGE_KEY: 'widget-%(name)s-data',
  WIDGET_STORAGE_KEY: 'widget-%(id)s-settings',

  DESKTOP_NAME: 'desktop',
  DESKTOP_CONFIGURATOR_REF_NAME: 'configurator',
  DESKTOP_STYLES: {
    background: "linear-gradient(to top left, #C4D9EC, #0D61B7)"
  },

  NAV_ACTIVE_TAB_CLASS_NAME: 'active',
  NAV_INACTIVE_TAB_CLASS_NAME: '',
  NAV_CLASS_NAME: 'nav nav-tabs mini-nav'
};

module.exports = settings;
