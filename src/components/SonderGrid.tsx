import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import pagePrincipal from '../assets/pagePrincipal.jpeg';

export function SonderGrid() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  const locations = [
    {
      title: "Sala de Estar",
      desc: "CONCEPTO ABIERTO",
      image: img2,
      positionClass: "object-center"
    },
    {
      title: "Terraza Privada",
      desc: "ZONA DE DESCANSO",
      image: img3,
      positionClass: "object-center"
    },
    {
      title: "Sala de TV",
      desc: "ENTRETENIMIENTO",
      image: img4,
      positionClass: "object-center"
    },
    {
      title: "Habitación Principal",
      desc: "CONFORT TOTAL",
      image: img5,
      positionClass: "object-center"
    },
    {
      title: "Habitación Múltiple",
      desc: "IDEAL PARA TODOS",
      image: img6,
      positionClass: "object-center"
    },
    {
      title: "Detalles Únicos",
      desc: "DISEÑO CÁLIDO",
      image: pagePrincipal,
      positionClass: "object-center"
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

        {/* Uniform Grid Layout with exact same dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-start">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out group bg-white">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className={`w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${loc.positionClass}`}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-sonder-darkgreen/65 uppercase mb-1">{loc.desc}</p>
                <h3 className="font-serif text-2xl font-semibold text-sonder-darkgreen leading-tight">{loc.title}</h3>
              </div>
            </div>
          ))}
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
