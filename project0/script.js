const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let item_count = 0
let unchecked_count = 0
let serial_id = 0

function update_counters(){
  itemCountSpan.innerHTML = item_count 
  uncheckedCountSpan.innerHTML = unchecked_count
}

function newTodo() {
  // alert('New TODO button clicked!')
  const newtodo = prompt('Please Enter New TODO','new todo')
  if (newtodo.length > 0){
    item_count += 1
    unchecked_count = item_count
    serial_id += 1
    update_counters()

    // create new list
    const newlist = document.createElement("li")
    newlist.className = classNames.TODO_ITEM
    newlist.id = serial_id
    // alert (newlist.id)
    list.append(newlist)

    // create checkbox
    const checkbox = document.createElement("input")
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.id = "check" + serial_id
    checkbox.type = "checkbox"
    checkbox.setAttribute("onclick" , "check(this.id)")
    newlist.append(checkbox)


    // create textfield
    const text = document.createElement("b")
    text.innerHTML = newtodo
    newlist.append(text)

    // create delete button
    const delete_btn = document.createElement("button")
    delete_btn.className = classNames.TODO_DELETE
    delete_btn.id = serial_id
    // alert(delete_btn.id)
    delete_btn.innerHTML= "delete"
    delete_btn.setAttribute("onclick" , "del(this.id)")
    newlist.append(delete_btn)

  }
}

function del(id){
  alert(id)
  button = document.getElementById(id).remove()
  item_count -= 1
  unchecked_count -= 1
  update_counters()
}

function check(checkid){
  const checkBox =  document.getElementById(checkid)
  if (checkBox.checked == true){
    unchecked_count -= 1
    update_counters()
  }else if (checkBox.checked == false){
    unchecked_count += 1
    update_counters()
  }

}