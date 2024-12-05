const context=document.querySelector('.context-menu');

function menu(show=true){
    context.style.display= show ? 'block':'none';
}

window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    menu();
    const topY=e.y + context.offsetHeight > window.innerHeight ? window.innerHeight-context.offsetHeight : e.y;
    const leftX=e.x + context.offsetWidth > window.innerWidth ? window.innerWidth - context.offsetWidth : e.x;
    context.style.top=topY+"px";
    context.style.left=leftX+"px"; 
});

window.addEventListener("click",()=>{
    menu(false)
});