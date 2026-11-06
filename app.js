// --- FILTRO ANTI-OFENSIVO PARA COMENTÁRIOS ---
const palavrasProibidas = ["xingamento1", "xingamento2", "palavrao1", "lixo", "golpe"];

function validarComentario(texto) {
  const textoMinusculo = texto.toLowerCase();
  for (let palavra of palavrasProibidas) {
    if (textoMinusculo.includes(palavra)) {
      alert("Comentário bloqueado por conter termos inadequados.");
      return false;
    }
  }
  return true;
}

// Exemplo de uso ao enviar avaliação:
function enviarAvaliacao(comentarioUsuario) {
  if (!validarComentario(comentarioUsuario)) {
    return; // Interrompe o envio se for ofensivo
  }
  console.log("Comentário aprovado e publicado com sucesso!");
}

// --- CONTROLE DO CARROSSEL DE FOTOS ---
const carousel = document.getElementById('carousel');
if (carousel) {
  carousel.addEventListener('scroll', () => {
    const index = Math.round(carousel.scrollLeft / carousel.offsetWidth) + 1;
    const indicador = document.getElementById('img-index');
    if (indicador) {
      indicador.innerText = index;
    }
  });
}

// --- SALVAR PRODUTO NA ESTEIRA ---
function salvarProdutoEstaleiro() {
  const nome = document.getElementById('adm-nome').value;
  if (!nome) {
    alert('Por favor, preencha o nome do produto.');
    return;
  }
  alert('Produto cadastrado com sucesso na esteira!');
}
