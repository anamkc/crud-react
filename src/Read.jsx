import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Read = () => {
    const[data ,setData]= useState([]);
    const{id} = useParams();
    useEffect(() => {
        axios
          .get("  http://localhost:3000/users/" +id) 
          .then((res) => {
            setData(res.data);
            console.log(res.data)
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div className="flex justify-center items-center">
         <div className="flex flex-col  p-4 bg-white shadow-md rounded-md w-[25rem] mt-5 mb-5">
          <h1 className="text-xl text-center text-gray-600 "> User details</h1>
         <div>
            <p className="text-xl text-gray-600">Name : <span className='text-green-400 '>{data.name}</span></p>
         </div>
         <div>
            <p className="text-xl text-gray-600">Email : <span className='text-green-400 '>{data.email}</span> </p>
         </div>
         <div>
            <p className="text-xl text-gray-600">Phone : <span className='text-green-400 '>{data.phone}</span> </p>
         </div>
        </div>
    </div>
  );
}

export default Read;