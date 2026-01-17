import {motion} from "framer-motion"

const TeamStat = ({ count, role, desc, delay }: { count: string, role: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center text-center p-6 md:p-8 bg-white/50 rounded-4xl border border-teal-deep/5 hover:bg-white hover:shadow-lg transition-all duration-300 group h-full justify-start w-full"
  >
    <div className=" text-4xl md:text-5xl text-teal-base mb-4 font-medium group-hover:scale-110 transition-transform duration-300">{count}</div>
    <div className="text-teal-deep font-bold text-xs uppercase tracking-widest mb-3 min-h-[3em] flex items-center justify-center leading-relaxed px-2">{role}</div>
    <div className="text-teal-deep/70 text-sm font-light leading-relaxed">{desc}</div>
  </motion.div>
);

export default TeamStat