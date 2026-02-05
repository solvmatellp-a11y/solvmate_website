"use client";

import { useState, useEffect } from "react";
import { calculateDaysInAction } from "../utils/daysInAction";

export default function AboutPage() {
  const [displayText, setDisplayText] = useState("growth");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText("transformation");
    }, 3000); // Changes after 3 seconds

    return () => clearTimeout(timer);
  }, []);

   const daysInAction = calculateDaysInAction();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 text-center">
              About SolvMate
            </h1>
            <p className="text-lg text-3xl md:text-4xl text-center text-blue-900 leading-relaxed">
              Your trusted partner in startup <span>{displayText}</span>
            </p>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8 px-20 py-12">
          <h4 className="text-4xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
            Who We Are
          </h4>
          <p className="text-lg text-gray-900 leading-relaxed">
            {`SolvMate is more than a consulting firm—we're your growth engine and
            your startup's best mate. Founded with a vision to empower emerging
            businesses, we've evolved into a comprehensive solution provider
            that combines strategic consulting with cutting-edge technology.`}
          </p>
          <h4 className="text-4xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
            Our Mission
          </h4>
          <p className="text-lg text-gray-900 leading-relaxed">
            {`We exist to solve bottlenecks. Every startup faces challenges that
            slow growth and drain resources. Our mission is to identify,
            analyze, and eliminate these obstacles through innovative solutions
            and strategic guidance. We don't just advise—we partner with you to
            ensure sustainable success.`}
          </p>
          <h4 className="text-4xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
            What Sets Us Apart
          </h4>
          <p className="text-lg text-gray-900 leading-relaxed">
            {`Our unique blend of technology and consulting expertise makes us
            different. We've pioneered India's first Virtual CEO service,
            developed powerful automation tools, and created frameworks that
            have helped 7 companies across, 3+ geographies achieve their growth
            objectives. With ${daysInAction} days of proven excellence, we bring both
            experience and innovation to every engagement.`}
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="py-20 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 overflow-hidden relative">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* Cards Container */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Innovation First */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 relative z-10">
                  Innovation First
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  We leverage the latest technologies to create solutions that
                  give you a competitive edge.
                </p>
              </div>

              {/* Card 2: Results Driven */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 relative z-10">
                  Results Driven
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  Every strategy, every solution is designed to deliver
                  measurable business outcomes.
                </p>
              </div>

              {/* Card 3: Partnership Mindset */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 relative z-10">
                  Partnership Mindset
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  {`Your success is our success. We're invested in your long-term
                  growth, not just quick fixes.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
