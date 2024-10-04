let operacao = process.argv[2];
let tabuada = parseInt(process.argv[3]);


for (let i = 0; i <= 10; i++){
    if(operacao === "+"){
        console.log(tabuada + " + " + i + " = " + (i + tabuada));
    }else if(operacao === "*"){
        console.log(tabuada + " x " + i + " = " + (i * tabuada));
    }
    
}