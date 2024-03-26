document.addEventListener('DOMContentLoaded', async function() {
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('task-form');

    // Function to add a task to the DOM
    function addTaskToDOM(task) {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button onclick="deleteTask('${task._id}')">Delete</button>
        `;
        taskList.appendChild(taskElement);
    }

    // Event listener for form submission
    taskForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        try {
            // Send a POST request to add the task
            const response = await fetch('http://localhost:3001/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            });

            if (response.ok) {
                const task = await response.json();
                addTaskToDOM(task); // Add the new task to the DOM
            } else {
                console.error('Failed to add task:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    });

    // Fetch tasks when the page loads
    try {
        const response = await fetch('http://localhost:3001/tasks');
        if (response.ok) {
            const tasks = await response.json();
            tasks.forEach(task => addTaskToDOM(task));
        } else {
            console.error('Failed to fetch tasks:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
});
// Function to delete a task
async function deleteTask(taskId) {
    try {
        if (!taskId) {
            console.error('Task ID is undefined');
            return;
        }

        // Send a DELETE request to delete the task
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Remove the task element from the DOM
            const taskElement = document.getElementById(taskId);
            if (taskElement) {
                taskElement.remove();
            } else {
                console.error('Task element not found:', taskId);
            }
        } else {
            console.error('Failed to delete task:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

