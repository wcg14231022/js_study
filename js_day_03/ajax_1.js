var ajaxreq = false, ajaxCallback;
function ajaxRequest(filename){
    try{
        ajaxreq = new XMLHttpRequest();
    }catch (error){
        try{
            ajaxreq = new ActiveXObject("Microsoft.XMLHttp");
        }catch (error){
            return false;
        }
    }
    ajaxRequest.open("GET", filename);
    ajaxRequest.onreadystatechange = ajaxResponse;
    ajaxRequest.send(null);
}

function ajaxResponse(){
    if (ajaxreq.readyState != 4){
        return;
    }
    if (ajaxreq.status == 200){
        if (ajaxCallback){
            ajaxCallback();
        }else{
            alert("Request failed: " + ajaxreq.statusText);
        }
        return true;
    }
}