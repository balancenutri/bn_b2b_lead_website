import { motion } from "framer-motion";

interface TeamCardProps {
  departMent: string;
  people: number;
}

const TeamCard = ({ departMent, people }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-2xl p-3 md:p-5 border border-teal-deep/5 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center justify-center text-center "
    >
      {/* Department Name */}
      <h2 className="font-sans text-sm md:text-base uppercase tracking-[0.25em] text-teal-deep/60 font-bold">
        {departMent}
      </h2>
        {/* Big Count */}
      <div className="font-serif text-xl md:text-2xl text-teal-deep leading-none mb-2">
        {people}
      </div>
    </motion.div>
  );
};

export default TeamCard;
