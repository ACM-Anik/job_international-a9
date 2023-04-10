import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobCategory = () => {
    const jobCategoryList = useLoaderData();

    return (
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
    );
};

export default JobCategory;