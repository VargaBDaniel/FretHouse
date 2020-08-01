function initializeDynamicHTML() {
    let scaleSelector = document.getElementById('note-scale-selector');
    let valueOfSelectedScale = scaleSelector.options[scaleSelector.selectedIndex].value;
    let htmlToLoad = "html/" + valueOfSelectedScale + ".html";
    
    return loadNoteFinderHTML(htmlToLoad);
}

async function loadNoteFinderHTML(htmlToLoad) {
    const contentElement = await fetch(htmlToLoad);
    const contentWrapper = document.getElementById('notes');
    
    const contentElementHTML = await contentElement.text();

    contentWrapper.insertAdjacentHTML("beforeend", contentElementHTML);
}