import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function Sonder3DHouse() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="w-full bg-sonder-cream py-20 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div 
          className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-4">
            Explora tu próximo descanso
          </h2>
          <p className="text-lg text-sonder-darkgreen/80 max-w-2xl mx-auto">
            Interactúa con nuestro modelo 3D realista para visualizar la distribución y el diseño arquitectónico de nuestro espacio antes de tu llegada.
          </p>
        </div>

        <div 
          className={`w-full max-w-5xl h-[500px] md:h-[600px] rounded-[32px] overflow-hidden shadow-xl bg-white relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* Sketchfab realistic modern house embed */}
          <iframe 
            title="Modern House 3D" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            className="absolute inset-0 w-full h-full"
            src="https://sketchfab.com/models/18a287daa32540b6bafab9efd8741442/embed?autostart=1&camera=0&preload=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=2&ui_theme=dark">
          </iframe>
        </div>
      </div>
    </section>
  );
}
