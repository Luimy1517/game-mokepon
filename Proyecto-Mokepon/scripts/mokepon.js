const botonMascotaJugador = document.getElementById("boton-mascota")
const sectionSelecionarAtaque = document.getElementById("selecionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")

const botonReiniciar = document.getElementById("boton-reiniciar")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const sectionSeleccionarMascota = document.getElementById("selecionar-mascota")

const divEmpates = document.getElementById("empates")
const divVictoriasJugador = document.getElementById("victorias-jugador")
const divVictoriasEnemigo = document.getElementById("victorias-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorDeTarjetas = document.getElementById("contenedor-de-tarjetas")
const contenedorDeAtaques = document.getElementById("contenedor-de-ataques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputPydos
let inputTucapalma
let inputLangostelvis
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonPlanta
let botonVeneno
let botonViento
let botonHielo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let empates = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "/images/mokemap.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 800

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

// let vidasJugador = 3
// let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', '/images/mokepons_mokepon_hipodoge_attack.png', 5, '/images/hipodoge.png')

let capipepo = new Mokepon('Capipepo', '/images/mokepons_mokepon_capipepo_attack.png', 5, '/images/capipepo.png')

let ratigueya = new Mokepon('Ratigueya', '/images/mokepons_mokepon_ratigueya_attack.png', 5, '/images/ratigueya.png')

let hipodogeEnemigo = new Mokepon('Hipodoge', '/images/mokepons_mokepon_hipodoge_attack.png', 5, '/images/hipodoge.png')

let capipepoEnemigo = new Mokepon('Capipepo', '/images/mokepons_mokepon_capipepo_attack.png', 5, '/images/capipepo.png')

let ratigueyaEnemigo = new Mokepon('Ratigueya', '/images/mokepons_mokepon_ratigueya_attack.png', 5, '/images/ratigueya.png')

let pydos = new Mokepon('Pydos', '/images/mokepons_mokepon_pydos_attack.png', 5, '/images/mokepons_mokepon_pydos_attack.png')

let tucapalma = new Mokepon('Tucapalma', '/images/mokepons_mokepon_tucapalma_attack.png', 5, '/images/mokepons_mokepon_tucapalma_attack.png')

let langostelvis = new Mokepon('Langostelvis', '/images/mokepons_mokepon_langostelvis_attack.png', 5, '/images/mokepons_mokepon_langostelvis_attack.png')

let pydosEnemigo = new Mokepon('Pydos', '/images/mokepons_mokepon_pydos_attack.png', 5, '/images/mokepons_mokepon_pydos_attack.png')

let tucapalmaEnemigo = new Mokepon('Tucapalma', '/images/mokepons_mokepon_tucapalma_attack.png', 5, '/images/mokepons_mokepon_tucapalma_attack.png')

let langostelvisEnemigo = new Mokepon('Langostelvis', '/images/mokepons_mokepon_langostelvis_attack.png', 5, '/images/mokepons_mokepon_langostelvis_attack.png')

hipodoge.ataques.push(
    {nombre:'💦', id:'boton-agua'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'💦', id:'boton-agua'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'💦', id:'boton-agua'},
)


capipepo.ataques.push(
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
)


ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🔥', id:'boton-fuego'},
)

hipodogeEnemigo.ataques.push(
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'💦', id:'boton-agua'},
    {nombre:'💦', id:'boton-agua'},
    {nombre:'💦', id:'boton-agua'},
    {nombre:'🌬️', id:'boton-hielo'},
)

capipepoEnemigo.ataques.push(
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
)

ratigueyaEnemigo.ataques.push(
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌪️', id:'boton-viento'},
)

pydos.ataques.push(
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
)

tucapalma.ataques.push(
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'🌪️', id:'boton-viento'},
)

langostelvis.ataques.push(
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌬️', id:'boton-hielo'},
)

pydosEnemigo.ataques.push(
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'👾', id:'boton-veneno'},
    {nombre:'🍃', id:'boton-planta'},
)

tucapalmaEnemigo.ataques.push(
    {nombre:'🍃', id:'boton-planta'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🌪️', id:'boton-viento'},
    {nombre:'🍃', id:'boton-planta'},
)

langostelvisEnemigo.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'🌬️', id:'boton-hielo'},
    {nombre:'🔥', id:'boton-fuego'},
)

