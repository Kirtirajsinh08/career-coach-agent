import React from 'react'

const questionList = [
    'What skills do I require to become a Data Analyst expert ?',
    'How do I switch career to a Data Scientist ?'
]

const EmptyState = ({selectedQuestion} : any) => {
  return (
    <div>
        <h2 className='text-center font-bold text-xl'>Ask Anything To AI Career Agent</h2>

        <div>
            {questionList.map((question, index) => (
                <h2 className='p-4 text-center border-2 rounded-lg my-3 hover:border-primary cursor-pointer' key={index} onClick={ () => selectedQuestion(question)} >
                    {question}
                </h2>
            ))}
        </div>
    </div>
  )
}

export default EmptyState