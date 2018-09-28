document.addEventListener('mouseup', function (e) {
  var selection = document.getSelection()

  if (selection.rangeCount === 0) return

  var content = selection.toString()

  if (content === '') return

  console.log('Selected: ' + content)

  var message = {
    content,
    url: document.location.href,
    timestamp: new Date()
  }

  console.log('Sending message: %o', message)
  browser.runtime.sendMessage(message)
})