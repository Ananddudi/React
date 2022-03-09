import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import {useApi} from "./contextapi";

function App() {
  const {apiis} = useApi();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    emails: "",
    phone: "",
  });
  

  console.log(apiis);
  

  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  
  const handlesubmit = async (e) => {
    e.preventDefault();
    let submitting = await fetch("", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        accept: "*",
      },
      body: JSON.stringify({ data: "data" }),
    });
    let response = submitting.json();
    console.log(response);
  };
  

  return (
    <>
      <header>
        <h2>logo</h2>
        <img src="" alt="name" />
        <h3>sign in</h3>
        <h3>sign out</h3>
      </header>
      <section>
        <form onSubmit={handlesubmit}>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={values.firstname}
            onChange={handlechange}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="lastname"
            name="lastname"
            id="lastname"
            value={values.lastname}
            onChange={handlechange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="emails"
            id="email"
            value={values.emails}
            onChange={handlechange}
          />
          <label htmlFor="phoneinpute">Mobile Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={values.phone}
            id="phoneinput"
            onChange={handlechange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handlechange}
          />
          {/* npm install react-phone-number-input --save */}
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
