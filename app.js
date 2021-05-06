const colors = [ 'Black', 'White', 'Red', 'Green', 'Yellow', 'Blue', 'Brown', 'Orange', 'Pink', 'Purple', 'Grey'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

