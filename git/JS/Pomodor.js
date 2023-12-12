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
    pauseTimer();
});
const pauseTimer=()=>{
    paused=true;
    clearInterval(set)
    set=setInterval(()=>{time.textContent=`${appendZero(minCount)}:${appendZero(count)}`;},0);
};

const resetTimer=()=>{
    switch(active){
        case 'long':
            minCount=14;
            break;
        case "short":
            minCount=4;
            break;
        default:
            minCount=24;
            break;
    }
    count=59;
    time.textContent=`${appendZero(minCount+1)}:00`
};

btnreset.addEventListener('click',()=>{
    btnpause.classList.remove('show');
    btnreset.classList.remove('show');
    btnpause.classList.add('hidden');
    btnreset.classList.add('hidden');
    btnstart.classList.add('show');
    pauseTimer();
    resetTimer();
});

const removeFocus=()=>{
    buttons.forEach((btn)=>{
        btn.classList.remove('btn-focus');
        localStorage.setItem('case',active);
    });
};

document.addEventListener("DOMContentLoaded",()=>{
    const Savedcase=localStorage.getItem('case');
    active=Savedcase;
    resetTimer();
})

btnshortbreak.addEventListener('click',()=>{
    active="short";
    removeFocus();
    btnshortbreak.classList.add('btn-focus');
    minCount=4;
    count=59;
    time.textContent=`${appendZero(minCount+1)}:00`
});

btnlongbreak.addEventListener('click',()=>{
    active="long";
    removeFocus();
    btnlongbreak.classList.add('btn-focus');
    minCount=14;
    count=59;
    time.textContent=`${appendZero(minCount+1)}:00`
});

btnfocus.addEventListener('click',()=>{
    active="focus";
    removeFocus();
    btnfocus.classList.add('btn-focus');
    minCount=24;
    count=59;
    time.textContent=`${appendZero(minCount+1)}:00`
});