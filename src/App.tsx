import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RentalsPage from './pages/RentalsPage';
import RestaurantsPage from './pages/RestaurantsPage';
import CasesPage from './pages/CasesPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import BlogPage from './pages/BlogPage';
import FeaturesPage from './pages/FeaturesPage';
import RoadmapPage from './pages/RoadmapPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import FreeTrial from './pages/FreeTrial';
import DashboardPage from './pages/DashboardPage';
import { ChatWidget } from './components/chat/ChatWidget';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/short-term-rentals" element={<RentalsPage />} />
          <Route path="/restaurant" element={<RestaurantsPage />} />
          <Route path="/case-studies" element={<CasesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}