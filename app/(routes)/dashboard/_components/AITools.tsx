import React from 'react'
import chatbot from '../../../../public/chatbot.png'
import resume from '../../../../public/resume.png'
import roadmap from '../../../../public/roadmap.png'
import AIToolCard from './AIToolCard'

export const aiToolList = [
    {
        name: 'AI Career Q&A Chat',
        description: 'Get instant career guidance',
        icon: chatbot,
        button: 'Ask Queries',
        path: 'ai-tools/ai-chat'
    },
    {
        name: 'AI Resume Analyser',
        description: 'Get smart resume insights',
        icon: resume,
        button: 'Get Resume Insights',
        path: 'ai-tools/ai-resume-analyser'
    },
    {
        name: 'AI Roadmap Generator',
        description: 'Get your career paths',
        icon: roadmap,
        button: 'Generate Roadmap',
        path: 'ai-tools/ai-roadmap-agent'
    }
]

const AITools = () => {
  return (
    <div className='mt-7 rounded-2xl p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-xl border border-indigo-200/50 relative overflow-hidden'>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
            <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                
                <h2 className='font-bold text-3xl text-gray-800 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                    Available AI Tools
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-sm"></div>
                
                <p className='font-medium text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto'>
                    Empower your career journey with exclusive AI tools designed to build, shape, and accelerate your future
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {aiToolList.map((tool: any, index) => (
                    <div key={index} className="transform hover:scale-105 transition-all duration-300">
                        <AIToolCard tool={tool} />
                    </div>
                ))}
            </div>
            
            {/* Bottom decoration */}
            <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-sm"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '1s'}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AITools