const myTimeout = (fn, timeToWait = 1000, timeoutId) => {

  return (...args) => {
    /* 
      First time called `timeoutId` should be `undefined`
      but in the next ones it will be the id of the 
      declareted  timeout below.
    */
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => fn(...args), timeToWait)
  }
}

const Input = document.querySelector('#text')

Input.addEventListener('input', myTimeout(
  (event) => console.log(event.target.value),
  2000
))