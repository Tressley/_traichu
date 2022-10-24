function dateTime () {
  const date = new Date()
  let today = date.toDateString()
  let time = date.toLocaleTimeString()
  document.getElementsByName('q')[0].placeholder = today + ' ' + time
  setTimeout(dateTime, 1000)
}

var konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]
var currentKey = 0
var keyHandler = function (event) {
  // If the key isn't in the pattern, or isn't the current key in the pattern, reset
  if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[currentKey]) {
    currentKey = 0
    return
  }

  // Update how much of the pattern is complete
  currentKey++

  // If complete, alert and reset
  if (konamiCode.length === currentKey) {
    currentKey = 0
    document.getElementById('traichu-running').classList.add('slide')
    setTimeout(function () {
      document.getElementById('traichu-running').classList.remove('slide')
    }, 4250);
  }
}

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false)
