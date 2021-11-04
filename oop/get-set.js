const data = {
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.trim()
  }
}

// code that uses the data object
data.location = ' Philadelphia '
console.log(data)