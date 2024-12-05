// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://flqm7ld4yqfpu6numq57jqncem0ggnpj.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;    
}

updateCounter();
