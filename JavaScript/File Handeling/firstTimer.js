// node .\firstTimer.js --n=10 --d=500

let minimist = require("minimist");
let args = minimist(process.argv);

let count = args.n;
let time = args.d;
let id = setInterval(() => {
    console.log(count + "tus to go.");
    count--;

    if(count == 0){
        console.log("Timeout.");
        clearInterval(id);
    }
}, time);