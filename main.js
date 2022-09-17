import './style.scss'
import * as bootstrap from "bootstrap";


let sidePage  =document.querySelector("#side-page")
let toggleBtn = document.querySelector('#toggle-btn');

toggleBtn.addEventListener("click",function (){
    console.log("ggg")
sidePage.classList.toggle("show")
})