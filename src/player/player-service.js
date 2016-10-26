import _ from 'lodash';

export class PlayerService {
    constructor($localForage) {
        this.localForage = $localForage;
    }
    get() {
        return this.localForage.getItem('players');
        //      {
        //          id: 2,
        //          firstName: 'Сергей',
        //          lastName: 'Петров',
        //          goal: 2
        //      }
    }
    create(lastName, firstName) {
        let players = this.get();
        let result = null;
        if (!players || players.length === 0) {
            result = this.localForage.setItem('players', [{
                id: 0,
                lastName: lastName,
                firstName: firstName,
                goal: 0
            }]);
        } else {
            let newId = _.max(_.pluck(players, 'id')) + 1;
            players.push({
                id: newId,
                lastName: lastName,
                firstName: firstName,
                goal: 0
            });
            result = this.localForage.setItem(players);
        }
        return result;
    }
}
