// Refatoração

// Move Statements into Function

// Objetivo: Remover duplicação. As linhas 14-15 e 29-30 são semanticamente equivalentes.

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push("...other info..");
    result.push("...other info..");
    result.push(emitPhotoData(person.photo));
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
        emitPhotoData(photo),
        "</div>"
    ].join("\n");
}

function emitPhotoData(photo) {
    return [
        `<p> title: ${photo.title} </p>`, 
        `<p> location: ${photo.location} </p>`,
        `<p> date: ${photo.date.toDateString()} </p>`
    ].join("\n");
}

module.exports = {
    renderPerson
}
