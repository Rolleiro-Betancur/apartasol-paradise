import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import { MessageCircle, Check, Loader2 } from 'lucide-react';
import img8 from '../assets/img8.jpeg';

export function SonderContact() {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const [errors, setErrors] = useState<{ nombre?: string; apellido?: string; email?: string; mensaje?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: typeof errors = {};
    
    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
    } else if (nombre.trim().length < 2) {
      newErrors.nombre = 'Debe tener al menos 2 caracteres.';
    }
    
    if (!apellido.trim()) {
      newErrors.apellido = 'El apellido es obligatorio.';
    } else if (apellido.trim().length < 2) {
      newErrors.apellido = 'Debe tener al menos 2 caracteres.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Introduce un correo válido.';
    }
    
    if (!mensaje.trim()) {
      newErrors.mensaje = 'El mensaje o fechas son obligatorios.';
    } else if (mensaje.trim().length < 10) {
      newErrors.mensaje = 'Debe tener al menos 10 caracteres.';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    const formattedMessage = `¡Hola! Me interesa reservar el Apartasol Paradise. Mis datos de contacto son:
- Nombre: ${nombre.trim()} ${apellido.trim()}
- Correo electrónico: ${email.trim()}
- Fechas de interés / Mensaje: ${mensaje.trim()}`;

    const whatsappUrl = `https://wa.me/573226707469?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleOpenWhatsApp = () => {
    const formattedMessage = `¡Hola! Me interesa reservar el Apartasol Paradise. Mis datos de contacto son:
- Nombre: ${nombre.trim()} ${apellido.trim()}
- Correo electrónico: ${email.trim()}
- Fechas de interés / Mensaje: ${mensaje.trim()}`;

    const whatsappUrl = `https://wa.me/573226707469?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setMensaje('');
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="reservar" ref={ref} className="w-full bg-sonder-cream py-24 px-6 md:px-12 border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Side: Image with dotted pattern */}
        <div 
          className={`w-full md:w-1/2 relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {/* Dotted Pattern Background */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 -z-10 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="#193B33" cx="2" cy="2" r="2"></circle>
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
            </svg>
          </div>
          
          <div className="bg-white p-4 shadow-lg inline-block relative z-10 w-full">
            <img 
              src={img8} 
              alt="Disfruta tu descanso" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div 
          className={`w-full md:w-1/2 flex flex-col ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
            RESERVA DIRECTA
          </p>
          <div className="w-12 h-1 bg-gray-300 mb-6"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2825] mb-6 leading-tight">
            ¿LISTO PARA TU<br />DESCANSO?
          </h2>
          
          <p className="text-gray-600 mb-8">
            Reserva directamente con nosotros para garantizar el mejor precio, sin comisiones de plataformas. Escríbenos por WhatsApp para confirmar disponibilidad inmediata.
          </p>

          <a href="https://wa.me/573226707469" target="_blank" rel="noreferrer" className="w-full mb-8">
            <Button variant="dark" className="w-full py-4 text-base flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-lg">
              <MessageCircle className="w-5 h-5" />
              RESERVAR POR WHATSAPP
            </Button>
          </a>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">O envíanos un mensaje</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center text-center p-8 bg-white border border-sonder-lightgreen rounded-2xl shadow-md animate-fade-in-up w-full">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 text-[#25D366]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sonder-darkgreen mb-3">
                ¡Mensaje Listo!
              </h3>
              <p className="text-gray-600 text-sm mb-6 max-w-sm">
                Hemos preparado tu mensaje con los detalles de tu consulta. Te estamos redirigiendo a WhatsApp para confirmar disponibilidad. Si la ventana no se abrió automáticamente, haz clic en el botón de abajo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button 
                  onClick={handleOpenWhatsApp} 
                  type="button"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp
                </button>
                <button 
                  onClick={handleReset} 
                  type="button"
                  className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-sm tracking-wider uppercase rounded-full transition-colors cursor-pointer"
                >
                  Nuevo Mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full flex flex-col gap-1">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className={`w-full px-4 py-3 bg-white border ${errors.nombre ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-sonder-darkgreen'} outline-none text-sm text-gray-700 shadow-sm`}
                  />
                  {errors.nombre && <span className="text-red-500 text-xs">{errors.nombre}</span>}
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input 
                    type="text" 
                    placeholder="Apellido" 
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className={`w-full px-4 py-3 bg-white border ${errors.apellido ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-sonder-darkgreen'} outline-none text-sm text-gray-700 shadow-sm`}
                  />
                  {errors.apellido && <span className="text-red-500 text-xs">{errors.apellido}</span>}
                </div>
              </div>
              
              <div className="w-full flex flex-col gap-1">
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-sonder-darkgreen'} outline-none text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              
              <div className="w-full flex flex-col gap-1">
                <textarea 
                  placeholder="¿Qué fechas te interesan?" 
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className={`w-full px-4 py-3 bg-white border ${errors.mensaje ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-sonder-darkgreen'} outline-none text-sm text-gray-700 shadow-sm resize-none`}
                ></textarea>
                {errors.mensaje && <span className="text-red-500 text-xs">{errors.mensaje}</span>}
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-[#8A7969] hover:bg-[#6D5F52] text-white py-4 font-bold tracking-widest text-sm uppercase transition-all rounded-full flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'ENVIAR MENSAJE'
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
