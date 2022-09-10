var pos = 20;
function Scroll(){
    if (!document.getElementById){
        return;
    }
    obj = document.getElementById("thetext");
    pos -= 1;

    if (pos < 0 - obj.offsetHeight + 130){
        pos = 100;
        // return;
    }
    obj.style.top = pos;
    window.setTimeout("Scroll();", 30);
}
window.onload = Scroll;