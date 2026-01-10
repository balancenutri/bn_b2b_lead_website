import { AnimatePresence, motion } from "framer-motion";

type Benefit = {
  title: string;
  subtitle?: string;
  points: string[];
};

type BenefitCardProps = {
  benefit: Benefit;
};

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div
      className="h-full bg-white/50 rounded-2xl border border-teal-deep/5
                 transition-all duration-300 flex flex-col shadow-md"
    >
      {/* Header */}
      <div className="w-full flex items-start justify-between p-5 pb-1 text-left">
        <div className="pr-4">
          <h4 className="font-serif text-lg md:text-xl font-medium text-teal-deep leading-tight whitespace-normal">
            {benefit.title}
          </h4>

          {benefit.subtitle && (
            <p className="text-[10px] uppercase tracking-wider font-bold mt-1.5 text-teal-base whitespace-normal">
              {benefit.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Animated content */}
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="p-5 pt-3 space-y-3 border-t border-teal-deep/5 mt-2">
            {benefit.points.map((pt: string, idx: number) => (
              <li
                key={idx}
                className="text-sm leading-relaxed flex items-start gap-3 text-teal-deep/80 whitespace-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-teal-base" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
