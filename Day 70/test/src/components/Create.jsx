import React, { useState } from "react";

const Create = () => {
  const [fullName, setfullName] = useState("");
  const [age, setage] = useState("");
  const changeHandler = (e) => {
    setfullName(e.target.value);
  };
  console.log(fullName);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submit!");
    // console.log(`name: ${fullName} & age: ${age}`);
    const newUser = { fullName, age };
    console.log(newUser);
    // set the user in the setusers
  };
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          value={fullName}
          type="text"
          name=""
          id=""
          placeholder="Full Name"
        />

        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          name=""
          id=""
          placeholder="age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
