import React from "react";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hackathonActions } from "../../../store/hackathons";

const ChallengeOverview = ({ hackathon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(hackathonActions.deleteHackathon(hackathon.id));
    navigate("/");
  };

  return (
    <div className="flex justify-between px-10">
      <button>Overview</button>
      <div className="flex gap-4">
        <Link to="/challengeForm" state={{ data: hackathon }}>
          <Button classes="bg-green-600 text-white">Edit</Button>
        </Link>
        <Button
          classes="border-double border-2 border-red-500"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ChallengeOverview;
