let prevbtn=document.querySelector(".btn-left");
let nextbtn=document.querySelector(".btn-right");
var container=document.querySelector(".container");
let listitemdom=document.querySelector(".container .list");
let thumnails=document.querySelector(".container .thumnails");

nextbtn.addEventListener("click",()=>{
    showclass('next');
    removeclass();
});

prevbtn.addEventListener("click",() =>{
    showclass('prev');
    removeclass();
});
function showclass(type) {

    let EachItem=document.querySelectorAll(".container .list .item");
    let EachThumnails=document.querySelectorAll(".container .thumnails .item");

    if(type==='next'){
        listitemdom.appendChild(EachItem[0]);
        thumnails.appendChild(EachThumnails[0]);
        container.classList.add('next');
    }else{
        let lastpos=EachItem.length-1;
        listitemdom.prepend(EachItem[lastpos]);
        thumnails.prepend(EachThumnails[lastpos]);
        container.classList.add('prev');
    }
};

function removeclass() {
    setTimeout(() => {
        console.log('hii');
        container.classList.remove("next");
        container.classList.remove("prev");
    },2500);   
}