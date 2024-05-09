"use client"
import { useState } from "react"
import Image from "next/image"
import gradient from '../../public/HomeImgs/gradient.png'
import ido1 from '../../public/launchpad/ido1.png'
import ido2 from "../../public/launchpad/ido2.png"
import ido3 from '../../public/launchpad/ido3.png'
import ido4 from '../../public/launchpad/ido4.png'
import LaunchpadDetails from "@/components/LaunchpadDetails"
import {LaunchpadIDOs} from '@/Interfaces';

const Launchpad = () => {

    const LaunchpadIDOs:LaunchpadIDOs[] = [
        {
            image: ido1,
            name:"Brainverse",
            value:20000000,
            token: "BRV",
            type:true, //active if true and finished if false
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"3,000.00",
                progress:"2.00",
                participants:"3,000",
                table:[
                    {
                        label:"Token tickers",
                        value:"TOK"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 200 TOK"
                    },
                    {
                        label:"Token supply",
                        value:"30,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$200,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"70,000 SKY"
                    }
                ],
                amount:1,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido2,
            name:"SHIBA.AI",
            value:50000000,
            token: "SHAI",
            type:true,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido3,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido3,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido3,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido4,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido4,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido4,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido4,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        {
            image: ido4,
            name:"SecurAI",
            value:50000000,
            token: "SC",
            type:false,
            isSelected:false,
            details: {
                date:"November 23, 2023 - 21:30 UTC",
                endsIn:"2024-05-30 7:07:00",
                tokenSupply:"2,000.00",
                progress:"1.00",
                participants:"2,500",
                table:[
                    {
                        label:"Token tickers",
                        value:"SHAI"
                    },
                    {
                        label:"Price",
                        value:"1 PNX = 100 SHAI"
                    },
                    {
                        label:"Token supply",
                        value:"20,000,000",
                    },
                    {
                        label:"Network",
                        value:"Ethereum"
                    },
                    {
                        label:"Hard cap",
                        value:"$100,000"
                    },
                    {
                        label:"Max. Allocation",
                        value:"50,000 SKY"
                    }
                ],
                amount:0,
                indicatorsData:[
                    {
                        label:"Sale Started",
                        date:"03 Nov, 21:30 UTC",
                        done:true,
                    },
                    {
                        label:"Sale Ended",
                        date:"03 Nov, 21:30 UTC",
                        done:false,
                    },
                    {
                        label:"Claim",
                        date:"23 Nov, 21:30 UTC",
                        done:false,
                    },
                ]
              },
        },
        
    ]
    const [selectedIdo, setSelectedIdo] = useState(LaunchpadIDOs[0]);
    const handleIdoClick = ([ido]:LaunchpadIDOs[]) => {        
        LaunchpadIDOs.forEach((item:LaunchpadIDOs) => (item.isSelected = false));
        setSelectedIdo(ido);
        ido.isSelected = true;
    };

  return (
    <>
    <main>
        <div className='relative mt-20 h-auto pb-10 bg-cover w-full font-lorin'>
            <Image src={gradient} alt="banner image" layout="fill" objectFit="fill" />
            
            <section className='m-auto h-full p-10 xs:p-5 '>
                <div className='grid grid-cols-3 gap-10 lg:gap-0 lg:grid-cols-1'>
                    <div className='col-span-1'>
                        <h1>Launchpad</h1>
                        <div className="h-[64%] lg:h-full scroll-smooth overflow-y-auto my-5 border border-gray-700 backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4">
                            {LaunchpadIDOs.map((ido:LaunchpadIDOs)=>(
                            <div key={ido.name} onClick={() => handleIdoClick([ido])} className={`${ido.isSelected? "border border-green-700":"border border-gray-700" }  rounded-xl p-1 flex gap-3 relative my-2 ${
                                ido.type ? "cursor-pointer" : "opacity-50" }`}>
                                <Image src={ido.image} alt="user image"></Image>
                                <div>
                                    <p>{ido.name}</p>
                                    <p className="text-sm">{ido.value} <span className="text-gray-400">{ido.token}</span></p>
                                </div>
                                <div className="absolute top-1 right-1">
                                    <button className={`border border-gray-700 p-2 rounded-2xl text-xs`}>{ido.type?"Active":"Finished"}</button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-2 lg:mt-20'>
                        <h1>Details</h1>
                        <LaunchpadDetails ido={selectedIdo}/>
                    </div>
                </div>
            </section>
        </div>
    </main>
    </>
  )
}

export default Launchpad