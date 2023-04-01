import React from 'react';
import Form from "./form";

const EditStudentInfo = ({ data, handleChange, handleSubmit, errors}) => {
  return (
    <div className="mt-5 shadow pt-3">
      <h1>Редактировать</h1>
      <Form data={data} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
    </div>
  );
};

export default EditStudentInfo;
