import React from 'react'
import ChallengeDetailsForm from '../components/ChallengeDetailsForm'
import { hackathonActions } from '../store/hackathons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateChallenge = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getHackathonStatus = (startDateTime, endDateTime) => {
      // 2024-09-11T08:23
      const start = new Date(startDateTime);
      const end = new Date(endDateTime);
      const today = new Date();
      
      if(today < start) {
        return "Upcoming"
      } else if(today >= start && today <= end) {
        return "Active"
      } else {
        return "Past"
      }
    }

    const handleCreateChallenge = (formData) => {
        const challengeData = {
            id: Math.random()+formData["challenge-name"],
            status: getHackathonStatus(formData["start-date-time"], formData["end-date-time"]),
            ...formData
        }
        dispatch(hackathonActions.addItem(challengeData))
        navigate("/")
    }
  return (
    <ChallengeDetailsForm onFormSubmit={handleCreateChallenge} />
  )
}

export default CreateChallenge