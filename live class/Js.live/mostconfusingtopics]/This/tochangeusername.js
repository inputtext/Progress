var user = {
username: "pk",

changeusername : function (a){
        username = a;
},
getusername : function(){
    console.log(username);
},
};

user.changeusername("piyush");
user.getusername();

