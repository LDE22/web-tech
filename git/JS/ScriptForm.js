const emailField=document.getElementById("emailFld")
emailField.classList.add('hidden');
const phoneField=document.getElementById("phoneFld")
phoneField.classList.add('hidden');
const dateField=document.getElementById("dateFld")
dateField.classList.add('hidden');
const urlField=document.getElementById("urlFld")
urlField.classList.add('hidden');
const Radiobtn=document.getElementsByName("answer");
for(let i=0;i<Radiobtn.length;i++){
    Radiobtn[i].addEventListener('change',function(){
        switch(this.value){
            case "meet":
                emailField.classList.add('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.remove('hidden');
                urlField.classList.add('hidden');
                break;
            case "tel":
                emailField.classList.add('hidden');
                phoneField.classList.remove('hidden');
                dateField.classList.add('hidden');
                urlField.classList.add('hidden');
                break;
            case "other":
                emailField.classList.add('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.add('hidden');
                urlField.classList.remove('hidden');
                break;
            case "noansware":
                emailField.classList.remove('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.add('hidden');
                urlField.classList.add('hidden');
                break;
        }
    });
}

from.addEventListener('submit',function(event){
event.preventDefault();
const nameValid=Validname();
const textValid=Validtext();
function Validemail(){
if(nameValid && textValid && (emailValid||phoneValid||dateValid)){
	if(!Radiobtn[2].checked){return false}
	const email=document.getElementById("").value.trim();
	const emailRegex=/^[^\S@]+@[^\S@]+\.[^\S@]+$/;
	if(email===''){alert(''); return false}
	else if(!emailRegex.test(email)){return false}
}
//
}	
});
document.getElementById("textArea").oninput=function text(){
    localStorage.setItem('savetext',document.getElementById("textArea").value);
}
.value=localStorage.getItem('savetext');

const form=document.querySelector('form');
const ul=document.querySelector('ul');
const button=document.getElementById('button');
const input=document.getElementById('Item');
let itemArray=localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
localStorage.setItem('items',JSON.stringify(itemArray));
const data=JSON.parse(localStorage.getItem('Item'));
const liMaker=(text=>{
const li=document.createElement('li');
li.textContent=text;
ul.appendChild(li);});
const buttonDelete=document.createElement('button');
buttonDelete.textContent="Delete";
buttonDelete.addEventListener('Click',function(){ul.removeChild('li');});
form.addEventListener('submit', function(event){event.preventDefault();
itemArray=itemArray.filter(item=>item!==text);
localStorage.setItem('items',JSON.stringify(itemArray));
itemArray.push(input.value);
localStorage.setItem('items',JSON.stringify(itemArray));
liMaker(input.value);});
data.forEach(item=>{
liMaker(item)});
