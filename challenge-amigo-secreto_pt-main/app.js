let nomes = [];

function adicionarAmigo() {
  let inputNome = document.getElementById('amigo');
  let nome = inputNome.value;
  if (nomes.includes(nome) === false && nome !== '') {
    nomes.push(nome);
    inputNome.value = '';
    atualizarLista();
  } else if (nomes.includes(nome)) {
    alert('Esse nome já foi adicionado!');
  } else if (nome === '') {
    alert('Por favor, Digite um nome!');
    }
  }

function atualizarLista() {
  lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  nomes.forEach((nome) => {
    let item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  let indiceDaLista = Math.floor(Math.random() * nomes.length);
  let amigoSorteado = nomes[indiceDaLista];
  alert(`O amigo sorteado é: ${amigoSorteado}`);
  if (amigoSorteado) {
    nomes.splice(indiceDaLista, 1);
    atualizarLista();
  }
}