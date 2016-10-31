export class GameService {
    constructor($localForage) {
        this.localForage = $localForage;
    }
    test() {
        return 1;
    }
}
