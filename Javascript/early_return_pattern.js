/* function getGrade(score){
    if(score>=90 && score<=100) return "A+";
    if(score>=80 && score<=89) return "A";
    if(score>=70 && score<=79) return "B";
    if(score>=60 && score<=69) return "C";
    if(score>=50 && score<=59) return "D";
    if(score>=33 && score<=49) return "E";
    if(score<=33) return "fail";
    else return "input valid marks"
    return score;
}
var inputUser=Number(prompt("enter a grade"));
var result =getGrade(inputUser);
var Grade =result;
console.log(Grade);

 */

/*  bruteforceof rock paper scissor */
/* function game(input){ always win win
    if (input === "rock") return "paper" ;
    if (input === "paper") return "scissor";
    if (input === "scissor") return "rock";
    else return "valid input"
}

var inputU=String(prompt("enter your choice"));
var result = game(inputU);
console.log(result); */


function game(user,computer){
    if(user === rock && computer=== scissors) return "user Won";
    if(user === scissors && computer=== rock) return "computer Won";
    if(user === paper && computer=== scissors) return "computer Won";
    if(user === scissors && computer=== paper) return "user Won";
    if(user === rock && computer=== paper ) return "user Won";

}

console.log((rock,scissors));

/* conditions !! brute force
rock paper scissors

rock scissors
rock paper 

paper sci
sci paper

sci paper 
sci rock

sci sci 
rock rock 
paper paper
 */