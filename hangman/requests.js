const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined)
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}

// 1. Create a new function for getting country details
const getCountry = (code, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find(eachCountry => eachCountry.alpha2Code === code)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('Unable to fetch data')
    }
  })

  // request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=71eda2a074975c79c18ba8fc2755b7b3')
  // request.send()
}

