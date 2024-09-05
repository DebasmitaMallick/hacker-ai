import React, { useEffect, useState } from "react";
import FormField from "./components/FormField";
import Button from "../Button";

const ChallengeDetailsForm = ({ onFormSubmit, hackathonData }) => {
  const FIELDS = [
    {
      fieldId: "challenge-name",
      fieldLabel: "Challenge Name",
      fieldType: "text",
      val: hackathonData ? hackathonData["challenge-name"] : "",
    },
    {
      fieldId: "start-date-time",
      fieldLabel: "Start Date",
      fieldType: "datetime-local",
      val: hackathonData ? hackathonData["start-date-time"] : "",
    },
    {
      fieldId: "end-date-time",
      fieldLabel: "End Date",
      fieldType: "datetime-local",
      val: hackathonData ? hackathonData["end-date-time"] : "",
    },
    {
      fieldId: "description",
      fieldLabel: "Description",
      fieldType: "textarea",
      val: hackathonData ? hackathonData["description"] : "",
    },
    {
      fieldId: "image",
      fieldLabel: "Upload file",
      fieldType: "file",
      // val: hackathonData ? hackathonData["image"] : ""
    },
    {
      fieldId: "level",
      fieldLabel: "Level Type",
      fieldType: "select",
      val: hackathonData ? hackathonData["level"] : "",
    },
  ];

  const [formData, setFormData] = useState({
    "challenge-name": hackathonData ? hackathonData["challenge-name"] : "",
    "start-date-time": hackathonData ? hackathonData["start-date-time"] : "",
    "end-date-time": hackathonData ? hackathonData["end-date-time"] : "",
    description: hackathonData ? hackathonData["description"] : "",
    // image: hackathonData ? hackathonData["image"] : "",
    level: hackathonData ? hackathonData["level"] : "",
  });

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    if (hackathonData && hackathonData.image) {
      setImageData(hackathonData.image);
    }
  }, [hackathonData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());
    // data.image = imageData;
    onFormSubmit({ ...formData, image: imageData });
  };
  return (
    <>
      <div className="font-semibold text-xl py-6 px-8 bg-sky-50">
        Challenge Details
      </div>
      <form className="max-w-lg pl-20 py-6" onSubmit={handleSubmit}>
        {FIELDS.map((fieldObj) => (
          <FormField
            key={fieldObj.fieldId}
            fieldId={fieldObj.fieldId}
            fieldLabel={fieldObj.fieldLabel}
            fieldType={fieldObj.fieldType}
            onImageUpload={handleImageUpload}
            imageData={imageData}
            val={formData[fieldObj.fieldId]}
            onChange={handleChange}
          />
        ))}
        <Button classes="text-white bg-green-600 hover:bg-blue-800 text-sm">
          {hackathonData ? "Save changes" : "Create Challenge"}
        </Button>
      </form>
    </>
  );
};

export default ChallengeDetailsForm;
