import React, { useState } from 'react';
import { Tab } from './utils/libs';
import Navigation from './components/Navigation';
import ConceptSlide from './components/ConceptSlide';
import HeritageSlide from './components/HeritageSlide';
import StrategySlide from './components/StrategySlide';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.IMPACT);

  return (
    <div className="min-h-screen w-full bg-cream text-teal-deep relative overflow-hidden font-sans selection:bg-warmYellow/30">
      
      {/* Decorative Background Element - Subtle and Organic */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-base/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-warmYellow/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === Tab.IMPACT && <ConceptSlide key="concept" />}
          {activeTab === Tab.LEGACY && <HeritageSlide key="heritage" />}
          {activeTab === Tab.SYNERGY && <StrategySlide key="strategy" />}
        </AnimatePresence>
      </main>

      {/* Navigation Dock */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;