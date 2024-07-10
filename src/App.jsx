import { useState } from 'react';
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Jumbotron />
      </main>
    </>
  )
}

export default App
