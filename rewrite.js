// ******** Game (generates Rounds) ********

const runLevels = (startLevel = 1, player = 'Akiva') => {
  if (startLevel > 10) {
    info.innerHTML = "Game OVER!!!"
  } else {
    runAttacks(startLevel)
  }
}

const runAttacks = (level, attacksLeft = 5) => {
  console.log("level:", level, "AttacksLeft", attacksLeft)
    if (attacksLeft > 0) {
      runBombs(attacksLeft)
    } else {
      info.innerHTML = `Level ${level} Done!`
      setTimeout(() => {
        runLevels(++level)
      }, 2000)
    }
  }

const runBombs = (attacksLeft, level, maxInterval = 3000, bombCount = randFromOneTo(9)) => {

  if (attacksLeft < 1) {
    runAttacks(++level)
  } else {
    const ids = selectRandomNums(bombCount)

    ids.forEach((id) => {
      setTimeout(() => {
                        bomb(attacksLeft, id);
                        },
                randFromOneTo(maxInterval)
      )
    })
  }
}

const bomb = (attacksLeft, id, startAt = 10, interval = 50) => {
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
                              runBombs(--attacksLeft)
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



// class Game {
//   constructor(level = 1, player = 'Akiva Frederick Rein') {
//     this.player = player
//     this.currentLevel = level
//   }
//
//   run() {
//     if (this.currentLevel > 10) {
//       info.innerHTML = "Game OVER!!!"
//     } else {
//       let round = new Round(this, this.currentLevel)
//       round.run()
//       this.currentLevel++
//     }
//   }
// }


// ******** Round (generates Attacks) ********

// class Round {
//     constructor(game, level, attacksLeft = 1) {
//       this.game = game
//       this.level = level
//       this.attacksLeft = attacksLeft
//     }
//
//     run() {
//       // display info
//       // info.innerHTML = `Toe Tac Tic Tic Boom ! ! !<br>Player:${this.game.player}<br> Level: ${this.level}<br>Attacks left: ${this.attacksLeft}<br>bombs count: ${this.bombs.length}`
//         if (this.attacksLeft > 0) {
//           let attack = new Attack(this)
//           attack.run()
//           this.attacksLeft--
//         }
//         else {
//           info.innerHTML = `Level ${this.level} Done!`
//           setTimeout(() => {
//           this.game.run()
//           }, 2000)
//         }
//     }
// }


// ******** Attack (generates Bombs) ******** //

// class Attack {
//     constructor(round, maxInterval = 3000, bombCount = randFromOneTo(9)) {
//       this.round = round
//       this.maxInterval = maxInterval
//       this.bombCount = bombCount
//       this.ids = selectRandomNums(bombCount)
//       this.bombs = []
//     }
//
//     run() {
//       // display info
//       // info.innerHTML = `Toe Tac Tic Tic Boom ! ! !<br>Player:${this.round.game.player}<br> Level: ${this.round.level}<br>Attacks left: ${this.round.attacksLeft}<br>bombs count: ${this.bombs.length}`
//       this.ids.forEach((id) => {
//         setTimeout(() => {
//                           let bomb = new Bomb(this, id, 10, 500);
//                           bomb.run()
//                           },
//                   randFromOneTo(this.maxInterval)
//         )
//       })
//     }
// }


// ******** Bomb (counts down & blows up, then if attack is completed, tells Game to run the next Round)******** //

// class Bomb {
//   constructor(attack, id, startAt = 10, interval = 1000) {
//     this.attack = attack
//     this.id = id
//     this.startAt = startAt
//     this.interval = interval
//     this.attack.bombs.push(this)
//   }
//
//   run() {
//     let count = this.startAt
//     let cell = document.getElementById(this.id)
//     cell.addEventListener('click', () => {
//       cell.innerHTML = `Neut`
//       clearInterval(countDown)
//       this.neutralize()
//     })
//     let countDown = setInterval(() => {
//       if (count == 0) {
//           cell.innerHTML = `B${count}${count}M!`
//           cell.className = `bomb n${count}`;
//           clearInterval(countDown)
//           if (isAttackCompleted()) {
//             setTimeout(() => {
//                               for (let i = 0; i < nodes.length; i++) {
//                                 nodes[i].innerHTML = ''
//                               }
//                               this.attack.round.run()
//                               },
//                             200)
//                           }
//       } else {
//           cell.innerHTML = `${count}`;
//           cell.className = `bomb n${count}`;
//           count -= 1
//         }
//       }, this.interval);
//   }
//
//   neutralize() {
//     if (isAttackCompleted()) {
//       setTimeout(() => {
//                         for (let i = 0; i < nodes.length; i++) {
//                           nodes[i].innerHTML = ''
//                         }
//                         this.attack.round.run()
//                         },
//                       200)
//                     }
//
//   }
// }
