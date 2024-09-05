import React from 'react'

const ReasonCard = ({ reason }) => {
  return (
    <div id='reason-card' className='bg-slate-100 rounded-lg w-96 h-40 text-left px-6 py-5 justify-center'>
        <img src={reason.icon} alt="reason icon" />
        <h1 className='text-xl font-bold'>{reason.reason}</h1>
        <p className='text-sm text-slate-500'>{reason.description}</p>
    </div>
  )
}

export default ReasonCard