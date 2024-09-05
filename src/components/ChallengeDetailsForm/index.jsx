import React, { useState } from "react";
import FormField from "./components/FormField";
import Button from "../Button";

const ChallengeDetailsForm = ({ onFormSubmit, hackathonData }) => {

  const FIELDS = [
    {
      fieldId: "challenge-name",
      fieldLabel: "Challenge Name",
      fieldType: "text",
      val: hackathonData ? hackathonData["challenge-name"] : ""
    },
    {
      fieldId: "start-date-time",
      fieldLabel: "Start Date",
      fieldType: "datetime-local",
      val: hackathonData ? hackathonData["start-date-time"] : ""
    },
    {
      fieldId: "end-date-time",
      fieldLabel: "End Date",
      fieldType: "datetime-local",
      val: hackathonData ? hackathonData["end-date-time"] : ""
    },
    {
      fieldId: "description",
      fieldLabel: "Description",
      fieldType: "textarea",
      val: hackathonData ? hackathonData["description"] : ""
    },
    {
      fieldId: "image",
      fieldLabel: "Upload file",
      fieldType: "file",
      val: hackathonData ? hackathonData["image"] : ""
    },
    {
      fieldId: "level",
      fieldLabel: "Level Type",
      fieldType: "select",
      val: hackathonData ? hackathonData["level"] : ""
    },
  ];

  const [imageData, setImageData] = useState(null);

  const handleImageUpload = async (event) => {
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;
      setImageData(base64data);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.image = imageData;
    onFormSubmit(data);
    console.log(data);
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      {FIELDS.map((fieldObj) => (
        <FormField
          key={fieldObj.fieldId}
          fieldId={fieldObj.fieldId}
          fieldLabel={fieldObj.fieldLabel}
          fieldType={fieldObj.fieldType}
          onImageUpload={handleImageUpload}
          imageData={imageData}
          val={fieldObj.val}
        />
      ))}
      <Button
        classes="text-white bg-green-600 hover:bg-blue-800 text-sm"
      >
        {
          hackathonData ? 'Save changes' : 'Create Challenge'
        }
      </Button>
    </form>
  );
};

export default ChallengeDetailsForm;
