"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoaderCircle, Send, Bot, User, Sparkles } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import EmptyState from '../_components/EmptyState';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

type messages = {
  content: string | undefined;
  role: string | undefined;
  type: string | undefined;
};

const AiChat = () => {
  // ✅ start userInput as empty string
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  // ✅ always start as empty array
  const [messageList, setMessageList] = useState<messages[]>([]);
  const { chatid } = useParams();
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  useEffect(() => {
    if (chatid) GetMessageList();
  }, [chatid]);

  const GetMessageList = async () => {
    try {
      const result = await axios.get('/api/history?recordId=' + chatid);
      console.log(result.data);
      // ✅ always coerce to array
      setMessageList(result?.data?.content || []);
    } catch (err) {
      console.error(err);
      setMessageList([]);
    }
  };

  const onSend = async () => {
    if (!userInput?.trim()) return;
    setLoading(true);

    // add user message
    setMessageList(prev => [
      ...prev,
      {
        content: userInput,
        role: 'User',
        type: 'text'
      }
    ]);
    const currentInput = userInput; // store before clearing
    setUserInput('');

    try {
      const result = await axios.post('/api/ai-career-chat-agent', {
        userInput: currentInput
      });
      console.log(result.data);
      // add AI response
      setMessageList(prev => [...prev, result.data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  // ✅ persist messages to DB when they change
  useEffect(() => {
    if (messageList && messageList.length > 0) {
      updateMessageList();
    }
  }, [messageList]);

  const updateMessageList = async () => {
    try {
      const result = await axios.put('/api/history', {
        content: messageList,
        recordId: chatid,
        aiAgentType: '/ai-tools/ai-chat'
      });
      console.log('Saved to DB', result.data);
    } catch (err) {
      console.error('Error saving messages', err);
    }
  };

  const onNewChat = async () => {
    const id = uuidv4();
    try {
      await axios.post('/api/history', {
        recordId: id,
        content: [],
        createdAt: new Date().toString(),
        aiAgentType: '/ai-tools/ai-chat' // ✅ add aiAgentType here too
      });
      router.replace("/ai-tools/ai-chat/" + id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='relative bg-gray-100 to-purple-50/30 max-h-screen'>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-pink-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header - Enhanced with animations */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-6 shadow-lg sticky z-20 animate-slide-down">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg">
              <Bot className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h2 className='font-bold text-xl text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                AI Career Q/A Chat
              </h2>
              <p className='text-md text-gray-600'>
                Plan your career smarter with AI advice and personalized roadmaps
              </p>
            </div>
          </div>
          <Button 
            onClick={onNewChat}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="relative z-10">+ New Chat</span>
          </Button>
        </div>
      </div>

      {/* Messages Area - Enhanced scrolling */}
      <div 
        ref={chatContainerRef}
        className='overflow-y-auto px-6 py-6 scroll-smooth custom-scrollbar'
        style={{ 
          height: 'calc(100vh - 180px - 80px)',
          scrollBehavior: 'smooth'
        }}
      >
        {/* Empty State */}
        {(messageList?.length ?? 0) <= 0 && (
          <div className='flex items-center justify-center h-full animate-fade-in'>
            <EmptyState
              selectedQuestion={(question: string) => setUserInput(question)}
            />
          </div>
        )}

        {/* Message List with staggered animations */}
        <div className="space-y-6 pb-6">
          {messageList?.map((message, index) => (
            <div key={index} className={`animate-message-appear ${message.role === 'User' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div
                className={`flex items-start gap-3 mb-3 group ${
                  message.role === 'User' ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* AI Avatar - Left side */}
                {message.role !== 'User' && (
                  <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                    <div className="p-2.5 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:shadow-blue-500/50">
                      <Bot className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                  </div>
                )}

                {/* Message bubble with enhanced styling */}
                <div
                  className={`relative p-4 rounded-3xl max-w-[75%] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group ${
                    message.role === 'User'
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-br-lg'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-lg hover:border-blue-200'
                  }`}
                >
                  {/* Message content */}
                  <ReactMarkdown className={`prose prose-sm max-w-none transition-all duration-300 ${
                    message.role === 'User' 
                      ? 'prose-invert' 
                      : 'prose-gray group-hover:prose-blue'
                  }`}>
                    {message.content}
                  </ReactMarkdown>

                  {/* Shine effect for user messages */}
                  {message.role === 'User' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-3xl"></div>
                  )}
                  
                  {/* Message tail */}
                  <div className={`absolute bottom-0 w-4 h-4 transform rotate-45 ${
                    message.role === 'User'
                      ? '-right-1 bg-gradient-to-br from-purple-600 to-blue-600'
                      : '-left-1 bg-white border-l border-b border-gray-100'
                  }`}></div>
                </div>

                {/* User Avatar - Right side */}
                {message.role === 'User' && (
                  <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                    <div className="p-2.5 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:shadow-purple-500/50">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  </div>
                )}
              </div>

              {/* Enhanced Loader with animations */}
              {loading && messageList?.length - 1 === index && (
                <div className='flex items-start gap-3 animate-bounce-in'>
                  <div className="p-2.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg animate-pulse">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className='p-4 rounded-3xl rounded-bl-lg bg-white border border-gray-100 flex items-center gap-3 shadow-lg'>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-gray-600 font-medium">AI is thinking...</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Input Box with animations */}
      <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200/50 p-4 shadow-2xl z-30'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex items-center gap-3'>
            <div className='flex-1 relative group'>
              <Input
                placeholder='Type your message here...'
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                onKeyPress={handleKeyPress}
                className='bg-gray-50/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300 hover:shadow-lg group-hover:bg-white'
                disabled={loading}
              />
              {/* Input glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
            <Button 
              onClick={onSend} 
              disabled={loading || !userInput.trim()}
              className={`group p-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                loading || !userInput.trim() 
                  ? 'bg-gray-300 cursor-not-allowed scale-95' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25'
              }`}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {loading ? (
                <LoaderCircle className='animate-spin w-6 h-6 text-white' />
              ) : (
                <Send className='w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes message-appear {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
        
        .animate-message-appear {
          animation: message-appear 0.6s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #3b82f6);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default AiChat;