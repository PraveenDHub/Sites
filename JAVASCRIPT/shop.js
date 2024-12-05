const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent()
};

function loadContent(){
    //remove Food Items from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    //quantity add for this
    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((inputs)=>{
        inputs.addEventListener('change',changeQty);
    });

    //Now Create add to cart count
    let cartbtns=document.querySelectorAll('.add-cart');
    cartbtns.forEach((cbtn)=>{
        cbtn.addEventListener('click',addCart);
    });
    updateTotal();
};

function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent()
};

function removeItem(){
    if(confirm('Are You Sure to Remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemLists=itemLists.filter((el)=>el.title!=title)
        this.parentElement.remove();
        loadContent()
    }
};

let itemLists=[];//arrray store cart if already exit means

function addCart(){
    let food=this.parentElement;//whole info
    let title=food.querySelector('.food-title').innerHTML;//title for this food
    let price=food.querySelector('.food-price').innerHTML;//price also
    let imgSrc=food.querySelector('.food-img').src;//img src address

    let newcheck={title,price,imgSrc};
    //check product already exits in cart..
        if(itemLists.find((el)=>el.title==newcheck.title))
        {
            alert('Product Food Already Added in cart')
            return;
        }
        else{
            itemLists.push(newcheck);
        }

    let newProductElement=createCartProduct(title,price,imgSrc);
    let element=document.createElement('div');
    element.innerHTML=newProductElement;

    let cartbasket=document.querySelector('.cart-content');
    cartbasket.append(element);
    loadContent()
}

//tutor 9043017689
function createCartProduct(title,price,imgSrc){

    return `
    <div class="cart-box">
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
                <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>`
};

function updateTotal(){
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValues=document.querySelector('.total-price');

    let tot=0;

    cartItems.forEach((product)=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-quantity').value;

        tot+=(price*qty);

        product.querySelector('.cart-amt').innerHTML="Rs."+(price*qty);
    })
    totalValues.innerHTML="Rs."+tot;

    //shop count number icon
    let Zerocount=document.querySelector('.cart-count');
    let count=itemLists.length;

    Zerocount.textContent=count;

    if(count==0)
    {
        Zerocount.style.display='none';
    }
    else{
        Zerocount.style.display='block';
    }
};