"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='relative p-8 bg-gradient-to-br from-[#7F1D1D] via-[#581C87] to-[#6B21A8] rounded-2xl overflow-hidden shadow-2xl animate-fade-in'>
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-6 left-6 w-24 h-24 bg-white rounded-full animate-pulse hover:animate-bounce"></div>
        <div className="absolute bottom-8 right-10 w-20 h-20 bg-white rounded-full animate-pulse hover:animate-spin" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full animate-pulse hover:animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse hover:animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-12 right-12 w-2 h-2 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-12 left-12 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-purple-200 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent animate-pulse-slow"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center space-y-6">
        <div className="space-y-2 animate-slide-up">
          <h2 className='text-4xl lg:text-5xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300 cursor-default'>
            CareerSphere<span className="text-purple-200 animate-pulse">AI</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto rounded-full animate-expand"></div>
        </div>
        
        <p className='text-lg lg:text-xl font-medium text-purple-100 leading-relaxed max-w-4xl mx-auto px-4 animate-fade-in-up opacity-0' style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          "An intelligent career accelerator that crafts personalized roadmaps, refines your resume with precision, and empowers you through an interactive Q&A chatbot for smarter professional growth."
        </p>
        
        {/* Feature highlights with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left opacity-0 hover:shadow-lg hover:shadow-purple-500/25" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            <div className="text-2xl mb-2 animate-bounce hover:animate-spin transition-all duration-300">🤖</div>
            <h3 className="text-white font-semibold text-sm">AI Q&A Chatbot</h3>
            <p className="text-purple-200 text-xs mt-1">Career guidance at your fingertips</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-up opacity-0 hover:shadow-lg hover:shadow-purple-500/25" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <div className="text-2xl mb-2 animate-bounce hover:animate-pulse transition-all duration-300" style={{animationDelay: '0.2s'}}>📄</div>
            <h3 className="text-white font-semibold text-sm">Resume Analyzer</h3>
            <p className="text-purple-200 text-xs mt-1">Precision resume optimization</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-right opacity-0 hover:shadow-lg hover:shadow-purple-500/25" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <div className="text-2xl mb-2 animate-bounce hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.4s'}}>🗺️</div>
            <h3 className="text-white font-semibold text-sm">Roadmap Generator</h3>
            <p className="text-purple-200 text-xs mt-1">Personalized career pathways</p>
          </div>
        </div>
        
        <Button className='mt-6 px-8 py-3 bg-white text-purple-800 font-semibold rounded-full hover:bg-purple-50 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/30 animate-bounce-in opacity-0 hover:animate-pulse relative overflow-hidden group' style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <span className="relative z-10">Let's Get Started</span>
        </Button>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 5rem; }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        
        .animate-expand {
          animation: expand 1.2s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default WelcomeBanner