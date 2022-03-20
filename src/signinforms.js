import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export const SignIn = () =>{

  const [values, setValues] = useState({
	    firstname: "",
	    lastname: "",
	    emails: "",
      password:""
	  });
  const [phone,setPhone] = useState("")
	  
  

  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    let submitting = await fetch("", {
      method: "POST", //*GET, POST, PUT, DELETE, etc.
      mode: "cors", //no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "content-type": "application/json",
        accept: "*",
	// 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error,
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: "data" }),
    });
    let response = submitting.json();
    console.log(response);
  };
  

	return (
		<div className="absolute top-1/2 left-1/2 -ml-48 -mt-14">
		<form onSubmit={handlesubmit}>
          <label className="p-7" htmlFor="firstname">First name</label>
          <input 
            type="text"
            name="firstname"
            id="firstname"
            value={values.firstname}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="lastname">Last Name</label>
          <input
            type="lastname"
            name="lastname"
            id="lastname"
            value={values.lastname}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="email">Email</label>
          <input
            type="email"
            name="emails"
            id="email"
            value={values.emails}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handlechange}
          /><br/>
           <label className="p-7" htmlFor="mobile">Mobile Number</label>
          <PhoneInput
            className="pl-7"
            country={'us'}
            placeholder="Enter phone number"
            value={phone}
            id="mobile"
            name="mobile"
            onChange={(phone)=>setPhone(phone)}
          />
          {/* npm install react-phone-number-input --save */}
          <button className="m-3 ml-36 bg-red-200 pl-3 pr-3 border-2 rounded-full border-solid border-amber-400" type="submit">Submit</button>
        </form>
		</div>
		);
}
