import React from 'react'
import Information from './components/Information'
import ActionBtns from './components/ActionBtns'
import Overview from './components/Overview'

const ChallengeDetails = ({ details }) => {
  return (
    <div>
        <Information details={details} />
        <ActionBtns hackathon={details} />
        <Overview />
    </div>
  )
}

export default ChallengeDetails