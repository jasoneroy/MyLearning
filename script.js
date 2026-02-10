var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var box = document.querySelector('#inner')
var p = document.querySelector('p')

btn.addEventListener('click',function(){
    let time = Math.floor(Math.random()*101) + 10
    console.log(time)
    var a = 0
    btn.style.pointerEvents = 'none'
    let loader = setInterval(function(){
        a++
        box.style.width = a + '%'
        h1.innerHTML = a+'%'
    },time)

    setTimeout(() => {
        clearInterval(loader)
        p.innerHTML = `Your download is completed in ${time/10} seconds.`
        btn.innerHTML = "Downloaded"
        btn.style.opacity = '0.5'
    },time*100);

 
})