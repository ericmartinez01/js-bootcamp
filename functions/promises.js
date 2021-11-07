const getDataCallBack = (callback) => {
  setTimeout(() => {
    callback('This is my callback error', undefined, )
  }, 2000)
}

getDataCallBack((err, data) => {
  if (err) {

  } else {
    console.log(data)
  }
})

// Promise
const myPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the data')
    reject('This is my promise error')
  }, 2000)
})

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})