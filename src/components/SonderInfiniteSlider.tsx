import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

// Import images
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import pagePrincipal from '../assets/pagePrincipal.jpeg';

interface SliderImage {
  src: string;
  title: string;
  desc: string;
}

export function SonderInfiniteSlider() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const images: SliderImage[] = [
    {
      src: img6,
      title: "Habitación Múltiple",
      desc: "Excelente distribución y comodidad ideal para hospedar a toda la familia."
    },
    {
      src: pagePrincipal,
      title: "Terraza y Asador",
      desc: "Disfruta de un espacio al aire libre perfecto para tus asados en familia."
    },
    {
      src: img8,
      title: "Exteriores del Complejo",
      desc: "Zonas verdes exuberantes y pasillos coloniales con el encanto de Santa Fe de Antioquia."
    },
    {
      src: img3,
      title: "Terraza Privada",
      desc: "El rincón ideal al aire libre con hamaca para tus tardes de descanso."
    },
    {
      src: img2,
      title: "Sala de Estar",
      desc: "Espacio moderno de concepto abierto diseñado para compartir y descansar."
    },
    {
      src: img5,
      title: "Habitación Principal",
      desc: "Tu santuario personal con cama extragrande, aire acondicionado y gran iluminación."
    },
    {
      src: img4,
      title: "Sala de TV y Entretenimiento",
      desc: "Confort total equipado con Smart TV de alta resolución para tus series y películas."
    },
    {
      src: img7,
      title: "Cocina Equipada",
      desc: "Electrodomésticos y utensilios listos para preparar tus recetas favoritas."
    },
    {
      src: img1,
      title: "Detalles que Enamoran",
      desc: "Diseño cálido y rincones estéticos que marcan la diferencia en tu estadía."
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = '';
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Autoplay Slideshow in Lightbox
  useEffect(() => {
    if (isPlaying && isOpen) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPlaying, isOpen, currentIndex]);

  return (
    <section ref={ref} className="w-full bg-[#FAF8F5] py-20 overflow-hidden border-t border-b border-gray-200">
      
      {/* Title block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div 
          className={`text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-sonder-yellow uppercase mb-3 block">
            SÍGUENOS EN REDES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen">
            Nuestro Apartasol en Fotos
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Marquee */}
      <div 
        className={`relative w-full overflow-hidden select-none py-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        {/* Soft edge gradients for a premium feel */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

        {/* Double-listed items container to ensure seamless loop */}
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {/* First sequence of images */}
          {images.map((img, idx) => (
            <div
              key={`marquee-first-${idx}`}
              onClick={() => openLightbox(idx)}
              className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 cursor-pointer overflow-hidden group shadow-md transition-all duration-700 hover:shadow-xl hover:scale-[1.02] bg-white border border-gray-100"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Elegant overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest text-sonder-yellow uppercase font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Ver espacio
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {img.title}
                </h3>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate sequence of images for infinite loop */}
          {images.map((img, idx) => (
            <div
              key={`marquee-second-${idx}`}
              onClick={() => openLightbox(idx)}
              className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 cursor-pointer overflow-hidden group shadow-md transition-all duration-700 hover:shadow-xl hover:scale-[1.02] bg-white border border-gray-100"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Elegant overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest text-sonder-yellow uppercase font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Ver espacio
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {img.title}
                </h3>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Gallery a pantalla completa */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col justify-between p-4 md:p-8 animate-fade-in select-none"
          onClick={closeLightbox}
        >
          {/* Top Panel Controls */}
          <div 
            className="flex items-center justify-between w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Slide Count */}
            <div className="text-white/60 font-medium text-sm tracking-widest uppercase">
              <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              {String(images.length).padStart(2, '0')}
            </div>

            {/* Middle Controls (Play/Pause Auto Slideshow) */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-white" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Reproducir</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 backdrop-blur-sm"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Viewer Area (Image and Navigation Buttons) */}
          <div className="flex-1 flex items-center justify-between relative max-w-7xl mx-auto w-full my-4">
            
            {/* Prev Button (Left) */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 md:left-4 z-20 p-4 rounded-full bg-white/10 hover:bg-white/25 hover:scale-105 active:scale-95 text-white transition-all duration-300 backdrop-blur-sm focus:outline-none"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image Container with Fade Effect */}
            <div 
              className="w-full h-full flex items-center justify-center px-12 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="max-w-full max-h-[65vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl transition-all duration-500 animate-[fadeIn_0.4s_ease-out]"
                key={currentIndex}
              />
            </div>

            {/* Next Button (Right) */}
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 md:right-4 z-20 p-4 rounded-full bg-white/10 hover:bg-white/25 hover:scale-105 active:scale-95 text-white transition-all duration-300 backdrop-blur-sm focus:outline-none"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Bottom Panel Description */}
          <div 
            className="w-full text-center max-w-3xl mx-auto z-10 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              {images[currentIndex].title}
            </h3>
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed font-light max-w-xl mx-auto">
              {images[currentIndex].desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
