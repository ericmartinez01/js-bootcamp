const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

// const getCurrentCountry = async () => {
//   const location = await getLocation()
//   return await getCountry(location.country)
// }

// const getCountry = (code) => {
//   const response = await fetch('http://api.countrylayer.com/v2/all?access_key=71eda2a074975c79c18ba8fc2755b7b3')

//   if (response.status === 200) {
//     const data = await response.json()
//     return data.find(eachCountry => eachCountry.alpha2Code === code)
//   } else {
//     throw new Error('Unable to fetch Country')
//   }
// }


// const getLocation = () => {
//   const response = await response('http://ipinfo.io/json?token=ca920672ed0f3a')

//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('unable to get the current location')
//   }
// }