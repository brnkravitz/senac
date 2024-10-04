const Progress = require("progress");
const barra = new Progress(" :bar", { total: 1000 });
const timer = setInterval(
    function() {
        barra.tick();
        if (barra.complete){
            console.log("FIM");
            clearInterval(timer);
        }
    },
    10
);