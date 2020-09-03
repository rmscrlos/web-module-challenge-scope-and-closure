// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
  function processFirstItem(stringList, callback) {
    return callback(stringList[0])
  }

// console.log(processFirstItem(['Foo', 'bar'], (str) => `${str} ${str}`)); 

// it is like passing a normal fuction but it is being called inside function processFirstItem


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  
 *    -Counter1 is a function expression and counter2 is a function declaration. Function declaration are processed before they are called.
 *     Function expression are processed when they are called.
 *  
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    -Counter1 is using closure. Because its inner function is reaching out to its parent function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    -You want to use counter1's code is useful to protect code from being accessed.  And counter2 can be freely accessed and can be alter
 *     by other functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log('------- next line --------')

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(count, 'counter 2');
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * 3);

}

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


    function finalScore(inning, numOfIns){
      let score = {
        home: 0,
        away: 0,
      }
        for(let i = 0; i < numOfIns; i++){
          score.home += inning();
          score.away += inning();
        }
        console.log(`--Final Score-- \n Home: ${score.home} \n Away: ${score.away}`);
      return score;
    }

    // console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


  function inning(){

    return Math.floor(Math.random() * 3);

  }

  function getInningScore(inning, numOfIns){
    let score = {
      home: 0,
      away: 0
    };
      for(let i = 1; i <= numOfIns; i++){
        score.home += inning();
        score.away += inning();
        if (i === 1) {
          console.log(`${i}st inning: ${score.away} - ${score.home}`);
        } else if (i === 2) {
          console.log(`${i}nd inning: ${score.away} - ${score.home}`);
        } else if (i === 3) {
          console.log(`${i}rd inning: ${score.away} - ${score.home}`);
        } else {
          console.log(`${i}th inning: ${score.away} - ${score.home}`);
        }
      }
      console.log(`--Final Score-- \n Home: ${score.away} \n Away: ${score.home}`);
    return score;
  }


  function scoreboard(inning, getInningScore, num) {
    return getInningScore(inning, num);
  }


// scoreboard(inning, getInningScore, 9);

