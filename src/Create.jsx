import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Create = () => {
    const[values, setValues] = useState({
        name: "",
        email: "",
        phone: ""

    })
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:3000/users", values)
          .then((res) => 
            navigate('/')
          )
          .catch((err) => console.log(err));
      }
      
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className='flex flex-col  p-4 bg-white shadow-md rounded-md w-[40rem] mt-5 mb-5"'>
          <h1 className="text-xl text-center text-gray-600 ">Register User</h1>
          <div className="flex flex-col p-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-4 ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  onChange={(e)=> setValues({...values , name:e.target.value})}
                />
              </div>
              <div className="flex flex-col py-4">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  onChange={(e)=> setValues({...values , email:e.target.value})}
                />
              </div>
              <div className="flex flex-col py-4 ">
                <label htmlFor="name">phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  onChange={(e)=> setValues({...values , phone:e.target.value})}
                />
              </div>
              <div>
                <button type="submit" className="py-2 px-4 bg-blue-400 outline-fuchsia-400 hover:bg-blue-600 rounded-xl">Submit</button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Create;
