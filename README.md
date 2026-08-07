# Unhooked

**Unhooked** is a Chrome extension that transforms YouTube into a distraction-free learning platform by removing distractions and providing built-in tools for note-taking and revision.

---

## Features

### Distraction-Free Learning
- Hides recommended videos to keep users focused on the current lecture.
- Hides the comments section to eliminate unnecessary distractions.
- Creates a cleaner and more productive learning environment.

### Smart Notes Panel
- Built using **React**.
- Take notes while watching videos without switching tabs.
- Notes are automatically saved and restored whenever the extension is reopened.

### Timestamped Screenshots
- Capture screenshots of important moments in a lecture.
- Every screenshot is saved together with its corresponding video timestamp.
- Clicking a saved screenshot takes you back to the exact moment in the video, making revision faster and more efficient.

---

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CRXJS
- Chrome Extension Manifest V3
- Chrome Storage API
- HTML
- CSS

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd unhooked
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build the extension

```bash
npm run build
```

### 6. Load the extension in Chrome

1. Open Chrome and visit:

```
chrome://extensions
```

2. Enable **Developer Mode**.
3. Click **Load unpacked**.
4. Select the generated build folder.

---

## How It Works

- Removes YouTube recommendations and comments using **content scripts**.
- Provides a **React-based side panel** for taking notes while learning.
- Saves notes and timestamped screenshots using the **Chrome Storage API**.
- Clicking a saved screenshot automatically seeks the video to the exact timestamp where it was captured.

---

## Motivation

YouTube is one of the best platforms for learning, but it is also full of distractions. Recommendations, comments, and endless suggested videos often interrupt a learner's focus.

**Unhooked** was built to remove these distractions and provide an integrated workspace where users can learn, take notes, and revisit important moments efficiently.

---






