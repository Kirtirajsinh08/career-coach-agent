"use client"

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ResumeUploadDialog from './ResumeUploadDialog'
import RoadmapGeneratorDialog from './RoadmapGeneratorDialog'

export interface TOOL {
    name: string,
    description: string,
    icon: string | StaticImageData,
    button: string,
    path: string
}

type AIToolsProps = {
    tool: TOOL
}

const AIToolCard = ({tool}: AIToolsProps) => {

  const id = uuidv4();
  const { user } = useUser();
  const router = useRouter();
  const [openResumeUpload, setOpenResumeUpload] = useState(false);
  const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onClickButton = async() => {

    if(tool.name == 'AI Resume Analyser'){
      setOpenResumeUpload(true);
      return;
    }

    if(tool.path == 'ai-tools/ai-roadmap-agent'){
      setOpenRoadmapDialog(true);
      return;
    }

    // create new record to history table
    const result = await axios.post('/api/history', {
      recordId: id,
      content: [],
      aiAgentType: tool.path
    });
    console.log(result)
    router.push( tool.path + '/' + id)
  }

  const getGradientClass = () => {
    if (tool.name === 'AI Career Q&A Chat') {
      return 'from-blue-500 to-cyan-500';
    } else if (tool.name === 'AI Resume Analyser') {
      return 'from-purple-500 to-pink-500';
    } else if (tool.name === 'AI Roadmap Generator') {
      return 'from-green-500 to-emerald-500';
    }
    return 'from-indigo-500 to-purple-500';
  };

  const getHoverGradientClass = () => {
    if (tool.name === 'AI Career Q&A Chat') {
      return 'group-hover:from-blue-600 group-hover:to-cyan-600';
    } else if (tool.name === 'AI Resume Analyser') {
      return 'group-hover:from-purple-600 group-hover:to-pink-600';
    } else if (tool.name === 'AI Roadmap Generator') {
      return 'group-hover:from-green-600 group-hover:to-emerald-600';
    }
    return 'group-hover:from-indigo-600 group-hover:to-purple-600';
  };

  return (
    <div 
      className='group relative bg-white border-2 border-gray-200 hover:border-transparent p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} ${getHoverGradientClass()} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Icon container with enhanced animations */}
      <div className="relative z-10 flex justify-center mb-4">
        <div className={`relative p-4 bg-gradient-to-br ${getGradientClass()} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
          
          <Image 
            className={`relative z-10 transition-all duration-300 ${isHovered ? 'brightness-0 invert' : ''}`}
            src={tool.icon} 
            alt={tool.name} 
            height={40} 
            width={40} 
          />
        </div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10 text-center space-y-3">
        <h2 className='font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:scale-105'>
          {tool.name}
        </h2>
        <p className='font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed'>
          {tool.description}
        </p>
        
        <Button 
          className={`w-full mt-4 bg-gradient-to-r ${getGradientClass()} hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 relative overflow-hidden`}
          onClick={onClickButton}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="relative z-10">{tool.button}</span>
        </Button>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${getGradientClass()} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-3xl`}></div>

      <ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeUpload={setOpenResumeUpload}/>

      <RoadmapGeneratorDialog openRoadmapDialog={openRoadmapDialog} setOpenRoadmapDialog={()=>setOpenRoadmapDialog(false)} />
    </div>
  )
}

export default AIToolCard