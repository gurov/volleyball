import template from './player-add.html';

class PlayerAddController {
    constructor(playerService) {
        this.bla = 'bla';
        this.players = playerService.getPlayers();
    }
}

export const playerAddComponent = {
    template,
    controller: PlayerAddController
};
