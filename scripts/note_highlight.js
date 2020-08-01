function initializeClickableNotes() {
    let parentElement = document.getElementById('noteRow');

    let noteElements = Array.from(document.getElementsByClassName('note'));

    noteElements.forEach(note => {
        note.addEventListener("click", getNoteNameOfClickedElement)
    });
}

function getNoteNameOfClickedElement() {
    //get data-note attribute of clicked note
    let clickedElement = event.target;

    if (clickedElement.hasAttribute('data-note')) {
        let noteName = clickedElement.getAttribute('data-note');
        console.log(noteName);
        return highlightNotes(noteName);
    } else {
        let noteName = clickedElement.parentElement.getAttribute('data-note');
        console.log(noteName);
        return highlightNotes(noteName);
    }
}

function highlightNotes(noteName) {
    console.log(noteName);
}