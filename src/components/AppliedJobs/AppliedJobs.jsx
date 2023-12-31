import React, { useContext, useEffect, useState } from 'react';
import { FeaturedJobsContext } from '../../App';
import { getAppliedJobs } from '../utilities/fakeDB';
import SingleAppliedJobs from './SingleAppliedJobs';


const AppliedJobs = () => {
    const featuredJobs = useContext(FeaturedJobsContext);
    const [storedJobs, setStoredJobs] = useState([]);

    useEffect(() => {
        const storedAppliedJobs = getAppliedJobs();
        let savedAppliedJobs = [];

        for (const id in storedAppliedJobs) {
            const addedJobs = featuredJobs.find(job => job.id == id);
            if (addedJobs) {
                savedAppliedJobs.push(addedJobs);
            }
        }
        setStoredJobs(savedAppliedJobs);
    }, [featuredJobs]);



    // Handle to Filter By:--
    const [selectedOption, setSelectedOption] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState([])

    const handleToFilter = (option) => {
        const filtered = storedJobs.filter(selected => selected.placement === option);

        if(filtered) {
            setFilteredJobs(filtered);
            setSelectedOption(true);
        }

    }



    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>
                Applied Jobs
            </h1>
            <div className='container mx-auto'>
                <div className="dropdown dropdown-top dropdown-end flex justify-end my-4">
                    <label tabIndex={0} className="btn btn-sm bg-color-gradient m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => handleToFilter("Remote")}>Remote</a></li>
                        <li ><a onClick={() => handleToFilter("Onsite")}>Onsite</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-8'>
                    {
                        selectedOption ?
                            filteredJobs.map(singleStoredJobs =>
                                <SingleAppliedJobs
                                    singleStoredJobs={singleStoredJobs}
                                    key={singleStoredJobs.id}
                                ></SingleAppliedJobs>)
                            :
                            storedJobs.map(singleStoredJobs =>
                                <SingleAppliedJobs
                                    singleStoredJobs={singleStoredJobs}
                                    key={singleStoredJobs.id}
                                ></SingleAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;