import React from 'react'
import ChallengeDetails from '../components/ChallengeDetails/index'
import { useLocation } from 'react-router-dom';

const defaultData = {
    "id": "0.3071462518664867jgiuguig",
    "challenge-name": "Data Science Bootcamp",
    "start-date-time": "2024-10-11T08:23",
    "end-date-time": "2024-11-11T08:23",
    "description": "kihilhi",
    "level": "Easy",
    "image": "/static/media/Group 1000002466.a6d8598ea73d4bf37f9f.png",
    "status": "Upcoming"
}

const HackathonDetailPage = () => {
    const { state } = useLocation();
    const { details } = state || defaultData;
  return (
    <div>
        <ChallengeDetails details={details} />
    </div>
  )
}

export default HackathonDetailPage