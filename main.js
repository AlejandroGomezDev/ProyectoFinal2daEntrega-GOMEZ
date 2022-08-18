//El proyecto es hacer un quizz tipo el juego Preguntados

//creamos la class para las preguntas
class Preguntas{
    constructor (tipo, pregunta, opcion1, opcion2, opcion3, opcion4){
        this.tipo = tipo
        this.pregunta = pregunta
        this.opcion1 = opcion1
        this.opcion2 = opcion2
        this.opcion3 = opcion3
        this.opcion4 = opcion4
    }
}

//array donde se almacenan las preguntas
const cuestionario = []

const pregunta1 = new Preguntas ("Arte","Quien pinto la ultima cena?", "Leonardo da Vinci", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso")
cuestionario.push(pregunta1)
const pregunta2 = new Preguntas ("Deportes","Quien es el maximo goleador historico en mundiales de futbol?", "Pele (Brasil)", "Miroslav Klose (Alemania)", "Ronaldo (Brasil)", "Just Fontaine (Francia)")
cuestionario.push(pregunta2)
const pregunta3 = new Preguntas ("Geografia","Cual es la capital de Canada?", "Toronto", "Quebec", "Victoria", "Ottawa")
cuestionario.push(pregunta3)
const pregunta4 = new Preguntas ("Entretenimiento","Quien es el hermano de Mario en la saga de videojuegos Super Mario Bross?", "Yoshi", "Toad", "Luiggi", "Bowser")
cuestionario.push(pregunta4)

//funcion para que pregunten al usuario
//La respuesta hace push a otra array que mas abajo explico mi intencion con esto.
//interactua con funcion marcador, para devolver cuantas preguntas contesto bien el usuario
// function preguntaHecha(){
//     let eleccion = prompt(`${cuestionario[0].pregunta} \nLas opciones son: \n${cuestionario[0].pregunta}\n1.${cuestionario[0].opcion1}\n2.${cuestionario[0].opcion2}\n3.${cuestionario[0].opcion3}\n4.${cuestionario[0].opcion4}\nElija con el numero que corresponda`)
//     opcionElegida.push(eleccion)
//     let eleccion2 = prompt(`${cuestionario[0].pregunta} \nLas opciones son: \n${cuestionario[1].pregunta}\n1.${cuestionario[1].opcion1}\n2.${cuestionario[1].opcion2}\n3.${cuestionario[1].opcion3}\n4.${cuestionario[1].opcion4}\nElija con el numero que corresponda`)
//     opcionElegida.push(eleccion2)
//     let eleccion3 = prompt(`${cuestionario[0].pregunta} \nLas opciones son: \n${cuestionario[2].pregunta}\n1.${cuestionario[2].opcion1}\n2.${cuestionario[2].opcion2}\n3.${cuestionario[2].opcion3}\n4.${cuestionario[2].opcion4}\nElija con el numero que corresponda`)
//     opcionElegida.push(eleccion3)
//     let eleccion4 = prompt(`${cuestionario[0].pregunta} \nLas opciones son: \n${cuestionario[3].pregunta}\n1.${cuestionario[3].opcion1}\n2.${cuestionario[3].opcion2}\n3.${cuestionario[3].opcion3}\n4.${cuestionario[3].opcion4}\nElija con el numero que corresponda`)
//     opcionElegida.push(eleccion4)

//     marcador()
// }


//En esta parte quise crear un array que contenga ya el numero que son las preguntas correctas del cuestionario, queria ver si se podia hacer algo asi de comparar arrays con un ciclo, para comparar lo que ingresa con las correctas. En el futuro calculo que usare otro metodo o solo if... porque quisiera que las opciones vayan apareciendo de forma aleatoria y no en un orden ya establecido
const correctas = [1,2,4,3]

//array donde el usuario hace el push de las opciones elegidas
const opcionElegida = []

//declaramos la variable para acumular la cantidad de preguntas correctas
let cantidadCorrectas = 0

//comparacion del array de correctas con el array del push del usuario, para calcular y sumar cuantas preguntas contesto correctamente el usuario.
function marcador(){
    cantidadCorrectas = 0
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcionElegida[i]){
            cantidadCorrectas++;
        }
    }
    alert(`Usted ha contestado ${cantidadCorrectas} preguntas bien.`)
}

//llamado de la funcion.
// preguntaHecha()


//la verdad no sabia como implementar todavia un metodo, pero como mas adelante el usuario va a poder elegir tambie el tipo de preguntas que quiera, por eso le agregue el parametro tipo
//asi que el filter seria bueno para que busque solo preguntas de por ejemplo, deportes.

// const resultado = cuestionario.filter((el) => el.tipo == 'Deportes')
// console.log(resultado);

//Plantilla

let divPreguntas = document.getElementById("preguntas")
cuestionario.forEach((preguntaFormulada)=>{
    let nuevaPregunta = document.createElement("div")
    nuevaPregunta.innerHTML = `<article>
                            <div class="container">
                                <section id="pregunta">
                                <h3>${preguntaFormulada.pregunta}</h3>
                                <label class="respuestaBtn">
                                    <input type="radio" value="1" name="pregunta">${preguntaFormulada.opcion1}
                                </label> 
                                <label class="respuestaBtn">
                                    <input type="radio" value="2" name="pregunta">${preguntaFormulada.opcion2}
                                </label>  
                                <label class="respuestaBtn">
                                    <input type="radio" value="3" name="pregunta">${preguntaFormulada.opcion3}
                                </label>  
                                <label class="respuestaBtn">
                                    <input type="radio" value="4" name="pregunta">${preguntaFormulada.opcion4}
                                </label>     
                                </section>
                            </div>
                            </article>`
    divPreguntas.appendChild(nuevaPregunta) 
})




function preguntaHecha(){
    let eleccion = document.getElementsByClassName("respuestaBtn")
    eleccion.value = () => {document.getElementsByTagName("input.value")}
    opcionElegida.push(eleccion)
    marcador()
}
console.log(preguntaHecha());

let btnResultado = document.getElementById("resultadoBtn")
btnResultado.addEventListener("click", preguntaHecha)
