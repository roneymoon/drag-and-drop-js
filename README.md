# 🚀 Drag and Drop JavaScript Project

Welcome to the **Drag and Drop JS** project! 🎯 This interactive web project allows users to seamlessly drag and drop elements within containers using pure **HTML5 Drag & Drop API** and **JavaScript**. 🖱️✨

---

## 🎯 Features
✅ Smooth drag-and-drop functionality 🏗️  
✅ Dynamic element placement 📍  
✅ Fully interactive and responsive ⚡  
✅ Uses **getBoundingClientRect()** for precise positioning 📏  
✅ Minimal and clean code for easy understanding 🧹

---

## 📌 How It Works

<details>
  <summary><strong>1️⃣ Selecting Elements</strong></summary>
  
  - **`.draggable`** → Represents draggable elements (e.g., text boxes 📦).
  - **`.container`** → Parent elements where drag-and-drop actions happen 📂.
  
  ```javascript
  const dragables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container");
  ```
</details>

<details>
  <summary><strong>2️⃣ Detect Drag Start & End</strong></summary>

  ```javascript
  dragables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
          draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
          draggable.classList.remove("dragging");
      });
  });
  ```
  ✅ **dragstart** → Adds `dragging` class to mark the element 🚀  
  ✅ **dragend** → Removes `dragging` class after placement 🎯
</details>

<details>
  <summary><strong>3️⃣ Handling Drag Over</strong></summary>
  
  ```javascript
  containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
          e.preventDefault();
          const afterElement = getAfterElement(container, e.clientY);
          const draggable = document.querySelector(".dragging");
          if (draggable) container.insertBefore(draggable, afterElement);
      });
  });
  ```
  ✅ Prevents default behavior ⚠️  
  ✅ Determines correct drop position 📍
</details>

<details>
  <summary><strong>4️⃣ Finding Drop Position</strong></summary>

  ```javascript
  function getAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
      
      return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
      }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
  ```
  ✅ **Uses getBoundingClientRect()** for accuracy 📏  
  ✅ **Calculates y-position dynamically** for seamless placement 🔥
</details>

---

## 🎬 Live Demo
👉 **[Click here](#)** to see it in action! 🚀

---

## 🛠️ Installation & Usage

1. Clone the repo 📥
   ```sh
   git clone https://github.com/roneymoon/drag-and-drop-js.git
   ```
2. Open `index.html` in your browser 🌍
3. Drag & drop elements like a pro! 🎯

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify! 🚀

---

Made with ❤️ by [Katarapu Roney Moon](https://github.com/roneymoon) 🚀

