import template from './player-list.html';

class PlayerListController {
    constructor(playerService) {
        this.playerService = playerService;
        this.playerService.get().then((response) => {
            this.players = response;
        });
        this.test1 = 'Гуов';
    }

    create(lastName, firstName) {
        return this.playerService.create(lastName, firstName).then((response) => {
            this.players = response;
            lastName = firstName = '';
        });
    }
}

export const playerListComponent = {
    template,
    controller: PlayerListController
};
