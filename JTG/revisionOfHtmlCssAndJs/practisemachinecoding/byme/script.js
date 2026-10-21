/ Student Data
const students = [
  {
    id: 1,
    name: 'Aarav Sharma',
    department: 'CSE',
    year: 2027,
  },
  {
    id: 2,
    name: 'Priya Patil',
    department: 'IT',
    year: 2027,
  },
  {
    id: 3,
    name: 'Rohan Verma',
    department: 'CSE',
    year: 2028,
  },
  {
    id: 4,
    name: 'Sneha Deshmukh',
    department: 'ECE',
    year: 2027,
  },
  {
    id: 5,
    name: 'Neha Joshi',
    department: 'IT',
    year: 2028,
  },
  {
    id: 6,
    name: 'Aditya Rao',
    department: 'ECE',
    year: 2026,
  },
];

//selecting the elems from html
const search =document.querySelectorAll(".search");
const dept =document.querySelectorAll("#dropdown");
const stdcard=document.querySelectorAll(".stdcard");


function renderStudents(){
    const searchText =search.value.trim().toLowerCase();//search ki value le rahe
    const department =dept.value;//dept ki value le rahe

    //filter student
    const filterStds= students.filter((students)=>{
        const matchName=students.name.includes(searchText);
            //match dept
        const matchDept =dept==="All"|| students.department===dept;
        return matchName && matchDept;
    });

    if(filter.Stds===0){
        stdcard.innerHTML=`<p>no student found</p>` ;
        return;
    }

    //create student card
    stdcard.innerHTML =filterStds.map((students)=>{
        return `
        <div class="stdcard">
    <h2>${students.name}</h2>
    <span>${students.department}</span>
    <span>${students.year}</span>
    </div>`
    ;

    }).join("");

}


renderStudents();
