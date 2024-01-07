import mail from '../images/mail.png'
import Card from "./Card"
import Feedback from './Feedback'
import Postgrad from './Postgrad'
import Example from './Example'
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
  const formattedTime = `${formattedHours-12}:${formattedMinutes}`;

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
      <div className=' relative '>
        <div className='flex text-gray-600/50 text-xl absolute left-[94%] top-4'><h1>{formattedTime}</h1></div>
        <h1 className=" text-[#c0c2c8] ml-14 tracking-wide text-6xl font-normal font-sans  m-9">Review Inbox</h1>

        {tasks.map((task, index) => (

          <div key={index} onClick={() => handleTaskClick(index)} className='flex mx-10 my-2 font-semibold w-1/5 cursor-pointer opacity-80 text-[#6b6b6b] hover:bg-[#6b6b6b]/20 hover:text-[#262626] rounded-2xl'>
            <div className=" flex flex-row p-4   align-middle  rounded-2xl justify-center" >
              {task.imsvg}

              <h1 className=' w-72 flex '>{task.title} <p className='px-2 text-s  opacity-40'>· {task.name}</p></h1>
            </div>

          </div>
        ))}


        {selectedTask !== null && tasks[selectedTask].component}
        <div id='content'>

        </div>
      </div>
    </>
  )
}

export default App
