var main = document.querySelector('main');
var btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var div = document.createElement('div')
    var h3 = document.createElement('h3');
    div.style.height = '50px'
    div.style.width = '50px'
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    main.appendChild(div)
    div.style.top = x + '%'
    div.style.left = y + '%'
    div.style.borderRadius = '10px'
    div.appendChild(h3)
    h3.innerHTML = 'HI'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    h3.style.color = `rgb(${c2},${c3},${c1})`

})