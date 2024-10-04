const translate = require("translate-google");

let idioma = process.argv[2];

translate(
    "Olá Mundo",
    {
        from: "pt",
        to: idioma
    }
).then(resposta => {
    console.log(resposta);
});