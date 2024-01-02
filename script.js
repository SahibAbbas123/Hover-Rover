document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const instructions = document.getElementById("instructions");
    const centerInstruction = document.getElementById("centerInstruction");
  
    let posX = 0;
    let posY = 0;
    let keysPressed = {};
  
    document.addEventListener("keydown", function(event) {
        keysPressed[event.key] = true;

        handleMovement();
    });

    document.addEventListener("keyup", function(event) {
        keysPressed[event.key] = false;

        handleMovement();
    });

    function handleMovement() {
        let moveX = 0;
        let moveY = 0;
    
        if (keysPressed["w"]) moveY -= 10;
        if (keysPressed["a"]) moveX -= 30;
        if (keysPressed["s"]) moveY += 10;
        if (keysPressed["d"]) moveX += 30;
    
        if (keysPressed["c"]) {
            posX = 0;
            posY = 0;
        } else {
            const newPosX = posX + moveX;
            const newPosY = posY + moveY;
    
            posX = Math.max(-682, Math.min(newPosX, 682));
            posY = Math.max(-280, Math.min(newPosY, 280));
        }
        box.classList.add("appear-animation");
        const tiltAngle = moveX > 0 ? "-5deg" : (moveX < 0 ? "5deg" : "0deg");

        box.style.transform = `translate(${posX}px, ${posY}px) rotate(${tiltAngle})`;
    }

})