mokepones.push(hipodoge, capipepo, ratigueya, pydos, tucapalma, langostelvis)

function iniciarJuego() {
    
    sectionSelecionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
        `
        contenedorDeTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputPydos = document.getElementById("Pydos")
        inputTucapalma = document.getElementById("Tucapalma")
        inputLangostelvis = document.getElementById("Langostelvis")
    })
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    // sectionReiniciar.style.display = "none"
    
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if(res.ok) {
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
            })
        }
    })
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = "none"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador) {
    let ataques
    
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)

    // console.log(mostrarAtaques(ataques))
    
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BotonAtaque">${ataque.nombre}</button>
        `
        contenedorDeAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonPlanta = document.getElementById("boton-planta")
    botonVeneno = document.getElementById("boton-veneno")
    botonViento = document.getElementById("boton-viento")
    botonHielo = document.getElementById("boton-hielo")
    botones = document.querySelectorAll(".BotonAtaque")
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("🔥")
                console.log(ataqueJugador)
                boton.style.background = "orangered"
            } else if (e.target.textContent === "💦") {
                ataqueJugador.push("💦")
                console.log(ataqueJugador)
                boton.style.background = "aqua"
            } else if (e.target.textContent === "🍃") {
                ataqueJugador.push("🍃")
                console.log(ataqueJugador)
                boton.style.background = "darkgreen"
            } else if (e.target.textContent === "👾") {
                ataqueJugador.push("👾")
                console.log(ataqueJugador)
                boton.style.background = "violet"
            } else if (e.target.textContent === "🌪️") {
                ataqueJugador.push("🌪️")
                console.log(ataqueJugador)
                boton.style.background = "white"
            } else {
                ataqueJugador.push("🌬️")
                console.log(ataqueJugador)
                boton.style.background = "lightblue"
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("🔥")
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
        ataqueEnemigo.push("💦")
    } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
        ataqueEnemigo.push("🍃")
    } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
        ataqueEnemigo.push("👾")
    } else if (ataqueAleatorio == 8 || ataqueAleatorio == 9) {
        ataqueEnemigo.push("🌪️")
    } else {
        ataqueEnemigo.push("🌬️")
    }
    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea() {
    if(ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador] 
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
            empates++
            divEmpates.innerHTML = empates
        } else if (ataqueJugador[i] == "🔥" && ataqueEnemigo[i] == "🍃") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🔥" && ataqueEnemigo[i] == "👾") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🔥" && ataqueEnemigo[i] == "🌬️") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "💦" && ataqueEnemigo[i] == "🔥") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "💦" && ataqueEnemigo[i] == "🌬️") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "💦" && ataqueEnemigo[i] == "🌪️") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "👾" && ataqueEnemigo[i] == "💦") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "👾" && ataqueEnemigo[i] == "🍃") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🍃" && ataqueEnemigo[i] == "💦") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🍃" && ataqueEnemigo[i] == "🌪️") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🌬️" && ataqueEnemigo[i] == "👾") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🌬️" && ataqueEnemigo[i] == "🍃") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🌬️" && ataqueEnemigo[i] == "🌪️") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🌪️" && ataqueEnemigo[i] == "🔥") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == "🌪️" && ataqueEnemigo[i] == "👾") {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            divVictoriasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(i, i)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            divVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    // sectionMensajes.innerHTML = resultado
    revisarVictorias()
}

function revisarVictorias() {

    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto es un empate")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES, Ganaste! :)")
    } else {
        crearMensajeFinal("Lo siento, perdiste! :(")
    }
}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"

    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonPlanta.disabled = true

    botonVeneno.disabled = true

    botonViento.disabled = true

    botonHielo.disabled = true
    
}

function reiniciarJuego() {
    location.reload()
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    mascotaJugadorObjeto.x += mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y += mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x , mascotaJugadorObjeto.y)

    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(langostelvisEnemigo)
    }
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
        case "w":
            moverArriba()
            break;
        case "ArrowDown":
        case "s":
            moverAbajo()
            break;
        case "ArrowLeft":
        case "a":
            moverIzquierda()
            break;
        case "ArrowRight":
        case "d":
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa() {
    // mapa.width = 880
    // mapa.height = 580

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSelecionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)