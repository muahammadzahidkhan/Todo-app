// import axios from "../axios";


const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

document.getElementById("add-button").addEventListener("click",addtask);

function addtask(){
    if(inputbox.value=== ''){
        alert("you must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

listcontainer.addEventListener("click" , function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
    saveData();
  }
  else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
      }
},false);

function saveData(){
  localStorage.setItem("data" , listcontainer.innerHTML);
  // axios.post('http://localhost:3000/save')
}

function showTask(){
    listcontainer.innerHTML = 
    localStorage.getItem("data");
    // axios.get('http://localhost:3000/')

}

showTask();