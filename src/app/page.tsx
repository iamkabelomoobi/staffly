import Image from "next/image";
import { background1, logo } from "../assets/images";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Navigation Links */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <a
                href="#why"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Why Staffly
              </a>
              <a
                href="#workflows"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Workflows
              </a>
              <a
                href="#resources"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Resources
              </a>
              <a
                href="#pricing"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>

            {/* Center: Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="Staffly Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <button className="text-sm text-gray-700 hover:text-gray-900 px-4 py-2">
                Login
              </button>
              <button className="text-sm bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden min-h-[60vh]">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <Image
            src={background1}
            alt="Hero background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/40 to-blue-50/50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <div className="text-center max-w-4xl mx-auto relative">
            {/* User stat cards */}
            {/* <div className="absolute -left-20 top-10 bg-white rounded-2xl shadow-lg p-4 w-32 hidden lg:block">
              <div className="text-xs text-gray-500 mb-1">
                Leah&apos;s Business Tech
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold">9,460</span>
              </div>
            </div> */}
            {/* <div className="absolute -right-20 top-20 bg-white rounded-2xl shadow-lg p-4 w-32 hidden lg:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full"></div>
                <div className="text-xs font-medium">Amy Porter</div>
              </div>
              <div className="text-2xl font-bold">$90,850</div>
            </div> */}

            <div className="mb-4 text-sm text-indigo-600 font-medium">
              LEAH&apos;S BUSINESS TECH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The #1 rated <span className="text-indigo-600">HR platform</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              people & manager enablement
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Drive engagement, enable growth, align goals, and standardize
              compensation — all in one beautifully connected people platform
            </p>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg">
              Get a demo →
            </button>
            <div className="mt-6 text-sm text-gray-500">
              No credit card required · 14-day trial
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
