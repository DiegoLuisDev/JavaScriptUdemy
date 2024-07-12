const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0; 
// continue - continua para próxima iteração
// break - sai do laço

// poderiamos escrever esse código utilizando tanto for classico, for in, for of, while, e doWhile, porém no while e doWhile teriamos que adicionar i++ antes do continue e do break

do {
    let numero = numeros[i];

    if ( numero === 2 ) {
        console.log(`Pulei o 2 hehehee`);
        i++;
        continue;
    }

    if ( numero === 8) {
        console.log(`Encontrei o 8, saindo...`);
        i++;
        break;
    }

    console.log(numero)
   i++;
}while ( i < numeros.length)

// do  {
// let numero = numeros[i];
    
//     if (numero === 2) {
//     console.log(`Pulei o 2`);
//     i++;
//     continue;
//     }

//     console.log(numero);
    
//     if (numero === 7) {
//     console.log(`7 encontrado, saindo...`);
//     i++;
//     break;
//     }
    
//     i++;
// } while ( i < numeros.length)


// for (let pp of numeros) {
// const res = pp % 2 === 0 ? `Par: ${pp}`:`Impar: ${pp}`;
//     if ( pp === 9 ) {
//         break;
//     }
//     if ( pp % 2 === 1) {
//      console.log(`Pulei os impares heheh`)
//      continue;
//     } 
//     console.log(res)
// }