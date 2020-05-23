const slide = require('./slide-with-conditionals');

test('with conditionals', () => {
    expect(slide.allocatedResources).toEqual(['resource created!']);
});

test('with conditionals', () => {
    expect(slide.availableResources).toEqual([]);
});