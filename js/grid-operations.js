const parent = document.getElementsByClassName("grid-container")[0];
const children = Array.prototype.slice.call(parent.children)

function shuffleGrid() {
    for (let i = children.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [children[i], children[j]] = [children[j], children[i]];
    }
    updateGrid(children)
}

function sortGrid() {
    children.sort((a, b) => {
        return (a.getAttribute('value')) - (b.getAttribute('value'));
    });
    updateGrid(children)
}

function updateGrid(children) {
    let dummyDiv = document.createDocumentFragment()
    
    children.forEach(child => {
        dummyDiv.appendChild(child);
    });

    parent.appendChild(dummyDiv);
}
