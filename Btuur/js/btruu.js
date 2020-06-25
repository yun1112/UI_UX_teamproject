

function goPage(url) {
    location.href = url;
}

function detailOrder(){            
    document.getElementById('details').style.display='block';
    return false;
}
function doClose(varCheck){    
    if(varCheck=='order'){
        alert('orders');

    }                    
    document.getElementById('details').style.display='none';
    return false;
}