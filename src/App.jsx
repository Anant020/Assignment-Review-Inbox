import mail from '../images/mail.png'
import Card from "./Card"
import Feedback from './Feedback'
import img1 from '../images/Capture.jpg'
import Postgrad from './Postgrad'
import Example from './Example'
import './App.css'
import { useState, useEffect } from 'react'
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 my-[3.2px] mx-3">
    <path sstrokeLinecap="round" trokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const MeetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-[3.2px] mx-3">
    <path sstrokeLinecap="round" trokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>

);
const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-[3.2px] mx-3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>


);
function App() {
  const [selectedTask, setSelectedTask] = useState(1);

  const currentDate = new Date();

  // Get hours and minutes
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  // Format the time
  const formattedHours = String(currentHours).padStart(2, '0');
  const formattedMinutes = String(currentMinutes).padStart(2, '0');
  const formattedTime = `${formattedHours - 12}:${formattedMinutes}`;

  const tasks = [
    { title: "New Flow", name: "", imsvg: <AddIcon />, component: <Card /> },
    { title: "Coffee?", name: "Marisa Lu", imsvg: <MailIcon />, component: <Card /> },
    { title: "Feedback", name: "Lindsey Weiss", imsvg: <MailIcon />, component: <Feedback /> },
    { title: "Post-grad-plans", name: "Evylin Ma", imsvg: <MailIcon />, component: <Postgrad /> },
    { title: "Launch plan", name: "Dennis Jin", imsvg: <MailIcon />, component: <Example /> },
    { title: "Victoria Wang", name: "", imsvg: <MeetIcon />, component: <Example /> },
    { title: "Advait Kalakkad", name: "", imsvg: <MeetIcon />, component: <Example /> },

  ]
  const handleTaskClick = (index) => {
    setSelectedTask(index);
  };
  return (
    <>
      <div className=''>

        {/* <div className='flex text-gray-600/50 text-xl  absolute left-[94%] top-4'><h1>{formattedTime}</h1></div> */}
        <h1 className=" text-[#c0c2c8] ml-14 tracking-wide text-6xl font-normal font-sans  m-9">Review Inbox</h1>
      <div className=' w-[30%] z-10'>
            {tasks.map((task, index) => (

              <div key={index} onClick={() => handleTaskClick(index)} className=' z-10 flex mx-10 my-2 font-semibold cursor-pointer opacity-80 text-[#6b6b6b] hover:bg-[#6b6b6b]/20 hover:text-[#262626] rounded-2xl'>
                <div className=" flex flex-row p-4   align-middle  rounded-2xl justify-center" >
                  {task.imsvg}

                  <h1 className=' w-72 flex '>{task.title} <p className='px-2 text-s  opacity-40'>· {task.name}</p></h1>
                </div>

              </div>
              ))}
      </div>
        

        {/* {selectedTask !== null && tasks[selectedTask].component} */}
        <div className=" absolute flex justify-center items-center flex-col top-[10cm] container  -z-0">
          <input type="radio" name="slider" className="hidden" id="s1" defaultChecked />
          <input type="radio" name="slider" className="hidden" id="s2" />
          <input type="radio" name="slider" className="hidden" id="s3" />
          {/* <input type="radio" name="slider" className="hidden" id="s4" />
          <input type="radio" name="slider" className="hidden" id="s5" /> */}

          <div className=" absolute h-[500px] w-[100%] mb-7 cards">
            {/* Your label content here */}
            <label htmlFor="s1" id="slide1" className="transform-none absolute w-full cursor-pointer transition-transform duration-[0.55s] ease-[ease] m-auto inset-x-0">
              <div id='content' className=' z-1 bg-white w-[38%] absolute flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
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

              </div>
            </label>
            <label htmlFor="s2" id="slide2" className="transform-translate-x-1/3 absolute w-full cursor-pointer transition-transform duration-[0.55s] ease-[ease] m-auto inset-x-0">
            <div id='content' className='overflow-hidden z-1 bg-white w-[38%] absolute flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
                    <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                       
                        <h1 className='  font-bold text-[#6b6b6b] flex'> See my availability : today</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>

                    </div>
                    <div className=' text-left w-[100%] px-8 pt-7'>
                        <h1 className=' font-bold text-2xl py-2'>Available until 1 PM</h1>
                        <p className='w-[50%]'>Would you like to create an event for coffee with Marisa at 11 AM?</p>
                        <div className='flex '>
                            <img src={img1} className='  my-4 rounded-2xl w-[100%] h-[20%]'></img>
                        </div>

                        <hr className=' relative mt-3 w-[100%]'></hr>
                        <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl '>Create Event</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl'>Edit Event</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl '>Full Calendar</button>
                            <button className='   p-2.5 px-8 rounded-2xl '>Dismiss</button>

                        </div>

                        <p className=' cursor-pointer flex py-2 mb-2 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                            <path strokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                            More actions
                        </p>
                    </div>

                </div>
            </label>
            <label htmlFor="s3" id="slide3" className="transform-translate-x-2/3 absolute w-full cursor-pointer transition-transform duration-[0.55s] ease-[ease] m-auto inset-x-0">
            <div id='content' className='overflow-hidden z-1 bg-white w-[38%] absolute flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
                    <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>


                        <h1 className=' w-auto  ml-3 font-bold text-[#6b6b6b] flex'> Starbucks<p className='px-2 text-sm my-0.5  opacity-40'>· Location</p></h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>

                    </div>
                    <div className=' text-left w-[100%] px-8 pt-7'>
                        <iframe
                            className=' w-[100%] relative flex rounded-2xl  h-[40%]'
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29436.173525689082!2d75.89770357431644!3d22.74601290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e35cb63d60b3%3A0x2d10148e8aa61263!2sStarbucks!5e0!3m2!1sen!2sin!4v1704589270735!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <h1 className=' font-bold text-2xl py-2'>Coffee?</h1>
                        <p className=' py-2 text-[#6b6b6b] font-semibold text-xl'>Custom Blended Java in a casual setting</p>
                        <p className=' text-[#481f00] font-semibold opacity-50'>20445 Steven lane</p>
                        <p className='text-[#481f00] font-semibold opacity-50'>Cupertino, CA 9630</p>
                        
                        <hr className=' relative mt-3 w-[100%]'></hr>
                        <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Reply</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl'>Forward</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Delete</button>

                        </div>

                        <p className=' cursor-pointer flex py-2 mb-2 pb-11 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                            <path sstrokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                            More actions
                        </p>
                    </div>

                </div>
            </label>
            {/* <label htmlFor="s4" id="slide4" className="transform-translate-x-full"></label>
            <label htmlFor="s5" id="slide5" className="transform-translate-x-neg-1/3"></label> */}
          </div>
        
            </div>

      </div>
    </>
  )
}

export default App
