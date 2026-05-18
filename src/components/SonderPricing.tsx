import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function SonderPricing() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="tarifas" ref={ref} className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div 
          className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-6">
            Reserva directa. Mejor precio.
          </h2>
          <p className="text-lg text-sonder-darkgreen/80 max-w-2xl mx-auto">
            El apartasol es privado y se alquila completo. Capacidad máxima de hasta 6 personas para garantizar tu comodidad total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Noche entre semana */}
          <div 
            className={`bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Lunes a Jueves</p>
              <h3 className="font-serif text-4xl text-sonder-darkgreen mb-2">$250.000</h3>
              <p className="text-sonder-darkgreen/70">por noche</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-sonder-darkgreen/80 flex flex-col gap-3">
              <p>✓ Acceso a todas las comodidades</p>
              <p>✓ Hasta 6 huéspedes</p>
              <p>✓ Ideal para teletrabajo</p>
            </div>
          </div>

          {/* Fin de semana */}
          <div 
            className={`bg-[#193B33] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-lg relative transform md:-translate-y-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute top-0 right-8 bg-sonder-yellow text-white text-xs font-bold px-3 py-1 rounded-b-lg tracking-wider uppercase">
              MÁS POPULAR
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-white/70 uppercase mb-4 mt-2">Viernes a Domingo</p>
              <h3 className="font-serif text-4xl text-white mb-2">$350.000</h3>
              <p className="text-white/70">por noche</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-sm text-white/90 flex flex-col gap-3">
              <p>✓ Check-in flexible</p>
              <p>✓ Hasta 6 huéspedes</p>
              <p>✓ Ambiente de descanso total</p>
            </div>
            <a href="#reservar" className="mt-8 w-full">
              <Button variant="primary" className="w-full text-white">Consultar fechas</Button>
            </a>
          </div>

          {/* Semana completa */}
          <div 
            className={`bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Semana Completa</p>
              <h3 className="font-serif text-4xl text-sonder-darkgreen mb-2">15% Dto.</h3>
              <p className="text-sonder-darkgreen/70">sobre el valor total</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-sonder-darkgreen/80 flex flex-col gap-3">
              <p>✓ Estadías de 7+ noches</p>
              <p>✓ Descuento automático</p>
              <p>✓ Experiencia inmersiva</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
