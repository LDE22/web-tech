const btnstart=document.getElementById("btnstart");
const btnpause=document.getElementById("btnpause");
const btnreset=document.getElementById("btnreset");
const btnfocus=document.getElementById("focus");
const btnshortbreak=document.getElementById("shortbreak");
const btnlongbreak=document.getElementById("longbreak");
const time=document.getElementById("time");
let buttons = document.querySelectorAll('.btn');
let set;
let active='focus';
let minCount = 24;
let count = 59;
let paused = true;
const appendZero = (value)=>{value=value<10?`0${value}`:value; return value;};
btnstart.addEventListener('click',()=>{
    btnstart.classList.remove('show');
    btnstart.classList.add('hidden');
    btnpause.classList.add('show');
    btnreset.classList.add('show');
    if(paused){
        paused=false;
        time.textContent=`${appendZero(minCount)}:${appendZero(count)}`
        set=setInterval(()=>{
            if(minCount==0 && count==0){clearInterval(set)}
            else{if(count!=0){count--;time.textContent=`${appendZero(minCount)}:${appendZero(count)}`;}
                else{count=60; minCount--;time.textContent=`${appendZero(minCount)}:${appendZero(count)}`;}}
        },1000)
    }
});
btnpause.addEventListener('click',()=>{
    btnpause.classList.remove('show');
    btnpause.classList.add('hidden');
    btnstart.classList.add('show');
    btnreset.classList.add('show');
    paused=true;
    clearInterval(set)
    set=setInterval(()=>{time.textContent=`${appendZero(minCount)}:${appendZero(count)}`;},0);
});