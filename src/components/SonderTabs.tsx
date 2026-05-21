import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { MapPin, Check } from 'lucide-react';
import { useState } from 'react';
import cocinaImg from '../assets/Cocina.jpeg';
import entretenimientoImg from '../assets/img4.jpeg';
import conectividadImg from '../assets/img2.jpeg';
import exterioresImg from '../assets/Picina.jpeg';
import climaImg from '../assets/clima.jpg';

const tabImages: Record<string, string> = {
  'Cocina Equipada': cocinaImg,
  'Entretenimiento': entretenimientoImg,
  'Conectividad': conectividadImg,
  'Exteriores': exterioresImg,
  'Climatización': climaImg,
};

const tabHighlights: Record<string, string[]> = {
  'Cocina Equipada': [
    'Barra americana para desayunar y compartir',
    'Estufa de 4 puestos y microondas de fácil acceso',
    'Menaje completo: platos, vasos, ollas y sartenes'
  ],
  'Entretenimiento': [
    'Smart TV de 55 pulgadas con Netflix y Prime activos',
    'Sofá confortable con cojines decorativos de diseño',
    'Barra de sonido Bluetooth de alta fidelidad'
  ],
  'Conectividad': [
    'Wi-Fi de fibra óptica (100 Mbps) estable',
    'Mesa de comedor amplia para trabajar con comodidad',
    'Contactos eléctricos accesibles en áreas comunes'
  ],
  'Exteriores': [
    'Gran piscina social con área de asoleadoras y palmeras',
    'Balcón privado con hamaca tejida para descansar',
    'Parqueadero privado asignado sin costo adicional'
  ],
  'Climatización': [
    'Jardines con palmeras y zonas verdes que refrescan el ambiente',
    'Senderos peatonales iluminados para caminatas al aire libre',
    'Aire acondicionado split y ventiladores para tu máximo confort'
  ],
};

export function SonderTabs() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('Cocina Equipada');

  const tabs = ['Cocina Equipada', 'Entretenimiento', 'Conectividad', 'Exteriores', 'Climatización'];

  return (
    <section id="comodidades" ref={ref} className="w-full bg-sonder-cream py-20 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        <div 
          className={`mb-16 max-w-2xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sonder-darkgreen mb-6 leading-tight">
            Comodidades diseñadas<br />pensando en ti
          </h2>
          <p className="text-lg text-sonder-darkgreen/80">
            No necesitas traer nada más que tus ganas de descansar. Todo lo que incluye tu estadía ha sido cuidadosamente seleccionado para maximizar tu confort.
          </p>
        </div>

        <div 
          className={`w-full border-b border-gray-300 mb-12 flex overflow-x-auto hide-scrollbar ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab ? 'text-sonder-darkgreen' : 'text-sonder-darkgreen/50 hover:text-sonder-darkgreen/80'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-sonder-darkgreen" />
              )}
            </button>
          ))}
        </div>

        <div 
          className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="w-full md:w-3/5 overflow-hidden rounded-br-[100px] h-[300px] md:h-[500px] shadow-sm bg-stone-100">
            <img 
              key={activeTab}
              src={tabImages[activeTab] || cocinaImg} 
              alt={`Comodidad - ${activeTab}`} 
              className="w-full h-full object-cover animate-fade-in-up"
            />
          </div>
          
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-sonder-darkgreen/60 font-medium">
              <MapPin className="w-4 h-4 text-sonder-yellow" />
              <span>Incluido en tu reserva</span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-sonder-darkgreen font-bold">
              {activeTab === 'Cocina Equipada' && "Lista para tus recetas"}
              {activeTab === 'Entretenimiento' && "Diversión garantizada"}
              {activeTab === 'Conectividad' && "Siempre en contacto"}
              {activeTab === 'Exteriores' && "Respira aire puro"}
              {activeTab === 'Climatización' && "Clima perfecto"}
            </h3>
            
            <p className="text-sonder-darkgreen/80 leading-relaxed mb-2 text-sm md:text-[15px]">
              {activeTab === 'Cocina Equipada' && "Cuenta con nevera, estufa, microondas, licuadora, cafetera y toda la vajilla necesaria. Como se visualiza en la foto, dispones de una cocina de concepto abierto con una práctica barra tipo americana, ideal para preparar y compartir tus recetas favoritas."}
              {activeTab === 'Entretenimiento' && "Televisor Smart TV de 55 pulgadas con accesos listos a Netflix, Amazon Prime y sistema de sonido Bluetooth. En la foto puedes ver el amplio sofá y el espacio de entretenimiento cómodo, pensado para ambientar tus momentos de descanso."}
              {activeTab === 'Conectividad' && "Wi-Fi de alta velocidad (100 Mbps) por fibra óptica, gratuito e ilimitado. La imagen muestra la amplia sala-comedor, un espacio con luz natural y excelente cobertura, ideal por si necesitas conectarte o realizar teletrabajo."}
              {activeTab === 'Exteriores' && "Disfruta del sol en la gran piscina del condominio rodeada de asoleadoras, palmeras y áreas verdes, además de contar con tu balcón/terraza privado con hamacas y asientos cómodos, y parqueadero privado gratis."}
              {activeTab === 'Climatización' && "Disfruta del clima cálido y la brisa natural de Santa Fe de Antioquia en un entorno rodeado de naturaleza. El condominio te ofrece senderos iluminados y hermosas zonas verdes, complementados en el interior con aire acondicionado y ventiladores para asegurar tu total frescura."}
            </p>

            <div className="flex flex-col gap-2 mt-2 mb-4">
              {(tabHighlights[activeTab] || []).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sonder-darkgreen/90">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sonder-lightgreen flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-sonder-darkgreen stroke-[2.5]" />
                  </div>
                  <span className="text-sm md:text-base leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
            
            <a href="#tarifas" className="text-sonder-darkgreen font-semibold underline underline-offset-4 hover:text-sonder-yellow transition-colors w-fit">
              Ver precios
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
