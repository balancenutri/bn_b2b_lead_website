import React from "react";
import { Tab, type NavigationProps } from "../utils/types";
import { motion } from "framer-motion";

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.IMPACT, label: "Our Story" },
    { id: Tab.LEGACY, label: "Our Founders" },
    { id: Tab.SYNERGY, label: "Our Offerings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-25 flex justify-center pb-8 pt-4 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-xl border border-teal-deep/10 rounded-full px-2 py-2 shadow-2xl flex items-center space-x-1 pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          // specific styling for Offerings (Synergy) tab to make it stand out
          const isOfferings = tab.id === Tab.SYNERGY;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 ease-out ${
                isActive
                  ? isOfferings
                    ? "text-teal-deep"
                    : "text-white"
                  : "text-teal-deep hover:bg-teal-deep/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full ${
                    isOfferings ? "bg-warmYellow" : "bg-teal-base"
                  }`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-2 ${
                  isOfferings && isActive ? "font-bold" : ""
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
