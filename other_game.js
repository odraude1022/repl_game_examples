const rl = require('readline-sync')
const name = rl.question('What is your name?\n')
let score = 0
let rounds = 0

console.log(`Hello, ${name}`)
let ready = rl.question('Are you ready to play? (y/n)\n')
if(ready.toLowerCase() !== 'y') {
  console.log('Ok come back later')
  process.exit()
}

const tossCoin = () => {
  let guess = rl.question("I am going to flip a coin. Do you think it will be heads (h) or tails (t)?\n")
  // let flip = Math.random() < 0.5 ? 'h' : 't'
  let flip = 'h'
  rounds++
  if(guess.toLowerCase() === flip) {
    score++
    console.log(`You are correct! The result was ${flip}! You now have ${score} points!`)
  }
  else {
    console.log(`Sorry that is wrong. The result was ${flip}. You still have ${score} points.`)
  }
  console.log(`Your winning percentage so far is ${Math.round((score / rounds) * 100)}%`)
  let again = rl.question('Do you want to play again? (y/n)')
  if(again.toLowerCase() === 'y') {
    tossCoin()
  }
}

tossCoin()




