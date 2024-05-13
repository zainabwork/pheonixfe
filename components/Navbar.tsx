"use client"
import React,{useState, useEffect} from 'react'
import CustomConnectBtn from '../components/CustomConnectBtn'

import Logo from '../public/HomeImgs/logo.png'
import Image from 'next/image';
import {MenuIcon, CrossIcon, BinanceIcon, SettingsIcon, GlobeIcon, PheonixIcon} from './Svgs'
import Link from 'next/link';
import { NavigationLink } from '@/Interfaces';
import Select from 'react-select'
import bnb from '../public/swap/bnb.png'
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

  
// navbar select tag options and styles starts here
const options = [
    { value: 'binance', label: <BinanceIcon/> },
    { value: 'binance', label: <Image src={bnb} alt="bnb" className='w-9 h-9'></Image> },
  ]

  const SelectCustomStyles = {
    control: (base:any) => ({
      ...base,
      border: 'none',
      backgroundColor: '#000',
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: '#000',
    }),
  };
// navbar select tag options and styles ends here


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
        <nav className={`nav_wrapper items-center font-lorin w-full ${
        isScrolled ? "bg_nav" : "bg_none"
      } xl:h-[90px]`}>
<button className='hidden lg:block' onClick={onClick}>
    {showText? <MenuIcon/> : <CrossIcon/> }
    </button>

        <div className='flex justify-between w-full items-center'>
            <div className='flex-shrink-0 xs:w-36'><Image src={Logo} alt="logo" ></Image></div>
            <div className='2xl:block lg:hidden'>
                <ul className='flex text-nowrap gap-7 md:gap-3 items-center w-full text-sm'>
                {lis.map((li)=>(
                    <Link href={li.link}><li key={li.title}>{li.title}</li></Link>
                ))}
                </ul>
            </div>
            <div className='lg:hidden'>
            <ul className='flex gap-1 flex-row-reverse items-center'>
                    <li className=''>
                    <Select 
                        options={options} 
                        styles={SelectCustomStyles} 
                        defaultValue={options[0]} 
                        isSearchable={false}/>
                    </li>
                    <li><SettingsIcon/></li>
                    <li><GlobeIcon/></li>
                    <li className="flex gap-1 items-center"><PheonixIcon/> $1.15</li>
                  </ul>
            </div>
        </div>
            {/* <button className='gradient_border text-sm p-1 w-40 md:w-60 xs:text-[10px] xs:w-60 xs:h-10 h-12 mr-5 lg:mr-20'>Connect Wallet</button> */}
            <CustomConnectBtn styling={"md:hidden gradient_border text-sm p-1 w-40 md:w-40 xs:text-[10px] xs:w-32 xs:h-10 h-12 mr-5 lg:mr-20 sm:mr-16"} />
    </nav>
    {showText ? <Text /> : null}
    </>

  )
}


function Text(){
    return(
        <>
          <div className='overflow-auto side_bar lg:block bg-black text-white top-20 right-0 absolute p-5 h-auto w-1/3 md:w-1/2 sm:w-[80%] z-50 rounded-lg'>
          <div>
          <ul>
            {lis.map((li)=>(
              <Link href={li.link}><li className='py-2'>{li.title}</li></Link>
            ))}
            <li>
                    <ul className='hidden lg:block'>
                    <li className='my-2'>
                    <Select className='w-24'
                        options={options} 
                        styles={SelectCustomStyles} 
                        defaultValue={options[0]} 
                        isSearchable={false}/>
                        
                    </li>
                    <li className='my-2'><SettingsIcon/></li>
                    <li className='my-2'><GlobeIcon/></li>
                    <li className="flex gap-1 items-center my-2"><PheonixIcon/> $1.15</li>
                    <li><CustomConnectBtn styling={"gradient_border text-sm p-1 w-40 md:w-40 xs:text-[10px] xs:w-32 xs:h-10 h-12 mr-5 lg:mr-20 sm:mr-16 hidden sm:bloack"} /></li>

                    </ul>
                  </li>
          </ul>
          </div>
          </div>
        </>
    )
  };
  
export default Navbar