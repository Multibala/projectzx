function onClick(message){
    window.open(message);


}
let a = document.querySelector(".owl-dots")
if(a!==null){
let dots =[];
let images = ["materials/image-1.jpg","materials/image-2.jpg","materials/image-3.jpg","materials/image-4.jpg","materials/image-5.jpg"];
for (let i = 0; i <=4 ; i++) {
    dots[i]=a;
    a=a.nextElementSibling;

}

currentIndex = 0;
const img = document.createElement("img");
img.src=images[0];
const bck = document.querySelector(".bck-photos");
let child = document.querySelector(".dots");
bck.removeChild(child);
bck.appendChild(img);
bck.appendChild(child)
setInterval(function(){ 
    dotsClick(currentIndex)

}
    ,3000);

function dotsClick(index){
    currentIndex = index;
    currentIndex++;
    console.log(index)
    for (let i = 0; i <5 ; i++) {
        if(index===i){
            current=dots[i];
        }
        if(dots[i].classList.contains("active")){
            dots[i].className="owl-dots"
        }
    }
    if(currentIndex===5){
        currentIndex=0
    }
    img.src=images[index];
    current.classList.add("active");
}
}
const animItems = document.querySelectorAll(".anim-items");

if(animItems.length>0){
    animOnScroll();
    function animOnScroll(){
        for (let i = 0; i <animItems.length ; i++) {
            const animItem = animItems[i];
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
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


// Basylymdar js



let books =[
    ["materials/physics10.jpg"],
    ["materials/physics10.jpg"],
    ["materials/physics10.jpg"],
    ["materials/physics10.jpg"]
  
];
let booksName =[
    ["Физика,10 сынып"],
    ["Физика,10 сынып"],
    ["Физика,10 сынып"],
    ["Физика,10 сынып"]
];
let description =[
    ["some text"],
    ["some text"],
    ["some text"],
    ["some text"]
]
const canvasBook = document.querySelector(".book-content");
if(canvasBook!==null){
getBooks(4);

function getBooks(index){
    /*
    div
    img
    span
    button

     */

   canvasBook.innerHTML="";

    if(index===4){
        for (let i = 0; i <4 ; i++) {
            for (let j = 0; j <books[i].length ; j++) {
                let content = document.createElement("div");
                content.className="col-lg-3 col-sm-8 col-xxs book";
                let image = document.createElement('img');
                image.src=books[i][j];
                let span =document.createElement('span');
                span.innerHTML = booksName[i][j];
                let btn =document.createElement('button');
                btn.innerHTML="Толығырақ"
                btn.addEventListener('click', getDescription(content,i,j));
                content.append(image,span,btn);
                canvasBook.appendChild(content);

            }
        }
    }
    else {

        for (let i = 0; i < books[index].length; i++) {
            let content = document.createElement("div");
            content.className = "col-lg-3 col-sm-8 col-xxs book";
            let image = document.createElement('img');
            image.src = books[index][i];
            let span = document.createElement('span');
            span.innerHTML = booksName[index][i];
            let btn = document.createElement('button');
            btn.addEventListener('click', getDescription(content,index,i));
            btn.innerHTML = "Толығырақ"
            content.append(image, span, btn);
            canvasBook.appendChild(content);
            content.addEventListener('click', initContent(content,content.childNodes));


        }


    }





}
 function getDescription(content,row,col){
    content.style.transform="scale(-1,1)"
    content.innerHTML="<h1>"+booksName[row][col]+"</h1>"+description[row][col]




 }
 function initContent(content,childs){
    if(childs.length<=2){
        content.innerHTML="";
        content.style.transform="scale(-1,1)"
        for(let i=0;i<childs.length;i++){
            content.appendChild(childs[i]);
        }
    }


 }
}

 const modalWindow = document.querySelector("#target")
 function eventModalWindow(){
     console.log("Hellow world")
    
    if(modalWindow.classList.contains("open")){
        modalWindow.classList.remove("open");

    }
    else{
        modalWindow.classList.add("open");
    }

   

 }






