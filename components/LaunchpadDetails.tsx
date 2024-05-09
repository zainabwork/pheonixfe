import React from 'react'
import Image from 'next/image';

import { BsTwitterX, BsTelegram, BsDiscord, BsGithub } from "react-icons/bs";
import { BlackTickIcon, LinkIcon, } from './Svgs';
import LaunchpadTimer from './LaunchpadTimer';
import { LaunchpadIDOs } from '@/Interfaces';

const LaunchpadDetails= ({ido}:{ido:LaunchpadIDOs}) => {
     // Allow user input for deadline and unit
    // Example: Deadline in hours (replace with user input)

  // Example: Deadline in days (replace with user input)

  const unit = 'hours';

    const socialMediaIcons = [<BsTwitterX/>,<BsTelegram/>,<BsDiscord/>,<BsGithub/>]
  return (
    <>
        <div className='my-5 border border-gray-700 backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Image src={ido?.image} alt="ido image"></Image>
                    <div>
                        <p>{ido?.name}</p>
                        <p className="text-xs text-gray-500">{ido?.details.date}</p>
                    </div>
                </div>
                <div>
                    <div className='gap-4 flex'>
                        {socialMediaIcons.map((icon)=>(
                            <p>{icon}</p>
                        ))}
                    </div>
                    <a href="#" className='text-xs flex gap-2 my-2 text-[#CB3BA8]'><LinkIcon/><p>www.shaai.ai</p></a>
                </div>
            </div>
            <div className='my-5'>
                <p className='my-2 text-xs text-gray-500'>Ends in:</p>
                <div><LaunchpadTimer deadlineString={ido?.details.endsIn} unit={unit}/></div>
            </div>
            <div className='relative'>
                <div className="flex justify-between mb-2">
                    <span className="text-sm">{ido?.details.tokenSupply} / 2,000,000 SKY</span>
                    <span className="text-sm">Progress: {ido?.details.progress}%</span>
                </div>
                <div className="w-full bg-pink-500 bg-opacity-30 rounded-full h-2.5">
                    <div className="bg-[#CB3BA8] h-2.5 rounded-full w-[15%]"></div>
                </div>
                <p className='absolute right-0 text-gray-500 text-sm my-2'>Participants: {ido?.details.participants}</p>
            </div>
            <div className='border-t border-gray-700 my-10 pt-2'>
                <h1>IDO Details</h1>
                <table className='w-full text-sm text-gray-300'>
                    <tbody>
                        {ido?.details.table.map((item)=>(
                        <tr key={item.label} className='mb-4 border-b border-gray-700'>
                            <td className='p-2 '>{item.label}</td>
                            <td className='text-right text-white p-2'>{item.value}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


        <div className='my-5 border border-gray-700 backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4'>
            <h1>Participate</h1>
            <div className='my-5'>
                <div className='flex justify-between w-1/2 sm:w-full text-sm text-gray-500 my-2'><p>Amount</p><p>Your contribution: <span className='text-white'>{ido?.details.amount}</span> SKY</p></div>
                <div className='flex gap-2 items-center'>
                <div className="relative w-full">
                    <input className="block p-2.5 w-full text-sm text-white bg-transparent rounded-2xl border border-gray-700 focus:ring-blue-500 focus:border-blue-500" value={`${ido?.details.amount} PNX`} />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-transparent border-l border-gray-700">MAX</button>
                </div>
                <div><button className='bg-white text-black rounded-3xl px-4 py-2'>Buy</button></div>
                </div>
                <div className='my-5'>
                    {/* starting  */}                    
                    <ol className="flex items-center sm:flex-col">
                        {ido?.details.indicatorsData.map((indicator)=>(
                            <li className="relative w-full mb-6">
                            <div className="flex items-center">
                                <div className={`${indicator.done? "bg-[#CB3BA8]" : "bg-black"} z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-white shrink-0`} >
                                    <BlackTickIcon/>
                                </div>
                                <div className={`${indicator.done? "bg-[#CB3BA8]" : "bg-gray-700"} flex w-full h-0.5`}></div>
                            </div>
                            <div className={`${indicator.done? "border-[#CB3BA8]" : "border-gray-700"} mt-3 rounded-2xl border p-2 text-center w-32`}>
                                <p className='text-sm'>{indicator.label}</p><p className='text-xs text-gray-500'>{indicator.date}</p>
                            </div>
                        </li>
                        ))}
                    </ol>
                    {/* ending */}
                </div>
            </div>
        </div>
    </>
  )
}

export default LaunchpadDetails