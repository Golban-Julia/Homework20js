
export const doneTask = (event) => {
    const isChecked = event.target.tagName === "INPUT";

    if (isChecked) {
        const checked = event.target;
        checked.setAttribute('disabled', 'true');

        const taskInput = checked.closest('.task');
        taskInput.classList.toggle('checked');

        const btn = taskInput.querySelector('.remove-button')
        btn.disabled = true;
    }
};

export const deleteTask = (event) => {
    const isRemoveButton = event.target.className === "remove-button";

    if (isRemoveButton) {
        const removeButton = event.target;
        const taskInput = removeButton.closest(".task");
        taskInput.remove();
    }
};


