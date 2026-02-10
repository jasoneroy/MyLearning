var img = document.querySelector('img')
var h1 = document.querySelector('h1')
var p = document.querySelector('p')

img.addEventListener('mouseover',function(val){
    console.log(val)
    img.src = 'https://imgs.search.brave.com/BrOY3Y-8cm4QoHpZuc-UO_b9qnGlGgvhVzTRA0CeuDE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE4/NTE0NDUyNC9waG90/by9sb3MtYW5nZWxl/cy1jYWxpZm9ybmlh/LWFjdHJlc3MtZWxp/emFiZXRoLW9sc2Vu/LWF0dGVuZHMtdGhl/LTIwMjQtdnVsdHVy/ZS1mZXN0aXZhbC1s/b3MtYW5nZWxlcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NVl6LWJFcUkwd3dT/NTlnb3pBMlB1ZGJJ/bjhiWXJneDZFZmJr/eVVEbGJmZz0'
})

img.addEventListener('mouseout',function(val){
    console.log(val)
    img.src = 'https://imgs.search.brave.com/6gY1sl90AbD5p1wml8roFzAEN59B4IXixhFuQDxfM_U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ob2xs/eXdvb2RsaWZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNy9lbGl6YWJl/dGgtb2xzZW4tc2V4/aWVzdC1waG90b3Mt/MDUuanBnP3c9Njgw'
})

p.addEventListener('mouseover',function(val){
    console.log(val)
    p.innerHTML = 'American actress famous for her role of Scarlett Witch in MCU'
    p.style.color = 'white'
})

p.addEventListener('mouseout',function(val){
    console.log(val)
    p.innerHTML = 'Description'
    p.style.color = 'black'
    
})

h1.addEventListener('mouseover',function(val){
    console.log(val)
    h1.innerHTML = 'ELIZABETH OLSEN'
    h1.style.color = 'red'
})

h1.addEventListener('mouseout',function(val){
    console.log(val)
    h1.innerHTML = 'NAME'
    h1.style.color = 'black'
    
})