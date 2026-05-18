export function SonderFooter() {
  return (
    <footer className="w-full bg-[#EAECE6] py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col gap-6">
          <span className="font-serif font-bold text-sonder-darkgreen text-3xl tracking-tight">Apartasol Paradise</span>
          <p className="text-sonder-darkgreen/70 text-sm max-w-xs">
            Todo lo que tu familia necesita está aquí. Descubre tu propio espacio privado en Santa Fe de Antioquia, diseñado para ofrecerte calidez y descanso.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-32 text-sonder-darkgreen">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase text-xs tracking-wider">Navegación</h4>
            <a href="#el-apartasol" className="hover:underline text-sm opacity-80">El Apartasol</a>
            <a href="#espacios" className="hover:underline text-sm opacity-80">Espacios</a>
            <a href="#comodidades" className="hover:underline text-sm opacity-80">Comodidades</a>
            <a href="#tarifas" className="hover:underline text-sm opacity-80">Tarifas</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase text-xs tracking-wider">Contacto</h4>
            <a href="#reservar" className="hover:underline text-sm opacity-80">Reservar Directo</a>
            <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="hover:underline text-sm opacity-80">WhatsApp</a>
            <a href="#como-llegar" className="hover:underline text-sm opacity-80">Ubicación</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-sonder-darkgreen/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sonder-darkgreen/60 text-xs">
        <p>© 2026 Apartasol Paradise Santa Fe. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="hover:text-sonder-darkgreen cursor-pointer">Español (CO)</span>
          <span className="hover:text-sonder-darkgreen cursor-pointer">COP $</span>
        </div>
      </div>
    </footer>
  );
}
