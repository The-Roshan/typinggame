# ⌨️ Typing Speed Game

## Overview
The Typing Speed Game is an engaging, web-based application created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it challenges users to test and improve their typing speed and accuracy by typing displayed words within a time limit. The game features three difficulty levels, real-time stats (time, score, accuracy), high score tracking, and a vibrant animated background with floating keyboard keys and a gradient effect. It is optimized for both desktop and mobile devices, offering a fun and interactive experience.

## Features
- **Gameplay** 🎮:
  - Users type words displayed on the screen (`wordDisplay`) to earn points.
  - Three difficulty levels: Easy (60s), Medium (45s), and Hard (30s), selectable via a dropdown (`difficulty`).
- **Real-Time Stats** 📊:
  - Displays time left, current score, and accuracy percentage during gameplay.
- **Game Over Screen** 🏁:
  - Shows final score and accuracy, with a list of high scores (`highScores`).
  - Includes a "Restart Game" button to play again.
- **Animated Background** ✨:
  - Dynamic gradient background with a 15-second animation cycle.
  - Floating keyboard keys (`key`) with varying animation durations for a lively effect.
- **Responsive Design** 📱:
  - Optimized for various screen sizes with CSS media queries and flexible layouts.
- **User Interface** 🖥️:
  - Clean and intuitive design with a start button, input field, and stats display.
  - Hover effects on buttons for enhanced interactivity.

## Tech Stack
- **HTML5**: Structure of the game, including input fields, buttons, and animated background.
- **CSS3**: Styling for layout, animations, gradients, and responsiveness (inline styles in `index.html`).
- **JavaScript**: Game logic, including word generation, timer, scoring, accuracy calculation, and high score management (`script.js`).

## Project Structure
```
typing-speed-game/
├── index.html         # Main HTML file
├── script.js         # JavaScript for game logic
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with JavaScript support.
- A code editor (e.g., VS Code) for customization.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/typing-speed-game.git
cd typing-speed-game
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit inline CSS in `index.html` to modify gradient colors, key animations, or button styles.
- Update `script.js` to enhance gameplay (e.g., add new word lists, adjust scoring, or include sound effects).
- Modify `index.html` to add features like a pause button, custom word input, or additional difficulty levels.

## Usage
1. **Select Difficulty** 🎚️: Choose Easy, Medium, or Hard from the dropdown menu.
2. **Start Game** 🚀: Click the "Start Game" button to begin.
3. **Type Words** ⌨️: Type the displayed word in the input field (`wordInput`) and press Enter to submit.
4. **Monitor Stats** 📊: Track time left, score, and accuracy in real-time.
5. **Game Over** 🏁: View final score, accuracy, and high scores when time runs out.
6. **Restart** 🔄: Click "Restart Game" to play again.
7. **Animated Background** ✨: Enjoy the gradient and floating keyboard keys during gameplay.
8. **Responsive** 📱: Access the game on mobile or desktop for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html` and `script.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/typing-speed-game`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**: The `script.js` file must implement:
  - Word generation and display.
  - Timer based on selected difficulty.
  - Scoring and accuracy calculation.
  - High score storage (e.g., using `localStorage`).
  - Game state management (start, play, game over).
- **Styling**: Inline CSS in `index.html` handles all styling, including the gradient background and floating key animations. Consider moving styles to a separate `styles.css` file for maintainability.
- **Enhancements**: Consider adding:
  - Sound effects for typing or correct/incorrect words.
  - Visual feedback for correct/incorrect inputs.
  - Custom word lists or API-based word fetching.
  - Keyboard key animations tied to user input.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Typing speed game by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).
- **Performance**: The large number of animated keys may impact performance on low-end devices; consider reducing the number or optimizing animations.

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a fun and interactive typing challenge.
- Inspired by typing test games with modern web animations.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
