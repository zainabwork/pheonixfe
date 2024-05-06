import Image from 'next/image';
import banner from '../public/HomeImgs/banner-bg.png'
import stars from '../public/HomeImgs/stars.png'
import line from '../public/HomeImgs/line.svg'
import laptop from '../public/HomeImgs/Laptop.png'
import grid from '../public/HomeImgs/GridBG.png'
import coins from '../public/HomeImgs/section-2/coins.png'
import {HomeCarousel1, HomeCarousel2} from '../components/HomeComps/HomeCarousel';
import { TickIcon, GotoLinkIcon, DownArrowIcon } from '@/components/Svgs';
import section3img from '../public/HomeImgs/section-2/section3img.png';
import roadmap from "../public/HomeImgs/section-2/roadmap.png";
import Faq from '../components/HomeComps/Faq';
import faqGradient from '../public/HomeImgs/section-2/faq-gradient.png'
import circleGrid from '../public/HomeImgs/section-2/circleGrid.png'
import gradient from '../public/HomeImgs/gradient.png'
import Swap from '@/components/Swap';
import BridgeSwap from '@/components/BridgeSwap';
import LeaderBoard from '@/components/LeaderBoard';
import Launchpad from '@/components/Launchpad';


export default function Home() {
  const values=[
    {
      title:"Total Users",
      value:"1,414,172",
      days:"in the last 30 days"
    },
    {
      title:"Total Trades",
      value:"19,074,804",
      days:"in the last 30 days"
    },
    {
      title:"Total Value Locked",
      value:"$1,480,779,684",
      days:"in the last 30 days"
    }
  ]
  return (
<>
  <main>
<div className='relative h-[70rem] md:h-[50rem] pb-10 bg-cover w-full font-lorin'>
  <div className=''><Image src={stars} alt="banner image" layout="fill" objectFit="cover" /></div>
    <Image src={banner} alt="banner image" layout="fill" objectFit='contain' className='mt-40'/>
    <Image src={gradient} alt="banner image" layout="fill" objectFit="fill" />

      <section className='m-auto h-full relative '>
      <div className='text-center flex flex-col justify-center items-center h-auto w-2/3 md:w-[80%] absolute left-0 right-0 m-auto overflow-hidden top-44'>
        <p className="font-semibold text-6xl lg:text-4xl md:text-3xl">Everyone's Favorite DEX<br/>Pheonix Swap</p>
        <div className='-mt-2'><Image src={line} alt="vector" className='lg:w-2/3 m-auto'></Image></div>
        <p className=" text-xl py-6 md:text-sm">Trade, earn, and own crypto on the all-in-one multichain DEX</p>
        <div className='m-auto flex gap-2 py-5'>
          <button className="button text-black bg-white">Get Started</button>
          <button className='button border-2'>Trade Now</button>
        </div>
        <Image className='my-12' src={laptop} alt="laptop"></Image>
      </div>
      </section>
      
    </div>
    <div className='relative h-[40rem] md:h-[30rem] xs:h-[25rem] bg-cover w-full font-lorin'>
    <Image src={grid} alt="banner image" layout="fill" objectFit="contain" className='mt-20'/>
    <section className='m-auto h-full relative px-20 md:px-10 sm:px-2'>
      <h1 className='text-center text-4xl md:text-2xl sm:text-xl'>Shaping the Future of Decentralized Trading:<br className='sm:hidden'/>PheonixSwap Unstoppable Expansion</h1>
      <div className='flex flex-wrap gap-4 justify-between md:justify-center mt-10 px-20 lg:px-0 text-center'>
        {values.map((values)=>(
          <div>
            <p className='md:text-sm sm:text-xs'>{values.title}</p>
            <p className='text-Cpurple text-3xl md:text-xl sm:text-sm font-semibold'>{values.value}</p>
            <p className='text-xs'>{values.days}</p>
          </div>
        ))}
      </div>
      <Image src={coins} alt="coins image" className='lg:w-full w-2/3 m-auto'></Image>
    </section>
    </div>

    <section className='font-lorin'>
      <h1 className='text-center text-4xl md:text-2xl sm:text-xl'>Discover The Ecosystem</h1>
      <div className='pl-10 sm:pl-10 sm:px-10 my-16'>
          <HomeCarousel1/>
      </div>
    </section>

    <section className='px-20 sm:px-10 font-lorin'>
      <div className='grid grid-cols-2 lg:grid-cols-1 gap-8'>
        <div>
          <h1 className='text-4xl md:text-2xl sm:text-xl'>Decentralized Trading PheonixSwap Unstoppable Expansion</h1>
          <div className='flex flex-col gap-5 my-10 w-2/3'>
            <div className='flex gap-2 items-center'>
              <TickIcon/><span>DeFi Ecosystem</span>
            </div>
            <p className='text-[#B3B3B3]'>Experience the power of community ownership, global governance, and explore infinite use cases within the PheonixSwap ecosystem</p>
            <div className='flex gap-2 items-center'>
              <TickIcon/><span>Secure Wallet system</span>
            </div>
            <div className='flex gap-2 items-center'>
              <TickIcon/><span>Explore more</span>
            </div>
            <div><button className='button rounded-tr-3xl rounded-lg border border-Cpurple'>Buy PNX</button></div>
          </div>
        </div>
        <div>
          <Image src={section3img} alt="multiple wallets image" className='m-auto'></Image>
        </div>
      </div>
    </section>

    <section className='pl-10 my-20 font-lorin'>
      <div className='grid grid-cols-3 lg:grid-cols-1 lg:gap-10'>
        <div className='col-span-1'>
          <h1 className='text-4xl md:text-2xl sm:text-xl'>Unlock the Power of DeFi with <span className='text-Cpurple'>PNX</span></h1>
          <p className='my-5 sm:text-sm'>Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem</p>
          <div className='flex gap-10'>
            <button className='button border border-Cpurple rounded-tr-3xl'>Buy PNX</button>

            <button className='flex items-center gap-1 button'>Learn <GotoLinkIcon/></button></div>
        </div>
        <div className='col-span-2 ml-10 sm:mr-20'>
          <HomeCarousel2/>
        </div>
      </div>
    </section>

    <section className='font-lorin'>
      <h1 className='text-center text-4xl md:text-2xl sm:text-xl'>Roadmap</h1>
      <div className='my-16 sm:my-5'>
        <Image src={roadmap} alt="Roadmap" className='m-auto'></Image>
      </div>
      <button className='button m-auto flex items-center gap-1 border border-Cpurple'>See More <DownArrowIcon/></button>
    </section>

    <div className='relative h-auto bg-cover w-full font-lorin'>
    <Image src={faqGradient} alt="banner image" layout="fill" objectFit="contain" className='mt-20'/>
    <section className='font-lorin my-20 relative'>
      <h1 className='text-center text-4xl md:text-2xl sm:text-xl'>Frequently Asked Questions</h1>
      <p className='text-center text-lg sm:text-sm my-5 w-2/3 sm:w-full sm:px-2 m-auto text-[#ECECEC]'>
        Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
      </p>
      <div className='my-16 sm:my-5'>
        <Faq/>
      </div>
    </section>
    </div>

    <div className='relative h-screen sm:h-[20rem] bg-cover w-full font-lorin'>
    <Image src={gradient} alt="banner image" layout="fill" objectFit="contain" className=''/>
    <Image src={circleGrid} alt="banner image" layout="fill" objectFit="contain" className=''/>
    <section className='font-lorin my-20 relative'>
    <div className='text-center flex flex-col justify-center items-center h-auto w-2/3 absolute left-0 right-0 m-auto overflow-hidden top-52 sm:top-20'>
        <p className="text-6xl md:text-3xl sm:text-xl">Be a part of the future of <br className='xs:hidden'/>PheonixSwap</p>
        <div className='-mt-2'><Image src={line} alt="vector" className='lg:w-2/3 m-auto'></Image></div>
    </div>
    </section>
    </div>
  </main>
</>
  );
}
