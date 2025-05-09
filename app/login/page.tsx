"use client";
import Image from "next/image";
import { poppins } from "../styles/font";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation"; // <-- Import useRouter

export default function Login() {
  const [ip, setIp] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // <-- Init router

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      if (ip === "192.168.10.10" && password === "12345") {
        toast.success("Login successful!", { position: "top-center" });

        setTimeout(() => {
          router.push(`/params`); // <-- Redirect with query param
        }, 2000); // Delay sebelum redirect

      } else {
        toast.error("Invalid IP Address or Password", { position: "top-center" });
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <main
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A4047] via-[#66A5AD] to-[#1A4047] p-4 ${poppins.className}`}
    >
      <ToastContainer />

      {/* Logo */}
      <div className="absolute top-6 right-6">
        <Image src="/cps-logo-w.png" alt="Logo" width={150} height={70} />
      </div>

      <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Login Section */}
        <div className="flex-1 bg-[#66A5AD] p-10 flex flex-col justify-center gap-6">
          <h2 className="text-white text-4xl capitalize text-center mb-6">LOGIN</h2>
          <input
            type="text"
            placeholder="IP Address"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            className="rounded-full px-4 py-3 outline-none bg-white text-black text-center"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full px-4 py-3 outline-none bg-white text-black text-center"
          />
          <button
            className="bg-[#569098] text-white rounded-full py-3 hover:opacity-90 transition w-[60%] mx-auto flex justify-center items-center gap-2"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Login Now"
            )}
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white p-10 flex justify-center w-full">
            <Image
              src="/dummy.png"
              alt="VoIP Login Illustration"
              width={300}
              height={300}
              className="scale-130 z-10"
            />
          </div>

          <div className="bg-[#569098] text-white text-sm text-left w-full px-6 py-8 z-20">
            <p>
              If you already have a VoIP account, please enter your login<br />
              credential to the left. These are provided either by your VoIP<br />
              provider, or by your system administrator for IP PBX.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
