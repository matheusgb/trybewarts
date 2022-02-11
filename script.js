const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const contagem = document.getElementById('counter');
const textao = document.getElementById('textarea');
const enviar = document.getElementById('submit-btn');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao2.disabled = true;

function botaoid() {
  if (checkbox.checked === false) {
    botao2.disabled = true;
  } else {
    botao2.disabled = false;
  }
}

const total = 500;
contagem.innerHTML = `Caracteres restantes: ${total}`;

function contar() {
  const escritas = textao.value.length;
  contagem.innerHTML = `Caracteres restantes: ${total - escritas}`;

  if (textao.value === '') {
    contagem.innerHTML = `Caracteres restantes: ${total}`;
  }
}

function mater() {
  const tech = document.querySelectorAll('.subject:checked');

  let selecionados = [];
  for (let i = 0; i < tech.length; i += 1) {
    selecionados.push(tech[i].value);
  }
  selecionados = selecionados.join(', ');
  return selecionados;
}

function conteudos(p) {
  p.preventDefault();
  const conteudo = document.getElementById('textarea').value;
  const nam = document.getElementById('input-name').value;
  const last = document.getElementById('input-lastname').value;
  const mail = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const familia = document.querySelector('.familia:checked').value;
  const notas = document.querySelector('.nota:checked').value;
  const form = document.getElementById('evaluation-form');

  form.innerHTML = `Nome: ${nam} ${last} <br> Email: ${mail} <br> Casa: ${house} <br> 
  Família: ${familia} <br> Matérias: ${mater()} <br> Avaliação: ${notas} <br> 
  Observações: ${conteudo}`;
}

botao.addEventListener('click', login);
checkbox.addEventListener('click', botaoid);
textao.addEventListener('input', contar);
enviar.addEventListener('click', conteudos);