const containerEl=document.getElementById("container");
const btnAdd=document.getElementsByClassName("btn-add")[0];

function getjsontext(){
    return JSON.parse(localStorage.getItem("joes-app") || "[]");
};

getjsontext().forEach(element => {
    const text=createtextarea(element.id,element.content);
    containerEl.insertBefore(text,btnAdd);
});

function updatevalue(id,content){
    const notes=getjsontext();
    const value=notes.filter((note)=>note.id==id)[0];
    value.content=content;
    savednotes(notes);
}

function deletetextarea(id,textareaEl){
    const notes=getjsontext().filter((note)=>note.id!=id);
    savednotes(notes);
    containerEl.removeChild(textareaEl);
}

function createtextarea(id,content){
    const textareaEl=document.createElement("textarea");
    textareaEl.classList.add("sticky");
    textareaEl.value=content;
    textareaEl.placeholder="Enter Ur Notes";

    textareaEl.addEventListener("change",()=>updatevalue(id,textareaEl.value));

    textareaEl.addEventListener("dblclick",()=>{
        if(confirm("Are you sure to delete!!")){
            deletetextarea(id,textareaEl);
        }
    });
    return textareaEl;
};

btnAdd.addEventListener("click",()=>addsticky());

function addsticky(){
    const notes=getjsontext();
    const obj={
        id : Math.floor(Math.random()*100000),
        content : ""
    }
    const add=createtextarea(obj.id,obj.content);
    containerEl.insertBefore(add,btnAdd);
    notes.push(obj);
    savednotes(notes);
};

function savednotes(notes){
    localStorage.setItem("joes-app",JSON.stringify(notes));
}