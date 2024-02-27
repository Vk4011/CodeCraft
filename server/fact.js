

function fact(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;

    }
    return `\n\t factorial of ${n} : ${f}`;
  
}


module.exports = {
    fact: fact
};
// let r=fact(5);
// console.log("\n\t "+r);


