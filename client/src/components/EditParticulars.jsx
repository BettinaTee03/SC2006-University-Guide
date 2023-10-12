import React, { useState } from "react";

export const EditParticulars = () => {
  const [particularsData, setParticulars] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    currentSchool: "",
    age: "",
    matriculationYear: "",
  });

  //onchange handler

  const onChangeHandler = (event) => {
    console.log(event);
    setFormData({
      ...particularsData,
      [event.target.name]: event.target.value,
    });
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Edit Particulars</h1>
    </div>
  );
};

export default EditParticulars;
