import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HomePage from './pages/HomePage/HomePage'
import AdminPage from './pages/AdminPage/AdminPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './style/style.css'
import './style/mainStyle.scss'


// carousel https://swiperjs.com



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/administrator" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </Router>

  </React.StrictMode >
);

function NotFound() {
  return <h1>404 Not Found</h1>;
} 
