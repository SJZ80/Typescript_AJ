// links muy buenos
//https://www.typescriptlang.org/docs/handbook/enums.html
//http://lineadecodigo.com/typescript/forzar-tipo-variable-typescript/
//http://lineadecodigo.com/typescript/variables-bloque-typescript/
//http://lineadecodigo.com/tag/typescript-array/

let buleano:boolean = true;
let numerico:number = 12.9;
let cadena:string = `cadena de
casa`;



console.log(cadena);

//********************************************************************
//***************** Array ***************************************

let array: string[]= ["Silvio","Zabala"];

//Foreach con todos los parametros para poder modificar el array
array.forEach((a,indice,arreglo) =>{

    if (a ==="Zabala") {
        arreglo[indice]="Pedro";
    }

});
console.log(array);

//No me deja hacer un push
let arraySoloLectura:ReadonlyArray<string> = ["Silvio","Javier"];
arraySoloLectura.forEach((a)=>console.log(a));



//********************************************************************
//***************** Fin Array ***************************************


//********************************************************************
//***************** Tupla ***************************************
//Es  un array tipado
let tupla:[string,number,boolean]=["Silvio",39,true];

tupla.forEach((elemento:any)=> console.log(elemento));

tupla.push("Carina",40,false);

tupla.forEach((elemento:any)=> console.log(elemento));

console.log(` Cantidad de elementos ${tupla.length}`);


//********************************************************************
//***************** Fin Tupla ***************************************


//********************************************************************
//***************** Enumerados ***************************************
 

enum deString {azul="jaja",rojo=10};

let valorenum:deString = deString.rojo;
let valorenum1:deString = deString.azul;
console.log(typeof valorenum);
console.log(typeof valorenum1);

let valorTextualEnum:string = deString[1];

console.log(`Valor Enumerado ${valorenum} Valor textual ${valorTextualEnum}`);

enum colores {amarillo,azul,rojo};
let valorEnumerado:colores = colores.rojo;
let valorEnumerado1:number = colores.rojo;
let valorTextualEnumerado:string = colores[2];

console.log(`Valor Enumerado ${valorEnumerado} Valor textual ${valorTextualEnumerado}`);



//********************************************************************
//***************** Fin Enumerados ***************************************

let cualquiera:any = {
    nombre:'Silvio',
    edad: 39
};






 