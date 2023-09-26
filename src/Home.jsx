import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("  http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 
const deleteItem = (id)=> {
    axios.delete("http://localhost:3000/users/"+id)
    .then((res) => {
location.reload();
    })
    .catch(err=> console.log(err))
}
  
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-4/5">
        <h1 className="text-2xl text-green-400 text-center mt-5 ">
          Students Data
        </h1>
        <div className="flex flex-col  p-4 bg-white shadow-md rounded-md w-full h-full mt-5 mb-5">
            <div className="mb-4" >
          <Link to="/Create">  <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl">
                        Add Student
                      </button></Link>
            </div>

          <table className="min-w-full bg-white border">
         
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-100 font-medium text-gray-600 uppercase border-b border-gray-200">
                  id
                </th>
                <th className="py-3 px-4 bg-green-400 font-medium text-gray-600 uppercase border-b border-gray-200">
                  Name
                </th>
                <th className="py-3 px-4 bg-gray-100  font-medium text-gray-600 uppercase border-b border-gray-200">
                  Email
                </th>
                <th className="py-3 px-4 bg-gray-400 font-medium text-gray-600 uppercase border-b border-gray-200">
                  phone
                </th>
                <th className="py-3 px-4 bg-green-400 font-medium text-gray-600 uppercase border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const { id, name, phone, email } = item;
                return (
                  <tr className="text-center mb-4 " key={id}>
                    <td className="py-3    border-b border-gray-200">{id}</td>
                    <td className="py-3  border-b border-gray-200 ">{name}</td>
                    <td className=" py-3   border-b border-gray-200">
                      {email}
                    </td>
                    <td className=" py-3   border-b border-gray-200">
                      {phone}
                    </td>
                    <td className="py-3    border-b border-gray-200 flex justify-evenly">
                        <Link to={`/Read/${id}`}> <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl">
                        Read
                      </button></Link>
                     
                      <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>deleteItem(id)}>
                        Delete
                      </button>
                      
                      
                      <Link to={`/Update/${id}`}>  <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl">
                        Edit
                      </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
