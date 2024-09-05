import React from 'react'
import LandingUI from "../components/LandingUI/index";
import ExploreChallenges from './ExploreChallenges';
import WhyParticipateSection from '../components/WhyParticipateSection';

const HomePage = () => {
  return (
    <div>
      <LandingUI />
      <WhyParticipateSection />
      <ExploreChallenges />
    </div>
  )
}

export default HomePage