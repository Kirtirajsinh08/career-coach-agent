"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import RoadmapCanvas from '../_components/RoadmapCanvas';
import RoadmapGeneratorDialog from '@/app/(routes)/dashboard/_components/RoadmapGeneratorDialog';

const RoadmapGeneratorAgent = () => {
    const {roadmapid} = useParams();
    const [roadMapDetail, setRoadMapDetail] = useState<any>();
    const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false)

    useEffect(() => {
        roadmapid && GetRoadmapDetails()
    }, [roadmapid]);

    const GetRoadmapDetails = async() => {
        const result = await axios.get('/api/history?recordId=' + roadmapid)
        console.log(result.data)
        setRoadMapDetail(result.data?.content)
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='border-2 border-gray-400 rounded-xl p-5'>
            <h2 className='text-2xl font-bold text-center'>{roadMapDetail?.roadmapTitle}</h2>
            <p className='text-gray-600 text-lg mt-3'><strong className='text-md'>Description: </strong><span>{roadMapDetail?.description}</span></p>
            <p className='text-blue-800 mt-3'><strong className='text-md'>Duration: </strong><span>{roadMapDetail?.duration}</span></p>
            <Button className='w-full mt-5' onClick={() => setOpenRoadmapDialog(true)}><Sparkles />Generate Another Roadmap</Button>
        </div>
        <div className='md:grid-cols-2'>
            <RoadmapCanvas initialNodes={roadMapDetail?.initialNodes} initialEdges={roadMapDetail?.initialEdges} />
        </div>
        <RoadmapGeneratorDialog openRoadmapDialog={openRoadmapDialog} setOpenRoadmapDialog={()=>setOpenRoadmapDialog(false)} />
    </div>
  )
}

export default RoadmapGeneratorAgent
