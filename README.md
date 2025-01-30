### Identify Classes and Elements:

```js
.draggable: These are elements that can be dragged (e.g., text boxes).
.container: These are parent containers where drag-and-drop operations occur.
Detect Start of Dragging:

const dragables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

dragables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });
});
```

This code selects all draggable elements.
For each draggable element, it adds an event listener for "dragstart".
When the drag start event is triggered (e.g., mouse drag begins), it marks the element as dragging to prevent multiple dragging actions.
Detect End of Dragging:

```js
dragables.forEach((draggable) => {
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});
```

This code selects the same draggable elements.
For each element, it adds a "dragend" event listener.
When the drag end event is triggered (e.g., mouse release), it removes the dragging class to prepare for next possible drag.
Handle Drop Events:

```js
containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getAfterElement(container, e.clientY);
        console.log(afterElement);
        const draggable = document.querySelector(".dragging");
        if (draggable) { // Ensure only one draggable is present
            container.insertBefore(draggable, afterElement);
        }
    });
});
```

This code selects all containers.
For each container, it adds a "dragover" event listener.
When the drag over event triggers (e.g., mouse moves to a position within the container), it prevents default behavior and calculates where to place the dragged element.
Determine Drop Position:

```js
function getAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        // console.log(offset);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
```

This function takes a container and a y-coordinate as inputs.
It finds all draggable elements within the container that are not currently being dragged (.draggable:not(.dragging)).
For each draggable element, it calculates its position relative to the mouse's y-coordinate (centered vertically).
The reduce method iterates through these elements to find which comes closest to the target y-coordinate.
Returns the first element that is after the calculated position.
Place Draggable Element:

`container.insertBefore(draggable, afterElement);`

After determining where to place the draggable (afterElement), it inserts the dragging element just before this element in the DOM tree.
This effectively drops the draggable at the calculated position within the container.

### Summary:
The code implements a basic drag-and-drop functionality between text boxes (dragables) within containers. Here's what each part does:

##### Drag Start: 
Marks an element as dragging to start a drag operation.
Drag End: Unmarks an element from dragging, allowing it to be reused or moved elsewhere.
Drop Handling: Calculates the position for dropping a dragged element within a container and inserts it accordingly.

### Key Points:
Each .draggable element can only be dragged once at a time because of the dragging class check (if (draggable)).
The positioning during the drop is calculated based on where the mouse hovers over elements.
The code uses event listeners to handle user interactions, ensuring smooth drag-and-drop behavior.
