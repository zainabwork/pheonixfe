import React from 'react'

import { SettingsIcon, WalletIcon } from '../../components/Svgs'
import usdt from '../../public/swap/usdt.png'
import downArrow from '../../public/swap/down-arrow.png'
import Image from 'next/image'
import gradient from '../../public/HomeImgs/gradient.png'
import ethereum from '../../public/swap/ethereum.png'
import arbitrum from '../../public/swap/arbitrum.png'


const BridgeSwap = () => {
  return (
    <>

<div className='relative h-[50rem] pb-10 bg-cover w-full font-lorin'>
    <Image src={gradient} alt="banner image" layout="fill" objectFit="fill" />

      <section className='m-auto h-full relative '>
      <div className='text-center flex flex-col justify-center items-center h-auto w-2/3 md:w-[80%] xs:w-[95%] absolute left-0 right-0 m-auto overflow-hidden'>
      <section className='h-[50rem]'>
            <div className='p-5 m-auto absolute left-0 right-0 top-[20%] w-[30rem] md:w-full border border-Cpurple rounded-xl rounded-tr-3xl'>
                <div className='text-center flex justify-center'>Bridge Swap
                    <span className='absolute right-2'><SettingsIcon/></span>
                </div>
                <div className='bg-black p-2 my-5 relative'>
                    <div className='flex md:flex-col md:items-start justify-between items-center text-xs'>
                        <div className='flex gap-1 text-xs'>
                            <Image src={ethereum} alt="ethereum logo" className='h-8 w-5'></Image>
                            <div className='text-left'><p className='text-[10px]'>From</p>
                            <select className='bg-transparent h-8 text-xs border-none p-0'>
                                <option className='text-black'>Ethereum</option>
                                <option className='text-black'>Arbitrum</option>
                            </select></div>
                        </div>
                        <div className='gap-2 flex items-center'>
                            <p>Available 500 USDT</p>
                            <button className='border border-gray-700 rounded-lg p-2'>Half</button>
                            <button className='border border-gray-700 rounded-lg p-2'>Max</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex gap-1 relative'>
                            <Image src={usdt} alt="usdt icon"></Image>
                            <select className='bg-transparent border-none '>
                                <option className='text-black'>USDT</option>
                                <option className='text-black'>BNB</option>
                            </select>
                            <p className='absolute bottom-0 text-[8px] left-[60px] text-Cpink'>Tether USDT</p>
                        </div>
                        <div className='text-xs text-right'><p>1000</p><p className='text-Cpink'>≈ $1,000</p></div>
                    </div>
                <Image src={downArrow} alt="down arrow image" className='absolute -bottom-9 left-0 right-0 m-auto'></Image>
                </div>
                
                <div className='bg-black p-2 my-5'>
                        <div className='flex gap-1 text-xs'>
                            <Image src={arbitrum} alt="ethereum logo" className='w-6 h-6'></Image>
                            <div className='text-left'><p className='text-[10px]'>To</p>
                            <select className='bg-transparent h-8 text-xs border-none p-0'>
                                <option className='text-black'>Arbitrum</option>
                                <option className='text-black'>Ethereum</option>
                            </select></div>
                        </div>
                    
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex gap-1 relative'>
                            <Image src={usdt} alt="usdt icon"></Image>
                            <select className='bg-transparent border-none '>
                                <option className='text-black'>USDT</option>
                                <option className='text-black'>BNB</option>
                            </select>
                            <p className='absolute bottom-0 text-[8px] left-[60px] text-Cpink'>Tether USDT</p>
                        </div>
                        <div className='text-xs text-right'><p>1000</p><p className='text-Cpink'>≈ $1,000</p></div>
                    </div>
                </div>

                <select className='w-full bg-black rounded-sm text-sm'>
                    <option>1 USDT ≈ 0.00352354 BNB</option>
                </select>
                <button className='my-5 w-full button bg-white text-black flex justify-center gap-2'><WalletIcon/>Connect Wallet</button>
            </div>
        </section>
        </div>
        </section>
</div>

    </>
  )
}

export default BridgeSwap