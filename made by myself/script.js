const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.transform =
  "translate(-50%, -50%) scale(1.2)";

  clearTimeout(cursor.timeout);

  cursor.timeout = setTimeout(()=>{

    cursor.style.transform =
    "translate(-50%, -50%) scale(0.8)";

  },100);

});

/* SMOOTH CURSOR */

function animate(){

  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();