//Yerkin js

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
const canvasBook =document.querySelector(".book-content");
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
            btn.innerHTML = "Толығырақ"
            content.append(image, span, btn);
            canvasBook.appendChild(content);


        }


    }





}
