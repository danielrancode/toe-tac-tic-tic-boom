

// random integer from 1 to n
function randFromOneTo(n) {
  return Math.floor((Math.random() * n)) + 1
}

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

// countdown
function CountDown(id, initialNum, interval) {
  let count = initialNum
  let cell = document.getElementById(id)

  return function() {

    let cd = setInterval(function() {
      if (count == 0) {
        cell.innerHTML = `B${count}${count}M!`
        cell.className = `countdown n${count}`;
        clearInterval(cd)

      } else {
        cell.innerHTML = `${count}`;
        cell.className = `countdown n${count}`;
        count -= 1
        }
      }, interval);
  }()
}

// generate random number (1..n) of countdowns (default: n = 9)
function generateCountdowns(n = randFromOneTo(9), interval) {
  let selectedIds = selectRandomNums(n)

  selectedIds.forEach((id) => {
    setTimeout(() => {
                      CountDown(id, 10, interval);
                      // document.getElementById(id).addEventListener("click", addClass);
                      },
              randFromOneTo(500)
    )
  })
}

function addClass(e) {
  e.target.classList.add('clicked')
}

// const countdowns = Array.from(document.querySelectorAll('.countdown'));
// countdowns.forEach(countdown => countdown.addEventListener("click", addClass));

generateCountdowns(5, 500)


// function runGame(level) {
//   let countdown = 0
//
// }
