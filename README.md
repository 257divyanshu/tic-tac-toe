# Tic-Tac-Toe

A classic Tic-Tac-Toe game built with React and Vite, featuring a clean, responsive UI, multiple game modes, and an intelligent Bot opponent. This project demonstrates modern React development practices, including state management with custom hooks, component-based architecture, and conditional rendering.

[**Live Demo Link**](https://tic-tac-toe-react-three-kappa.vercel.app)

![Project Demo GIF](https://raw.githubusercontent.com/257divyanshu/tic-tac-toe/main/demo.gif?raw=true)

---

## ✨ Features

* **Dual Game Modes:** Choose between a challenging **Single Player** mode against a Bot or a classic **Multiplayer** mode for two players on the same screen.
* **Intelligent Bot Opponent:** The single-player mode features a bot with a strategic, non-random logic, providing a balanced challenge.
* **Pre-Game Selections:** Includes intuitive screens for selecting the game mode and choosing who makes the first move in single-player matches.
* **Clean Architecture:** Separates complex game logic from the UI by using a custom `useTicTacToe` hook, making the code more readable and maintainable.
* **Responsive & Dynamic UI:** The interface adapts smoothly to various screen sizes and conditionally renders elements based on the game's state.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Build Tool:** Vite
* **Styling:** CSS3 with Flexbox

---

## 📂 Project Structure

The project follows a clean, component-based architecture with a clear separation of concerns.

* **`App.jsx`**: The main component that handles routing between different game states and modes.
* **`/components`**: Contains all reusable UI components.
    * **`Grid/`**: Holds the `SinglePlayerGrid` and `MultiPlayerGrid` components, which render the game board.
    * **`SelectPlayerMode/` & `SelectPlayerOne/`**: Components for the pre-game setup screens.
    * **`Card/` & `Icon/`**: Components for the individual cells and player symbols.
* **`/hooks`**: Contains custom hooks, like `useTicTacToe.js`, which encapsulates all the game logic.
* **`/helpers`**: Contains utility and bot logic functions, such as `checkWinner.js` and the bot logic files.
