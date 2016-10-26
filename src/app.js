import 'expose-loader?jQuery!jquery';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-localforage';
import 'lodash';

import {player} from './player/player';

angular.module('app', [
    'ui.router',
    'LocalForageModule',
    player.name
]);
