const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountry = (code) => {
  return fetch('http://api.countrylayer.com/v2/all?access_key=71eda2a074975c79c18ba8fc2755b7b3').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then((data) => {
    return data.find(eachCountry => eachCountry.alpha2Code === code)
  })
}

const getLocation = () => {
  return fetch('http://ipinfo.io/json?token=ca920672ed0f3a').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data')
    }
  })
}