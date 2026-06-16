const bulb  = document.querySelector(".bulb");
const btn =document.querySelector(".btn");

/* let flag  =true;
btn.addEventListener("click",()=>{
    if(flag===true){ bulb.style.backgroundColor="yellow";
    btn.textContent="off";
    flag = false;
    }
    else{
        bulb.style.backgroundColor="black";
        btn.textContent="on";
        flag=true;
    };
}); */

btn.addEventListener("click",()=>{
    if( bulb.classList.toggle("light")){
        btn.textContent="off"
    }
    else{
        btn.textContent="on"
    }
})
