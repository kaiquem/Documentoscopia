async function dadosDeBusca(tipo) {
  const url = `./src/base_dados/${tipo}.json`;
  try {
    const requisição = await fetch(url);
    const resultado = await requisição.json();
    return resultado;
  } catch {
    alert("Ainda estamos trabalhando nisso!");
    preencherComValorPadrao(resultado);
  }
}
export { dadosDeBusca };
