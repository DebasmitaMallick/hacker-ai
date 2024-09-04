import React from 'react'
import LandingUI from "../components/LandingUI/index";
import ExploreChallenges from './ExploreChallenges';

const HomePage = () => {
  return (
    <div>
      <LandingUI />
      <section className='py-16'>Why Part...</section>
      <ExploreChallenges />
    </div>
  )
}

export default HomePage