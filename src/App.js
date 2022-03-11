import React, { useState } from "react";
import {useApi} from "./contextapi";
import {SignIn} from "./signinforms";
import {LogIn} from './login';
import logo from './logo.png'


function App() {
  const [log_in,setLog_in] = useState(false)
  const {apiis} = useApi();

  return (
    <>
      <header className="w-screen h-28 bg-yellow-200 text-rose-600">
        <img src={logo} className="float-left w-28 pl-3 pt-1 rounded" alt="name" />
        <h2 className="float-left text-xl pl-3 pt-9">Company names</h2>
        <div className="pt-20"><h5 className="animate">Welcome to the our site</h5></div>
        { 
          !log_in ? <><button className="float-right -mt-14 mr-8" onClick={() => setLog_in(false)}>Sign In</button>
           <button className="float-right -mt-14 mr-24" onClick={() => setLog_in(true)}>Log In</button></> 
           : <button className="float-right -mt-14 mr-8 z-10" onClick={() => setLog_in(false)}>Sign In</button>
        }
      </header>
      <section>
        {log_in ? <LogIn/> : <SignIn/>}
      </section>
    </>
  );
}

export default App;
