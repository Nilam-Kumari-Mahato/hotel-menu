let count1=0;
let count2=0;
let count3=0;
let count5=0;
let count6=0;
let count7=0;
let count8=0;
let count9=0;
let count10=0;
let list=[];

let added=document.getElementById("addtolist");


function addtolist() {
    for(let i=0;i<list.length;i++){
        added.innerHTML+=`<li>${list[i]}</li>`;
    }
}

function addsouth() {
    count1++;
    list[0]=`${count1} South Indian Thali`;

}
function addpaneer() {
    count2++;
    list[1]=`${count2} Sahi Paneer`;
    

}
function addsamosa() {
    count3++;
    list[2]=`${count3} Samosa`;
}   
function addbhatura() {
    count4++;
    list[3]=`${count4} Chole Bhature`

}
function addbiryani() {
    count5++;
    list[4]=`${count5} Biryani`;

}
function addchicken() {
    count6++;
    list[5]=`${count6} Butter Chicken`;

}
function addkulcha() {
    count7++;
    list[6]=`${count7} Kulcha Roti`;

}
function addkalakand() {
    count8++;
    list[7]=`${count8} Kalakand`;

}
function addnankhatai() {
    count9++;
    list[8]=`${count9} Nankhatai`;

}
function addjalebi() {
    count10++;
    list[9]=`${count10} Jalebi`;
}
