import template from './balance.html';

class BalanceController {
    constructor(accountService) {
        this.bla = 'bla';
        this.gg = accountService.gogog();
    }
}

export const balanceComponent = {
    template,
    controller: BalanceController
};
