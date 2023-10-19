# Project related to dom

## Project link 
[click here](https://stackblitz.com/@skp-1991/projects)

# Solution code

## Project 1

```javascript
const body = document.querySelector('body')
const btnAll = document.querySelectorAll('.btncolor')

btnAll.forEach((btnAll)=>{
  btnAll.addEventListener('click', (e)=>{
    if(e.target.id === 'gray'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'green'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```


## Project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault();  // this use for stop the action of the form
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')


  // isNoN() is new feature of the javascript for not a number

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please provide valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if(bmi < 18.6 ){
      results.innerHTML = `<span>BMI :: ${bmi}</span> -- <span>Under Weight</span>`
    }else if ( bmi > 18.6 && bmi < 24.9){
      results.innerHTML = `<span>BMI :: ${bmi}</span> -- <span>Normal Range</span>`
    }else{
      results.innerHTML = `<span>BMI :: ${bmi}</span> -- <span>Over Weight</span>`
    }
    
  }
})
```

## Project 3
```javascript
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
### Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const guessField = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const message = document.querySelector('.resultParas')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')


const p = document.createElement('p')

// this blank array for the showing the aready guess value
let prevGuess = []


// this will count the attampt of guess we will incress the value as per click  and numGuess++
let numGuess = 1

// This will use as the permission to play the game. if game over or win then this will call false so user can not play the game.
let playGame = true




if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let guessValue = parseInt(guessField.value)
    validation(guessValue)
  })
}

// function

// This will validate the input value for value is in number of other 
function validation(guess){
  
  if(isNaN(guess)){
    lowOrHi.innerHTML= `Please Enter a valid number`
  }else if(guess < 1){
    lowOrHi.innerHTML= `Please Enter a value greater than 0`
  }else if(guess > 100){
    lowOrHi.innerHTML= `Please Enter a value less then 100`
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over and random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

// This will use for check the value that value match with randomnumber or not
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('You have guessed right')
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage('Guess value is too low')
  }else if(guess > randomNumber){
    displayMessage('Guess value is too heigh')
  }
}

// This will also display the guess and intrect with dom
function displayGuess(guess){
  guessField.value = ''
  guesses.innerHTML += `${guess}, `
  numGuess++
  lastResult.innerHTML = `${11 - numGuess}`
}


// this will show the message and this will intrect with the dom thats mean append the child in div
function displayMessage(messages){
   lowOrHi.innerHTML = `${messages}`
}


function endGame(){
  guessField.value = ''
  guessField.setAttribute('disabled','disabled')
  submit.style.display = 'none'
  p.innerHTML = '<button>Start Game</button>'
  p.classList.add('button')
  playGame = false
  message.appendChild(p)
  startGame()
}

function startGame(){
  let start = document.querySelector('.button')
  start.addEventListener('click', (e)=>{
    guessField.value = ''
    guessField.removeAttribute('disabled')
    submit.style.display = 'inline-block'
    prevGuess = []
    numGuess = 1
    guesses.innerHTML = ''
    lastResult.innerHTML = `${11 - numGuess}`
    message.removeChild(p)
    lowOrHi.innerHTML = ''
    randomNumber = parseInt(Math.random() * 100 + 1)
    playGame = true
  })
}

```

### Project 5

```javascript

// genrate Random color

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')



const colorRandom = function(){
  let hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let timeLoop;

// start.addEventListener('click', ()=>{
//   let colorLoop = function(){
//     document.body.style.backgroundColor = colorRandom()
//   }
//   timeLoop = setInterval(colorLoop, 1000)
// })

// stop.addEventListener('click', ()=>{
//   clearInterval(timeLoop)
//   console.log('stop')
// })

let startColourChange = function(){
  let colorLoop = function(){
    document.body.style.backgroundColor = colorRandom()
  }
  if(!timeLoop){
  timeLoop = setInterval(colorLoop, 2000)
  }

}
start.addEventListener('click', startColourChange)


let stopColourChange = function(){
  clearInterval(timeLoop)
  timeLoop = null
}
stop.addEventListener('click', stopColourChange)

```

### Project 6

```javascript


```
