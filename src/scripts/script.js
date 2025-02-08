import { dadosDeBusca } from "./dados.js";
import { preencherCamposRG } from "./rg.js";
const tipoSelec = document.getElementById("tipo-selec");
const estadoSelec = document.getElementById("estado-selec");
const geracaoSelec = document.getElementById("geracao-selec");
const tipoDi = document.querySelector("#tipo-di");
const imagem = document.querySelector(".image");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const count = document.getElementById("count");
const botao = document.querySelector(".btn");
const status = document.getElementById("status");
const modal = document.getElementById("modalImagem");
const imagemExpandida = document.getElementById("imagemExpandida");
let qtImagem = 0;
let idImagem;
let tipo, estado, ger;

//Sempre que a extensão é inicializada
document.addEventListener("DOMContentLoaded", async function () {
  botaoAnterior.classList.add("desativado");
  botaoProximo.classList.add("desativado");
});
//Caixas de Seleção
tipoSelec.addEventListener("change", () => {
  tipo = tipoSelec.value;
});
estadoSelec.addEventListener("change", () => {
  estado = estadoSelec.value;
});
geracaoSelec.addEventListener("change", () => {
  ger = geracaoSelec.value;
});

//Controladores das imagens
botaoAnterior.addEventListener("click", () => {
  if (idImagem <= 1 || qtImagem == 0) {
    botaoAnterior.classList.add("desativado");
  } else {
    idImagem--;
    let novaImagem = `./src/img/docs/${tipo}/${ger}/${estado}/${idImagem}.jpg`;
    imagem.src = novaImagem;
    count.innerHTML = `${idImagem} de ${qtImagem}`;
    if (idImagem === 1) {
      botaoAnterior.classList.add("desativado");
    }
    botaoProximo.classList.remove("desativado");
  }
});
botaoProximo.addEventListener("click", () => {
  if (idImagem >= qtImagem || qtImagem == 0) {
    botaoProximo.classList.add("desativado");
  } else {
    botaoAnterior.classList.remove("desativado");
    idImagem++;
    let novaImagem = `./src/img/docs/${tipo}/${ger}/${estado}/${idImagem}.jpg`;
    imagem.src = novaImagem;
    count.innerHTML = `${idImagem} de ${qtImagem}`;
    if (idImagem === qtImagem) {
      botaoProximo.classList.add("desativado");
    }
    botaoAnterior.classList.remove("desativado");
  }
});

imagem.addEventListener("click", () => {
  if (qtImagem == 0) return;
  imagemExpandida.src = imagem.src;
  modal.style.display = "flex";
});

modal.addEventListener("click", () => {
  console.log("Modal fechado");
  modal.style.display = "none";
});

function controladorImagem(dados) {
  const imagens = Object.keys(dados.imagens);
  idImagem = 1;
  imagem.src = `./src/img/docs/${tipo}/${ger}/${estado}/${idImagem}.jpg`;
  imagem.onload = () => {
    qtImagem = imagens.length;
    if (idImagem === qtImagem) return;
    botaoProximo.classList.remove("desativado");
    count.innerHTML = `${idImagem} de ${qtImagem}`;
    status.innerHTML = "-";
  };
  imagem.onerror = () => {
    status.innerHTML =
      "Infelizmente ainda não temos exemplo para este documento!";
    count.innerHTML = "-";
    botaoAnterior.classList.add("desativado");
    botaoProximo.classList.add("desativado");
    qtImagem = 0;
  };
}

//Botão de buscar
botao.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!tipo || !estado || !ger) {
    return;
  }
  tipoDi.innerHTML = tipoSelec.value;
  const resultado = await dadosDeBusca(tipo);
  const dadoEstado = resultado[ger][estado];

  if (tipo == "RG") {
    preencherCamposRG(dadoEstado, estado);
  }
  controladorImagem(dadoEstado);
});
