function initializeDynamicHTML() {
    const scaleSelector = document.getElementById('note-scale-selector');
    const instrumentSelector = document.getElementById('instrument-selector');
    
    let selectorID = event.target.getAttribute('ID');
    
    if (selectorID === 'instrument-selector') {
        let valueOfSelectedOption = instrumentSelector.options[instrumentSelector.selectedIndex].value;
        let stringNumber = valueOfSelectedOption.slice(0, 2);
        console.log(stringNumber);
        let htmlToLoad = "html/" + valueOfSelectedOption + ".html";
    
        loadNoteFinderHTML(htmlToLoad, selectorID, stringNumber);
    } else {
        let valueOfSelectedOption = scaleSelector.options[scaleSelector.selectedIndex].value;
        let stringNumber = valueOfSelectedOption.slice(0, 2);
        console.log(stringNumber);
        let htmlToLoad = "html/" + valueOfSelectedOption + ".html";
    
        loadNoteFinderHTML(htmlToLoad, selectorID, stringNumber);
    }

}

async function loadNoteFinderHTML(htmlToLoad, selectorID, stringNumber) {
    //fetch htmlToLoad
    const contentElement = await fetch(htmlToLoad);
    const contentElementHTML = await contentElement.text();
    
    stringNumber = '_' + stringNumber;
    console.log(stringNumber);
    const stringClass = new RegExp(/[_]\d+[s]/);

    if (selectorID === 'instrument-selector') {
        let contentWrapper = document.getElementById('fretboard');

        if (contentWrapper.className.match(stringClass)) {
            contentWrapper.className = contentWrapper.className.replace(stringClass, '');
        }
        contentWrapper.classList.add(stringNumber);

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
    let noteElements = Array.from(document.querySelectorAll('#noteRow > .note'));

    noteElements.forEach(note => {
        note.addEventListener("click", getNoteNameOfClickedElement)
    });
}