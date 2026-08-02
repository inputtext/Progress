Local storage : browser storage
permanent storage of browser
 max 5mb
holds omnly string data

syntax :
localStorage.setItem("key","value"  )

json is a formatter

let object = {
    name  : "Piyush",
    age : 22
};

localStorage.setItem("user",JSON.stringify(object)); //obj->string
let localStorageData = localStorage.setItem(user);//setting
console.log(JSON.parse(localStorageData));//string -> object
