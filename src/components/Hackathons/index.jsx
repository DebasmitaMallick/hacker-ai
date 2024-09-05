import React from 'react'
import { useSelector } from 'react-redux';
import HackathonCard from './components/Card';

const Hackathons = () => {
  const hackathons = useSelector((state) => state.hackathons.hackathons);

  const searchString = useSelector((state) => state.filters.searchString);
  const selectedStatuses = useSelector((state) => state.filters.selectedStatuses);
  const selectedLevels = useSelector((state) => state.filters.selectedLevels);

  const transformHackathons = () => {
    let filteredHackathons = hackathons
    if(searchString) {
      filteredHackathons = filteredHackathons.filter(hackathon => hackathon["challenge-name"].toLowerCase().includes(searchString.toLowerCase()));
    }
    if(selectedStatuses.length > 0) {
      filteredHackathons = filteredHackathons.filter(hackathon => selectedStatuses.includes(hackathon.status))
    }
    if(selectedLevels.length > 0) {
      filteredHackathons = filteredHackathons.filter(hackathon => selectedLevels.includes(hackathon.level))
    }
    return filteredHackathons
  }

  return (
    <div className="grid grid-cols-3 text-center gap-10 justify-items-center px-12 py-20">
        {transformHackathons().map((hackathon) => (
          <HackathonCard key={hackathon.id} data={hackathon} />
        ))}
      </div>
  )
}

export default Hackathons