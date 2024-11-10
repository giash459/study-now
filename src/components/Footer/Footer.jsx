
import { FaRegSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-full mx-auto">
            <div style={{ backgroundColor: '#252641' }} className="mt-20 p-5">
                <div className="py-10 flex justify-center">
                <div className="flex gap-24">
                    <div className="flex">
                        <FaRegSquare style={{ color: '#65DAFF' }} className="relative text-4xl rotate-45"></FaRegSquare>
                        <h3 className="text-white absolute text-xl font-semibold ml-2">Skilline</h3>
                    </div>
                    <div>
                    <p className='text-white border-l-2 border-[#626381] pl-10'>Virtual Class <br /> for Zoom</p>
                    </div>
                </div>
                </div>
                <div className="py-5 flex justify-center">
                    <p style={{ color: '#B2B3CF' }} className="text-2xl font-medium">Subscribe to get our Newsletter</p>
                </div>
                <div className="pb-5 flex justify-center gap-3">
                    <input style={{ backgroundColor: '#252641', color: '#83839A' }} className="border rounded-3xl px-4" type="text" placeholder="Your Email"/>
                    <button   style={{ background: "linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)", color: "white" }} className="px-4 py-2 rounded-3xl">Subscribe</button>
                </div>
                <div className="py-5 flex justify-center gap-3">
                <p style={{ color: '#626381' }} className=''>Careers</p>
                <p style={{ color: '#626381' }} className=' border-l-2 border-[#626381] pl-4'>Privacy Policy</p>
                <p style={{ color: '#626381' }} className=' border-l-2 border-[#626381] pl-4'>Terms & Conditions</p>
                </div>
                <div className="pb-5 flex justify-center">
                <p style={{ color: '#B2B3CF' }} className='text-xl font-normal'>© 2021 Class Technologies Inc.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
