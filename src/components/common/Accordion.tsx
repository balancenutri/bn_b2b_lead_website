import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`border rounded-4xl mb-4 overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-teal-base/20 bg-white shadow-lg ring-1 ring-teal-base/10"
          : "border-teal-deep/5 bg-white/50 hover:bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
      >
        <span
          className={`font-serif text-xl md:text-2xl transition-colors ${
            isOpen ? "text-teal-deep" : "text-teal-deep/70"
          }`}
        >
          {title}
        </span>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-teal-base text-white border-teal-base rotate-180"
              : "bg-transparent text-teal-deep/40 border-teal-deep/10"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-6 md:p-8 border-t border-teal-deep/5 bg-white/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
