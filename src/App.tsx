import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Generator from './components/Generator';

export default function App() {
  const [screen, setScreen] = useState<'hero' | 'generator'>('hero');

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white antialiased">
      <Header />
      {screen === 'hero' ? (
        <Hero onStart={() => setScreen('generator')} />
      ) : (
        <Generator onBack={() => setScreen('hero')} />
      )}
    </div>
  );
}
