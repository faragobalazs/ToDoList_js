const form = document.getElementById("inputForm");
const taskContainer = document.getElementById("tasks");

const taskInput = form.querySelector("input[type='text']");
// --------------------------------------------------------------------------
const handleSubmit = (event) => {
  // Prevent the default browser action of reloading the page.
  event.preventDefault();

  // Get the text from the input field and remove extrace whitespace
  const taskText = taskInput.value.trim();

  // If the input is empty, do nothing
  if (taskText === "") {
    return;
  }

  // Create a new div for task items
  const newTaskWrapper = document.createElement("div");

  // Create the checkbox and label and delete button
  const checkbox = document.createElement("input");
  checkbox.id = "task-" + Date.now();
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = taskText;

  const deleteTask = document.createElement("span");
  deleteTask.className = "delete-btn";
  deleteTask.textContent = " ❌ ";

  // Append the checkbox and label to the wrapper div
  newTaskWrapper.appendChild(checkbox);
  newTaskWrapper.appendChild(label);
  newTaskWrapper.appendChild(deleteTask);

  // Append the wrapper div to the main tasks container
  taskContainer.appendChild(newTaskWrapper);

  // Clear the input field for new entry
  taskInput.value = "";
};
// --------------------------------------------------------------------------
// Delete task
taskContainer.addEventListener("click", (event) => {
  if (event.target.className === "delete-btn") {
    event.target.parentElement.remove();
  }
});
// --------------------------------------------------------------------------
// Line through finished task
taskContainer.addEventListener("change", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;
    label.classList.toggle("lineThrough", checkbox.checked);
  }
});
// --------------------------------------------------------------------------
if ((taskContainer.value = "")) {
  const wellDoneText = document.createElement("text");
  wellDoneText.textContent =
    "You haven't got any task to do. Enjoy your day! 🍹🏝️";
}
// --------------------------------------------------------------------------
form.addEventListener("submit", handleSubmit);
