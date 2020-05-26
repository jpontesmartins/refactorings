// Refatoração

// Move Statements into Function

// Objetivo: Remover duplicação. As linhas 14-15 e 29-30 são semanticamente equivalentes.

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push("...other info..");
    result.push("...other info..");
    // result.push(`<p> title: ${person.photo.title}  </p>`); //titulo..
    // result.push(emitPhotoData(person.photo)); //dados da foto
    result.push(xxnew(person.photo));
    return result.join("\n");
}

function renderPhoto(photo) {
    return [
        "<img src...> ",
        photoDiv(photo)
    ].join("\n");
}

function photoDiv(photo) {
    return [
        "<div>",
        xxnew(photo),
        "</div>"
    ].join("\n");
}

function xxnew(photo) {
    return [
        `<p> title: ${photo.title} </p>`, //titulo..
        `<p> location: ${photo.location} </p>`,
        `<p> date: ${photo.date.toDateString()} </p>`
    ].join("\n");
}

function emitPhotoData(aPhoto) {
}

module.exports = {
    renderPerson
}
