import news from '../../assets/images/Group 50.png';
import news1 from '../../assets/images/Group 47.png';
import news2 from '../../assets/images/Group 48.png';
import news3 from '../../assets/images/Group 49.png';

const Lastest = () => {
    return (
        <div className="max-w-full mx-auto">
            <div className='m-20'>
                <h2  style={{ color: '#2F327D' }} className="flex justify-center text-4xl font-bold my-5">Lastest News and Resources</h2>
                <p  style={{ color: '#696984' }} className="flex justify-center text-2xl font-normal">See the developments that have occurred to Skillines in the world</p>
                <div className='md:flex gap-10 my-10'>
                    <div>
                        <img src={news} alt="" />
                    </div>
                    <div>
                        <div>
                            <img src={news1} alt="" />
                        </div>
                        <div className='my-10'>
                            <img src={news2} alt="" />
                        </div>
                        <div>
                            <img src={news3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lastest;