//https://www.typescriptlang.org/docs/handbook/enums.html
let buleano:boolean = true;
let numerico:number = 12.9;
let cadena:string = "cadena";
let array: string[]= ["Silvio","Zabala"];

let tupla:[string,string]=["Clave","valor"];

//Enumerados
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


//Fin de Enumerados

let cualquiera:any = {
    nombre:'Silvio',
    edad: 39
};






 