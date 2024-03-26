
document.addEventListener("DOMContentLoaded", function() {
    containerDiv = document.querySelector('#container');
    
    for (let i = 0; i < 255; i++) {
        squareDivs = document.createElement('div');
        squareDivs.classList.add('square');
        squareDivs.classList.add('cell');
        containerDiv.appendChild(squareDivs);
        
    }
    
  });

  