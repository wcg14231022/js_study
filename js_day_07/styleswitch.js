function Style(n, enable){
    if (!document.getElementsByTagName){
        return;
    }
    links = document.getElementsByTagName("link");
    links[n].disabled = !enable;
    links[1 - n].disabled = true;
}

Style(0, true);