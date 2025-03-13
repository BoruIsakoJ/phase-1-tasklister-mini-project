document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formEl = document.querySelector('form')
  formEl.addEventListener('submit', function (event) {
    event.preventDefault()
    createToDo(event.target["new-task-description"].value)
  })
});
function createToDo(todo) {
  const li = document.createElement('li')
  const liBtn = document.createElement('button')

  liBtn.textContent = 'Done'
  liBtn.className = 'liBtn'
  liBtn.addEventListener('click', hanldeDelete)

  li.textContent =`${todo} `
  li.appendChild(liBtn)
  document.querySelector('#tasks').appendChild(li)
  const inputEl =document.getElementById('new-task-description')
  inputEl.value =""
}
function hanldeDelete(event){
  event.target.parentElement.remove()
}