import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import img7 from '../assets/img7.jpeg';

export function SonderTabs() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('Cocina Equipada');

  const tabs = ['Cocina Equipada', 'Entretenimiento', 'Conectividad', 'Exteriores', 'Climatización'];

  return (
    <section id="comodidades" ref={ref} className="w-full bg-sonder-cream py-20 px-6 md:px-12">
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
          <div className="w-full md:w-3/5">
            <img 
              src={img7} 
              alt="Comodidades del Apartasol" 
              className="w-full h-[300px] md:h-[500px] object-cover rounded-br-[100px]"
            />
          </div>
          
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-sonder-darkgreen/60 font-medium">
              <MapPin className="w-4 h-4" />
              <span>Incluido en tu reserva</span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-sonder-darkgreen font-bold">
              {activeTab === 'Cocina Equipada' && "Lista para tus recetas"}
              {activeTab === 'Entretenimiento' && "Diversión garantizada"}
              {activeTab === 'Conectividad' && "Siempre en contacto"}
              {activeTab === 'Exteriores' && "Respira aire puro"}
              {activeTab === 'Climatización' && "Clima perfecto"}
            </h3>
            
            <p className="text-sonder-darkgreen/80 leading-relaxed mb-4">
              {activeTab === 'Cocina Equipada' && "Cuenta con nevera, estufa, microondas, licuadora, cafetera y toda la vajilla necesaria para preparar tus comidas favoritas sin salir del apartasol."}
              {activeTab === 'Entretenimiento' && "Televisor Smart TV de 55 pulgadas con acceso a Netflix, Amazon Prime y sistema de sonido Bluetooth para ambientar tu estadía."}
              {activeTab === 'Conectividad' && "Wi-Fi de alta velocidad (100 Mbps) gratuito e ilimitado en todas las áreas del apartasol, ideal por si necesitas conectarte un momento."}
              {activeTab === 'Exteriores' && "Disfruta de nuestra terraza privada con hamacas y asientos cómodos, además de parqueadero privado sin costo adicional."}
              {activeTab === 'Climatización' && "Aire acondicionado en todas las habitaciones y ventiladores de techo en las áreas comunes para combatir el calor de Santa Fe de Antioquia."}
            </p>
            
            <a href="#tarifas" className="text-sonder-darkgreen font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">
              Ver precios
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
