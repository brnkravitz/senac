let v = "ola mundo!";
let contador = 0;

for(let i = 0 ; i < v.length; i++){
    if (v[i] === "a" || v[i] === "e" || v[i] === "i" || v[i] === "o" || v[i] === "u") {
        contador++
    }
    

}
console.log("Está frase tem " + contador + " vogais")