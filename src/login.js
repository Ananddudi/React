import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const LogIn = () =>{
	const [log,setLog] = useState({
		email:'',
		password:''
	})

	let navigate = useNavigate()

	const handlechange = (e) =>{
		setLog({...log,[e.target.name]:e.target.value})
	}
	const handlesubmit = async(e) =>{
		e.preventDefault()
		let data = await fetch('',{
			method:'POST',
			mod:'cors',
			headers:{
            	'Content-Type' : 'application/json',
            	/* 'Authorization' : 'Bearer ' + String(tokenis) */
			},
			body:JSON.stringify({'email':null,'password':null})
		})
		let res = data.json()
		console.log(res)
		navigate('/home')

	}
	return(
		<>
			<article className="absolute top-1/2 left-1/2 -ml-36 -mt-1">
			 	<form onSubmit={handlesubmit}>
			 		<label className="p-7" htmlFor="email">Email</label>
			 		<input type="email" id="email" name="email" value={log.email} onChange={handlechange} /><br/>
			 		<label className="p-7" htmlFor="password">Password</label>
			 		<input type="password" id="password" name="password" value={log.password} onChange={handlechange} /><br/>
			 		<button className="ml-28 mt-5 pl-3 pr-3 border-2 border-solid rounded-full border-red-200 bg-red-200" type="submit">Submit</button>
			 	</form>
			</article>
		</>
		)
}