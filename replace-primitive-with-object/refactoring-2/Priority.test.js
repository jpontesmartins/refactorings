const Priority = require('./Priority');

test('high = 2', () => {
    const priority = new Priority("rush");
    expect(priority.getLevelIndex()).toBe(3);
});

test('high = 2', () => {
    const priority = new Priority("high");
    expect(priority.getLevelIndex()).toBe(2);
});

test('normal = 1', () => {
    const priority = new Priority("normal");
    expect(priority.getLevelIndex()).toBe(1);
});

test('low = 0', () => {
    const priority = new Priority("low");
    expect(priority.getLevelIndex()).toBe(0);
});
