const attackDiv = document.getElementById('attack')
const levelDiv = document.getElementById('level')

let ticking = 0

// ******** run game
const runGame = (level = 9, attack = 1) => {
  levelDiv.innerText = level
  level <= 10 ?
      ( attack <= 5 ? runAttack(level, attack) : runGame(++level) )
    :
      console.log("game over")
}

// ******** run attack
const runAttack = (level, attack, maxInterval = 3000, bombCount = randFromOneTo(9)) => {
  ticking = bombCount

  console.log("level:", level, "attack:", attack)
  attackDiv.innerText = attack

  const ids = selectRandomNums(bombCount)
  ids.forEach((id) => {
    setTimeout(() => bomb(level, attack, id), randFromOneTo(maxInterval))
  })
}

const bomb = (level, attack, id, startAt = 10, interval = 1000) => {
  let count = startAt
  const cell = document.getElementById(id)

  cell.addEventListener('click', (e) => {
    if (e.target.className !== 'bomb n0' && e.target.innerHTML !== 'Neut') {
      cell.innerHTML = `Neut`
      clearInterval(countDown)
      console.log("countDown", countDown, "cleared")
      ticking--
    }
    console.log("ticking", ticking)
    if (ticking == 0) {
      console.log(`attack ${attack} completed`)
      setTimeout(() => {
                        for (let i = 0; i < nodes.length; i++) {
                          nodes[i].innerHTML = ''
                        }
                        runGame(level, ++attack)
                        },
                      200)
                    }
  })

  const countDown = setInterval(() => {
    if (count == 0) {
        cell.innerHTML = `B${count}${count}M!`
        cell.className = `bomb n${count}`;
        clearInterval(countDown)
        ticking--
        console.log("ticking", ticking)
        if (ticking == 0) {
          console.log(`attack ${attack} completed`)
          setTimeout(() => {
                            for (let i = 0; i < nodes.length; i++) {
                              nodes[i].innerHTML = ''
                            }
                            runGame(level, ++attack)
                            },
                          200)
                        }
    } else {
        cell.innerHTML = `${count}`;
        cell.className = `bomb n${count}`;
        count -= 1
      }
    }, interval);
    console.log("initiated countDown =", countDown)
}
