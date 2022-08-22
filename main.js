//El proyecto es hacer un quizz 


//creamos la class para las preguntas
class Preguntas{
    constructor (numeroPregunta, tipo, pregunta, opcion1, opcion2, opcion3, opcion4){
        this.numeroPregunta = numeroPregunta
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

const pregunta1 = new Preguntas (0 ,"Arte","Quien pinto la ultima cena?", "Leonardo da Vinci", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso")
cuestionario.push(pregunta1)
const pregunta2 = new Preguntas (1 ,"Deportes","Quien es el maximo goleador historico en mundiales de futbol?", "Pele (Brasil)", "Miroslav Klose (Alemania)", "Ronaldo (Brasil)", "Just Fontaine (Francia)")
cuestionario.push(pregunta2)
const pregunta3 = new Preguntas (2 ,"Geografia","Cual es la capital de Canada?", "Toronto", "Quebec", "Victoria", "Ottawa")
cuestionario.push(pregunta3)
const pregunta4 = new Preguntas (3 ,"Entretenimiento","Quien es el hermano de Mario en la saga de videojuegos Super Mario Bross?", "Yoshi", "Toad", "Luiggi", "Bowser")
cuestionario.push(pregunta4)


//En esta parte quise crear un array que contenga ya el numero que son las preguntas correctas del cuestionario, queria ver si se podia hacer algo asi de comparar arrays con un ciclo, para comparar lo que ingresa con las correctas. En el futuro calculo que usare otro metodo o solo if... porque quisiera que las opciones vayan apareciendo de forma aleatoria y no en un orden ya establecido
const correctas = [1,2,4,3]

//array donde el usuario hace el push de las opciones elegidas
const opcionElegida = []

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
                                <label class="respuestaBtn${preguntaFormulada.numeroPregunta}">
                                    <input class="opcion" type="radio" value="1" name=inputRadio${preguntaFormulada.numeroPregunta}>${preguntaFormulada.opcion1}
                                </label> 
                                <label class="respuestaBtn${preguntaFormulada.numeroPregunta}">
                                    <input class="opcion${preguntaFormulada.numeroPregunta}" type="radio" value="2" name=inputRadio${preguntaFormulada.numeroPregunta}>${preguntaFormulada.opcion2}
                                </label>  
                                <label class="respuestaBtn${preguntaFormulada.numeroPregunta}">
                                    <input class="opcion" type="radio" value="3" name=inputRadio${preguntaFormulada.numeroPregunta}>${preguntaFormulada.opcion3}
                                </label>  
                                <label class="respuestaBtn${preguntaFormulada.numeroPregunta}">
                                    <input class="opcion" type="radio" value="4" name=inputRadio${preguntaFormulada.numeroPregunta}>${preguntaFormulada.opcion4}
                                </label>     
                                </section>
                            </div>
                            </article>`
    divPreguntas.appendChild(nuevaPregunta) 

    
        let inputRadio = document.getElementsByName(`inputRadio${preguntaFormulada.numeroPregunta}`)
        inputRadio.checked = () => {document.getElementsByName(`inputRadio${preguntaFormulada.numeroPregunta}`).value}
        opcionElegida.push(inputRadio)
        console.log((`respuestaBtn${preguntaFormulada.numeroPregunta}`).value);
})



        

let btnResultado = document.getElementById("resultadoBtn")
btnResultado.addEventListener("click", () => {marcador()})    

//comparacion del array de correctas con el array del push del usuario, para calcular y sumar cuantas preguntas contesto correctamente.
function marcador(){
    let cantidadCorrectas = 0
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcionElegida[i]){
            cantidadCorrectas++;
            
              
        }
    }
    alert(`Usted ha contestado ${cantidadCorrectas} preguntas bien.`)
    return;
}


//setItem
localStorage.setItem ("puntaje", cantidadCorrectas);

//getItem
let marcadorMostrado = localStorage.getItem ("puntaje")

//Creamos tablero
let divTablero = document.getElementById("tablaMarcador")
let mostrarMarcador = document.createElement("div")
    mostrarMarcador.innerHTML = `<p>Su puntaje es ${marcadorMostrado}</p>`
    divTablero.appendChild(mostrarMarcador)



