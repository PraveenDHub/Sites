let container=document.querySelector('.container');
// for sql dummy data
let courses=[
    {course:"HTML",persent:96,color:"#eb2f06"},
    {course:"CSS",persent:50,color:"#78e08f"},
    {course:"JAVASRIPT",persent:95,color:"#c56cf0"}
];

courses.forEach((item)=>{
    container.innerHTML+= `
    <div class="progress-group">
            <div class="circular-progress">
                <span class="course-value" style="color:${item.color}">%</span>
            </div>
            <label class="text" style="color:${item.color}">${item.course}</label>
    </div>`;
});

// 3.6 is 360 degree divide by 100 == 100%
// style="background: conic-gradient(${item.color} ${3.6 * item.persent}deg, #fff 0deg);"

const progressgroup = document.querySelectorAll('.progress-group');

progressgroup.forEach((progress,index)=>{
    let progressStartvalue=0;
    let progressStartend=courses[index].persent; //progress-group == courses array
    let speed=30;
    let progressTimer=setInterval(()=>{
        progressStartvalue++;
        if(progressStartvalue == progressStartend){
          clearInterval(progressTimer);
        }
        progress.querySelector(".circular-progress").style.background = `conic-gradient(${courses[index].color} ${3.6 * progressStartvalue}deg, #fff 0deg)`;
        progress.querySelector(".course-value").innerHTML=progressStartvalue + "%";
      },speed);
});