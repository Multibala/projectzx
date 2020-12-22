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
    window.addEventListener('scroll',animOnScroll);
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
    [],//4-5
    ["materials/geography6.jpg"],//6-7
    ["materials/dtarih8.jpg","materials/ktarih9.jpg"],//8-9 
    ["materials/algebra11.jpg","materials/chemistry10.jpg","materials/physics11.jpg"]//10-11
  
];
let booksName =[
    [""],
    ["География,6 сынып"],
    ["Дүние Тарих,8 сынып","Қазақстан тарихы 9 сынып"],
    ["Алгебра,11 сынып","Химия 10 сынып","Физика 11 сынып"]
];
let description =[
    [''],
    ["Оқулық-тест мектеп бағдарламасына сай 6-сыныптан бастап 11-сыныпқа дейінгі география оқулықтарының негізінде жазылған. Тест тапсырмалары берілместен бұрын, оқулық мәтіні негізінде географиялық сипаттама беріледі. Қазақстанның физикалық географиясы курсы бойынша қажетті терминдер мен түсініктер берілген."+"\n"+
    "Географиялық білімнің маңызды екенін түсіну үшін келтірілген дәйектер жеткілікті. Сендер тіпті басқа салада жұмыс істеуді жоспарласаңдар да, қызметтерің мен өмірлеріңнің белгілі бөлігі географиялық кеңістікпен және оның ерекшеліктерін білу қажеттілігімен байланысты болады. «География» пәнінің басты міндеті – сендерге табиғи және өндірістік-аумақтық кешендер туралы білім алуға көмектесу.Географиялық білім әлеміне апарар жол қиын, әрі қызықты болмақ."],
    ["Кітап ХVI ғасырға дейінгі кемелдену тарихын толық қамтыған. Әр бөлімде адамзат тарихының кең шалқары кезең-кезеңімен суреттеледі. Адамзаттың дамуын, дүниежүзін игеруін, ықпалды мемлекеттер құруының көне дәуірден басталған қилы кезеңдерін жан-жақты зерттеп, бұлтартпас тарихи деректерді сөйлете отырып сипаттайды. Өткенін електен өткізіп, түп-тұқияннан басталған тарихын кең ауқымда білгісі келген оқырман кітаптан адамзат тарихына қатысты тың және соны деректерді молынан кездестіреді. Тарих ғылымындағы жаңа терминдер де дүниежүзі тарихына қызығатын оқырманға пайдалы болады деп сенеміз. Кітап құрылымындағы жалқыдан жалпыға және жалпыдан жалқыға алма-кезек ауысып отыратын тарихи оқиғалар желісі кітаптың ғылыми-танымдық өрісін кеңейте түседі.Тарихи танымы мен пайымын тереңдетіп, дүниежүзі тарихын зерттеп-білгісі келетін жалпы оқырманға да оқулықтың берері мол.","Оқулық Қазақстанның ХХ ғасыр мен ХХІ ғасырдың бас кезіндегі қазіргі заман тарихының неғұрлым маңызды, бетбұрыс кезеңдерін сипаттайды, өзекті оқиғаларға баға беріп, олардың себеп-салдарлық байланысын ашып көрсетеді.Қазақстанның қазіргі заман тарихы пәні басты-басты екі кезеңнен тұратыны белгілі. Оның алғашқысы кеңестік дәуірдегі Қазақстан тарихы болса, ал екінші бөлігі тәуелсіз Қазақстан тарихын құрайды. Оқырманға ұсынылып отырған оқулық осы қазіргі заманның тарихының тәуелсіздікке қатысты бөлігін әңгімелейді"],
    ["Бұл оқулық сыныпта жұмыс істеу және материалды өз бетінше зерттеу үшін жасалған. Оқулықтың теориялық материалдары мысалдар мен жаттығулардан тұрады. Мысалдардың шешімін бірінші оқылымда бірден қарастыруға болады. Жаттығулар өздігімен шешуге арналған. Жаттығулардың мақсаты – оқушыларды жаңа тақырыпты неғұрлым тиімді қабылдауға дайындау және олардың алған дағдыларын бекіту. Алдымен өз күшіңмен жаттығуларды шешуге тырысып көргеннен соң мәтіннің төменгі жағындағы шешімдеріне қарау керек. Негізгі мәтінді түсіндіретін авторлық ескертулер курсивпен берілген.","10-сыныпта металдар және бейметалдадың құрылысы мен қасиеттерін меңгеруді жалғастыру мүмкіндігіне ие боласыз. Бұл курста алған біліміңіз сізге табиғаттағы, зертханадағы, өндірістегі және күнделікті өмірдегі химиялық құбылыстарды, сонымен қатар табиғаттағы және адам ағзасындағы элементтер мен олардың қосылыстарының рөлін түсінуге көмектеседі. Бұл сыныпта жай және күрделі заттар қасиеттерінің химиялық байланыс пен кристалдық тор түріне тәуелділігін түсініп, элементтердің радиоактивтілік түсінігімен танысатын боласыз.","Жалпы білім беретін мектептің жаратылыстану-математикалық бағытындағы 11-сыныбына арналған оқулық.«Физика» оқулығы жалпы білім беретін мектептің жаратылыстану-математикалық бағытындағы 11-сыныбына арналған жаңартылған мазмұндағы үлгілік оқу бағдарламасына сəйкес жазылды. Материалдарды мазмұндауда оқытудың ғылыми ұстанымдары мен оқушылардың жас ерекшеліктері ескерілген."]
]
const canvasBook = document.querySelector(".book-content");
let array = []; 

