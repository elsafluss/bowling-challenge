/* eslint-disable max-len */
// BOWLING RULES
//
// A game consists of 10 frames
// Each frame has two rolls to knock down 10 pins
//
// 10 pins knocked down on the first roll => STRIKE (X)
// 10 pins knocked down after second roll => SPARE  (/)
//
// Frame Scoring
// No strikes or spares: number of pins knocked down
// STRIKE: 10 + number of pins knocked down in next 2 rolls
// SPARE:  10 + number of pins knocked down in next roll

function totalScore(input) {
  let finalScore = input.split("") // returns arr of str w/ spaces
  finalScore = finalScore.filter(el => el !== " ") // returns arr of str
  for (let i = 0; i < 11; i++) {
    finalScore.unshift(0) // this fixes the "strike or spare at the first roll" problem
  } // and also "multiple strikes or spares at the beginning"

  //   for spares and strikes:
  let spares = [] // this will hold indices of spares
  let strikes = [] // this will hold indices of strikes
  for (let i = 0; i < finalScore.length; i++) {
    if (finalScore[i] === "/") {
      spares.push(i)
    }
    if (finalScore[i] === "X") {
      strikes.push(i)
    }
  }
console.log(strikes)

  //   change spares and strikes to their actual scores
  spares.forEach(spare => {
    finalScore[spare] = (10 - Number(finalScore[spare - 1]) + Number(finalScore[spare + 1]))
    // change all spares to 10 minus previous plus next one
    return finalScore
  })
  strikes.forEach(strike => { 
    finalScore[strike] = 10 // a strike is 10 points for that frame
    // finalScore.map(score => score.toString()) // if we've already gone 
    if (Number(finalScore[strike - 1]) !== 10) { // if the previous frame was a strike, do not subtract it
      finalScore[strike] = Number(finalScore[strike]) - Number(finalScore[strike - 1]) 
      console.log(finalScore)
    } 
    finalScore[strike] = 10 + Number(finalScore[strike + 1]) + Number(finalScore[strike + 2])
    // change all strikes to 10 minus previous, plus next two
    return finalScore
})
      
  finalScore = finalScore.map((el => Number(el))) // change values to numbers
                      
//   console.log(finalScore)  
  finalScore = finalScore.reduce((total, value) => { // now we're adding all those frame final scores
    // console.log(total)
    return total + value
  }, 0)
  return finalScore 
}

// if there's more than one strike or spare in a row, i can't use Number() like this, because
// then it's running on items that have already been turned to numbers

module.exports = totalScore;