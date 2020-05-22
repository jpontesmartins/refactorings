class Priority {
    constructor(level) {
        this._level = level;
    }

    toString() {
        return this._level;
    }

    getLevelIndex() {
        return Priority.getLevels().findIndex(level => level === this._level);
    }

    static getLevels() {
        return ['low', 'normal', 'high', 'rush'];
    }

    higherThan(other) {
        return this.getLevelIndex() > other.getLevelIndex();
    }

}

module.exports = Priority;