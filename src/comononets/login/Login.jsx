import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
    const [success,setsuccess] = useState(false);
    const [error,seterror] = useState('');
    const emailRef = useRef()
    const loginHandle = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
       
        setsuccess(false);
        seterror('');

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
          console.log(result.user);
          if(!result.user.emailVerified){
            
                seterror('please varify your email');
          
          }
         else{
            setsuccess(true);
         }
        })
        .catch(error=>{
            console.log("ERROR",error.message);
            seterror(error.message);

        })
    }

    const forgetpasshandle = () =>{
      const emailreference = (emailRef.current.value);

      if (!emailreference){
        alert('please provide a valid email');
      }
      else {
        sendPasswordResetEmail(auth,emailreference)
        .then(()=>{
          alert('please checked your email')
        })
      }
    }
  
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="text-center">
          <h1 className="text-3xl font-bold p-4">Login now!</h1>
         
        </div>
          <form onSubmit={loginHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={forgetpasshandle} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {
            success && <p className="text-green-500 font-bold text-center">Login successfully </p>
          }
          {
            error && <p className="text-red-500 font-bold p-4">{error}</p>
          }
         <div className="p-2 font-bold text-center">
         <p>if you new please <Link to='/signup'><span className="text-green-500 underline">signup</span></Link></p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
