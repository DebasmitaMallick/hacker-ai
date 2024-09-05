import React from "react";
import { FileUpload } from "primereact/fileupload";

const FormField = ({
  fieldLabel,
  fieldId,
  fieldType,
  onImageUpload,
  imageData,
  val,
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={fieldId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {fieldLabel}
      </label>
      {fieldType === "textarea" ? (
        <textarea
          name={fieldId}
          value={val}
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      ) : fieldType === "file" ? (
        <>
          <FileUpload
            className="bg-slate-300 rounded-md p-3 "
            mode="basic"
            name="demo[]"
            accept="image/*"
            maxFileSize={1000000}
            auto
            chooseLabel="Upload"
            uploadHandler={onImageUpload}
            customUpload
            uploadLabel="Upload"
            value={val}
            itemTemplate={(file) => (
              <div>
                <img src={file.url} alt={file.name} />
                <span>{file.name}</span>
              </div>
            )}
          />
          {imageData && (
            <img
              src={imageData}
              alt="Uploaded"
              style={{ marginTop: "10px", maxWidth: "100%" }}
            />
          )}
        </>
      ) : fieldType === "select" ? (
        <select
          name={fieldId}
          value={val}
          id={fieldId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Easy</option>
          <option>Hard</option>
          <option>Medium</option>
        </select>
      ) : (
        <input
          name={fieldId}
          value={val}
          type={fieldType}
          id={fieldId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      )}
    </div>
  );
};

export default FormField;
