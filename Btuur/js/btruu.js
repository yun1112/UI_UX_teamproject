

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

var allChecked = true;

function allCheck(checkboxName) {
        
    // for (var i = 0; i < obj.length; i++) {
    for (var i = 1; i < 8; i++) {
        var checkboxNameNo = checkboxName;
        checkboxNameNo+=i;
        // alert(checkboxNameNo);
        var obj = document.getElementsByName(checkboxNameNo);
        // alert(obj);
        // alert(obj[0]);
        obj[0].checked = allChecked;        
    }
    allChecked = !allChecked;
    
}

function addCheckedItemsToCart() {
    
    var obj1 = document.getElementsByName('checkbox1');
    var obj2 = document.getElementsByName('checkbox2');
    var obj3 = document.getElementsByName('checkbox3');
    var obj4 = document.getElementsByName('checkbox4');
    var obj5 = document.getElementsByName('checkbox5');
    var obj6 = document.getElementsByName('checkbox6');
    var obj7 = document.getElementsByName('checkbox7');

    if(obj1[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.1.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj1[0].checked = false;
    }
    if(obj2[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.2.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj2[0].checked = false;
    }
    if(obj3[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.3.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj3[0].checked = false;
    }
    if(obj4[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.4.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj4[0].checked = false;
    }
    if(obj5[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.5.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj5[0].checked = false;
    }
    if(obj6[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.6.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj6[0].checked = false;
    }
    if(obj7[0].checked){
        var temp = document.createElement('li');                        
        temp.innerHTML = '<img class="imgstyle" src="./images/1.7.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj7[0].checked = false;
    }
}
