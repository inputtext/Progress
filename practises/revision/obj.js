var object  ={
    name : "piyush",
    fun : function(){
        let obj={
            name: "google",
            fun2:function(){
                let obj2 ={
                    fun3 :()=>{
                        console.log(this.name); //displays google
                    }
                };
                obj2.fun3();
            }
        };
        obj.fun2;
    }
};

object.fun();
