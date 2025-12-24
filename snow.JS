console.log("It's the most...");

// snowflake constants
const numOfSnowFlakes = 300;
const maxSnowFlakeSize = 5;
const maxSnowFlakeSpeed = 2;
const snowFlakeColor = '#bde0fe';
const snowflakes = [];

// Canvas
const canvas = document.createElement('canvas');
canvas.style.positions = 'absolute';
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');


//creating snowflakes

const createSnowFlake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * maxSnowFlakeSize) * 1,
    color: snowFlakeColor,
    speed: Math.random() * maxSnowFlakeSpeed + 3
});

const drawSnowFlake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};

// drawSnowFlake(createSnowFlake());

const updateSnowFlake = snowflake => {
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowFlake());
    };
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowFlake(snowflake);
        drawSnowFlake(snowflake);
    });
};

for (let i = 0; i < numOfSnowFlakes; i++) {
    snowflakes.push(createSnowFlake());
};

setInterval(animate, 20);