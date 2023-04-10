import React, { useContext } from 'react';
import { FeaturedJobsContext } from '../App';

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

    let newStoredJobs = [];
        const exists = storedJobs?.find(singleJob => singleJob?.id == id);
        // console.log(exists)
        if (!exists) { 
            newStoredJobs = [...storedJobs, exists];
        }
        setStoredJobs(newStoredJobs);


    return (
        <div>
            <h3>Applied Jobs</h3>
        </div>
    );
};

export default AppliedJobs;