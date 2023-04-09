import React from 'react';

const Home = () => {
    return (
        <>
            <div className='bg-[#F4F4F4] pt-4 px-3'>
                <div className='md:flex justify-center items-center gap-6 container mx-auto pt-8'>
                    <div className=''>
                        <h1 className='text-5xl md:text-7xl font-bold md:leading-[90px]'>Let Today<br /> Be The Start Of <span className='color-gradient'> Something New!</span></h1>
                        <p className='color-gray my-8 font-medium w-[90%] md:w-[80%]'>Explore the opportunities of jobs in thousands with all the provided information. A future you want. Just find it. Can manage all your job application, start to finish.</p>
                        <button className='btn bg-color-gradient'>Get Stated</button>
                    </div>
                    <div>
                        <img src="../../public/All Images/person.png" alt="" />
                    </div>
                </div>
            </div>
            <section className='my-32'>
                <div className='text-center my-8'>
                    <h1 className='text-5xl font-bold my-5'>Job Category List</h1>
                    <p className='color-gray font-medium'>Explore to build your future with thousands of job opportunities</p>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div className='bg-[#F4F4F4] px-10 py-8 rounded-lg'>
                        <div className='bg-job-category w-fit p-4'>
                            <img src="../../public/Icons/accounts 1.png" alt="" />
                        </div>
                        <h4 className='text-2xl font-bold mt-8 mb-3'>Account & Finance</h4>
                        <p className='color-gray font-medium'>300 Jobs Available</p>
                    </div>
                    <div className='bg-[#F4F4F4] px-10 py-8 rounded-lg'>
                        <div className='bg-job-category w-fit p-4'>
                            <img src="../../public/Icons/accounts 1.png" alt="" />
                        </div>
                        <h4 className='text-2xl font-bold mt-8 mb-3'>Creative Design</h4>
                        <p className='color-gray font-medium'>100+ Jobs Available</p>
                    </div>
                    <div className='bg-[#F4F4F4] px-10 py-8 rounded-lg'>
                        <div className='bg-job-category w-fit p-4'>
                            <img src="../../public/Icons/accounts 1.png" alt="" />
                        </div>
                        <h4 className='text-2xl font-bold mt-8 mb-3'>Marketing & Sales</h4>
                        <p className='color-gray font-medium'>150 Jobs Available</p>
                    </div>
                    <div className='bg-[#F4F4F4] px-10 py-8 rounded-lg'>
                        <div className='bg-job-category w-fit p-4'>
                            <img src="../../public/Icons/accounts 1.png" alt="" />
                        </div>
                        <h4 className='text-2xl font-bold mt-8 mb-3'>Engineering Job</h4>
                        <p className='color-gray font-medium'>224 Jobs Available</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;