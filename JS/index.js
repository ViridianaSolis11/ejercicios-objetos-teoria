console.log("hola mundo") 

const data ={
    name :"juan",
    age: 25,
    country:"MX",
    "favorite food category":{
        mexican: "tacos",
        italian: "pastas"
    },
    screens: ["lg", "hp"]
}

//1. dot notation 
console.log(data.name)
// 2 bracket notation
console.log(data["age"])

console.log(data["favorite food category"].mexican)

console.log(data["favorite food category"]["mexican"])


// ARREGLOS
console.log(data.screens[0])
console.log(data.screens[1])


//ITERACION DE OBJETOS
// 1. OBJECT KEYS

const user ={
    id: 0,
    name: "Viry",
    lastNmae: "Solis",
}

const keys = Object.keys(user)
console.log("keys", keys)
console.log(user[keys[1]])
//obtener propiedades especificas de un arreglo
const id = keys[1]
console.log(user[id])

//  FOR ... IN

console.log("------")

for(property in user){
    console.log("index", property)
    console.log("user", user)

    console.log("resultado:", user[property])

    console.log("Integracion:", 
    `La propiedad es ${property} y su valor es: ${user[property]}`)
}


//OBJETIVO GENERAR UN CONSOLE.LOG  INDICANDO 
//LA PROPIEDAD Y EL VALOR 
// a traves de un FOR ...IN 
const newUser = {
    id: 356,
    name: "Viry solis",
    email: "viridiana_solis11@gmail.com",
    country: "Mexico", 
}

for(propiedad in newUser){

    console.log(`La propiedad es ${propiedad} y su valor es: ${newUser[propiedad]}`)

}


/**
 * OOP
 * CLASES
 */

// class - es la sintaxis para indicar que generaremos una clase
// nombre de la clase - Importante que empieza con Mayúscula y luego minúscula

class Rectangulo {
    // PROPIEDADES
    constructor(nombre, ancho, altura) {
      this.nombre = nombre
      this.ancho = ancho
      this.altura = altura
    }
  
    // COMPORTAMIENTOS | EVENTOS
    calcularArea() {
      return this.ancho * this.altura
    }
  
    obtenerNombre() {
      return this.nombre
    }
  }
  
  const miRectangulo = new Rectangulo("rectangulin", 35, 10)
  console.log("miRectangulo", miRectangulo)
  console.log("Area de rectangulin", miRectangulo.calcularArea())
  console.log("Cuál es el nombre del rectángulo?", miRectangulo.obtenerNombre())
  
  const suRectangulo = new Rectangulo("rectangulon", 95, 25)
  console.log("suRectangulo", suRectangulo)
  console.log("Area de rectangulon", suRectangulo.calcularArea())
  console.log("Cuál es el nombre del rectángulo?", suRectangulo.obtenerNombre())
  