/**
 * Projeto Vinhos Portugueses
 */


let adega = [{ nomeVinho: 'Crasto Superior',
                produtor: 'Quinta do Crasto',
                safra: 2018,
                preco: 469.90,
                regiao: 'Douro',
                tipo: 'Tinto',
                tempServico: 16,
                isDecantacao: true,
                tempoDecantacao: 60,
                teorAlcoolico: 14,
                imagem: './Imagens/crasto-superior.webp',
                uva: ['Sousão', 'Tinta Roriz', 'Touriga Franca', 'Touriga Nacional'] },
              
              { nomeVinho: 'Monte Velho',
                produtor: 'Herdade do Esporão',
                safra: 2017,
                preco: 65.90,
                regiao: 'Alentejo',
                tipo: 'Tinto',
                tempServico: 15, 
                isDecantacao: true,
                tempoDecantacao: 20,
                teorAlcoolico: 14,
                imagem: './Imagens/monte-velho.webp',
                uva: ['Aragonêz', 'Syrah', 'Touriga Nacional', 'Trincadeira'] },

              { nomeVinho: 'Cartuxa',
                produtor: 'Fundação Eugénio de Almeida',
                safra: 2016,
                preco: 599,
                regiao: 'Alentejo',
                tipo: 'Tinto',
                tempServico: 18,
                isDecantacao: true,
                tempoDecantacao: 30,
                teorAlcoolico: 14.5,
                imagem: './Imagens/cartuxa.webp',
                uva: ['Alicante Bouschet', 'Aragonêz'] },

              { nomeVinho: 'Monarkia das Marias', 
                produtor: 'Quinta do Monte d Oiro', 
                safra: 2019,
                preco: 82.36,
                regiao: 'Lisboa',
                tipo: 'Branco',
                tempServico: 11,
                isDecantacao: false,
                tempoDecantacao: 0,
                teorAlcoolico: 13,
                imagem: './Imagens/monarkia-das-marias.jpeg',
                uva: ['Arinto', 'Fernão-Pires', 'Viognier'] },

              { nomeVinho: 'Scala Coeli',
                produtor: 'Fundação Eugénio de Almeida',
                safra: 2018,
                preco: 475.88,
                regiao: 'Alentejo',
                tipo: 'Branco',
                tempServico: 7,
                isDecantacao: false,
                tempoDecantacao: 0,
                teorAlcoolico: 12.5,
                imagem: './Imagens/scala-coeli.webp',
                uva: ['Verdelho'] },

              { nomeVinho: 'Palácio da Brejoeira',
                produtor: 'Palácio da Brejoeira',
                safra: 2019,
                preco: 364.25,
                regiao: 'Minho',
                tipo: 'Branco',
                tempServico: 9,
                isDecantacao: false,
                tempoDecantacao: 0,
                teorAlcoolico: 13,
                imagem: './Imagens/palacio-da-brejoeira.png',
                uva: ['Alvarinho'] },

              { nomeVinho: 'Cálem Vintage',
                produtor: 'Sogevinus Fine Wines', 
                safra: 2019,
                preco: 219,
                regiao: 'Douro',
                tipo: 'Porto',
                tempServico: 18,
                isDecantacao: false,
                tempoDecantacao: 0,
                teorAlcoolico: 20,
                imagem: './Imagens/calem-vintage.jpg',
                uva: ['Sousão', 'Tinta Roriz', 'Touriga Franca', 'Touriga Nacional'] }, 

              { nomeVinho: 'Quinta da Pellada',
                produtor: 'Quinta da Pellada', 
                safra: 2015,
                preco: 828.55,
                regiao: 'Dão',
                tipo: 'Tinto',
                tempServico: 18 ,
                isDecantacao: true,
                tempoDecantacao: 120,
                teorAlcoolico: 13.5,
                imagem: './Imagens/quinta-da-pelada.png',
                uva: ['Touriga Nacional', 'Tinta Roriz', 'Jaen'] }, 

              { nomeVinho: 'Pato Rebel',
                produtor: 'Luis Pato', 
                safra: 2019,
                preco: 286.87,
                regiao: 'Bairrada',
                tipo: 'Tinto',
                tempServico: 18,
                isDecantacao: false,
                tempoDecantacao: 0,
                teorAlcoolico: 12,
                imagem: './Imagens/pato-rebel.png',
                uva: ['Baga','Touriga Nacional','Bical'] } 
            ]   

/*****************************************************
 * RELATÖRIO
 */
