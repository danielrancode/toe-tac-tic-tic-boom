const attackDiv = document.getElementById('attack')
const levelDiv = document.getElementById('level')

// ****** game state
let level = 9
let attack = 1
let bombs = {}

// ******** run game
const runGame = () => {
  levelDiv.innerText = level
  attackDiv.innerText = attack

  if (level > 10) {
    console.log("game over")
    return
  }

  runAttack()
}

// ******** run attack
const runAttack = (maxInterval = 3000, bombCount = randFromOneTo(9)) => {

    if (attack > 5) {
      level++
      attack = 1
      runGame()
    }

    bombs = {}
    console.log("bombs:", bombs)

    const ids = selectRandomNums(bombCount)

    ids.forEach((id) => {
      setTimeout(() => bomb(id), randFromOneTo(maxInterval))
    })

}


// *********** bomb
const bomb = (id, interval = 100) => {

  let count = 10
  const cell = document.getElementById(id)

  bombs[id] = setInterval(() => {
    if (count == 0) {
        cell.innerHTML = `B${count}${count}M!`
        cell.className = `bomb n${count}`;
        clearInterval(bombs[id])
        delete bombs[id]
        if (Object.entries(bombs).length == 0) {
            for (let i = 0; i < nodes.length; i++) {
              nodes[i].innerHTML = ''
            }
            attack++
            runGame()
        }
    } else {
        cell.innerHTML = `${count}`;
        cell.className = `bomb n${count}`;
        count -= 1
      }
    }, interval);

  console.log("bombs:", bombs)

  cell.addEventListener('click', (e) => {
    if (e.target.className !== 'bomb n0' && e.target.innerHTML !== 'Neut') {
      clearInterval(bombs[id])
      cell.innerHTML = `Neut`
      delete bombs[id]
    }

    if (Object.entries(bombs).length == 0) {
        console.log(`all neutralized!!!!!`)

        for (let i = 0; i < nodes.length; i++) {
          nodes[i].innerHTML = ''
        }
        attack++
        runGame()
    }
  })

  console.log("initiated bombs[id] =", bombs[id])
}
