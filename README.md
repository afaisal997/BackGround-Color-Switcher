# Background Color Switcher

## Project Description
This project is a **Background Color Switcher**. It provides users with an interactive way to change the background color of the webpage by clicking on color buttons. The project uses HTML, CSS, and JavaScript to create an intuitive and responsive user experience.

---

## File Descriptions

### 1. `index.html`
**Description:**  
The `index.html` file is the main structure of the application. It defines the layout of the webpage, including:  
- A title "Color Scheme Switcher".  
- Four buttons, each representing a different color (`grey`, `white`, `blue`, and `yellow`), which users can click to change the background color.  
- Additional instructional text to guide users on how to use the application.  
This file also links the external CSS for styling and JavaScript for functionality.

---

### 2. `style.css`
**Description:**  
The `style.css` file is responsible for the visual styling of the webpage. It:  
- Sets a default font style and background color for the body.  
- Centers the content using a `.canvas` container.  
- Styles the color buttons with a uniform size, padding, border, and hover cursor.  
- Defines unique background colors for each button (`grey`, `white`, `blue`, and `yellow`).

---

### 3. `script.js`
**Description:**  
The `script.js` file handles the interactive functionality of the application. It:  
- Selects all elements with the `button` class and adds an event listener to each.  
- Listens for `click` events on the buttons and changes the background color of the webpage (`body`) to the color associated with the clicked button’s `id`.  
- Contains a fallback default color (`white`) if no valid button is clicked.

---

## How It Works
1. The webpage is loaded with a default light background and four color buttons.
2. When a user clicks on a color button, the JavaScript code identifies the button's `id` and updates the background color of the entire page to match the button’s predefined color.
3. CSS ensures the page is visually appealing and the buttons are user-friendly.

---

Feel free to contribute or suggest improvements to enhance this project!
