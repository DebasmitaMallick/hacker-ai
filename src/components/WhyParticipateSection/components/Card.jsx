import React from 'react'

const ReasonCard = ({ reason }) => {
  return (
    <div id='reason-card' className='bg-slate-100 rounded-lg w-4/6 h-56 text-left px-10 py-5 justify-center'>
        <img src={reason.icon} alt="reason icon" />
        <h1 className='text-xl font-bold py-3'>{reason.reason}</h1>
        <p className='text-md font-semibold text-slate-500'>{reason.description}</p>
    </div>
  )
}

export default ReasonCard