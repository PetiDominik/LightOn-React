
class Tiles {
    #lamps = [];
    #stepCount;

    constructor() {
        for (let i = 0; i < 9; i++) {
            this.#lamps.push(this.#randomTrueFalse());
        }
    }


    flipState(index) {
        this.#stepCount++;

        let flipStates = this.#getNextTiles(index);

        flipStates.forEach(place => {
            this.#lamps[place] = !this.#lamps[place];
        });
    }

    #getNextTiles(id) {
        const OFFSETS = [0, -1, 1, -3, 3];
        let tileIndexes = [];

        OFFSETS.forEach(offset => {
            let aktId = id + offset; 

            if (aktId >= 0 && aktId < this.#lamps.length) {
                if ((Math.floor(aktId / 3)  === Math.floor(id / 3)) || (aktId % 3 === id % 3)) {
                    tileIndexes.push(aktId);
                }
            }
        });
        
        return tileIndexes;
    }

    getTiles() {
        return [...this.#lamps];
    }

    getStepCount() {
        return this.#stepCount;
    }

    checkStateCount() {
        let db = 0;
        this.#lamps.forEach(state => {
            db += state ? 1 : 0;
        });
        return db;
    }

    #randomTrueFalse() {
        return Math.floor((Math.random() * 5) + 1) === 4;
    }
}

export default Tiles;