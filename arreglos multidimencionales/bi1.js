/*2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ]
    a)	Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
    b)	Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/


let arreglo2=[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];

    for (let index = 0; index < arreglo2.length; index++) {
        for (let j = 0; j < arreglo2 [index].length; j++) {
            for (let i = 0; i < arreglo2[index][j].length; i++) {
                console.log(arreglo2[index][j][i]);
            }   
        }
    }

arreglo2.forEach(index => {
    index.forEach(j=>{
        j.forEach(i=>{
            console.log([i]);
        })
    })
});
    