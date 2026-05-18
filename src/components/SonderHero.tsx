import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import { MapPin, Calendar, Users, Menu } from 'lucide-react';

import pagePrincipal from '../assets/pagePrincipal.jpeg';

export function SonderHero() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <div id="inicio" className="w-full bg-sonder-cream">
      {/* Navbar */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between sticky top-0 bg-sonder-cream/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-sonder-darkgreen text-xl md:text-2xl tracking-tight">Apartasol Paradise</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm text-sonder-darkgreen font-medium">
          <a href="#el-apartasol" className="hover:opacity-70 transition-opacity">El Apartasol</a>
          <a href="#espacios" className="hover:opacity-70 transition-opacity">Espacios</a>
          <a href="#comodidades" className="hover:opacity-70 transition-opacity">Comodidades</a>
          <a href="#tarifas" className="hover:opacity-70 transition-opacity">Tarifas</a>
          <a href="#como-llegar" className="hover:opacity-70 transition-opacity">Cómo llegar</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#reservar">
            <Button variant="dark" className="px-6 py-2 text-sm">Reservar Directo</Button>
          </a>
        </div>

        <button className="lg:hidden text-sonder-darkgreen">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Content */}
      <section ref={ref} className="w-full relative px-6 md:px-12 pt-12 pb-32 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 z-10 pr-4 md:pr-12">
          <h1 
            className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-sonder-darkgreen mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Todo lo que tu<br />familia necesita<br />está aquí.
          </h1>
          <p 
            className={`text-lg md:text-xl text-sonder-darkgreen/80 leading-relaxed max-w-md ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Descubre tu propio espacio privado en Santa Fe de Antioquia. Diseñado para ofrecerte la calidez de un hogar y el descanso que mereces, sin intermediarios.
          </p>
          
          <div className={`mt-8 flex items-center gap-2 text-sm text-sonder-darkgreen/60 font-medium ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <MapPin className="w-4 h-4" />
            <span>Santa Fe de Antioquia  |  Estadía Privada</span>
          </div>
        </div>
        
        <div 
          className={`w-full md:w-1/2 h-[400px] md:h-[600px] mt-10 md:mt-0 relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* Diagonal geometric shape simulating Sonder's triangle */}
          <div className="absolute inset-0 bg-[#EAC9B8] clip-diagonal -z-10"></div>
          <img 
            src={pagePrincipal} 
            alt="Terraza del Apartasol" 
            className="w-full h-full object-cover shadow-xl max-w-lg ml-auto relative top-8 md:top-16"
          />
        </div>

        <style>{`
          .clip-diagonal {
            clip-path: polygon(0 100%, 50% 0, 100% 100%);
          }
        `}</style>
      </section>

      {/* Floating Booking Bar */}
      <div className="w-full px-6 md:px-12 relative z-20 -mt-20 flex justify-center pb-12">
        <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 md:p-4 flex flex-col md:flex-row items-center w-full max-w-4xl gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div className="flex items-center justify-center gap-4 px-6 w-full md:w-1/2 py-3 md:py-0 text-sonder-darkgreen">
            <Calendar className="w-5 h-5 opacity-50" />
            <div className="flex items-center gap-3 w-full">
              <span className="opacity-50 text-sm md:text-base">Llegada</span>
              <span>→</span>
              <span className="opacity-50 text-sm md:text-base">Salida</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 w-full md:w-1/2 py-3 md:py-0 text-sonder-darkgreen">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 opacity-50" />
              <div className="flex items-center gap-4">
                <span className="opacity-80 text-sm md:text-base">Huéspedes</span>
                <div className="flex items-center gap-3">
                  <button className="opacity-50 hover:opacity-100 font-bold">−</button>
                  <span className="font-medium">2</span>
                  <button className="opacity-50 hover:opacity-100 font-bold">+</button>
                </div>
              </div>
            </div>
            <a href="#reservar" className="hidden md:block">
              <Button variant="primary" className="px-8 shadow-md hover:shadow-lg">Ver Disponibilidad</Button>
            </a>
          </div>
          <a href="#reservar" className="w-full block md:hidden mt-2">
            <Button variant="primary" className="w-full">Ver Disponibilidad</Button>
          </a>

        </div>
      </div>
    </div>
  );
}
