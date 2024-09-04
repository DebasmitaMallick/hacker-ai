import React from 'react'

const StatusBadge = ({status}) => {
    let bgColor = 'bg-green-300'
    let textColor = 'text-slate-600'
    if(status === "Upcoming") {
        bgColor = 'bg-orange-100'
    } 
    else if(status === "Past") {
        bgColor = 'bg-orange-200'
    } 
    else {
        textColor = 'text-green-800'
    }
  return (
    <p className={`min-w-24 text-center px-3 py-[2px] my-4 w-fit rounded-md text-sm m-auto font-semibold pb-1 ${bgColor} ${textColor}`}>{status}</p>
  )
}

export default StatusBadge