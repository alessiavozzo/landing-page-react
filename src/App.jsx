import { useState } from 'react';
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Statistics from './components/Statistics.jsx';
import AboutUs from './components/AboutUs.jsx';
import Categories from './components/Categories.jsx';
import Courses from './components/Courses.jsx';
import Feedbacks from './components/Feedbacks.jsx';
import Teachers from './components/Teachers.jsx';
import Values from './components/Values.jsx';
import Steps from './components/Steps.jsx';
import NewsletterBanner from './components/NewsletterBanner.jsx';

import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <Jumbotron />
        <Statistics />
        <AboutUs />
        <Categories />
        <Courses />
        <Feedbacks />
        <Teachers />
        <Values />
        <Steps />
        <NewsletterBanner />
      </main>
    </>
  )
}

export default App
