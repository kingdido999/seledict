browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(message) {
  console.log('Receiving message: %o', message)

  browser.storage.local.set({ message })
    .then(function () {
      console.log('OK!')
    })
    .catch(function (err) {
      console.log(err)
    })
}