"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import cardBorder from '../../public/HomeImgs/carousel-border.png'
import slide1Img1 from '../../public/HomeImgs/section-2/slide1-img1.png'
import slide1Img2 from '../../public/HomeImgs/section-2/slide1-img2.png'
import slide1Img3 from '../../public/HomeImgs/section-2/slide1-img3.png'
import slide1Img4 from '../../public/HomeImgs/section-2/slide1-img4.png'

const HomeCarousel1 = () => {
  const slides=[
      {
          title:"Swap",
          description:"Trade crypto instantly across multiple chains",
          image:slide1Img1,
          button:"Take Now >",
      },
      {
          title:"Liquidity",
          description:"Fund liquidity pools, earn trading fees",
          image:slide1Img2,
          button:"Add Now >",
      },
      {
          title:"Bridge",
          description:"Seamlessly transfer assets across chains",
          image:slide1Img3,
          button:"Bridge Now >",
      },
      {
          title:"Buy Crypto",
          description:"Buy crypto with your preferred currency and payment method",
          image:slide1Img4,
          button:"Trade Now >",
      },
      {
        title:"Swap",
        description:"Trade crypto instantly across multiple chains",
        image:slide1Img1,
        button:"Take Now >",
    },
    {
        title:"Liquidity",
        description:"Fund liquidity pools, earn trading fees",
        image:slide1Img2,
        button:"Add Now >",
    },
    {
        title:"Bridge",
        description:"Seamlessly transfer assets across chains",
        image:slide1Img3,
        button:"Bridge Now >",
    }
  ]

return (
  <>
  <Swiper
      slidesPerView={1}
      spaceBetween={4}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 2.8,
          spaceBetween: 30,
        },
        '@1.50': {
          slidesPerView: 3.8,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper font-lorin"
    >
      {slides.map((slide)=>(
          <SwiperSlide className=''>

          <div className='min-h-[15rem] relative text-left rounded-tr-3xl rounded-lg  bg-transparent xs:border-r-2 xs:border-[#4B588D] border-b-2 border-[#4B588D] rounded-bl-3xl try_border'>
              <div className='p-4'>
                  <p className='text-2xl sm:text-sm my-5'>{slide.title}</p>
                  <p className='text-sm sm:text-xs'>{slide.description}</p>
                  <div className='flex justify-between items-center my-5 absolute bottom-0 w-[90%]'>
                      <div className='h-10 w-10'>
                          <Image src={slide.image} alt="slide pic" ></Image>
                      </div>
                      <div className='absolute right-0'><button className='text-sm'>{slide.button}</button></div>
                  </div>
              </div>
          </div>
          </SwiperSlide>
      ))}
    </Swiper>
  </>
)
}


import slide2Img1 from '../../public/HomeImgs/section-2/slide2-img1.png';
import slide2Img2 from '../../public/HomeImgs/section-2/slide2-img2.png';
import {ArrowPath,StakeIcon} from '../../components/Svgs'

const HomeCarousel2 = () => {
  const slides=[
      {
          image:slide2Img1,
          icon:<ArrowPath/>,
          title:"Trade",
      },
      {
        image:slide2Img2,
        icon:<StakeIcon/>,
        title:"Staking"
    },
    {
      image:slide2Img1,
      icon:<ArrowPath/>,
      title:"Trade"
  },
      
  ]

return (
  <>
  <Swiper
      slidesPerView={1}
      spaceBetween={2}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 1.8,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper font-lorin"
    >
      {slides.map((slide)=>(
          <SwiperSlide >
          <div className='rounded-2xl border border-gray-500 p-5'>
              <div className=''><Image src={slide.image} alt="slider image"></Image></div>
              <div className='flex gap-2 bg-black p-2 w-full rounded-lg border border-gray-700'>
                {slide.icon} {slide.title}
              </div>
          </div>
          </SwiperSlide>
      ))} 
    </Swiper>
  </>
)
}
export {HomeCarousel1,HomeCarousel2}
