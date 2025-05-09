"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { poppins } from "../styles/font";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


const people = [
    { name: "Ervan Fahri Adriansyah Wahab", nim: "101012300308", division: "Praktikum", image: "/cand/steph.png" },
    { name: "Lovind Luthfan Hakeem Firdaus ", nim: "101012330245", division: "Praktikum", image: "/cand/sayyid.png" },
    { name: "Asep Jamaludin", nim: "101012330125", division: "Riset", image: "/cand/hilmi.png" },
    { name: "Hilmy Baihaqi", nim: "101012340233", division: "Riset", image: "/cand/hilmi.png" },
    { name: "Fakhri Muhammad Al Hisyam", nim: "101012300055", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "syalza sylvia nurallifa ", nim: "101012330159", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Aulia Syifa Rachma Ayu", nim: "101012300021", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Aurelia aisya rachma", nim: "101012300251", division: "Riset", image: "/cand/hilmi.png" },
    { name: "Frank Ritchie", nim: "101012300312", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Hanif Athallah Wiharso", nim: "101012300052", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Syahril Arfian Almazril", nim: "103032300013", division: "Riset", image: "/cand/hilmi.png" },
    { name: "Dafa Aulia Putera", nim: "101012330144", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Abraham Benedick", nim: "101012340408", division: "Riset", image: "/cand/bram.png" },
    { name: "Sayyid Izzudin", nim: "101012330200", division: "Riset", image: "/cand/sayyid.png" },
    { name: "Muhammad Rizaldi Shidiq ", nim: "101012300319", division: "Praktikum", image: "/cand/bram.png" },
    { name: "Rakhandhiya Fasya Albana", nim: "101012330220", division: "Praktikum", image: "/cand/bram.png" },
    { name: "Muhammad Faizh Ilmansyah", nim: "101012300201", division: "Praktikum", image: "/cand/bram.png" },
    { name: "Rafif Riqullah Siregar", nim: "101012300320", division: "Praktikum", image: "/cand/hilmi.png" },
    { name: "Septia Retno Puspita", nim: "101012330230", division: "Riset", image: "/cand/bram.png" },
    { name: "Muhammad Rizqi", nim: "101012300280", division: "Praktikum", image: "/cand/bram.png" },
    { name: "Ridho Anugrah Mulyadi", nim: "101032300028", division: "Riset", image: "/cand/bram.png" },
    { name: "Salwa Esa Fadia", nim: "101012330294", division: "Praktikum", image: "/cand/bram.png" },
    { name: "Rivanda Abdillah", nim: "101012330350", division: "Riset", image: "/cand/bram.png" },
    { name: "Stephani Maria Sianturi", nim: "103052300083", division: "Riset", image: "/cand/steph.png" },
];




export default function Congrats() {
  const [index, setIndex] = useState(0);
  const [showCongrats, setShowCongrats] = useState(true);
  const [startSlider, setStartSlider] = useState(false);
  const [showSecondCongrats, setShowSecondCongrats] = useState(false);
  const [isLastCard, setIsLastCard] = useState(false);
  const [hideEverythingElse, setHideEverythingElse] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCongrats(false);
      setStartSlider(true);
      setShowSecondCongrats(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (startSlider && !isLastCard) {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev === people.length - 1) {
            setTimeout(() => {
              setIsLastCard(true);
              setHideEverythingElse(true);
            }, 3000); // Delay agar animasi terakhir tetap terlihat
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [startSlider, isLastCard]);

  const getClass = (i: number) => {
    if (isLastCard) {
      return i === index ? "z-30 scale-100 blur-0 opacity-100 translate-x-0" : "hidden";
    }

    const total = people.length;
    const diff = (i - index + total) % total;
    if (diff === 0) {
      return "z-30 scale-100 blur-0 opacity-100 translate-x-0";
    } else if (diff === 1 || (index === total - 1 && i === 0)) {
      return "z-20 scale-90 blur-lg opacity-50 translate-x-[120%]";
    } else if (diff === 2 || (index === total - 2 && i === 0) || (index === total - 1 && i === 1)) {
      return "z-10 scale-75 blur-lg opacity-30 translate-x-[240%]";
    } else if (diff === total - 1 || (index === 0 && i === total - 1)) {
      return "z-20 scale-90 blur-lg opacity-50 -translate-x-[120%]";
    } else if (diff === total - 2 || (index === 1 && i === total - 1) || (index === 0 && i === total - 2)) {
      return "z-10 scale-75 blur-lg opacity-30 -translate-x-[240%]";
    }

    return "hidden";
  };

  return (
    <main className={`relative min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A4047] via-[#66A5AD] to-[#1A4047] overflow-hidden ${poppins.className}`}>
      <div className="absolute top-6 right-6">
        <Image src="/cps-logo-w.png" alt="Logo Lab" width={120} height={40} />
      </div>

      {showCongrats && <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-40"></div>}
      {showCongrats && (
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute text-black font-bold text-6xl md:text-8xl z-50"
        >
          CONGRATULATIONS
        </motion.div>
      )}

      {showSecondCongrats && !hideEverythingElse && (
        <motion.div className="absolute md:top-20 lg:top-20 xl:top-40 2xl:top-20 3xl:top-40 text-white font-bold text-4xl md:text-6xl text-center w-full z-40 flex justify-center flex-wrap gap-2">
          {[...("CONGRATULATIONS ASSISTANTS")].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: Math.random() * 600 - 300, y: Math.random() * 400 - 200, rotate: Math.random() * 360 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.1 * i, type: "spring" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      )}

      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center flex-col">
        {people.map((person, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out transform ${
              startSlider && !hideEverythingElse ? getClass(i) : "opacity-0"
            } w-[220px] md:w-[280px]`}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl text-center max-h-[500px]">
              <div className="bg-[#66A5AD] py-4 px-6">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="mx-auto scale-114 object-cover max-h-[210px]"
                />
              </div>
              <div className="bg-white py-4 px-6">
                <p className="text-lg font-semibold text-black">{person.name}</p>
                <p className="text-sm text-gray-700">{person.nim}</p>
                <p className="text-sm text-gray-700">{person.division}</p>
              </div>
            </div>
          </div>
        ))}

        {isLastCard && (
          <motion.button
            onClick={() => router.push("/params/bonus")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed inset-0 m-auto bg-white text-[#1A4047] font-bold py-4 px-8 rounded-xl shadow-xl z-50 hover:bg-gray-200 transition duration-300 w-fit h-fit text-2xl md:text-3xl"
          >
            ADA YANG KURANG GA??
          </motion.button>
        )}
      </div>
    </main>
  );
}
