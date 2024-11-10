import banner from '../../assets/images/header-pic.png'
import { MdArrowDropUp } from "react-icons/md";

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#FFF2E1' }} className="max-w-full mx-auto ">
            <div className='lg:flex justify-between mx-20 '>
                <div className='pt-5 lg:pt-40 '>
                    <h1  style={{ color: '#2F327D' }} className='text-5xl font-bold'> <span  style={{ color: '#F48C06' }}>Studying</span> Online is now <br /> much easier</h1>
                    <p  style={{ color: '#464646' }} className='text-2xl font-normal py-5'>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                    <div className='md:flex items-center gap-5 space-y-5 md:space-y-0'>
                        <button style={{ backgroundColor: '#F48C06' }} className='text-white rounded-full p-2'>Join for free</button>
                        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                            <MdArrowDropUp style={{ color: '#65DAFF' }} className='rotate-90 text-4xl'></MdArrowDropUp>
                        </div>
                        <p style={{ color: '#252641' }} className='text-2xl font-normal'>Watch how it works</p>
                    </div>
                </div>
                <div>
                    <img className='' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;