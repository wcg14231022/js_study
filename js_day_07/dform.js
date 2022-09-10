var items = 1;
function AddItem(){
    if (!document.getElementById){
        return;
    }
    div = document.getElementById("items");
    button = document.getElementById("add");
    items++;
    newitem = "<b>Qty: </b>"
    newitem += "<input type=\"text\" name=\"qty" + items;
    newitem += "\" size=\"3\"> ";
    newitem += "<b>Item: </b>";
    newitem += "<input type\"text\" name=\"item\"" + items;
    newitem += "\" size=\"45\"><br>";
    newnode = document.createElement("span");
    newnode.innerHTML = newitem;
    div.insertBefore(newnode, button);
}

function Show(a){
    if (!document.getElementById){
        return;
    }
    obj = document.getElementById("shipto");
    if (a){
        obj.style.display = "block";
    }else{
        obj.style.display = "none";
    }
}