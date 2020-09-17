function initializeDynamicHTML() {
    const scaleSelector = document.getElementById('note-scale-selector');
    const instrumentSelector = document.getElementById('instrument-selector');
    
    let selectorID = event.target.getAttribute('ID');
    
    if (selectorID === 'instrument-selector') {
        let valueOfSelectedOption = instrumentSelector.options[instrumentSelector.selectedIndex].value;
        let htmlToLoad = "html/" + valueOfSelectedOption + ".html";
    
        loadNoteFinderHTML(htmlToLoad, selectorID);
    } else {
        let valueOfSelectedOption = scaleSelector.options[scaleSelector.selectedIndex].value;
        let htmlToLoad = "html/" + valueOfSelectedOption + ".html";
    
        loadNoteFinderHTML(htmlToLoad, selectorID);
    }

}

async function loadNoteFinderHTML(htmlToLoad, selectorID) {
    //fetch htmlToLoad
    const contentElement = await fetch(htmlToLoad);
    const contentElementHTML = await contentElement.text();

    if (selectorID === 'instrument-selector') {
        let contentWrapper = document.getElementById('fretboard');

        //remove previously imported HTML
        contentWrapper.innerHTML = '';

        //import new HTML
        contentWrapper.insertAdjacentHTML("beforeend", contentElementHTML);
    } else {
        let contentWrapper = document.getElementById('notes');
        
        //remove previously imported HTML
        contentWrapper.innerHTML = '';

        //import new HTML
        contentWrapper.insertAdjacentHTML("beforeend", contentElementHTML);
        initializeClickableNotes();
    }
}

function initializeClickableNotes() {
    let parentElement = document.getElementById('noteRow');

    let noteElements = Array.from(document.getElementsByClassName('note'));

    noteElements.forEach(note => {
        note.addEventListener("click", getNoteNameOfClickedElement)
    });
}