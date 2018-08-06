


function randTo(n) {
  return Math.floor((Math.random() * n)) + 1
}

function CountDown(id) {
  let x = 10
  return setInterval(function() {
    if (x == 0) {
      document.getElementById(id).innerHTML = `<p>B${x}${x}M!</p>`
    } else {
      document.getElementById(id).innerHTML = `<p>${x}</p>`
      x -= 1
      }
    }, 1000);
}

function generateCountdowns(n = randTo(9)) {
  i = 0
  for (c = 1; c <= n; c++) {
    setTimeout(
      () => {
        i++;
        CountDown((i), 1000);
        document.getElementById(i).addEventListener("click", addClass);
        }, randTo(3000));
    // i++;
  }
}

function addClass(e) {
  e.target.classList.add('clicked')
}

// const countdowns = Array.from(document.querySelectorAll('.countdown'));
// countdowns.forEach(countdown => countdown.addEventListener("click", addClass));

generateCountdowns()
