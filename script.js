const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// removing the active , when we click on any a tags
//Oh
// selecting all nav-link elements(it should remove the active state), and for each
// links which contains the class of nav-link- if clicked then remove the active class.



document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        }))

let loadMorebtn = document.querySelector('#loadmore');
let currentItem = 3;

loadMorebtn.onclick =() => {
    let boxes =[...document.querySelectorAll('.container2 .box-container .box')];
    for(var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block'
    }
     currentItem += 3;

     if(currentItem >= boxes.length){
         style.display = "none";
     }
}




