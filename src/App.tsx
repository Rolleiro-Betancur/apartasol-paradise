import { SonderHero } from './components/SonderHero';
import { SonderAmenities } from './components/SonderAmenities';
import { SonderAbout } from './components/SonderAbout';
import { SonderGrid } from './components/SonderGrid';
import { SonderTabs } from './components/SonderTabs';
import { SonderTestimonials } from './components/SonderTestimonials';
import { SonderPricing } from './components/SonderPricing';
import { SonderLocation } from './components/SonderLocation';
import { SonderContact } from './components/SonderContact';
import { SonderInfiniteSlider } from './components/SonderInfiniteSlider';
import { SonderFooter } from './components/SonderFooter';

function App() {
  return (
    <div className="min-h-screen bg-sonder-cream text-sonder-darkgreen font-sans overflow-x-hidden selection:bg-sonder-darkgreen selection:text-white flex flex-col scroll-smooth">
      <SonderHero />
      <SonderAmenities />
      <SonderAbout />
      <SonderGrid />
      <SonderTabs />
      <SonderTestimonials />
      <SonderPricing />
      <SonderLocation />
      <SonderContact />
      <SonderInfiniteSlider />
      <SonderFooter />
    </div>
  );
}

export default App;
