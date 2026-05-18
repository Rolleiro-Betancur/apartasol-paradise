import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

export function SonderTestimonials() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex] = useState(1);

  const testimonials = [
    {
      quote: "Fuimos un fin de semana en familia y el lugar superó nuestras expectativas. Súper limpio, la cocina muy completa y la terraza es increíble para descansar.",
      author: "Carolina M.",
      location: "Familia de Medellín",
      bgColor: "bg-[#EAECE6]", // Pale green
      borderRadius: "rounded-br-[80px]" // Bottom-right rounded
    },
    {
      quote: `"El apartasol es exactamente como en las fotos. No tuvimos que llevar casi nada, el clima estuvo perfecto y la atención por WhatsApp fue muy rápida."`,
      author: "Luis y Camila",
      location: "Escapada en pareja",
      bgColor: "bg-[#FDF3CC]", // Pale yellow
      borderRadius: "rounded-tr-[80px]" // Top-right rounded
    },
    {
      quote: `"¡Un lugar espectacular! Celebramos un cumpleaños aquí con amigos y todo fue muy cómodo. El aire acondicionado funciona perfecto. Volveremos seguro."`,
      author: "Santiago G.",
      location: "Grupo de amigos",
      bgColor: "bg-[#DFAD36]", // Mustard yellow
      borderRadius: "rounded-tl-[80px]" // Top-left rounded
    },
    {
      quote: `"La tranquilidad del sector no tiene precio. Además el proceso de reserva directa sin intermediarios nos dio mucha confianza. 10/10."`,
      author: "Familia Restrepo",
      location: "Medellín",
      bgColor: "bg-[#EAECE6]",
      borderRadius: "rounded-bl-[80px]" // Bottom-left rounded
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="w-full bg-sonder-cream py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div 
          className={`mb-16 max-w-xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-6">
            Cada estadía tiene su historia
          </h2>
          <p className="text-lg text-sonder-darkgreen/80">
            Es difícil explicar en palabras la paz que se siente aquí. Pero nuestros huéspedes lo resumen bastante bien.
          </p>
        </div>

      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-sonder-darkgreen hover:bg-white shadow-sm transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-sonder-darkgreen hover:bg-white shadow-sm transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '0.2s', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 w-[300px] md:w-[400px] h-[350px] snap-center p-10 flex flex-col justify-between shadow-sm ${t.bgColor} ${t.borderRadius}`}
            >
              <p className={`text-xl md:text-2xl leading-snug font-serif ${t.bgColor === 'bg-[#DFAD36]' ? 'text-white' : 'text-sonder-darkgreen'}`}>
                {t.quote}
              </p>
              <div>
                <p className={`font-bold ${t.bgColor === 'bg-[#DFAD36]' ? 'text-white' : 'text-sonder-darkgreen'}`}>{t.author}</p>
                <p className={`text-sm ${t.bgColor === 'bg-[#DFAD36]' ? 'text-white/80' : 'text-sonder-darkgreen/70'}`}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full border border-sonder-darkgreen transition-colors ${idx === activeIndex ? 'bg-sonder-darkgreen' : 'bg-transparent'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
