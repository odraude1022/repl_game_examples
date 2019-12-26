const rl = require('readline-sync')

//PRE DEFINE MY VARIABLES
let points = 0
let yikes = 0
let questions;
let begin;
let answer;
let playAgain;

function correct() {
    points += 250
    console.log(`You now have ${points}!`)
}

function wrong() {
    yikes++
    if (yikes >= 3) {
        console.log('It looks like you lost! Better luck next time')
        gameOver()
    }
    else {
        console.log(`Thats a strike! You now have ${yikes}. If you get 3, you lose`)
    }
}

function winner() {
    if (points === 1000 && yikes < 3) console.log('Congrats! You got it all right!')
    else if (points === 750 && yikes < 3) console.log('You got most of them right!')
    else if (points === 500 && yikes < 3) console.log('you only got half right')
}

function gameOver() {
    console.log('Would you like to play again?')
    playAgain = rl.question('(Y)es | (N)o: ').toLowerCase()
    playAgain === 'y' || playAgain === 'yes' ? newGame() : process.exit()
}

function newGame() {
    playAgain = true
    while (playAgain === true) {
        points = 0
        yikes = 0

        questions = [
            question1 = function() {
                console.log('Name one of the founders of Wyncode')
                answer = rl.question(' Jo | Bria | Tim | Don |: ', {
                    trueValue: 'Jo',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question2 = function() {
                console.log('Where is Wyncode located?')
                answer = rl.question('| Wynwood | Palmetto Bay | Brickell | New York', {
                    trueValue: 'Wynwood',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question3  = function() {
                console.log('What is 2+2')
                answer = rl.question('| 4 | 10 | 9 | 2 |: ', {
                    trueValue: '4',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question4 = function() {
                console.log('Which cohort is the best cohort?')
                answer = rl.question('| C29 | C26 | C30 | C32 |', {
                    trueValue: 'C26',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            }
        ]

        console.log('Welcome to WynTrvia! Are you ready?')
        begin = rl.question('(Y)es | (N)o: ').toLowerCase()
        if (begin === 'y' || begin === 'yes') {
            questions.forEach(function(question) {
                yikes < 3 ? question() : console.log('Better luck next time')
            })
            winner()
        }
        else {
            process.exit()
        }
    }
}

newGame()