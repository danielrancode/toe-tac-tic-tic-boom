// ******** Game ********

class Game {
  constructor(playerName = 'Akiva Frederick Hastings Foss Feig Entin Zigman Bernatth McDonald Moskowich Rein') {
    this.playerName = playerName
    this.currentLevel = 1
  }

  run() {
    if (this.currentLevel > 10) {
      info.innerHTML = "Game OVER!!!"
    } else {
      let round = new Round(this, this.currentLevel)
      round.run()
      this.currentLevel++
    }
  }
}

// ******** Round ********

class Round {
    constructor(game, level) {
      this.game = game
      this.level = level
      this.attackCount = 0
      this.bombs = []
    }

    run() {
      // let info = document.getElementById('game-name')
      info.innerHTML = `Toe Tac Tic Tic Boom ! ! !<br>Player:${this.game.playerName}<br> Level: ${this.level}`
        if (this.attackCount < 2) {
          let attack = new Attack(this)
          attack.run()
            // this.attack()
            this.attackCount++
        } else {
          info.innerHTML = `Level ${this.level} Done!`
          setTimeout(() => {
            generate(1)
          }, 2000)
        }
    }

    // attack(maxInterval = 3000, bombCount = randFromOneTo(9)) {
    //   let ids = selectRandomNums(bombCount)
    //
    //   ids.forEach((id) => {
    //     setTimeout(() => {
    //                       let bomb = new Bomb(id, 3, 1000);
    //                       bomb.run()
    //                       },
    //               randFromOneTo(maxInterval)
    //     )
    //   })
    // }

}



// ******** Attack ******** //
class Attack {
    constructor(round, maxInterval = 500, bombCount = randFromOneTo(9)) {
      this.round = round
      this.maxInterval = maxInterval
      this.bombCount = bombCount
      this.ids = selectRandomNums(bombCount)
    }

    run() {
      // console.log(`this.round.game.playerName = ${this.round.game.playerName}`)
      this.ids.forEach((id) => {
        setTimeout(() => {
                          let bomb = new Bomb(this, id, 10, 100);
                          bomb.run()
                          },
                  randFromOneTo(this.maxInterval)
        )
      })
    }

  }


// ******** Bomb ******** //


class Bomb {

  constructor(attack, id, startAt = 10, interval = 1000) {
    this.attack = attack
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
                              this.attack.round.game.run()
                            }, 200
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
// class Game {
//   constructor(player) {
//     this.player = player
//   }
// }
