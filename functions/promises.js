// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback('This is my callback error', undefined, )
  }, 2000)
}

getDataCallback((err, data) => {
  if (err) {

  } else {
    console.log(data)
  }
})

// Promise
const getDataPromise = (num) => new Promise ((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 2000)
})

getDataPromise= (10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})