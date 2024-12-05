const form=document.getElementById('form');
const username=document.getElementById('Username');
const email=document.getElementById('Email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// not == inbuild function redimade
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};

function checkdetails(inputs){
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            //error
            errorinput(input,`${getid(input)} is Required`);
        }else{
            //success
            successinput(input);
        }
    });
}

function getid(input){
    return input.id;
}

function errorinput(input,msg){
    const formgroup=input.parentElement;
    formgroup.className="frm-group error";
    let p=formgroup.querySelector('p');
    p.innerHTML=`${msg}`;
}

function successinput(input){
    const formgroup=input.parentElement;
    formgroup.className="frm-group success";
    const p=formgroup.querySelector('p');
    p.innerHTML="";
}

function checklimit(input,min,max){
    if(input.value.trim().length < min){
        errorinput(input,`${getid(input)} must be greater than ${min}`);
    }else if(input.value.trim().length > max){
        errorinput(input,`${getid(input)} must be lesser than ${max}`);
    }else{
        successinput(input);
    }
}

 function ismatch(pass1,pass2){
    if(pass1.value!=pass2.value){
        errorinput(pass2,`${getid(pass1)} does not match confirm `)
    }
 }

 function checkalpha(input){
    if(!input.value.trim().isAlpha()){
        errorinput(input,`${getid(input)} must be Alphabet`)
    }
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkdetails([username,email,password,password2])
    checklimit(username,5,10);
    checklimit(password,4,10);
    ismatch(password,password2);
    checkalpha(username);
})