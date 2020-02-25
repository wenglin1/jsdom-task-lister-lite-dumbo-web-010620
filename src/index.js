document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskDescription = document.getElementById('new-task-description') 
  const findList = document.querySelector("#tasks")
  const newTaskForm = document.getElementById('create-task-form')

  // event listeners 
  newTaskForm.addEventListener("submit", event => {
    event.preventDefault()

    const newElement = document.createElement("li")
    newElement.textContent = taskDescription.value
    findList.append(newElement)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.className = "Delete"
    newElement.append(deleteButton)

    deleteButton.addEventListener("click", event => {
      newElement.remove()
    })
  })

  

});
