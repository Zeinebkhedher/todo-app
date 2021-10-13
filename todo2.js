let input=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")

//cliquer sur le bouton d'ajout 
button.onclick =()=> {
    addTodo()
}


//cliquer sur le bouton entrer pour l'ajout
input.onkeydown=(e)=>{
	if(e.keyCode == 13)
	{
		addTodo()
	}

}



let todos = JSON.parse(localStorage.getItem('todos'))


function loadOldTodos(){
	if (todos){
		todos.map(todo=>{
			addToUl(todo.todo,todo.checked,todo.id)})}
	
else {
		todos = []
	}
}
loadOldTodos()


// ajouter 

function addTodo(){

    let text = input.value
    if (text.length==0){
        input.style.border="1px solid red"
    }else {
        input.style.border="1px solid green"
    }
    addToUl(text,false)
    let todo={
        todo:text,
        checked:false ,
        id:todos.length+1   
    }
   
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    input.value=" "
}



function checkboxStyle(checkbox,li){
    if (checkbox.checked){
        li.style.textDecoration="line-through"
    }else {
        li.style.textDecoration="none"
    }
}



function addToUl(text,checked,id){


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
 
 
    //ajouter un id 
   if (id){
       li.setAttribute("id",id)
   }else {
       li.setAttribute("id",todos.length+1)
   }
    span.innerText = text
   checkbox.setAttribute("type","checkbox")
   checkbox.checked=checked;
   li.appendChild(checkbox)	
	li.appendChild(span)
	ul.appendChild(li)
	

    //sauvegarder le checkbox coché dans local storage
    checkbox.onclick = (e)=>{
		let id = e.target.parentNode.id
		todos.map(todo=>{
			if(id==todo.id){
				todo.checked=!todo.checked
			}
		})
   
    localStorage.setItem("todos",JSON.stringify(todos))


    checkboxStyle(checkbox,e.target.parentNode)

    }
 //cocher avec le bouton d'espace
    checkbox.onkeydown = (e)=>{
		
		if( e.key == "Tab"){
			let id = e.target.parentNode.id
			todos.map(todo=>{
				if(id==todo.id){
					todo.checked=!todo.checked
                    
				}
			})
			localStorage.setItem("todos",JSON.stringify(todos))
            checkboxStyle(checkbox,e.target.parentNode)
			
		}
	}

}



