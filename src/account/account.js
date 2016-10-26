import angular from 'angular';

import {balanceComponent} from './balance/balance-component';
import {accountService} from './services/account-service';
/**
 * @namespace account
 */
export const account = angular.module('account', ['ui.router'])
    .factory('accountService', accountService)
    .component('opAccountFinancialBalance', balanceComponent)
    .config(function ($stateProvider) {
        $stateProvider
            .state('account', {
                url: '/account',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('account.balance', {
                url: '/balance',
                template: '<op-account-financial-balance></op-account-financial-balance>'
            });
    });
