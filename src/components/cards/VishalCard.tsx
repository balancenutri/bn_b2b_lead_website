
import { motion } from 'framer-motion';

const VishalCard = () => {
  return (
    <>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-teal-deep/5 shadow-sm hover:shadow-lg transition-all duration-500 group"
            >
               <div className="flex flex-row items-start gap-6 mb-6">
                  {/* Photo Holder: Visible but controlled size */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-teal-base/20 group-hover:border-teal-base transition-colors shrink-0 shadow-sm relative bg-teal-deep/5">
                     <img 
                       src="/assets/vishal.jpg" 
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = "https://ui-avatars.com/api/?name=Vishal+Rupani&background=0E5858&color=fff&size=256";
                       }}
                       alt="Vishal Rupani" 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                     />
                  </div>
                  <div className="pt-2">
                     <h2 className="font-serif text-2xl text-teal-deep leading-tight">Vishal Rupani</h2>
                     <p className="text-xs uppercase tracking-widest text-teal-deep/50 font-bold mt-2 mb-3">Founder & CEO</p>
                  </div>
               </div>
               <p className="text-teal-deep/70 font-sans leading-relaxed text-sm mb-6">
                 Former CEO of Talwalkars and Fitness First. Brings over <span className="font-bold text-teal-deep">28 years of experience</span> in fitness and wellness. A fitness enthusiast who practices functional training and runs 10km, he combines financial expertise with a passion for scalable health tech.
               </p>
               <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Business Strategy</span>
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Scalable Tech</span>
               </div>
            </motion.div>
    </>
  )
}

export default VishalCard