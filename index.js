let days = document.querySelector("#days");
let hour = document.querySelector("#Hr");
let minute = document.querySelector("#Min");
let seconds = document.querySelector("#Sec");
const Scroll=document.querySelector("#scroll-top");
const scrolltop=document.querySelector(".scroll-icon");


let countdown=()=>{
     let validTill  = new Date("30 august 2024");
     let fromNow = new Date();
     let offerDuration = validTill-fromNow;

     let day =Math.floor(offerDuration/1000/60/60/24);
     let hours =Math.floor(offerDuration/1000/60/60 )%24;
     let  min=Math.floor(offerDuration/1000/60)%60;
     let sec =Math.floor(offerDuration/1000)%60;

     days.innerHTML = day;
     hour.innerHTML = hours;
     minute.innerHTML = min;
     seconds.innerHTML = sec;

    }

    countdown()
    setInterval(countdown , 1000)
    
    //scroll back to top
    function scrollbacktop(){

         
         window.onscroll=function(){
          var scrollback=document.documentElement.scrollTop;
          if(scrollback>=250){
               Scroll.style.display="flex";
               scrolltop.style.display="flex";
          }else{
               Scroll.style.display="none";
               scrolltop.style.display="none";
          }
         }
         
         
     }

     scrollbacktop();