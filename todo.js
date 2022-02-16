

let input = document.getElementById("input");
let button = document.querySelector(".button")
let ulChild = document.getElementById("ulChild");
let ul = document.getElementById("ul")
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
let todo = document.getElementById("todo");
let clear1 = document.getElementById("clear");

button.addEventListener("click",()=>{
  
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.href = "#"
    link.id = "liink"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    let text = document.createTextNode(input.value);
    li.appendChild(link)
    li.appendChild(text);
    ul.appendChild(li)
    input.value = " "

    
    li.addEventListener("click",()=>{


    
        let clear = li;
        if(confirm("Are you sure you want to delete?..")){
            clear.remove();
        }
      
        
        

    })
  
    
})


clear1.addEventListener("click",()=>{
    if(confirm("Are you sure you want to delete all?..")){
        ul.innerHTML = ""
    }
})



    

