let search=document.querySelector(".search-box");

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle("active")
}

//navbar
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

//Remove menu and search icon on scroll
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}


//header animation

let header=document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('active, window.scrollY > 0');
});


//animation
function galleryAnimation(triggerSelector, boxSelector){
    const timeline=gsap.timeline({
        scrolltrigger:{
            trigger:
            triggerSelector,
            start:"top 100%",
            end: "bottom 100%",
            scrub:1,
        },
    });
    boxSelector.forEach((boxSelector) =>{
        timeline.to(boxSelector,{
            y:0,
            opacity: 1,
            duration: 1,
        });
    });
}

galleryAnimation(".products-container ",[".products-container .box1", ".products-container .box2",".products-container .box3", ".products-container .box4", ".products-container .box5", ".products-container .box6",  ".products-container .box7",  ".products-container .box8"]);

galleryAnimation(".cusomers-container ",[".cusomers-container .box1", ".cusomers-container .box2",".cusomers-container .box3", ".cusomers-container .box4", ".cusomers-container .box5", ".cusomers-container .box6"]);