import * as angular from 'angular';

import AppRouter from './app.router';

require('angular-ui-router');
require('./app.scss');

angular
  .module('app', [
    'ui.router'
    // Inject your own modules here
  ])
  .config(AppRouter);