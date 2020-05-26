const renderHtml = require('./render-html');

test('render html', () => {
    let outStream = "";

    const person = {
        name: "John",
        photo: {
            title: "John's Picture",
            location: "park",
            date: new Date()
        }
    };
    const html = renderHtml.renderPerson(outStream, person);
    // console.log(html.split("\n"));

    const lines = html.split("\n");
    expect(lines[0]).toBe('<p>John</p>');
    expect(lines[1]).toBe('<img src...> ');
    expect(lines[2]).toBe('<div>');
    expect(lines[3]).toBe("<p> title: John's Picture </p>");
    expect(lines[4]).toBe('<p> location: park </p>');
    expect(lines[5]).toBe("<p> date: Tue May 26 2020 </p>");
    expect(lines[6]).toBe('</div>');
    expect(lines[7]).toBe('...other info..');
    expect(lines[8]).toBe('...other info..');
    expect(lines[9]).toBe("<p> title: John's Picture </p>");
    expect(lines[10]).toBe('<p> location: park </p>');
    expect(lines[11]).toBe("<p> date: Tue May 26 2020 </p>");

});