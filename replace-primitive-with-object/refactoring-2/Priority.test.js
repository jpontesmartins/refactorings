const Priority = require('./Priority');

test('high = 2', () => {
    const priority = new Priority("rush");
    expect(priority.getIndex()).toBe(3);
});

test('high = 2', () => {
    const priority = new Priority("high");
    expect(priority.getIndex()).toBe(2);
});

test('normal = 1', () => {
    const priority = new Priority("normal");
    expect(priority.getIndex()).toBe(1);
});

test('low = 0', () => {
    const priority = new Priority("low");
    expect(priority.getIndex()).toBe(0);
});
