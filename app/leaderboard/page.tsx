"use client"
import gradient from '../../public/HomeImgs/gradient.png'
import Image from 'next/image'
import { StarsIcon } from '../../components/Svgs'
import Timer from '../../components/Timer'
import { useState } from 'react'
import TableData from '../../components/TableData'
import { TableDataItem } from '@/Interfaces'


const LeaderBoard = () => {

    const value:string= "0x5F3Eb2D6AeC7C1B9Fe6cew6d";
    const DailyTableData: TableDataItem[]= [
        {
          rank: "🥇",
          address: '0x8C01B7D3B2A4eF5c6D4b3A2E1f0b9E8D7C6B5A4D',
          trades: 240000,
          rewards: 50000,
        },
        {
          rank: "🥈",
          address: '0x1234567890AbCdEf1234567890AbCdEf',
          trades: 180000,
          rewards: 35000,
        },
        {
            rank: "🥉",
            address: '0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
          },
        {
            rank: 4,
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        }
      ];
      const WeeklyTableData:TableDataItem[] = [
        {
          rank: "🥇",
          address: '0x8C01B7D3B2A4eF5c6D4b3A2E1f0b9E8D7C6B5A4D',
          trades: 12345,
          rewards: 50000,
        },
        {
          rank: "🥈",
          address: '0x1234567890AbCdEf1234567890AbCdEf',
          trades: 12347,
          rewards: 35000,
        },
        {
            rank: "🥉",
            address: '0x1234534545AbCdEf1234567890AbCdEf',
            trades: 34565,
            rewards: 35000,
          },
        {
            rank: 4,
            address:'0x1234567890A6457gfhfdjf4567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x12345678sdfsd34353534567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        }
      ];
      const AllTimeTableData:TableDataItem[] = [
        {
          rank: "🥇",
          address: '0x8C01B7D3B2Aergtert546546E1f0b9E8D7C6B5A4D',
          trades: 98760,
          rewards: 50000,
        },
        {
          rank: "🥈",
          address: '0x1234567890AbCdEf15476886690AbCdEf',
          trades: 180000,
          rewards: 35000,
        },
        {
            rank: "🥉",
            address: '0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
          },
        {
            rank: 4,
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        },
        {
            address:'0x1234567890AbCdEf1234567890AbCdEf',
            trades: 180000,
            rewards: 35000,
        }
      ];
      const [activeButton, setActiveButton] = useState<string>('Weekly'); // State to track clicked button

      const handleClick = (buttonName:string) => {
        setActiveButton(buttonName);
      };
      
  return (
    <>
    <div className='relative mt-20 h-auto pb-10 bg-cover w-full font-lorin'>
        <Image src={gradient} alt="banner image" layout="fill" objectFit="fill" />
        <section className='m-auto h-full relative p-10 xs:p-5'>
            <div className='grid grid-cols-3 lg:grid-cols-1 gap-5 lg:gap-0 lg:gap-y-5 my-10'>
                <div className='col-span-1 border border-Cpink backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4'>
                    <div className='p-2 flex gap-1 bg-Cpink bg-opacity-[30%] w-auto max-w-[10rem] rounded-full border border-Cpink'><StarsIcon/>Next Rewards</div>
                    <p className='text-sm my-2'>Sunday, 06 November 2023 (23:59 PM)</p>
                    <div className='w-full lg:w-2/3 sm:w-full'>
                        <Timer/>
                    </div>
                </div>
                <div className='col-span-2 border border-Cpink backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4'>
                    <p className='sm:text-xs'>Congratulations! <a href="#" className='underline text-blue-500'>{value}</a> You have secured the top 10th position on the weekly leaderboard as the top trader.</p>
                    <p className='text-4xl font-semibold text-[#CB3BA8] my-3'>1,200 PNX</p>
                    <button className='p-2 bg-white text-black rounded-xl text-sm px-2'>Claim Now</button>
                </div>
            </div>
            <div className='my-5 border border-gray-500 rounded-2xl flex gap-2 max-w-[21rem] justify-center'>
                <button className={`rounded-full p-2  px-6 ${activeButton === 'Daily' ? 'bg-opacity-[10%] bg-white border border-gray-500' : ''}`} onClick={() => handleClick('Daily')}>Daily</button>
                <button className={`rounded-full p-2  px-6 ${activeButton === 'Weekly' ? 'bg-opacity-[10%] bg-white border border-gray-500' : ''}`} onClick={() => handleClick('Weekly')}>Weekly</button>
                <button className={`rounded-full p-2 px-6 ${activeButton === 'AllTime' ? 'bg-opacity-[10%] bg-white border border-gray-500' : ''}`} onClick={() => handleClick('AllTime')}>All Time</button>
            </div>
            {activeButton === 'Daily' && <TableData tableData={DailyTableData}/>}
            {activeButton === 'Weekly' && <TableData tableData={WeeklyTableData}/>}
            {activeButton === 'AllTime' && <TableData tableData={AllTimeTableData}/>}

        </section>
      
    </div>
    </>
  )
}

export default LeaderBoard