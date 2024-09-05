import React from 'react'
import Button from "../../Button";
import { Link } from 'react-router-dom';

const ChallengeOverview = () => {
  return (
    <div className='flex justify-between px-10'>
        <button>Overview</button>
        <div className='flex gap-4'>
            <Link to=""><Button classes="bg-green-600 text-white">Edit</Button></Link>
            <Button classes="border-double border-2 border-red-500">Delete</Button>
        </div>
    </div>
  )
}

export default ChallengeOverview