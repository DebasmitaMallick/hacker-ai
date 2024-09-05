import React from 'react'
import { useSelector } from 'react-redux';
import HackathonCard from './components/Card';

const Hackathons = () => {
  const hackathons = useSelector((state) => state.hackathons.hackathons);

  const searchString = useSelector((state) => state.filters.searchString);
  const selectedStatuses = useSelector((state) => state.filters.selectedStatuses);
  const selectedLevels = useSelector((state) => state.filters.selectedLevels);
  const sortOrder = useSelector((state) => state.filters.sortOrder);

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
    if(sortOrder) {
      if(sortOrder === "newToOld") {
        // sort by desc order of date
        filteredHackathons = [...filteredHackathons].sort((a, b) => new Date(b["start-date-time"]) - new Date(a["start-date-time"]))
      }
      else {
        // sort by asc order of date
        filteredHackathons = [...filteredHackathons].sort((a, b) => new Date(a["start-date-time"]) - new Date(b["start-date-time"]))
      }
    }
    return filteredHackathons
  }

  return (
    <div className="grid grid-cols-3 text-center gap-10 justify-items-center px-12 py-20 bg-blue">
        {transformHackathons().map((hackathon) => (
          <HackathonCard key={hackathon.id} data={hackathon} />
        ))}
      </div>
  )
}

export default Hackathons