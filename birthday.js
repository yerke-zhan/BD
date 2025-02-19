document.getElementById('changeMessage').addEventListener('click', function() {
    const messages = [
       
        "May this year bring you many happy returns!",
        "May your day be filled with joy and laughter!",
        "Here's to another year of amazing adventures!",
        "Wishing you all the best on this special day!",
        "Happy Birthday! Enjoy your day!"
        

    ];
    const messageElement = document.getElementById('message1');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
    messageElement.style.color = randomIndex === 0? 'blue' : 'red' ;
});
const snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.position = 'absolute';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = -Math.random() * 500 + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.color = 'skyblue';
    snowflake.textContent = '🥳';
    document.querySelector('.snowfall').appendChild(snowflake);

    snowflakes.push(snowflake);
}

function animateSnowflakes() {
    snowflakes.forEach(snowflake => {
        let top = parseFloat(snowflake.style.top);
        snowflake.style.top = top + 1 + 'px';

        if (top > window.innerHeight) {
            snowflake.style.top = -Math.random() * 10 + 'px';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
}

setInterval(createSnowflake, 300);
setInterval(animateSnowflakes, 20);


