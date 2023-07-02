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

// redes rolagem 20%

window.addEventListener('scroll', function() {
  var redesSociais = document.querySelector('.redes-sociais');
  var distanciaTopo = document.documentElement.scrollTop || document.body.scrollTop;
  var alturaTela = window.innerHeight;
  var limiteAparecer = alturaTela * 0.5;

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

// animação para aparecer

document.addEventListener("scroll", function() {
  var sobreElement = document.querySelector(".sobre");
  var sobreElementOffset = sobreElement.offsetTop;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > sobreElementOffset - window.innerHeight + 200) {
    sobreElement.classList.add("aparecer");
  }
});
