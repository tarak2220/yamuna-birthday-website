/* =====================================
   LOADING SCREEN
===================================== */


window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

        startCountdown();

    },3000);


});






/* =====================================
   COUNTDOWN
===================================== */


let count = 10;


function startCountdown(){


    let countdownElement =
    document.getElementById("countdown");


    let timer =
    setInterval(()=>{


        count--;


        countdownElement.innerHTML=count;



        if(count<=0){


            clearInterval(timer);



            document.getElementById(
            "countdown-screen"
            ).style.display="none";



            document.getElementById(
            "birthday-page"
            ).style.display="block";



            startCelebration();


        }



    },1000);



}







/* =====================================
   MUSIC CONTROL
===================================== */


const music =
document.getElementById("birthdayMusic");


const musicButton =
document.getElementById("music-button");



musicButton.addEventListener(
"click",
()=>{


if(music.paused){


    music.play();


    musicButton.innerHTML=
    "🔊 Music Playing";


}

else{


    music.pause();


    musicButton.innerHTML=
    "🎵 Play Music";


}


});







/* =====================================
   TYPEWRITER EFFECT
===================================== */


const text =
"May your birthday be filled with love, happiness and magical moments ❤️";



let textIndex=0;



function typeWriter(){


    if(textIndex < text.length){


        document.getElementById(
        "typing-text"
        ).innerHTML += text.charAt(textIndex);



        textIndex++;


        setTimeout(typeWriter,80);


    }



}






/* =====================================
   PHOTO SLIDESHOW
===================================== */


let slides =
document.querySelectorAll(".slide");



let slideIndex=0;



function startSlideshow(){



    setInterval(()=>{


        slides[slideIndex]
        .classList.remove("active");



        slideIndex++;



        if(slideIndex >= slides.length){

            slideIndex=0;

        }



        slides[slideIndex]
        .classList.add("active");



    },3000);



}







/* =====================================
   START ALL BASIC EFFECTS
===================================== */


function startCelebration(){


    typeWriter();


    startSlideshow();


    createBalloons();


    createHearts();


    createPetals();


    createConfetti();


    startFireworks();


}

/* =====================================
   CAKE INTERACTION
===================================== */


const cake =
document.getElementById("cake");



cake.addEventListener("click",()=>{


    const flame =
    document.querySelector(".flame");



    if(flame.style.display==="none"){


        flame.style.display="block";


        alert(
        "Make a beautiful wish 🎂✨"
        );


    }

    else{


        flame.style.display="none";


        alert(
        "Candle blown! Happy Birthday Yamuna ❤️"
        );


    }



});







/* =====================================
   GIFT OPENING
===================================== */


const gift =
document.getElementById("gift-box");


const giftMessage =
document.getElementById("gift-message");



gift.addEventListener("click",()=>{


    gift.classList.toggle("open");



    if(gift.classList.contains("open")){


        setTimeout(()=>{


            giftMessage.style.display="block";


        },800);



    }


});







/* =====================================
   SURPRISE POPUP
===================================== */


const surpriseButton =
document.getElementById("surpriseButton");



const popup =
document.getElementById("surprise-popup");



const closePopup =
document.getElementById("close-popup");




surpriseButton.addEventListener(
"click",
()=>{


    popup.style.display="flex";


    createConfetti();


});




closePopup.addEventListener(
"click",
()=>{


    popup.style.display="none";


});







/* =====================================
   CREATE BALLOONS
===================================== */


function createBalloons(){



    const container =
    document.getElementById(
    "balloon-container"
    );



    setInterval(()=>{


        let balloon =
        document.createElement("div");



        balloon.className="balloon";



        balloon.style.left =
        Math.random()*100+"%";



        balloon.style.animationDuration =
        (5+Math.random()*5)+"s";



        container.appendChild(balloon);



        setTimeout(()=>{


            balloon.remove();


        },10000);



    },700);



}








