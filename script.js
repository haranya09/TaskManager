let tasks=[];

function addTask(){

let task=document.getElementById("taskInput").value;

tasks.push(task);

display();

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function display(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((t,index)=>{

list.innerHTML+=`
<li>

${t}

<button onclick="removeTask(${index})">Delete</button>

</li>
`;

});

}

function removeTask(i){

tasks.splice(i,1);

display();

localStorage.setItem("tasks",JSON.stringify(tasks));

}

window.onload=function(){

let data=localStorage.getItem("tasks");

if(data){

tasks=JSON.parse(data);

display();

}

}