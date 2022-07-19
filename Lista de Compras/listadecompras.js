  var $lista = document.querySelector('ul');
    var $produto = document.querySelector('#produto');
    var $botao = document.querySelector('#btn');

    $botao.addEventListener('click', addProduto);
   
function addProduto() {
      var itens =  '<li>' +$produto.value + '</li>';
    $lista.innerHTML += itens;
    $produto.value = '';
    $produto.focus();
    }
    $produto.addEventListener('keyup',function(e){
     if (e.keyCode === 13){
      addProduto()
     } 
    })
