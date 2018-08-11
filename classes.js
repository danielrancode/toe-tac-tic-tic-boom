
// ******** Game ******** TODO: should be level sensitive.

class Game {
    constructor(level) {
      this.level = level
    }

    run() {
      let info = document.getElementById('game-name')
      info.innerHTML = `Toe Tac Tic Tic Boom ! ! !       Level: ${this.level}`
        if (attackCount < 2) {
            let attack = new Attack
            attackCount++
            attack.run()
        } else {
          info.innerHTML = "Done!"
          setTimeout(() => {
            attackCount = 0
            bombs = []
            run()
          }, 2000)
        }
    }
}


// ******** Attack ******** //
class Attack {
    constructor(maxInterval = 3000, bombCount = randFromOneTo(9)) {
      this.maxInterval = maxInterval
      this.bombCount = bombCount
      this.ids = selectRandomNums(bombCount)
    }

    run() {
      this.ids.forEach((id) => {
        setTimeout(() => {
                          let bomb = new Bomb(id, 3, 1000);
                          bomb.run()
                          },
                  randFromOneTo(this.maxInterval)
        )
      })
    }

  }


// ******** Bomb ******** //
class Bomb {

  constructor(id, startAt = 10, interval = 1000) {
    this.id = id
    this.startAt = startAt
    this.interval = interval
    bombs.push(this)
  }

  run() {
    let count = this.startAt
    let cell = document.getElementById(this.id)
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
                              bombs = []
                              run()
                            }, 1000
                    )
          }
      } else {
          cell.innerHTML = `${count}`;
          cell.className = `bomb n${count}`;
          count -= 1
        }
      }, this.interval);
  }
}


// class Player {
//   constructor(name) {
//     this.name = name
//     this.score = 0
//     this.currentLevel = 1
//   }
// }
//
// class MultiGame {
//   constructor(player) {
//     this.player = player
//   }
// }
