import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCategoryList = useLoaderData();
    console.log(jobCategoryList);

    return (
        <>
            <div className='bg-[#F4F4F4] pt-4 px-3'>
                <div className='md:flex justify-center items-center gap-6 container mx-auto pt-8'>
                    <div className=''>
                        <h1 className='text-5xl md:text-7xl font-bold md:leading-[90px]'>Let Today<br /> Be The Start Of <span className='color-gradient'> Something New!</span></h1>
                        <p className='color-gray my-8 font-medium w-[90%] md:w-[80%]'>Explore the opportunities of jobs in thousands with all the provided information. A future you want. Just find it. Can manage all your job application, start to finish.</p>
                        <button className='btn bg-color-gradient'>Get Stated</button>
                    </div>
                    <div className=' my-6 md:my-0'>
                        <img src="../../public/All Images/person.png" alt="" />
                    </div>
                </div>
            </div>
            <section className='my-32 container mx-auto'>
                <div className='text-center my-8'>
                    <h1 className='text-5xl font-bold my-5'>Job Category List</h1>
                    <p className='color-gray font-medium'>Explore job category list to build your future with thousands of job opportunities</p>
                </div>
                <div className='md:flex md:flex-col-2 justify-center items-center gap-6'>
                    {
                        jobCategoryList.map(singleJob => (
                            <div key={singleJob.id} className='bg-[#F4F4F4] px-10 py-8 rounded-lg m-6 md:m-0 md:w-80'>
                                <div className='bg-job-category w-fit p-4'>
                                    <img src={singleJob.logo} alt="job category logo" />
                                </div>
                                <h4 className='text-xl font-bold mt-8 mb-3'>{singleJob.job_name}</h4>
                                <p className='color-gray font-medium'>{singleJob.jobs_available} jobs available</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='my-32 container mx-auto'>
                <div className='text-center my-8'>
                    <h1 className='text-5xl font-bold my-5'>Featured Jobs</h1>
                    <p className='color-gray font-medium'>Explore Featured jobs section to build your future with thousands of job opportunities</p>
                </div>
                
            </section>
        </>
    );
};

export default Home;