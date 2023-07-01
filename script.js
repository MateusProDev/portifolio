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

var elementoUm = document.getElementById("elementoUm");
var clicado = false;

elementoUm.addEventListener("click", function() {
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

var elementoUm = document.getElementById("elementoDois");

elementoDois.addEventListener("click", function() {
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

// redes rolagem 20%

window.addEventListener('scroll', function() {
  var redesSociais = document.querySelector('.redes-sociais');
  var distanciaTopo = document.documentElement.scrollTop || document.body.scrollTop;
  var alturaTela = window.innerHeight;
  var limiteAparecer = alturaTela * 0.9;

  if (distanciaTopo > limiteAparecer) {
    redesSociais.classList.add('show');
  } else {
    redesSociais.classList.remove('show');
  }
})

// acão do formulario

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém o valor do campo de e-mail
  var email = document.getElementById("email").value;

  // Configuração do endpoint do Getform.io
  var endpoint = "YOUR_FORM_ENDPOINT";

  // Envia os dados do formulário para o endpoint usando o Fetch API
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  })
    .then(function(response) {
      // Exibe a mensagem de sucesso
      var successMessage = document.getElementById("success-message");
      successMessage.classList.remove("hidden");
    })
    .catch(function(error) {
      // Exibe mensagem de erro
      console.error("Erro ao enviar o e-mail:", error);
    });
});
