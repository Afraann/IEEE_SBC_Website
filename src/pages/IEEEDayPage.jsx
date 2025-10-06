import { motion, useAnimation } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

import Intro from "../components/Intro";
import About from "../components/About";
import Societies from "../components/Societies";

export default function IEEEDayPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  const collegeControls = useAnimation();
  const celebratesControls = useAnimation();
  const logoControls = useAnimation();

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);

    const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(confettiTimer);
    };
  }, []);

  useEffect(() => {
    // Bounce animation for headings and logo
    collegeControls.start({
      y: [0, -10, 0],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
    });

    celebratesControls.start({
      y: [0, -8, 0],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
    });

    logoControls.start({
      y: [0, -5, 0],
      transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
    });

    // Stop after 5 seconds
    const timer = setTimeout(() => {
      collegeControls.stop();
      celebratesControls.stop();
      logoControls.stop();

      collegeControls.start({ y: 0, opacity: 1 });
      celebratesControls.start({ y: 0, opacity: 1 });
      logoControls.start({ y: 0 });
    }, 5000);

    return () => clearTimeout(timer);
  }, [collegeControls, celebratesControls, logoControls]);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 pt-32 px-4 font-sans">

      {/* 🎉 Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
        />
      )}

      {/* 🌌 Background Glows */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-80 h-80 bg-blue-100 rounded-full blur-3xl top-10 left-16 opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl bottom-20 right-10 opacity-20"
      />

      {/* 🏫 College Name + College Logo + Celebrates + IEEE Logo */}
      <section className="flex flex-col items-center justify-center gap-6 mb-6">
        <div className="flex items-center justify-center gap-4">
          <motion.img
          src="/images/pace.png"
          alt="P.A. College Logo"
          animate={logoControls}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-20 md:w-28 border-0"
          />

          <motion.h1
            animate={collegeControls}
            className="uppercase text-5xl md:text-6xl font-bold text-center drop-shadow-sm font-heading"
          >
            P. A. COLLEGE OF ENGINEERING
          </motion.h1>
        </div>

        {/* 🎉 Celebrates Text */}
        <motion.h2
          animate={celebratesControls}
          className="uppercase text-2xl md:text-3xl text-blue-700 font-semibold tracking-wide font-heading text-center"
        >
          CELEBRATES
        </motion.h2>

        {/* 🪩 IEEE Day Logo */}
        <motion.img
          src="/images/ieee-day-logo.png"
          alt="IEEE Day 2025 Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="w-64 md:w-80 drop-shadow-lg mt-4"
        />
      </section>

      {/* 📄 About Section — scroll revealed */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-md max-w-3xl text-center border border-gray-200 mt-32"
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-body">
          IEEE Day 2025 marks a global celebration of innovation, technology, and collaboration among engineers and students worldwide.
          <br />
          Let’s unite to create a better tomorrow — together!
        </p>
      </motion.div>

      <main>
        <Intro />
        <About />
        <Societies />
      </main>

    </div>
  );
}










