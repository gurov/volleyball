import angular from 'angular';

import {playerListComponent} from './components/player-list-component';
import {playerAddComponent} from './components/player-add-component';
import {PlayerService} from './../services/player-service';
/**
 * @namespace player
 */
export const player = angular.module('player', ['ui.router'])
    .service('playerService', PlayerService)
    .component('cPlayerList', playerListComponent)
    .component('cPlayerAdd', playerAddComponent)
    .config(function ($stateProvider) {
        $stateProvider
            .state('players', {
                url: '/players',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('players.list', {
                url: '/list',
                template: '<c-player-list></c-player-list>'
            })
            .state('players.add', {
                url: '/add',
                template: '<c-player-add></c-player-add>'
            });

    });
