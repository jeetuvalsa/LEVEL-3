function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();


function HomeAnimation(){
    gsap.set(".marquees",{
        scale:5
    })
    
    
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".home",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
        },
    })
    .to(".videodiv", {
        "--clip": "0%",
        ease:Power2,    
    },"a")
    .to(".marquees", {
        scale:1,
        ease:Power2
    },"a")
    .to(".lft",{
        xPercent: -10,
        stagger:.03,
        ease:Power4, 
    },"b")
    .to(".rgt",{
        xPercent: 10,
        stagger:.03,
        ease:Power4, 
    },"b")
}
HomeAnimation()
function RealAnimation(){
    gsap.to(".slide", {
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
            // pin:true
        },
        xPercent: -315,
        ease:Power4,
    });
}
RealAnimation()
function TeamAnimation(){
    document.querySelectorAll(".listelem").forEach((e)=>{
        e.addEventListener("mousemove",(dets)=>{
            
            gsap.to(e.querySelector(".circlediv"), {opacity:1,x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),ease:Power4});
        })
        e.addEventListener("mouseleave",(dets)=>{
            gsap.to(e.querySelector(".circlediv"), {opacity:0,ease:Power4});
        })
    })
}
TeamAnimation()


function ParaAnimation(){
    var clutter = ""
document.querySelector(".paraani").textContent.split("")
.forEach((e)=>{
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})

document.querySelector(".paraani").innerHTML = clutter



var clutter1 = ""
document.querySelector(".paraani1").textContent.split("")
.forEach((e)=>{
    if(e === " ") clutter1 += `<span>&nbsp;</span>`
    clutter1 += `<span>${e}</span>`
})

document.querySelector(".paraani1").innerHTML = clutter1



gsap.set(".paraani span,.paraani1 span",{
    opacity:0.1
})
gsap.to(".paraani span", {
    scrollTrigger:{
        trigger:".para1",
        start:"top 60%",
        end:"bottom 90%",
        scrub:2,

    },
    opacity:1,
    stagger:0.03,
    ease:Power4,
    
});
gsap.to(".paraani1 span", {
    scrollTrigger:{
        trigger:".para2",
        start:"top 60%",
        end:"bottom 90%",
        scrub:2,

    },
    opacity:1,
    stagger:0.03,
    ease:Power4,
    
});
}
ParaAnimation()

function CapsuleAnimation(){

    gsap.to(".cap2", {
        scrollTrigger:{
            trigger:".capsule",
            start:"top 70%",
            end:"bottom bottom",
            scrub:2,
            // pin:true
        },
        y:0,
        ease:Power4,
    });


}
CapsuleAnimation();

function bodycolorchange(){
    
document.querySelectorAll(".section")
.forEach((e)=>{
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        scrub:2,
        onEnter:function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack:function(){
            document.body.setAttribute("theme", e.dataset.color)

        },
    })
})
}
bodycolorchange()



