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
    console.log(particularsData); //to check if the data is being captured
  };

  return (
    <div>
      <h1>Edit Particulars</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Username"
          type="text"
          value={particularsData.username}
          onChange={onChangeHandler}
          name="username"
        />
        <input
          placeholder="First name"
          type="text"
          value={particularsData.firstName}
          onChange={onChangeHandler}
          name="firstname"
        />
        <br />

        <input
          placeholder="Last name"
          type="text"
          value={particularsData.lastName}
          onChange={onChangeHandler}
          name="lastname"
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          value={particularsData.email}
          onChange={onChangeHandler}
          name="email"
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={particularsData.password}
          onChange={onChangeHandler}
          name="password"
        />

        <br />
        <input
          placeholder="Gender"
          type="option"
          value={particularsData.gender}
          onChange={onChangeHandler}
          name="gender"
        />

        <br />
        <input
          placeholder="Current School"
          type="option"
          value={particularsData.currentSchool}
          onChange={onChangeHandler}
          name="currentschool"
        />

        <br />
        <input
          placeholder="Age"
          type="number"
          value={particularsData.age}
          onChange={onChangeHandler}
          name="age"
        />

        <br />

        <input
          placeholder="Matriculation Year"
          type="number"
          value={particularsData.matriculationYear}
          onChange={onChangeHandler}
          name="matriculationyear"
        />

        <br />

        <button type="submit">Update Changes</button>
      </form>
    </div>
  );
};

export default EditParticulars;
