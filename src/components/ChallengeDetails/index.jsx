import React from 'react'
import Information from './components/Information'
import ChallengeOverview from './components/Overview'

const ChallengeDetails = ({ details }) => {
  return (
    <div>
        <Information details={details} />
        <ChallengeOverview hackathon={details} />
        <div></div>
    </div>
  )
}

export default ChallengeDetails