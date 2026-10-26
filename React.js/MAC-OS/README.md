# macOS Inspired Portfolio

An interactive, macOS-inspired desktop portfolio built with React.js. The project recreates a desktop environment where users can explore different portfolio sections through draggable, resizable application windows and an interactive Dock.

## Live Demo

**[View Live Portfolio](https://miniproject-3rsoao7c8-sagar-projects5.vercel.app)**

## Overview

This project explores how a traditional portfolio can be presented as an interactive desktop experience rather than a conventional webpage.

Inspired by macOS, it features a desktop-style interface with multiple applications, window management, and interactive components. Each application provides a different way to explore content, projects, and other portfolio information.

## Features

- **macOS-Inspired Interface** — Desktop layout inspired by the macOS experience.
- **Interactive Dock** — Open applications through a desktop-style Dock.
- **Window Management** — Drag, resize, open, and close application windows.
- **Terminal / CLI** — Explore a terminal-style interface.
- **GitHub Projects** — Browse project-related information.
- **Resume Viewer** — Access resume content through a dedicated window.
- **Markdown Notes** — Render formatted notes using Markdown.
- **Syntax Highlighting** — Display code with syntax highlighting.
- **Spotify Window** — Dedicated window for a Spotify-inspired experience.
- **Live Date and Time** — Display a dynamic date and clock.
- **Component-Based Architecture** — Build the interface using reusable React components.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based UI development |
| JavaScript | Application logic and interactivity |
| SCSS | Styling and layout |
| React RND | Draggable and resizable windows |
| React Markdown | Rendering Markdown content |
| React Syntax Highlighter | Syntax-highlighted code blocks |
| Vercel | Deployment and hosting |

## Concepts Practiced

Building this project provided practical experience with:

- React components, props, and component composition
- State management with `useState`
- Side effects and lifecycle-related logic with `useEffect`
- Conditional rendering and dynamic UI updates
- Event handling and user interactions
- Rendering dynamic data
- Integrating and configuring third-party libraries
- Markdown rendering and code syntax highlighting
- Managing interactive UI elements and window behavior
- Deploying a React application with Vercel

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd <YOUR_PROJECT_DIRECTORY>
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore the application.

> If the project uses a different build tool or start script, use the command defined in your `package.json`.

## Project Structure

The project follows a component-based React architecture. The exact directory structure may vary depending on the implementation.

```text
project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── package.json
├── package-lock.json
└── README.md
```

## Deployment

The application is deployed on [Vercel](https://vercel.com/).

**Live URL:** https://miniproject-3rsoao7c8-sagar-projects5.vercel.app

## Future Improvements

- Improve responsiveness across desktop, tablet, and mobile screens.
- Add keyboard shortcuts for window management.
- Improve window focus, stacking, and minimize behavior.
- Persist selected desktop preferences across sessions.
- Improve accessibility and keyboard navigation.
- Add automated tests for core interactions.

## Author

**Sagar**

- GitHub: (https://github.com/Sagarrr11)


---

*Built as a hands-on project to explore React, interactive UI development, and component-based application design.*
