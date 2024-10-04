let lista = [1, 3, 2, 5, 4, 7, 6];
let maiorNumero = 0;

for(i = 0; i < lista.length; i++){
    if(lista[i] > maiorNumero){
        maiorNumero = lista[i];
    }
    
}

console.log(maiorNumero)