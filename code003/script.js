// Pedra Papel Tesoura

let player = 0
// |0 para Pedra| |1 para Papel| |2 para tesoura|"

const game = Math.floor(Math.random() * 3)  

if (player == 0 && game == 0){
    console.log("Empate")
}
 else if(player == 0 && game == 2){
    console.log("Player ganhou!")
 }
 else if(player == 0 && game == 1){
    console.log("Player perdeu :(")
 }

else if (player == 1 && game == 1){
    console.log("Empate")
}
 else if(player == 1 && game == 0){
    console.log("Player ganhou!")
 }
 else if(player == 1 && game == 2){
    console.log("Player perdeu :(")
 }

else if (player == 2 && game == 2){
    console.log("Empate")
}
 else if(player == 2 && game == 1){
    console.log("Player ganhou!")
 }
 else if(player == 2 && game == 0){
    console.log("Player perdeu :(")
 }

 else(
    console.log("erro")
 )



