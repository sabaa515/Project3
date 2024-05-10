const divImg = document.getElementsByClassName('divImg');
const background = document.getElementsByClassName('background');
const listIcon = document.getElementById('listIcon');
const sectionName = document.getElementById('sectionName');

const t1 = new TimelineMax();

t1.fromTo(divImg, 1, {height: "0%"}, {height: "100%" ,ease: Power2.easeInOut})
   .fromTo(divImg, 1, {width:"100%"} , {width: "80%", ease: Power2.easeInOut})
   .fromTo(background, 1.2, {x: "-100%"}, {x: "0%" , ease: Power2.easeInOut}, "-=1" )
   .fromTo(listIcon , 0.5, {opacity: 0 , x : -10}, {opacity: 1, x:0}, "-=0.5")
   .fromTo(sectionName , 0.5, {opacity: 0  , x : -10}, {opacity: 1 , x : 0}, "-=0.5")
