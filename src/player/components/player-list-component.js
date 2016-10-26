import template from './player-list.html';
import _ from 'lodash';

class PlayerListController {
    constructor(playerService) {
        this.playerService = playerService;
        this.playerService.get().then((response) => {
            this.players = response;

        });
        this.test = _.max([12,3,4,2,2,2,2,1,2,3]);
    }

    create (lastName, firstName) {
        return this.playerService.create(lastName, firstName).then();
    }


}

export const playerListComponent = {
    template,
    controller: PlayerListController
};
