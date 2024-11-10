import say from '../../assets/images/smiling-woman-with-afro-posing-pink-sweater 1.png'
import { IoStar } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Say = () => {
    return (
        <div className='max-w-full mx-auto'>
            <div className='mx-20 lg:flex '>
                <div className='lg:w-1/2'>
                    <div className='flex items-center gap-5'>
                        <p style={{ width: '100px', borderBottom: '1px solid #525596' }}></p>
                        <span style={{ color: '#525596' }} className=''>TESTIMONIAL</span>
                    </div>
                    <h2 style={{ color: '#2F327D' }} className='text-6xl font-bold my-7'>What They Say?</h2>
                    <p style={{ color: '#696984' }} className='text-2xl font-normal my-5'>Skilline has got more than 100k positive <br /> ratings from our users around the world. </p>
                    <p style={{ color: '#696984' }} className='text-2xl font-normal'>Some of the students and teachers were <br /> greatly helped by the Skilline.</p>
                    <p style={{ color: '#696984' }} className='text-2xl font-normal my-5'>Are you too? Please give your assessment</p>
                    <div style={{ border: '1px solid #F48C06' }} className='flex justify-between items-center border rounded-full w-64 md:w-80'>
                        <button style={{ color: '#F48C06' }} className='px-4 py-2 '>Write your assessment</button>
                        <div style={{ color: '#F48C06', border: '1px solid #F48C06' }} className='w-10 h-10 border rounded-full bg-white flex justify-center items-center'>
                            <FaArrowRightLong></FaArrowRightLong>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 '>
                    <img className='' src={say} alt="" />
                    <div className='relative lg:-mt-28 ml-20 lg:w-3/4 bg-white p-4  border-l-2 border-[#F67766] rounded-xl shadow-xl'>
                        <p  style={{ color: '#5F5F7E' }} className='border-l-2 border-[#BDBDD1] p-2'>"Thank you so much for your help. It's exactly what <br /> I've been looking for. You won't regret it. It really <br /> saves me time and effort. Skilline is exactly what <br /> our business has been lacking."</p>
                        <div className='my-5 md:flex justify-between'>
                            <div>
                                <p style={{ color: '#5F5F7E' }}>Gloria Rose</p>
                            </div>
                            <div>
                                <div className='flex justify-evenly my-2'>
                                    <IoStar style={{ color: '#FBA333' }}></IoStar>
                                    <IoStar style={{ color: '#FBA333' }}></IoStar>
                                    <IoStar style={{ color: '#FBA333' }}></IoStar>
                                    <IoStar style={{ color: '#FBA333' }}></IoStar>
                                    <IoStar style={{ color: '#FBA333' }}></IoStar>
                                </div>
                                <div>
                                <p style={{ color: '#80819A' }}>12 reviews at Yelp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Say;