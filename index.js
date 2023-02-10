//getting our elements form our HTML file 
let button = document.getElementById('generate')
let number = document.getElementById('number')

// when button is clicked will get a random number 
button.addEventListener('click', function() {
    number.innerHTML = Math.floor(Math.random() * 1000)
})




