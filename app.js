var videocon = document.querySelector(".main")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
gsap.to(playbtn,{
    scale:1,
    opacity:1
})
})
videocon.addEventListener("mouseleave",function(){
gsap.to(playbtn,{
    scale:0,
    opacity:0
})
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
left:dets.x-170,
top:dets.y-180
    })
})


// scroll revel
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay:200
});


ScrollReveal().reveal('#img', {origin:'left' ,delay:250 });
ScrollReveal().reveal('.h1', {origin:'bottom' ,delay:190 });
ScrollReveal().reveal('.h2', {origin:'left' ,delay:190 });
ScrollReveal().reveal('.h3', {origin:'bottom' ,delay:190 });
ScrollReveal().reveal('.p', {origin:'top' ,delay:190 });