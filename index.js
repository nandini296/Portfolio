const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');

const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");

    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})


window.addEventListener("scroll",()=>{
    let menu = document.querySelector("nav");
    
    if(window.scrollY > 625)
    {
        // menu.style.background = "red";
        menu.style.display = "flex";
        menu.style.height = 10+"vh";
        menu.style.opacity = 1;
        // console.log("YESSS");
    }
    if(window.scrollY <625)
    {
        // menu.style.background = "transparent";
        menu.style.display = "none";
        menu.style.height =0+"vh";
    }
})
let ranget = document.querySelector(".range-t");
// ranget.addEventListener("")
function range_not_changed()
{
    console.log(this);
    console.log("Changes");
}

function movedown()
{
    
}