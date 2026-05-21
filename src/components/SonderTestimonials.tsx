import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

export function SonderTestimonials() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: `"Fuimos un fin de semana en familia y el lugar superó nuestras expectativas. Súper limpio, la cocina muy completa y la terraza es increíble para descansar."`,
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
      bgColor: "bg-[#EAECE6]", // Pale green
      borderRadius: "rounded-bl-[80px]" // Bottom-left rounded
    },
    {
      quote: `"Ideal para desconectarse de la ciudad. Las zonas comunes son muy tranquilas y el apartamento tiene todo lo necesario para teletrabajar y descansar."`,
      author: "Andrés F.",
      location: "Nómada digital",
      bgColor: "bg-[#FDF3CC]", // Pale yellow
      borderRadius: "rounded-br-[80px]" // Bottom-right rounded
    },
    {
      quote: `"La piscina es espectacular y el apartamento es súper fresco. La atención de los anfitriones fue inmejorable, siempre atentos por WhatsApp."`,
      author: "Valeria y Felipe",
      location: "Viaje de fin de semana",
      bgColor: "bg-[#DFAD36]", // Mustard yellow
      borderRadius: "rounded-tr-[80px]" // Top-right rounded
    },
    {
      quote: `"Un lugar impecable y muy acogedor. Viajamos con niños pequeños y les encantó el espacio. El aire acondicionado y el internet de fibra funcionaron de maravilla."`,
      author: "Mariana R.",
      location: "Familia de Envigado",
      bgColor: "bg-[#EAECE6]", // Pale green
      borderRadius: "rounded-tl-[80px]" // Top-left rounded
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const firstChild = container.firstElementChild as HTMLElement;
    if (firstChild) {
      const cardWidth = firstChild.getBoundingClientRect().width + 24; // card width + gap-6
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section ref={ref} className="w-full bg-sonder-cream py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with realigned navigation controls to prevent overlaps */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className={`max-w-xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-6">
              Cada estadía tiene su historia
            </h2>
            <p className="text-lg text-sonder-darkgreen/80">
              Es difícil explicar en palabras la paz que se siente aquí. Pero nuestros huéspedes lo resumen bastante bien.
            </p>
          </div>
          
          <div className={`hidden md:flex items-center gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-sonder-darkgreen/20 flex items-center justify-center text-sonder-darkgreen hover:bg-sonder-darkgreen hover:text-white transition-all shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-sonder-darkgreen/20 flex items-center justify-center text-sonder-darkgreen hover:bg-sonder-darkgreen hover:text-white transition-all shadow-sm"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '0.2s', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 w-[300px] md:w-[400px] h-[350px] snap-center p-10 flex flex-col justify-between shadow-md ${t.bgColor} ${t.borderRadius}`}
            >
              <p className="text-xl md:text-2xl leading-snug font-serif text-sonder-darkgreen">
                {t.quote}
              </p>
              <div>
                <p className="font-bold text-sonder-darkgreen">{t.author}</p>
                <p className="text-sm text-sonder-darkgreen/70">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full border border-sonder-darkgreen transition-colors duration-300 ${idx === activeIndex ? 'bg-sonder-darkgreen' : 'bg-transparent'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
