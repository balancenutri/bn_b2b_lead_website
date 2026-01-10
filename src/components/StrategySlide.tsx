import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bnShopDetails, clinicsDetails } from "../utils/data";
import Accordion from "./common/Accordion";

// --- Types for this Slide ---
interface DomainData {
  id: string;
  title: string;
  tag?: string;
  shortDesc: string;
  extraDesc?: string;
  features: string[];
  icon: React.ReactElement<any>;
  detailContent: {
    hero: string;
    valueProp: string;
    capabilities: string[];
    benefit: string;
  };
  btnText?: string;
}

const bnData: DomainData[] = [
  {
    id: "bn-shop",
    title: "BN Shop",
    shortDesc: "The ultimate one-stop solution for health-centric brands.",
    extraDesc:
      "We partner with industry leaders to co-create and roll out premium wellness products.",
    features: [],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    detailContent: {
      hero: "Co-Branding Partnership",
      valueProp:
        "Clinical expertise meets consumer lifestyle. We help brands launch, scale, and validate products directly with our captive, health-conscious audience.",
      capabilities: [], // Unused for custom view
      benefit:
        "Accelerate market penetration with immediate clinical validation.",
    },
    btnText: "Partner With Us",
  },
  {
    id: "hospitals",
    title: "Balance Nutrition × Clinics",
    tag: "Healthcare Provider Solutions",
    shortDesc:
      "Unified preventive healthcare ecosystem where clinical care meets personalized nutrition.",
    features: [
      "Smart Practice Ecosystem",
      "Medical Alignment",
      "Zero Capital Requirement",
      "Closed-Loop Health Score",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    detailContent: {
      hero: "Smart Practice Ecosystem",
      valueProp:
        "An end-to-end digital clinic environment where care, operations, and growth come together. We help doctors digitize their clinic, optimize patient flow, and build a future-ready practice with ease.",
      capabilities: [], // Unused for custom view
      benefit: "Build a future-ready practice with ease.",
    },
    btnText: "Learn More",
  },
];

const StrategySlide: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainData | null>(null);
  const [openSection, setOpenSection] = useState<string>("eligibility");

  useEffect(() => {
    if (selectedDomain) setOpenSection("eligibility");
  }, [selectedDomain]);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen w-full bg-teal-deep text-cream fixed inset-0 z-40 overflow-y-auto"
    >
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-teal-base/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-warmYellow/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 pb-40 flex flex-col items-center">
        {/* HERO HEADER */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-warmYellow animate-pulse"></div>
            <span className="uppercase tracking-[0.2em] font-bold text-warmYellow">
              Partnership Opportunities
            </span>
          </motion.div>
        </div>

        {/* BN SHOP BANNER - MOVED TOP */}
        {bnData.map((bnShopData) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full bg-teal-deep text-cream rounded-4xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-base/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-warmYellow shadow-lg shrink-0 backdrop-blur-sm border border-white/5">
              {bnShopData.icon}
            </div>
            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="font-serif text-3xl text-white">
                  {bnShopData.title}
                </h3>
                {bnShopData.tag && (
                  <span className="px-2 py-0.5 rounded border border-warmYellow/30 text-warmYellow text-[10px] uppercase tracking-widest">
                    {bnShopData.tag}
                  </span>
                )}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-light max-w-xl">
                {bnShopData.shortDesc} <br />
                {bnShopData.extraDesc}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {bnShopData.features.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <button
                onClick={() => setSelectedDomain(bnShopData)}
                className="bg-warmYellow hover:bg-warmYellow/90 text-teal-deep font-bold py-4 w-40 cursor-pointer rounded-full transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] hover:-translate-y-1"
              >
                {bnShopData.btnText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DETAIL VIEW MODAL */}
      <AnimatePresence>
        {selectedDomain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-110 bg-cream flex flex-col overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDomain(null)}
              className="fixed top-6 right-6 z-50 p-3 bg-teal-deep text-white rounded-full hover:bg-teal-base transition-colors shadow-xl"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-16"
              >
                {selectedDomain?.tag && (
                  <div className="inline-block px-4 py-2 bg-teal-base/10 text-teal-deep text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    {selectedDomain.tag}
                  </div>
                )}
                <h1 className="font-serif text-5xl md:text-7xl text-teal-deep mb-6 leading-tight">
                  {selectedDomain.detailContent.hero}
                </h1>
                <p className="font-sans text-xl text-teal-deep/80 max-w-2xl mx-auto font-medium leading-relaxed">
                  {selectedDomain.detailContent.valueProp}
                </p>
              </motion.div>

              {/* CONDITIONAL RENDERING FOR BN SHOP and HOSPITALS/CLINICS */}
              {selectedDomain.id === "bn-shop" ||
              selectedDomain.id === "hospitals" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Dynamic Data Selector */}
                  {(() => {
                    const isClinics = selectedDomain.id === "hospitals";
                    const details = isClinics ? clinicsDetails : bnShopDetails;
                    const opsPartnerLabel = isClinics
                      ? "Healthcare Partner Responsibility"
                      : "Manufacturer Responsibility";
                    const opsPartnerList = details.checklist.operations.partner;

                    return (
                      <>
                        {/* METRICS BANNER FOR CLINICS */}
                        {isClinics && (
                          <div className="mb-12">
                            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-6 px-0 md:px-4">
                              {clinicsDetails.metrics.map((m, i) => (
                                <div
                                  key={i}
                                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-teal-deep/5 rounded-2xl shadow-sm"
                                >
                                  <div className="text-2xl md:text-3xl font-bold text-teal-deep font-sans mb-1">
                                    {m.value}
                                  </div>
                                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-teal-deep/60 font-bold text-center leading-tight">
                                    {m.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 text-center text-teal-deep/70 italic text-sm">
                              Backed by a 10+ year, outcomes-driven clinical
                              nutrition brand.
                            </div>
                          </div>
                        )}

                        {selectedDomain.id === "bn-shop" && (
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <img
                              src="/assets/products.png"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "https://ui-avatars.com/api/?name=Khyati+Rupani&background=00B6C1&color=fff&size=256";
                              }}
                              alt="Khyati Rupani"
                              className="w-full h-full mb-4 object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-lg"
                            />
                            <div className="flex justify-center mb-4">
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://balancenutrition.in/shop",
                                    "_blank"
                                  )
                                }
                                className={`cursor-pointer  px-6 py-3 rounded-full text-xl mx-auto font-sans font-medium transition-all duration-300 ease-out text-white bg-teal-base`}
                              >
                                Explore BN Shop
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* SECTIONS WRAPPER */}
                        <div className="max-w-6xl mx-auto mb-16">
                          {/* 1. STRATEGIC BENEFITS - CAROUSEL */}
                          <div className="mb-16">
                            <h3 className="font-serif text-2xl md:text-3xl text-teal-deep mb-8 px-2">
                              Strategic Benefits
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                              {details.benefits.map((benefit, i) => {
                                // Layout Logic: First item spans full width on mobile/tablet, and substantial width on desktop to act as an anchor
                                const isLead = i === 0;
                                const colSpan = isLead
                                  ? "md:col-span-2 lg:col-span-6"
                                  : "md:col-span-1 lg:col-span-2";
                                const bgClass = isLead
                                  ? "bg-teal-deep text-cream"
                                  : "bg-white text-teal-deep";

                                return (
                                  <div
                                    key={i}
                                    className={`${colSpan} ${bgClass} rounded-4xl p-8 md:p-10 border border-teal-deep/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                                  >
                                    <div>
                                      <h4
                                        className={`font-serif ${
                                          isLead
                                            ? "text-4xl md:text-5xl mb-6"
                                            : "text-2xl mb-4"
                                        } font-medium`}
                                      >
                                        {benefit.title}
                                      </h4>
                                      {benefit.subtitle && (
                                        <p
                                          className={`text-xs uppercase tracking-wider font-bold mb-4 ${
                                            isLead
                                              ? "text-warmYellow"
                                              : "text-teal-base"
                                          }`}
                                        >
                                          {benefit.subtitle}
                                        </p>
                                      )}
                                      <ul
                                        className={`space-y-4 ${
                                          isLead
                                            ? "grid md:grid-cols-2 gap-4 space-y-0"
                                            : ""
                                        }`}
                                      >
                                        {benefit.points.map((pt, idx) => (
                                          <li
                                            key={idx}
                                            className={`text-base leading-relaxed flex items-start gap-3 ${
                                              isLead
                                                ? "text-cream/90"
                                                : "text-teal-deep/80"
                                            }`}
                                          >
                                            <span
                                              className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                                                isLead
                                                  ? "bg-warmYellow"
                                                  : "bg-teal-base"
                                              }`}
                                            ></span>
                                            {pt}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* ACCORDION CONTAINER */}
                          <div className="max-w-4xl mx-auto space-y-4">
                            {/* 2. ELIGIBILITY & CHECKLIST - ACCORDION */}
                            <Accordion
                              title="Partner Eligibility & Requirements"
                              isOpen={openSection === "eligibility"}
                              onClick={() => toggleSection("eligibility")}
                            >
                              <div className="space-y-8">
                                <div className="bg-teal-base/5 p-6 rounded-2xl border border-teal-base/10">
                                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-teal-deep/60 mb-2">
                                    Who This Is For
                                  </h4>
                                  <p className="text-teal-deep text-lg leading-relaxed font-medium">
                                    {details.checklist.who}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-teal-deep/40 mb-6 border-b border-teal-deep/10 pb-2">
                                    Operating Checklist
                                  </h4>
                                  <div className="grid md:grid-cols-2 gap-6">
                                    {details.checklist.requirements.map(
                                      (req, i) => (
                                        <div key={i} className="flex gap-4">
                                          <div className="w-8 h-8 rounded-full bg-teal-deep text-cream flex items-center justify-center font-serif font-bold text-sm shrink-0">
                                            {i + 1}
                                          </div>
                                          <div>
                                            <div className="text-teal-deep font-bold mb-1">
                                              {req.title}
                                            </div>
                                            <div className="text-teal-deep/70 text-sm leading-relaxed">
                                              {req.desc}
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Accordion>

                            {/* 3. OPERATIONAL FRAMEWORK - ACCORDION */}
                            <Accordion
                              title="Operational Framework"
                              isOpen={openSection === "operations"}
                              onClick={() => toggleSection("operations")}
                            >
                              <div className="grid md:grid-cols-2 gap-8">
                                {/* Partner Side */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-deep/5">
                                  <div className="text-xs font-bold uppercase tracking-widest text-teal-base mb-4 text-center">
                                    {opsPartnerLabel}
                                  </div>
                                  <ul className="space-y-3">
                                    {opsPartnerList.map((op, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-3 text-teal-deep font-medium"
                                      >
                                        <svg
                                          className="w-4 h-4 text-teal-base/50 shrink-0 mt-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                        <span className="text-sm">{op}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* BN Side */}
                                <div className="bg-teal-deep p-6 rounded-2xl shadow-lg text-cream relative overflow-hidden">
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-base/20 rounded-full blur-2xl"></div>
                                  <div className="relative z-10">
                                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 text-center">
                                      Balance Nutrition Responsibility
                                    </div>
                                    <ul className="space-y-3">
                                      {details.checklist.operations.bn.map(
                                        (op, i) => (
                                          <li
                                            key={i}
                                            className="flex items-start gap-3 text-white font-medium"
                                          >
                                            <svg
                                              className="w-4 h-4 text-warmYellow shrink-0 mt-1"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                              />
                                            </svg>
                                            <span className="text-sm">
                                              {op}
                                            </span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Accordion>
                          </div>
                        </div>

                        {/* NEW CTA SECTION */}
                        <div className="relative z-10 pt-10 border-t border-teal-deep/10 flex flex-col items-center text-center">
                          <p className="font-sans text-teal-deep/70 mb-6 max-w-lg mx-auto">
                            Discuss your{" "}
                            {isClinics
                              ? "clinic integration"
                              : "product integration"}{" "}
                            directly with our strategic team.
                          </p>
                          <a
                            href={`https://wa.me/${
                              details.whatsapp.number
                            }?text=${encodeURIComponent(
                              details.whatsapp.text
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                          >
                            <svg
                              className="w-6 h-6 fill-current"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>
                              Start Application{" "}
                              <span className="text-xs font-normal opacity-90 block">
                                via WhatsApp
                              </span>
                            </span>
                          </a>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                // STANDARD LAYOUT FOR OTHER CARDS
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                      {/* Re-using the header from top so leaving this empty or adding extra context if needed */}
                      <div className="h-1 w-24 bg-teal-base rounded-full mb-8"></div>
                      <p className="font-serif text-2xl text-teal-deep/90 leading-relaxed">
                        Experience the power of digital transformation tailored
                        for {selectedDomain.title}.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-4xl border border-teal-deep/5 shadow-lg">
                      <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-teal-base mb-6">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-4">
                        {selectedDomain.detailContent.capabilities.map(
                          (cap, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-teal-deep"
                            >
                              <span className="w-1.5 h-1.5 bg-warmYellow rounded-full mt-2 shrink-0"></span>
                              <span className="text-lg font-light">{cap}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Big Benefit Quote */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-teal-deep rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path d="M0 0 L100 0 L100 100 Z" fill="white" />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                        Expected Outcome
                      </h2>
                      <p className="text-xl md:text-2xl text-warmYellow font-light">
                        "{selectedDomain.detailContent.benefit}"
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              <div className="mt-16 text-center">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-teal-deep/50 hover:text-teal-deep font-bold text-sm uppercase tracking-widest transition-colors"
                >
                  ← Back to All Solutions
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StrategySlide;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useSpring,
//   useInView,
// } from "framer-motion";
// // import { analyzeEcosystem } from '../services/geminiService';
// import type { MetricData } from "../utils/types";
// import Carousel from "./common/Carousel";

// // --- Types for this Slide ---
// interface DomainData {
//   id: string;
//   title: string;
//   tag?: string;
//   shortDesc: string;
//   extraDesc?: string;
//   features: string[];
//   icon: React.ReactElement<any>;
//   detailContent: {
//     hero: string;
//     valueProp: string;
//     capabilities: string[];
//     benefit: string;
//   };
//   btnText?: string;
// }

// // --- Data: BN Shop Detailed Content ---
// const bnShopDetails = {
//   benefits: [
//     {
//       title: "1. Unmatched Reach & Trust",
//       points: [
//         "Visibility across 15.5 million+ monthly social media viewers",
//         "Direct access to 75,000+ active BN clients",
//         "Presence across 1,700+ cities and 94+ countries",
//         "Backed by a 10+ year clinical nutrition brand",
//       ],
//     },
//     {
//       title: "2. Nutrition-Led Innovation",
//       subtitle: "Refined by Khyati Rupani & Team:",
//       points: [
//         "Ingredient validation & composition optimization",
//         "Market suitability based on real diet data",
//         "Label transparency & compliance",
//       ],
//     },
//     {
//       title: "3. Packaging & Credibility",
//       points: [
//         "Aligned to BN’s philosophy: natural, simple, honest",
//         "Endorsed as nutritionist-approved",
//         "'What you see is what you get' positioning",
//       ],
//     },
//     {
//       title: "4. Marketing & Social Proof",
//       points: [
//         "Structured social media promotions",
//         "Use-case based education",
//         "Credibility-first storytelling",
//       ],
//     },
//     {
//       title: "5. Diet Plan Integration",
//       subtitle: "Stitched directly into diet plans:",
//       points: [
//         "Carries clinical legitimacy",
//         "Client trust: 'If it's in the plan, it's the best'",
//       ],
//     },
//     {
//       title: "6. Closed Ecosystem Testing",
//       points: [
//         "Faster product launch via App + Social",
//         "Real feedback from paying clients",
//         "Easy iteration and reformulation",
//       ],
//     },
//     {
//       title: "7. Integrated Distribution",
//       subtitle: "Access beyond BN Shop:",
//       points: [
//         "Balance Nutrition franchise centers",
//         "Corporate nutrition & wellness programs",
//         "Gym and fitness ecosystem partnerships",
//       ],
//     },
//   ],
//   checklist: {
//     who: "For manufacturers who are open to nutrition-led product changes, willing to operate with full transparency, and focused on long-term brand building rather than quick flips.",
//     requirements: [
//       {
//         title: "Product Flexibility",
//         desc: "Openness to formulation, ingredient, or label changes. Final nutritional decisions are guided by BN standards.",
//       },
//       {
//         title: "Commercial Structure",
//         desc: "Revenue sharing model, structured case-by-case based on product category, margins, and integration requirements.",
//       },
//       {
//         title: "Security Deposit",
//         desc: "One-time, adjustable onboarding deposit required for platform integration, ecosystem visibility, and partner filtering.",
//       },
//       {
//         title: "Tech & Reporting",
//         desc: "MIS dashboard integration for transparent sales and performance reporting.",
//       },
//     ],
//     operations: {
//       partner: [
//         "Manufacturing",
//         "Quality Control",
//         "Packaging Execution",
//         "Shipping & Logistics",
//       ],
//       bn: [
//         "Branding & Positioning",
//         "Product Innovation",
//         "Nutritional Certification",
//         "Ecosystem Marketing",
//       ],
//     },
//   },
//   whatsapp: {
//     number: "918319490010",
//     text: "Hi, I'm interested in a Partnership",
//   },
// };

// // --- Data: Clinics Detailed Content ---
// const clinicsDetails = {
//   metrics: [
//     { value: "Zero", label: "Capital Investment" },
//     { value: "100%", label: "Patient Support" },
//     { value: "40%", label: "Efficiency Gain" },
//     { value: "24/7", label: "Digital Access" },
//   ],
//   benefits: [
//     {
//       title: "1. Seamless & Trust-worthy Clinic Experience",
//       points: [
//         "Structured appointments and smooth patient flow",
//         "Consistent, professional experience at every touchpoint",
//         "Higher patient confidence without added effort",
//       ],
//     },
//     {
//       title: "2. Faster, Simpler Operations",
//       points: ["Automated scheduling and reminders", "Reduced manual work"],
//     },
//     {
//       title: "3. Medical Alignment & Confidence",
//       subtitle: "Trusted by Patients:",
//       points: [
//         "Nutrition plans designed to complement ongoing treatment",
//         "Clear, transparent, compliance-friendly recommendations",
//         "Structured handover: Doctor → BN ecosystem",
//       ],
//     },
//     {
//       title: "4. Patient Engagement & Outcomes",
//       points: [
//         "Lifestyle education via use-case content",
//         "Habit-building nudges & reminders",
//         "Credibility-first communication—no gimmicks",
//       ],
//     },
//     {
//       title: "5. Integrated Diet Plan Execution",
//       subtitle: "Stitched directly into patient journey:",
//       points: [
//         "Personalized diets based on lifestyle & goals",
//         "Regular plan updates every 10 days",
//         "Direct access to certified nutritionists (chat + calls)",
//       ],
//     },
//     {
//       title: "6. Closed-Loop Health Ecosystem",
//       points: [
//         "Faster activation via Member App",
//         "Continuous optimization based on outcomes",
//         "Early detection via proprietary Health Score",
//       ],
//     },
//     {
//       title: "7. Extended Care & Distribution",
//       subtitle: "Beyond the clinic visit:",
//       points: [
//         "Free access to BN Member App for patients",
//         "In-app diagnostics & pharmacy integrations",
//         "Secure digital health vault for records",
//       ],
//     },
//   ],
//   checklist: {
//     who: "For doctors, clinics, and hospitals who believe in preventive & lifestyle-driven care, want better patient outcomes beyond prescriptions, and seek patient engagement without operational complexity.",
//     requirements: [
//       {
//         title: "Clinical Alignment",
//         desc: "Openness to integrating nutrition & lifestyle as a formal extension of treatment, guided by BN clinical standards.",
//       },
//       {
//         title: "Commercial Structure",
//         desc: "Revenue-sharing model on enrollments. Structured case-by-case based on specialty. Option to waive earnings and redirect to social impact.",
//       },
//       {
//         title: "Zero Capital Requirement",
//         desc: "No onboarding fees. No infrastructure or hiring costs. BN handles nutrition delivery, tech, and support.",
//       },
//       {
//         title: "Tech & Reporting",
//         desc: "App-based dashboards for patient engagement, transparent reporting, and secure data handling.",
//       },
//     ],
//     operations: {
//       partner: [
//         "Clinical Diagnosis & Treatment",
//         "Patient Trust & Recommendation",
//         "Medical Oversight",
//       ],
//       bn: [
//         "Personalized Diet & Lifestyle Execution",
//         "Nutritionist Support & Follow-ups",
//         "Technology Platform & Health Score",
//         "Patient Engagement & Ecosystem Management",
//       ],
//     },
//   },
//   whatsapp: {
//     number: "919462623375",
//     text: "Hi, I'm interested in a Partnership",
//   },
// };

// // --- Data: BN Shop Special Data ---
// // const bnShopData: DomainData = {
// //   id: "bn-shop",
// //   title: "BN Shop",
// //   tag: "D2C & Co-Branding",
// //   shortDesc: "The ultimate one-stop solution for health-centric brands.",
// //   features: [],
// //   icon: (
// //     <svg
// //       className="w-6 h-6"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       stroke="currentColor"
// //     >
// //       <path
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         strokeWidth={1.5}
// //         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
// //       />
// //     </svg>
// //   ),
// //   detailContent: {
// //     hero: "Co-Branding Partnership",
// //     valueProp:
// //       "A unified health marketplace where clinical expertise meets consumer lifestyle. We help brands launch, scale, and validate products directly with our captive, health-conscious audience.",
// //     capabilities: [], // Unused for custom view
// //     benefit:
// //       "Accelerate market penetration with immediate clinical validation.",
// //   },
// // };
// const bnData: DomainData[] = [
//   {
//     id: "bn-shop",
//     title: "BN Shop",
//     shortDesc: "The ultimate one-stop solution for health-centric brands.",
//     extraDesc:
//       "We partner with industry leaders to co-create and roll out premium wellness products.",
//     features: [],
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//         />
//       </svg>
//     ),
//     detailContent: {
//       hero: "Co-Branding Partnership",
//       valueProp:
//         "Clinical expertise meets consumer lifestyle. We help brands launch, scale, and validate products directly with our captive, health-conscious audience.",
//       capabilities: [], // Unused for custom view
//       benefit:
//         "Accelerate market penetration with immediate clinical validation.",
//     },
//     btnText: "Partner With Us",
//   },
//   {
//     id: "hospitals",
//     title: "Balance Nutrition × Clinics",
//     tag: "Healthcare Provider Solutions",
//     shortDesc:
//       "Unified preventive healthcare ecosystem where clinical care meets personalized nutrition.",
//     features: [
//       "Smart Practice Ecosystem",
//       "Medical Alignment",
//       "Zero Capital Requirement",
//       "Closed-Loop Health Score",
//     ],
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//         />
//       </svg>
//     ),
//     detailContent: {
//       hero: "Smart Practice Ecosystem",
//       valueProp:
//         "An end-to-end digital clinic environment where care, operations, and growth come together. We help doctors digitize their clinic, optimize patient flow, and build a future-ready practice with ease.",
//       capabilities: [], // Unused for custom view
//       benefit: "Build a future-ready practice with ease.",
//     },
//     btnText: "Learn More",
//   },
// ];

// // --- Data: Industry Domains ---
// // const domains: DomainData[] = [
// //   {
// //     id: "hospitals",
// //     title: "Balance Nutrition × Clinics",
// //     tag: "Healthcare Provider Solutions",
// //     shortDesc:
// //       "Unified preventive healthcare ecosystem where clinical care meets personalized nutrition.",
// //     features: [
// //       "Smart Practice Ecosystem",
// //       "Medical Alignment",
// //       "Zero Capital Requirement",
// //       "Closed-Loop Health Score",
// //     ],
// //     icon: (
// //       <svg
// //         className="w-6 h-6"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         stroke="currentColor"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={1.5}
// //           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
// //         />
// //       </svg>
// //     ),
// //     detailContent: {
// //       hero: "Smart Practice Ecosystem",
// //       valueProp:
// //         "An end-to-end digital clinic environment where care, operations, and growth come together. We help doctors digitize their clinic, optimize patient flow, and build a future-ready practice with ease.",
// //       capabilities: [], // Unused for custom view
// //       benefit: "Build a future-ready practice with ease.",
// //     },
// //   },
// //   {
// //     id: "corporate",
// //     title: "Corporate Wellness",
// //     tag: "Enterprise Solutions",
// //     shortDesc:
// //       "Boost employee productivity and reduce healthcare costs with comprehensive wellness programs.",
// //     features: [
// //       "Customized wellness programs",
// //       "Health assessment tools",
// //       "Group nutrition sessions",
// //       "ROI and analytics dashboard",
// //     ],
// //     icon: (
// //       <svg
// //         className="w-6 h-6"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         stroke="currentColor"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={1.5}
// //           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //         />
// //       </svg>
// //     ),
// //     detailContent: {
// //       hero: "The High-Performance Workforce.",
// //       valueProp:
// //         "Healthier employees drive stronger businesses. Our data-driven wellness programs address the root causes of absenteeism and fatigue.",
// //       capabilities: [
// //         "Company-wide health challenges and gamification.",
// //         "Confidential 1-on-1 video consultations for employees.",
// //         "Canteen menu audits and restructuring.",
// //         "Quarterly aggregate health reports for HR leadership.",
// //       ],
// //       benefit:
// //         "Achieve a 4:1 ROI through reduced insurance premiums and higher engagement.",
// //     },
// //   },
// //   {
// //     id: "education",
// //     title: "Schools & Universities",
// //     tag: "Educational Institutions",
// //     shortDesc:
// //       "Develop healthy eating habits and food education programs for students and faculty.",
// //     features: [
// //       "Age-appropriate nutrition education",
// //       "Cafeteria menu consultation",
// //       "Parent engagement programs",
// //       "Growth monitoring tools",
// //     ],
// //     icon: (
// //       <svg
// //         className="w-6 h-6"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         stroke="currentColor"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={1.5}
// //           d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
// //         />
// //       </svg>
// //     ),
// //     detailContent: {
// //       hero: "Building Foundations for Life.",
// //       valueProp:
// //         "Empowering the next generation with the knowledge to make smarter food choices. We turn the cafeteria into a classroom.",
// //       capabilities: [
// //         "Curriculum-aligned nutrition workshops.",
// //         "Smart-swap menu engineering for campus dining.",
// //         "Athlete-specific performance nutrition plans.",
// //         "Digital food literacy content for parents.",
// //       ],
// //       benefit:
// //         "Foster a campus culture of health that attracts prospective families.",
// //     },
// //   },
// //   {
// //     id: "pharma",
// //     title: "Pharma & Healthcare",
// //     tag: "Pharma Partnerships",
// //     shortDesc:
// //       "Enhance your therapeutic offerings with complementary nutrition support programs.",
// //     features: [
// //       "Therapy-specific nutrition protocols",
// //       "Clinical trial nutrition support",
// //       "Patient compliance programs",
// //       "Co-branded health content",
// //     ],
// //     icon: (
// //       <svg
// //         className="w-6 h-6"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         stroke="currentColor"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={1.5}
// //           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
// //         />
// //       </svg>
// //     ),
// //     detailContent: {
// //       hero: "Beyond the Pill.",
// //       valueProp:
// //         "Drugs work better when the body is nourished. Partner with us to create holistic treatment plans that improve drug efficacy and patient quality of life.",
// //       capabilities: [
// //         "Gut-microbiome optimization protocols.",
// //         "Companion apps for specific drug therapies.",
// //         "Nutrient-drug interaction safety checks.",
// //         "Real-world evidence data collection.",
// //       ],
// //       benefit:
// //         "Differentiate your therapeutic portfolio with a 'Beyond the Pill' value add.",
// //     },
// //   },
// // ];

// // --- Local Counter Component for Strategy Slide ---
// const Counter = ({ value }: { value: string }) => {
//   const nodeRef = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(nodeRef, { once: true });

//   // Extract number and suffix
//   const numValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
//   const prefix = value.match(/^[£$€]/) ? value[0] : "";
//   const suffix = value.replace(/^[£$€]/, "").replace(/[0-9.]/g, "");
//   const decimalPlaces = value.includes(".")
//     ? value.split(".")[1].replace(/[^0-9]/g, "").length
//     : 0;

//   const springValue = useSpring(0, { duration: 2000, bounce: 0 });

//   useEffect(() => {
//     if (isInView) {
//       springValue.set(numValue);
//     }
//   }, [isInView, numValue, springValue]);

//   const [displayValue, setDisplayValue] = useState("0");

//   useEffect(() => {
//     return springValue.on("change", (latest) => {
//       setDisplayValue(latest.toFixed(decimalPlaces));
//     });
//   }, [springValue, decimalPlaces]);

//   return (
//     <span ref={nodeRef}>
//       {prefix}
//       {displayValue}
//       {suffix}
//     </span>
//   );
// };

// // --- Accordion Component ---
// const AccordionItem = ({
//   title,
//   isOpen,
//   onClick,
//   children,
// }: {
//   title: string;
//   isOpen: boolean;
//   onClick: () => void;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={`border rounded-[2rem] mb-4 overflow-hidden transition-all duration-300 ${
//         isOpen
//           ? "border-teal-base/20 bg-white shadow-lg ring-1 ring-teal-base/10"
//           : "border-teal-deep/5 bg-white/50 hover:bg-white"
//       }`}
//     >
//       <button
//         onClick={onClick}
//         className="w-full flex items-center justify-between p-6 md:p-8 text-left"
//       >
//         <span
//           className={`font-serif text-xl md:text-2xl transition-colors ${
//             isOpen ? "text-teal-deep" : "text-teal-deep/70"
//           }`}
//         >
//           {title}
//         </span>
//         <div
//           className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
//             isOpen
//               ? "bg-teal-base text-white border-teal-base rotate-180"
//               : "bg-transparent text-teal-deep/40 border-teal-deep/10"
//           }`}
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>
//       </button>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <div className="p-6 md:p-8 border-t border-teal-deep/5 bg-white/50">
//               {children}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- Sub Components ---

// // const EmptyCard = ({
// //   title,
// //   icon,
// //   desc,
// //   delay,
// // }: {
// //   title: string;
// //   icon: React.ReactNode;
// //   desc: string;
// //   delay: number;
// // }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 20 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     exit={{ opacity: 0, scale: 0.95 }}
// //     transition={{ delay, duration: 0.5 }}
// //     className="bg-white/5 border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center h-64 justify-center group hover:bg-white/10 transition-colors cursor-default"
// //   >
// //     <div className="text-white/20 mb-4 group-hover:text-warmYellow group-hover:scale-110 transition-all duration-300">
// //       {icon}
// //     </div>
// //     <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white/50 mb-2">
// //       {title}
// //     </h3>
// //     <p className="font-serif text-lg text-white/80">{desc}</p>
// //   </motion.div>
// // );

// // const MetricCard = ({
// //   data,
// //   icon,
// //   index,
// //   highlight = false,
// // }: {
// //   data: MetricData;
// //   icon: React.ReactNode;
// //   index: number;
// //   highlight?: boolean;
// // }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 30, scale: 0.9 }}
// //     animate={{ opacity: 1, y: 0, scale: 1 }}
// //     transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
// //     className={`
// //       relative overflow-hidden rounded-[2rem] p-8 flex flex-col h-full min-h-[16rem] justify-between text-left
// //       ${
// //         highlight
// //           ? "bg-warmYellow text-teal-deep"
// //           : "bg-white/10 text-white border border-white/10"
// //       }
// //     `}
// //   >
// //     {/* Header */}
// //     <div className="flex justify-between items-start">
// //       <div
// //         className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
// //           highlight ? "text-teal-deep/60" : "text-white/40"
// //         }`}
// //       >
// //         {data.label}
// //       </div>
// //       <div
// //         className={`p-2 rounded-full ${
// //           highlight
// //             ? "bg-teal-deep/10 text-teal-deep"
// //             : "bg-white/10 text-white"
// //         }`}
// //       >
// //         {icon}
// //       </div>
// //     </div>

// //     {/* Main Number */}
// //     <div className="mt-4 mb-2">
// //       <div
// //         className={`font-sans font-bold text-5xl md:text-6xl tracking-tighter ${
// //           highlight ? "text-teal-deep" : "text-teal-deep"
// //         }`}
// //       >
// //         <Counter value={data.value} />
// //       </div>
// //     </div>

// //     {/* Footer Context */}
// //     <div
// //       className={`text-sm leading-snug border-t pt-4 mt-auto ${
// //         highlight
// //           ? "border-teal-deep/10 text-teal-deep/80"
// //           : "border-white/10 text-white/60"
// //       }`}
// //     >
// //       {data.context}
// //     </div>
// //   </motion.div>
// // );

// // --- Benefit Card Component (For Carousel) ---
// // Note: Keeps accordion logic internal to help card stay compact initially.
// const BenefitCard: React.FC<{ benefit: any }> = ({ benefit }) => {
//   return (
//     <div
//       className="h-full bg-white/50 rounded-2xl border border-teal-deep/5
//                  transition-all duration-300 flex flex-col shadow-md"
//     >
//       {/* Header */}
//       <div className="w-full flex items-start justify-between p-5 pb-1 text-left">
//         <div className="pr-4">
//           <h4 className="font-serif text-lg md:text-xl font-medium text-teal-deep leading-tight whitespace-normal">
//             {benefit.title}
//           </h4>

//           {benefit.subtitle && (
//             <p className="text-[10px] uppercase tracking-wider font-bold mt-1.5 text-teal-base whitespace-normal">
//               {benefit.subtitle}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Animated content */}
//       <AnimatePresence initial={false}>
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           exit={{ height: 0, opacity: 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <ul className="p-5 pt-3 space-y-3 border-t border-teal-deep/5 mt-2">
//             {benefit.points.map((pt: string, idx: number) => (
//               <li
//                 key={idx}
//                 className="text-sm leading-relaxed flex items-start gap-3 text-teal-deep/80 whitespace-normal"
//               >
//                 <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-teal-base" />
//                 {pt}
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// const StrategySlide: React.FC = () => {
//   // const [input, setInput] = useState("");
//   // const [loading, setLoading] = useState(false);
//   // const [result, setResult] = useState<StrategyResponse | null>(null);
//   const [selectedDomain, setSelectedDomain] = useState<DomainData | null>(null);
//   const [openSection, setOpenSection] = useState<string>("eligibility");

//   useEffect(() => {
//     if (selectedDomain) setOpenSection("eligibility");
//   }, [selectedDomain]);

//   const toggleSection = (section: string) => {
//     setOpenSection((prev) => (prev === section ? "" : section));
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   if (!input.trim()) return;

//   //   setLoading(true);
//   //   setResult(null);

//   //   // Minimum wait time for "Calculation" effect
//   //   // const analysisPromise = analyzeEcosystem(input);
//   //   // const delayPromise = new Promise(resolve => setTimeout(resolve, 2000));

//   //   // const [analysis] = await Promise.all([analysisPromise, delayPromise]);

//   //   // setResult(analysis);
//   //   setLoading(false);
//   // };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="flex flex-col min-h-screen w-full bg-teal-deep text-cream fixed inset-0 z-40 overflow-y-auto"
//     >
//       {/* Background Ambience */}
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-teal-base/20 rounded-full blur-[120px] mix-blend-screen" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-warmYellow/10 rounded-full blur-[100px] mix-blend-screen" />
//       </div>

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 pb-40 flex flex-col items-center">
//         {/* HERO HEADER */}
//         <div className="text-center mb-16 max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-md"
//           >
//             <div className="w-2 h-2 rounded-full bg-warmYellow animate-pulse"></div>
//             <span className="uppercase tracking-[0.2em] font-bold text-warmYellow">
//               Partnership Opportunities
//             </span>
//           </motion.div>
//         </div>

//         {/* BN SHOP BANNER - MOVED TOP */}
//         {bnData.map((bnShopData) => (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="w-full bg-teal-deep text-cream rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
//           >
//             {/* Background Decor */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-base/20 rounded-full blur-[80px] pointer-events-none"></div>

//             <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-warmYellow shadow-lg flex-shrink-0 backdrop-blur-sm border border-white/5">
//               {bnShopData.icon}
//             </div>
//             <div className="flex-1 text-center md:text-left relative z-10">
//               <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
//                 <h3 className="font-serif text-3xl text-white">
//                   {bnShopData.title}
//                 </h3>
//                 {bnShopData.tag && (
//                   <span className="px-2 py-0.5 rounded border border-warmYellow/30 text-warmYellow text-[10px] uppercase tracking-widest">
//                     {bnShopData.tag}
//                   </span>
//                 )}
//               </div>
//               <p className="text-white/70 text-sm leading-relaxed mb-6 font-light max-w-xl">
//                 {bnShopData.shortDesc} <br />
//                 {bnShopData.extraDesc}
//               </p>
//               <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//                 {bnShopData.features.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/5"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="relative z-10">
//               <button
//                 onClick={() => setSelectedDomain(bnShopData)}
//                 className="bg-warmYellow hover:bg-warmYellow/90 text-teal-deep font-bold py-4 w-40 cursor-pointer rounded-full transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] hover:-translate-y-1"
//               >
//                 {bnShopData.btnText}
//               </button>
//             </div>
//           </motion.div>
//         ))}

//         {/* DOMAIN CARDS GRID */}
//         {/* <div className="grid md:grid-cols-2 gap-6 w-full mb-32">
//           {domains.map((domain, index) => (
//             <motion.div
//               key={domain.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + index * 0.1 }}
//               whileHover={{ y: -5 }}
//               onClick={() => setSelectedDomain(domain)}
//               className="bg-white rounded-[2rem] p-8 md:p-10 cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
//                 {React.cloneElement(domain.icon, {
//                   className: "w-32 h-32 text-teal-deep",
//                 })}
//               </div>

//               <div className="relative z-10">
//                 <div className="inline-block px-3 py-1 bg-teal-base/10 text-teal-deep text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
//                   {domain.tag}
//                 </div>
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-teal-deep text-white rounded-full">
//                     {domain.icon}
//                   </div>
//                   <h3 className="font-serif text-2xl text-teal-deep font-medium">
//                     {domain.title}
//                   </h3>
//                 </div>

//                 <p className="text-teal-deep/70 text-sm leading-relaxed mb-6 font-light">
//                   {domain.shortDesc}
//                 </p>

//                 <ul className="space-y-2 mb-8">
//                   {domain.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start gap-2 text-xs font-bold text-teal-deep/80"
//                     >
//                       <svg
//                         className="w-4 h-4 text-teal-base flex-shrink-0"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex items-center text-teal-base text-sm font-bold group-hover:translate-x-2 transition-transform">
//                   Learn More <span className="ml-2">→</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div> */}

//         {/* GROWTH ENGINE / METRICS CALCULATOR SECTION */}
//         {/* <div className="w-full border-t border-white/10 pt-20">
//           <div className="text-center mb-12">
//             <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
//               Project Your Growth
//             </h2>
//             <p className="text-white/50 text-sm">
//               Enter your company name to see hypothetical partnership outcomes.
//             </p>
//           </div>

//           <div className="flex flex-col items-center">
//             <motion.form
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               onSubmit={handleSubmit}
//               className="w-full max-w-xl relative mb-16"
//             >
//               <div className="relative group">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Enter your brand..."
//                   className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-xl font-serif text-white placeholder-white/20 focus:outline-none focus:border-teal-base focus:bg-white/10 transition-all text-center"
//                   disabled={loading}
//                 />
//                 <button
//                   type="submit"
//                   disabled={!input || loading}
//                   className={`
//                     absolute right-2 top-2 bottom-2 aspect-square rounded-full flex items-center justify-center transition-all duration-500
//                     ${
//                       !input || loading
//                         ? "bg-white/5 text-white/20 scale-90"
//                         : "bg-warmYellow text-teal-deep hover:scale-105 shadow-[0_0_20px_rgba(255,204,0,0.3)]"
//                     }
//                   `}
//                 >
//                   {loading ? (
//                     <svg
//                       className="animate-spin h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </motion.form>

//             <div className="w-full grid md:grid-cols-3 gap-6">
//               <AnimatePresence mode="wait">
//                 {result && (
//                   <>
//                     <MetricCard
//                       data={result.brandMetric}
//                       icon={
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1.5}
//                             d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1.5}
//                             d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
//                           />
//                         </svg>
//                       }
//                       index={0}
//                     />
//                     <MetricCard
//                       data={result.retailMetric}
//                       highlight
//                       icon={
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1.5}
//                             d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                       }
//                       index={1}
//                     />
//                     <MetricCard
//                       data={result.wellnessMetric}
//                       icon={
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1.5}
//                             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                       }
//                       index={2}
//                     />
//                   </>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* DETAIL VIEW MODAL */}
//       <AnimatePresence>
//         {selectedDomain && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[110] bg-cream flex flex-col overflow-y-auto"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedDomain(null)}
//               className="fixed top-6 right-6 z-50 p-3 bg-teal-deep text-white rounded-full hover:bg-teal-base transition-colors shadow-xl"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Content */}
//             <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-center mb-16"
//               >
//                 {selectedDomain?.tag && (
//                   <div className="inline-block px-4 py-2 bg-teal-base/10 text-teal-deep text-xs font-bold uppercase tracking-widest rounded-full mb-6">
//                     {selectedDomain.tag}
//                   </div>
//                 )}
//                 <h1 className="font-serif text-5xl md:text-7xl text-teal-deep mb-6 leading-tight">
//                   {selectedDomain.detailContent.hero}
//                 </h1>
//                 <p className="font-sans text-xl text-teal-deep/80 max-w-2xl mx-auto font-medium leading-relaxed">
//                   {selectedDomain.detailContent.valueProp}
//                 </p>
//               </motion.div>

//               {/* CONDITIONAL RENDERING FOR BN SHOP and HOSPITALS/CLINICS */}
//               {selectedDomain.id === "bn-shop" ||
//               selectedDomain.id === "hospitals" ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   {/* Dynamic Data Selector */}
//                   {(() => {
//                     const isClinics = selectedDomain.id === "hospitals";
//                     const details = isClinics ? clinicsDetails : bnShopDetails;
//                     const opsPartnerLabel = isClinics
//                       ? "Healthcare Partner Responsibility"
//                       : "Manufacturer Responsibility";
//                     const opsPartnerList = details.checklist.operations.partner;

//                     return (
//                       <>
//                         {/* METRICS BANNER FOR CLINICS */}
//                         {isClinics && (
//                           <div className="mb-12">
//                             <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-6 px-0 md:px-4">
//                               {clinicsDetails.metrics.map((m, i) => (
//                                 <div
//                                   key={i}
//                                   className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-teal-deep/5 rounded-2xl shadow-sm"
//                                 >
//                                   <div className="text-2xl md:text-3xl font-bold text-teal-deep font-sans mb-1">
//                                     {m.value}
//                                   </div>
//                                   <div className="text-[10px] md:text-xs uppercase tracking-widest text-teal-deep/60 font-bold text-center leading-tight">
//                                     {m.label}
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                             <div className="mt-6 text-center text-teal-deep/70 italic text-sm">
//                               Backed by a 10+ year, outcomes-driven clinical
//                               nutrition brand.
//                             </div>
//                           </div>
//                         )}

//                         {/* SECTIONS WRAPPER */}
//                         <div className="max-w-6xl mx-auto mb-16">
//                           {/* 1. STRATEGIC BENEFITS - CAROUSEL */}
//                           <div className="mb-16">
//                             <h3 className="font-serif text-2xl md:text-3xl text-teal-deep mb-8 px-2">
//                               Strategic Benefits
//                             </h3>
//                             <Carousel
//                               items={details.benefits}
//                               renderItem={(benefit) => (
//                                 <BenefitCard benefit={benefit} />
//                               )}
//                             />
//                           </div>

//                           {/* ACCORDION CONTAINER */}
//                           <div className="max-w-4xl mx-auto space-y-4">
//                             {/* 2. ELIGIBILITY & CHECKLIST - ACCORDION */}
//                             <AccordionItem
//                               title="Partner Eligibility & Requirements"
//                               isOpen={openSection === "eligibility"}
//                               onClick={() => toggleSection("eligibility")}
//                             >
//                               <div className="space-y-8">
//                                 <div className="bg-teal-base/5 p-6 rounded-2xl border border-teal-base/10">
//                                   <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-teal-deep/60 mb-2">
//                                     Who This Is For
//                                   </h4>
//                                   <p className="text-teal-deep text-lg leading-relaxed font-medium">
//                                     {details.checklist.who}
//                                   </p>
//                                 </div>

//                                 <div>
//                                   <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-teal-deep/40 mb-6 border-b border-teal-deep/10 pb-2">
//                                     Operating Checklist
//                                   </h4>
//                                   <div className="grid md:grid-cols-2 gap-6">
//                                     {details.checklist.requirements.map(
//                                       (req, i) => (
//                                         <div key={i} className="flex gap-4">
//                                           <div className="w-8 h-8 rounded-full bg-teal-deep text-cream flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
//                                             {i + 1}
//                                           </div>
//                                           <div>
//                                             <div className="text-teal-deep font-bold mb-1">
//                                               {req.title}
//                                             </div>
//                                             <div className="text-teal-deep/70 text-sm leading-relaxed">
//                                               {req.desc}
//                                             </div>
//                                           </div>
//                                         </div>
//                                       )
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             </AccordionItem>

//                             {/* 3. OPERATIONAL FRAMEWORK - ACCORDION */}
//                             <AccordionItem
//                               title="Operational Framework"
//                               isOpen={openSection === "operations"}
//                               onClick={() => toggleSection("operations")}
//                             >
//                               <div className="grid md:grid-cols-2 gap-8">
//                                 {/* Partner Side */}
//                                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-deep/5">
//                                   <div className="text-xs font-bold uppercase tracking-widest text-teal-base mb-4 text-center">
//                                     {opsPartnerLabel}
//                                   </div>
//                                   <ul className="space-y-3">
//                                     {opsPartnerList.map((op, i) => (
//                                       <li
//                                         key={i}
//                                         className="flex items-start gap-3 text-teal-deep font-medium"
//                                       >
//                                         <svg
//                                           className="w-4 h-4 text-teal-base/50 shrink-0 mt-1"
//                                           fill="none"
//                                           viewBox="0 0 24 24"
//                                           stroke="currentColor"
//                                         >
//                                           <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M5 13l4 4L19 7"
//                                           />
//                                         </svg>
//                                         <span className="text-sm">{op}</span>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>

//                                 {/* BN Side */}
//                                 <div className="bg-teal-deep p-6 rounded-2xl shadow-lg text-cream relative overflow-hidden">
//                                   <div className="absolute top-0 right-0 w-32 h-32 bg-teal-base/20 rounded-full blur-2xl"></div>
//                                   <div className="relative z-10">
//                                     <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 text-center">
//                                       Balance Nutrition Responsibility
//                                     </div>
//                                     <ul className="space-y-3">
//                                       {details.checklist.operations.bn.map(
//                                         (op, i) => (
//                                           <li
//                                             key={i}
//                                             className="flex items-start gap-3 text-white font-medium"
//                                           >
//                                             <svg
//                                               className="w-4 h-4 text-warmYellow flex-shrink-0 mt-1"
//                                               fill="none"
//                                               viewBox="0 0 24 24"
//                                               stroke="currentColor"
//                                             >
//                                               <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M5 13l4 4L19 7"
//                                               />
//                                             </svg>
//                                             <span className="text-sm">
//                                               {op}
//                                             </span>
//                                           </li>
//                                         )
//                                       )}
//                                     </ul>
//                                   </div>
//                                 </div>
//                               </div>
//                             </AccordionItem>
//                           </div>
//                         </div>

//                         {/* NEW CTA SECTION */}
//                         <div className="relative z-10 pt-10 border-t border-teal-deep/10 flex flex-col items-center text-center">
//                           <p className="font-sans text-teal-deep/70 mb-6 max-w-lg mx-auto">
//                             Discuss your{" "}
//                             {isClinics
//                               ? "clinic integration"
//                               : "product integration"}{" "}
//                             directly with our strategic team.
//                           </p>
//                           <a
//                             href={`"https://wa.me/${details.whatsapp.number}?text=${encodeURIComponent(details.whatsapp.text)}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
//                           >
//                             <svg
//                               className="w-6 h-6 fill-current"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                             </svg>
//                             <span>
//                               Start Application{" "}
//                               <span className="text-xs font-normal opacity-90 block">
//                                 via WhatsApp
//                               </span>
//                             </span>
//                           </a>
//                         </div>
//                       </>
//                     );
//                   })()}
//                 </motion.div>
//               ) : (
//                 // STANDARD LAYOUT FOR OTHER CARDS
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
//                     <div>
//                       {/* Re-using the header from top so leaving this empty or adding extra context if needed */}
//                       <div className="h-1 w-24 bg-teal-base rounded-full mb-8"></div>
//                       <p className="font-serif text-2xl text-teal-deep/90 leading-relaxed">
//                         Experience the power of digital transformation tailored
//                         for {selectedDomain.title}.
//                       </p>
//                     </div>
//                     <div className="bg-white p-8 rounded-4xl border border-teal-deep/5 shadow-lg">
//                       <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-teal-base mb-6">
//                         Key Capabilities
//                       </h3>
//                       <ul className="space-y-4">
//                         {selectedDomain.detailContent.capabilities.map(
//                           (cap, i) => (
//                             <li
//                               key={i}
//                               className="flex items-start gap-3 text-teal-deep"
//                             >
//                               <span className="w-1.5 h-1.5 bg-warmYellow rounded-full mt-2 flex-shrink-0"></span>
//                               <span className="text-lg font-light">{cap}</span>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Big Benefit Quote */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="bg-teal-deep rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
//                   >
//                     <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                       <svg
//                         className="w-full h-full"
//                         viewBox="0 0 100 100"
//                         preserveAspectRatio="none"
//                       >
//                         <path d="M0 0 L100 0 L100 100 Z" fill="white" />
//                       </svg>
//                     </div>
//                     <div className="relative z-10">
//                       <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
//                         Expected Outcome
//                       </h2>
//                       <p className="text-xl md:text-2xl text-warmYellow font-light">
//                         "{selectedDomain.detailContent.benefit}"
//                       </p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               )}

//               <div className="mt-16 text-center">
//                 <button
//                   onClick={() => setSelectedDomain(null)}
//                   className="text-teal-deep/50 hover:text-teal-deep font-bold text-sm uppercase tracking-widest transition-colors"
//                 >
//                   ← Back to All Solutions
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default StrategySlide;
