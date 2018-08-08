

// random integer from 1 to n
function randTo(n) {
  return Math.floor((Math.random() * n)) + 1
}

// array of random length (1..9), each element is unique random integer (1..9)
function selectRandomNums(howMany) {
  let numArr = [1,2,3,4,5,6,7,8,9]
  let selected = []

  for (x = 1; x <= howMany; x++) {
    let num = numArr.splice(randTo(numArr.length - 1), 1)
    selected.push(num[0])
  }
  return selected
}

// countdown
function CountDown(id, initialNum) {
  let count = initialNum
  let cell = document.getElementById(id)

  return function() {

    let cd = setInterval(function() {
      if (count == 0) {
        cell.innerHTML = `B${count}${count}M!`
        cell.className = `countdown n${count}`;

            // if (cell.innerHTML == `B${count}${count}M!`)
              clearInterval(cd)

      } else {
        cell.innerHTML = `${count}`;
        cell.className = `countdown n${count}`;
        count -= 1
        }
      }, 1000);
  }()
}

// generate random number (1..n) of countdowns (default: n = 9)
function generateCountdowns(n = randTo(9)) {
  let selectedIds = selectRandomNums(n)

  selectedIds.forEach((id) => {
    setTimeout(() => {
                      CountDown(id, 10);
                      document.getElementById(id).addEventListener("click", addClass);
                      },
              randTo(3000)
    )
  })
}

function addClass(e) {
  e.target.classList.add('clicked')
}

// const countdowns = Array.from(document.querySelectorAll('.countdown'));
// countdowns.forEach(countdown => countdown.addEventListener("click", addClass));

generateCountdowns()
