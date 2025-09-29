"use client"
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
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
        {/* Header section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          <h1 className='font-bold text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Your Profile
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          
          <p className='text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto'>
            Manage your account settings and personal information
          </p>
        </div>

        {/* Profile container with enhanced styling */}
        <div className='max-w-5xl mx-auto'>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5"></div>
            
            {/* Clerk UserProfile */}
            <div className="relative z-10 p-8">
              <UserProfile 
                appearance={{
                  elements: {
                    card: "shadow-none bg-transparent border-none",
                    navbar: "bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl border border-blue-200/30",
                    navbarButton: "text-blue-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 font-semibold",
                    navbarButtonIcon: "text-blue-600",
                    headerTitle: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
                    headerSubtitle: "text-gray-600",
                    profileSectionTitle: "text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4",
                    profileSectionContent: "bg-gray-50/50 rounded-xl p-4",
                    formButtonPrimary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
                    formFieldInput: "border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg transition-all duration-200",
                    identityPreview: "bg-white rounded-xl shadow-md border border-gray-100 hover:border-purple-200 transition-all duration-300",
                    identityPreviewText: "text-gray-700",
                    identityPreviewEditButton: "text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300"
                  },
                  variables: {
                    colorPrimary: "#7C3AED",
                    colorBackground: "transparent",
                    colorInputBackground: "#FFFFFF",
                    colorInputText: "#374151",
                    borderRadius: "12px"
                  }
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-75"></div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex justify-center items-center gap-8 flex-wrap text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Always Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Profile