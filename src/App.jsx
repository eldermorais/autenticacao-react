import './App.css';

import React from 'react'
import { Routes } from './components/Routes';
import './App.css'
import { Router } from 'react-router-dom';
import history from './history'
import ContextProvider from './contexts';

export default function App() {
  return (
    <main className="app">
      <ContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ContextProvider>
    </main>
  )
}

