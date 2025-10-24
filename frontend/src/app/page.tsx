"use client";
import Image from "next/image";

export default function Home() {
  async function fetchPrediction() {
    const res = await fetch("http://127.0.0.1:8000/predict");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Galaxy Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/media/videos/landing/galaxy-with-stars.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold shimmer-text mb-4 tracking-wider">
              CryptoMystik
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light leading-relaxed">
            Decrypt the future of cryptocurrency
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the mystical world of digital assets with advanced
            analytics, real-time predictions, and cutting-edge blockchain
            technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={fetchPrediction}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl glow-button"
            >
              Get Prediction
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 float-animation hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-300">
              Real-time analysis and predictions powered by advanced algorithms
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 float-animation hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-300">
              Bank-grade security with encrypted data transmission
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 float-animation hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Advanced Analytics
            </h3>
            <p className="text-gray-300">
              Comprehensive market insights and trend analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
