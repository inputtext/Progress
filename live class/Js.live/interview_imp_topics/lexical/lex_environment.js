function parent ( ){
    var parenT = "Parent ";

    function child( ){
        var chilD = "Child";
        console.log("parent - ",parenT);
        console.log("child - ", chilD);

        function grandChild ( ){
            var grandchilD = "Grandchild";
            console.log("parent - ",parenT);
            console.log("child - ",chilD);
            console.log("grandchild - ",grandchilD);
        }
        return grandChild;
    }
    return child;
    
return parent ;
}
parent()()();
