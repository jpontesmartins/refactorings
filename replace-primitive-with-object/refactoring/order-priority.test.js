const orderPriority = require('./order-priority');
const callers = require('./callers');

test(' order priority',() => {
    const highPriorityTotal = callers.highPriorityCount;
    expect(highPriorityTotal).toBe(2);
});

