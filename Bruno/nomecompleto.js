// Verificar se o nome é completo ou não utilizando a função .includes, o critério de verificação foi o Espaço ( )

let nome = "Bruno Nunes"


if(nome.includes(" ")){
    console.log("Seu nome é completo");
}else{
    console.log("Seu nome não está completo");
}