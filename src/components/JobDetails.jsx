import React, { useContext, useEffect, useState } from 'react';
import { FeaturedJobsContext } from '../App';
import { useParams } from 'react-router-dom';
import { addToDB, getAppliedJobs } from './utilities/fakeDB';

const JobDetails = () => {
    const { id } = useParams();
    const featuredJobs = useContext(FeaturedJobsContext);
    const [featuredJobsData, setFeaturedJobsData] = useState({});

    useEffect(() => {
        const exists = featuredJobs.find(singleData => singleData.id == id);
        if (exists) {
            setFeaturedJobsData(exists || {});
        }
        // console.log(exists);
    }, [featuredJobs]);

    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, title } = featuredJobsData;


    // To set data in localStorage :--
    const handleToSetLocalStorage = (id) => {
        addToDB(id);
        
    }


    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>
                Job Details
            </h1>
            <div className='container mx-auto grid grid-cols-6 gap-6'>
                <div className='col-span-4 p-4'>
                    <h3 className='font-medium text-base color-gray mb-6'><span className='text-xl text-black'>Job Description:</span> {job_description}</h3>
                    <h3 className='font-medium text-base color-gray my-6'><span className='text-xl text-black'>Job Responsibility: </span> {job_responsibility}</h3>
                    <h3 className='font-medium text-base color-gray my-6'><span className='text-xl text-black'>Educational Requirements:</span> {educational_requirements}</h3>
                    <h3 className='font-medium text-base color-gray my-6'><span className='text-xl text-black'>Experiences:</span> {experiences}</h3>
                </div>
                <div className='rounded p-4 col-span-2 m-1'>
                    <div className='bg-job-details p-6 rounded'>

                        <h3 className='text-xl font-bold my-3 border-b-2 pb-4'>Job Details</h3>
                        <h5 className='text-xl font-medium text-[#474747] my-3'>Salary: <span className='text-base color-gray'>{salary}</span></h5>
                        <h5 className='text-xl font-medium text-[#474747] my-3'>Job Title: <span className='text-base color-gray'>{title}</span></h5>

                        <h3 className='text-xl font-bold my-3 border-b-2 py-4'>Contract Info</h3>
                        <h5 className='text-xl font-medium text-[#474747] my-3'>Phone: <span className='text-base color-gray'>{contact_information?.phone}</span></h5>
                        <h5 className='text-xl font-medium text-[#474747] my-3'>Email: <span className='text-base color-gray'>{contact_information?.email}</span></h5>
                        <h5 className='text-xl font-medium text-[#474747] my-3'>Address: <span className='text-base color-gray'>{contact_information?.address}</span></h5>
                    </div>
                    <button onClick={() => handleToSetLocalStorage(id)} className='btn bg-color-gradient w-full my-6'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;