import template from './player-list.html';

class PlayerListController {
    constructor(playerService) {
        this.playerService = playerService;
        this.activePlayer = null;
        this.players = null;
        this.update();
    }

    update() {
        return this.playerService.get().then((response) => {
            this.players = response;
        });
    }

    save() {
        return this.playerService.set(this.players);
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
