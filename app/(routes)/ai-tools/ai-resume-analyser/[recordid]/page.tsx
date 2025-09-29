"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Report from "./_components/Report";

const AIResumeAnalyser = () => {
  const { recordid } = useParams();
  const [pdfUrl, setPdfUrl] = useState();
  const [aiReport, setAiReport] = useState();

  useEffect(() => {
    if (recordid) {
      GetResumeAnalyserReport();
    }
  }, [recordid]);

  const GetResumeAnalyserReport = async () => {
    const result = await axios.get('/api/history?recordId='+recordid)
    console.log(result.data?.metaData)
    setPdfUrl(result.data?.metaData)
    setAiReport(result.data?.content)
    console.log(result.data?.content)
  };

  return (
    <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 h-[83vh]">
      <div className="col-span-2">
        <Report aiReport={aiReport}/>  
      </div>
      <div className="sol-span-3">
        <h2 className="text-2xl font-extrabold text-gray-800 gradient-component-text mb-3">Resume Preview</h2> 
        <iframe src={pdfUrl + '#toolbar=0&navpanes&scrollbar=0'} width={810} height={1125} className="min-w-lg" style={{ border:'none' }}/>
      </div>
    </div>
  );
};

export default AIResumeAnalyser;
