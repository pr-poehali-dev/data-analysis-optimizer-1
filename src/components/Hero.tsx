import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/754d4e06-d3be-48a6-940c-76bace94548f/files/78fc0d96-8608-4fd3-bcd4-851517adbcd1.jpg"
          alt="Китайские горы в тумане"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80" style={{ color: "#e8c97a" }}>
          中华文化 · Китайские традиции
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ПОГРУЗИСЬ В
          <br />
          <span style={{ color: "#e8c97a" }}>КУЛЬТУРУ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Презентации о Китае, которые покоряют с первого слайда — глубина традиций в каждом кадре
        </p>
        <button className="mt-10 px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
          Смотреть шаблоны
        </button>
      </div>
    </div>
  );
}
