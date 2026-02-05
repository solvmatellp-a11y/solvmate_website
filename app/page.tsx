/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Users,
  TrendingUp,
  Activity,
  Target,
  Cog,
} from "lucide-react";
import { calculateDaysInAction } from "./utils/daysInAction";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {

  const daysInAction = calculateDaysInAction();

  return (
    <>
      {/* Hero Section with Blue Background */}
      <div className="relative min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex items-center pt-32">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="px-4 py-2 backdrop-blur-xl rounded-full text-sm font-semibold bg-blue-100/20 border border-blue-400/50 text-blue-200">
                  Strategy & Growth
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                SolvMate - Your Growth Engine
                {/* <span className="text-blue-300">
                  {" "}
                  repeatable, measurable, and customer-first
                </span> */}
              </h1>
              <h2 className="lg:text-3xl text-cyan-300">Startup's best mate</h2>

              <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
                We're not just consultants - we're your growth partners.
                SolvMate empowers startups to overcome challenges, scale
                operations, and achieve sustainable success through strategic
                guidance and innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  target=""
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-blue-600 transition transform hover:scale-105 shadow-lg text-center"
                >
                  Let's build a plan
                </a>
                <a
                  href="/services"
                  target=""
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-white rounded-lg font-semibold text-white hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                 See how we work <ArrowRight size={18} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm">
                <div>
                  <p className="font-semibold text-white">
                    Trusted by B2B SaaS & SMBs
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <div className="h-1 w-8 rounded bg-gradient-to-r from-blue-400 to-blue-300"></div>
                  <p>Proven 3-6x pipeline improvements</p>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                    Snapshot
                  </p>
                  <h3 className="text-3xl font-bold text-white mt-2">
                    Automated Growth Stack
                  </h3>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/30 to-blue-500/20 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-300" />
                      <p className="text-xs text-blue-200 uppercase tracking-wider">
                        Pipeline Growth
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-white">+142%</p>
                  </div>

                  <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-600/30 to-cyan-500/20 border border-cyan-400/30 rounded-lg p-4 hover:border-cyan-400/50 transition">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-cyan-300" />
                      <p className="text-xs text-cyan-200 uppercase tracking-wider">
                        Conversion Rate
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-white">+85%</p>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 group/item">
                    <div className="w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Sales process mapped & automated
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        End-to-end workflows optimized
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        CRM + outreach workflow
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        Integrated and connected
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Measurable KPIs & dashboarding
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        Real-time visibility
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Training for your team
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        Delivered and sustained
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-300">
                    Start with a short diagnostic call — we'll show quick wins
                    and a 90-day growth plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* solving your bottle neck section */}
      <div className="relative pt-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Solving Your Bottlenecks
          </h2>
          <h3
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#335799" }}
          >
            That's What We Do
          </h3>
          <p className="text-lg text-center mb-8">
            Every startup faces unique challenges—whether it's scaling
            operations, optimizing sales funnels, or structuring for growth. At
            SolvMate, we specialize in identifying and eliminating these
            bottlenecks. Our blend of cutting-edge technology solutions and
            expert consulting transforms obstacles into opportunities.
          </p>
          <p className="text-lg text-center">
            We combine deep industry expertise with innovative tech solutions to
            provide end-to-end support. From strategic planning to execution,
            from automation to analytics, we're equipped to handle every aspect
            of your growth journey. Our proven methodologies and proprietary
            tools ensure you're not just keeping up with the competition—you're
            leading the pack.
          </p>
        </div>
      </div>

      {/* Why Choose SolvMate Section */}
      <div className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose SolvMate
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Sales Engineering",
                desc: "Proven frameworks that turn leads into revenue",
              },
              {
                icon: BarChart3,
                title: "Strategic Operation Management",
                desc: "Streamline operations with cutting-edge methodologies that drive sustainable growth.",
              },
              {
                icon: Users,
                title: "End-to-End Coordination",
                desc: "Seamless project management from conception to execution, ensuring every stakeholder is aligned.",
              },
              {
                icon: Target,
                title: "Strategic Problem Solving",
                desc: "We tackle your most complex business challenges with data-driven strategies and innovative thinking.",
              },
              {
                icon: TrendingUp,
                title: "Beta Analysis of Sales Funnel",
                desc: "Deep-dive analytics into your sales pipeline to identify bottlenecks and optimize conversion rates.",
              },
              {
                icon: Cog,
                title: "Resource Planning",
                desc: "Optimize your resource allocation with precision planning that maximizes efficiency and ROI.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group backdrop-blur-xl bg-white border border-blue-200 p-8 rounded-xl hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg transition shadow-md"
              >
                <feature.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition relative z-10 text-blue-900" />
                <h3 className="text-xl font-semibold mb-2 relative z-10 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 relative z-10">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="mx-20 rounded-3xl mb-20 py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 overflow-hidden flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-20 text-white">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Impact Card 1 */}
            <div className="text-center space-y-6">
              <p className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
               {daysInAction}
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-white">Days in Action</p>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              </div>
            </div>

            {/* Impact Card 2 */}
            <div className="text-center space-y-6">
              <p className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                7
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-white">Happy Clients</p>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              </div>
            </div>

            {/* Impact Card 3 */}
            <div className="text-center space-y-6">
              <p className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                3+
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-white">Geographies Served</p>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}