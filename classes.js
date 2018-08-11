// ******** MultiGame ********

class MultiGame {
  constructor(playerName = 'Akiva Frederick Hastings Foss Feig Entin Rein') {
    this.playerName = playerName
  }

  run() {
    let level = 1
    let game = new Game(this, level)
    game.run()
  }
}

// ******** Game ********

class Game {
    constructor(multiGame, level) {
      this.multiGame = multiGame
      this.level = level
      this.attackCount = 0
      this.bombs = []
    }

    run() {
      let info = document.getElementById('game-name')
      info.innerHTML = `Toe Tac Tic Tic Boom ! ! !<br>Player:${this.multiGame.playerName}<br> Level: ${this.level}`
        if (this.attackCount < 2) {
            this.attack()
            this.attackCount++
        } else {
          info.innerHTML = `Level ${this.level} Done!`
          setTimeout(() => {
            generate(1)
          }, 2000)
        }
    }

    attack(maxInterval = 3000, bombCount = randFromOneTo(9)) {
      let ids = selectRandomNums(bombCount)

      ids.forEach((id) => {
        setTimeout(() => {
                          let bomb = new Bomb(id, 3, 1000);
                          bomb.run()
                          },
                  randFromOneTo(maxInterval)
        )
      })
    }

}



// ******** Attack ******** //
// class Attack {
//     constructor(maxInterval = 3000, bombCount = randFromOneTo(9)) {
//       this.maxInterval = maxInterval
//       this.bombCount = bombCount
//       this.ids = selectRandomNums(bombCount)
//     }
//
//     run() {
//       this.ids.forEach((id) => {
//         setTimeout(() => {
//                           let bomb = new Bomb(id, 3, 1000);
//                           bomb.run()
//                           },
//                   randFromOneTo(this.maxInterval)
//         )
//       })
//     }
//
//   }


// ******** Bomb ******** //


class Bomb {

  constructor(id, startAt = 10, interval = 1000) {
    this.id = id
    this.startAt = startAt
    this.interval = interval
    // bombs.push(this)
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
                              // bombs = []
                              main()
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
