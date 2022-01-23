var height = 0
var width = 0
var lives = 1
var time = 20

var createMosquitoeTime = 1500

var level = window.location.search
level = level.replace('?', '')

if(level == 'normal'){
  createMosquitoeTime = 1500
} else if(level == 'dificil'){
  createMosquitoeTime = 1000
} else if(level == 'chuck-norris'){
  createMosquitoeTime = 750
}


function adjustWindow(){
  height = window.innerHeight 
  width = window.innerWidth

  console.log(width, height)
}

adjustWindow()

var timer = setInterval(function(){
  
  time -= 1

  if(time < 0) {
    clearInterval(timer)
    clearInterval(createMosquitoe)
  } else {
    document.getElementById('timer').innerHTML = time
  }

}, 1000)


function randomPosition(){
  //removing the previous mosquitoe
  if(document.getElementById('mosquitoe')) {
    document.getElementById('mosquitoe').remove()

    if(lives > 3){
      window.location.href = 'game_over.html'
    } else {
      document.getElementById('v' + lives).src = 'img/empty_heart.png'

      lives++
    }
  }
   
  
  //random mosquitoe position
  var positionX = Math.floor(Math.random() * width) - 90
  var positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  //creating the HTML element
  var mosquitoe = document.createElement('img')
  mosquitoe.src = 'img/mosquitoe.png'
  mosquitoe.className = randomSize() + ' ' + randomSide()
  mosquitoe.style.left = positionX + 'px'
  mosquitoe.style.top = positionY + 'px'
  mosquitoe.style.position = absolute
  mosquitoe.id = 'mosquitoe'

  document.body.appendChild(mosquitoe)

}

function randomSize(){
  var mosquitoe_class = Math.floor(Math.random() * 3)

  switch(mosquitoe_class){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'      
  } 
}

function randomSide(){
  var mosquitoe_class = Math.floor(Math.random() * 2)

  switch(mosquitoe_class){
    case 0:
      return 'sideA'
    case 1:
      return 'sideB'
  }
}