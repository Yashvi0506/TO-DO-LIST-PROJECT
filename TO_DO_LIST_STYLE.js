const Inputbox = document.getElementById("input-box");
const Listcontainer  = document.getElementById("list-container");
function addTask() {
    if(Inputbox.value === ''){
        alert("YOU HAVE TO WRITE SOMETHING IN THE INPUT BOX!");
    }
    else{
        let li =document.createElement("li");//element created and stored in li
        li.innerHTML = Inputbox.value;//li ma display karavu ee input ma value nakhsu ee hovu joiye 
        Listcontainer.appendChild(li);//and aa created list display karvanu che listcontainer vala box ma html na
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    Inputbox.value =""; //jyare input ma nakhu ane value tya jn hoi so jyare insert thai jai list tyare input area empty thai jai
    saveData();
    
}
Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false)

function saveData(){
    localStorage.setItem("data",Listcontainer.innerHTML);

}
function showTask(){
    Listcontainer.innerHTML= localStorage.getItem("data")
}
showTask();
