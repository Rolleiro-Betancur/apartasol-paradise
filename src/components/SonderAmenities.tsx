import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { KeyRound, Car, Wifi, Utensils, CupSoda, Waves } from 'lucide-react';

export function SonderAmenities() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  const amenities = [
    {
      icon: <KeyRound className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Cerradura Inteligente",
    },
    {
      icon: <Car className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Parqueadero Gratis",
    },
    {
      icon: <Wifi className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Wifi de Alta Velocidad",
    },
    {
      icon: <Utensils className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Cocina Equipada",
    },
    {
      icon: <CupSoda className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Zona de BBQ",
    },
    {
      icon: <Waves className="w-8 h-8 text-sonder-yellow stroke-[1.25]" />,
      title: "Piscina Privada",
    },
  ];

  return (
    <section 
      ref={ref} 
      className="w-full bg-sonder-cream py-16 px-6 md:px-12 select-none border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-[#E0B042]/10 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#E0B042]/30 hover:scale-[1.02] transition-all duration-500 ease-out min-h-[150px] ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-center transform hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-sonder-darkgreen tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
