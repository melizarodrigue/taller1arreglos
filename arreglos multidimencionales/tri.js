/*3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a)	Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o forEach.
b)	Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.
*/

let arreglo3=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

arreglo3.forEach(index => {
    index.forEach(j=>{
        if (!(j % 2==0)) {
            console.log([j]);
        }
    })
});

let acu=0;
arreglo3.forEach(index => {
    index.forEach(j=>{
        acu=acu+j;
    })
    console.log(acu);
});