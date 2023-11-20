import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from'./Components/Home';
import Navbar from './Components/Navbar';
import CustomButton from './Components/CustomButton';
import About from './Components/About';
import Creation from './Components/Creations';
import Creation2 from './Components/Creation 2';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home/>
   <Navbar/>
   <CustomButton/>
   <About/>
   <Creation/>
   <Creation2/>
   <Footer/>

  </React.StrictMode>
);
export default root;