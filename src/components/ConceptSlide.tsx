/* eslint-disable react-hooks/purity */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "./common/Counter";
import StatCard from "./cards/StatCard";
import ConceptCard from "./cards/ConceptCard";

const PreventionIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-teal-base">
    <motion.path
      d="M50 20 L80 35 V55 C80 75 50 90 50 90 C50 90 20 75 20 55 V35 L50 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.circle
      cx="50"
      cy="55"
      r="10"
      fill="currentColor"
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1, duration: 0.5 }}
    />
    <motion.circle
      cx="50"
      cy="55"
      r="20"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1.5, opacity: 0 }}
      transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
    />
  </svg>
);

const SimplicityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-teal-base">
    {/* Chaos Dots */}
    {[...Array(6)].map((_, i) => (
      <motion.circle
        key={i}
        r="3"
        fill="currentColor"
        initial={{
          cx: 20 + Math.random() * 60,
          cy: 20 + Math.random() * 60,
          opacity: 0.5,
        }}
        whileInView={{ cx: 50, cy: 30 + i * 10, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
    ))}
    {/* Connecting Line */}
    <motion.line
      x1="50"
      y1="30"
      x2="50"
      y2="80"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    />
  </svg>
);

const TimelineItem = ({
  year,
  title,
  desc,
  index,
}: {
  year: string;
  title: string;
  desc: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-12 border-l-2 border-teal-base/20 last:border-0 last:pb-0 group"
  >
    <div className="absolute -left-1.75 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-base ring-4 ring-cream group-hover:ring-teal-base/20 transition-all duration-300" />
    <span className="text-sm font-bold text-teal-base font-sans tracking-wide block mb-1">
      {year}
    </span>
    <h4 className="font-serif text-xl font-semibold text-teal-deep leading-tight mb-2 group-hover:text-teal-base transition-colors duration-300">
      {title}
    </h4>
    <p className="text-base text-teal-deep/80 leading-relaxed font-normal max-w-sm">
      {desc}
    </p>
  </motion.div>
);

const ConceptSlide: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Parallax Elements */}
      <motion.div
        style={{ y: yParallax }}
        className="fixed top-20 right-[-10%] w-125 h-125 bg-teal-base/5 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        className="fixed bottom-0 left-[-10%] w-100 h-100 bg-warmYellow/5 rounded-full blur-[80px] -z-10"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col px-6 pb-32 max-w-6xl mx-auto md:mt-6"
      >
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section */}
            <div className="flex justify-center">
              <img
                src="/assets/bn_logo.png"
                alt="Balance Nutrition"
                className="h-24 w-auto object-contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            // className="text-center"
          >
            <p className="font-serif italic text-teal-deep leading-relaxed lg:text-xl ">
              "Making healthcare easy, engaging, and accessible for all."
            </p>
          </motion.div>
        </div>

        {/* HERO IMPACT DASHBOARD */}
        <div className="mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {/* Main Hero Stat - 15.5 Million Chats - Emphasis on Tech/Engagement */}
            <div className="col-span-2 row-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="h-full bg-teal-deep rounded-[2.5rem] p-8 md:p-12 text-cream flex flex-col justify-between relative overflow-hidden shadow-2xl group"
              >
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <svg
                    className="w-64 h-64"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-warmYellow animate-pulse"></span>
                    <span className="text-sm font-sans uppercase tracking-widest text-cream/70">
                      Digital Engagement
                    </span>
                  </div>
                  <div className="font-sans text-7xl md:text-8xl font-bold mb-4 tracking-tighter text-white">
                    <Counter value="15.5M" />
                  </div>
                  <div className="text-2xl md:text-3xl font-serif italic text-teal-base/90">
                    Client Interactions
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-8 border-t border-white/10">
                  <p className="text-cream/80 text-lg font-light leading-relaxed max-w-md">
                    BN ecosystem ensures continuous, proactive health
                    management at unprecedented scale.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Secondary Stats */}
            <StatCard
              number="94+"
              label="Countries"
              delay={0.3}
              highlight={false}
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <StatCard
              number="450k"
              label="Diets Covered"
              delay={0.4}
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              }
            />
            <StatCard
              number="75K+"
              label="Clients Served"
              delay={0.5}
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            />
            <StatCard
              number="99.3%"
              label="Satisfaction"
              delay={0.6}
              icon={
                <svg
                  className="w-8 h-8 text-warmYellow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
            />
          </motion.div>
        </div>

        {/* Video & Concepts Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
          {/* Left: Core Philosophy Cards */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="mb-6">
              <h3 className="text-teal-deep font-serif text-3xl mb-2">
                Core Philosophy
              </h3>
              <div className="h-1 w-12 bg-teal-base rounded-full"></div>
            </div>

            <ConceptCard
              title="Prevention First"
              desc="We believe the future of health is not in curing the sick, but in empowering the well. Shifting focus from reaction to biological protection."
              icon={<PreventionIcon />}
            />

            <ConceptCard
              title="Simplicity Wins"
              desc="Healthcare is complex; health shouldn't be. Our technology distills millions of data points into clear, actionable insights."
              icon={<SimplicityIcon />}
            />
          </div>

          {/* Right: Video Card */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl border-10 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 ease-out"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transform scale-105"
                poster="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              >
                <source
                  src="https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-teal-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white max-w-xs">
                <div className="text-xs font-bold tracking-widest uppercase opacity-90 mb-3 border-l-2 border-warmYellow pl-3">
                  The Vision
                </div>
                <div className="font-serif text-3xl leading-tight">
                  Nature Engineered.
                  <br />
                  Science Backed.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Growth Story - Horizontal/Vertical */}
        <div className="mb-12">
          <h3 className="text-teal-base font-sans font-bold tracking-widest text-xs uppercase mb-10 flex items-center justify-center">
            <span className="w-12 h-0.5 bg-teal-base mr-3"></span>A Decade of
            Growth
            <span className="w-12 h-0.5 bg-teal-base ml-3"></span>
          </h3>

          <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white shadow-sm max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <TimelineItem
                  index={0}
                  year="2015"
                  title="The Inception"
                  desc="Official launch attracting nearly 2,000 clients in the first year."
                />
                <TimelineItem
                  index={1}
                  year="2017"
                  title="Tech Integration"
                  desc="Expansion to 190 cities with a proprietary CRM system."
                />
              </div>
              <div>
                <TimelineItem
                  index={2}
                  year="2021"
                  title="Mobile Revolution"
                  desc="Launch of the BN App, bringing convenience to digital health."
                />
                <TimelineItem
                  index={3}
                  year="2025"
                  title="BN Shop & AI"
                  desc="Launch of lifestyle e-commerce and AI-driven personalized solutions."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
      </motion.div>
    </div>
  );
};

export default ConceptSlide;
