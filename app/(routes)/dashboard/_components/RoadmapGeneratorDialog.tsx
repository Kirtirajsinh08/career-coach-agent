"use client "
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader, Sparkles } from 'lucide-react'
import axios from 'axios'
import { v4 } from 'uuid'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

const RoadmapGeneratorDialog = ({openRoadmapDialog, setOpenRoadmapDialog}:any) => {

    const [userInput, setuserInput] = useState<string>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { has } = useAuth();

    const GenerateRoadmap = async() => {
        const roadmapID = v4();
        setLoading(true)
        try{

            // @ts-ignore
            const hasSubscriptionEnabled = await has({plan: 'pro'})
            if(!hasSubscriptionEnabled) {
                const resultHistory = await axios.get('/api/history')
                const historyList = resultHistory.data;
                const isPresent = await historyList.find((item: any) => item?.aiAgentType == 'ai-tools/ai-roadmap-agent')
                router.push('/billing')
                if(isPresent){
                    return null;
                }
            }

            const result = await axios.post('/api/ai-roadmap-agent', {
                roadmapID: roadmapID,
                userInput: userInput

            })
            console.log(result.data)
            router.push('/ai-tools/ai-roadmap-agent/'+roadmapID)
            setLoading(false)
        } catch(e) {
            console.log(e)
            setLoading(false)
        }
    }

  return (
    <Dialog  open={openRoadmapDialog} onOpenChange={setOpenRoadmapDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='text-center mb-3'>Enter Skill or Position to Generate the Roadmap</DialogTitle>
                <DialogDescription asChild>
                    <div>
                        <Input placeholder='E.g. Artificial Intelligence Engineer' className='border-2 border-black' onChange={(event) => setuserInput(event?.target.value)} />
                    </div>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant={'outline'}>Cancel</Button>
                <Button onClick={GenerateRoadmap} disabled={!userInput || loading}>
                    { loading ? <Loader className='animate-spin'/> : <Sparkles/>}  Generate Roadmap
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default RoadmapGeneratorDialog