import { useState } from 'react';
import Header from './components/Header.jsx';
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
