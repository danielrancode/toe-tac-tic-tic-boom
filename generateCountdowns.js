// generate random number (1..n) of countdowns (default: n = 9)

function generateCountdowns(interval) {
  n = randFromOneTo(9)
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
