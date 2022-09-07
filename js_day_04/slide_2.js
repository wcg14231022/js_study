var numslides = 0;
var currentslide = 0, oldslide = 4;
var x = 0;
var slides = new Array();

function MakeSlideShow(){
    imgs = document.getElementsByTagName("img");
    for (i = 0; i < imgs.length; i++){
        if (imgs[i].className != "slide"){
            continue;
        }
        slides[numslides] = imgs[i];
        if (numslides == 0){
            imgs[i].style.zIndex = 10;
        }else{
            imgs[i].style.zIndex = 0;
        }
        imgs[i].onclick = NextSlide;
        numslides++;
    }
}

function NextSlide(){
    slides[currentslide].style.zIndex = 9;
    slides[oldslide].style.zIndex = 0;
    oldslide = currentslide;
    currentslide++;
    if(currentslide >= numslides){
        currentslide = 0;
    }
    slides[currentslide].style.left = 500;
    x = 500;
    slides[currentslide].style.zIndex = 10;
    AnimateSlide();
}

function AnimateSlide(){
    x -= 25;
    slides[currentslide].style.left = x;
    slides[oldslide].style.left = x - 500;
    if (x > 0){
        window.setTimeout("AnimateSlide();", 10);
    }
}

window.onload = MakeSlideShow;