const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place')
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
})

const getCountry = (code) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find(eachCountry => eachCountry.alpha2Code === code)
      resolve(country)
    } else if (e.target.readyState === 4) {
      reject('Unable to fetch data')
    }
  })

  // request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=71eda2a074975c79c18ba8fc2755b7b3')
  // request.send()
})

