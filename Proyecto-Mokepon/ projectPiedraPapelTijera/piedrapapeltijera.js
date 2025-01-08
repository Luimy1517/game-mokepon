function aleatory (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 1 es rock, 2 paper, 3 tijera
function election (jugada) {
    let result = ""

    if (jugada === 1) {
        result = "rock"
    } else if (jugada === 2) {
        result = "paper"
    } else if (jugada === 3) {
        result = "tijera"
    } else {
        result = "MAL ELEGIDO"
    }
    return result
}

let player = 0
let pc = 0
let winners = 0
let losers = 0

while (winners < 3 && losers < 3) {
    pc = aleatory(1, 3)
    player = prompt("Elige: 1 para rock, 2 para paper, 3 para tijera")
    
    alert("PC elige: " + election(pc))
    alert("Tu eliges: " + election(player))
    
    // COMBAT
    if (pc == player) {
        alert("EMPATE")
    } else if (player == 1 && pc == 3) {
        alert("winner!")
        winners += 1
    } else if (player == 2 && pc == 1) {
        alert("winner!")
        winners += 1
    } else if (player == 3 && pc == 2) {
        alert("winner!") 
        winners += 1
    } else {
        alert("loser!")
        losers += 1
    }
}

alert("Winner " + winners + " veces. loser " + losers + " veces.")