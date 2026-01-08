import React from 'react';
import { motion } from 'framer-motion';

const HeritageSlide: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col min-h-screen px-6 pt-12 pb-32 max-w-6xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-white border border-teal-deep/10 rounded-full text-xs tracking-[0.25em] font-bold text-teal-deep mb-6 shadow-sm uppercase"
        >
          The Legacy
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-teal-deep mb-6 leading-tight"
        >
          Visionaries & Partners.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xl text-teal-deep/80 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Leadership built on <span className="font-medium text-teal-deep">business acumen</span> and <span className="font-medium text-teal-deep">clinical expertise</span>, validated by the world's most trusted brands.
        </motion.p>
      </div>

      {/* FOUNDERS SECTION */}
      <div className="mb-24">
         <h3 className="text-teal-base font-sans font-bold tracking-widest text-xs uppercase mb-8 text-center flex items-center justify-center">
            <span className="w-8 h-0.5 bg-teal-base mr-3"></span>
            The Leadership
            <span className="w-8 h-0.5 bg-teal-base ml-3"></span>
         </h3>
         
         <div className="grid md:grid-cols-2 gap-8">
            {/* Vishal Rupani */}
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
                 Former CEO of Talwalkars and Fitness First. Brings over <span className="font-bold text-teal-deep">25 years of experience</span> in fitness and wellness. A fitness enthusiast who practices functional training and runs 10km, he combines financial expertise with a passion for scalable health tech.
               </p>
               <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Business Strategy</span>
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Scalable Tech</span>
               </div>
            </motion.div>

            {/* Khyati Rupani */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-teal-deep/5 shadow-sm hover:shadow-lg transition-all duration-500 group"
            >
               <div className="flex flex-row items-start gap-6 mb-6">
                  {/* Photo Holder */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-teal-base/20 group-hover:border-teal-base transition-colors shrink-0 shadow-sm relative bg-teal-base/5">
                     <img 
                       src="/assets/khyati_picture.jpg" 
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = "https://ui-avatars.com/api/?name=Khyati+Rupani&background=00B6C1&color=fff&size=256";
                       }}
                       alt="Khyati Rupani" 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                     />
                  </div>
                  <div className="pt-2">
                     <h2 className="font-serif text-2xl text-teal-deep leading-tight">Khyati Rupani</h2>
                     <p className="text-xs uppercase tracking-widest text-teal-deep/50 font-bold mt-2 mb-3">Founder & Chief Nutritionist</p>
                  </div>
               </div>
               <p className="text-teal-deep/70 font-sans leading-relaxed text-sm mb-6">
                 Clinical nutritionist with nearly two decades of experience. Became <span className="font-bold text-teal-deep">Lilavati Hospital’s Chief Nutritionist at 22</span>. Author of "Getting Rid of Obesity" and the architect of BN's clinical protocols, inspired by her own victory over PCOS.
               </p>
               <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Clinical Excellence</span>
                  <span className="px-3 py-1 bg-teal-base/10 text-teal-deep text-xs font-bold rounded-full">Product Vision</span>
               </div>
            </motion.div>
         </div>
      </div>

      {/* CORPORATE GOOD WORDS (TESTIMONIALS) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="bg-teal-deep rounded-[3rem] p-8 md:p-16 text-cream relative overflow-hidden shadow-2xl"
      >
         {/* Abstract shapes for premium feel */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-teal-base/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-warmYellow/5 rounded-full blur-[80px] pointer-events-none"></div>

         <div className="relative z-10">
            <h3 className="text-warmYellow font-sans font-bold tracking-[0.2em] text-xs uppercase mb-16 text-center flex items-center justify-center gap-4">
               <span className="h-px w-12 bg-warmYellow/30"></span>
               Corporate Good Words
               <span className="h-px w-12 bg-warmYellow/30"></span>
            </h3>

            <div className="grid md:grid-cols-2 gap-16 relative">
               {/* Vertical Divider for Desktop */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>

               {/* Testimonial 1 - Nirmal Jain */}
               <div className="relative group">
                  <div className="absolute -top-10 -left-4 text-8xl font-serif text-warmYellow opacity-20 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-700">“</div>
                  <blockquote className="relative z-10 font-serif text-2xl md:text-3xl leading-snug text-white/95 mb-8">
                    "Khyati possesses a unique blend of expertise in diet and food—a rare combination. She is detailed, meticulous, and <span className="text-warmYellow/90 italic">highly attuned</span> to the audience she serves."
                  </blockquote>
                  <div className="flex items-center gap-4 pl-2 border-l-2 border-warmYellow/50">
                     <div>
                        <div className="font-sans font-bold text-white tracking-wide">Mr. Nirmal Jain</div>
                        <div className="font-sans text-white/60 text-xs uppercase tracking-wider mt-1">Chairman - IIFL Group</div>
                     </div>
                  </div>
               </div>

               {/* Testimonial 2 - Kanan Naik */}
               <div className="relative group">
                  <div className="absolute -top-10 -left-4 text-8xl font-serif text-warmYellow opacity-20 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-700">“</div>
                  <blockquote className="relative z-10 font-serif text-2xl md:text-3xl leading-snug text-white/95 mb-8">
                    "My productivity at work has increased, leading to new opportunities. Khyati's approach goes beyond food; she <span className="text-warmYellow/90 italic">empowers people</span> to live their best lives."
                  </blockquote>
                  <div className="flex items-center gap-4 pl-2 border-l-2 border-warmYellow/50">
                     <div>
                        <div className="font-sans font-bold text-white tracking-wide">Kanan Naik</div>
                        <div className="font-sans text-white/60 text-xs uppercase tracking-wider mt-1">Director - Bank of America</div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Logos/Credibility */}
            <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 text-center">
               <div className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                   <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Vouched By</span>
                   <span className="font-serif text-xl md:text-2xl text-white">Lilavati Hospital</span>
               </div>
               <div className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 border-l border-r border-white/5">
                   <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Featured In</span>
                   <span className="font-serif text-xl md:text-2xl text-white">Sony TV</span>
               </div>
               <div className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                   <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Awarded By</span>
                   <span className="font-serif text-xl md:text-2xl text-white">Radio City</span>
               </div>
            </div>

         </div>
      </motion.div>

    </motion.div>
  );
};

export default HeritageSlide;