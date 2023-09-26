import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home';
import Read from './Read';
import Create from './Create';
import Update from './Update';

import "./App.css";

function App() {
  return (
    <main className=''>
      <div className="w-[100%] text-center flex justify-center items-center">
        <h1 className=" text-2xl	 text-gray-900 font-semibold  tracking-wide text-center">
       
        </h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Update/:id' element={<Update />} />
        <Route path='/Read/:id' element={<Read />} />
      </Routes>
    </main>
  );
}

export default App;
