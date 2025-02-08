const nome = document.getElementById("nome");
const geracao = document.getElementById("geracao");
const formatoRg = document.getElementById("formato-rg");
const formatoCpf = document.getElementById("formato-cpf");
const perfuracao = document.getElementById("perfuracao");
const numeroAtual = document.getElementById("numero-atual");
const polegarDireito = document.getElementById("polegar-direito");
const formatoVia = document.getElementById("formato-via");
const formatoData = document.getElementById("formato-data");
const inicioEmissao = document.getElementById("inicio-emissao");
const chancela = document.getElementById("chancela");
const nomenclatura = document.getElementById("nomenclatura");
const diretores = document.getElementById("diretores");
const observacoes = document.getElementById("observacoes");

function preencherCamposRG(dados, estado) {
  corPolegar(estado);
  function preencherComValorPadrao(campo, valor) {
    campo.innerHTML = valor !== "" ? valor : "-";
  }
  preencherComValorPadrao(nome, dados["nome"]);
  preencherComValorPadrao(geracao, dados["geracao"]);
  preencherComValorPadrao(formatoRg, dados["formato-rg"].join(""));
  preencherComValorPadrao(formatoCpf, dados["formato-cpf"].join(""));
  preencherComValorPadrao(perfuracao, dados["perfuracao"].join(""));
  preencherComValorPadrao(numeroAtual, dados["numero-atual"].join(""));
  preencherComValorPadrao(polegarDireito, dados["polegar-direito"].join(""));
  preencherComValorPadrao(formatoVia, dados["formato-via"].join(""));
  preencherComValorPadrao(formatoData, dados["formato-data"].join(""));
  preencherComValorPadrao(inicioEmissao, dados["inicio-emissao"].join(""));
  preencherComValorPadrao(chancela, dados["chancela"].join(""));
  preencherComValorPadrao(nomenclatura, dados["nomenclatura"].join(""));
  preencherComValorPadrao(diretores, dados["diretores"].join(""));
  preencherComValorPadrao(observacoes, dados["observacoes"].join(""));
}

function corPolegar(estado) {
  const verde = ["SP", "MG"];
  const vermelho = ["SE", "BA"];
  if (verde.includes(estado)) {
    polegarDireito.style.color = "green";
  } else if (vermelho.includes(estado)) {
    polegarDireito.style.color = "red";
  } else {
    polegarDireito.style.color = "black";
  }
}
export { preencherCamposRG };
