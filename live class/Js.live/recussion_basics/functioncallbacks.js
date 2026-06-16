/* function secondary (b){
    console.log("hi");
}

function main (a){  //a recieves the secondary fun 
    console.log("thhis is main fucntion");
    a();  //a ko call/invoke kare but a =secondary fun ki value toh prints what was in the secondary fun 
}

main(secondary);  //secondary function passed to the a of main   */


function footpath(width_Of_f){ // recieved the arguement via variable from the road 
    console.log("footpath");
    console.log(`the width footpath is ${width_Of_f}`);

}


function road (width ,fp){
    console.log(`the total width of the road is ${width}`);
    footpath(); // prints footpath
    footpath(width/10); // passed the agrument to the footpath with width /10

}
road(1200 ,footpath); /* width =1200  & fp = footpath function  */