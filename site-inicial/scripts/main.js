let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/d.png') {
      minhaImagem.setAttribute ('src','imagens/cachorro.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/d.png');
    }
}


let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h2');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Animais são legais, ' + meuNome;
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Animais são legais, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu primeiro nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Animais são legais, ' + meuNome;
  }
}