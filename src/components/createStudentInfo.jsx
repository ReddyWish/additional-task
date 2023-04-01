import React from 'react';
import Form from "./form";

const CreateStudentInfo = ({ handleSubmit, handleChange, data, errors }) => {
  console.log(errors);
  return (
    <div className="mt-5 shadow pt-3">
        <h3>Создать</h3>
        <Form data={data} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
    </div>
  );
};


export default CreateStudentInfo;