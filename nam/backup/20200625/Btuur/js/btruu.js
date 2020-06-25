
//객체 생성

function Product(no, name, price, option, count) {

    this.no = no;
    this.name = name;
    this.price = price;
    this.option = option;
    this.count = count;
}

var ourProducts = [];
var btruuCart = [];
var bitOption1 = 1;
var bitOption2 = 2;
var bitOption3 = 4;


function initData() {
    ourProducts.push(new Product(1, '녹차가맛있는우유', 2000, 0, 0));
    ourProducts.push(new Product(2, '딸기딸기대작전', 2000, 0, 0));
    ourProducts.push(new Product(3, '악동쿠크무스', 2000, 0, 0));
    ourProducts.push(new Product(4, '치즈치즈오렌지', 2000, 0, 0));
    ourProducts.push(new Product(5, '요거요거블루베리', 2000, 0, 0));
    ourProducts.push(new Product(6, '정열의훌라망고', 2000, 0, 0));
    ourProducts.push(new Product(7, '프렌치아포가토', 2000, 0, 0));
    console.log(ourProducts);
}

function addToCart(no, option) {

    var find = false;
    for (var i = 0; i <= btruuCart.length - 1; i++) {
        if ((no == btruuCart[i].no) && (option == btruuCart[i].option)) {
            btruuCart[i].count++;
            console.log('find!');
            find = true;
            break;
        }
        var log = 'searching....>' + i;
        console.log(log);
    }

    if (!find) {
        btruuCart.push(new Product(no, ourProducts[no - 1].name, ourProducts[no - 1].price, option, 1));
        console.log(ourProducts);
        console.log(btruuCart);
    }

    saveLocalStoragebyJSON();
}


function loadLocalStoragebyJSON() {
    var getJsdata = localStorage.getItem("btruuCart");
    btruuCart = JSON.parse(getJsdata); // JSON 형식의 문자열을 자바스크립트 객체로 변환함.
}

function saveLocalStoragebyJSON() {
    setJsdata = JSON.stringify(btruuCart);
    console.log(setJsdata);
    localStorage.setItem("btruuCart", setJsdata);
}

function goPage(url) {
    location.href = url;
}

function detailOrder(no) {
    document.getElementById('details').style.display = 'block';

    var get = document.getElementById('detailOrderImg');

    get.innerHTML = '<img class="imgstyle" src="./images/1.' + no + '.PNG">';
    
    // get.innerHTML += '<br><br><ul><li><input name="option1" type="checkbox" class="options_chk">씨리얼</li>';
    // get.innerHTML += '<li><input name="option2" type="checkbox" class="options_chk">초코칩</li>';
    // get.innerHTML += '<li><input name="option3" type="checkbox" class="options_chk">견과류</li>';
    

    get.innerHTML += '<br><br><input name="option1" type="checkbox" class="options_chk">씨리얼';
    get.innerHTML += '<br><input name="option2" type="checkbox" class="options_chk">초코칩';
    get.innerHTML += '<br><input name="option3" type="checkbox" class="options_chk">견과류';
    

    get.innerHTML += '<br><br><input type="button" class="btnStyle" value="   Select   " onclick="detailOderClose(\'order\',' + no + ')">';
    get.innerHTML += '     <input type="button" class="btnStyle" value="   Cancel   " onclick="detailOderClose(\'\')">';

    console.log('detailOrder');

    return false;
}

//상세 주문 메서드
function detailOderClose(varCheck, varNo) {
    if (varCheck == 'order') {
        // alert('orders');

        var checkboxNameNo = 'checkbox';
        checkboxNameNo += varNo;
        // alert(checkboxNameNo);
        var obj = document.getElementsByName(checkboxNameNo);
        // alert(obj);
        // alert(obj[0]);

        var optionVar="(옵션 : ";
        

        var o1 = document.getElementsByName('option1');
        var o2 = document.getElementsByName('option2');
        var o3 = document.getElementsByName('option3');

        var option = 0;
        console.log(o1);
        console.log(o2);
        console.log(o3);

        console.log(o1[0].checked);
        console.log(o2[0].checked);
        console.log(o3[0].checked);

        if (o1[0].checked) {
            option += bitOption1;
            optionVar += "씨리얼 "
        }

        if (o2[0].checked) {
            option += bitOption2;
            optionVar += "초코칩 "
        }

        if (o3[0].checked) {
            option += bitOption3;
            optionVar += "견과류 "
        }

        if(option == 0){
            optionVar = "";
        }
        else {
            optionVar += ")";
        }



        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.' + varNo + '.PNG">';
        
        // temp.innerHTML += '</li><li>'+optionVar;
        temp.innerHTML += optionVar;
        
        document.getElementById('cart').append(temp);


        
        // alert(option);


        addToCart(varNo, option); 
    }

    document.getElementById('details').style.display = 'none';
    return false;
}

