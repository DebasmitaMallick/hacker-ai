import React from "react";
import img1 from "../../assets/icons/IdentificationCard.svg";
import img2 from "../../assets/icons/carbon_notebook-reference.svg";
import img3 from "../../assets/icons/Robot.svg";
import img4 from "../../assets/icons/Vector.svg";
import ReasonCard from "./components/Card";

const participationReasons = [
  {
    reason: "Prove your skills",
    description: "Gain experience",
    icon: img2,
  },
  {
    reason: "Learn from community",
    description: "Gain experience",
    icon: img4,
  },
  {
    reason: "Challenge yourself",
    description: "Gain experience",
    icon: img3,
  },
  {
    reason: "Earn recognition",
    description: "Gain experience",
    icon: img1,
  },
];
const WhyParticipateSection = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold text-center pb-16">
        Why Participate in{" "}
        <span className="text-green-500">AI Challenges?</span>
      </h1>

      <div className="grid grid-cols-2 gap-8 justify-items-center px-10">
        {participationReasons.map((reasonObj) => (
          <ReasonCard key={reasonObj.reason} reason={reasonObj} />
        ))}
      </div>
    </section>
  );
};

export default WhyParticipateSection;
