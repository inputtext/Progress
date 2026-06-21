/*
practise :
const btn =document.querySelector("button");
btn.textContent="Create prd";
btn.style.fontSize ="12px"
 */
const products =document.querySelector(".products");
const createPrd =document.querySelector("#create-prd");
const name =document.querySelector(".name");
const des =document.querySelector(".des");
const price =document.querySelector(".price");
const inp1 =document.querySelector(".prd-name");
const inp2 =document.querySelector(".prd-des");
const inp3 =document.querySelector(".prd-price");
const inp4=document.querySelector(".prd-img")

createPrd.addEventListener("click",()=>{
    let prdName=inp1.value; // to show the value of product at the console/screen
    let prdDes =inp2.value;
    let prdPrice =inp3.value;
    let prdImg = inp4.value.trim();
    if(prdName.trim()==="" && prdDes.trim()==="" && prdPrice.trim()==="" ) return ; //null safety
    if(prdImg ===""){
        alert("please enter a product url");
        inp4.focus();//focus() places the typing cursor inside the image URL input automatically.
        return;
    };
    products.innerHTML +=` <div class="product-card">
                <div class="img">
                    <img src="${prdImg}" alt="${prdName}">
                </div>

                <div class="text">
                    <h3>${prdName}</h3>
                    <p>${prdDes}</p>
                    <p>${prdPrice}</p>
                </div>

                <div class="btn">
                    <button class="update">Update</button>
                    <button class="del">Delete</button>
                </div>
            </div>`
    //for clearing the previous inputs, otherwise it will add without even the img
    inp1.value ="";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
});


/*  the below code explanation :
<div class="text">
                card.querySelector(h3).textcontent= <h3>${prdName}</h3>
                    this both comes under the para var :
                    const para[0]=<p>${prdDes}</p>
                    const para[1]=<p>${prdPrice}</p>
                </div> */
products.addEventListener("click", (e)=>{
    if(e.target.classList.contains("update")){ //agar update button class  hai toh nichee ka process honga
        const card =e.target.closest(".product-card"); /* sabse paas wale product ko pakdenga */
        const para = card.querySelectorAll("p"); //usmei se para ko pakad ke edit  karwayenge nihce ke code se
        const heading =card.querySelector("h3");


        heading.textContent=prompt("enter the product name:",heading.textContent);
        para[0].textContent=prompt("edit descirption : ",para[0].textContent);
        para[1].textContent=prompt("edit the price : ",para[1].textContent);
    }
});
