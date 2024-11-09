import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const Signup = () => {
    const [errormessage,seterrormessage] =useState('');
    
    const signuphandle = e=>{
        e.preventDefault();
        const  email =(e.target.email.value);
        const password= (e.target.password.value);
        console.log(email,password);

        seterrormessage('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log("there is error",error.message);
            seterrormessage(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-[550px] flex items-center justify-center">
          <div className="text-center w-full max-w-sm">
            {/* Title for the form */}
            <h2 className="text-3xl font-bold mb-4">Sign Up Now</h2>
            
            <div className="card bg-base-100 w-full shadow-2xl">
              <form onSubmit={signuphandle} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                     name='email'
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign-Up</button>
                </div>
              </form>
              {
                errormessage && <p className="text-red-500 font-bold">{errormessage}</p>
              }
            </div>
          </div>
        </div>
      );
      
      
};

export default Signup;
