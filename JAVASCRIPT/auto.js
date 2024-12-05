const suggestbox=document.querySelector(".suggest-box");
const inputbox=document.querySelector("#search-text");
console.log(suggestbox);
inputbox.addEventListener("keyup",matchtext);

async function matchtext(){
    const response= await fetch("./Dataset.json");
    const KeywordsList= await response.json();
    let suggest = [];
    let input = this.value.trim();

    if(input.length){
        suggest = KeywordsList.filter((item)=>{
            return item.search.toLowerCase().includes(input.toLowerCase())
        });
        display(suggest);
    }


    if(suggestbox.length==null){
        suggestbox.innerHTML="";
    }
};

function display(suggest){
    const content=suggest.map((item)=>{
        return `<li onclick="setvalue(this)">${item.search}</li>`;
    });
    suggestbox.innerHTML=`<ul>${content.join("")}</ul>`;
    console.log(suggestbox);
}

function setvalue(that){
    inputbox.value=that.innerHTML;
}

inputbox.addEventListener("click",()=>{
    inputbox.select();
});