import React, { useState } from "react";
import FormField from "./components/FormField";
import Button from "../Button";

const FIELDS = [
  {
    fieldId: "challenge-name",
    fieldLabel: "Challenge Name",
    fieldType: "text",
  },
  {
    fieldId: "start-date-time",
    fieldLabel: "Start Date",
    fieldType: "datetime-local",
  },
  {
    fieldId: "end-date-time",
    fieldLabel: "End Date",
    fieldType: "datetime-local",
  },
  {
    fieldId: "description",
    fieldLabel: "Description",
    fieldType: "textarea",
  },
  {
    fieldId: "image",
    fieldLabel: "Upload file",
    fieldType: "file",
  },
  {
    fieldId: "level",
    fieldLabel: "Level Type",
    fieldType: "select",
  },
];
const ChallengeDetailsForm = ({ onFormSubmit }) => {

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
        />
      ))}
      <Button
        classes="text-white bg-blue-700 hover:bg-blue-800 text-sm"
      >
        Create Challenge
      </Button>
    </form>
  );
};

export default ChallengeDetailsForm;
