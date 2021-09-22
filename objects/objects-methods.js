let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  seatParty: function (seated) {
    return this.guestCount += seated
  },
  removeParty: function (removed) {
    return this.guestCount -= removed
  },
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  }
}

// seatParty
// removeParty


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))