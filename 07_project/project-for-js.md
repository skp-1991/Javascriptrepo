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

## Project 2
```javascript
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
