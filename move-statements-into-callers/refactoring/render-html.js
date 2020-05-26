// Refatoração

// Move Statements into Callers

// Objetivo: Quando um código compartilhado em diversos lugares precisa variar algo em algumas chamadas


function renderPerson(outStream, person){
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write("</div>\n");
        });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p> title: ${photo.title} </p>\n`);
    outStream.write(`<p> date: ${photo.date.toDateString()} </p>\n`);
    outStream.write(`<p> location: ${photo.location} </p>\n`);
}


