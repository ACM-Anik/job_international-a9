import React, { useContext, useState } from 'react';
import { FeaturedJobsContext } from '../App';

const JobDetails = () => {
    const featuredJobs = useContext(FeaturedJobsContext);

    const [jobDetails, setJobDetails] = useState([featuredJobs]);



    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>Job Details</h1>
            <div>
                <div>
                   <h3>ok</h3>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;