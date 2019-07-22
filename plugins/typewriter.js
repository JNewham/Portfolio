// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 10;
//
// export default function typeWriter() {
// if (i < txt.length) {
//   document.getElementById("demo").innerHTML += txt.charAt(i);
//   i++;
//   setTimeout(typeWriter, speed);
// }
// }
// console.log("This is an example")



var i = 0;
 var w = window.matchMedia("(min-width: 768px)");
 var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
 var speed = 50;
 function typeWriter() {
     if (i < txt.length) {
         document.getElementById("text").innerHTML += txt.charAt(i);
         i++;
         setTimeout(typeWriter, speed);
     }
     else{
         rep(w);
         w.addListener(rep);
     }
 }
 function rep(w) {
     if (w.matches) {
         setTimeout(function(){
             i = 0;
             speed = 50;
             document.getElementById("text").innerHTML = '';
             setTimeout(typeWriter, speed);
         }, 5000);
     }
 }
typeWriter();
})
