const caller = require('./caller');

test('Total high priority', () => {
    const total = caller.highPriorityCount;
    expect(total).toBe(2);
});


