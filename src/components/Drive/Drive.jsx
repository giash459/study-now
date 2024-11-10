import image2 from '../../assets/images/image 2.png'
import image5 from '../../assets/images/image 5.png'
import image3 from '../../assets/images/image 3.png'
import image6 from '../../assets/images/image 6.png'

const Drive = () => {
    return (
        <div className='max-w-full mx-auto'>
            <div className='mx-20 lg:flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:w-1/2'>
                    <div>
                        <img className='' src={image2} alt="" />
                    </div>
                    <div>
                        <img className='' src={image5} alt="" />
                    </div>
                    <div>
                        <img className='' src={image3} alt="" />
                    </div>
                    <div>
                        <img className='' src={image6} alt="" />
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <div className='flex items-center gap-5'>
                        <p style={{ width: '100px', borderBottom: '1px solid #525596' }}></p>
                        <span style={{ color: '#525596' }} className=''>INTEGRATIONS</span>
                    </div>
                    <h3 style={{ color: '#2F327D' }} className='text-4xl font-bold my-7'>200+ educational tools and <br /> platform <span style={{ color: '#F3AC50' }}>integrations</span></h3>
                    <p style={{ color: '#696984' }} className='text-2xl font-normal'>Schoology has every tool your classroom needs and comes <br /> pre-integrated with more than 200+ tools, student information <br /> systems (SIS), and education platforms.</p>
                    <button style={{ color: '#F48C06', border: '1px solid #F48C06' }} className='border rounded-full px-4 py-2 my-5'>See All Integrations</button>
                </div>
            </div>
        </div>
    );
};

export default Drive;
