document.addEventListener('DOMContentLoaded',()=>{
    const menu=document.querySelector(".menu-bar");
    const slider=document.querySelector(".slider");
    const close=document.querySelector(".close");

    const product=document.querySelector(".product")
    const user=document.querySelector(".user");

    menu.addEventListener("click",()=>{
        slider.classList.add("active");
        menu.style.visibility='hidden';
    });
    
    close.addEventListener("click",()=>{
        slider.classList.remove("active");
        menu.style.visibility='visible';
    });

    let subanchar=document.querySelectorAll(".subanchar");
    subanchar.forEach(item =>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            const container=document.getElementById(item.dataset.container);
            let arrow=item.querySelector(".dropdown");
            arrow.classList.toggle("rotate");
            container.classList.toggle("active");
            //if(!container.classList.contains("active")){
              //  let arrow=item.querySelector(".dropdown");
                //arrow.classList.add("rotate");
                //container.classList.add("active");
            //}else{
              //  arrow.classList.remove("rotate");
                //container.classList.remove("active");
            //};
        });
    })
});



