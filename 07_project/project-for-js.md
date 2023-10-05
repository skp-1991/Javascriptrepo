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
console.log("project 2")
```