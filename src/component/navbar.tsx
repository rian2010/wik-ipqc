import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/asset/wik-logo.png";

const Navbar = () => {
  const titles = [
    "Pilot Project Change Information",
    "Parameter control Critical Station",
    "Change Over Model Inspection Reaction",
  ];

  // Get longest title length
  const maxLength = useMemo(
    () => titles.reduce((a, b) => (a.length > b.length ? a : b), "").length,
    [titles],
  );

  // Estimate width based on longest title (10px per char, tweak if needed)
  const boxWidth = maxLength * 12;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? titles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-28 relative">
          {/* Logo */}
          <Image src={logo} width={130} height={120} alt="WIK Group Logo" />

          {/* Center sliding text */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
            style={{ width: boxWidth }}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-[-60px] text-[#0D4021] hover:text-gray-500 transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Title with animation */}
            <div className="relative w-full overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.span
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#0D4021] text-xl font-bold whitespace-nowrap text-center"
                >
                  {titles[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-[-60px] text-[#0D4021] hover:text-gray-500 transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
