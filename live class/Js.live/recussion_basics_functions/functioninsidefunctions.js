function one (){
    console.log("1");

    function two (){
        console.log("2");


         function three (){
            console.log("3");

                function four(){
                    console.log("4");
                }
                return (four) ;
             }
        return (three);
        }
    return (two);
    }


one (); // prints 1
one ()()()(); /* return 1234; */
/* 1 return 2 , 2 returns 3 , 3 returns 4 ,.... and soo on ...... */