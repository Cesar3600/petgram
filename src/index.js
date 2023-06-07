import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

const containerRoot = document.getElementById('app')
const root = createRoot(containerRoot)

root.render(<App />)
