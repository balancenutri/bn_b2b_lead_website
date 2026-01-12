import TeamStat from "./cards/TeamStat";

const OurTeam = () => {
  const teamStats = [
    {
      count: "20+",
      role: "Nutrition & Clinical Experts",
      desc: "shaping real outcomes",
      delay: 0.1,
    },
    {
      count: "5",
      role: "Research & Product Innovators",
      desc: "grounding every plan in science",
      delay: 0.2,
    },
    {
      count: "15",
      role: "Tech & Product Builders",
      desc: "making personalization scalable",
      delay: 0.3,
    },
    {
      count: "10",
      role: "Design & Experience Creators",
      desc: "putting people first",
      delay: 0.4,
    },
    {
      count: "10+",
      role: "Business & Marketing Specialists",
      desc: "growing with purpose",
      delay: 0.5,
    },
  ];

  return (
    <div>
      {/* TEAM SECTION (The Collective) */}
      <div className="mb-24">
        <div className="text-center mb-10 px-6">
          <h3 className="text-teal-base font-sans font-bold tracking-widest text-xs uppercase mb-4 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-teal-base mr-3"></span>
            Our Team
            <span className="w-8 h-[2px] bg-teal-base ml-3"></span>
          </h3>
          <p className="font-serif text-3xl md:text-4xl text-teal-deep">
            Experts Behind the Ecosystem.
          </p>
          {/* Mobile Swipe Hint */}
          <div className="md:hidden mt-4 flex items-center justify-center gap-2 opacity-60 animate-pulse">
            <span className="text-[10px] uppercase tracking-widest text-teal-deep">
              Swipe to explore
            </span>
            <svg
              className="w-4 h-4 text-teal-deep"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <div
          className="
               flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-12 -mx-6 
               md:grid md:grid-cols-5 md:gap-4 md:px-0 md:mx-auto md:max-w-6xl md:overflow-visible md:pb-0
             "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamStats.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] md:min-w-0 snap-center h-full"
            >
              <TeamStat
                count={item.count}
                role={item.role}
                desc={item.desc}
                delay={item.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TeamCard from "./cards/TeamCard";

// const OurTeamDropdown: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [open, setOpen] = useState(false);
//   const teamArray = [
//   { departMent: "Social Media", people: 20 },
//   { departMent: "Mentor", people: 12 },
//   { departMent: "Fitness Coaches", people: 15 },
// ];

//   return (
//     <div className="my-24">
//       {/* Dropdown Card Header */}
//        <div className="flex items-center justify-center  gap-4 mb-3">
//           <span className="w-8 h-0.5 bg-teal-base"></span>
//           <span className="text-teal-base font-sans font-bold tracking-widest text-xs uppercase">
//             Our Team
//           </span>
//           <span className="w-8 h-0.5 bg-teal-base"></span>
//         </div>

//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="w-full flex items-center justify-between px-8 py-6 bg-white rounded-[2.5rem] border border-teal-deep/10 shadow-sm hover:shadow-md transition-all duration-300"
//       >
//         <div className="flex items-center  gap-4">
//           <span className="text-teal-base font-sans font-bold tracking-widest text-xs uppercase">
//             Our Team
//           </span>
//         </div>

//         {/* Arrow */}
//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-teal-deep text-xl"
//         >
//           ▼
//         </motion.span>
//       </button>

//       {/* Dropdown Body */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <div className="p-4 grid grid-cols-4 gap-3">
//               {teamArray.map((team, index) => (
//                 <TeamCard
//                   key={index}
//                   departMent={team.departMent}
//                   people={team.people}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default OurTeamDropdown;
