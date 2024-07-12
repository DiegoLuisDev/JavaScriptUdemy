

function recebe (primeiro, segundo) {
    // if (primeiro > segundo) return primeiro;
    // return `O segundo é maior: ${segundo}`;
    return primeiro > segundo ? primeiro : segundo;
}

// const max = (x, y) => {
//     return x > y ? x : y;
// }

// função simplificada
 const max = (x, y) => x > y ? x : y;

console.log(recebe(2, 5));
console.log(max(1, 5));