const pokemon = require("pokemon");

let qtde = parseInt(process.argv[2]);

for(let num = 0; num < qtde; num++){
    process.stdout.write(
        pokemon.random() + " "
    );
}