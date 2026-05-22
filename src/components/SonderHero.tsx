import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import { MapPin, Calendar, Users, Menu, X } from 'lucide-react';

import img1 from '../assets/img1.jpeg';

export function SonderHero() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGuestsChange = (val: number) => {
    setGuests(prev => Math.min(10, Math.max(1, prev + val)));
  };

  const handleSearchAvailability = () => {
    const checkInStr = checkIn ? checkIn : 'Por definir';
    const checkOutStr = checkOut ? checkOut : 'Por definir';
    const message = `¡Hola! Me interesa reservar el Apartasol. Fechas: ${checkInStr} al ${checkOutStr} para ${guests} huéspedes. ¿Tienen disponibilidad?`;
    const whatsappUrl = `https://wa.me/573226707469?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-sonder-darkgreen focus:outline-none p-1 hover:opacity-75 transition-opacity"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-[280px] sm:w-[320px] h-full bg-sonder-cream p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between pb-6 border-b border-sonder-darkgreen/10">
              <span className="font-serif font-bold text-sonder-darkgreen text-lg">Menú</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-sonder-darkgreen p-1 hover:opacity-70 transition-opacity"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base text-sonder-darkgreen font-medium">
              <a 
                href="#el-apartasol" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-sonder-yellow transition-colors py-2 border-b border-sonder-darkgreen/5"
              >
                El Apartasol
              </a>
              <a 
                href="#espacios" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-sonder-yellow transition-colors py-2 border-b border-sonder-darkgreen/5"
              >
                Espacios
              </a>
              <a 
                href="#comodidades" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-sonder-yellow transition-colors py-2 border-b border-sonder-darkgreen/5"
              >
                Comodidades
              </a>
              <a 
                href="#tarifas" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-sonder-yellow transition-colors py-2 border-b border-sonder-darkgreen/5"
              >
                Tarifas
              </a>
              <a 
                href="#como-llegar" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-sonder-yellow transition-colors py-2 border-b border-sonder-darkgreen/5"
              >
                Cómo llegar
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a href="#reservar" onClick={() => setIsMenuOpen(false)}>
              <Button variant="dark" className="w-full py-3 text-sm tracking-wider uppercase font-bold">
                Reservar Directo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <section ref={ref} className="w-full relative px-6 md:px-12 pt-12 pb-32 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 z-10 pr-4 md:pr-12">
          <h1 
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-sonder-darkgreen mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Todo lo que tu<br className="hidden md:inline" /> familia necesita para<br className="hidden md:inline" />
            <span className="relative inline-block text-sonder-yellow italic font-serif px-2 transition-all duration-300 hover:scale-105 select-none">
              descansar
              <svg 
                className="absolute -bottom-1 left-0 w-full h-[12px] text-sonder-yellow overflow-visible pointer-events-none" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none" 
                fill="none"
              >
                <path 
                  d="M3 6C35 2 70 2 97 5" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-line"
                />
                <path 
                  d="M12 8.5C40 6 70 5.5 88 7.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  className="animate-draw-line-delayed"
                />
              </svg>
            </span> lo encuentras aquí.
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
          className={`w-full md:w-1/2 h-[380px] md:h-[500px] mt-10 md:mt-0 relative flex items-center justify-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* Elegant background offset cards for a premium overlapping look */}
          <div className="absolute inset-0 bg-sonder-lightgreen/70 rounded-3xl -rotate-2 transform scale-95 origin-center"></div>
          <div className="absolute inset-0 border border-sonder-darkgreen/15 rounded-3xl rotate-1 transform scale-98 origin-center"></div>
          
          <div className="w-full h-full p-3 bg-white rounded-3xl shadow-xl relative z-10 overflow-hidden">
            <img 
              src={img1} 
              alt="Terraza del Apartasol" 
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
        </div>

        <style>{`
          @keyframes draw {
            from { stroke-dashoffset: 120; }
            to { stroke-dashoffset: 0; }
          }
          .animate-draw-line {
            stroke-dasharray: 120;
            stroke-dashoffset: 120;
            animation: draw 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-delay: 0.6s;
          }
          .animate-draw-line-delayed {
            stroke-dasharray: 120;
            stroke-dashoffset: 120;
            animation: draw 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-delay: 0.9s;
          }
        `}</style>
      </section>

      {/* Floating Booking Bar */}
      <div className="w-full px-6 md:px-12 relative z-20 -mt-16 flex justify-center pb-12">
        <div className="bg-white rounded-[28px] md:rounded-full shadow-[0_12px_40px_rgba(25,59,51,0.08)] p-4 flex flex-col md:flex-row items-center w-full max-w-4xl gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-150">
          
          <div className="flex items-center gap-4 px-6 w-full md:w-[55%] py-3 md:py-1 text-sonder-darkgreen">
            <Calendar className="w-5 h-5 text-sonder-darkgreen opacity-70 flex-shrink-0" />
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col items-start w-1/2 relative">
                <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold mb-1">Llegada</span>
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent border-none outline-none text-sonder-darkgreen font-medium w-full text-xs md:text-sm cursor-pointer"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <span className="opacity-30 font-light text-lg">→</span>
              <div className="flex flex-col items-start w-1/2 relative">
                <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold mb-1">Salida</span>
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent border-none outline-none text-sonder-darkgreen font-medium w-full text-xs md:text-sm cursor-pointer"
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 w-full md:w-[45%] py-4 md:py-1 text-sonder-darkgreen">
            <div className="flex items-center gap-4">
              <Users className="w-5 h-5 text-sonder-darkgreen opacity-70" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold mb-1">Huéspedes</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleGuestsChange(-1)}
                    className="w-7 h-7 rounded-full border border-sonder-darkgreen/15 flex items-center justify-center hover:bg-sonder-darkgreen hover:text-white hover:border-sonder-darkgreen transition-all font-bold text-sm select-none"
                  >
                    −
                  </button>
                  <span className="font-semibold text-sm w-4 text-center">{guests}</span>
                  <button 
                    onClick={() => handleGuestsChange(1)}
                    className="w-7 h-7 rounded-full border border-sonder-darkgreen/15 flex items-center justify-center hover:bg-sonder-darkgreen hover:text-white hover:border-sonder-darkgreen transition-all font-bold text-sm select-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleSearchAvailability}
              className="hidden md:block"
            >
              <Button variant="primary" className="px-8 shadow-md hover:shadow-lg transition-all transform active:scale-95 duration-150">
                Ver Disponibilidad
              </Button>
            </button>
          </div>
          
          <button 
            onClick={handleSearchAvailability} 
            className="w-full block md:hidden mt-2 pt-2"
          >
            <Button variant="primary" className="w-full shadow-md py-3.5">
              Ver Disponibilidad
            </Button>
          </button>

        </div>
      </div>
    </div>
  );
}
