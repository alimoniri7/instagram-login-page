var images = document.getElementsByClassName("img")
var slider = document.getElementById("images")
let n = 1

function slideShow() {
    slider.style.backgroundImage = "url('../images/img3.png')"
    for (let i = 0; i < images.length; i++) {


        if (n === 1) {
            slider.style.backgroundImage = "url('../images/img1.png')"
            break
        }
        if (n === 2) {
            slider.style.backgroundImage = "url('../images/img2.png')"
            break
        }
        if (n === 3) {
            slider.style.backgroundImage = "url('../images/img0.png')"
            break
        }
        if (n === 4) {
            n = 0
            slider.style.backgroundImage = "url('../images/img3.png')"
            break
        }
    }
    n++
}

setInterval(slideShow, 3000)