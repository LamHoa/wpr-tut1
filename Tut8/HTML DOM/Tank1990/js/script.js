let x = y = 0;
let speed = 19;
let battle = document.getElementById('battle');
let tank = document.getElementById("tank");
let down = document.getElementById("downBtn");
let left = document.getElementById("leftBtn");
let right = document.getElementById("rightBtn");
let up = document.getElementById("upBtn");

down.addEventListener('click', function(){
    if (y + speed < battle.clientHeight) {
        y += speed;
    } else {
        y += 0;
    }
    tank.style.marginTop = y + 'px';
})

up.addEventListener('click', function(){
    if (y > 0) {
        y -= speed;
    } else {
        y -= 0;
    }
    tank.style.marginTop = y + 'px';
})

left.addEventListener('click', function(){
    if (x > 0) {
        x -= speed;
    } else {
        x -= 0;
    }
    tank.style.marginLeft = x + 'px';
})

right.addEventListener('click', function(){
    if (x + speed < battle.clientWidth) {
        x += speed;
    } else {
        x += 0;
    }
    tank.style.marginLeft = x + 'px';
})
