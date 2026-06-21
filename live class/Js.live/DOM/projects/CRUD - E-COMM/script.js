const form1 =document.querySelector(".form");
const createPrd =document.querySelector("#create-prd");
const back =document.querySelector("#back");
const texttt =document.querySelector(".texttt");
createPrd.addEventListener("click",()=>{
    form1.style.display="flex";
    texttt.style.display="none";

});
back.addEventListener("click",()=>{
    form1.style.display="none";
});




/* main step 2 */// an array for maintaining the datasets of the created products ;'step4

const productsArray =[];




/* step 12  : removing the duplicacy after the updation of the product */
let updateIndex = null; // holds the index of whihc the element is updated












/* main step 3 : pushing the products into the ui => done by function  */// step 8
const products =document.querySelector(".products");
let ui = ()=>{
    products.innerHTML = ""; //step 11 : blanking the products div after every addition of new prd to ui so that they/prds doesnt repeats
    //for displaying each elemnts of the array by iterating through the array -> for each
    productsArray.forEach((elem,index)=>{
        //now we will push the elements of arr into the products div via innerHTML
        products.innerHTML += `
                <div class="product-card">
                <div class="img">
                    <img src="${elem.productImg}" alt="shoe img">
                </div>

                <div class="text">
                    <h3 class="name">${elem.productName}</h3>
                    <p class="des">${elem.productDes}</p>
                    <p class="price">${elem.productPrice}</p>
                </div>

                <div class="btn">
                    <button onclick="updatePrd('${elem.productName}')" class="update">Update</button>
                    <button onclick="deletePrd('${index}')" class="del">Delete</button>
                </div>
            </div>`
    })
}








/* main step1  */ // main form logic :step 1
const form =document.querySelector("#form");
const prdName =document.querySelector(".prd-name");
const prdDes=document.querySelector(".prd-des");
const prdPrice =document.querySelector(".prd-price");
const prdImg =document.querySelector(".prd-img");

form.addEventListener("submit",(event)=>{ //event = jismei event lagaya usko display karta
    event.preventDefault();
    //for getting the values, "event.target" way :step 2
    let productName =event.target[0].value;
    let productDes =event.target[1].value;
    let productPrice =event.target[2].value;
    let productImg =event.target[3].value;

    //validation of empty inputs that doesnt submits : 7 // using && can be glitchfull somtimes , so use || more often
    if(productName.trim() ==="" && productDes.trim()==="" && productPrice.trim()==="" && productImg.trim()===""){
        alert("Pls fill all the fields");
        return; // the code returns back and doesn't fills empty array
    }; //end of validations

    //product ka object creation: step3
    let obj = {
        productName, // productName : productName , can be written as one if both key and value are same
        productDes,
        productPrice,
        productImg,
    };

    if(updateIndex!==null){ //step14
        productsArray[updateIndex]=obj; //array ke updateindex wale index pe updated value kardo
        updateIndex =null;
    }else{
        productsArray.push(obj); //user inputted value pushed into the empty array : step 5
    }

   /*  productsArray.push(obj); */ //user inputted value pushed into the empty array : step 5
    ui(); // step 9 , calling the functiion ui after new prd gets pushed into the array
    form1.style.display="none"; //step 10 , after adding the prd , screen of add new prd will disappear




    form.reset(); //whenver a new product gets added , the form resets : step 6

});


//update  :(1:38:00)
/* logic  : build a function that will fetch the data after pressing the update button already present in the products-card and will show it on to the creat product screen  */
/* inline function./events  are used in innerHTML with para passing
find() - finds and gives a value from the array */


/* main step 4 : update functiionality : via inline events -> <button onclick="updatePrd(argument passsed )" class="update">Update</button> */



const updatePrd = (name)=>{  //argument/property from the inline events "productName" recieved  here as a string
    form1.style.display="flex";
    let product =productsArray.find((elem)=>elem.productName===name); //product is an object here which contains prd name price and all
    updateIndex =productsArray.findIndex((elem)=>elem.productName===name) //step13 to find index of the element clciked
    form[0].value = product.productName; //form ke 0th index ki value ko replace kare prd name ke sath , jo ki update click karne se hongi
    form[1].value=product.productDes;
    form[2].value=product.productPrice;
    form[3].value=product.productImg;
}




/* main step 5 : delete : Array.splice(start , deletecount  */

const deletePrd= (index)=>{
    productsArray.splice(index,1);
    ui();
}








//notes


/*
   //for getting the values , manual way
    let productName = prdName.value;
    let productDes =prdDes.value;
    let productPrice =prdPrice.value;
    let productImg =prdImg.value;
     */
/*
    const updatePrd = (name)=>{  //argument/property from the inline events "productName" recieved  here
    let product =productsArray.find((elem)=>elem.productName===name); // upar array mei se woh value find karna jismei se jo vlaue recived kiye hai argument ke roop mei, agr find ke andar ka name aur argument wala name match hua toh product will be printed

}
 */

/*
main step 4 :
 const updatePrd = (name)=>{ //konse product pe click kiya woh find kiya
    form1.style.display="flex"; // form ko display karwaye
    let product =productsArray.find((elem)=>elem.productName===name); //prd ko find jo ki particular clicked name ka hai
    updateIndex =productsArray.findIndex((elem)=>elem.productName===name) // prd ka index find kiya
    form[0].value = product.productName; //form pe value update karwaye
    form[1].value=product.productDes;
    form[2].value=product.productPrice;
    form[3].value=product.productImg;
}

if(updateIndex!==null){
        productsArray[updateIndex]=obj; //licked prd ka index jo ki array mei hai usko object wise update kardo
        updateIndex =null; //null for next prd update will not have same value
    }else{
        productsArray.push(obj); //regular
    } */























//LocalStorage
