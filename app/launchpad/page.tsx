import Image from "next/image"
import gradient from '../../public/HomeImgs/gradient.png'
import user1 from '../../public/launchpad/user1.png'
const Launchpad = () => {
  return (
    <>
    <main>
        <div className='relative mt-20 h-auto pb-10 bg-cover w-full font-lorin'>
            <Image src={gradient} alt="banner image" layout="fill" objectFit="fill" />
            <section className='m-auto h-full relative p-10 xs:p-5'>
                <div className='grid grid-cols-3'>
                    <div className=' col-span-1'>
                        <h1>Launchpad</h1>
                        <div className="my-5 border border-Cpink backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] rounded-3xl p-4">
                            <div className="border-gray-700 border rounded-xl p-1 flex gap-3">
                                <Image src={user1} alt="user image"></Image>
                                <div><p>Brainverse</p><p>20,000,000 BRV</p></div>
                                <div>
                                    <button className="border border-gray-700 p-1 rounded-full">Active</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <h1>Details</h1>
                    </div>
                </div>
            </section>
        </div>
    </main>
    </>
  )
}

export default Launchpad