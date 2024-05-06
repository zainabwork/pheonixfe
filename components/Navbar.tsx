"use client"
import React,{useState, useEffect} from 'react'

import Logo from '../public/HomeImgs/logo.png'
import Image from 'next/image';
import {MenuIcon, CrossIcon, BinanceIcon, DownArrowIcon, SettingsIcon, GlobeIcon, PheonixIcon} from './Svgs'
import Link from 'next/link';

interface NavigationLink {
  title: string;
  link: string;
}
const lis: NavigationLink[] = [
  {
    title:"Trade",
    link:""
  },
  {
    title:"Earn",
    link:""
  },
  {
    title:"Game",
    link:"" 
  },
  {
    title:"NFT",
    link:"" 
  },
  {
    title:"Launchpad",
    link:"" 
  },
  {
    title:"Phoenix Casino",
    link:"" 
  },
  {
    title:"Phoenix Casino",
    link:"" 
  },

]

const Navbar = () => {
  const [showText, setShowText] = useState<boolean>();
  const onClick = () => setShowText(!showText);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>
    <nav className={`nav_wrapper font-lorin px-2 ${
          isScrolled ? "bg_nav" : "bg_none"
        } xl:h-[90px]`}>
    <div><Image src={Logo} alt="logo"></Image></div>
    <button className='hidden lg:block' onClick={onClick}>
    {showText? <MenuIcon/> : <CrossIcon/> }

    </button>
  <div className='2xl:block lg:hidden w-full relative'>
          <div>
            <ul className='flex text-nowrap gap-7 md:gap-3 items-center w-full text-sm justify-end'>
                {lis.map((li)=>(
                  <Link href={li.link}><li key={li.title}>{li.title}</li></Link>
                ))}
                <li className="ml-5">
                  <ul className='flex gap-2 flex-row-reverse items-center'>
                    <li><button className='button border border-Cpurple bg_nav'>Connect Wallet</button></li>
                    <li className='flex gap-1 items-center'><BinanceIcon/><DownArrowIcon/></li>
                    <li><SettingsIcon/></li>
                    <li><GlobeIcon/></li>
                    <li className="flex gap-1 items-center"><PheonixIcon/> $1.15</li>
                  </ul>
                </li>
            </ul>
        </div>
        </div>
        
        </nav>
        {showText ? <Text /> : null}
    </>
  )
}

function Text(){
  return(
      <>
        <div className='side_bar lg:block bg-black text-white top-20 right-0 absolute p-5 h-auto w-1/3 md:w-1/2 sm:w-[80%] z-50 rounded-lg'>
        <div>
        <ul>
          {lis.map((li)=>(
            <Link href={li.link}><li className='py-2'>{li.title}</li></Link>
          ))}
          <li>
                  <ul className='flex flex-col-reverse gap-2 '>
                    <li><button className='button border border-Cpurple bg_nav'>Connect Wallet</button></li>
                    <li className='flex gap-1 items-center'><BinanceIcon/><DownArrowIcon/></li>
                    <li><SettingsIcon/></li>
                    <li><GlobeIcon/></li>
                    <li className="flex gap-1 items-center"><PheonixIcon/> $1.15</li>
                  </ul>
                </li>
        </ul>
        </div>
        </div>
      </>
  )
};

export default Navbar
