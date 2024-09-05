import React from "react";
import icon from "../../assets/icons/PicsArt_04-14-04.42 1.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Footer from "./components/Footer";

const LandingUI = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue">
        <div className="flex w-3/4 m-auto py-16 text-left">
          <div className="text-white flex-1">
            <h1 className="text-5xl font-semibold border-l-8 border-yellow-400 pl-8">
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p className="text-lg font-semibold py-8 pl-10">
              Al Challenges at DPhi simulate real-world problems. It is a great
              place to put your Al/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <Button
              classes="text-blue bg-white hover:bg-slate-300 text-lg ml-10"
              onClick={() => navigate("challengeForm")}
            >
              Create Challenge
            </Button>
          </div>
          <div className="w-2/5">
            <img src={icon} alt="icon" className="m-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingUI;
