import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img1 from '../assets/img1.jpeg';

export function SonderGrid() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  const locations = [
    {
      title: "Sala de Estar",
      desc: "CONCEPTO ABIERTO",
      image: img2,
      rounded: false,
      positionClass: "object-top",
      heightClass: "h-[300px] md:h-[350px]"
    },
    {
      title: "Terraza Privada",
      desc: "ZONA DE DESCANSO",
      image: img3,
      rounded: true,
      large: true,
      positionClass: "object-top",
      heightClass: "h-[350px] md:h-[450px]"
    },
    {
      title: "Sala de TV",
      desc: "ENTRETENIMIENTO",
      image: img4,
      rounded: false,
      positionClass: "object-top", // This ensures the TV at the top is not cropped
      heightClass: "h-[300px] md:h-[350px]"
    },
    {
      title: "Habitación Principal",
      desc: "CONFORT TOTAL",
      image: img5,
      rounded: false,
      positionClass: "object-top",
      heightClass: "h-[300px] md:h-[350px]"
    },
    {
      title: "Habitación Múltiple",
      desc: "IDEAL PARA TODOS",
      image: img6,
      rounded: false,
      positionClass: "object-top",
      heightClass: "h-[220px] md:h-[260px]"
    },
    {
      title: "Detalles Únicos",
      desc: "DISEÑO CÁLIDO",
      image: img1,
      rounded: false,
      positionClass: "object-top",
      heightClass: "h-[220px] md:h-[260px]"
    }
  ];

  return (
    <section id="espacios" ref={ref} className="w-full bg-sonder-cream py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div 
          className={`mb-16 max-w-2xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-6">
            Recorre tus espacios
          </h2>
          <p className="text-lg text-sonder-darkgreen/80">
            Un diseño de concepto abierto que invita a compartir. Descubre cada rincón preparado especialmente para ti y tu familia.
          </p>
        </div>

        {/* Masonry-like layout using grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-12">
            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <img src={locations[0].image} alt={locations[0].title} className={`w-full ${locations[0].heightClass} object-cover rounded-lg shadow-sm ${locations[0].positionClass}`} />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[0].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[0].title}</h3>
              </div>
            </div>
            
            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <img src={locations[3].image} alt={locations[3].title} className={`w-full ${locations[3].heightClass} object-cover rounded-lg shadow-sm ${locations[3].positionClass}`} />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[3].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Column 2 - Center */}
          <div className="flex flex-col gap-12 md:-mt-12">
            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <img 
                src={locations[1].image} 
                alt={locations[1].title} 
                className={`w-full ${locations[1].heightClass} object-cover rounded-tr-[80px] rounded-l-lg rounded-br-lg shadow-md ${locations[1].positionClass}`} 
              />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[1].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[1].title}</h3>
              </div>
            </div>

            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.7s' }}
            >
              <img src={locations[5].image} alt={locations[5].title} className={`w-full ${locations[5].heightClass} object-cover rounded-lg shadow-sm ${locations[5].positionClass}`} />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[5].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[5].title}</h3>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-12">
            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <img src={locations[2].image} alt={locations[2].title} className={`w-full ${locations[2].heightClass} object-cover rounded-lg shadow-sm ${locations[2].positionClass}`} />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[2].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[2].title}</h3>
              </div>
            </div>
            
            <div 
              className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              <img src={locations[4].image} alt={locations[4].title} className={`w-full ${locations[4].heightClass} object-cover rounded-lg shadow-sm ${locations[4].positionClass}`} />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen uppercase mb-1">{locations[4].desc}</p>
                <h3 className="font-serif text-2xl text-sonder-darkgreen">{locations[4].title}</h3>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <a href="#comodidades">
            <Button variant="dark">Ver todas las comodidades</Button>
          </a>
        </div>

      </div>
    </section>
  );
}
