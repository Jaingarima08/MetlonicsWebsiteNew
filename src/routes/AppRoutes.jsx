import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Infrastructure from '../pages/Infrastructure';
import Product from '../pages/Product';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
         <Route
          path="/infrastructure"
          element={
            <MainLayout>
              <Infrastructure />
            </MainLayout>
          }
        />
         <Route
          path="/product"
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />
         <Route
          path="/certifications"
          element={
            <MainLayout>
              <Certifications/>
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
