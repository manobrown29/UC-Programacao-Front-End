/** 
 * 1. Implemente uma função que troque a cor de fundo da página, modificando o background-color do body
 * 2. Implemente uma função que troque a fonte dos títulos da página (se limite à fontes de sistema para simplificação)
 * 3. Implemente uma função que remove a seção de meta informações dos artigos (autor, data de publicação, comentários)
 * 4. Implemente uma função que insira um emoji, passado via parâmetro, antes de todos os primeiros parágrafos dos artigos
 * 5. Implemente uma função que insira um aviso, no topo da listagem de artigos:
 * 
 *		<div class="alert">
 *			<p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
 * 		</div> 
 */

function trocaCor(cor){
    const body = document.querySelector("body")
    body.style.backgroundColor = cor
}

function trocarFonte(fonte){
    const titulo = document.querySelector("h1")
    const subtitulo = document.querySelector("h2")
    titulo.style.fontFamily = fonte
    subtitulo.style.fontFamily = fonte
}

function removerMeta() {
    const metas = document.querySelectorAll(".meta");
    for (let i = 0; i < metas.length; i++) {
        metas[i].remove();
    }
}

function exibirEmoj(){
    const article = document.querySelectorAll("article")
    const paragrafo = article.querySelector("p:not(.meta)")
    for(let i = 0; i < paragrafo.length; i++){
        paragrafo.innerHTML = "👌" + paragrafo.innerHTML
    }
}


