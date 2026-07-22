import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const container = document.getElementById("my-react-root");
createRoot(container).render(<App />);