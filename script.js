let clock = document.getElementById("clock")

let watch = () =>{
    let date = new Date()
    clock.innerText = date.toLocaleTimeString()
}

setInterval(watch,1000)