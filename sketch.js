
document.addEventListener("DOMContentLoaded", function() {
    button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = "press here to change the padsize";
    document.body.appendChild(button);
    document.body.prepend(button);

    title = document.createElement('h1');
    title.textContent = "Project: Etch-a-Sketch Game";
    document.body.appendChild(title);
    document.body.prepend(title);

    containerDiv = document.querySelector('#container');
    let defaultGrid = 16;

    function createInitialGrid() {
        // Schleife zum Erstellen der Spalten
        for (let i = 0; i < defaultGrid; i++) {
            columnDivs = document.createElement('div');
            columnDivs.classList.add('column');
            containerDiv.appendChild(columnDivs);
            // Schleife zum Erstellen der Zellen
            for (let j = 0; j < defaultGrid; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add("hover");
                columnDivs.appendChild(cell);
            }
        } 
        addHover();       
    }
    createInitialGrid();

    function randomBgColor() {
        // Zufällige RGB-Werte generieren
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);  
        // Neue Hintergrundfarbe festlegen
        let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        return bgColor;
    }

    function addHover() {
        let hover = document.querySelectorAll('.hover');  
    hover.forEach((element) =>{
            // Event-Listener hinzufügen, um die Hintergrundfarbe zu ändern, 
            // wenn das Quadrat-Div gehovert wird
        element.addEventListener('mouseover', (event) => {
            element.style.backgroundColor = randomBgColor();
        });
    });        
    }

    function newPadsize() {
        let newPad = prompt("enter the number between 1 to 100", 32);
        if (1 > newPad || newPad > 100) {
            return newPadsize();
        } else {
            return newPad;
        }
    }
    
    button = document.querySelector('.btn');
    button.addEventListener('click', () => {
        let padsize = newPadsize();
        containerDiv.innerHTML = "";
        for (let i = 0; i < padsize; i++) {
            columnDivs = document.createElement('div');
            columnDivs.classList.add('column');
            containerDiv.appendChild(columnDivs);
            for (let j = 0; j < padsize; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell", "hover");
                columnDivs.appendChild(cell); 
            }
        }
        addHover();
    })
});

  