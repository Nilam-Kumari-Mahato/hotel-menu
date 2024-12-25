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
    added.textContent="";
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


function remove1() {
    count1--;
    if(count1==0){
        list[0]=``;
    }
    else{
        list[0]=`${count1} South Indian Thali`;
    }
}
function remove2() {
    count2--;
    if(count2==0){
        list[1]=``;
    }
    list[1]=`${count2} Sahi Paneer`
}
function remove3() {
    count3--;
    if(count3==0){
        list[2]=``;
    }
    else{
        list[2]=`${count3} Samosa`;
    }
}
function remove4() {
    count4--;
    if(count4==0){
        list[3]=``;
    }
    else{
    list[3]=`${count4} Chole Bhature`;
    }
}
function remove5() {
    count5--;
    if(count5==0){
        list[4]=``;
    }
    else{
        list[4]=`${count5} Biryani`;
    }
}
function remove6() {
    count6--;
    if(count6==0){
        list[5]=``;
    }
    else{
        list[5]=`${count6} Butter Chicken`;
    }
}
function remove7() {
    count7--;
    if(count7==0){
        list[6]=``;
    }
    else{
        list[6]=`${count7} Kulcha Roti`;
    }
}
function remove8() {
    count8--;
    if(count8==0){
        list[7]=``;
    }
    else{
        list[7]=`${count8} Kalakand`;
    }
}
function remove9() {
    count9--;
    if(count9==0){
        list[8]=``;
    }
    else{
        list[8]=`${count9} Nankhatai`
    }
}
function remove10() {
    count10--;
    if(count10==0){
        list[9]=``;
    }
    else{
        list[9]=`${count10} Jalebi`;
    }
}