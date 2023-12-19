console.log("script.js online")
var liste = []

function añadir() {
    console.log("input on añadir working")
    var listeInput = document.querySelector("#input").value
    liste.push(listeInput)
    console.log(listeInput)
    lastValue= liste[liste.length.value]
    document.createElement("p")
    document.querySelector("#participantes").innerHTML = liste
}

function borrar() {
    console.log("input on borrar working")
    liste = []
    document.querySelector("#participantes").innerHTML = liste
    document.querySelector("#sorteado").innerHTML = "text here"
}

function sortear() {
    console.log("input on sortear working")
    var randomnumber = Math.floor(Math.random()* liste.length)+ 0
    
    if (liste[randomnumber] === undefined) {
        document.querySelector("#sorteado").innerHTML = "text here"
    }
    else {
        console.log(liste[randomnumber])
        document.querySelector("#sorteado").innerHTML = liste[randomnumber]

    }
}