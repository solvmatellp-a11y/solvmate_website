/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  X,
  ChevronDown,
  Briefcase,
  TrendingUp,
  Target,
  Map,
  Layers,
  Zap,
  BarChart3,
  Cpu,
  Megaphone,
  Users,
} from "lucide-react";

interface Service {
  id: number;
  icon: any;
  bgColor: string;
  title: string;
  desc: string;
  fullDesc: string;
  features: string[];
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: <Briefcase size={24} />,
    bgColor: "bg-purple-600",
    title: "Business Consulting",
    desc: "End-to-end support in transforming business goals into actionable roadmaps.",
    fullDesc:
      "Our business consulting services provide comprehensive support in transforming your business goals into actionable roadmaps. We work closely with your team to understand your challenges, identify opportunities, and create a strategic plan that drives sustainable growth.",
    features: [
      "Strategic business assessment",
      "Growth roadmap development",
      "Market analysis and positioning",
      "Operational efficiency review",
      "Leadership coaching and mentoring",
    ],
  },
  {
    id: 2,
    icon: <TrendingUp size={24} />,
    bgColor: "bg-cyan-500",
    title: "Sales Process Engineering",
    desc: "Design efficient sales workflows and CRM strategies for high-performance selling.",
    fullDesc:
      "Transform your sales operations with our process engineering expertise. We design and implement efficient sales workflows, optimize CRM strategies, and create systems that enable your team to close more deals faster.",
    features: [
      "Sales pipeline optimization",
      "CRM implementation and customization",
      "Sales workflow automation",
      "Team training and enablement",
      "Performance metrics and analytics",
    ],
  },
  {
    id: 3,
    icon: <Target size={24} />,
    bgColor: "bg-teal-500",
    title: "Strategic Planning",
    desc: "Create long-term plans with measurable business objectives.",
    fullDesc:
      "Develop clear, actionable strategic plans that align with your business vision. We help you set measurable objectives, identify key initiatives, and create a roadmap for achieving your long-term goals.",
    features: [
      "Vision and mission development",
      "5-year strategic planning",
      "Competitive analysis",
      "Goal setting and KPIs",
      "Strategy execution framework",
    ],
  },
  {
    id: 4,
    icon: <Map size={24} />,
    bgColor: "bg-amber-500",
    title: "Road Map Guidance",
    desc: "Define clear milestones and KPIs aligned with business goals.",
    fullDesc:
      "Get expert guidance in creating detailed roadmaps with clear milestones and KPIs. We help you break down your strategic goals into manageable phases with measurable outcomes.",
    features: [
      "Milestone definition",
      "KPI development",
      "Timeline planning",
      "Resource allocation",
      "Progress tracking systems",
    ],
  },
  {
    id: 5,
    icon: <Layers size={24} />,
    bgColor: "bg-red-500",
    title: "Internal Structuring of Organisation",
    desc: "Restructure teams and processes for enhanced productivity.",
    fullDesc:
      "Optimize your organizational structure to maximize efficiency and productivity. We analyze your current setup, identify bottlenecks, and redesign team structures and processes.",
    features: [
      "Organizational design",
      "Process mapping",
      "Team restructuring",
      "Role definition",
      "Change management support",
    ],
  },
  {
    id: 6,
    icon: <Zap size={24} />,
    bgColor: "bg-teal-600",
    title: "Operation Designing",
    desc: "Build robust operational systems and SOPs to support scalability.",
    fullDesc:
      "Create the operational foundation for scalable growth. We design Standard Operating Procedures (SOPs), implement robust systems, and establish best practices.",
    features: [
      "SOP development",
      "System implementation",
      "Process documentation",
      "Quality assurance frameworks",
      "Scalability planning",
    ],
  },
  {
    id: 7,
    icon: <BarChart3 size={24} />,
    bgColor: "bg-purple-600",
    title: "Sales Analysis & Upscaling Strategies",
    desc: "Deep-dive into sales data and uncover high-impact growth opportunities.",
    fullDesc:
      "Leverage data-driven insights to identify growth opportunities and develop upscaling strategies. We analyze your sales performance and create actionable strategies.",
    features: [
      "Sales data analytics",
      "Performance benchmarking",
      "Opportunity identification",
      "Growth strategy development",
      "Implementation roadmap",
    ],
  },
  {
    id: 8,
    icon: <Cpu size={24} />,
    bgColor: "bg-cyan-500",
    title: "Robotic Process Automation (RPA)",
    desc: "Eliminate manual effort using smart automation tools.",
    fullDesc:
      "Automate repetitive, manual processes to improve efficiency and reduce costs. We identify automation opportunities and implement RPA solutions.",
    features: [
      "Process automation assessment",
      "RPA tool selection",
      "Implementation and deployment",
      "Team training",
      "Continuous optimization",
    ],
  },
  {
    id: 9,
    icon: <Megaphone size={24}/>,
    bgColor: "bg-pink-500",
    title: "Digital Marketing",
    desc: "Branding, SEO, performance marketing and social media strategy for lead generation.",
    fullDesc:
      "Build a strong digital presence and drive customer acquisition through integrated digital marketing strategies. We cover everything from branding to performance marketing.",
    features: [
      "Brand strategy development",
      "SEO optimization",
      "Content marketing",
      "Social media strategy",
      "Performance marketing campaigns",
    ],
  },
  {
    id: 10,
    icon: <Users size={24}/>,
    bgColor: "bg-blue-600",
    title: "Resource Management",
    desc: "Optimize allocation and performance of internal and outsourced teams.",
    fullDesc:
      "Maximize the efficiency of your human resources. We help you optimize team allocation, improve performance management, and balance resources.",
    features: [
      "Resource planning",
      "Performance management",
      "Team optimization",
      "Cost efficiency analysis",
      "Talent development",
    ],
  },
];

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      {/* Hero Section with Image */}
      <div className="relative min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex items-center">
        {/* Background image container */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=1200&fit=crop"
            alt="Abstract design"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full object-cover opacity-60 mix-blend-lighten"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - empty for image visibility */}
            <div className="hidden lg:block" />

            {/* Right side - Text content */}
            <div className="space-y-8 text-right lg:text-right text-center lg:text-right">
              <div className="inline-block ml-auto mr-0">
                <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest">
                  Our Services
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
                Bringing the best
              </h1>

              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed max-w-xl ml-auto">
                SolvMate delivers tech enabled consulting services designed to
                help organizations plan, execute, and scale efficiently.
              </p>

              <div className="flex gap-4 justify-center lg:justify-end pt-8">
                <a
                  href="https://cal.com/solvmate/consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full font-semibold text-white hover:from-blue-500 hover:to-blue-600 transition transform hover:scale-105 shadow-lg"
                >
                  Book a diagnostic call
                </a>
                <button className="px-8 py-3 border-2 border-white rounded-full font-semibold text-white hover:bg-white/10 transition">
                  Request a proposal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Services Section */}
      <div className="relative pt-20 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 backdrop-blur-xl rounded-full text-sm font-semibold bg-cyan-100 border border-cyan-300 text-cyan-900">
                Our Services
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service catalog
            </h2>
            <p className="text-lg text-gray-600">
              We offer a full suite of services that empower you to streamline
              operations, improve sales, and scale sustainably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group backdrop-blur-xl bg-white border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition shadow-md text-left cursor-pointer hover:scale-105 transform duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition flex-shrink-0`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative backdrop-blur-xl bg-white/95 border-2 border-blue-200 rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition z-10"
            >
              <X size={24} />
            </button>

            <div className="flex items-start gap-4 mb-6 pr-8">
              <div
                className={`w-16 h-16 ${selectedService.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md flex-shrink-0`}
              >
                {selectedService.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedService.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  {selectedService.desc}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-900 font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200 flex gap-4">
                <a
                  href="https://cal.com/solvmate/consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg font-semibold text-white hover:from-blue-800 hover:to-blue-700 transition transform hover:scale-105 text-center"
                >
                  Book a Consultation
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:border-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
