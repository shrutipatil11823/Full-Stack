var body =document.querySelector("body")
var button =document.querySelector("button")

const callbackfun = (event) =>
{
    body.classList.toggle("dark")
}

button.addEventListener("click",callbackfun)