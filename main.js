// // single element
// console.log(document.getElementById("my-form"));
// //multiple element
// console.log(document.querySelectorAll('.item')); //gives a node list 
// // console.log(document.getElementsByClassName('item')); gives an array
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerHTML = 'Brad';
// ul.lastElementChild.innerHTML = '<h4>Have a nice day</h4>';
// ul.firstElementChild.style.color = 'green';
// ul.children[1].style.color = 'yellow';





const MyForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const uaserList = document.querySelector('#users');



MyForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === ''|| emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';

       setTimeout(()=>msg.remove(),2000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        uaserList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value='';
    }
}

const btn = document.querySelector('.btn');
btn.addEventListener('mouseover',(e)=>{
   e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
   document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    btn.style.background = 'red';
})
//fixes needed 
