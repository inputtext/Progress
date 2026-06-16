const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

const mouse = {
  x:null,
  y:null,
  radius:150
}

window.addEventListener("mousemove",(e)=>{

  mouse.x = e.x
  mouse.y = e.y

})

window.addEventListener("resize",()=>{

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

})

class Particle{

  constructor(x,y,dx,dy,size,color){

    this.x = x
    this.y = y

    this.dx = dx
    this.dy = dy

    this.size = size

    this.color = color
  }

  draw(){

    ctx.beginPath()

    ctx.arc(this.x,this.y,this.size,0,Math.PI*2)

    ctx.fillStyle = this.color

    ctx.fill()
  }

  update(){

    if(this.x > canvas.width || this.x < 0){
      this.dx = -this.dx
    }

    if(this.y > canvas.height || this.y < 0){
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    let dx = mouse.x - this.x
    let dy = mouse.y - this.y

    let distance = Math.sqrt(dx*dx + dy*dy)

    if(distance < mouse.radius){

      this.x -= dx / 18
      this.y -= dy / 18
    }

    this.draw()
  }

}

function init(){

  particles = []

  for(let i=0;i<180;i++){

    let size = Math.random()*3 + 1

    let x = Math.random()*canvas.width

    let y = Math.random()*canvas.height

    let dx = (Math.random()-0.5)*1.5

    let dy = (Math.random()-0.5)*1.5

    let color = i % 2 === 0
    ? "#8b5cf6"
    : "#00d0ff"

    particles.push(
      new Particle(x,y,dx,dy,size,color)
    )
  }

}

function connect(){

  for(let a=0;a<particles.length;a++){

    for(let b=a;b<particles.length;b++){

      let dx = particles[a].x - particles[b].x

      let dy = particles[a].y - particles[b].y

      let distance = dx*dx + dy*dy

      if(distance < 12000){

        ctx.strokeStyle =
        "rgba(139,92,246,0.12)"

        ctx.lineWidth = 1

        ctx.beginPath()

        ctx.moveTo(
          particles[a].x,
          particles[a].y
        )

        ctx.lineTo(
          particles[b].x,
          particles[b].y
        )

        ctx.stroke()
      }

    }

  }

}

function animate(){

  requestAnimationFrame(animate)

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  )

  for(let i=0;i<particles.length;i++){

    particles[i].update()

  }

  connect()

}

init()

animate()