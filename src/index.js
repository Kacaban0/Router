import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './index.css';

function Home() {
  return <h2>Strona główna</h2>;
}

function About() {
  return <h2>O nas</h2>;
}

function Contact() {
  return <h2>Kontakt</h2>;
}

function User() {
  const { name } = useParams();
  return <h2>Witaj, {name}!</h2>;
}

function NotFound() {
  return <h2>404 – Nie znaleziono strony</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/user/Janek">User: Janek</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
