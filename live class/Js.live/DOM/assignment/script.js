const btn = document.querySelector(".signin-btn");

if(btn){
    btn.addEventListener("click",()=>{
    window.location.href = "signup.html";  // for redirecting into the next page
    });
}

const signIn =document.querySelector("#signin");
const inp =document.querySelector(".email");

if(signIn && inp){
    signIn.addEventListener("click",()=>{

    // local storage
    const email = inp.value.trim();
    if(email===""){
        alert("pls enter your email");
        return ;
    }
    localStorage.setItem("email",email);
    alert("signed in successfully!")
    });
}
