import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
export default function Feedback() {
    const [value, setValue] = useState(4);
    return (
        <div>
            <div id='totalcontent'>
                <div id='content' className=' z-1 bg-white w-[38%] absolute flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
                    <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-0.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>



                        <h1 className=' w-auto  ml-3 font-bold text-[#6b6b6b] flex'> Feedback<p className='px-2 text-sm my-0.5  opacity-40'>· Mail from Lindsey Weiss</p></h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>

                    </div>
                    <div className=' text-left px-11 pt-7'>

                        <h1 className=' font-bold text-2xl py-2'>Feedback</h1>
                        <p>Exceptional work! The team's dedication and attention to detail truly made a positive impact on our project. Highly impressed with the quality and timely delivery.</p>
                        <Box>
                            <Rating
                                
                                className='my-3'
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                
                            />
                            
                        </Box>
                        <hr className=' mt-3'></hr>
                        <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Send</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl'>Share</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Delete</button>

                        </div>

                        <p className=' cursor-pointer flex py-2 mb-2 pb-11 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                            <path sstrokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                            More actions
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
