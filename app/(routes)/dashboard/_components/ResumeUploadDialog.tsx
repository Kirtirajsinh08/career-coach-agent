"use client";

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { File, Loader, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

    const ResumeUploadDialog = ({ openResumeUpload, setOpenResumeUpload }:any) => {

        const [file, setFile] = useState<any>();
        const [loading, setLoading] = useState(false);
        const router = useRouter();

        const onFileChange = (event: any) => {
            const file = event.target.files?.[0];
            if(file){
                console.log(file.name);
                setFile(file);
            }
        }

        const onUploadAndAnalyse = async() => {
            setLoading(true);
            const recordId = uuidv4();
            const formData = new FormData();
            formData.append('recordId', recordId);
            formData.append('resumeFile', file);
            // formData.append('aiAgentType', '/ai-tools/ai-resume-analyser')

            const result = await axios.post('/api/ai-resume-agent', formData)
            console.log(result.data)
            setLoading(false);
            router.push('/ai-tools/ai-resume-analyser/'+recordId);
            setOpenResumeDialog(false)
        }

  return (
    <Dialog open={openResumeUpload} onOpenChange={setOpenResumeUpload}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='text-center'>Upload Your Resume PDF</DialogTitle>
                <DialogDescription>
                    <label htmlFor="resumeUpload" className='flex items-center flex-col justify-center p-7 border border-dashed border-black rounded-xl hover:bg-slate-100 cursor-pointer'>
                        <File className='h-10 w-10'/>
                        {file ?
                        <h2 className='mt-3 text-blue-600'>{file?.name}</h2> :
                        <h2 className='mt-3'>Click Here To Upload PDF</h2>}
                    </label>
                    <input type="file" name="" id="resumeUpload" className='hidden' accept='application/pdf' onChange={ onFileChange } />
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant={ 'outline' }>Cancel</Button>
                <Button onClick={ onUploadAndAnalyse } disabled={ !file || loading }> {loading ? <Loader className='animate-spin'/> : <Sparkles/>} Upload & Analyse</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ResumeUploadDialog

function setOpenResumeDialog(arg0: boolean) {
    throw new Error('Function not implemented.');
}
