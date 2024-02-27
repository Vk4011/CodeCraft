function reverseNumber(n) {
    let orignalNumber = n;
    let reversedNumber = 0;
    while (n !== 0) {
        let lastDigit = n % 10;
        reversedNumber = (reversedNumber * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    return `\n\t Rev num ${orignalNumber} : ${reversedNumber}`;
}

console.log(reverseNumber(543)); // Output: 345


module.exports ={
    rev:reverseNumber
}