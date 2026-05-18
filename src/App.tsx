import { SonderHero } from './components/SonderHero';
import { Sonder3DHouse } from './components/Sonder3DHouse';
import { SonderAbout } from './components/SonderAbout';
import { SonderGrid } from './components/SonderGrid';
import { SonderTabs } from './components/SonderTabs';
import { SonderTestimonials } from './components/SonderTestimonials';
import { SonderPricing } from './components/SonderPricing';
import { SonderLocation } from './components/SonderLocation';
import { SonderContact } from './components/SonderContact';
import { SonderFooter } from './components/SonderFooter';

function App() {
  return (
    <div className="min-h-screen bg-sonder-cream text-sonder-darkgreen font-sans overflow-x-hidden selection:bg-sonder-darkgreen selection:text-white flex flex-col scroll-smooth">
      <SonderHero />
      <Sonder3DHouse />
      <SonderAbout />
      <SonderGrid />
      <SonderTabs />
      <SonderTestimonials />
      <SonderPricing />
      <SonderLocation />
      <SonderContact />
      <SonderFooter />
    </div>
  );
}

export default App;
