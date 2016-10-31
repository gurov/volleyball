import template from './court.html';

class CourtController {
    constructor(gameService) {
        this.bla = 'bla';
        this.players = gameService.test();
    }
}

export const courtComponent = {
    template,
    controller: CourtController
};
