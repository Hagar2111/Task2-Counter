let displayNum = document.querySelector('.display');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let reset = document.querySelector('.reset');

let count = 0;

updateNum();

plus.addEventListener("click",()=>{
    count++;
    updateNum();
}) ;

minus.addEventListener("click",()=>{
    count--;
    updateNum();
});

reset.addEventListener("click", ()=>{
    count = 0;
    updateNum();
});

function updateNum(){
    displayNum.innerHTML = count;
};