

const dragables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

dragables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });
});

dragables.forEach((draggable) => {
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getAfterElement(container, e.clientY);
        console.log(afterElement);
        const draggable = document.querySelector(".dragging");
        container.insertBefore(draggable, afterElement);
    });
});

function getAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        // console.log(offset);
        if(offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

