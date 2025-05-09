"use client";

import Image from "next/image";
import { poppins } from "../../styles/font";
import { motion } from "framer-motion";

const bonusPeople = [
  { name: "Hanifah Kamiliya Darmawan", nim: "101012300127", division: "Praktikum", image: "/cand/bram.png" },
  { name: "Aria Aura Rachman", nim: "101012400265", division: "Riset", image: "/cand/bram.png" },
  { name: "Muhammad Lazuardi", nim: "101012300260", division: "Riset", image: "/cand/bram.png" },
  { name: "Azka Favian Dzikra Gushendr", nim: "101012300325", division: "Praktikum", image: "/cand/bram.png" },
];

export default function Bonus() {
  return (
    <main
      className={`relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#1A4047] via-[#66A5AD] to-[#1A4047] overflow-hidden text-white px-4 ${poppins.className}`}
    >
      {/* Logo */}
      <div className="absolute top-6 right-6">
        <Image src="/cps-logo-w.png" alt="Logo Lab" width={120} height={40} />
      </div>

      {/* Top Text */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        LAH TERUS YANG 4 INI GIMANA??
      </motion.h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bonusPeople.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl text-center w-[220px] md:w-[260px] mx-auto text-black"
          >
            <div className="bg-[#66A5AD] py-4 px-6">
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="mx-auto object-cover max-h-[210px] rounded-lg scale-114"
              />
            </div>
            <div className="bg-white py-4 px-6">
              <p className="text-lg font-semibold">{person.name}</p>
              <p className="text-sm text-gray-700">{person.nim}</p>
              <p className="text-sm text-gray-700">{person.division}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Delayed Text */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 0.1, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold mt-16 text-center">
        KEJARR CARI SEKARANGGG PANGGILL KESINI !!!
        </motion.h2>
    </main>
  );
}
