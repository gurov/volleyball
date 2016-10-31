import angular from 'angular';

import {courtComponent} from './components/court-component';
import {GameService} from './../services/game-service.js';
/**
 * @namespace game
 */
export const game = angular.module('game', ['ui.router'])
    .service('gameService', GameService)
    .component('cCourtList', courtComponent)
    .config(function ($stateProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                template: '<c-court></c-court>'
            });

    });
