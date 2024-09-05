import React from "react";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hackathonActions } from "../../../store/hackathons";

const ActionBtns = ({ hackathon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    if(window.confirm("Are you sure?") === true) {
      dispatch(hackathonActions.deleteHackathon(hackathon.id));
      navigate("/");
    }
  };

  return (
    <div className="flex justify-between px-16 py-4 shadow-xl">
      <button className="border-b-[3px] border-green-600 font-bold text-lg">Overview</button>
      <div className="flex gap-4">
        <Link to="/challengeForm" state={{ data: hackathon }}>
          <Button classes="bg-green-600 text-white border-2 border-green-600 text-sm">Edit</Button>
        </Link>
        <Button
          classes="border-double border-2 border-red-500 text-sm text-red-500"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ActionBtns;
