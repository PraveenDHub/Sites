const boxes=document.querySelectorAll('.box');
const buttons=document.querySelectorAll('.btn');
const searchbox=document.querySelector('#Search');

searchbox.addEventListener('keyup',(e)=>{
    searchtxt=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchtxt)){
            box.style.display='flex';
        }
        else{
            box.style.display='none';
        }
    });
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    })
    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setblock(e);
        curbtn=e.target.dataset.filter;
        boxes.forEach((box)=>{
            boxname=box.dataset.item;
            if(curbtn=='all'){
                box.style.display='block';
            }else{
                part=box.dataset.item;
                if(part==curbtn){
                    box.style.display='block';
                }else{
                    box.style.display='none';
                }
            }
        })
    });
});

function setblock(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked')
    })
    e.target.classList.add('btn-clicked')
}