/* =====================================
   CREATE HEARTS
===================================== */


function createHearts(){



const container =
document.getElementById(
"heart-container"
);



setInterval(()=>{


let heart =
document.createElement("div");



heart.className="heart";



heart.innerHTML="❤️";



heart.style.left =
Math.random()*100+"%";



heart.style.animationDuration =
(4+Math.random()*5)+"s";



container.appendChild(heart);



setTimeout(()=>{


heart.remove();


},9000);



},500);



}








/* =====================================
   ROSE PETALS
===================================== */


function createPetals(){



const container =
document.getElementById(
"petal-container"
);



setInterval(()=>{


let petal =
document.createElement("div");



petal.className="petal";



petal.innerHTML="🌹";



petal.style.left =
Math.random()*100+"%";



petal.style.animationDuration =
(5+Math.random()*8)+"s";



container.appendChild(petal);



setTimeout(()=>{


petal.remove();


},12000);



},800);



}







/* =====================================
   CONFETTI
===================================== */


function createConfetti(){



const container =
document.getElementById(
"confetti-container"
);



for(let i=0;i<80;i++){



let piece =
document.createElement("div");



piece.className="confetti";



piece.style.left =
Math.random()*100+"%";



piece.style.top =
"-20px";



piece.style.animationDuration =
(3+Math.random()*4)+"s";



piece.style.background =
`hsl(${Math.random()*360},80%,60%)`;



container.appendChild(piece);



setTimeout(()=>{


piece.remove();


},7000);



}



}

/* =====================================
   FIREWORKS ENGINE
===================================== */


const canvas =
document.getElementById("fireworks");


const ctx =
canvas.getContext("2d");



let particles=[];



function resizeCanvas(){


    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;


}



resizeCanvas();



window.addEventListener(
"resize",
resizeCanvas
);






class Particle{


constructor(x,y,color){


    this.x=x;

    this.y=y;


    this.color=color;


    this.size=
    Math.random()*4+1;


    this.speedX=
    (Math.random()-0.5)*8;


    this.speedY=
    (Math.random()-0.5)*8;


    this.life=100;



}



update(){


    this.x += this.speedX;


    this.y += this.speedY;


    this.life -=1;



}



draw(){


    ctx.beginPath();


    ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI*2
    );


    ctx.fillStyle=this.color;


    ctx.fill();


}



}








function createFirework(x,y){



const colors=[

"#ff0054",

"#ffbe0b",

"#3a86ff",

"#8338ec",

"#06d6a0"

];



for(let i=0;i<80;i++){



particles.push(

new Particle(

x,

y,

colors[
Math.floor(
Math.random()*colors.length
)

]

)

);



}



}








function animateFireworks(){



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(
(particle,index)=>{



particle.update();



particle.draw();




if(particle.life<=0){


particles.splice(index,1);


}



});


requestAnimationFrame(
animateFireworks
);



}







animateFireworks();








function startFireworks(){



setInterval(()=>{



let x =
Math.random()*canvas.width;



let y =
Math.random()*canvas.height/2;



createFirework(x,y);



},800);



}







/* =====================================
   EXTRA TOUCH EFFECTS
===================================== */



document.addEventListener(
"mousemove",
(e)=>{


let sparkle =
document.createElement("div");



sparkle.innerHTML="✨";



sparkle.style.position="fixed";


sparkle.style.left=
e.clientX+"px";


sparkle.style.top=
e.clientY+"px";



sparkle.style.pointerEvents="none";



sparkle.style.fontSize="20px";



document.body.appendChild(
sparkle
);



setTimeout(()=>{


sparkle.remove();


},500);



});







/* =====================================
   PREVENT AUDIO ERROR
===================================== */


window.addEventListener(
"click",
()=>{


if(
music &&
music.paused
){


    music.volume=0.5;


}



},
{once:true}

);







console.log(
"🎂 Happy Birthday Yamuna Website Loaded ❤️"
);