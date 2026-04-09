import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Service from './pages/Service';
import Company from './pages/Company';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-container">
      <Header />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 300px)' }}>{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
