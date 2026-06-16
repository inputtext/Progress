//Scope - Chaining  -- every function can access the things from their previous function ( mainlu every child can acess the things from their parent )
function parent (){
    var Parent = "Parent";   //                                              [       {                (

    function child (){
        console.log("-----------------child section ----------------");   // ] lexical environment of child
        var Child = "Child";
        console.log("parent - ", Parent);
        console.log("child -",Child);

        function grandchild (){
            console.log("-----------------grand section ----------------");      // } lexical environment for grand child
            var Grandchild = "Grandchild";
            console.log("parent - ", Parent);
            console.log("child -",Child);
            console.log("granchild- ",Grandchild);

            function greatgrandchild (){
                console.log("-----------------great grand child section ----------------"); //       ) lexcial environment for great grand child
                var GGC = "greatgrandchild";
                console.log("greatgrandchild- ", GGC);
                console.log("parent - ", Parent);
                console.log("child -",Child);
                console.log("granchild- ",Grandchild);
            };
            return greatgrandchild; // to the grandchild
        };
        return grandchild ; // to the child
    };
    return child ; //return to parent no to child itself thats why outside the {}
};

parent ();// prints mothing as it returns nothing
parent ()(); // child
parent ()()() // Grand child
parent ()()()() // great grand child
//lexcial environment means , the child function can access the parent's variable
