// function runSingleGame(level) {
//       //
//       // let cells = document.getElementById("grid").childNodes
//       // cells.forEach(cell => cell.className = "countdown")
//       let header = document.getElementById("game-name")
//       header.innerHTML = `ToeTacTicTicBoom!! Level: ${level}`
//       interval = 1000 - (level * 100)
//       generateCountdowns(interval)
// }


// function runMultiLevelGame(startingLevel) {
//   let level = startingLevel
//   // for (let level = startingLevel; level <= 9; level++) {
//     runSingleGame(level)
//     // while (true) {
//     //   if (gameRunning == false) {
//     //     runSingleGame(++level)
//     //   }
//   }


// let gameRunning = false
// runMultiLevelGame(1)

function run() {

  let game = new Game(1)
  game.run()

}

// single game variables:
let attackCount = 0
let bombs = []
let nodes = document.getElementById("grid").getElementsByTagName('div')
run()
