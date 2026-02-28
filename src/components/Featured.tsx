export default function Featured() {
  const features = [
    { icon: "🏯", title: "История", desc: "Тысячелетия мудрости в каждом слайде" },
    { icon: "🐉", title: "Символика", desc: "Иероглифы, драконы и философия" },
    { icon: "🍵", title: "Традиции", desc: "Чайная церемония, каллиграфия, боевые искусства" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/754d4e06-d3be-48a6-940c-76bace94548f/files/42df47d7-e180-4fdc-8328-0a78f16890cb.jpg"
          alt="Китайская чайная церемония"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest" style={{ color: "#c0392b" }}>
          Шаблоны PowerPoint о Китае
        </h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-light">
          Не просто слайды — погружение в мир <strong>5000 лет</strong> китайской цивилизации. Традиции, философия и эстетика Востока в каждом элементе дизайна.
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900">{f.title}</p>
                <p className="text-neutral-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 w-fit cursor-pointer"
          style={{ background: "#c0392b", color: "#fff", border: "2px solid #c0392b" }}
          onMouseEnter={e => {
            (e.target as HTMLButtonElement).style.background = "transparent";
            (e.target as HTMLButtonElement).style.color = "#c0392b";
          }}
          onMouseLeave={e => {
            (e.target as HTMLButtonElement).style.background = "#c0392b";
            (e.target as HTMLButtonElement).style.color = "#fff";
          }}
        >
          Выбрать шаблон
        </button>
      </div>
    </div>
  );
}
