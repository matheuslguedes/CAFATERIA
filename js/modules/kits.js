let bancoDeProdutos = [
    {id: '0', nome:'Coador de Café(3 xícaras)', preco: 59.90, url: '././assets/coador.svg'},
    {id: '1', nome:'Copo com Prensa Francesa', preco: 39.90, url: '././assets/copo-com-prensa-francesa.svg'},
    {id: '2', nome:'Kits de cafés (Cooffees)', preco: 89.90, url: '././assets/kits-cafe-coffees.svg'},
    {id: '3', nome:'Kits de cafés roots', preco: 110.90, url: '././assets/kits-cafe-roots.svg'},
    {id: '4', nome:'Mini coador de café', preco: 29, url: '././assets/Mini-coador-de-cafe.svg'},
]   

export default function initKits(){
    bancoDeProdutos.map((produto, index)=>{    
        let produtoClone = document.querySelector('.models .produto').cloneNode(true)
        document.querySelector('.produtos__container').append(produtoClone)
        produtoClone.querySelector('.produto__img').src = produto.url;
        produtoClone.querySelector('.produto__nome').innerText = produto.nome;
        produtoClone.querySelector('.produto__preco').innerText = `R$ ${produto.preco.toFixed(2)}`;
    })
} 