var allChecked = true;

function allCheck(checkboxName) {

    // for (var i = 0; i < obj.length; i++) {
    for (var i = 1; i < 8; i++) {
        var checkboxNameNo = checkboxName;
        checkboxNameNo += i;
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

    if (obj1[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.1.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj1[0].checked = false;

        addToCart(1, 0);
    }
    if (obj2[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.2.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj2[0].checked = false;

        addToCart(2, 0);
    }
    if (obj3[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.3.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj3[0].checked = false;

        addToCart(3, 0);
    }
    if (obj4[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.4.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj4[0].checked = false;

        addToCart(4, 0);
    }
    if (obj5[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.5.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj5[0].checked = false;

        addToCart(5, 0);
    }
    if (obj6[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.6.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj6[0].checked = false;

        addToCart(6, 0);
    }
    if (obj7[0].checked) {
        var temp = document.createElement('li');
        temp.innerHTML = '<img class="imgstyle" src="./images/1.7.PNG"></li>';
        document.getElementById('cart').append(temp);
        obj7[0].checked = false;

        addToCart(7, 0);
    }
}

function addOrderList() {
    loadLocalStoragebyJSON();
    var get = document.getElementById('orders');

    console.log('addOrderList');
    console.log(btruuCart);

    get.innerHTML = '<div>';
    for (var i = 0; i <= btruuCart.length - 1; i++) {

        var sum=0;
        var optionReceipt="";

        if (btruuCart[i].option != 0) {
            optionReceipt = "( ";

            if (btruuCart[i].option & bitOption1) {
                optionReceipt += "씨리얼 ";
                sum+=500;
            }

            if (btruuCart[i].option & bitOption2) {
                optionReceipt += "초코칩 ";
                sum+=500;
            }

            if (btruuCart[i].option & bitOption3) {
                optionReceipt += "견과류 ";
                sum+=500;
            }

            optionReceipt += ")";

        }

        sum+=(btruuCart[i].count*btruuCart[i].price);
        get.innerHTML += '<img class="imgstyleOrderList" src="./images/1.' + btruuCart[i].no + '.PNG">';
        get.innerHTML += '　' + btruuCart[i].name + ' ';
        get.innerHTML += ' ' + optionReceipt;
        get.innerHTML += '<br>　　　　　　　　　x ' + btruuCart[i].count + 'ea';
        get.innerHTML += ' : ' + sum + '원<br><hr width=80%; style="border: dashed 1px rgb(252, 173, 177);">';
    }
     
    get.innerHTML += '</div>';



    // get.innerHTML = '<table border=1>';
    // for(var i=0; i<=btruuCart.length-1;i++){        
    //     get.innerHTML += '<tr><td><img class="imgstyle" src="./images/1.' + btruuCart[i].no + '.PNG"></td>';
    //     get.innerHTML += '<td>'+btruuCart[i].name+'</td>';
    //     get.innerHTML += '<td>'+btruuCart[i].option+'</td>';
    //     get.innerHTML += '<td>'+btruuCart[i].count+' EA </td>';
    //     get.innerHTML += '<td>'+btruuCart[i].price+'</td></tr>';
    // }
    // get.innerHTML += '</table>';

}

function addReceiptList() {
    loadLocalStoragebyJSON();
    var get = document.getElementById('receiptList');

    console.log('addReceiptList');
    console.log(btruuCart);

    // get.innerHTML = '<div><br>주문내역</div><br><br><hr width=90%><br><div class="receiptStyle">';
    get.innerHTML = '<br>';
    
    var total=0;
    var sum=0;

    get.innerHTML += '번호표 : 789 번<br><br><hr  style="border: dashed 1px rgb(252, 173, 177);"><br>';

    for (var i = 0; i <= btruuCart.length - 1; i++) {

        var optionReceipt="";

        if (btruuCart[i].option != 0) {
            optionReceipt = "( ";

            if (btruuCart[i].option & bitOption1) {
                optionReceipt += "씨리얼 ";
                total += 500;
            }

            if (btruuCart[i].option & bitOption2) {
                optionReceipt += "초코칩 ";
                total += 500;
            }

            if (btruuCart[i].option & bitOption3) {
                optionReceipt += "견과류 ";
                total += 500;
            }

            optionReceipt += ")";

        }

        sum = (btruuCart[i].price * btruuCart[i].count);
        get.innerHTML += btruuCart[i].name + ' ';
        get.innerHTML += ' ' + optionReceipt;
        get.innerHTML += '<br>　　　　　　　　　x ' + btruuCart[i].count + 'ea';        
        get.innerHTML += ': ' + sum + '원<br>';
        total += sum;

    }
    get.innerHTML += '<br><hr  style="border: dashed 1px rgb(252, 173, 177);"><br><div>총 액 : '+total+'원<br><br>';
    get.innerHTML += '</div>';

}
