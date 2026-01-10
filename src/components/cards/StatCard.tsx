import { motion } from "framer-motion";
import Counter from "../common/Counter";

type StatCardProps = {
  number: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
  highlight?: boolean;
};

export default function StatCard({
  number,
  label,
  icon,
  delay,
  highlight = false,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 182, 193, 0.15)",
      }}
      className={`
      relative overflow-hidden rounded-4xl p-6 flex flex-col items-center justify-center text-center group transition-all duration-300
      ${
        highlight
          ? "bg-teal-deep text-cream shadow-xl col-span-2 md:col-span-1 aspect-2/1 md:aspect-auto"
          : "bg-white/80 backdrop-blur-md border border-teal-deep/5 shadow-sm aspect-square"
      }
    `}
    >
      <div
        className={`
      mb-4 transform group-hover:scale-110 transition-transform duration-500
      ${highlight ? "text-warmYellow" : "text-teal-base"}
    `}
      >
        {icon}
      </div>
      <div
        className={`
      font-sans font-bold relative z-10 tracking-tighter leading-none mb-1
      ${
        highlight
          ? "text-5xl md:text-6xl text-white"
          : "text-4xl md:text-5xl text-teal-deep"
      }
    `}
      >
        <Counter value={number} />
      </div>
      <div
        className={`
      font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2 relative z-10
      ${highlight ? "text-white/70" : "text-teal-deep/50"}
    `}
      >
        {label}
      </div>

      {/* Decor */}
      {highlight && (
        <motion.div
          className="absolute -right-4 -bottom-4 w-24 h-24 bg-teal-base/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
