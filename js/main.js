function dateTime () {
  const date = new Date()
  let today = date.toDateString()
  let time = date.toLocaleTimeString()
  document.getElementsByName('q')[0].placeholder = today + ' ' + time
  setTimeout(dateTime, 1000)
}

function traichu () {
  dateTime()
}
