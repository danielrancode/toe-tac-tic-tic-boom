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
