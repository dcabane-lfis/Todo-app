console.log('hop!')

const addTodo = () => {
  let newTodo = document.querySelector("#newTodo").value;
  if(newTodo){
  let html = `
      <div class='todoItem'>
        <span>${newTodo}</span>
        <span>
          <input type="checkbox" class='completed'>
          <i class="fa fa-trash-o trash"></i>
        </span>
      </div>
    `;
  document.querySelector("#todoList").insertAdjacentHTML('beforebegin', html);
  document.querySelector("#newTodo").value = '';
  }
}

document.addEventListener('click', e => {
  if(e.target.classList.contains('completed')){
    console.log(e.target.parentNode.parentNode.classList);
    if(e.target.checked){
      e.target.parentNode.parentNode.classList.append('completed');
    } else {
      e.target.parentNode.parentNode.classList.remove('completed');
    }
  }
})