import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { PlayingStyleSection } from './sections/PlayingStyleSection';
import { StatsSection } from './sections/StatsSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { TrainingSection } from './sections/TrainingSection';
import { GoalsSection } from './sections/GoalsSection';
import { ContactSection } from './sections/ContactSection';
export function App() {
  return (
    <div className="w-full min-h-screen bg-gray-950">
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <PlayingStyleSection />
        <StatsSection />
        <HighlightsSection />
        <TrainingSection />
        <GoalsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>);

}