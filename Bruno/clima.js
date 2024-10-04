let temperatura, clima;

temperatura = parseInt(process.argv[2]);
clima = process.argv[3];

if (temperatura < 0 && clima === "nevando"){
    console.log("Evite sair de casa");
}else if (temperatura >= 10 && temperatura <= 20 && clima === "chove"){
    console.log("Leve um guarda chuva")
}else if(temperatura <= 20 && clima === "nublado"){
    console.log ("Se hidrate pois está calor")
}else if (temperatura > 30 && clima === "sol"){
    console.log("Use protetor solar")
}else{
    console.log("Clima estável")
}