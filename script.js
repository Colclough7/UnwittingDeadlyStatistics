

const progress = document.querySelector('.progress-done')

let i = 0; 
function move() {
  if (i == 0) {
    i = 1;
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progress.style.width = width + "%";
        progress.textContent = width + "%";
      }
    }
  }
}


move()

