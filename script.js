var img = document.querySelector('main div img')
var h1 = document.querySelector('h1')
var p = document.querySelector('p')
var main = document.querySelector('main')
var ball = document.querySelector('#ball')

main.addEventListener('mousemove',function(val){
    ball.style.left = `${val.x}` + 'px'
    ball.style.top = `${val.y}` + 'px'
    document.body.style.cursor = 'none'
})

img.addEventListener('mouseover',function(){
    img.src = './Julie2.jpg'
})

img.addEventListener('mouseout',function(){
    img.src = './Julie.jpg'
})

p.addEventListener('mouseover',function(){
    p.innerHTML = 'She is an actress and cast from the web series From'
    p.style.color = 'white'
})

p.addEventListener('mouseout',function(){
    p.innerHTML = 'Description'
    p.style.color = 'black'
    
})

h1.addEventListener('mouseover',function(){
    h1.innerHTML = 'Hannah Cheramy'
    h1.style.color = 'red'
})

h1.addEventListener('mouseout',function(){
    h1.innerHTML = 'NAME'
    h1.style.color = 'black'
    
})

main.addEventListener('mousemove',function(val){
    ball.style.left = `${val.x}` + 'px'
    ball.style.top = `${val.y}` + 'px'
    ball.style.opacity = '1'
    document.body.style.cursor = 'none'

})

