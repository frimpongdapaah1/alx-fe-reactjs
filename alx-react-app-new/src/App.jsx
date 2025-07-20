import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // 👈 import Counter

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Frimpong" age={24} bio="Loves cities and coding." />
      <Counter /> {/* 👈 Use the component here */}
      <Footer />
    </>
  );
}

export default App;
