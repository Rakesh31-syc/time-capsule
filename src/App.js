import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import LetterWriting from './components/LetterWriting';
import './styles/Header.css';
import './styles/Main.css';
import './styles/Footer.css';
import './styles/SignUp.css';
import './styles/LetterWriting.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/letter-writing" element={<LetterWriting />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;