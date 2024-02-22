document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', handleSubmit)
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target['new-task-description'].value)
    const li = document.createElement('li')
    li.textContent = e.target['new-task-description'].value
    const task = document.querySelector("#tasks")
    task.append(li)
    // li.className = 
    const button = document.createElement("button")
    button.textContent = 'x'
    li.append(button)
    button.addEventListener('click', () => {
      li.remove()
    })
  }
});
