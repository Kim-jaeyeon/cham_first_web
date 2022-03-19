
const countBtn= document.querySelector("#btn button");
const count_form=document.querySelector("#count_form");
const count_view= document.querySelector("#count_view");

let local_n=Number(localStorage.getItem("count"));
let n=0;
if(local_n!=0){
    n=local_n;
}


function Count(){
    n=n+1;
    localStorage.setItem("count",n);
    paintCount(n);
}

function paintCount(number){
    count_view.innerText="지금까지 "+localStorage.getItem("count")+"번째 응원 중!";
}

countBtn.addEventListener('click',Count)

    //show the greetings

