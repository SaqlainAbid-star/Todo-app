var list = document.getElementById("list")

function addTodo(){

    var todo_item = document.getElementById("todo-item");


    // create li tag with text node
    var li = document.createElement('li')
    list.appendChild(li)
    var liText =document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn btn-primary")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

     // create delete button
     var delBtn = document.createElement("button");
     var delText = document.createTextNode("DELETE")
     delBtn.setAttribute("class","btn btn-danger")
     delBtn.setAttribute("onclick","deleteItem(this)")
     delBtn.appendChild(delText)
     li.appendChild(delBtn)

    
    

    todo_item.value = ""
    console.log(li)

}


function deleteItem(e){

    e.parentNode.remove()
    console.log()

}

function delAll(){
list.innerHTML = ""

}

function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}