import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
	return(
		<>	
		 <div className="top-1/2 left-1/2 absolute -ml-36 -mt-9">
			<h2>Make the page as you want</h2>
			<Link to="/about" className="border-solid border-2 rounded-full pl-3 pr-2 bg-amber-200 ml-20 border-amber-400">About Page</Link>
		 </div>
		</>
		)
}

export default Home;