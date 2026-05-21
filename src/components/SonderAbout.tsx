import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function SonderAbout() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="el-apartasol" ref={ref} className="w-full bg-white text-sonder-darkgreen py-24 px-6 md:px-12 relative overflow-hidden border-b border-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start text-left">
        <h2
          className={`font-sans text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6 text-sonder-darkgreen ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          TU DESCANSO COMIENZA AHORA
        </h2>

        <p
          className={`text-lg md:text-xl text-sonder-darkgreen/80 leading-relaxed max-w-2xl mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Sabemos que tu tiempo de vacaciones es invaluable. Por eso, hemos cuidado cada detalle de nuestro apartasol en Santa Fe de Antioquia para que solo tengas que preocuparte por disfrutar con los tuyos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
          {/* Confianza */}
          <div
            className={`border-l-[3px] border-sonder-darkgreen pl-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="font-serif text-3xl text-sonder-darkgreen mb-3">Confianza</h3>
            <p className="text-sonder-darkgreen/70 text-base md:text-[17px] leading-relaxed">
              Lo que ves es lo que vives. Un espacio real, impecable y exactamente como aparece en nuestras fotos. Sin sorpresas, solo tranquilidad.
            </p>
          </div>

          {/* Calidez */}
          <div
            className={`border-l-[3px] border-sonder-darkgreen pl-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="font-serif text-3xl text-sonder-darkgreen mb-3">Calidez</h3>
            <p className="text-sonder-darkgreen/70 text-base md:text-[17px] leading-relaxed">
              No es un simple alojamiento, es tu hogar en Santa Fe. Cada rincón está pensado para ser habitado, brindando comodidad absoluta para tu familia.
            </p>
          </div>

          {/* Descanso */}
          <div
            className={`border-l-[3px] border-sonder-darkgreen pl-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <h3 className="font-serif text-3xl text-sonder-darkgreen mb-3">Descanso</h3>
            <p className="text-sonder-darkgreen/70 text-base md:text-[17px] leading-relaxed">
              Visualiza tu pausa. Espacios diseñados para desconectar del ruido de la ciudad y conectar con los tuyos en total privacidad.
            </p>
          </div>
        </div>

        <div
          className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <a href="#espacios">
            <Button variant="outline" className="border-sonder-darkgreen text-sonder-darkgreen hover:bg-sonder-darkgreen hover:text-white rounded-full px-8 py-3 tracking-widest text-xs uppercase font-bold transition-all duration-300">
              VER ESPACIOS 🏠
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
