import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

export const Update = () => {
    const[updatevalues, setUpdatevalues] = useState({
        name: "",
        email: "",
        phone: ""

    })
    const navigate = useNavigate();
  //  const[editvalues, setEditvalue] = useState([]);
const{id} = useParams();

    useEffect(()=>{
        axios
        .get("  http://localhost:3000/users/" +id) 
        .then((res) => {
            setUpdatevalues (res.data);
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    
    },[])
    function handleUpdate(e){
        e.preventDefault()
        axios.put("http://localhost:3000/users/"+id , updatevalues )
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>
        console.log(err))
    }
  return (
    <>
    <div className="flex justify-center items-center ">
      <div className='flex flex-col  p-4 bg-white shadow-md rounded-md w-[40rem] mt-5 mb-5"'>
        <h1 className="text-xl text-center text-gray-600 ">Update details of student id {id}</h1>
        <div className="flex flex-col p-4">
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col py-4 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md w-full"
               value={updatevalues.name}
               onChange={(e)=> setUpdatevalues({...updatevalues, name:e.target.value})}
              />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md w-full"
                value={updatevalues.email}
                onChange={(e)=> setUpdatevalues({...updatevalues, email:e.target.value})}
              />
            </div>
            <div className="flex flex-col py-4 ">
              <label htmlFor="name">phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md w-full"
                value={updatevalues.phone}
                onChange={(e)=> setUpdatevalues({...updatevalues, phone:e.target.value})}
              />
            </div>
            <div>
              <button type="submit" className="py-2 px-4 bg-blue-400 outline-fuchsia-400 hover:bg-blue-600 rounded-xl">Update</button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Update;