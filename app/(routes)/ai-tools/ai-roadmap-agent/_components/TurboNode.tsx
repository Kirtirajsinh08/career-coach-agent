import { Handle, Position } from '@xyflow/react'
import Link from 'next/link'
import React from 'react'

const TurboNode = ({data}:any) => {
  return (
    <div className='rounded-lg border border-gray-400 bg-yellow-100 shadow-md w-64'>
        <div className='font-bold text-lg text-gray-800 text-center'>{data?.title}</div>
        <p className='text-md text-gray-700 mt-1 line-clam-2'>{data?.description}</p>
        <div className='flex flex-col'>
          <Link href={data?.link} target='_blank' className='text-blue-600 underline mt-1 mb-1 text-center inline-block'>
            Learning Material
          </Link>
        </div>
        <Handle type='target' position={Position.Top} />
        <Handle type='source' position={Position.Bottom} />
    </div>
  )
}

export default TurboNode