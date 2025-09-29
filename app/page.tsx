"use client"
import Image from "next/image";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 min-h-screen">
      {/* Enhanced Header */}
      <header className="backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-lg sticky top-0 z-50">
        <nav className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg">
                <Image src={'/logo.svg'} alt="CareerSphere AI" width={40} height={40} className="brightness-0 invert" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CareerSphere AI
                </h1>
                <p className="text-xs text-gray-500">Your AI Career Partner</p>
              </div>
            </div>

            {/* Enhanced Auth Button */}
            <div className="flex items-center">
              {!user ? (
                <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                  <div className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Get Started
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                  </div>
                </SignInButton>
              ) : (
                <div className="p-2 bg-white rounded-2xl shadow-lg border border-gray-200/50">
                  <UserButton />
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-8 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">CareerSphere AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with cutting-edge AI tools designed for modern professionals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Career Chat */}
          <div className="group flex flex-col justify-center hover:bg-white/80 hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-105 border border-transparent hover:border-purple-200/50 backdrop-blur-sm">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <h3 className="group-hover:text-blue-600 text-xl font-bold text-gray-800 transition-colors duration-300">AI Career Q&A</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Get instant, personalized career advice powered by advanced AI algorithms</p>
              <span className="mt-4 inline-flex items-center gap-x-2 text-sm text-blue-600 decoration-2 group-hover:underline font-semibold">
                Explore Feature
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Resume Analyzer */}
          <div className="group flex flex-col justify-center hover:bg-white/80 hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-105 border border-transparent hover:border-purple-200/50 backdrop-blur-sm">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <h3 className="group-hover:text-purple-600 text-xl font-bold text-gray-800 transition-colors duration-300">Smart Resume Analysis</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Optimize your resume with AI-driven insights and industry best practices</p>
              <span className="mt-4 inline-flex items-center gap-x-2 text-sm text-purple-600 decoration-2 group-hover:underline font-semibold">
                Analyze Now
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Career Roadmaps */}
          <div className="group flex flex-col justify-center hover:bg-white/80 hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-105 border border-transparent hover:border-purple-200/50 backdrop-blur-sm">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <h3 className="group-hover:text-green-600 text-xl font-bold text-gray-800 transition-colors duration-300">Personalized Roadmaps</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Get customized career paths tailored to your goals and experience level</p>
              <span className="mt-4 inline-flex items-center gap-x-2 text-sm text-green-600 decoration-2 group-hover:underline font-semibold">
                Build Roadmap
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* 24/7 AI Support */}
          <div className="group flex flex-col justify-center hover:bg-white/80 hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-105 border border-transparent hover:border-purple-200/50 backdrop-blur-sm">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <h3 className="group-hover:text-orange-600 text-xl font-bold text-gray-800 transition-colors duration-300">Always Available</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Access AI-powered career guidance anytime, anywhere, at your convenience</p>
              <span className="mt-4 inline-flex items-center gap-x-2 text-sm text-orange-600 decoration-2 group-hover:underline font-semibold">
                Get Started
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of professionals who have accelerated their careers with CareerSphere AI
          </p>
          <a 
            href="/dashboard"
            className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25"
          >
            Start Your Free Trial
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}