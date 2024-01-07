import React, { useState } from 'react'
import Map from './Map'
import Avaiable from './Available';
export default function Card() {
    const [ state,setstate] = useState(0);
    const handleStateChange = (newState) => {
        setstate(newState >= 0 ? newState : 0);
      };
      
  return (
    <div>
        <div id='totalcontent'>

      { state === 0 ? ( <div id='content' className=' z-1 bg-white w-[38%] absolute flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
              <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 my-[3.2px] ">
                  <path sstrokeLinecap="round" trokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <h1 className=' w-auto flex ml-3 font-bold text-[#6b6b6b]'> Coffee? <p className='px-2 my-0.5  text-sm opacity-40'>· Mail from Marisa Lu</p> </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>

              </div>
                <div className=' text-left px-11 pt-7'>
                  <h1 className=' text-xl py-3'>Marisa Lu</h1>
                  <h1 className=' font-bold text-2xl pb-1'>Coffee?</h1>
                  <p className=' py-3'>Hey Jason,</p>
                  <p >Hey  wondering if you would like to go out sometime? i know this is the wrong time to ask but its never late, i hope you revert me back, looking forward to seeing you, thanks!</p>
                  <p className=' py-6'>Marisa</p>
                  <hr></hr>
                  <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                    <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Reply</button>
                    <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl'>Forward</button>
                    <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Delete</button>

                  </div>

                  <p className=' cursor-pointer flex py-3 pb-5 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                    <path sstrokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                    More actions
                  </p>
                </div>
                
          </div>): state===1 ?(<Avaiable/>):state===2 ? (<Map/>):(<Map/>)}
         
<button className=' opacity-15 cursor-pointer text-4xl top-[48%] left-[30%] absolute w-8 h-8' onClick={()=>handleStateChange(state-1)}>{'<'}</button>
<button className=' opacity-15 cursor-pointer text-4xl top-[48%] left-[72.5%] absolute w-8 h-8' onClick={()=>handleStateChange(state+1)}>{'>'}</button>
</div>
    </div>
  )
}
