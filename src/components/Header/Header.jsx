import { BiSolidSquare } from "react-icons/bi";

const Header = () => {
    return (
        <div style={{ backgroundColor: '#FFF2E1' }} className="max-w-7xl mx-auto">
            <div className="md:flex justify-between items-center mx-20 py-10 border border-red-600">
            <div className="flex items-center">
                <BiSolidSquare style={{ color: '#65DAFF' }} className="relative text-4xl rotate-45"></BiSolidSquare>
                <h3 style={{ color: '#113C49' }} className="absolute text-xl font-bold ml-2">Skilline</h3>
            </div>
            <div className="md:flex space-x-5 space-y-5 md:space-y-0">
                <button style={{ color: '#252641' }} className="text-lg">Home</button>
            
                <button style={{ color: '#252641' }} className="text-lg">Careers</button>
          
                <button style={{ color: '#252641' }} className="text-lg">Blog</button>
                
                <button style={{ color: '#252641' }} className="text-lg">About Us</button>
                <br />
                <button className="bg-white text-xl  px-8 py-2 rounded-3xl">Login</button>
                <button style={{ backgroundColor: '#F48C06' }} className="text-white text-xl px-8 py-2 rounded-3xl">Sign Up</button>
            </div>
        </div>
        </div>
    );
};

export default Header;