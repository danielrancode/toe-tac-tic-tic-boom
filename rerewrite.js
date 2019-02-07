const attackDiv = document.getElementById('attack')
const levelDiv = document.getElementById('level')

const runGame = (level = 9, attack = 1) => {
  levelDiv.innerText = level
  level <= 10 ?
    attack <= 5 ?
      runAttack(level, attack) :
        runGame(++level) :
          console.log("game over")
}

const runAttack = (level, attack, maxInterval = 3000, bombCount = randFromOneTo(9)) => {
  attackDiv.innerText = attack
    const ids = selectRandomNums(bombCount)
    ids.forEach((id) => {
      setTimeout(() => {
                        bomb(level, attack, id);
                        },
                randFromOneTo(maxInterval)
      )
    })
  }

const bomb = (level, attack, id, startAt = 10, interval = 200) => {
    let count = startAt
    let cell = document.getElementById(id)
    cell.addEventListener('click', () => {
      cell.innerHTML = `Neut`
      clearInterval(countDown)
      this.neutralize()
    })

    let countDown = setInterval(() => {
      if (count == 0) {
          cell.innerHTML = `B${count}${count}M!`
          cell.className = `bomb n${count}`;
          clearInterval(countDown)
          if (isAttackCompleted()) {
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
  }

  function neutralize() {
    if (isAttackCompleted()) {
      setTimeout(() => {
                        for (let i = 0; i < nodes.length; i++) {
                          nodes[i].innerHTML = ''
                        }
                        runBombs(player, --attacksLeft)
                        },
                      200)
                    }

  }