if(canvasBook!==null){
getBooks(4);
isDone=true;

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
                btn.onclick=()=>{getDescription(content,i,j)};
                content.onclick=()=>{initContent(content,i,j)}
                array[i]=content.childNodes;
                content.append(image,span,btn);
                canvasBook.appendChild(content);

            }
        }
    }
    else {
        if(books[index].length==0){
            canvasBook.innerHTML="<h1>казир бул китаптар жок :(</h1>";
        }

        for (let i = 0; i < books[index].length; i++) {
            let content = document.createElement("div");
            content.className = "col-lg-3 col-sm-8 col-xxs book";
            let image = document.createElement('img');
            image.src = books[index][i];
            let span = document.createElement('span');
            span.innerHTML = booksName[index][i];
            let btn = document.createElement('button');
            btn.onclick=()=>{getDescription(content,index,i)};
            btn.innerHTML = "Толығырақ"
            content.append(image, span, btn);
            canvasBook.appendChild(content);
            content.onclick=()=>{initContent(content,index,j)}


        }


    }





}
 function getDescription(content,row,col){
     isDone =true;
     

    content.style.transform="scale(-1,1)"
    setTimeout(()=>{
        content.style.transform="scale(1,1)"
    },500)
    

    content.innerHTML="<div class="+'inner-text'+"><h1>"+ booksName[row][col] +"</h1>"+description[row][col]+"</div>"



 }
 function initContent(content,row,col){
    
    if(!isDone){
        content.innerHTML="";
        content.style.transform="scale(-1,1)"
        setTimeout(()=>{
            content.style.transform="scale(1,1)"
        },500)
            content.className = "col-lg-3 col-sm-8 col-xxs book";
            let image = document.createElement('img');
            image.src = books[row][col];
            let span = document.createElement('span');
            span.innerHTML = booksName[row][col];
            let btn = document.createElement('button');
            btn.onclick=()=>{getDescription(content,row,col)};
            btn.innerHTML = "Толығырақ"
            content.append(image, span, btn);
        
    }
    isDone=false;


 }
}

 
 function eventModalWindow(name="#target"){
     console.log("Hello world")
     const modalWindow = document.querySelector(name);
 
    
    if(modalWindow.classList.contains("open")){
        modalWindow.classList.remove("open");

    }
    else{
        modalWindow.classList.add("open");
    }

   

 }






