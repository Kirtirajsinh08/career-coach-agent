"use client"
import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Billing = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-indigo-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        {/* Header section with enhanced styling */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl mb-6 shadow-2xl animate-bounce-gentle">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          
          <h2 className='font-bold text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-slide-up'>
            Choose Your Plan
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 animate-expand"></div>
          
          <p className='text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto animate-fade-in-up' style={{animationDelay: '0.3s'}}>
            Select A Subscription To Access All AI Tools
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left" style={{animationDelay: '0.5s'}}>
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-gray-800 font-semibold text-lg">AI Career Chat</h3>
              <p className="text-gray-600 text-sm mt-2">Unlimited career guidance</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.7s'}}>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-gray-800 font-semibold text-lg">Resume Analysis</h3>
              <p className="text-gray-600 text-sm mt-2">Professional resume insights</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{animationDelay: '0.9s'}}>
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-gray-800 font-semibold text-lg">Career Roadmaps</h3>
              <p className="text-gray-600 text-sm mt-2">Personalized growth paths</p>
            </div>
          </div>
        </div>

        {/* Pricing table container with enhanced styling */}
        <div className='max-w-7xl mx-auto animate-fade-in-up' style={{animationDelay: '1.1s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 rounded-3xl"></div>
            
            {/* Clerk Pricing Table */}
            <div className="relative z-10">
              <PricingTable />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-75"></div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1.3s'}}>
          <div className="flex justify-center items-center gap-8 flex-wrap text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Instant Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-expand {
          animation: expand 1.2s ease-out;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Billing