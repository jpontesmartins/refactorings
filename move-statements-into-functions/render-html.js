// Refatoração

// Move Statements into Function

// Objetivo: Remover duplicação. As linhas 14-15 e 29-30 são semanticamente equivalentes.


function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push("...other info..");
    result.push("...other info..");
    result.push(`<p> title: ${person.photo.title}  </p>`); //titulo..
    result.push(emitPhotoData(person.photo)); //dados da foto
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
        `<p> title: ${photo.title} </p>`, //titulo..
        emitPhotoData(photo), //dados da foto
        "</div>"
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p> location: ${aPhoto.location} </p>`);
    result.push(`<p> date: ${aPhoto.date.toDateString()} </p>`);
    return result.join("\n");
}


// para reproduzir

let outStream = "";

const person = {
    name: "John",
    photo: {
        title: "John's Picture",
        location: "park",
        date: new Date()
    }
};

console.log(renderPerson(outStream, person));

