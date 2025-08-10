# Tic-Tac-Toe with React

A classic Tic-Tac-Toe game built with React and Vite, featuring a clean, responsive UI. This project demonstrates core React concepts like state management, component architecture, and conditional rendering.

[**Live Demo Link**](https://tic-tac-toe-react-three-kappa.vercel.app)

![Project Demo GIF](https://github.com/257divyanshu/tic-tac-toe/blob/main/demo.gif?raw=true)

---

## ✨ Core Features

* **Stateful Game Logic:** Manages player turns, board state, and win/draw conditions using React Hooks.
* **Component-Based Architecture:** Built with reusable components for the game board, cells, and player icons.
* **Responsive & Dynamic UI:** The interface adapts to various screen sizes and conditionally renders elements based on the game's state.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Build Tool:** Vite
* **Styling:** CSS3 with Flexbox

---

## 📂 Project Structure

The project uses a component-based architecture for organization and reusability.

* **`App.jsx`**: Main application entry point.
* **`/components`**: Contains all reusable React components.
    * **`Grid/`**: Manages game state, board logic, and renders the grid.
    * **`Card/`**: Represents a single clickable cell.
    * **`Icon/`**: Renders the 'X' and 'O' SVG symbols.
* **`/helpers`**: Contains utility functions like `checkWinner.js`.