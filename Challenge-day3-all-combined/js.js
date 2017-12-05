
var price= [55,20,67,89];
var countPrice= [0,0,0,0];
var itemtotal= [0,0,0,0];
var itemId= ["item1", "item2", "item3", "item4"];
var itemConId= ["itemCon1", "itemCon2", "itemCon3", "itemCon4"];
var itemNameId= ["itemName1", "itemName2", "itemName3", "itemName4"];
var itemName= ["PearlRing", "PeralEarring", "PearlNecklace", "PearlWristband"];
var subTotal= 0;
var shipping= 0;
var tax= 0;
var discount= 0;
var total = 0;


reCalc();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function add(x){            //add 1 item to cart
    countPrice[x]++;
    reCalc();
}
function remove(x){         //remove 1 item from cart
    countPrice[x]--;
    if (countPrice[x]<=0){countPrice[x]=0;}
    reCalc();
}
function removeItem(x){      //delete the whole item from cart
    countPrice[x]= 0;
    reCalc();
}
function removeAll() {      //delete all items from cart
    for (i=0; i<countPrice.length; i++){
        countPrice[i]= 0;
    }
    reCalc();
}


// ___________SHOPPING CART PRICES_____________
function reCalc(){
    // ___________TOTAL FOR EACH ITEM calculate and print + call "itemDisplay"___________   
    for (i=0; i<itemtotal.length; i++){
        itemtotal[i]= countPrice[i]*price[i];
        var str= price[i]+"€ "+ countPrice[i]+"x "+ itemtotal[i]+"€";
        document.getElementById(itemId[i]).innerHTML = str;
        document.getElementById(itemNameId[i]).innerHTML = itemName[i];
        itemDisplay(i);
    }

    // ___________SUBTOTAL PRICE calculate and print____________
    subTotal= 0;
    for (i=0; i<itemtotal.length; i++){
        subTotal+= itemtotal[i];
    } 
    document.getElementById("subTotal").innerHTML = subTotal+"€";

    // ___________SHIPPING PRICE calculate and print____________
    shipping= 0;
    for (i=0; i<price.length; i++){
        if (price[i]>80) {
            shipping += (6*countPrice[i]);
        }else {
            shipping += (9*countPrice[i]);  
        }
    }
    document.getElementById("shipping").innerHTML = shipping+"€";

    // ___________TAX PRICE calculate and print____________
    tax= parseInt((subTotal+shipping)*0.22);
    document.getElementById("tax").innerHTML = "Tax: " +tax+"€";

    // ___________DISCOUNT PRICE calculate and print____________
    discount= 0;
    var filler= subTotal+shipping+tax;
    if (filler<40){
        document.getElementById("discount").innerHTML = " 0%: " +discount+"€";
    }else if (filler<100){
        discount = parseInt(filler*0.07);
        document.getElementById("discount").innerHTML = " 7%: "+discount+"€";
    }else if (filler<200){
        discount = parseInt(filler*0.12);
        document.getElementById("discount").innerHTML = " 12%: " +discount+"€";
    }else {
        discount = parseInt(filler*0.15);
        document.getElementById("discount").innerHTML = " 15%: " +discount+"€";
    }

    // ___________TOTAL PRICE calculate and print____________
    total= subTotal+ shipping+ tax- discount;
    document.getElementById("total").innerHTML = total+"€";
}

    // _______  SHOW / HIDE ITEMS  (gets called from "reCalc" total for each item)__________
function itemDisplay(x){
    if (countPrice[x]<= 0){
        document.getElementById(itemConId[x]).style.display="none";
    }else {
        document.getElementById(itemConId[x]).style.display="block";
    }
}

// ________SHOW / HIDE CART______
// function display(){
//     var toggleView = document.getElementById("cart").style.display;
//         if (toggleView == "none"){
//             document.getElementById("cart").style.display="block";
//         }else {
//             document.getElementById("cart").style.display="none";
//         }
//     var toggleButton = document.getElementById("cartView").innerHTML;
//         if (toggleButton == "View Cart"){
//             document.getElementById("cartView").innerHTML="Hide Cart";
//         }else {
//             document.getElementById("cartView").innerHTML="View Cart";
//         }
// }

// Click the button to create a P element with some text, and append it to DIV
// function myCreate1() {
//     A = document.createElement("li");
//     t = document.createTextNode("Hi");
//     A.appendChild(t);
//     document.getElementById("myUl").appendChild(A);
// }