//styling main through the js 
const main=document.querySelector("main");
main.style.display="flex";
main.style.alignItems="center";
main.style.justifyContent="start";
main.style.flexDirection="column";
main.style.gap="10px"
main.style.height="80%";
main.style.width="75%";
main.style.backgroundColor="lavender";
main.style.borderRadius="32px";
main.style.padding="10px 20px";


/* interactivity of the task */
const inp=document.querySelector("input")
const btn =document.querySelector("#add");
const todoList=document.querySelector(".todo-list")

btn.addEventListener("click",()=>{
    const value = inp.value; //prints the value
//inner html because it updates in real time
if(value.trim() ==="")return; //doesnt adds if has spaces and nothing written
    todoList.innerHTML += ` <div class="li">
                <h3>${value}</h3>
                <button class="btn edit" >Edit</button>
                <button class="btn del">Delete</button>
            </div> `;
            inp.value =""
})

