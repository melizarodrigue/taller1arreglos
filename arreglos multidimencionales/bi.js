/*1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a)	Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b)	Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/


arreglo1=[ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

for (let index = 0; index < arreglo1.length; index++) {
    for (let j = 0; j < arreglo1[index].length; j++) {
        console.log([index][j]);
    }
}

arreglo1.forEach(i => {
    i.forEach(j => {
        console.log(j);
    })
})
