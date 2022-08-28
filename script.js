
let numberN = Number(prompt('Type a number N'));
// console.log({numberN});
document.writeln(`1.Number N=<b>${numberN}; </b> <br>`); 

console.log(numberN % 1 === 0);

let numberM = Number(prompt('Type a number M'));
document.writeln(`2.Number M=<b>${numberM}; </b> <br>`);

// document.writeln(`4.Hole=<b>${numberM % 2 === 0}; </b> <br>`); 
    let value = confirm("True or false ?");
    let sum = 0;
     
    for (let i = numberN; i <= numberM; i++) {
        if(i % 2 !== 0){
            sum += i;
        } else if (!value) {
            sum += i ;
        }
    }
    console.log(sum);
    document.writeln(`4.sum=<b>${sum}; </b> <br>`);
// document.writeln(numberM);
// document.writeln(`3.<b>${isValid}; </b> <br>`);
// `even`-усі парні значення .
// `odd`-усі не парні значення


