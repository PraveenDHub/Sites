document.addEventListener('DOMContentLoaded',loadcontent);

function loadcontent(){
    loadEvent();
}

function loadEvent() {
    var shop = document.querySelector('#bag');
    var close = document.querySelector('#closex');
    var cart= document.querySelector('.cart');
    var basecart = document.querySelectorAll('.base-cart');
    var trash = document.querySelectorAll('.trash');
    trash.forEach((item)=>{
        item.addEventListener('click',removecartitem);
    });
    
    shop.addEventListener('click',()=>{
        cart.classList.add('active');
    });

    close.addEventListener('click',()=>{
        cart.classList.remove('active');
    });
    totalprice();

    
    basecart.forEach(element => {
        element.addEventListener('click',addtocart);
    });
}


var itemlist = [];

function addtocart() {
    let currentbox = this.parentElement;
    let src=currentbox.querySelector('.img img').src;
    let title=currentbox.querySelector('.box-title').innerHTML;
    let price=currentbox.querySelector('.box-price').innerHTML;
    let item = {src,title,price};
    //loadEvent(); inga kudhuthadhuku enaku waste of time last item in cart trash not work
    totalprice();

    if(itemlist.find(li =>li.title == item.title)){
        alert("You already have this item in your cart");
        return;
    }
    else{
        itemlist.push(item);
    }

    let cartitem = document.createElement('div');
    cartitem.innerHTML = creatediv(src,title,price);
    let cartcontainer = document.querySelector('.cart-container');
    cartcontainer.append(cartitem);
    loadEvent();
    var inputqty = document.querySelectorAll('.input-qty');

    inputqty.forEach(input => {
        input.addEventListener('change',qtychange);
    });

}

function qtychange() {
    if(isNaN(this.value) || this.value <= 0) {
        this.value = 1;
    }
    totalprice();
}

function creatediv(src,title,price) {


    
    return  `
    <div class="cart-box">
            <div class="pic">
                <img src="${src}" alt="no" class="cart-img">
            </div>
            <div class="cart-details">
                    <div class="cart-title">${title}</div>
                    <div class="cart-price">
                        <div class="cart-amt">${price}</div>
                         <div class="cart-qty">${price}</div>
                    </div>
                    <input type="number" class="input-qty" value="1"/>
            </div>
            <ion-icon name="trash-outline" class="trash"></ion-icon>
    </div>
            `;
}


function removecartitem() {
    if(confirm("Are you sure want to remove")){
        let ctitle = this.parentElement.querySelector('.cart-title').innerHTML;
        itemlist = itemlist.filter(value => value.title != ctitle);
        this.parentElement.parentElement.remove();
    }
    totalprice();
}

function totalprice() {
    let total=0;
    let totaltxt = document.querySelector(".total");
    let cartitems = document.querySelectorAll('.cart-box');
    
    cartitems.forEach(item =>{
        let priceElement = item.querySelector('.cart-amt');
        let qtyElement = item.querySelector('.cart-qty');
        let inputValue = item.querySelector('.input-qty').value;
        let price = parseFloat(priceElement.innerHTML.replaceAll("Rs.",""));
        qtyElement.innerText = "Rs."+(inputValue*price);
        total += inputValue*price;
    });

    totaltxt.innerHTML =   `<span>Total</span> Rs.${total}`;

    let count = document.querySelector('.bag-count');

    if(itemlist.length){
        count.style.display = "block";
    }else{
        count.style.display = "none";
    }
    let len = itemlist.length;
    count.innerHTML = len;
}

