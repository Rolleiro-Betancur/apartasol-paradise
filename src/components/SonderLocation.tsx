import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { MapPin, Navigation, Clock } from 'lucide-react';

export function SonderLocation() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="como-llegar" ref={ref} className="w-full bg-sonder-cream text-sonder-darkgreen py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Info */}
        <div 
          className={`w-full lg:w-1/2 flex flex-col ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sonder-darkyellow font-bold mb-2">
            UBICACIÓN ESTRATÉGICA
          </p>
          <div className="w-12 h-1 bg-sonder-darkyellow mb-6"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-8 leading-tight">
            A un paso del sol<br />de Santa Fe
          </h2>
          
          <p className="text-sonder-darkgreen/80 leading-relaxed mb-10 text-lg">
            Ubicado en un sector tranquilo y seguro de Santa Fe de Antioquia, el apartasol te ofrece la privacidad que buscas sin alejarte de las comodidades del municipio.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sonder-lightgreen flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-sonder-darkgreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-sonder-darkgreen mb-1">Santa Fe de Antioquia</h4>
                <p className="text-sonder-darkgreen/70 text-sm">A pocos minutos del parque principal y la zona histórica.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sonder-lightgreen flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-sonder-darkgreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-sonder-darkgreen mb-1">A 1 hora de Medellín</h4>
                <p className="text-sonder-darkgreen/70 text-sm">Vía rápida por el túnel de occidente. Un trayecto cómodo y panorámico.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sonder-lightgreen flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-sonder-darkgreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-sonder-darkgreen mb-1">Fácil acceso</h4>
                <p className="text-sonder-darkgreen/70 text-sm">Vías pavimentadas hasta la puerta del apartasol. Parqueadero privado incluido.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Google Map */}
        <div 
          className={`w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.792576131439!2d-75.83060782387146!3d6.55169389345244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442db8196e83cd%3A0xc68297b5e4c022!2sSanta%20F%C3%A9%20de%20Antioquia%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1715802166948!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Mapa de Santa Fe de Antioquia"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
