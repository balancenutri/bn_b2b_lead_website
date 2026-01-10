import { motion } from "framer-motion";

export default function ConceptCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/60 backdrop-blur-sm border border-teal-deep/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-6 p-4 bg-teal-base/5 rounded-full">{icon}</div>
      <h3 className="font-serif text-2xl font-bold text-teal-deep mb-3">
        {title}
      </h3>
      <p className="font-sans text-teal-deep/70 text-sm leading-relaxed max-w-xs">
        {desc}
      </p>
    </motion.div>
  );
}
