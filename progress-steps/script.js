const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

const MIN_COUNT_CIRCLE = 1
let currentActive = 1

next.addEventListener("click", () => {
  currentActive++

  if(currentActive > circles.length){
    currentActive = circles.length
  }

  update()
})

prev.addEventListener("click", () => {
  currentActive--

  if(currentActive < MIN_COUNT_CIRCLE){
    currentActive = MIN_COUNT_CIRCLE
  }

  update()
})

function update(){
  circles.forEach((circle, ind) =>{
    if(ind < currentActive){
      circle.classList.add("active")
    } else{
      circle.classList.remove("active")
    }
  })

  const activites = document.querySelectorAll(".active")

  progress.style.width = ((activites.length - 1) / (circles.length - 1) * 100) + "%"

  if(currentActive === 1){
    prev.disabled = true
  }else if(currentActive === circles.length){
    next.disabled = true
  }else{
    next.disabled = false
    prev.disabled = false
  }
}
