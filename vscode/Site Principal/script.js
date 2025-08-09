function adicionarEmail() {
  const container = document.getElementById('maisEmails');
  const novoInput = document.createElement('input');
  novoInput.type = 'email';
  novoInput.name = 'email[]';
  novoInput.placeholder = 'Outro e-mail';
  novoInput.required = true;
  container.appendChild(novoInput);
}

document.getElementById("formContato").addEventListener("submit", function(event) {
  const inputs = document.querySelectorAll("input[required], textarea[required]");
  let valido = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valido = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#b2dfdb";
    }
  });

  if (!valido) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    event.preventDefault();
  } else {
    alert("Mensagem enviada com sucesso!");
  }
});