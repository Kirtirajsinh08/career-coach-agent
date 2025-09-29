import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faThumbsUp, faThumbsDown, faLightbulb, faGraduationCap, faBriefcase, faUserCircle, faStar, faArrowUp, faArrowRight, faArrowDown, faWrench } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import ResumeUploadDialog from '@/app/(routes)/dashboard/_components/ResumeUploadDialog';

const Report = ( {aiReport}: any ) => {

  const [openResumeUpload, setOpenResumeDialog] = useState(false);
  let feedbackMessage = "";
  let oneWordFeedback = "";

  let reportColor = "text-yellow-600";
  let skillColor = "text-yellow-600";
  let contactColor = "text-yellow-600";
  let experienceColor = "text-yellow-600";
  let educationColor = "text-yellow-600";

  let statusIcon = faArrowRight;
  const overallScore = aiReport?.overall_score ?? 0;
  const skillsFeedback = aiReport?.sections?.skills?.score;
  const contactFeedback = aiReport?.sections?.contact_info?.score;
  const experienceFeedback = aiReport?.sections?.experience?.score;
  const educationFeedback = aiReport?.sections?.education?.score;
  const tipsForImprovement = aiReport?.tips_for_improvement ?? [];
  const whatsGood = aiReport?.whats_good ?? [];
  const needsImprovement = aiReport?.needs_improvement ?? [];


  if (overallScore>75) {
    feedbackMessage = "Your resume is strong, but there are areas to improve. 🚀";
    oneWordFeedback = "Excllent🌟🚀";
    reportColor = "text-green-600";
    statusIcon = faArrowUp;
  } else if (overallScore>50) {
    feedbackMessage = "Your resume shows potential but needs focused improvements to stand out. 💡";
    oneWordFeedback = "Good👍💡";
    reportColor = "text-yellow-600";
    statusIcon = faArrowRight;
  } else {
    feedbackMessage = "Your resume needs significant revisions to meet industry standards. 📄";
    oneWordFeedback = "Needs Work⚠️📄";
    reportColor = "text-red-600";
    statusIcon = faArrowDown;
  }

  let progressColor = 'bg-red-500';
  if (overallScore > 75) {
    progressColor = 'bg-green-500';
  } else if (overallScore > 50) {
    progressColor = 'bg-yellow-500';
  }

  if(skillsFeedback>75){
    skillColor="text-green-600"
  } else if(skillsFeedback > 50){
    skillColor="text-yellow-600"
  } else{
    skillColor="text-red-600"
  }

  if(contactFeedback>75){
    contactColor="text-green-600"
  } else if(contactFeedback > 50){
    contactColor="text-yellow-600"
  } else{
    contactColor="text-red-600"
  }

  if(experienceFeedback>75){
    experienceColor="text-green-600"
  } else if(experienceFeedback > 50){
    experienceColor="text-yellow-600"
  } else{
    experienceColor="text-red-600"
  }

  if(contactFeedback>75){
    contactColor="text-green-600"
  } else if(contactFeedback > 50){
    contactColor="text-yellow-600"
  } else{
    contactColor="text-red-600"
  }

  if(educationFeedback>75){
    educationColor="text-green-600"
  } else if(educationFeedback>50){
    educationColor="text-yellow-600"
  } else{
    educationColor="text-red-600"
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 gradient-component-text">AI Analysis Results</h2>
        <Button className='bg-blue-700' onClick={ ()=>setOpenResumeDialog(true) }> <Sparkles/> Upload & Analyse</Button>
      </div>

      <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] rounded-lg shadow-md p-6 mb-6 border border-blue-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" /> Overall Score
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-6xl font-extrabold ${reportColor}`}>
            {aiReport?.overall_score}<span className="text-2xl text-gray-200">/100</span>
          </span>
          <div className="flex items-center">
            <FontAwesomeIcon icon={statusIcon} className={`${reportColor} text-lg`} />
            <span className={`${reportColor} text-lg font-bold`}>{oneWordFeedback}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className={`${progressColor} h-2.5 rounded-full`} style={{ width: `${overallScore}%` }}></div>
        </div>
        <p className="text-gray-100 text-sm">
          {feedbackMessage}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-r from-[#3B0D0C] via-[#1E1B4B] to-[#0F172A] rounded-lg shadow-md p-5 border border-blue-200 relative overflow-hidden group transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h4 className="text-lg font-semibold text-white mb-3">
              <FontAwesomeIcon icon={faUserCircle} className="text-white" /> Contact Info
          </h4>
          <span className={`text-4xl font-bold ${contactColor}`}> {aiReport?.sections?.contact_info?.score}% </span>
          <p className="text-sm text-white mt-2">{aiReport?.sections?.contact_info?.comment}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-gradient-to-r from-[#3B0D0C] via-[#1E1B4B] to-[#0F172A] rounded-lg shadow-md p-5 border border-blue-200 relative overflow-hidden group transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h4 className="text-lg font-semibold text-white mb-3">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" /> Experience 
          </h4>
          <span className={`text-4xl font-bold ${experienceColor}`}> {aiReport?.sections?.experience?.score}% </span>
          <p className="text-sm text-white mt-2">{aiReport?.sections?.experience?.comment}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-gradient-to-r from-[#3B0D0C] via-[#1E1B4B] to-[#0F172A] rounded-lg shadow-md p-5 border-2 border-blue-200 relative overflow-hidden group transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h4 className="text-lg font-semibold text-white mb-3">
            <FontAwesomeIcon icon={faGraduationCap} className="text-white" /> Education 
          </h4>
          <span className={`text-4xl font-bold ${educationColor}`}> {aiReport?.sections?.education?.score}% </span>
          <p className="text-sm text-white mt-2">{aiReport?.sections?.education?.comment}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-gradient-to-r from-[#3B0D0C] via-[#1E1B4B] to-[#0F172A] rounded-lg shadow-md p-5 border-2 border-blue-200 relative overflow-hidden group transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h4 className="text-lg font-semibold text-white mb-3">
            <FontAwesomeIcon icon={faWrench} className="text-white" /> Skills 
          </h4>
          <span className={`text-4xl font-bold ${skillColor}`}> {aiReport?.sections?.skills?.score}% </span>
          <p className="text-sm text-white mt-2">{aiReport?.sections?.skills?.comment}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1a1c40] via-[#212a5a] to-[#2d3a80] rounded-lg shadow-md p-6 mb-6 border border-gray-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400" /> 
          Tips for Improvement
        </h3>
        <ol className="list-none space-y-4">
          {tipsForImprovement.map((tipsForImprovement: any, index: any) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <div>
                <p className="text-gray-100 text-sm">{tipsForImprovement}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* What's Good Section */}
        <div className="bg-gradient-to-r from-[#0B0F12] via-[#1A202C] to-[#133B4A] rounded-lg shadow-md p-5 border border-green-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h3 className="text-md font-bold text-gray-100 mb-3 flex items-center">
            <FontAwesomeIcon icon={faThumbsUp} className="text-green-500 mr-1" /> What's Good
          </h3>
          <ul className="list-disc list-inside text-gray-100 text-sm space-y-2">
            {whatsGood.map((whatsGood: any, index: any) => (
              <li key={index}>{whatsGood}</li>
            ))}
          </ul>
        </div>

        {/* Needs Improvement Section */}
        <div className="bg-gradient-to-r from-[#0B0F12] via-[#1A202C] to-[#133B4A] rounded-lg shadow-md p-5 border border-red-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h3 className="text-md font-bold text-gray-100 mb-3 flex items-center">
            <FontAwesomeIcon icon={faThumbsDown} className="text-red-500 mr-1" /> Needs Improvement
          </h3>
          <ul className="list-disc list-inside text-gray-100 text-sm space-y-2">
            {needsImprovement.map((needsImprovement: any, index: any) => (
              <li key={index}>{needsImprovement}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 mb-6 text-center gradient-button-bg">
        <h3 className="text-xl font-bold mb-3">Ready to refine your resume? 🚀</h3>
        <p className="text-base mb-4">
          Make your application stand out with our premium insights and features.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Upgrade to Premium <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-blue-600" />
        </button>
      </div>

      <ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeDialog={ ()=>setOpenResumeDialog(false)}/>
    </div>
  )}

export default Report