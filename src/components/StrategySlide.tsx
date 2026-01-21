/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bnShopDetails, clinicsDetails } from "../utils/data";
import Accordion from "./common/Accordion";
import { deckPdfUrl } from "../constants";

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
  testimonails?: {};
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
      hero: "Preventive Healthcare Ecosystem",
      valueProp:
        "A preventive-first clinic ecosystem where care, nutrition, and lifestyle medicine work together. We help doctors extend treatment beyond prescriptions - using simple digital systems to deliver structured, ongoing preventive care with ease.",
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
                              <div className="flex gap-x-8">
                                <button
                                  onClick={() =>
                                    window.open(
                                      "https://balancenutrition.in/shop",
                                      "_blank",
                                    )
                                  }
                                  className={`cursor-pointer  px-6 py-3 rounded-full text-xl mx-auto font-sans font-medium transition-all duration-300 ease-out text-white bg-teal-base`}
                                >
                                  Explore BN Shop
                                </button>
                              </div>
                            </div>

                            <div className="flex bg-teal-deep items-center  p-8 mt-10 rounded-4xl justify-center mb-4">
                              <div className=" flex flex-col items-center space-y-4 justify-center ">
                                <h4
                                  className={`font-serif  text-4xl md:text-5xl mb-6 font-medium`}
                                >
                                  A Complete Growth Ecosystem
                                </h4>
                                <button
                                  onClick={() =>
                                    window.open(deckPdfUrl, "_blank")
                                  }
                                  className={`cursor-pointer  px-6 py-3 rounded-full text-xl mx-auto font-sans font-medium transition-all duration-300 ease-out text-teal-deep bg-warmYellow`}
                                >
                                  Click Here to View
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* SECTIONS WRAPPER */}
                        <div className="max-w-6xl my-16 mx-auto mb-16">
                          {/* 1. STRATEGIC BENEFITS - CAROUSEL */}
                          <div className="mb-16">
                            <h3 className="font-serif text-3xl md:text-3xl text-teal-deep mb-8 px-2">
                              Strategic Benefits
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                              {details.benefits.map((benefit, i) => {
                                // Layout Logic: First item spans full width on mobile/tablet, and substantial width on desktop to act as an anchor
                                const isLead = i === 0;
                                const colSpan = isLead
                                  ? "md:col-span-2 lg:col-span-6"
                                  : "md:col-span-1 lg:col-span-2";
                                const bgClass = "bg-white text-teal-deep";
                                // const bgClass = isLead
                                //   ? "bg-teal-deep text-cream"
                                //   : "bg-white text-teal-deep";

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
                                          className={`text-xs uppercase tracking-wider text-teal-base font-bold mb-4 `}
                                          // className={`text-xs uppercase tracking-wider font-bold mb-4 ${
                                          //   isLead
                                          //     ? "text-warmYellow"
                                          //     : "text-teal-base"
                                          // }`}
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
                                            className={`text-base leading-relaxed flex items-start gap-3 text-teal-deep/80
                                              `}
                                            // ${isLead? "text-cream/90": "text-teal-deep/80" }
                                          >
                                            <span
                                              className={`w-2 h-2 rounded-full mt-2 shrink-0 bg-teal-base`}
                                              // className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                                              //   isLead
                                              //     ? "bg-warmYellow"
                                              //     : "bg-teal-base"
                                              // }`}
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
                          {selectedDomain.id === "hospitals" && (
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                              className="bg-teal-deep rounded-[3rem] p-8 md:p-16 text-cream relative overflow-hidden shadow-2xl mb-10"
                            >
                              {/* Abstract shapes for premium feel */}
                              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-base/10 rounded-full blur-[100px] pointer-events-none"></div>
                              <div className="absolute bottom-0 left-0 w-64 h-64 bg-warmYellow/5 rounded-full blur-[80px] pointer-events-none"></div>

                              <div className="relative z-10">
                                <div className="grid md:grid-cols-2 gap-16 relative">
                                  {/* Vertical Divider for Desktop */}
                                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>

                                  {/* Testimonial 1 - Nirmal Jain */}
                                  <div className="relative group">
                                    <div className="flex items-center gap-4 pl-2 border-l-2 border-warmYellow/50">
                                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-teal-base/20 group-hover:border-teal-base transition-colors shrink-0 shadow-sm relative bg-teal-base/5">
                                        <img
                                          src="/assets/kiran.png"
                                          onError={(e) => {
                                            const target =
                                              e.target as HTMLImageElement;
                                            target.src =
                                              "https://ui-avatars.com/api/?name=Khyati+Rupani&background=00B6C1&color=fff&size=256";
                                          }}
                                          alt="Khyati Rupani"
                                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                      </div>
                                      <div>
                                        <div className="font-sans text-lg font-bold text-white tracking-wide">
                                          Dr. Kiran Coelho
                                        </div>
                                        <div className="font-sans text-white/60 text-xs tracking-wider mt-1">
                                          MD, DGO, DFP
                                          <br />
                                          Head of the Department of Obstetrics
                                          and Gynaecology,
                                          <br />
                                          Lilavati Hospital and Research Center,
                                          Mumbai
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute top-32 -left-4 text-8xl font-serif text-warmYellow opacity-20 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-700">
                                      “
                                    </div>
                                    <blockquote className="relative z-10 font-serif text-xl md:text-2xl leading-snug text-white/95 mt-16">
                                      "I have known Khyati since our time at
                                      Lilavati Hospital, and she is an excellent
                                      nutritionist. Whenever I have PCOS
                                      patients, I always recommend Khyati Rupani
                                      for her expertise in guiding them towards
                                      better health and wellness."
                                    </blockquote>
                                  </div>

                                  {/* Testimonial 2 - Kanan Naik */}
                                  <div className="relative group">
                                    <div className="flex items-center gap-4 pl-2 border-l-2 border-warmYellow/50">
                                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-teal-base/20 group-hover:border-teal-base transition-colors shrink-0 shadow-sm relative bg-teal-base/5">
                                        <img
                                          src="/assets/vinod.png"
                                          onError={(e) => {
                                            const target =
                                              e.target as HTMLImageElement;
                                            target.src =
                                              "https://ui-avatars.com/api/?name=Khyati+Rupani&background=00B6C1&color=fff&size=256";
                                          }}
                                          alt="Khyati Rupani"
                                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                      </div>
                                      <div>
                                        <div className="font-sans text-lg font-bold text-white tracking-wide">
                                          Dr. Vinod A. Agrawal
                                        </div>
                                        <div className="font-sans text-white/60 text-xs tracking-wider mt-1">
                                          Department of Orthopaedic Surgery
                                          <br />
                                          MS, MCH (UK), DNB, D.Orth. <br />
                                          Lilavati Hospital & Research Centre
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute top-32 -left-4 text-8xl font-serif text-warmYellow opacity-20 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-700">
                                      “
                                    </div>
                                    <blockquote className="relative z-10 font-serif text-xl md:text-2xl leading-snug text-white/95 mt-16">
                                      {/* "My productivity at work has increased,
                                      leading to new opportunities. Khyati's
                                      approach goes beyond food; she{" "}
                                      <span className="text-warmYellow/90 italic">
                                        empowers people
                                      </span>{" "}
                                      to live their best lives." */}
                                      "I have known Ms. Khyati Rupani for many
                                      years, dating back to her time at Lilavati
                                      Hospital. She is well-read and constantly
                                      seeks to expand her knowledge. She has
                                      cared for many of my patients, all of whom
                                      are highly satisfied with her advice and
                                      treatment. I wish her a prosperous and
                                      successful career."
                                    </blockquote>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

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
                                      ),
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
                                        ),
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
                              details.whatsapp.text,
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
                          ),
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
