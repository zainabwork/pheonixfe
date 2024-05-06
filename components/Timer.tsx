"use client"
import {useState,useEffect} from 'react'
import { TimeRemaining } from '@/Interfaces';


const Timer = () => {

 // Set the target date for the countdown (5 days from the current date)
 const targetDate = new Date();
 targetDate.setDate(targetDate.getDate() + 5);

 // Initialize state variables for days, hours, minutes, and seconds
 const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(getTimeRemaining());

 // Define a function to calculate the time remaining
 function getTimeRemaining():TimeRemaining {
   const now = new Date();
   const timeDiff = targetDate.getTime() - now.getTime();

   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
   const milliseconds = timeDiff % 1000;

   return {
     days: days < 0 ? 0 : days,
     hours: hours < 0 ? 0 : hours,
     minutes: minutes < 0 ? 0 : minutes,
     seconds: seconds < 0 ? 0 : seconds,
     milliseconds: milliseconds < 0 ? 0 : milliseconds,
   };
 }


 useEffect(() => {
   const timer = setInterval(() => {
     setTimeRemaining(getTimeRemaining());
   }, 1000);

   return () => clearInterval(timer);
 }, []);

  return (
    <>
    <ul className='flex justify-between text-center font-lorin my-5'>
    <li>
        <span className='block text-4xl'>{timeRemaining.days.toString().padStart(2, '0')}</span>
        <span className='text-xs'>Days</span>
      </li>
      <p className='text-4xl'>:</p>
    <li>
      <span className='block text-4xl'>{timeRemaining.hours.toString().padStart(2, '0')}</span>
      <span className='text-xs'>Hours</span>
    </li>
    <p className='text-4xl'>:</p>
    <li>
      <span className='block text-4xl'>{timeRemaining.minutes.toString().padStart(2, '0')}</span>
      <span className='text-xs'>Minutes</span>
    </li>
    <p className='text-4xl'>:</p>
    <li>
        <span className='block text-4xl'>{timeRemaining.seconds.toString().padStart(2, '0')}</span>
        <span className='text-xs'>Seconds</span>
    </li>
  </ul>
    </>
  )
}

export default Timer