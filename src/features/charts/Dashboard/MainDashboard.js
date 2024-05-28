import React from 'react';
import LineChart from '../LineChart/LineChart';
import { useState,useEffect,useRef } from 'react';
import {mor} from './index'
const MainDashboard = () => {
    const [omr, soomr] = useState([])
 
    useEffect(() => {
        soomr(mor.map((v, i) => v));
 
    }, [])
   console.log(omr.map((v,i)=>{return v.month}))
    return (
      
      <>
          <div className='pt-44'>
                  <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Monthly Oil change Duration</h2>
          <div className="h-full">
         <LineChart ydata={[195000, 199000, 200000,]} xdata={omr.map((v,i)=>{return v.month})} />
          </div>
        </div>
        <div className="md:col-start-2 lg:col-start-1 card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Chart 2</h2>
          <div className="h-full">
            <LineChart />
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Chart 3</h2>
          <div className="h-full">
            <LineChart />
          </div>
        </div>
        <div className="md:col-start-2 lg:col-start-1 card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Chart 4</h2>
          <div className="h-full">
            <LineChart />
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Chart 5</h2>
          <div className="h-full">
            <LineChart />
          </div>
        </div>
        <div className="md:col-start-2 lg:col-start-1 card w-full bg-base-100 shadow-xl p-4 h-80">
          <h2 className="text-xl font-bold mb-4">Chart 6</h2>
          <div className="h-full">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
          </div>
</>
  );
};

export default MainDashboard;
