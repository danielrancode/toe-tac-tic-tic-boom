
// random integer from 1 to n
function randFromOneTo(n) {
  return Math.floor((Math.random() * n)) + 1
}

// random integer from 0 to n
function randFromZeroTo(n) {
  return Math.round((Math.random() * n))
}

// array of random length (1..9), each element is unique random integer (1..9)
function selectRandomNums(howMany) {
  let numArr = [1,2,3,4,5,6,7,8,9]
  let selected = []

  for (x = 1; x <= howMany; x++) {
    let randomIndex = randFromZeroTo(numArr.length - 1)
    let num = numArr.splice(randomIndex, 1)
    selected.push(num[0])
  }
  return selected
}

function isAttackCompleted() {
  let done = true
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].className !== 'bomb n0') { done = false }
  }
  return done
}
