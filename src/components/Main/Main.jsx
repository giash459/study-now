import image from '../../assets/images/Group 17.png'

const Main = () => {
    return (
        <div className='max-w-full mx-auto'>
            <div className='lg:flex justify-between gap-10 m-20 space-y-5 md:space-y-0 bg-white'>
                <div className='lg:w-1/2'>
                    <div className='lg:mt-20 flex'>
                    <div style={{ backgroundColor: '#F4B767' }} className='w-24 md:w-12 h-10 lg:h-12 rounded-full  position-relative'>
                        
                        </div>
                        <h2 style={{ color: '#2F327D' }} className='text-4xl font-medium position-absolute -ml-10'>Everything you can do in a physical <br /> classroom, <span style={{ color: '#F48C06' }}>you can do with Skilline</span></h2>
                    </div>
                    <div className='my-5 flex'>
                    <p style={{ color: '#696984' }} className='text-2xl font-normal position-absolute'>Skilline’s school management software helps traditional <br /> and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.</p>
                    <div style={{ backgroundColor: '#F4B767' }} className='w-14 h-5 md:w-5 rounded-full  position-relative mt-16'>
                        
                        </div>
                    </div>
                    <button style={{ color: '#696984' }} className='underline text-xl font-normal lg:mt-5'>Learn more</button>
                </div>
                <div className='lg:w-1/2'>
                    <img className='' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Main;
