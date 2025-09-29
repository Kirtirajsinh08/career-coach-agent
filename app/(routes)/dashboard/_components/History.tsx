"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import bulb from '../../../../public/bulb.png'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { aiToolList } from './AITools';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Clock, FileText, Calendar, ArrowRight, History as HistoryIcon } from 'lucide-react';

const History = () => {

    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
      GetHistory();
    }, [])

    const GetHistory = async() => {
      setLoading(true)
      const result = await axios.get('/api/history/all')
      console.log(result.data)
      setUserHistory(result.data)
      setLoading(false)
    }

    const GetAgentName = (path:string) => {
      const agent = aiToolList.find(item => item.path == path)
      return agent
    }

    const formatDate = (dateString: string) => {
      const dateObj = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - dateObj.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return 'Today';
      if (diffDays === 2) return 'Yesterday';
      if (diffDays <= 7) return `${diffDays - 1} days ago`;
      
      return dateObj.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    }

    const formatTime = (dateString: string) => {
      return new Date(dateString).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }

  return (
    <div className='mt-7 rounded-2xl p-8 bg-gradient-to-br from-blue-200 via-white to-blue-200 shadow-xl border border-gray-200/50 relative overflow-hidden'>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 bg-blue-200">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="relative z-10 text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
                <HistoryIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className='font-bold text-3xl text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Previous History
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            
            <p className='font-medium text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto'>
                Here you can revisit and manage everything you have worked on earlier with us.
            </p>
        </div>

        {/* Loading state */}
        { loading &&
          <div className="space-y-4 mt-8">
            {[1, 2, 3, 4, 5].map((item:any, index:any) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Skeleton className='h-12 w-12 rounded-xl'/>
                      <div className="space-y-2">
                        <Skeleton className='h-5 w-40'/>
                        <Skeleton className='h-4 w-24'/>
                      </div>
                    </div>
                    <Skeleton className='h-4 w-32'/>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        }

        {/* Empty state */}
        {userHistory?.length == 0 && !loading &&
            <div className='flex items-center justify-center mt-8 flex-col p-12 bg-blue/200 backdrop-blur-sm rounded-2xl border border-gray-200/50'>
                <div className="relative mb-6">
                    <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg">
                        <Image src={bulb} alt='Bulb' height={60} width={60} className="brightness-0 invert"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-lg opacity-30"></div>
                </div>
                <h2 className='font-bold text-2xl text-gray-700 mb-4'>You Do Not Have Any History</h2>
                <p className="text-gray-500 text-center mb-6 max-w-md">
                    Start your AI-powered career journey today and build your professional future with our intelligent tools
                </p>
                <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Explore AI Tools
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </Link>
            </div>
        }

        {/* History list */}
        {userHistory?.length > 0 && !loading &&
            <div className="space-y-4 mt-8">
                {userHistory?.map((history:any, index:any) => {
                  const agent = GetAgentName(history?.aiAgentType);
                  
                  return (
                    <Link 
                      key={index}
                      href={`/${history?.aiAgentType}/${history?.recordId}`} 
                      className="group block"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                          {/* Left section */}
                          <div className="flex items-center gap-4">
                            {/* Icon container */}
                            <div className="relative p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                              {agent?.icon && (
                                <Image 
                                  src={agent.icon} 
                                  alt={agent.name || "Tool"} 
                                  height={24}
                                  width={24} 
                                  className="transition-all duration-300"
                                />
                              )}
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-1">
                              <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {agent?.name || 'AI Tool'}
                              </h3>
                              <p className="text-sm text-gray-500 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Session Activity
                              </p>
                            </div>
                          </div>
                          
                          {/* Right section */}
                          <div className="text-right space-y-1">
                            <div className="flex items-center gap-2 text-gray-600 justify-end">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {formatDate(history?.createdAt)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 justify-end">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">
                                {formatTime(history?.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ml-4">
                          <ArrowRight className="w-5 h-5 text-blue-500" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div> 
        }
    </div>
  )
};

export default History