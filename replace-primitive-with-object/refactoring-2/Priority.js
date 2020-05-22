class Priority {
    constructor(level) {
        this._level = level;
    }

    toString() {
        return this._level;
    }

    getIndex() {
        return Priority.getLevels().findIndex(level => level === this._level);
    }

    static getLevels() {
        return ['low', 'normal', 'high', 'rush'];
    }

    higherThan(other) {
        return this.getIndex() > other.getIndex();
    }

}

module.exports = Priority;