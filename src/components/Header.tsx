interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold" style={{ color: "#e8c97a" }}>
          龙 · DRAGONSLIDE
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:opacity-70 transition-opacity duration-300 uppercase text-sm tracking-wide"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-white hover:opacity-70 transition-opacity duration-300 uppercase text-sm tracking-wide"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
