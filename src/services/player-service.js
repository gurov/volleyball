import _ from 'lodash';

export class PlayerService {
    constructor($localForage) {
        this.localForage = $localForage;
    }

    get() {
        return this.localForage.getItem('players');
    }

    set(players) {
        return this.localForage.setItem('players', players);
    }

    create(lastName, firstName) {
        return this.get().then((players) => {
            if (!players || players.length === 0) {
                return this.localForage.setItem('players', [{
                    id: 0,
                    lastName: lastName,
                    firstName: firstName,
                    goal: 0
                }]);
            } else {
                players.push({
                    id: _.max(_.pluck(players, 'id')) + 1,
                    lastName: lastName,
                    firstName: firstName,
                    goal: 0
                });
                return this.localForage.setItem('players', players);
            }
        });
    }
}
