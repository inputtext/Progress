# Local storage : browser storage ,permanent storage of browser,max 5mb,holds omnly string data


# syntax :
#### localStorage.setItem("key","value"  )


## json is a formatter


### let object = {
    name  : "Piyush",
    age : 22
};


### localStorage.setItem("user",JSON.stringify(object)); //obj->string
### let localStorageData = localStorage.setItem(user);//setting
### console.log(JSON.parse(localStorageData));//string -> object


## JSON OBJECT : {
    "name":"Piyush"
}


## Normal OBJECT : {
    name : "piyush
}


## localstorage keeps the data in the form of string , that is why we use JSON methods to keep the objects inthe local storage inthe object form


### setUsers((prev)=>[...prev,data],//inside the new reference of the array , we are putting the data of user created via form
                localStorage.setItem("users",JSON.stringify(users)),//setting the created users into the localtorage
                );
                on first time ,it shows a blank object , and on second time it shows the data of the firs tobejct added

 ==========================================
# Async and sync

# Local storage is a synchrounous part
# useState is asynchronous

## What is event looop of javascript
## async js
## GEC

# Accoding to the Js GEC and event loop , the synchronous code runs / executes first

