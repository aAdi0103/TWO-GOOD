function videocon(){
    var con=document.querySelector("#video-container")
var play=document.querySelector("#play")

con.addEventListener("mouseenter",function(){
    gsap.to("#play",{
       scale:1,
       opacity:1,
       duration:0.5,
    //    delay:0.5
    })

})
con.addEventListener("mouseleave",function(){
    gsap.to("#play",{
        opacity:0,
        scale:0,
        duration:1,
        
    })
})
con.addEventListener("mousemove",function(dets){
   gsap.to("#play",{
    top:dets.y-40,
    left:dets.x-100
   })
})
}
videocon()


function loadingh1(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.6,
        stagger:0.3,
        duration:1
    })
    gsap.from("#page1 #video-container",{
         scale:0.9,
         opacity:0,
         duration:1.2,
         delay:1.2
    })
}
loadingh1()


var a = document.querySelector("#cursor");
var b = document.querySelector("#child1");

b.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

b.addEventListener("mouseenter", function () {
  gsap.to("#cursor", {
    transform: 'translate(-50%, -50%) scale(1)',
  });
});
b.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(0)',
    })
})

var child2=document.querySelector("#child2")
var child3=document.querySelector("#child3")
var child4=document.querySelector("#child4")
child2.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });


child2.addEventListener("mouseenter",function(){
    a.style.backgroundColor="#E6E6E6"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(1)',
    })
})
child2.addEventListener("mouseleave",function(){
    a.style.backgroundColor="#F7F2EC"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(0)',
    })
})
child3.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });


child3.addEventListener("mouseenter",function(){
    a.style.backgroundColor="#E6E6E6"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(1)',
    })
})
child3.addEventListener("mouseleave",function(){
    a.style.backgroundColor="#F7F2EC"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(0)',
    })
})
child4.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });


child4.addEventListener("mouseenter",function(){
    a.style.backgroundColor="#F7F2EC"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(1)',
    })
})
child4.addEventListener("mouseleave",function(){
    a.style.backgroundColor="#F7F2EC"
    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(0)',
    })
})

function LocoAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
LocoAnimation()

function navbaranimation(){
    gsap.to("#nav-part1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
           start:"top 0",
           end:"top -10%",
           scrub:true

        }
    
    })
    
    gsap.to("#nav-part2 #links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            // markers:true,
            start:"top 0",
            end:"top -10%",
            scrub:"true"
        }
    })
}

navbaranimation()
function page3(){
  gsap.from("#page3",{
    scale:0.7,
    opacity:0,
    duration:2,
    delay:0.7,
    scrollTrigger:{
     scroller:"#main",
    //  markers:true,
     trigger:"#page3",
     top:"0 100%",
     end:"top -10%"
    }
  })
}
page3()
function page4(){
    gsap.from("#page4 .child img",{
        scale:0.4,
        duration:2,
        // delay:0.4,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top -70%"
        }
    })
}
page4()

function page5(){
  gsap.from("#page5",{
    scale:0.8,
    opacity:0,
    duration:1.5,
    // delay:0.3,
    scrollTrigger:{
     scroller:"#main",
    //  markers:true,
     trigger:"#page5",
     start:"0 70%",
     end:"top -70%"
    }
  })
}
page5()

var a1=document.querySelector("#dots1 button")
var a=document.querySelector("#dots2 button");
var b=document.querySelector("#page5 #text-con")
a1.addEventListener("click",function(){
  a1.style.backgroundColor="black"
  f.style.backgroundColor="white"
  a.style.backgroundColor="white"
  e.style.backgroundColor="white"
  c.style.backgroundColor="white"
  b.innerHTML="<h1 style='font-size:45px'>GREAT CAUSE, GREAT PEOPLE AND ABSOLUTELY GREAT FOR THE ENVIRONMENT..</h1>"
})-
a.addEventListener("click",function(){
  a.style.backgroundColor="black"
  a1.style.backgroundColor="white"
  c.style.backgroundColor="white"
  e.style.backgroundColor="white"
  f.style.backgroundColor="white"
  b.innerHTML="<h1 style='font-size: 37px;'>THANK YOU SO VERYMUCH FOR THE BEAUTIFUL GIFT PACKS; MY HEART MELTED. I NEARLY CRIED  WHEN I OPENED ONE; I CAN ONLY IMAGINE HOW THE WOMEN IN THE SHELTERS FEEL WHEN THEY RECEIVE SUCH A GIFT.</h1>"
})


var c=document.querySelector("#dots3 button")

c.addEventListener("click",function(){
  c.style.backgroundColor="black"
  a1.style.backgroundColor="white"
  a.style.backgroundColor="white"
  e.style.backgroundColor="white"
  f.style.backgroundColor="white"
  b.innerHTML="<h1 style='font-size:35px'>I WANTED TO SAY A MASSIVE THANK YOU FOR THE ABSOLUTELY BRILLIANT CATERING AT OUR TEAM OFFSITE YESTERDAY. THE FOOD WAS ABSOLUTELY MAGNIFICENT – HIGH QUALITY,FRESH AND DELICIOUS. I HAD SO MANY POSITIVE COMMENTS FROM MY TEAM...I WILLDEFINITELY BE A REPEATCUSTOMER.</h1>"
})

var e=document.querySelector("#dots4 button");
e.addEventListener("click",function(){
  e.style.backgroundColor="black"
  a1.style.backgroundColor="white"
  a.style.backgroundColor="white"
  f.style.backgroundColor="white"
  c.style.backgroundColor="white"
  b.innerHTML="<h1 style='font-size:45px'>LOVE THE QUALITY OF THE FOODAND LEVEL OF CUSTOMER SERVICEEQUALS THE 'MEANINGFULNESS'OF EVERY PURCHASE.</h1>"
})
var f=document.querySelector("#dots5 button");
f.addEventListener("click",function(){
  f.style.backgroundColor="black"
  a1.style.backgroundColor="white"
  a.style.backgroundColor="white"
  e.style.backgroundColor="white"
  c.style.backgroundColor="white"
  b.innerHTML="<h1 style='font-size:45px'>I CAN’T THANK YOU ENOUGH FOR THE AMAZING FOOD YOUR TEAM PROVIDED US TODAY. OUSTAFF COULDN’T SPEAK HIGHLY ENOUGH OF THE FISH AND THESALADS; LOOKING FORWARD TO WORKING TOGETHER MORE.</h1>"
})


gsap.from("#page6-img img",{
   opacity:0,
   duration:1.5,
   delay:0.4,
   scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    top:"0 100%",
    end:"top 10%"
   }
})
  document.addEventListener("DOMContentLoaded", function () {
    var emailInput = document.getElementById("email");

    // Add event listener for input focus
    emailInput.addEventListener("focus", function () {
      emailInput.classList.add("hide-placeholder");
    });

    // Add event listener for input blur (when it loses focus)
    emailInput.addEventListener("blur", function () {
      if (emailInput.value === "") {
        emailInput.classList.remove("hide-placeholder");
      }
    });
  });

  var email=document.querySelector("#emails")

  gsap.from("#emails",{
      opacity:0,
      duration:1.4,
      delay:0.6,
      scrollTrigger:{
        trigger:"#emails",
        scroller:"#main",
        top:"0 100%",
        end:"0 -10%"
      }
  })
  gsap.from("#page7",{
      opacity:0,
      duration:1.4,
      delay:0.6,
      scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        top:"0 100%",
        end:"0 -10%"
      }
  })

  var click = document.querySelector("#clicks")
  var front=document.querySelector("#front");
  click.addEventListener("click",function(){
     front.style.top=0;
  })