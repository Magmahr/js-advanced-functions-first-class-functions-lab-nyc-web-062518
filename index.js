// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers){
  const firstTwo = []
  firstTwo.push(drivers[0], drivers[1])
  return firstTwo
})

const returnLastTwoDrivers = (function(drivers){
  const lastTwo = []
  lastTwo.push(drivers[drivers.length-2], drivers[drivers.length-1])
  return lastTwo
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  let fare;
  const fareMultiplier = (function(fare){
  return fare * int
})
return fareMultiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, fn){
  if (fn === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
  }
  else if (fn === returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers)
  }
}
