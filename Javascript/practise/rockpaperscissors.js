var game= function(user,computer){
    if(user ==="rock" && computer==="scissors") return "user won";
    if(user === "Scissors" && computer ==="rock") return "computer won";
    if(user === "paper" && computer === "scissors")return "computer won";
    if(user === "scissors" && computer === "paper")return "user won";
    if(user ==="rock" && computer ==="scissors")return "user won";
    if(user ==="scissors" && computer ==="rock")return "computer won";
    else{
        return "enter a valid input";
    }
}

var result =game("rock","scissors"); 
console.log(result);
