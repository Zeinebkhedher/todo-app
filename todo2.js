let input=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")

//cliquer sur le bouton d'ajout 
button.onclick =()=> {
    addTodo()
}



let todos = JSON.parse(localStorage.getItem('todos'))
console.log(typeof(todos))

function loadOldTodos(){
	if (todos){
		todos.map(todo=>{
			addToUl(todo.text,todo.checked)})}
	
else {
		todos = []
	}
}
loadOldTodos();


// ajouter 

function addTodo(){

    let text = input.value
    addToUl(text,false)
    let todo={
        todo:input.value,
        checked:false    
    }
    console.log(todos)
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    input.value=""
}

function addToUl(text,checked){
    //creation d'element 
    let li=document.createElement("li")
    let checkbox=document.createElement("input")
    let span = document.createElement("span")
    //checker la tache
    checkbox.onclick=()=> {
        if (checkbox.checked){
            li.style.textDecoration="line-through"
        }else {
            li.style.textDecoration="none"
        }

    }
    span.innerText=text
    console.log(li)
    li.innerText=text
   checkbox.setAttribute("type","checkbox")
   checkbox.checked=checked;
    ul.appendChild(li)
    li.appendChild(checkbox)
    li.appendChild(span)
    localStorage.setItem("todos",JSON.stringify(todos))
}