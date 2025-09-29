import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Bot, History, Layers, UserCircle, Wallet } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Logo from '../../public/Logo.png'

const items = [
    {
        title: "WorkSpace",
        url: "/dashboard",
        icon: Layers,
    },
    {
        title: "AI Tools",
        url: "/ai-tools",
        icon: Bot,
    },
    {
        title: "My History",
        url: "/history",
        icon: History,
    },
    {
        title: "Billing",
        url: "/billing",
        icon: Wallet,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: UserCircle,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar className="bg-gradient-to-b from-slate-50 to-gray-100 border-r border-gray-200/50 shadow-xl">
            <SidebarHeader className="border-b border-gray-200/30 bg-white/50 backdrop-blur-sm">
                <div className='p-6 flex justify-center'>
                    <div className="relative">
                        <Image src={Logo} alt='logo' width={200} height={130}
                            className='w-full h-full drop-shadow-lg' />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className="bg-gradient-to-b from-transparent to-gray-50/50">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className='mt-4 space-y-2 px-3'>
                            {items.map((item, index) => (
                                <div key={index} className="relative group">
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <a href={item.url} className={`relative p-4 text-lg flex gap-4 items-center
                                     hover:bg-white/70 hover:shadow-lg hover:scale-105 rounded-xl transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-gray-200/50 ${path.includes(item.url) && 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-blue-200'}`}>
                                        
                                        {/* Icon container */}
                                        <div className={`relative p-2 rounded-lg transition-all duration-300 ${path.includes(item.url) ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'}`}>
                                            <item.icon className={`h-5 w-5 transition-all duration-300 ${path.includes(item.url) ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'}`} />
                                            
                                            {/* Glow effect for active */}
                                            {path.includes(item.url) && (
                                                <div className="absolute inset-0 bg-white/30 rounded-lg blur-sm"></div>
                                            )}
                                        </div>
                                        
                                        <span className={`font-semibold transition-all duration-300 ${path.includes(item.url) ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                                            {item.title}
                                        </span>
                                        
                                        {/* Active indicator */}
                                        {path.includes(item.url) && (
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        )}
                                        
                                        {/* Hover shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                    </a>
                                </div>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-gray-200/30 bg-white/30 backdrop-blur-sm">
                <div className="p-4 text-center">
                    <h2 className='text-gray-500 text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent'>
                        Copyright @Kirtirajsinh Parmar
                    </h2>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}