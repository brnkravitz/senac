let x = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);


if(x === y && y === 0) {
    console.log("Origem")
}else if(x > 0 && y > 0) {
    console.log("Q1");
}else if(x < 0 && y > 0) {
    console.log("Q2");
}else if(x < 0 && y < 0) {
    console.log("Q3")
}else if(x > 0 && y < 0) {
    console.log("Q4")
}
