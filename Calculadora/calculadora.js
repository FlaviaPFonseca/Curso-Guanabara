onload =() => {
    document.querySelector('bt-0').onclick =()=>digito(0); 
    document.querySelector('bt-1').onclick =()=>digito(1);
    document.querySelector('bt-2').onclick =()=>digito(2); 
    document.querySelector('bt-3').onclick =()=>digito(3);
    document.querySelector('bt-4').onclick =()=>digito(4);
    document.querySelector('bt-5').onclick =()=>digito(5);
    document.querySelector('bt-6').onclick =()=>digito(6);
    document.querySelector('bt-7').onclick =()=>digito(7);
    document.querySelector('bt-8').onclick =()=>digito(8);
    document.querySelector('bt-9').onclick =()=>digito(9);
    document.querySelector('bt-C').onclick = limpa;
    document.querySelector('bt-comma').onclick = virgula;
    document.querySelector('bt-divide').onclick =()=> operador ('/');
    document.querySelector('bt-times').onclick =()=>operador ('*');
    document.querySelector('bt-minus').onclick =()=>operador ('-');
    document.querySelector('bt-plus').onclick =()=>operador ('+');
}
// variaveis do armazenamento de valor
let sValor ="0"
let ehNovoNumero = true;

// atualizar visor
const atualizaVisor =() =>{ 
    let parte= sValor.split(',');
    console.log(parte[0]);
    console.log(parte[1]);
    document.querySelector('#display').innerText =sValor;
    };
    // clique do botao de dígito
    const digito= (n) =>{
        if (ehNovoNumero) {
            sValor=''+n;
            ehNovoNumero = false;
            }else if(sValor.index0f(',') == -1) sValor +=',';
            atualizaVisor();
    }
    //uso de numeros decimais;
    const virgula = () => {
        if (ehNovoNumero) {
            sValor='0,';
            ehNovoNumero = false;
            }else if(sValor.index0f(',') == -1) sValor +=',';
            atualizaVisor();
        }

    //ao clicar no botão C(ever clear)
    const limpa= () => {
        ehNovoNumero= true;
            sValor='0';
            atualizaVisor();
        }