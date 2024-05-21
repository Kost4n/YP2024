const img = document.getElementById('img');

let set = () => {
    img.style.width = document.getElementById('img-block').style.width - 100;
    img.style.height = document.getElementById('img-block').style.height - 100;    
}

set();
window.addEventListener('resize', set);