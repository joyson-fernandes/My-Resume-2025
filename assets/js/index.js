const counter = document.querySelector(".counter-number");
async function updateCounter() {
    try {
        let response = await fetch("https://flqm7ld4yqfpu6numq57jqncem0ggnpj.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        console.log(data);  // This will log the fetched data to the console
        counter.innerHTML = `${data.views} Awesome people visited this page`;  // Update the counter with the custom message
    } catch (error) {
        console.error('Error fetching view count:', error);
    }
}

updateCounter();
