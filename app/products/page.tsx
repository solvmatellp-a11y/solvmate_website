"use client";

export default function ProductPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-8 pb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 text-center">
              Our Products
            </h1>
            <p className="text-lg text-3xl md:text-4xl text-center text-blue-900 leading-relaxed">
              {`Innovative tools powering the next generation of businesses`}
            </p>
          </div>
        </div>
        {/* Three Cards Section */}
        <div className="rounded-3xl py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 overflow-hidden relative">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* Cards Container */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: BlastMate */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1 relative z-10">
                  BlastMate
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  Powerful Bulk Reachout Tool
                </p>
                <div className="pb-6 border-b border-white/10" />
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10 pt-4">
                  Supercharge your outreach campaigns with BlastMate. Our
                  intelligent bulk messaging platform enables you to reach
                  thousands of prospects while maintaining personalization and
                  deliverability. Features include multi-channel campaigns,
                  advanced segmentation, A/B testing, and real-time analytics.
                </p>
              </div>

              {/* Card 2: Hiremate.in */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1 relative z-10">
                  Hiremate.in
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  AI-Driven Talent Management
                </p>
                <div className="pb-6 border-b border-white/10" />
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10 pt-4">
                  Transform your hiring process with Hiremate.in. Our AI-powered
                  platform streamlines recruitment from sourcing to onboarding.
                  Intelligent candidate matching, automated screening, interview
                  scheduling, and predictive analytics help you build
                  high-performing teams faster and more efficiently than ever
                  before.
                </p>
              </div>

              {/* Card 3: Kannakilabs */}
              <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1 relative z-10">
                  AI Research Lab
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10">
                  Neuromorphic Computing R&D
                </p>
                <div className="pb-6 border-b border-white/10" />
                <p className="text-gray-100 text-base md:text-lg leading-relaxed relative z-10 pt-4">
                  {`Pioneering the future of computing at AI Research. Our research and development division focuses on neuromorphic computing and next-generation AI technologies. We develop cutting-edge solutions that push the boundaries of what's possible in machine learning, cognitive computing, and intelligent systems.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
