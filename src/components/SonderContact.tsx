import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';
import img8 from '../assets/img8.jpeg';

export function SonderContact() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="reservar" ref={ref} className="w-full bg-sonder-cream py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Side: Image with dotted pattern */}
        <div 
          className={`w-full md:w-1/2 relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {/* Dotted Pattern Background */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 -z-10 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="#193B33" cx="2" cy="2" r="2"></circle>
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
            </svg>
          </div>
          
          <div className="bg-white p-4 shadow-lg inline-block relative z-10 w-full">
            <img 
              src={img8} 
              alt="Disfruta tu descanso" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div 
          className={`w-full md:w-1/2 flex flex-col ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
            RESERVA DIRECTA
          </p>
          <div className="w-12 h-1 bg-gray-300 mb-6"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2825] mb-6 leading-tight">
            ¿LISTO PARA TU<br />DESCANSO?
          </h2>
          
          <p className="text-gray-600 mb-8">
            Reserva directamente con nosotros para garantizar el mejor precio, sin comisiones de plataformas. Escríbenos por WhatsApp para confirmar disponibilidad inmediata.
          </p>

          <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="w-full mb-8">
            <Button variant="dark" className="w-full py-4 text-base flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-lg">
              <MessageCircle className="w-5 h-5" />
              RESERVAR POR WHATSAPP
            </Button>
          </a>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">O envíanos un mensaje</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full px-4 py-3 bg-white border border-gray-200 outline-none focus:border-sonder-darkgreen text-sm text-gray-700 shadow-sm"
              />
              <input 
                type="text" 
                placeholder="Apellido" 
                className="w-full px-4 py-3 bg-white border border-gray-200 outline-none focus:border-sonder-darkgreen text-sm text-gray-700 shadow-sm"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full px-4 py-3 bg-white border border-gray-200 outline-none focus:border-sonder-darkgreen text-sm text-gray-700 shadow-sm"
            />
            
            <textarea 
              placeholder="¿Qué fechas te interesan?" 
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-200 outline-none focus:border-sonder-darkgreen text-sm text-gray-700 shadow-sm resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-[#8A7969] hover:bg-[#6D5F52] text-white py-4 font-bold tracking-widest text-sm uppercase transition-colors rounded-full"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