const imprimirRelatorio = (arrayVinho) =>{
  let sugestaoDecantacao;
  let mediaPreco = 0;
  console.log("****** AS GRANDES ESCOLHAS DA ADEGA PORTUGUESA ******")
  for(let i = 0; i < arrayVinho.length; i++){
    mediaPreco += Math.round(arrayVinho[i].preco / arrayVinho.length);
    sugestaoDecantacao = "";
    if(arrayVinho[i].isDecantacao){
      sugestaoDecantacao = "Recomenda-se decantar por " +  arrayVinho[i].tempoDecantacao.toString() + " minutos";
    } else {
      sugestaoDecantacao = "Não recomenda-se decantar";
    }
    console.log(`${arrayVinho[i].nomeVinho.toUpperCase()} \n
                Tipo: ${arrayVinho[i].tipo} \n
                Produtor: ${arrayVinho[i].produtor} \n
                Região: ${arrayVinho[i].regiao} \n
                Safra: ${arrayVinho[i].safra} \n
                Uva: ${arrayVinho[i].uva.join(', ')} \n
                ${sugestaoDecantacao} \n
                R$ ${arrayVinho[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              `)
    
    console.log("********************");
  }
  console.log(`\n Média de preço dos nossos vinhos: R$ ${mediaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}       

imprimirRelatorio(adega);

/**
 * 
 * Criação dos elementos da interface. 
 *  
 */


const criarCard = (vinho) => {
  let novoArticle = document.createElement("article");
  novoArticle.setAttribute("class","card");
  
  let imagem = document.createElement("img");
  imagem.setAttribute("class","size-img");
  imagem.setAttribute("src",vinho.imagem);
  novoArticle.insertAdjacentElement("beforeend", imagem);
  
  let pVinho = document.createElement("p");
  pVinho.setAttribute("class","nome-vinho");
  let texto = vinho.nomeVinho.toUpperCase() + " " + vinho.tipo + " " +  vinho.safra;
  const textoPVinho = document.createTextNode(texto);
  pVinho.appendChild(textoPVinho);
  novoArticle.insertAdjacentElement("beforeend", pVinho);

  let pDescricao = document.createElement("p");
  pDescricao.setAttribute("class","descricao-vinho");
  let produtor = vinho.produtor + " " +  " - " +  vinho.regiao;
  const textoDescricao = document.createTextNode(produtor);
  pDescricao.appendChild(textoDescricao);
  novoArticle.insertAdjacentElement("beforeend", pDescricao);

  let pUva = document.createElement("p");
  pUva.setAttribute("class","uva");
  let stringUva = vinho.uva.join(', ')
  const textoUva = document.createTextNode(stringUva);
  pUva.appendChild(textoUva);
  novoArticle.insertAdjacentElement("beforeend", pUva);

  let pPreco = document.createElement("p");
  pPreco.setAttribute("class","nome-vinho");
  let preco = vinho.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
  const textoPreco = document.createTextNode(preco);
  pPreco.appendChild(textoPreco);
  novoArticle.insertAdjacentElement("beforeend", pPreco);

  return novoArticle

}

const mostrarCard = (arrayVinho, funcaoCriarCard) =>{
  let card = null;
  let listaCard = null;
  for(let i in arrayVinho){
     card = funcaoCriarCard(arrayVinho[i]);
     listaCard = document.getElementById("listaCard")
     listaCard.insertAdjacentElement("beforeend", card);

  }
}
 
mostrarCard(adega, criarCard);

/**
 * 
 * Função de pesquisa executada no click do botão
 *  
 */

 const pesquisarVinho = (event) => {
  event.preventDefault();
  let listaCard = document.getElementById("listaCard");
  listaCard.innerHTML = "";
  const caracteristica =  document.getElementById("busca");
  if(caracteristica.value === ""){
    alert("Digite alguma coisa... ")

  }
  const pesquisar = adega.filter ((listaVinho)  => {
    if(listaVinho.nomeVinho.toUpperCase().includes(caracteristica.value.toUpperCase()) ||
       listaVinho.produtor.toUpperCase().includes(caracteristica.value.toUpperCase())  ||
       listaVinho.tipo.toUpperCase().includes(caracteristica.value.toUpperCase())  ||
       listaVinho.regiao.toUpperCase().includes(caracteristica.value.toUpperCase()) ) {
        return (listaVinho)
    }
  });
  if (pesquisar.length === 0){
    listaCard.innerHTML = "";
    alert(`Sem resultados para "${caracteristica.value}"`) 
  } else {
    mostrarCard(pesquisar, criarCard);

  }
}

/**
 * 
 * Função para o evento onChange da Busca
 *  
 */
const onBlurBusca = (event)=>{

  if (event.target.value === ""){
    mostrarCard(adega, criarCard);
  }
}




