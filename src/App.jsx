import { useState } from 'react';
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Statistics from './components/Statistics.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Jumbotron />
        <Statistics />
        <AboutUs />
      </main>
    </>
  )
}

export default App
