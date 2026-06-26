export let a =10; // exported the variable a

export let sum= function(num1,num2){
    return num1+num2;
}
//creating the div->h1->span->i am span , via the react
//creating single children under the div that is h1
export const div =
React.createElement("div",{class:"box"},
    React.createElement("h1",null,
        React.createElement("span",null,"This is span tag")
    ),
);

/* for creating multiple childrens under a div */
export const div1 =
React.createElement("div",{className:"box"},
    [
        React.createElement("h1",null,"this is h1"),
        React.createElement("h2",{},"this is h2"),
    ]
);
