
document.addEventListener("DOMContentLoaded", function() {
    /* button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = "press here to change the padsize";
    this.body.appendChild(button);
 */
    
    containerDiv = document.querySelector('#container');
    
    for (let i = 0; i < 255; i++) {
        squareDivs = document.createElement('div');
        squareDivs.classList.add('square');
        squareDivs.classList.add('cell');
        containerDiv.appendChild(squareDivs);
    }
    let squares = document.querySelectorAll('.square'); // Alle Quadrat-Divs auswählen
        
    squares.forEach(function(square) {
            // Event-Listener hinzufügen, um die Hintergrundfarbe zu ändern, 
            // wenn das Quadrat-Div gehovert wird
        square.addEventListener('mouseover', function() {
            // Zufällige RGB-Werte generieren
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
                
            // Neue Hintergrundfarbe festlegen
            let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            square.style.backgroundColor = randomColor;
            });
    });

    button = document.querySelector('.btn');
    button.addEventListener('click', function () {
        containerDiv.innerHTML = "";
        let padsize = prompt("enter the number between 1 to 100", 16);
        for (let i = 0; i < padsize; i++) {
            squareDivs = document.createElement('div');
            squareDivs.classList.add('square');
            squareDivs.classList.add('cell');
            containerDiv.appendChild(squareDivs);
        }

    })

  });

  