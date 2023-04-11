import React, { useContext, useEffect, useState } from 'react';
import { FeaturedJobsContext } from '../App';
import { getAppliedJobs } from './utilities/fakeDB';

const AppliedJobs = () => {
    const featuredJobs = useContext(FeaturedJobsContext);

    const [storedJobs, setStoredJobs] = useState([]);
    console.log(storedJobs)

    useEffect(() => {
        const storedAppliedJobs = getAppliedJobs();
        const savedAppliedJobs = [];

        // Step 1: Get the ID of the added product--
        for (const id in storedAppliedJobs) {
            // Step 2: Get the products state by using ID--
            const addedJobs = featuredJobs.find(job => job.id === id);
            if (addedJobs) {
                // Step3: Get quantity of the product to add--
                const quantity = storedAppliedJobs[id];
                addedJobs.quantity = quantity;
                // Step 4: Add the added product to saved Cart--
                savedAppliedJobs.push(addedJobs);
            }
        }
        setStoredJobs(savedAppliedJobs);
    }, [featuredJobs])

    // let newStoredJobs = [];
    //     const exists = storedJobs?.find(singleJob => singleJob?.id == id);
    //     // console.log(exists)
    //     if (!exists) { 
    //         newStoredJobs = [...storedJobs, exists];
    //     }
    //     setStoredJobs(newStoredJobs);


    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>
                Applied Jobs
            </h1>
            <div className='container mx-auto'>
                <div className="dropdown dropdown-top dropdown-end flex justify-end">
                    <label tabIndex={0} className="btn btn-sm bg-color-gradient m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </div>
                <div>
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;