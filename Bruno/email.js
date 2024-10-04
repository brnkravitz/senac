// Verificar se um e-mail é valido ou não utilizando a função .includes, o critério de verificação foi o @ (@)

let email = "senac123@gmail.com"

if(email.includes("@")){
    console.log("Seu e-mail é valido");
}else{
    console.log("Seu e-mail é invalido");
}