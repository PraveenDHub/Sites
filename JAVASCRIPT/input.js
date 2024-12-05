const input=document.querySelector('input');
const tag_part=document.querySelector('.tag-container');
const closeall=document.querySelector("#claerAll");
const btncopy=document.querySelector("#copy");
//queryselector not apply in javascript dymic class it's only static
//if dynamic then go to getelementbyid,getelementsbyclass == dynamic

let tags=[];

closeall.addEventListener("click",()=>{
    tags=[];
    clrAlltags();
    console.log(tags);
});

function clrAlltags(){
    tagElement=document.querySelectorAll('.tag');
    tagElement.forEach(tag =>{
        tag.parentElement.removeChild(tag);
    });
};

/*<div class="tag">
                <span>HTML</span>
                <ion-icon name="close-circle-outline"></ion-icon>
            </div>
           
*/

function addtags(arr){
    clrAlltags();
    arr.forEach(element => {
        tag_part.insertBefore(createDiv(element),input); // div
    });
}

input.addEventListener('keyup',(e)=>{
    if(e.key =="Enter"){
        let data=input.value.trim();
        if(data.includes(",")){
            let list_tag=data.split(",");
            //    list_tag.forEach(element =>{
            //        tags.push(createDiv(element));
            //    })
            tags.push(...list_tag);
        }else{
            //const div=createDiv(data);
            //console.log(div);
            tags.push(data);
        }
        tags=[...new Set(tags)];
        input.value="";
        addtags(tags);
    }
});


function createDiv(tag){
    const div=document.createElement('div');
    div.setAttribute("class","tag");
    const span=document.createElement('span');
    span.innerText=tag;
    let icon=document.createElement('ion-icon');
    icon.setAttribute("name","close-circle-outline");
    icon.setAttribute("data-item",tag);
    div.appendChild(span);
    div.appendChild(icon);
    return div;
}

document.addEventListener("click",(e)=>{
    if(e.target.tagName == "ION-ICON"){
        const data=e.target.getAttribute("data-item"); //css
        tags=tags.filter(tag =>{
           return tag!=data
        });
        console.log(tags);
        //tags=tagElement;
        addtags(tags);
    }
});

btncopy.addEventListener("click",()=>{
    if(tags.length){
        navigator.clipboard.writeText(tags.toString()).then(()=>{
            alert("Copied To Clipboard.");
        }).catch(()=>{
            console.error("Failed to copy",error);
        });
    };
});