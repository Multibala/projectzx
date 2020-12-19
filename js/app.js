function onClick(message){
    window.open(message);


}
let a = document.querySelector(".owl-dots")
let dots =[];
let images = ["materials/image-1.jpg","materials/image-2.jpg","materials/image-3.jpg","materials/image-4.jpg","materials/image-5.jpg"];
for (let i = 0; i <=4 ; i++) {
    dots[i]=a;
    a=a.nextElementSibling;

}

count=0;
const img = document.createElement("img");
img.src=images[0];
const bck = document.querySelector(".bck-photos");
let child = document.querySelector(".dots");
bck.removeChild(child);
bck.appendChild(img);
bck.appendChild(child)

function dotsClick(index){
    let current;
    for (let i = 0; i <5 ; i++) {
        if(index===i){
            current=dots[i];
        }
        if(dots[i].classList.contains("active")){
            dots[i].className="owl-dots"
        }
    }
    img.src=images[index];
    current.classList.add("active");
}
const animItems = document.querySelectorAll(".anim-items");

if(animItems.length>0){
    animOnScroll();
    function animOnScroll(){
        for (let i = 0; i <animItems.length ; i++) {
            const animItem = animItems[i];
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset =offset(animItem).top;
            const animStart =4;

            let animItemPoint =window.innerHeight - animItemHeight/animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint =window.innerHeight - window.innerHeight/animStart;
            }
            if((pageXOffset>animItemOffset - animItemPoint) && pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add("_active")
            }else{
                animItem.classList.remove("_active")
            }

        }
    }
    function offset(el){
        const rect =el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top:rect.top + scrollTop,left:rect.left +scrollLeft
        }
    }
}
setTimeout(showText,1500);


function showText(){

}
/*
YERKIN JAVASCRIPT
 */
// all = function(){
//     var to = document.getElementById("all");
//     console.log("ok");
//     document.getElementById("all").style.display = "flex";
//     document.getElementById("four").style.display = "flex";
//     document.getElementById("six").style.display = "flex";
//     document.getElementById("eight").style.display = "flex";
//     document.getElementById("ten").style.display = "flex";
//     to.style.display = "flex";
// }
// function four(){
//     var to = document.getElementById("four");
//     document.getElementById("all").style.display = "none";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("six").style.display = "none";
//     document.getElementById("eight").style.display = "none";
//     document.getElementById("ten").style.display = "none";
//     to.style.display = "flex";
// }
// function six(){
//     var to = document.getElementById("six");
//     document.getElementById("all").style.display = "none";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("six").style.display = "none";
//     document.getElementById("eight").style.display = "none";
//     document.getElementById("ten").style.display = "none";
//
//     to.style.display = "flex";
// }
// function eight(){
//     var to = document.getElementById("eight");
//     document.getElementById("all").style.display = "none";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("six").style.display = "none";
//     document.getElementById("eight").style.display = "none";
//     document.getElementById("ten").style.display = "none";
//     to.style.display = "flex";
// }
// function ten(){
//     var to = document.getElementById("ten");
//     document.getElementById("all").style.visibility = "hidden";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("six").style.display = "none";
//     document.getElementById("eight").style.display = "none";
//     document.getElementById("ten").style.display = "none";
//     to.style.display = "flex";
// }


///bitty .....
