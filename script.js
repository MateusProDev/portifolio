const barbearia = document.querySelector('.containerNav');
const navLinks = document.querySelector('.nav-links');

barbearia.addEventListener('click', () => {
  barbearia.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// animação dos cards
function activateBox(box) {
  box.classList.toggle('active');
}

function rotateIn(box) {
  if (!box.classList.contains('active')) {
    box.classList.add('cardCodeBox-hover');
  }
}

function rotateOut(box) {
  box.classList.remove('cardCodeBox-hover');
}

// mudadar o site de cor

var body = document.body;
var titulo = document.querySelector("h1");
var paragrafos = document.querySelectorAll("p");
var corOriginal = {
  backgroundColor: body.style.backgroundColor,
  color: body.style.color,
  tituloColor: titulo.style.color,
  paragrafoColors: []
};

paragrafos.forEach(function(paragrafo) {
  corOriginal.paragrafoColors.push(paragrafo.style.color);
});

var elemento = document.getElementById("elemento");
var clicado = false;

elemento.addEventListener("click", function() {
  if (clicado) {
    body.style.backgroundColor = corOriginal.backgroundColor;
    body.style.color = corOriginal.color;
    titulo.style.color = corOriginal.tituloColor;
    paragrafos.forEach(function(paragrafo, index) {
    paragrafo.style.color = corOriginal.paragrafoColors[index];
    });
    clicado = false;
  } else {
    body.style.backgroundColor = "#11a1bb";
    body.style.color = "black";
    titulo.style.color = "#fff";
    paragrafos.forEach(function(paragrafo) {
      paragrafo.style.color = "";
    });
    clicado = true;
  }
});


