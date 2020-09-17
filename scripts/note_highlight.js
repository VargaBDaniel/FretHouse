function getNoteNameOfClickedElement() {
    //get data-note attribute of clicked note
    let clickedElement = event.target;

    if(clickedElement.classList.contains('active') || clickedElement.parentElement.classList.contains('active')) {
        removeActiveClass(clickedElement);
    } else {
        if (clickedElement.hasAttribute('data-note')) {
            let noteName = clickedElement.getAttribute('data-note');
            clickedElement.classList.add('active');
            highlightNotes(noteName);
        } else {
            let noteName = clickedElement.parentElement.getAttribute('data-note');
            clickedElement.parentElement.classList.add('active');
            highlightNotes(noteName);
        }
    }
}

function removeActiveClass(clickedElement) {
    if (clickedElement.classList.contains('active')) {
        clickedElement.classList.remove('active');
    } else if (clickedElement.parentElement.classList.contains('active')) {
        clickedElement.parentElement.classList.remove('active');
    }
}

function highlightNotes(noteName) {
    let correctNotes = document.querySelectorAll('#fingerboard .note[data-note=' + noteName + ']');
    
    correctNotes.forEach(note => {
        note.classList.add('active');
    });
}