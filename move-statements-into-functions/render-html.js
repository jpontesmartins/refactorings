// Refatoração

// Move Statements into Function

// Objetivo: Remover duplicação. As linhas 12-13 e 27-28 são semanticamente equivalentes.


function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p> title: ${person.photo.title}`); //titulo..
    result.push(emitPhotoData(person.photo)); //dados da foto
    return result.join("\n");
}

function renderPhoto(photo) {
    // ...
    photoDiv(photo);
    // ...
    return photo;
}

function photoDiv(photo) {
    return [
        "<div>",
        `<p> title: ${photo.title} </p>`, //titulo..
        emitPhotoData(photo), //dados da foto
        "</div>"
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p> location: ${aPhoto.location}`);
    result.push(`<p> date: ${aPhoto.date.toDateString()}`);
    return result.join("\n");
}